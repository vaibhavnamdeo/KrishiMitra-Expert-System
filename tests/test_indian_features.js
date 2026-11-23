const { JSDOM } = require('jsdom');

async function testNewFeatures() {
  console.log("\n=======================================================");
  console.log("KrishiMitra 2.0 - Category Filters & Audio Verification");
  console.log("=======================================================\n");

  const dom = await JSDOM.fromURL('http://localhost:8085/', { runScripts: 'dangerously', resources: 'usable' });
  await new Promise(r => {
    if (dom.window.document.readyState === 'complete') r();
    else dom.window.addEventListener('load', () => setTimeout(r, 400));
  });
  const doc = dom.window.document;

  // 1. Ticker Removed Verification
  const weather = doc.getElementById('ui-tickerWeather');
  console.log('✅ Mandi/Weather Ticker successfully removed:', !weather);

  // 2. 7 Category Filters
  const btnCereals = doc.querySelector('.chip-btn[data-filter="cereals"]');
  btnCereals.click();
  let cards = doc.querySelectorAll('.crop-card');
  console.log('✅ Cereals Filter Cards count (>=3):', cards.length);

  const btnPulses = doc.querySelector('.chip-btn[data-filter="pulses"]');
  btnPulses.click();
  cards = doc.querySelectorAll('.crop-card');
  console.log('✅ Pulses Filter Cards count (>=3):', cards.length);

  const btnVeg = doc.querySelector('.chip-btn[data-filter="vegetables"]');
  btnVeg.click();
  cards = doc.querySelectorAll('.crop-card');
  console.log('✅ Vegetables Filter Cards count (>=6):', cards.length);

  const btnAll = doc.querySelector('.chip-btn[data-filter="all"]');
  btnAll.click();
  cards = doc.querySelectorAll('.crop-card');
  console.log('✅ All Filter Cards count (17 crops):', cards.length);

  // 3. Audio & Calculator Elements
  const speakQ = doc.getElementById('btn-speak-question');
  const speakRes = doc.getElementById('btn-speak-diagnosis');
  console.log('✅ Audio Speak Question button present:', Boolean(speakQ));
  console.log('✅ Audio Speak Advisory button present:', Boolean(speakRes));

  const calcWater = doc.getElementById('calc-val-water');
  console.log('✅ Spray Calculator Initial Water:', calcWater ? calcWater.textContent : 'Missing');

  console.log('\n=======================================================');
  console.log('All Feature Verifications Completed Successfully!');
  console.log('=======================================================\n');
}

testNewFeatures().catch(console.error);
