const { JSDOM } = require('jsdom');

async function runSkipComprehensiveTests() {
  console.log("=======================================================");
  console.log("KrishiMitra - Comprehensive Skip & Navigation Test Suite");
  console.log("=======================================================\n");

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

  const dom = await JSDOM.fromURL('http://localhost:8085/', {
    runScripts: 'dangerously',
    resources: 'usable'
  });
  const { window } = dom;

  await new Promise(resolve => {
    if (window.document.readyState === 'complete') resolve();
    else window.addEventListener('load', () => setTimeout(resolve, 300));
  });

  const { document } = window;

  // TEST 1: Forward Chaining Multiple Skips
  console.log("1. Forward Chaining - Consecutive Skips:");
  const wheatCard = document.querySelector('.crop-card[data-crop-id="wheat"]');
  wheatCard.click();
  document.getElementById('btn-start-diagnosis').click();

  const q1 = document.getElementById('question-symptom-desc').textContent;
  const btnSkip = document.getElementById('btn-skip-question');
  
  btnSkip.click();
  const q2 = document.getElementById('question-symptom-desc').textContent;
  assert(q1 !== q2, `Skip 1 moved to new question (Q1: "${q1.slice(0, 30)}..." -> Q2: "${q2.slice(0, 30)}...")`);

  btnSkip.click();
  const q3 = document.getElementById('question-symptom-desc').textContent;
  assert(q2 !== q3, `Skip 2 moved to new question (Q2: "${q2.slice(0, 30)}..." -> Q3: "${q3.slice(0, 30)}...")`);

  // TEST 2: Previous button unskips and restores question
  console.log("\n2. Previous Button Navigation:");
  const btnPrev = document.getElementById('btn-prev-question');
  assert(!btnPrev.disabled, "Previous button is enabled");
  btnPrev.click();
  const restoredQ = document.getElementById('question-symptom-desc').textContent;
  assert(restoredQ === q2, `Previous button returned to Q2 ("${restoredQ.slice(0, 30)}...")`);

  // TEST 3: "Unsure / Cannot tell" response option advances to next question
  console.log("\n3. 'Unsure' Option Button:");
  const optUnsure = document.querySelector('.btn-option.opt-unsure');
  optUnsure.click();
  const qAfterUnsure = document.getElementById('question-symptom-desc').textContent;
  assert(qAfterUnsure !== q2, `Unsure option button advanced to next question (Now: "${qAfterUnsure.slice(0, 30)}...")`);

  // TEST 4: Skipping all questions concludes gracefully
  console.log("\n4. Skipping Until Completion:");
  let steps = 0;
  while (!document.getElementById('view-results').classList.contains('active') && steps < 40) {
    steps++;
    btnSkip.click();
  }
  const resultsActive = document.getElementById('view-results').classList.contains('active');
  assert(resultsActive, `Gracefully reached Results view after skipping without infinite loops (Took ${steps} steps)`);

  // Reset and test Backward Chaining Skip
  console.log("\n5. Backward Chaining - Consecutive Skips:");
  document.getElementById('brand-link').click();
  document.getElementById('btn-mode-backward').click();
  
  const tomatoCard = document.querySelector('.crop-card[data-crop-id="tomato"]');
  tomatoCard.click();
  document.getElementById('btn-start-diagnosis').click();

  const bq1 = document.getElementById('question-symptom-desc').textContent;
  const btnSkipB = document.getElementById('btn-skip-question');
  btnSkipB.click();
  const bq2 = document.getElementById('question-symptom-desc').textContent;
  assert(bq1 !== bq2, `Backward mode Skip moved to new question (Q1: "${bq1.slice(0, 30)}..." -> Q2: "${bq2.slice(0, 30)}...")`);

  console.log("\n=======================================================");
  console.log(`Skip Comprehensive Tests: ${passed} Passed, ${failed} Failed`);
  console.log("=======================================================\n");

  if (failed > 0) process.exit(1);
}

runSkipComprehensiveTests().catch(err => {
  console.error(err);
  process.exit(1);
});
