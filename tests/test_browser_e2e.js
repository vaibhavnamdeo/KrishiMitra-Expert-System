/**
 * KrishiMitra - Full End-to-End DOM & User Interaction Verification Test
 * Simulates real user browser events: clicks, keyboard, modals, navigation,
 * language toggle, and verifies all test cases and admin operations.
 */

const path = require('path');
const { JSDOM } = require('jsdom');

async function runE2ETests() {
  console.log("\n=======================================================");
  console.log("KrishiMitra - End-to-End Browser Interaction Test Suite");
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

  // Load via JSDOM.fromURL against the active local server
  const dom = await JSDOM.fromURL('http://localhost:8085/', {
    runScripts: 'dangerously',
    resources: 'usable'
  });

  const { window } = dom;

  // Wait for all sub-resources (scripts and fonts) to trigger 'load'
  await new Promise(resolve => {
    if (window.document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', () => setTimeout(resolve, 300));
    }
  });

  const { document } = window;

  // 1. Initial Render Verification
  console.log("1. Initial UI Render & Controls:");
  const heroTitle = document.getElementById('ui-heroTitle');
  assert(heroTitle && heroTitle.textContent.length > 0, `Hero banner title rendered: "${heroTitle.textContent}"`);

  const cropCards = document.querySelectorAll('.crop-card');
  assert(cropCards.length === 17, `Crop selection grid contains 17 crops (Found: ${cropCards.length})`);

  const startBtn = document.getElementById('btn-start-diagnosis');
  assert(startBtn && startBtn.disabled === true, "Start Diagnostic button is initially disabled until crop selected");

  // 2. Language Switcher (EN <-> HI)
  console.log("\n2. Language Switcher Toggle:");
  const langBtn = document.getElementById('btn-toggle-lang');
  langBtn.click();
  const heroTitleHi = document.getElementById('ui-heroTitle').textContent;
  assert(heroTitleHi.includes('फसल समस्या पहचान'), `Toggled to Hindi: "${heroTitleHi}"`);

  langBtn.click();
  const heroTitleEn = document.getElementById('ui-heroTitle').textContent;
  assert(heroTitleEn.includes('Crop Problem Diagnosis'), `Toggled back to English: "${heroTitleEn}"`);

  // 3. Inference Mode Switcher
  console.log("\n3. Inference Strategy Switcher:");
  const btnBackward = document.getElementById('btn-mode-backward');
  btnBackward.click();
  const modeExpBackward = document.getElementById('mode-explanation-text').textContent;
  assert(modeExpBackward.includes('Hypothesizes probable diseases'), "Backward chaining mode activated with explanation");

  const btnForward = document.getElementById('btn-mode-forward');
  btnForward.click();
  const modeExpForward = document.getElementById('mode-explanation-text').textContent;
  assert(modeExpForward.includes('Evaluates your observed symptoms'), "Forward chaining mode activated with explanation");

  // 4. Test Case 1: Wheat Stripe Rust Diagnostic Workflow
  console.log("\n4. Test Case 1: Wheat Diagnostic Workflow (Forward Chaining):");
  const wheatCard = document.querySelector('.crop-card[data-crop-id="wheat"]');
  assert(Boolean(wheatCard), "Wheat crop card found");
  wheatCard.click();
  const selectedWheatCard = document.querySelector('.crop-card[data-crop-id="wheat"]');
  assert(selectedWheatCard && selectedWheatCard.classList.contains('selected'), "Wheat crop card is selected");
  assert(startBtn.disabled === false, "Start Diagnostic button is now enabled");

  startBtn.click();
  const qFlow = document.getElementById('view-question-flow');
  assert(qFlow.classList.contains('active'), "Navigated to Question Flow view");

  // Test "Why was this asked?" modal
  const btnWhy = document.getElementById('btn-why-question');
  btnWhy.click();
  const modalWhy = document.getElementById('modal-why');
  assert(modalWhy.classList.contains('open'), "'Why was this asked?' modal successfully opened");
  const whyContent = document.getElementById('modal-why-content').textContent;
  assert(whyContent.includes('Forward Chaining Mode'), "Why modal explains reasoning mode and candidate rules");

  const closeWhyBtn = modalWhy.querySelector('[data-close-modal="modal-why"]');
  closeWhyBtn.click();
  assert(!modalWhy.classList.contains('open'), "Why modal closed");

  // Answer questions until results view
  let stepCount = 0;
  const maxSteps = 15;
  while (!document.getElementById('view-results').classList.contains('active') && stepCount < maxSteps) {
    stepCount++;
    const qHeading = document.getElementById('question-heading').textContent;
    const btnYes = document.querySelector('.btn-option.opt-yes');
    const btnNo = document.querySelector('.btn-option.opt-no');

    // Answer Yes to yellow rust symptoms, No to smut/earhead
    if (qHeading.toLowerCase().includes('black') || qHeading.toLowerCase().includes('smut') || qHeading.toLowerCase().includes('fish')) {
      btnNo.click();
    } else {
      btnYes.click();
    }
  }

  const resultsView = document.getElementById('view-results');
  assert(resultsView.classList.contains('active'), "Successfully reached Results & Advisory view");

  const primaryName = document.getElementById('result-primary-name').textContent;
  assert(primaryName.includes('Yellow Rust') || primaryName.includes('Stripe Rust'), `Primary diagnosis is Yellow Rust (Got: "${primaryName}")`);

  const primaryCF = document.getElementById('result-primary-cf').textContent;
  assert(parseInt(primaryCF) >= 90, `Certainty Factor is >= 90% (Got: "${primaryCF}")`);

  // Verify Treatment Tabs
  const organicText = document.getElementById('result-organic-text').textContent;
  assert(organicText.includes('Cow urine') || organicText.includes('buttermilk'), `Organic treatment advisory verified: "${organicText.slice(0, 50)}..."`);

  const chemicalText = document.getElementById('result-chemical-text').textContent;
  assert(chemicalText.includes('Propiconazole') || chemicalText.includes('Tilt'), `Chemical treatment advisory verified: "${chemicalText.slice(0, 50)}..."`);

  // Test "How did you reach this conclusion?" modal
  const btnHow = document.getElementById('btn-how-conclusion');
  btnHow.click();
  const modalHow = document.getElementById('modal-how');
  assert(modalHow.classList.contains('open'), "'How did you reach this conclusion?' modal successfully opened");
  const howContent = document.getElementById('modal-how-content').innerHTML;
  assert(howContent.includes('Certainty Factor Combination Formula') || howContent.includes('CF_final') || howContent.includes('Step 1'), "How modal contains exact mathematical CF combination proof trace");
  assert(howContent.includes('Working Memory Facts'), "How modal contains user response audit trail");

  const closeHowBtn = modalHow.querySelector('[data-close-modal="modal-how"]');
  closeHowBtn.click();
  assert(!modalHow.classList.contains('open'), "How modal closed");

  // Save to history
  const btnSave = document.getElementById('btn-save-diagnosis');
  btnSave.click();
  assert(btnSave.textContent.includes('Saved'), "Diagnosis saved to history with feedback");

  // 5. Test Past Diagnoses History Drawer
  console.log("\n5. Past Diagnoses History Drawer:");
  const btnOpenHistory = document.getElementById('btn-open-history');
  btnOpenHistory.click();
  const modalHistory = document.getElementById('modal-history');
  assert(modalHistory.classList.contains('open'), "History modal opened");
  const historyContent = document.getElementById('modal-history-content').textContent;
  assert(historyContent.includes('Wheat') && historyContent.includes('Yellow Rust'), "History record displays Wheat and Yellow Rust");

  const closeHistoryBtn = modalHistory.querySelector('[data-close-modal="modal-history"]');
  closeHistoryBtn.click();
  assert(!modalHistory.classList.contains('open'), "History modal closed");

  // 6. Test Admin Knowledge Acquisition Module
  console.log("\n6. Admin Knowledge Base Management:");
  const btnOpenAdmin = document.getElementById('btn-open-admin');
  btnOpenAdmin.click();
  const viewAdmin = document.getElementById('view-admin');
  assert(viewAdmin.classList.contains('active'), "Admin view opened");

  const rulesCounter = document.getElementById('admin-rules-counter').textContent;
  assert(parseInt(rulesCounter) >= 40, `Admin table lists all rules (Count: ${rulesCounter})`);

  // Test Search Filter
  const searchInput = document.getElementById('admin-search-input');
  searchInput.value = 'tomato';
  searchInput.dispatchEvent(new window.Event('input'));
  const rows = document.querySelectorAll('#admin-rules-tbody tr');
  assert(rows.length === 10, `Admin search filter for 'tomato' returned exactly 10 rules (Got: ${rows.length})`);

  // Back to main
  const btnAdminBack = document.getElementById('btn-admin-back');
  btnAdminBack.click();
  assert(document.getElementById('view-crop-select').classList.contains('active'), "Returned to main Diagnostic wizard view");

  console.log("\n=======================================================");
  console.log(`E2E Test Execution Completed: ${passed} Passed, ${failed} Failed`);
  console.log("=======================================================\n");

  if (failed > 0) {
    process.exit(1);
  }
}

runE2ETests().catch(err => {
  console.error("E2E Test Error:", err);
  process.exit(1);
});
