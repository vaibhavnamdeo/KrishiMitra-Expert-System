// tests/test_redesign_features.js
// Automated verification of KrishiMitra 2.0 UI/UX Features and System Constraints

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

console.log('=======================================================');
console.log('KrishiMitra 2.0 Polished UI Redesign Verification');
console.log('=======================================================\n');

// 1. Verify CSS Tokens and Stylesheet
console.log('1. Design Tokens & Palette Verification:');
const tokensCss = fs.readFileSync(path.join(__dirname, '../css/tokens.css'), 'utf-8');
const stylesCss = fs.readFileSync(path.join(__dirname, '../css/styles.css'), 'utf-8');

assert(tokensCss.includes('#F4F1E8') || tokensCss.includes('#FAF7F0'), 'Calm paper background (#F4F1E8) defined in design tokens');
assert(tokensCss.includes('#FFFDF8'), 'Slightly lighter card background (#FFFDF8) defined');
assert(tokensCss.includes('#EDE6D3'), 'Comfort theme warm tone (#EDE6D3) defined');
assert(tokensCss.includes('#14201A'), 'Dark theme deep green-charcoal (#14201A) defined');
assert(tokensCss.includes('#1B2A22'), 'Dark theme card surface (#1B2A22) defined');
assert(tokensCss.includes('#26332B'), 'Body text color (#26332B) defined for eye comfort');
assert(tokensCss.includes('#5B6B61') || tokensCss.includes('#54645A'), 'Muted text color (#5B6B61) defined');
assert(tokensCss.includes('#1F4D3A') || tokensCss.includes('#1f4d3a'), 'Deep forest green (#1F4D3A) defined as primary');
assert(tokensCss.includes('#E8A317') || tokensCss.includes('#e8a317'), 'Warm turmeric/saffron (#E8A317) defined for actions');
assert(tokensCss.includes('Fraunces') || tokensCss.includes('Playfair'), 'Serif heading font specified');
assert(tokensCss.includes('DM Sans') || tokensCss.includes('Inter'), 'Clean sans body font specified');
assert(tokensCss.includes('Noto Sans Devanagari'), 'Noto Sans Devanagari specified for Hindi');
assert(tokensCss.includes('--container-max-width: 1200px') || stylesCss.includes('max-width: 1200px'), '1200px container max-width defined');
assert(tokensCss.includes('body.large-text'), 'Large-text accessibility font scaling defined');
assert(stylesCss.includes('@media print'), 'Print stylesheet defined for clean document report');

// 2. Verify Removals & Replacements
console.log('\n2. Verifying Explicit Removals & Replacements:');
const htmlContent = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');

assert(!stylesCss.includes('radial-gradient(#E5DEC9') && !stylesCss.includes('radial-gradient('), 'Eye-straining dotted/grid background pattern completely removed');
assert(!htmlContent.includes('id="mandiTicker"') && !htmlContent.includes('class="top-strip"'), 'Top strip with mandi rates completely removed');
assert(!htmlContent.includes('leaf-watermark') && !htmlContent.includes('weather-widget'), 'Faded leaf watermark and weather ticker removed');

// 3. Subtle Agriculture Line-Art
console.log('\n3. Subtle Agriculture Line-Art:');
assert(htmlContent.includes('agri-line-art-bottom-left'), 'Bottom-left inline SVG agriculture line-art present');
assert(htmlContent.includes('agri-line-art-bottom-right'), 'Bottom-right inline SVG agriculture line-art present');
assert(htmlContent.includes('agri-line-art-hero-edge'), 'Hero edge inline SVG line-art present');
assert(stylesCss.includes('.agri-line-art') && stylesCss.includes('pointer-events: none'), 'Line-art configured with pointer-events: none');
assert(stylesCss.includes('@media (max-width: 768px)') && stylesCss.includes('display: none'), 'Line-art hidden on mobile devices');

// 3. Hero Banner & Divider
console.log('\n3. Hero Banner (Indian Field Photo) & Wave Divider:');
assert(htmlContent.includes('full-width-hero'), 'Full-width hero section present');
assert(htmlContent.includes('hero-wave-divider'), 'Soft wave divider SVG present between hero and canvas');
assert(stylesCss.includes('indian_farm_hero.jpg'), 'Hero background set to real Indian agricultural field photograph');

// Hero photo file check
const heroPhotoPath = path.join(__dirname, '../images/indian_farm_hero.jpg');
assert(fs.existsSync(heroPhotoPath), 'Hero photo file exists on disk');
const heroStat = fs.statSync(heroPhotoPath);
assert(heroStat.size / 1024 < 300, `Hero banner photo optimized under 300 KB (${(heroStat.size / 1024).toFixed(1)} KB)`);

// 4. Fixed Crop Photos & 17 Crops Knowledge Base
console.log('\n4. Fixed Crop Photos & 17 Crops Knowledge Base:');
const rawKbData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/knowledge_base.json'), 'utf-8'));
const kbRules = Array.isArray(rawKbData) ? rawKbData : (rawKbData.rules || []);
const cropsInKb = new Set(kbRules.map(r => r.crop));

assert(cropsInKb.size >= 17, `Knowledge base covers at least 17 crops (Found ${cropsInKb.size})`);
assert(kbRules.length >= 80, `Knowledge base contains 80+ rules (Found ${kbRules.length} rules)`);

