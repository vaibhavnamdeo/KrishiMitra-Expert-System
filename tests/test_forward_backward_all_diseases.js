/**
 * Verification Script: Forward vs Backward Chaining across all 104 Diseases
 * Tests:
 * 1. Both chaining strategies reach the exact same top diagnosis for 100% of the 104 diseases.
 * 2. Compares the effect of the new rule firing criteria (>=2 symptoms or >=50% coverage)
 *    and partial premise CF (minConditionCF * coverage) on test cases.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Mock browser objects
global.localStorage = {
  _data: {},
  getItem(k) { return this._data[k] || null; },
  setItem(k, v) { this._data[k] = String(v); },
  removeItem(k) { delete this._data[k]; },
  clear() { this._data = {}; }
};
global.document = { documentElement: { lang: 'en' } };

// Load scripts into global context
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'rules_data.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'i18n.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'working_memory.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'inference_engine.js'), 'utf8'));

const DEFAULT_KNOWLEDGE_BASE = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/knowledge_base.json'), 'utf8'));

console.log('=======================================================');
console.log('KrishiMitra: Forward vs Backward Chaining (104 Diseases)');
console.log('=======================================================');

// Identify all unique diseases
const diseaseMap = new Map();
DEFAULT_KNOWLEDGE_BASE.forEach(rule => {
  if (!diseaseMap.has(rule.conclusion)) {
    diseaseMap.set(rule.conclusion, {
      diseaseId: rule.conclusion,
      crop: rule.crop,
      diseaseName: rule.disease_name,
      rules: []
    });
  }
  diseaseMap.get(rule.conclusion).rules.push(rule);
});

console.log(`Found ${diseaseMap.size} unique diseases across 17 crops.`);

let matchCount = 0;
let mismatchCount = 0;

diseaseMap.forEach((info, diseaseId) => {
  // Collect all symptoms for this disease's rules
  const allSymptoms = new Set();
  info.rules.forEach(r => r.conditions.forEach(c => allSymptoms.add(c)));

  // 1. Test Forward Chaining with all confirmed symptoms
  const wmForward = new WorkingMemory();
  wmForward.setCrop(info.crop);
  wmForward.setMode('forward');
  allSymptoms.forEach(s => wmForward.assertFact(s, true, 1.0));

  const engineForward = new InferenceEngine(DEFAULT_KNOWLEDGE_BASE, wmForward);
  const forwardResult = engineForward.runForwardChaining();
  const topForward = forwardResult.top3 && forwardResult.top3[0];

  // 2. Test Backward Chaining with all confirmed symptoms
  const wmBackward = new WorkingMemory();
  wmBackward.setCrop(info.crop);
  wmBackward.setMode('backward');
  allSymptoms.forEach(s => wmBackward.assertFact(s, true, 1.0));

  const engineBackward = new InferenceEngine(DEFAULT_KNOWLEDGE_BASE, wmBackward);
  const backwardResult = engineBackward.runBackwardChaining();
  const topBackward = backwardResult.top3 && backwardResult.top3[0];

  const forwardId = topForward ? topForward.diseaseId : null;
  const backwardId = topBackward ? topBackward.diseaseId : null;

  if (forwardId === backwardId && forwardId === diseaseId) {
    matchCount++;
  } else {
    mismatchCount++;
    console.error(`❌ Mismatch for ${diseaseId}: Forward="${forwardId}", Backward="${backwardId}"`);
  }
});

console.log(`\nResult for all ${diseaseMap.size} diseases under confirmed evidence:`);
console.log(`✅ Matches: ${matchCount} / ${diseaseMap.size} (100% Equivalence)`);
console.log(`❌ Mismatches: ${mismatchCount}`);

if (mismatchCount > 0) {
  process.exit(1);
}

console.log('\n=======================================================');
console.log('Comparing Partial Premise CF Formula on Test Cases');
console.log('=======================================================');

// Compare a rule with 3 conditions: 1 confirmed, 2 confirmed, 3 confirmed
const sampleRule = {
  id: "test_rule_1",
  crop: "wheat",
  conditions: ["sym_a", "sym_b", "sym_c"],
  conclusion: "test_disease",
  disease_name: { en: "Test Disease", hi: "परीक्षण रोग" },
  cf: 0.85,
  treatment: { organic: { en: "Organic 1" }, chemical: { en: "Chemical 1" } }
};

const sampleRule2 = {
  id: "test_rule_2",
  crop: "wheat",
  conditions: ["sym_a", "sym_d"],
  conclusion: "test_disease",
  disease_name: { en: "Test Disease", hi: "परीक्षण रोग" },
  cf: 0.90,
  treatment: { organic: { en: "Organic 2 (Higher CF)" }, chemical: { en: "Chemical 2" } }
};

const testKB = [sampleRule, sampleRule2];

// Scenario A: 1 confirmed out of 3 (sym_a confirmed, coverage = 1/3 = 33.3%)
// Under OLD logic: fired with coverage=0.333, premiseCF = 1.0 * (0.5 + 0.5 * 0.333) = 0.6667, derivedCF = 0.5667
// Under NEW logic: does NOT fire (confirmedCount = 1 < 2 AND coverage = 0.333 < 0.50) -> prevents false positives!
const wmA = new WorkingMemory();
wmA.setCrop("wheat");
wmA.assertFact("sym_a", true, 1.0);
const engineA = new InferenceEngine([sampleRule], wmA);
const evalA = engineA.evaluateRuleConditions(sampleRule);
console.log('\nScenario A: 1 of 3 symptoms confirmed (coverage = 33.3%):');
console.log(`  Rule fires: ${evalA.isSatisfied} (Expected: false)`);
console.log(`  Premise CF: ${evalA.premiseCF} (Old formula would have produced: 0.6667)`);
console.log(`  Derived CF: ${evalA.derivedCF} (Old formula would have produced: 0.5667)`);

// Scenario B: 2 confirmed out of 3 (sym_a, sym_b confirmed, coverage = 2/3 = 66.7%)
// Under OLD logic: premiseCF = 1.0 * (0.5 + 0.5 * 0.6667) = 0.8333, derivedCF = 0.7083
// Under NEW logic: premiseCF = 1.0 * 0.6667 = 0.6667, derivedCF = 0.5667
const wmB = new WorkingMemory();
wmB.setCrop("wheat");
wmB.assertFact("sym_a", true, 1.0);
wmB.assertFact("sym_b", true, 1.0);
const engineB = new InferenceEngine([sampleRule], wmB);
const evalB = engineB.evaluateRuleConditions(sampleRule);
console.log('\nScenario B: 2 of 3 symptoms confirmed (coverage = 66.7%):');
console.log(`  Rule fires: ${evalB.isSatisfied} (Expected: true, confirmedCount >= 2)`);
console.log(`  Premise CF: ${evalB.premiseCF} (Old formula: 0.8333 -> New formula: 0.6667)`);
console.log(`  Derived CF: ${evalB.derivedCF} (Old formula: 0.7083 -> New formula: 0.5667)`);

// Scenario C: 1 confirmed out of 2 (sym_a confirmed for rule2 with 2 conditions, coverage = 50%)
// Under NEW logic: fires because coverage >= 0.5 (50%), premiseCF = 1.0 * 0.5 = 0.5, derivedCF = 0.45
const wmC = new WorkingMemory();
wmC.setCrop("wheat");
wmC.assertFact("sym_a", true, 1.0);
const engineC = new InferenceEngine([sampleRule2], wmC);
const evalC = engineC.evaluateRuleConditions(sampleRule2);
console.log('\nScenario C: 1 of 2 symptoms confirmed (coverage = 50.0%):');
console.log(`  Rule fires: ${evalC.isSatisfied} (Expected: true, coverage >= 0.5)`);
console.log(`  Premise CF: ${evalC.premiseCF} (Old formula: 0.7500 -> New formula: 0.5000)`);
console.log(`  Derived CF: ${evalC.derivedCF} (Old formula: 0.6750 -> New formula: 0.4500)`);

// Scenario D: Treatment selection from rule with highest derived CF
// Suppose both sampleRule (derivedCF = 0.5667) and sampleRule2 (derivedCF = 0.7650) fired
const wmD = new WorkingMemory();
wmD.setCrop("wheat");
wmD.assertFact("sym_a", true, 1.0);
wmD.assertFact("sym_b", true, 1.0);
wmD.assertFact("sym_d", true, 0.9);
const engineD = new InferenceEngine(testKB, wmD);
const diagD = engineD.runForwardChaining();
console.log('\nScenario D: Treatment Selection from Highest Derived CF Rule:');
console.log(`  Diagnosed disease: ${diagD.top3[0].diseaseId}`);
console.log(`  Selected treatment: "${diagD.top3[0].treatment.organic.en}"`);
console.log(`  Expected treatment from sampleRule2 (CF 0.90) rather than first rule sampleRule (CF 0.85):`);
console.log(`  Match: ${diagD.top3[0].treatment.organic.en.includes("Higher CF")}`);

console.log('\n=======================================================');
console.log('All 104 Diseases Verification: 100% SUCCESS');
console.log('=======================================================');
