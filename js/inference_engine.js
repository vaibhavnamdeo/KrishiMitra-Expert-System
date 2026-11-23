/**
 * KrishiMitra - Inference Engine Module
 * Implements Forward Chaining, Backward Chaining, and Certainty Factor (CF) evidence combination.
 */

class InferenceEngine {
  constructor(knowledgeBase, workingMemory) {
    this.knowledgeBase = knowledgeBase || [];
    this.wm = workingMemory;
  }

  setKnowledgeBase(kb) {
    this.knowledgeBase = kb;
  }

  /**
   * Classic MYCIN Certainty Factor Combination Formula for independent positive evidence:
   * CF_combined(CF1, CF2) = CF1 + CF2 * (1 - CF1)
   */
  combineCF(cf1, cf2) {
    const c1 = Math.max(0.0, Math.min(1.0, Number(cf1)));
    const c2 = Math.max(0.0, Math.min(1.0, Number(cf2)));
    return c1 + c2 * (1.0 - c1);
  }

  /**
   * Combines an array of certainty factors sequentially
   */
  combineMultipleCF(cfArray) {
    if (!cfArray || cfArray.length === 0) return 0.0;
    if (cfArray.length === 1) return cfArray[0];
    return cfArray.reduce((acc, curr) => this.combineCF(acc, curr));
  }

  /**
   * Retrieves rules relevant to the active crop
   */
  getCropRules(cropId) {
    const crop = cropId || this.wm.crop;
    if (!crop) return [];
    return this.knowledgeBase.filter(rule => rule.crop === crop);
  }

  /**
   * Evaluates a single rule's condition satisfaction against Working Memory
   */
  evaluateRuleConditions(rule) {
    const conditions = rule.conditions || [];
    const conditionStatus = [];
    let confirmedCount = 0;
    let anyFalse = false;
    let anyUnknown = false;
    let minConditionCF = 1.0;

    for (const condId of conditions) {
      if (this.wm.hasFact(condId)) {
        const fact = this.wm.getFact(condId);
        conditionStatus.push({
          conditionId: condId,
          known: true,
          value: fact.value,
          cf: fact.cf,
          skipped: false
        });

        if (fact.value && fact.cf > 0.0) {
          confirmedCount++;
          minConditionCF = Math.min(minConditionCF, fact.cf);
        } else {
          anyFalse = true;
          minConditionCF = 0.0;
        }
      } else if (this.wm.isSkipped && this.wm.isSkipped(condId)) {
        // Condition was skipped/unsure: unconfirmed, but not proven false
        anyUnknown = true;
        conditionStatus.push({
          conditionId: condId,
          known: false,
          value: null,
          cf: 0.0,
          skipped: true
        });
      } else {
        anyUnknown = true;
        conditionStatus.push({
          conditionId: condId,
          known: false,
          value: null,
          cf: 0.0,
          skipped: false
        });
      }
    }

    const total = conditions.length || 1;
    let premiseCF = 0.0;
    let isSatisfied = false;
    const coverage = confirmedCount / total;
    const isFullyConfirmed = !anyFalse && confirmedCount === total && confirmedCount > 0;

    // Rule fires only when at least 2 symptoms are confirmed, or when coverage is at least 50%
    const isFirable = !anyFalse && confirmedCount > 0 && (confirmedCount >= 2 || coverage >= 0.5);
    if (isFirable) {
      isSatisfied = true;
      if (confirmedCount === total) {
        premiseCF = minConditionCF;
      } else {
        // Partial evidence: premise CF = minConditionCF * coverage
        premiseCF = Number((minConditionCF * coverage).toFixed(4));
      }
    }

    const ruleCF = Number(rule.cf) || 0.8;
    const derivedCF = isSatisfied ? Number((premiseCF * ruleCF).toFixed(4)) : 0.0;

    return {
      ruleId: rule.id,
      conclusion: rule.conclusion,
      diseaseName: rule.disease_name,
      ruleCF,
      premiseCF,
      derivedCF,
      conditions: conditionStatus,
      isSatisfied,
      isFullyConfirmed,
      isDisproven: anyFalse,
      isPending: anyUnknown && !anyFalse
    };
  }

  /* =========================================================================
   * FORWARD CHAINING (Data-Driven Reasoning)
   * ========================================================================= */

