/**
 * KrishiMitra - Explanation Facility Module
 * Generates transparent reasoning traces for:
 * 1. "Why was this asked?" (during diagnostic questions)
 * 2. "How did you reach this conclusion?" (post-diagnosis audit trail with CF calculations)
 */

class ExplanationFacility {
  constructor(inferenceEngine, workingMemory) {
    this.engine = inferenceEngine;
    this.wm = workingMemory;
  }

  /**
   * Generates the "Why was this asked?" explanation for a symptom question
   */
  generateWhyExplanation(symptomId, contextInfo) {
    const lang = I18N.currentLang;
    const symptomMeta = SYMPTOMS_METADATA[symptomId] || {
      label: { en: symptomId, hi: symptomId }
    };
    const symptomName = symptomMeta.label[lang] || symptomMeta.label.en;
    const mode = this.wm.mode;

    const cropRules = this.engine.getCropRules();
    const relevantRules = cropRules.filter(r => r.conditions.includes(symptomId));

    if (mode === 'backward') {
      const activeGoal = this.wm.activeHypothesis;
      const targetRule = contextInfo && contextInfo.rule ? contextInfo.rule : relevantRules.find(r => r.conclusion === activeGoal) || relevantRules[0];
      const goalDiseaseName = targetRule && targetRule.disease_name ? (targetRule.disease_name[lang] || targetRule.disease_name.en) : activeGoal;

      const conditionsTrace = (targetRule ? targetRule.conditions : []).map(cid => {
        const meta = SYMPTOMS_METADATA[cid];
        const name = meta ? (meta.label[lang] || meta.label.en) : cid;
        const fact = this.wm.getFact(cid);
        let status = 'pending';
        let statusText = lang === 'hi' ? 'जांच जारी' : 'Checking now';

        if (cid === symptomId) {
          status = 'current';
          statusText = lang === 'hi' ? '👉 वर्तमान प्रश्न' : '👉 Current Question';
        } else if (fact) {
          status = fact.value ? 'met' : 'failed';
          statusText = fact.value 
            ? (lang === 'hi' ? '✅ हाँ (पुष्टि हुई)' : '✅ Confirmed Present')
            : (lang === 'hi' ? '❌ नहीं (अनुपस्थित)' : '❌ Not Present');
        } else if (this.wm.isSkipped && this.wm.isSkipped(cid)) {
          status = 'skipped';
          statusText = lang === 'hi' ? '⏭️ छोड़ा गया' : '⏭️ Skipped';
        } else {
          statusText = lang === 'hi' ? '⏳ लंबित' : '⏳ Pending';
        }

        return { id: cid, name, status, statusText };
      });

      return {
        mode: 'backward',
        symptomId,
        symptomName,
        goalDiseaseName,
        targetRuleId: targetRule ? targetRule.id : 'N/A',
        targetRuleCF: targetRule ? Math.round(targetRule.cf * 100) : 0,
        conditionsTrace,
        explanationText: lang === 'hi'
          ? `बैकवर्ड चेनिंग मोड: प्रणाली वर्तमान में लक्ष्य परिकल्पना <strong>"${goalDiseaseName}"</strong> की पुष्टि करने का प्रयास कर रही है। नियम <code>${targetRule ? targetRule.id : ''}</code> के अनुसार, इस बीमारी के निष्कर्ष तक पहुँचने के लिए इस लक्षण की उपस्थिति जानना आवश्यक है। यदि आप 'हाँ' चुनते हैं, तो इस रोग की सटीकता दर ${targetRule ? Math.round(targetRule.cf * 100) : ''}% तक बढ़ जाएगी।`
          : `Backward Chaining Mode: The system is currently testing the goal hypothesis: <strong>"${goalDiseaseName}"</strong>. According to Rule <code>${targetRule ? targetRule.id : ''}</code>, establishing this symptom is a necessary premise. Answering 'Yes' will confirm this evidence with a potential certainty factor of ${targetRule ? Math.round(targetRule.cf * 100) : ''}%.`
      };
    }

    // Forward Chaining Mode
    const targetDiseases = [...new Set(relevantRules.map(r => {
      const nameObj = r.disease_name;
      return nameObj ? (nameObj[lang] || nameObj.en) : r.conclusion;
    }))];

    const ruleDetails = relevantRules.map(r => {
      const dName = r.disease_name ? (r.disease_name[lang] || r.disease_name.en) : r.conclusion;
      const metConditions = r.conditions.filter(c => this.wm.hasFact(c) && this.wm.getFact(c).value);
      return {
        id: r.id,
        diseaseName: dName,
        cf: Math.round(r.cf * 100),
        conditionsCount: r.conditions.length,
        metCount: metConditions.length
      };
    });

    return {
      mode: 'forward',
      symptomId,
      symptomName,
      targetDiseases,
      ruleDetails,
      rulesCount: relevantRules.length,
      explanationText: lang === 'hi'
        ? `फॉरवर्ड चेनिंग मोड: यह लक्षण नॉलेज बेस के <strong>${relevantRules.length} नियमों</strong> में प्रमुख शर्त है, जो निम्न रोगों से संबंधित हैं: <strong>${targetDiseases.join(', ')}</strong>। आपके उत्तर से सिस्टम असंबंधित संभावनाओं को तुरंत हटाकर सबसे सटीक निदान की ओर बढ़ेगा।`
        : `Forward Chaining Mode: This symptom is a key diagnostic condition across <strong>${relevantRules.length} active rules</strong> evaluating: <strong>${targetDiseases.join(', ')}</strong>. Answering this immediately narrows down conflicting hypotheses and computes evidence certainty.`
    };
  }

