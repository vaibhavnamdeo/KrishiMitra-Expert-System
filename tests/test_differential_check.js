const { JSDOM } = require('jsdom');

async function verifyDifferentialCheck() {
  console.log('\n=======================================================');
  console.log('KrishiMitra - Differential Check Feature Verification');
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

  const dom = await JSDOM.fromURL('http://localhost:8085/', { runScripts: 'dangerously', resources: 'usable' });
  await new Promise(r => {
    if (dom.window.document.readyState === 'complete') r();
    else dom.window.addEventListener('load', r);
  });
  await new Promise(r => setTimeout(r, 500));
  const { window } = dom;
  const { document } = window;

  // TEST 1: Wheat Diagnostic Flow & Initial Differential Check Generation
  console.log('1. Testing Initial Differential Check Generation:');
  const wheatCard = document.querySelector('.crop-card[data-crop-id="wheat"]');
  wheatCard.click();
  document.getElementById('btn-start-diagnosis').click();

  // Answer Yes until results view reached
  let qCount = 0;
  while (document.getElementById('view-question-flow').classList.contains('active') && qCount < 10) {
    qCount++;
    const btnYes = document.querySelector('.btn-option.opt-yes');
    if (btnYes) btnYes.click();
  }

  assert(document.getElementById('view-results').classList.contains('active'), 'Reached Results view for Wheat');
  const initialPrimary = document.getElementById('result-primary-name').textContent;
  const initialCf = document.getElementById('result-primary-cf').textContent;
  console.log(`  Primary Diagnosis: "${initialPrimary}", CF: ${initialCf}`);
  assert(initialPrimary.includes('Yellow Rust'), 'Diagnosed Yellow Rust for Wheat');

  const diffContainer = document.getElementById('confirm-differential-container');
  assert(!!diffContainer, 'Differential check container exists');
  const diffItems = diffContainer.querySelectorAll('.confirm-differential-item');
  console.log(`  Found ${diffItems.length} targeted differential check items`);
  assert(diffItems.length > 0 && diffItems.length <= 2, 'Generated exactly 1-2 targeted differential items (not infinite list)');

  // Verify eyebrow tags
  const eyebrows = diffContainer.querySelectorAll('.diff-item-eyebrow');
  assert(eyebrows.length > 0, 'Differential items have descriptive clinical eyebrow tags');
  console.log('  Eyebrow 1:', eyebrows[0] ? eyebrows[0].textContent.trim() : 'none');

  // TEST 2: Clicking "Yes, observed" on Primary Confirmatory Check
  console.log('\n2. Testing Confirmatory Check ("Yes, observed"):');
  const firstYesBtn = diffContainer.querySelector('.btn-diff-yes');
  assert(!!firstYesBtn, 'Yes button exists on first differential check item');
  firstYesBtn.click();

  const cfAfterYes = document.getElementById('result-primary-cf').textContent;
  console.log(`  Certainty Factor after confirming symptom: ${initialCf} -> ${cfAfterYes}`);
  assert(parseInt(cfAfterYes) >= parseInt(initialCf), `Certainty Factor increased or maintained (${initialCf} -> ${cfAfterYes})`);

  // Verify in-place status badge
  const confirmedBadge = diffContainer.querySelector('.diff-badge-confirmed');
  assert(!!confirmedBadge, 'Item displayed in-place confirmed status badge without vanishing or page jumping');
  console.log('  Confirmed Badge text:', confirmedBadge ? confirmedBadge.textContent.trim() : 'none');

  // TEST 3: Clicking "No, absent" on Runner-Up Distinction Check
  console.log('\n3. Testing Runner-Up Distinction Check ("No, absent"):');
  const secondNoBtn = diffContainer.querySelector('.btn-diff-no');
  if (secondNoBtn) {
    secondNoBtn.click();

    const ruledOutBadge = diffContainer.querySelector('.diff-badge-ruled-out, .diff-badge-unobserved');
    assert(!!ruledOutBadge, 'Second item rendered in-place status badge (ruled out or unobserved)');
    console.log('  Outcome badge text:', ruledOutBadge ? ruledOutBadge.textContent.trim() : 'none');

    // Verify completion banner
    const completionBanner = diffContainer.querySelector('.diff-completion-banner');
    assert(!!completionBanner, 'Completion banner displayed after answering all presented differential checks');
    console.log('  Banner text:', completionBanner ? completionBanner.textContent.trim() : 'none');
  } else {
    console.log('  (Single differential check present for this rule combination)');
  }

  // Ensure primary diagnosis was NOT broken or wiped out
  const finalPrimary = document.getElementById('result-primary-name').textContent;
  const isUnmatched = document.getElementById('diagnosis-unmatched-view').style.display !== 'none';
  assert(!isUnmatched, 'Unmatched fallback view is cleanly hidden');
  assert(finalPrimary.includes('Yellow Rust'), `Primary diagnosis intact: "${finalPrimary}"`);

  // TEST 4: Hindi Localization & Persistence
  console.log('\n4. Testing Language Switch on Results Page:');
  const btnLang = document.getElementById('btn-toggle-lang');
  btnLang.click();

  const hiPrimary = document.getElementById('result-primary-name').textContent;
  console.log(`  Hindi Primary Diagnosis: "${hiPrimary}"`);
  assert(hiPrimary.includes('पीला रतुआ') || hiPrimary.includes('रतुआ'), 'Diagnosis correctly localized to Hindi');

  const hiDiffContainer = document.getElementById('confirm-differential-container');
  const hiItems = hiDiffContainer.querySelectorAll('.confirm-differential-item');
  assert(hiItems.length > 0, 'Differential check items localized properly in Hindi');

  // Switch back to English
  btnLang.click();

  // TEST 5: Test Differential Check with Another Crop (Cotton)
  console.log('\n5. Testing Differential Check on Cotton:');
  document.getElementById('brand-link').click();
  const cottonCard = document.querySelector('.crop-card[data-crop-id="cotton"]');
  cottonCard.click();
  document.getElementById('btn-start-diagnosis').click();

  let cQCount = 0;
  while (document.getElementById('view-question-flow').classList.contains('active') && cQCount < 10) {
    cQCount++;
    const btnYes = document.querySelector('.btn-option.opt-yes');
    if (btnYes) btnYes.click();
  }

  assert(document.getElementById('view-results').classList.contains('active'), 'Reached Results view for Cotton');
  const cottonPrimary = document.getElementById('result-primary-name').textContent;
  console.log(`  Cotton Primary Diagnosis: "${cottonPrimary}"`);
  assert(cottonPrimary.includes('Pink Bollworm') || cottonPrimary.includes('Bollworm'), 'Diagnosed Cotton Bollworm');

  const cottonDiff = document.getElementById('confirm-differential-container');
  const cottonDiffItems = cottonDiff.querySelectorAll('.confirm-differential-item');
  assert(cottonDiffItems.length > 0, `Cotton generated targeted differential items (Count: ${cottonDiffItems.length})`);

  // Click No on first item
  const cottonNoBtn = cottonDiff.querySelector('.btn-diff-no');
  if (cottonNoBtn) {
    cottonNoBtn.click();
    const cottonPrimaryAfterNo = document.getElementById('result-primary-name').textContent;
    const cottonUnmatched = document.getElementById('diagnosis-unmatched-view').style.display !== 'none';
    assert(!cottonUnmatched, 'Cotton diagnosis NOT wiped out after clicking No on differential check');
    assert(cottonPrimaryAfterNo.length > 0, `Cotton diagnosis remains active: "${cottonPrimaryAfterNo}"`);
  }

  console.log('\n=======================================================');
  console.log(`Differential Check Verification: ${passed} Passed, ${failed} Failed`);
  console.log('=======================================================\n');

  if (failed > 0) process.exit(1);
}

verifyDifferentialCheck().catch(err => {
  console.error('Fatal differential test error:', err);
  process.exit(1);
});
