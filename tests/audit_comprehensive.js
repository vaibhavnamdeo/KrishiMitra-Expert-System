// tests/audit_comprehensive.js
// Master End-to-End System, UI, Text, and Accessibility Audit

const { JSDOM } = require('jsdom');
const fs = require('fs');

async function comprehensiveAudit() {
  console.log('====================================================');
  console.log('KrishiMitra - Comprehensive Final UI & Systems Audit');
  console.log('====================================================\n');

  let errors = [];
  const dom = await JSDOM.fromURL('http://localhost:8085/', {
    runScripts: 'dangerously',
    resources: 'usable'
  });
  const { window } = dom;

  window.addEventListener('error', (e) => {
    errors.push({ type: 'uncaught_error', message: e.message || String(e.error) });
  });

  await new Promise(r => {
    if (window.document.readyState === 'complete') r();
    else window.addEventListener('load', r);
  });
  await new Promise(r => setTimeout(r, 400));

  const { document } = window;

  // 1. Check all views exist
  const views = ['view-crop-select', 'view-question-flow', 'view-results', 'view-admin'];
  views.forEach(v => {
    const el = document.getElementById(v);
    if (!el) errors.push({ type: 'missing_view', view: v });
  });

  // 2. Check 17 crops render in Step 1
  const cropCards = document.querySelectorAll('.crop-card');
  console.log('Step 1: Crop cards count =', cropCards.length);
  if (cropCards.length !== 17) errors.push({ type: 'crop_count_mismatch', expected: 17, got: cropCards.length });

  // 3. Test Category filter chips
  const chips = document.querySelectorAll('.season-filter-group .chip-btn');
  console.log('Step 1: Filter chips count =', chips.length);
  chips.forEach(chip => {
    chip.click();
    const visibleCards = [...document.querySelectorAll('.crop-card')].filter(c => c.style.display !== 'none');
    console.log(`  Filter [${chip.dataset.filter}] -> visible cards: ${visibleCards.length}`);
    if (visibleCards.length === 0) errors.push({ type: 'empty_filter', filter: chip.dataset.filter });
  });
  // Reset filter to all
  document.querySelector('.chip-btn[data-filter="all"]').click();

  // 4. Test Search Bar
  const searchInput = document.getElementById('crop-search-input');
  searchInput.value = 'tom';
  searchInput.dispatchEvent(new window.Event('input'));
  let matched = [...document.querySelectorAll('.crop-card')].filter(c => c.style.display !== 'none');
  console.log('Step 1: Search "tom" -> matched cards:', matched.length);
  if (matched.length !== 1) errors.push({ type: 'search_mismatch', query: 'tom', matched: matched.length });

  const btnClearSearch = document.getElementById('btn-clear-crop-search');
  btnClearSearch.click();
  matched = [...document.querySelectorAll('.crop-card')].filter(c => c.style.display !== 'none');
  console.log('Step 1: Cleared search -> cards:', matched.length);

  // 5. Test Theme Toggle (Light, Comfort, Dark)
  const themeLight = document.getElementById('theme-btn-light');
  const themeComfort = document.getElementById('theme-btn-comfort');
  const themeDark = document.getElementById('theme-btn-dark');

  themeComfort.click();
  console.log('Theme toggle -> active theme:', document.body.getAttribute('data-theme'));
  if (document.body.getAttribute('data-theme') !== 'comfort') errors.push({ type: 'theme_failed', theme: 'comfort' });

  themeDark.click();
  console.log('Theme toggle -> active theme:', document.body.getAttribute('data-theme'));
  if (document.body.getAttribute('data-theme') !== 'dark') errors.push({ type: 'theme_failed', theme: 'dark' });

  themeLight.click();
  console.log('Theme toggle -> active theme:', document.body.getAttribute('data-theme'));
  if (document.body.getAttribute('data-theme') !== 'light') errors.push({ type: 'theme_failed', theme: 'light' });

  // 6. Test Language Toggle (English <-> Hindi)
  const btnLang = document.getElementById('btn-toggle-lang');
  btnLang.click();
  const heroTitleHi = document.getElementById('ui-heroTitle').textContent;
  console.log('Language toggle -> Hindi hero title:', heroTitleHi);
  if (!heroTitleHi.includes('फसल')) errors.push({ type: 'i18n_hi_failed' });

  btnLang.click();
  const heroTitleEn = document.getElementById('ui-heroTitle').textContent;
  console.log('Language toggle -> English hero title:', heroTitleEn);
  if (!heroTitleEn.includes('Crop')) errors.push({ type: 'i18n_en_failed' });

  // 7. Test Accessibility Font Size Toggle
  const btnFont = document.getElementById('btn-toggle-font-size');
  btnFont.click();
  console.log('Large text class toggled on:', document.body.classList.contains('large-text'));
  if (!document.body.classList.contains('large-text')) errors.push({ type: 'font_scale_failed' });
  btnFont.click();

  // 8. Test Modals: How It Works, History, Credits
  const btnHowWorks = document.getElementById('btn-open-how-it-works');
  btnHowWorks.click();
  const modalHowWorks = document.getElementById('modal-how-it-works');
  console.log('Modal How It Works opened:', modalHowWorks.classList.contains('open'));
  if (!modalHowWorks.classList.contains('open')) errors.push({ type: 'modal_how_it_works_open_failed' });
  const closeHow = modalHowWorks.querySelector('[data-close-modal="modal-how-it-works"]');
  closeHow.click();
  console.log('Modal How It Works closed:', !modalHowWorks.classList.contains('open'));

  const btnCredits = document.getElementById('btn-open-credits');
  btnCredits.click();
  const modalCredits = document.getElementById('modal-credits');
  console.log('Modal Credits opened:', modalCredits.classList.contains('open'));
  if (!modalCredits.classList.contains('open')) errors.push({ type: 'modal_credits_open_failed' });
  const closeCredits = modalCredits.querySelector('[data-close-modal="modal-credits"]');
  closeCredits.click();
  console.log('Modal Credits closed:', !modalCredits.classList.contains('open'));

  const btnHistory = document.getElementById('btn-open-history');
  btnHistory.click();
  const modalHistory = document.getElementById('modal-history');
  console.log('Modal History opened:', modalHistory.classList.contains('open'));
  if (!modalHistory.classList.contains('open')) errors.push({ type: 'modal_history_open_failed' });
  const closeHistory = modalHistory.querySelector('[data-close-modal="modal-history"]');
  closeHistory.click();
  console.log('Modal History closed:', !modalHistory.classList.contains('open'));

  // 9. Test Admin View
  const btnAdmin = document.getElementById('btn-open-admin');
  btnAdmin.click();
  const viewAdmin = document.getElementById('view-admin');
  console.log('Admin view opened:', viewAdmin.classList.contains('active'));
  if (!viewAdmin.classList.contains('active')) errors.push({ type: 'admin_view_open_failed' });
  const adminRows = document.querySelectorAll('#admin-rules-tbody tr');
  console.log('Admin rules table rows count =', adminRows.length);
  if (adminRows.length < 80) errors.push({ type: 'admin_rules_missing', count: adminRows.length });
  const btnAdminBack = document.getElementById('btn-admin-back');
  btnAdminBack.click();
  console.log('Returned from Admin view:', document.getElementById('view-crop-select').classList.contains('active'));

  // 10. Test Full Diagnostic Flow for all 17 crops in Forward and Backward Modes
  console.log('\nStep 2 & 3: Testing Diagnostic Workflow for each of the 17 crops...');
  const allCards = document.querySelectorAll('.crop-card');
  for (let i = 0; i < allCards.length; i++) {
    const card = allCards[i];
    const cropId = card.dataset.cropId;
    card.click();
    const btnStart = document.getElementById('btn-start-diagnosis');
    btnStart.click();

    const viewQ = document.getElementById('view-question-flow');
    if (!viewQ.classList.contains('active')) {
      errors.push({ type: 'question_flow_failed_to_open', crop: cropId });
      continue;
    }

    // Answer Yes until results reached
    let stepCount = 0;
    while (viewQ.classList.contains('active') && stepCount < 20) {
      stepCount++;
      const btnYes = document.querySelector('.btn-option.opt-yes');
      btnYes.click();
    }

    const viewRes = document.getElementById('view-results');
    if (!viewRes.classList.contains('active')) {
      errors.push({ type: 'results_failed_to_reach', crop: cropId });
    } else {
      const isUnmatched = document.getElementById('diagnosis-unmatched-view').style.display !== 'none';
      const diagName = document.getElementById('result-primary-name').textContent;
      const cfVal = document.getElementById('result-primary-cf').textContent;
      if (isUnmatched) {
        errors.push({ type: 'unexpected_unmatched_state', crop: cropId });
      }
      console.log(`  [Crop ${i + 1}/17] ${cropId}: Success -> Diagnosis: "${diagName}", CF: ${cfVal}`);
    }

    // Return to crop select
    document.getElementById('btn-restart-diagnosis').click();
  }

  // 11. Test Backward Chaining Diagnostic Scan
  console.log('\nTesting Backward Chaining Mode...');
  const btnModeBackward = document.getElementById('btn-mode-backward');
  btnModeBackward.click();

  const wheatCard = document.querySelector('.crop-card[data-crop-id="wheat"]');
  wheatCard.click();
  document.getElementById('btn-start-diagnosis').click();

  let bwSteps = 0;
  while (document.getElementById('view-question-flow').classList.contains('active') && bwSteps < 10) {
    bwSteps++;
    document.querySelector('.btn-option.opt-yes').click();
  }
  const bwDiagName = document.getElementById('result-primary-name').textContent;
  const bwCf = document.getElementById('result-primary-cf').textContent;
  console.log(`  Backward Chaining Diagnosis: "${bwDiagName}", CF: ${bwCf}`);

  // Return to crop select
  document.getElementById('btn-restart-diagnosis').click();
  document.getElementById('btn-mode-forward').click();

  console.log('\n====================================================');
  console.log(`Comprehensive Audit Finished: ${errors.length} Errors Found`);
  console.log('====================================================');

  if (errors.length > 0) {
    console.error('Audit Errors:', JSON.stringify(errors, null, 2));
    process.exit(1);
  }
}

comprehensiveAudit().catch(err => {
  console.error('Fatal audit failure:', err);
  process.exit(1);
});
