/**
 * KrishiMitra - Working Memory Module
 * Stores current session facts, asserted symptoms, confidence values,
 * active hypotheses, and execution audit history.
 */

class WorkingMemory {
  constructor() {
    this.crop = null;
    this.mode = 'forward'; // 'forward' | 'backward'
    this.facts = new Map(); // symptomId -> { value: boolean, cf: number, timestamp: number }
    this.skippedSymptoms = new Set(); // Set of symptomIds skipped by user
    this.activeHypothesis = null;
    this.questionHistory = []; // { symptomId, response, whyContext }
    this.rulesFired = []; // list of rules successfully executed
    this.rulesEvaluated = []; // list of all rules evaluated with outcome
    this.sessionStartTime = Date.now();
  }

  setCrop(cropId) {
    this.crop = cropId;
    this.clearFacts();
  }

  setMode(mode) {
    if (mode === 'forward' || mode === 'backward') {
      this.mode = mode;
    }
  }

  assertFact(symptomId, isPresent, cf = 1.0) {
    this.skippedSymptoms.delete(symptomId);
    this.facts.set(symptomId, {
      value: Boolean(isPresent),
      cf: Math.max(0.0, Math.min(1.0, Number(cf))),
      timestamp: Date.now()
    });
  }

  skipSymptom(symptomId) {
    this.facts.delete(symptomId);
    this.skippedSymptoms.add(symptomId);
  }

  unskipSymptom(symptomId) {
    this.skippedSymptoms.delete(symptomId);
  }

  isSkipped(symptomId) {
    return this.skippedSymptoms.has(symptomId);
  }

  retractFact(symptomId) {
    this.facts.delete(symptomId);
    this.skippedSymptoms.delete(symptomId);
  }

  hasFact(symptomId) {
    return this.facts.has(symptomId);
  }

  getFact(symptomId) {
    return this.facts.get(symptomId) || null;
  }

  getFactValue(symptomId) {
    const fact = this.facts.get(symptomId);
    return fact ? fact.value : null;
  }

  getFactCF(symptomId) {
    const fact = this.facts.get(symptomId);
    return fact && fact.value ? fact.cf : 0.0;
  }

  logQuestionAnswered(symptomId, answerChoice, cf, whyContext) {
    this.questionHistory.push({
      symptomId,
      answerChoice,
      cf,
      whyContext,
      timestamp: Date.now()
    });
  }

  recordRuleEvaluation(evaluationDetail) {
    this.rulesEvaluated.push(evaluationDetail);
    if (evaluationDetail.fired) {
      this.rulesFired.push(evaluationDetail);
    }
  }

  clearFacts() {
    this.facts.clear();
    this.skippedSymptoms.clear();
    this.questionHistory = [];
    this.rulesFired = [];
    this.rulesEvaluated = [];
    this.activeHypothesis = null;
  }

  resetAll() {
    this.crop = null;
    this.mode = 'forward';
    this.clearFacts();
    this.sessionStartTime = Date.now();
  }

  getAllAnsweredSymptoms() {
    const result = [];
    this.facts.forEach((val, key) => {
      result.push({
        symptomId: key,
        value: val.value,
        cf: val.cf,
        skipped: false,
        timestamp: val.timestamp
      });
    });
    this.skippedSymptoms.forEach(symptomId => {
      result.push({
        symptomId,
        value: false,
        cf: 0.0,
        skipped: true,
        timestamp: Date.now()
      });
    });
    return result;
  }

  exportState() {
    return {
      crop: this.crop,
      mode: this.mode,
      facts: Object.fromEntries(this.facts),
      skippedSymptoms: Array.from(this.skippedSymptoms),
      rulesFired: [...this.rulesFired],
      rulesEvaluated: [...this.rulesEvaluated],
      questionHistory: [...this.questionHistory],
      sessionStartTime: this.sessionStartTime
    };
  }
}