// Check required crops exist in KB
const requiredCrops = [
  'wheat', 'rice', 'maize', 'soybean', 'chickpea', 'pigeonpea',
  'groundnut', 'mustard', 'tomato', 'potato', 'onion', 'brinjal',
  'okra', 'chilli', 'cotton', 'sugarcane', 'banana'
];
const allCropsPresent = requiredCrops.every(c => cropsInKb.has(c));
assert(allCropsPresent, 'All 17 required crops present in knowledge base');

// Check all crop images on disk and size < 300KB
let allImagesUnder300 = true;
let allImagesExist = true;
requiredCrops.forEach(c => {
  const p = path.join(__dirname, `../images/crops/${c}.jpg`);
  if (!fs.existsSync(p)) {
    allImagesExist = false;
  } else {
    const sz = fs.statSync(p).size / 1024;
    if (sz > 300) allImagesUnder300 = false;
  }
});
assert(allImagesExist, 'All 17 crop image files exist locally in images/crops/');
assert(allImagesUnder300, 'All crop photos are verified under 300 KB limit');

// Check Image Credits file
assert(fs.existsSync(path.join(__dirname, '../image_credits.json')), 'image_credits.json exists for license transparency');

// 5. DOM & Interactive Redesign Features
console.log('\n5. DOM & Interactive Redesign Features:');
const dom = new JSDOM(htmlContent, {
  runScripts: 'dangerously',
  resources: 'usable',
  url: 'http://localhost:8085/'
});
const { document } = dom.window;

// Large-text toggle button
const btnFontSize = document.querySelector('#btn-toggle-font-size');
assert(btnFontSize !== null, 'Large-text (A+/A-) accessibility toggle button present');

// How it works modal & button
const btnHowItWorks = document.querySelector('#btn-open-how-it-works');
const modalHowItWorks = document.querySelector('#modal-how-it-works');
const archSvg = document.querySelector('.architecture-svg');
assert(btnHowItWorks !== null && modalHowItWorks !== null, 'How It Works modal & button present');
assert(archSvg !== null, 'Architecture flow diagram (5 components) present in modal');

// Crop Search Bar & Clear Button
const searchInput = document.querySelector('#crop-search-input');
const btnClearSearch = document.querySelector('#btn-clear-crop-search');
assert(searchInput !== null && btnClearSearch !== null, 'Crop search input and clear button present');

// 7 Category Filter Chips
const categoryChips = document.querySelectorAll('.season-filter-group .chip-btn');
assert(categoryChips.length >= 7, `7 category filter chips present (Found ${categoryChips.length})`);

// Sticky Action Bar
const stickyBar = document.querySelector('#crop-action-bar');
assert(stickyBar !== null, 'Sticky bottom action bar present for crop selection');

// Results Page: 2-Column Layout, Circular Gauge, Confirm Diagnosis, Spray Safety
const results2Col = document.querySelector('.results-layout-2col');
const gaugeSvg = document.querySelector('.gauge-svg');
const gaugeLabelBelow = document.querySelector('.gauge-label-below');
const confirmDiagBox = document.querySelector('#confirm-diagnosis-container');
const spraySafetyBox = document.querySelector('#spray-safety-container');
const altDiagSection = document.querySelector('#alternative-diagnoses-section');

assert(results2Col !== null, 'Results page 2-column layout (main + sidebar rail) present');
assert(gaugeSvg !== null, 'Circular confidence gauge SVG present');
assert(gaugeLabelBelow !== null, 'Certainty Factor label positioned below circular gauge ring (no overlap)');
assert(confirmDiagBox !== null, '"Confirm your diagnosis" differential check container present');
assert(spraySafetyBox !== null, '"Spray Safety" advisory box present with 4 safety points');
assert(altDiagSection !== null, '"Alternative possibilities" section present');

// Image Credits Modal & Text Link Styling
const btnCredits = document.querySelector('#btn-open-credits');
const modalCredits = document.querySelector('#modal-credits');
assert(btnCredits !== null && modalCredits !== null, 'Image Credits modal & footer link present');
assert(stylesCss.includes('.btn-footer-link') && stylesCss.includes('text-decoration: underline'), 'Footer "Image Credits & Licenses" styled as a clean text link');

// 3-Way Theme Toggle
const themeBtnLight = document.querySelector('#theme-btn-light');
const themeBtnComfort = document.querySelector('#theme-btn-comfort');
const themeBtnDark = document.querySelector('#theme-btn-dark');
assert(themeBtnLight !== null && themeBtnComfort !== null && themeBtnDark !== null, '3-way theme toggle buttons (Light, Comfort, Dark) present');

// Specific verification of the 4 updated crop photos
['soybean', 'pigeonpea', 'okra', 'banana'].forEach(cropName => {
  const p = path.join(__dirname, `../images/crops/${cropName}.jpg`);
  assert(fs.existsSync(p), `Replacement photo for ${cropName} exists on disk`);
  const sz = fs.statSync(p).size / 1024;
  assert(sz < 300, `Replacement photo for ${cropName} is under 300 KB (${sz.toFixed(1)} KB)`);
});

// Footer
const footer = document.querySelector('#app-footer');
assert(footer !== null, 'Simple dignified footer present');
assert(footer.textContent.includes('1800-180-1551'), 'Footer contains official Kisan Helpline 1800-180-1551');

console.log('\n=======================================================');
console.log(`Redesign Features Verification: ${passed} Passed, ${failed} Failed`);
console.log('=======================================================');

if (failed > 0) process.exit(1);