  /**
   * Generates the comprehensive "How did you reach this conclusion?" explanation
   */
  generateHowExplanation(diagnoses) {
    const lang = I18N.currentLang;
    const cropRules = this.engine.getCropRules();

    // 1. Working Memory facts answered
    const answeredFacts = this.wm.getAllAnsweredSymptoms().map(item => {
      const meta = SYMPTOMS_METADATA[item.symptomId];
      const name = meta ? (meta.label[lang] || meta.label.en) : item.symptomId;
      const icon = meta ? meta.icon : '📌';
      return {
        symptomId: item.symptomId,
        icon,
        name,
        value: item.value,
        cf: item.cf,
        cfPercent: Math.round(item.cf * 100),
        statusText: item.skipped
          ? (lang === 'hi' ? '⏭️ छोड़ा गया / पता नहीं' : '⏭️ Skipped / Unsure')
          : (item.value 
            ? (item.cf >= 0.9 ? (lang === 'hi' ? 'हाँ (निश्चित)' : 'Yes (Definite)') : (lang === 'hi' ? 'हाँ (हल्का/शायद)' : 'Yes (Mild/Likely)'))
            : (lang === 'hi' ? 'नहीं (अनुपस्थित)' : 'No (Absent)'))
      };
    });

    // 2. Fired Rules and CF combination math per diagnosis
    const diagnosisTraces = (diagnoses || []).map(diag => {
      const firedRuleList = (diag.firedRules || []).map(item => {
        const r = item.rule;
        const evalRes = item.evalResult;

        const conditionBreakdown = r.conditions.map(cid => {
          const meta = SYMPTOMS_METADATA[cid];
          const cName = meta ? (meta.label[lang] || meta.label.en) : cid;
          const fact = this.wm.getFact(cid);
          return {
            id: cid,
            name: cName,
            satisfied: fact ? fact.value : false,
            cf: fact ? fact.cf : 0.0
          };
        });

        return {
          id: r.id,
          conditions: conditionBreakdown,
          ruleCF: r.cf,
          ruleCFPercent: Math.round(r.cf * 100),
          premiseCF: evalRes.premiseCF,
          derivedCF: evalRes.derivedCF,
          derivedCFPercent: Math.round(evalRes.derivedCF * 100)
        };
      });

      // Mathematical combination step string
      let mathTrace = "";
      const cfs = diag.derivedCFs || [];
      if (cfs.length === 0) {
        mathTrace = "N/A";
      } else if (cfs.length === 1) {
        mathTrace = `CF_final = CF(Rule 1) = ${cfs[0] * 100}%`;
      } else {
        let runningCF = cfs[0];
        const steps = [];
        for (let i = 1; i < cfs.length; i++) {
          const next = cfs[i];
          const combined = runningCF + next * (1 - runningCF);
          steps.push(`Step ${i}: ${runningCF.toFixed(3)} + ${next.toFixed(3)} × (1 - ${runningCF.toFixed(3)}) = ${combined.toFixed(3)} (${Math.round(combined * 100)}%)`);
          runningCF = combined;
        }
        mathTrace = steps.join("<br>");
      }

      return {
        diseaseId: diag.diseaseId,
        diseaseName: diag.diseaseName ? (diag.diseaseName[lang] || diag.diseaseName.en) : diag.diseaseId,
        finalCF: diag.combinedCF,
        finalPercentage: diag.percentage,
        firedRules: firedRuleList,
        mathTrace
      };
    });

    // 3. Rejected / Disqualified Rules
    const rejectedRules = [];
    for (const rule of cropRules) {
      const evalRes = this.engine.evaluateRuleConditions(rule);
      if (!evalRes.isSatisfied) {
        const failedConditions = evalRes.conditions.filter(c => c.known && !c.value).map(c => {
          const meta = SYMPTOMS_METADATA[c.conditionId];
          return meta ? (meta.label[lang] || meta.label.en) : c.conditionId;
        });

        const missingConditions = evalRes.conditions.filter(c => !c.known).map(c => {
          const meta = SYMPTOMS_METADATA[c.conditionId];
          return meta ? (meta.label[lang] || meta.label.en) : c.conditionId;
        });

        const dName = rule.disease_name ? (rule.disease_name[lang] || rule.disease_name.en) : rule.conclusion;

        rejectedRules.push({
          id: rule.id,
          diseaseName: dName,
          failedConditions,
          missingConditions,
          reason: failedConditions.length > 0
            ? (lang === 'hi' ? `शर्तें गलत पाई गईं: ${failedConditions.join(', ')}` : `Conditions refuted: ${failedConditions.join(', ')}`)
            : (lang === 'hi' ? `पर्याप्त जानकारी नहीं: ${missingConditions.join(', ')}` : `Conditions unconfirmed: ${missingConditions.join(', ')}`)
        });
      }
    }

    return {
      answeredFacts,
      diagnosisTraces,
      rejectedRules: rejectedRules.slice(0, 8), // Show top rejected for clarity
      totalCropRules: cropRules.length,
      firedRulesCount: diagnosisTraces.reduce((sum, d) => sum + d.firedRules.length, 0)
    };
  }
}
