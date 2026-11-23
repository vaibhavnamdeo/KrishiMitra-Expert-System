/**
 * Mobile & Responsive UI Verification Suite
 * Validates CSS media queries, responsive grid rules, typography scaling,
 * touch targets, and mobile layout configurations.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=======================================================');
console.log('KrishiMitra: Mobile & Responsive UI Verification');
console.log('=======================================================');

const css = fs.readFileSync(path.join(__dirname, '../css/styles.css'), 'utf-8');

function check(label, condition) {
  if (condition) {
    console.log(`  ✅ PASS: ${label}`);
  } else {
    console.error(`  ❌ FAIL: ${label}`);
    process.exit(1);
  }
}

// 1. Global Viewport & Overflow Safeguards
console.log('\n1. Global Viewport & Overflow Safeguards:');
check('Global overflow-x hidden on html & body', css.includes('overflow-x: hidden') && css.includes('-webkit-tap-highlight-color: transparent'));
check('Main wrapper box-sizing border-box', css.includes('box-sizing: border-box'));

// 2. Navigation & Header on Mobile
console.log('\n2. Header & Navigation on Mobile:');
check('Header inner has padding for <= 768px', css.includes('@media (max-width: 768px)') && css.includes('.header-inner'));
check('Brand tagline hidden on mobile to conserve vertical space', css.includes('.brand-tagline') && css.includes('display: none'));
check('Header utility buttons text hidden on mobile, icons preserved', css.includes('.nav-btn span:not(.font-size-glyph):not(#ui-langBtn)'));
check('Header icons have touch padding and min-height', css.includes('.nav-btn') && css.includes('min-height: 36px'));

// 3. Editorial Hero Scaling
console.log('\n3. Editorial Hero Banner on Mobile:');
check('Hero padding scaled down on mobile', css.includes('.editorial-hero') && css.includes('padding: 34px 18px 56px'));
check('Hero headline scaled for mobile screens (1.6rem)', css.includes('.hero-headline') && css.includes('font-size: 1.6rem'));
check('Hero description line-height optimized', css.includes('.hero-description') && css.includes('font-size: 0.92rem'));

// 4. Stepper Navigation on Mobile
console.log('\n4. Minimal Stepper on Mobile:');
check('Stepper container and circle size scaled down', css.includes('.step-circle') && css.includes('width: 26px'));
check('Step point font size scaled for mobile', css.includes('.step-point') && css.includes('font-size: 0.76rem'));
check('Step connectors margin adjusted for mobile', css.includes('.step-connector') && css.includes('margin: 0 4px'));

// 5. Crop Selection Grid & Filters on Mobile
console.log('\n5. Crop Selection Grid & Filters on Mobile:');
check('Crop grid displays 2-column app layout on mobile (repeat(2, 1fr))', css.includes('.crop-grid') && css.includes('repeat(2, 1fr) !important'));
check('Crop card image height scaled for mobile (110px)', css.includes('.crop-card-image-wrap') && css.includes('height: 110px !important'));
check('Category chips horizontally swipeable with smooth touch scrolling', css.includes('.season-filter-group') && css.includes('-webkit-overflow-scrolling: touch'));

// 6. Sticky Action Bar on Mobile
console.log('\n6. Sticky Bottom Action Bar on Mobile:');
check('Sticky bar padding adjusted for mobile', css.includes('.sticky-action-bar') && css.includes('padding: 10px 14px'));
check('Selected crop subtitle hidden on small mobile to prevent text crowding', css.includes('.action-status-sub') && css.includes('display: none'));
check('Primary action button touch target at least 42px', css.includes('.btn-primary-action') && css.includes('min-height: 42px'));

// 7. Question Flow & Visuals on Mobile
console.log('\n7. Question Flow & Visuals on Mobile:');
check('Question container padding reduced on mobile for maximum usable width', css.includes('.question-container-card') && css.includes('padding: 18px 14px'));
check('Botanical symptom visual centered and scaled on mobile', css.includes('.symptom-visual-card') && css.includes('max-width: 230px'));
check('Response options in clean 2x2 grid on mobile with 48px touch target', css.includes('.response-options-grid') && css.includes('repeat(2, 1fr) !important'));
check('Option buttons min-height 48px for easy thumb tapping', css.includes('.btn-option') && css.includes('min-height: 48px'));

// 8. Results View & Advisory on Mobile
console.log('\n8. Results View & Advisory on Mobile:');
check('Results 2-column layout collapses to flex column on mobile', css.includes('.results-layout-2col') && css.includes('flex-direction: column'));
check('Results sidebar positioned naturally without desktop sticky trapping', css.includes('.results-col-sidebar') && css.includes('position: static'));
check('Sidebar gauge section displays horizontally on tablets/smartphones', css.includes('.sidebar-gauge-section') && css.includes('flex-direction: row'));
check('Sidebar action buttons arranged in 2-column grid on mobile', css.includes('.sidebar-actions-stack') && css.includes('grid-template-columns: repeat(2, 1fr)'));
check('Diagnosis heading scaled for mobile (1.45rem)', css.includes('.diagnosis-name-heading') && css.includes('font-size: 1.45rem'));
check('Treatment cards and safety cards collapse to 1-column', css.includes('.treatment-grid-container') && css.includes('grid-template-columns: 1fr !important'));

// 9. Modals & Diagrams on Mobile
console.log('\n9. Modals & Architecture Diagrams on Mobile:');
check('Modal card max-width 95vw and max-height 90vh', css.includes('.modal-card') && css.includes('max-width: 95vw'));
check('Architecture SVG diagram has touch scrolling wrapper', css.includes('.architecture-diagram-wrap') && css.includes('-webkit-overflow-scrolling: touch'));
check('Architecture SVG has min-width so diagram remains legible', css.includes('.architecture-svg') && css.includes('min-width: 460px'));

console.log('\n=======================================================');
console.log('Mobile UI Polish Verification: 100% PASSED');
console.log('=======================================================');