  /**
   * Executes Forward Chaining on the current Working Memory
   * Derives all firing rules, computes combined CF per disease, and ranks conclusions.
   */
  runForwardChaining() {
    const cropRules = this.getCropRules();
    const evaluationResults = [];
    const firedRules = [];
    const diseaseGroups = new Map();

    this.wm.rulesEvaluated = [];
    this.wm.rulesFired = [];

    // Evaluate each rule
    for (const rule of cropRules) {
      const evalResult = this.evaluateRuleConditions(rule);
      evaluationResults.push(evalResult);

      const fired = evalResult.isSatisfied && evalResult.derivedCF > 0;
      this.wm.recordRuleEvaluation({
        ...evalResult,
        rule,
        fired
      });

      if (fired) {
        firedRules.push({
          rule,
          evalResult
        });

        const diseaseKey = rule.conclusion;
        if (!diseaseGroups.has(diseaseKey)) {
          diseaseGroups.set(diseaseKey, {
            diseaseId: diseaseKey,
            diseaseName: rule.disease_name,
            crop: rule.crop,
            treatment: rule.treatment,
            prevention: rule.prevention,
            firedRules: [],
            derivedCFs: []
          });
        }
        const group = diseaseGroups.get(diseaseKey);
        group.firedRules.push({ rule, evalResult });
        group.derivedCFs.push(evalResult.derivedCF);
      }
    }

    // Combine evidence for each disease
    const diagnoses = [];
    diseaseGroups.forEach((group, diseaseId) => {
      const combinedCF = this.combineMultipleCF(group.derivedCFs);

      // Select rule with highest derived CF for treatment and prevention
      let bestFiredRule = group.firedRules[0];
      for (const fr of group.firedRules) {
        if (fr.evalResult.derivedCF > bestFiredRule.evalResult.derivedCF) {
          bestFiredRule = fr;
        }
      }

      const treatment = (bestFiredRule && bestFiredRule.rule.treatment) || group.treatment;
      const prevention = (bestFiredRule && bestFiredRule.rule.prevention) || group.prevention;

      diagnoses.push({
        diseaseId,
        diseaseName: (bestFiredRule && bestFiredRule.rule.disease_name) || group.diseaseName,
        crop: group.crop,
        treatment,
        prevention,
        combinedCF: Number(combinedCF.toFixed(4)),
        percentage: Math.round(combinedCF * 100),
        firedRules: group.firedRules,
        derivedCFs: group.derivedCFs
      });
    });

    // Sort descending by Certainty Factor
    diagnoses.sort((a, b) => b.combinedCF - a.combinedCF);

    return {
      mode: 'forward',
      diagnoses,
      top3: diagnoses.slice(0, 3),
      firedRulesCount: firedRules.length,
      evaluatedRulesCount: evaluationResults.length
    };
  }

  /**
   * Forward Chaining: Finds the next most informative symptom question.
   * Ranks unasked symptoms by frequency across rules that are still viable (not yet disproven).
   */
  getNextForwardQuestion() {
    const cropRules = this.getCropRules();
    const symptomFrequency = new Map();
    const symptomRuleMap = new Map();

    for (const rule of cropRules) {
      const evalResult = this.evaluateRuleConditions(rule);
      // Only consider rules that haven't failed yet
      if (!evalResult.isDisproven) {
        for (const cond of evalResult.conditions) {
          const isSkipped = this.wm.isSkipped && this.wm.isSkipped(cond.conditionId);
          if (!cond.known && !isSkipped) {
            const count = symptomFrequency.get(cond.conditionId) || 0;
            symptomFrequency.set(cond.conditionId, count + 1);

            if (!symptomRuleMap.has(cond.conditionId)) {
              symptomRuleMap.set(cond.conditionId, []);
            }
            symptomRuleMap.get(cond.conditionId).push(rule);
          }
        }
      }
    }

    if (symptomFrequency.size === 0) {
      return null; // All relevant symptoms answered or skipped
    }

    // Sort symptoms by frequency descending (ranks unasked symptoms by frequency across viable rules)
    let bestSymptomId = null;
    let maxFreq = -1;
    symptomFrequency.forEach((freq, symptomId) => {
      if (freq > maxFreq) {
        maxFreq = freq;
        bestSymptomId = symptomId;
      }
    });

    const relatedRules = symptomRuleMap.get(bestSymptomId) || [];

    return {
      symptomId: bestSymptomId,
      frequency: maxFreq,
      candidateRules: relatedRules,
      targetDiseases: [...new Set(relatedRules.map(r => r.conclusion))]
    };
  }

