/**
 * Automated Verification Test Suite for KrishiMitra Expert System
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Load Knowledge Base JSON directly
const kbPath = path.join(__dirname, '..', 'data', 'knowledge_base.json');
const rawKb = JSON.parse(fs.readFileSync(kbPath, 'utf8'));
const knowledgeBase = Array.isArray(rawKb) ? rawKb : (rawKb.rules || []);

// Mock browser localStorage for Node environment
global.localStorage = {
  _data: {},
  getItem(k) { return this._data[k] || null; },
  setItem(k, v) { this._data[k] = String(v); },
  removeItem(k) { delete this._data[k]; },
  clear() { this._data = {}; }
};

global.document = {
  documentElement: { lang: 'en' }
};

// Load Expert System Classes into global context
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'rules_data.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'i18n.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'working_memory.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'inference_engine.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'explanation_facility.js'), 'utf8'));

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
  }
}

console.log("\n=======================================================");
console.log("KrishiMitra Expert System - Verification Test Suite");
console.log("=======================================================\n");

// 1. Knowledge Base Structural Verification
console.log("1. Knowledge Base Verification:");
assert(knowledgeBase.length >= 40, `At least 40 IF-THEN rules (Found: ${knowledgeBase.length})`);

const crops = [...new Set(knowledgeBase.map(r => r.crop))];
assert(crops.length >= 5, `Covers at least 5 crops including common crops (Found: ${crops.length} crops: ${crops.join(', ')})`);
assert(['wheat', 'soybean', 'tomato', 'cotton', 'rice'].every(c => crops.includes(c)), "Covers wheat, soybean, tomato, cotton, and rice");

const diseases = [...new Set(knowledgeBase.map(r => r.conclusion))];
assert(diseases.length >= 15, `At least 15 diseases/pests covered (Found: ${diseases.length})`);

let ruleSchemaValid = true;
for (const rule of knowledgeBase) {
  if (!rule.id || !rule.crop || !Array.isArray(rule.conditions) || !rule.conclusion || typeof rule.cf !== 'number' || !rule.treatment || !rule.treatment.organic || !rule.treatment.chemical || !rule.prevention) {
    ruleSchemaValid = false;
    console.error("Invalid rule schema:", rule.id);
    break;
  }
}
assert(ruleSchemaValid, "Every rule contains id, crop, conditions array, conclusion, cf, organic+chemical treatment, and prevention");

// 2. Certainty Factor Calculus Verification
console.log("\n2. Certainty Factor Formula (MYCIN):");
const wm = new WorkingMemory();
const engine = new InferenceEngine(knowledgeBase, wm);

const cfComb1 = engine.combineCF(0.88, 0.82);
assert(Math.abs(cfComb1 - 0.9784) < 0.0001, `combineCF(0.88, 0.82) = 0.9784 (Got: ${cfComb1.toFixed(4)})`);

const cfComb2 = engine.combineMultipleCF([0.88, 0.82, 0.79]);
assert(Math.abs(cfComb2 - 0.99546) < 0.0001, `combineMultipleCF([0.88, 0.82, 0.79]) = 0.9955 (Got: ${cfComb2.toFixed(4)})`);

// 3. Test Case 1: Wheat Stripe Rust (Forward Chaining)
console.log("\n3. Test Case 1: Wheat Stripe Rust (Forward Chaining):");
wm.resetAll();
wm.setCrop('wheat');
wm.assertFact('yellow_pustules_stripes', true, 1.0);
wm.assertFact('chlorotic_leaves', true, 1.0);
wm.assertFact('cool_humid_weather', true, 1.0);
wm.assertFact('yellow_powder_rubbing_off', true, 1.0);
wm.assertFact('linear_stripes_parallel_veins', true, 1.0);
wm.assertFact('earhead_black_powder', false, 0.0);

const tc1Result = engine.runForwardChaining();
assert(tc1Result.top3.length > 0, "Diagnosis generated");
assert(tc1Result.top3[0].diseaseId === 'wheat_yellow_rust', `Primary diagnosis is Yellow Rust (Got: ${tc1Result.top3[0].diseaseId})`);
assert(tc1Result.top3[0].percentage >= 98, `Certainty Factor >= 98% (Got: ${tc1Result.top3[0].percentage}%)`);
assert(tc1Result.top3[0].firedRules.length >= 2, `Multiple rules fired for Yellow Rust (Fired: ${tc1Result.top3[0].firedRules.length})`);

// 4. Test Case 2: Soybean Yellow Mosaic Virus (Backward Chaining)
console.log("\n4. Test Case 2: Soybean Yellow Mosaic Virus (Backward Chaining):");
wm.resetAll();
wm.setCrop('soybean');
wm.setMode('backward');
engine.setActiveGoal('soybean_yellow_mosaic');

wm.assertFact('yellow_green_mottled_leaves', true, 1.0);
wm.assertFact('wrinkled_puckered_leaves', true, 1.0);
wm.assertFact('stunted_plant_growth', true, 1.0);
wm.assertFact('whitefly_presence_underside_leaf', true, 1.0);
wm.assertFact('yellow_patches_foliage', true, 1.0);
wm.assertFact('minute_brown_volcano_pustules', false, 0.0);

const tc2Result = engine.runBackwardChaining();
assert(tc2Result.top3[0].diseaseId === 'soybean_yellow_mosaic', `Primary diagnosis is Yellow Mosaic Virus (Got: ${tc2Result.top3[0].diseaseId})`);
assert(tc2Result.top3[0].percentage >= 98, `Certainty Factor >= 98% (Got: ${tc2Result.top3[0].percentage}%)`);

// 5. Test Case 3: Tomato Early Blight (Forward Chaining)
console.log("\n5. Test Case 3: Tomato Early Blight (Forward Chaining):");
wm.resetAll();
wm.setCrop('tomato');
wm.assertFact('concentric_rings_target_spots', true, 1.0);
wm.assertFact('lower_leaves_affected', true, 1.0);
wm.assertFact('yellowing_around_spots', true, 1.0);
wm.assertFact('brown_circular_spots', true, 1.0);
wm.assertFact('water_soaked_dark_lesions', false, 0.0);

const tc3Result = engine.runForwardChaining();
assert(tc3Result.top3[0].diseaseId === 'tomato_early_blight', `Primary diagnosis is Early Blight (Got: ${tc3Result.top3[0].diseaseId})`);
assert(tc3Result.top3[0].percentage >= 98, `Certainty Factor >= 98% (Got: ${tc3Result.top3[0].percentage}%)`);
assert(tc3Result.top3[0].firedRules.length === 3, `Expected 3 rules fired (Got: ${tc3Result.top3[0].firedRules.length})`);

// 6. Test Case 4: Cotton Pink Bollworm (Backward Chaining)
console.log("\n6. Test Case 4: Cotton Pink Bollworm (Backward Chaining):");
wm.resetAll();
wm.setCrop('cotton');
wm.setMode('backward');
engine.setActiveGoal('cotton_pink_bollworm');

wm.assertFact('rosetted_flowers', true, 1.0);
wm.assertFact('entry_hole_boll_interlocking_fibers', true, 1.0);
wm.assertFact('pinkish_caterpillar_inside', true, 1.0);
wm.assertFact('stunted_boll_drop', true, 1.0);
wm.assertFact('upward_curling_cotton_leaves', false, 0.0);

const tc4Result = engine.runBackwardChaining();
assert(tc4Result.top3[0].diseaseId === 'cotton_pink_bollworm', `Primary diagnosis is Pink Bollworm (Got: ${tc4Result.top3[0].diseaseId})`);
assert(tc4Result.top3[0].percentage >= 99, `Certainty Factor >= 99% (Got: ${tc4Result.top3[0].percentage}%)`);

// 7. Test Case 5: Rice Bacterial Leaf Blight (Forward Chaining)
console.log("\n7. Test Case 5: Rice Bacterial Leaf Blight (Forward Chaining):");
wm.resetAll();
wm.setCrop('rice');
wm.assertFact('wavy_translucent_leaf_margins', true, 1.0);
wm.assertFact('milky_bacterial_dew_droplets', true, 1.0);
wm.assertFact('straw_bleached_leaf_drying', true, 1.0);
wm.assertFact('spindle_diamond_shaped_spots', false, 0.0);
wm.assertFact('hopper_burn_circular_drying_patches', false, 0.0);

const tc5Result = engine.runForwardChaining();
assert(tc5Result.top3[0].diseaseId === 'rice_bacterial_leaf_blight', `Primary diagnosis is BLB (Got: ${tc5Result.top3[0].diseaseId})`);
assert(tc5Result.top3[0].percentage >= 98, `Certainty Factor >= 98% (Got: ${tc5Result.top3[0].percentage}%)`);

// 8. Explanation Facility Verification
console.log("\n8. Explanation Facility Verification:");
const ef = new ExplanationFacility(engine, wm);

// Test Why in Forward Chaining Mode
wm.setMode('forward');
const whyForward = ef.generateWhyExplanation('wavy_translucent_leaf_margins', {
  symptomId: 'wavy_translucent_leaf_margins',
  candidateRules: tc5Result.top3[0].firedRules.map(fr => fr.rule)
});
assert(Boolean(whyForward && whyForward.explanationText), "Forward Why explanation successfully generated with clear explanation text");
assert(whyForward.ruleDetails.length > 0, "Forward Why explanation includes related active candidate rules");

// Test Why in Backward Chaining Mode
wm.setMode('backward');
wm.activeHypothesis = 'rice_bacterial_leaf_blight';
const whyBackward = ef.generateWhyExplanation('wavy_translucent_leaf_margins', {
  symptomId: 'wavy_translucent_leaf_margins',
  rule: tc5Result.top3[0].firedRules[0].rule
});
assert(Boolean(whyBackward && whyBackward.explanationText), "Backward Why explanation successfully generated with clear explanation text");
assert(whyBackward.conditionsTrace.length > 0, "Backward Why explanation includes premise conditions trace");

// Test How
const howExplanation = ef.generateHowExplanation(tc5Result.diagnoses);
assert(howExplanation.diagnosisTraces.length > 0, "How explanation traces rules fired");
assert(howExplanation.diagnosisTraces[0].mathTrace.length > 0, "How explanation includes mathematical MYCIN formula trace");
assert(howExplanation.answeredFacts.length > 0, "How explanation reflects working memory state");
assert(howExplanation.rejectedRules.length > 0, "How explanation highlights disqualified rules");

// 9. Summary
console.log("\n=======================================================");
console.log(`Test Execution Completed: ${passed} Passed, ${failed} Failed`);
console.log("=======================================================\n");

if (failed > 0) {
  process.exit(1);
}
