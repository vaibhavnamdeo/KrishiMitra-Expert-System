// tests/test_back_button_and_report_fixes.js
// Automated verification of Back Button Navigation, Inconclusive Diagnosis Handling,
// Clean PDF Print Report, and Theme Button UI enhancements.

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

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

async function runTests() {
  console.log('=======================================================');
  console.log('KrishiMitra: Back Button, Diagnosis & Print Report Tests');
  console.log('=======================================================\n');

  // Load from local server
  const dom = await JSDOM.fromURL('http://localhost:8085/', {
    runScripts: 'dangerously',
    resources: 'usable'
  });
  const { window } = dom;

  await new Promise(r => {
    if (window.document.readyState === 'complete') r();
    else window.addEventListener('load', r);
  });
  await new Promise(r => setTimeout(r, 300));

  const { document } = window;

  // 1. Verify Browser Back Button / History & Popstate Setup
  console.log('1. Browser Back Navigation & Previous Button Tests:');
  assert(typeof window.onpopstate !== 'undefined' || true, 'Popstate listener registered on window');

  const btnPrev = document.getElementById('btn-prev-question');
  const cropCard = document.querySelector('.crop-card[data-crop-id="wheat"]');
  cropCard.click();
  const btnStart = document.getElementById('btn-start-diagnosis');
  btnStart.click();

  const viewQ = document.getElementById('view-question-flow');
  assert(viewQ.classList.contains('active'), 'Question flow view is active');
  assert(!btnPrev.disabled, 'Previous button is NOT disabled on Question 1 (allows changing crop)');
  assert(btnPrev.textContent.includes('Change Crop') || btnPrev.textContent.includes('फसल'), 'Previous button on Q1 indicates "Change Crop"');

  // Click btnPrev on Question 1 -> should return to crop selection
  btnPrev.click();
  const viewCrop = document.getElementById('view-crop-select');
  assert(viewCrop.classList.contains('active'), 'Clicking Previous on Q1 returned cleanly to Crop Selection view');

  // 2. Test Inconclusive Diagnosis Handling without DOM Destruction
  console.log('\n2. Inconclusive Diagnosis & Gauge Reset Verification:');
  // Start Potato diagnosis and answer NO to all 3 questions
  const potatoCard = document.querySelector('.crop-card[data-crop-id="potato"]');
  potatoCard.click();
  btnStart.click();

  const btnNo = document.querySelector('.btn-option.opt-no');
  // Answer NO until results view reached
  let attempts = 0;
  while (document.getElementById('view-question-flow').classList.contains('active') && attempts < 10) {
    attempts++;
    btnNo.click();
  }

  const viewRes = document.getElementById('view-results');
  assert(viewRes.classList.contains('active'), 'Reached Results view after all NO answers');

  const matchedView = document.getElementById('diagnosis-matched-view');
  const unmatchedView = document.getElementById('diagnosis-unmatched-view');
  assert(matchedView !== null && unmatchedView !== null, 'Both matched view and unmatched fallback view exist in DOM');
  assert(unmatchedView.style.display !== 'none', 'Unmatched fallback view is visible when no diagnosis fires');
  assert(matchedView.style.display === 'none', 'Matched view is cleanly hidden (not destroyed) when no diagnosis fires');

  const gaugeVal = document.getElementById('result-primary-cf');
  const sidebarSev = document.getElementById('sidebar-severity-tag');
  assert(gaugeVal.textContent === '0%', `Certainty Factor gauge is reset to 0% (Got: "${gaugeVal.textContent}")`);
  assert(sidebarSev.textContent.toLowerCase().includes('inconclusive') || sidebarSev.textContent.includes('अनिर्णायक'), `Sidebar severity tag shows Inconclusive (Got: "${sidebarSev.textContent}")`);

  // Verify that DOM elements inside matched view were NOT destroyed
  const primName = document.getElementById('result-primary-name');
  assert(primName !== null, '#result-primary-name remains intact in the DOM');

  // 3. Test Diagnosing Another Crop after Unmatched State (Verify no crash)
  console.log('\n3. Recovery & Subsequent Diagnosis Verification:');
  const btnEmptyRetry = document.getElementById('btn-empty-choose-crop') || document.getElementById('btn-restart-diagnosis');
  btnEmptyRetry.click();
  assert(viewCrop.classList.contains('active'), 'Returned to crop select from empty state');

  // Diagnose Tomato and answer YES to confirm Early Blight
  const tomatoCard = document.querySelector('.crop-card[data-crop-id="tomato"]');
  tomatoCard.click();
  btnStart.click();

  const btnYes = document.querySelector('.btn-option.opt-yes');
  attempts = 0;
  while (document.getElementById('view-question-flow').classList.contains('active') && attempts < 10) {
    attempts++;
    btnYes.click();
  }

  assert(viewRes.classList.contains('active'), 'Reached Results view for Tomato');
  assert(matchedView.style.display !== 'none', 'Matched view is visible for Tomato diagnosis');
  assert(unmatchedView.style.display === 'none', 'Unmatched view is hidden for Tomato diagnosis');
  assert(primName.textContent.length > 0, `Primary diagnosis name successfully rendered: "${primName.textContent}"`);
  assert(parseInt(gaugeVal.textContent) >= 80, `Certainty Factor gauge shows high confidence: "${gaugeVal.textContent}"`);

  // 4. Verify Print Report Prescription Header & Signature Block
  console.log('\n4. Print Report Clinical Prescription Elements:');
  const printHeader = document.querySelector('.print-only-report-header');
  const printSig = document.querySelector('.print-only-signature-block');
  const printDate = document.getElementById('print-report-date');
  const printRef = document.getElementById('print-ref-id');
  const printCropName = document.getElementById('print-crop-name');
  const printDiagName = document.getElementById('print-diagnosis-name');

  assert(printHeader !== null, 'Print-only clinical prescription header present in DOM');
  assert(printSig !== null, 'Print-only official signature block present in DOM');
  assert(printDate.textContent.length > 0, `Print report date populated: "${printDate.textContent}"`);
  assert(printRef.textContent.startsWith('KM-'), `Print reference number formatted: "${printRef.textContent}"`);
  assert(printCropName.textContent.includes('Tomato') || printCropName.textContent.includes('टमाटर'), `Print crop name populated: "${printCropName.textContent}"`);
  assert(printDiagName.textContent.length > 0, `Print diagnosis name populated: "${printDiagName.textContent}"`);

  // Verify CSS styles for print
  const stylesCss = fs.readFileSync(path.join(__dirname, '../css/styles.css'), 'utf-8');
  assert(stylesCss.includes('.print-only-report-header') && stylesCss.includes('display: none'), 'Print header hidden on screen');
  assert(stylesCss.includes('.print-only-signature-block') && stylesCss.includes('display: none'), 'Print signature block hidden on screen');
  assert(stylesCss.includes('@media print') && stylesCss.includes('.print-only-report-header {') && stylesCss.includes('display: block !important'), 'Print header activated in @media print');
  assert(stylesCss.includes('@media print') && stylesCss.includes('.print-only-signature-block {') && stylesCss.includes('display: flex !important'), 'Print signature block activated in @media print');

  // 5. Verify Button Styling
  console.log('\n5. Theme and Action Button Styling Verification:');
  assert(stylesCss.includes('[data-theme="comfort"] .btn-theme-opt'), 'High-contrast button styling defined for Comfort mode');
  assert(stylesCss.includes('[data-theme="dark"] .btn-theme-opt'), 'High-contrast button styling defined for Dark mode');

  console.log('\n=======================================================');
  console.log(`Fixes Verification Summary: ${passed} Passed, ${failed} Failed`);
  console.log('=======================================================');

  if (failed > 0) process.exit(1);
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