  /* =========================================================================
   * BACKWARD CHAINING (Goal-Driven Reasoning)
   * ========================================================================= */

  /**
   * Returns all unique disease goals possible for the selected crop
   */
  getGoalHypothesesForCrop(cropId) {
    const cropRules = this.getCropRules(cropId);
    const goals = new Map();
    for (const rule of cropRules) {
      if (!goals.has(rule.conclusion)) {
        goals.set(rule.conclusion, {
          diseaseId: rule.conclusion,
          diseaseName: rule.disease_name,
          rules: []
        });
      }
      goals.get(rule.conclusion).rules.push(rule);
    }
    return Array.from(goals.values());
  }

  /**
   * Sets the active goal hypothesis in Backward Chaining mode
   */
  setActiveGoal(goalDiseaseId) {
    this.wm.activeHypothesis = goalDiseaseId;
  }

  /**
   * Backward Chaining: Selects the next targeted symptom query needed to
   * verify or refute the active goal hypothesis.
   */
  getNextBackwardQuestion() {
    const cropRules = this.getCropRules();
    let candidateGoals = this.getGoalHypothesesForCrop();

    let currentGoalId = this.wm.activeHypothesis;

    while (candidateGoals.length > 0) {
      if (!currentGoalId || this.isGoalResolved(currentGoalId)) {
        currentGoalId = this.findNextViableGoal(candidateGoals);
        this.wm.activeHypothesis = currentGoalId;
      }

      if (!currentGoalId) {
        return null; // No more viable goals to test
      }

      const goalRules = cropRules.filter(r => r.conclusion === currentGoalId);
      for (const rule of goalRules) {
        const evalResult = this.evaluateRuleConditions(rule);
        if (!evalResult.isDisproven) {
          for (const cond of evalResult.conditions) {
            const isSkipped = this.wm.isSkipped && this.wm.isSkipped(cond.conditionId);
            if (!cond.known && !isSkipped) {
              return {
                symptomId: cond.conditionId,
                goalDiseaseId: currentGoalId,
                ruleId: rule.id,
                rule,
                remainingConditionsCount: evalResult.conditions.filter(c => !c.known && !(this.wm.isSkipped && this.wm.isSkipped(c.conditionId))).length
              };
            }
          }
        }
      }

      // If we reach here, currentGoalId has no remaining testable conditions
      candidateGoals = candidateGoals.filter(g => g.diseaseId !== currentGoalId);
      currentGoalId = null;
    }

    return null;
  }

  /**
   * Checks if a goal hypothesis has been either proven or completely disproven / exhausted
   */
  isGoalResolved(goalDiseaseId) {
    const goalRules = this.getCropRules().filter(r => r.conclusion === goalDiseaseId);
    let hasViablePendingRule = false;

    for (const rule of goalRules) {
      const evalResult = this.evaluateRuleConditions(rule);
      if (evalResult.isFullyConfirmed) {
        return true; // Goal fully proven!
      }
      if (!evalResult.isDisproven) {
        const hasUnaskedConditions = evalResult.conditions.some(c => !c.known && !(this.wm.isSkipped && this.wm.isSkipped(c.conditionId)));
        if (hasUnaskedConditions) {
          hasViablePendingRule = true;
        }
      }
    }

    return !hasViablePendingRule; // All rules satisfied or no more testable conditions
  }

  findNextViableGoal(candidateGoals) {
    for (const goal of candidateGoals) {
      if (!this.isGoalResolved(goal.diseaseId)) {
        return goal.diseaseId;
      }
    }
    return null;
  }

  /**
   * Backward Chaining: evaluates final result of goal verification
   */
  runBackwardChaining() {
    // Under the hood, once evidence is collected via goal-directed questions,
    // evaluate all confirmed hypotheses with CF combination
    const forwardResult = this.runForwardChaining();
    return {
      ...forwardResult,
      mode: 'backward',
      activeHypothesis: this.wm.activeHypothesis
    };
  }
}
