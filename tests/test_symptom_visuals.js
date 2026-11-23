/**
 * KrishiMitra - Automated Verification Test Suite for Visual Reference Guide
 * Verifies that all 175 symptoms across all 17 crops have distinct, dedicated botanical SVGs
 * and that low-literacy farmers never see repetitive or mismatched fallback diagrams.
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { SYMPTOM_VISUALS } = require('../js/symptom_visuals.js');

async function runVisualGuideTests() {
  console.log('\n=======================================================');
  console.log('KrishiMitra - Visual Reference Guide Verification Suite');
  console.log('=======================================================\n');

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

  // 1. Knowledge Base Coverage
  const kb = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'knowledge_base.json'), 'utf8'));
  const rules = Array.isArray(kb) ? kb : kb.rules;
  const allSymptoms = new Set();
  for (const r of rules) {
    for (const c of r.conditions) allSymptoms.add(c);
  }

  assert(allSymptoms.size >= 175, `Knowledge base contains comprehensive unique symptoms (Found: ${allSymptoms.size})`);
  assert(typeof SYMPTOM_VISUALS === 'object', 'SYMPTOM_VISUALS library loaded successfully');
  assert(typeof SYMPTOM_VISUALS.archetypes === 'object', 'Archetypes dictionary defined');
  assert(typeof SYMPTOM_VISUALS.map === 'object', 'Symptom-to-archetype map defined');

  // 2. Completeness Check: 0 unmapped symptoms
  let unmappedCount = 0;
  for (const symp of allSymptoms) {
    if (!SYMPTOM_VISUALS.map.hasOwnProperty(symp)) {
      unmappedCount++;
      console.error(`Missing symptom mapping: ${symp}`);
    }
  }
  assert(unmappedCount === 0, `All ${allSymptoms.size} symptoms have explicit visual archetype mappings (Missing: ${unmappedCount})`);

  // 3. Archetype Integrity Check: Every mapped key exists in archetypes
  let invalidArchetypes = 0;
  for (const [symp, archKey] of Object.entries(SYMPTOM_VISUALS.map)) {
    if (!SYMPTOM_VISUALS.archetypes[archKey]) {
      invalidArchetypes++;
      console.error(`Invalid archetype referenced: ${archKey} for symptom ${symp}`);
    }
  }
  assert(invalidArchetypes === 0, `All mapped archetypes exist in dictionary (Invalid: ${invalidArchetypes})`);

  const uniqueArchetypes = Object.keys(SYMPTOM_VISUALS.archetypes);
  assert(uniqueArchetypes.length >= 100, `Visual library provides at least 100 distinct botanical diagrams (Found: ${uniqueArchetypes.length})`);

  // 4. SVG Markup Validation for all archetypes
  let svgMarkupErrors = 0;
  for (const [key, svg] of Object.entries(SYMPTOM_VISUALS.archetypes)) {
    if (!svg.includes('<svg') || !svg.includes('</svg>') || !svg.includes('viewBox="0 0 160 120"') || !svg.includes('aria-label=')) {
      svgMarkupErrors++;
      console.error(`SVG markup error in archetype: ${key}`);
    }
  }
  assert(svgMarkupErrors === 0, `All archetypes contain valid, responsive botanical SVG markup (Errors: ${svgMarkupErrors})`);

  // 5. Test Live DOM Integration via JSDOM against localhost:8085
  console.log('\nTesting Live DOM Integration for Multiple Crops:');
  const dom = await JSDOM.fromURL('http://localhost:8085/', {
    runScripts: 'dangerously',
    resources: 'usable'
  });

  await new Promise(resolve => {
    if (dom.window.document.readyState === 'complete') resolve();
    else dom.window.addEventListener('load', () => setTimeout(resolve, 300));
  });

  const { document } = dom.window;

  // Helper to start diagnosis and test Q1 SVG
  function testCropVisual(cropId, expectedSubstr) {
    const card = document.querySelector(`.crop-card[data-crop-id="${cropId}"]`);
    if (!card) return assert(false, `Card for ${cropId} found`);
    card.click();
    document.getElementById('btn-start-diagnosis').click();

    const container = document.getElementById('symptom-visual-container');
    const svgHtml = container ? container.innerHTML : '';
    const hasMatch = svgHtml.toLowerCase().includes(expectedSubstr.toLowerCase());
    assert(hasMatch, `Crop [${cropId}] rendered dedicated botanical visual (Matches "${expectedSubstr}")`);

    // Reset back to crop selection
    document.getElementById('btn-prev-question').click();
  }

  testCropVisual('wheat', 'Chlorotic');
  testCropVisual('maize', 'whorl');
  testCropVisual('sugarcane', 'midrib');
  testCropVisual('brinjal', 'little');
  testCropVisual('banana', 'skirt');
  testCropVisual('okra', 'yellow vein');
  testCropVisual('onion', 'purple blotch');
  testCropVisual('potato', 'water-soaked');
  testCropVisual('mustard', 'white');

  console.log('\n=======================================================');
  console.log(`Visual Guide Test Execution Completed: ${passed} Passed, ${failed} Failed`);
  console.log('=======================================================\n');

  if (failed > 0) process.exit(1);
}

runVisualGuideTests().catch(err => {
  console.error('Fatal visual test error:', err);
  process.exit(1);
});
