/**
 * KrishiMitra - Master Application Controller
 * Orchestrates UI lifecycle, Working Memory, Inference Engine,
 * Explanation Facility, Localization, and Knowledge Acquisition.
 */

function initApp() {
  // Initialize Core Subsystems
  I18N.init();
  const historyManager = new HistoryManager();
  const knowledgeAdmin = new KnowledgeAcquisitionModule();
  
  // Self-heal: ensure all rules for 17 crops are present in active memory
  const defaultRulesCount = typeof DEFAULT_KNOWLEDGE_BASE !== 'undefined' ? DEFAULT_KNOWLEDGE_BASE.length : 124;
  if (knowledgeAdmin.getAllRules().length < defaultRulesCount) {
    knowledgeAdmin.resetToDefault();
  }

  const workingMemory = new WorkingMemory();
  const inferenceEngine = new InferenceEngine(knowledgeAdmin.getAllRules(), workingMemory);
  const explanationFacility = new ExplanationFacility(inferenceEngine, workingMemory);

  // Application State
  const state = {
    activeView: 'view-crop-select', // 'view-crop-select' | 'view-question-flow' | 'view-results' | 'view-admin'
    currentQuestion: null,
    currentQuestionIndex: 0,
    totalEstimatedQuestions: 5,
    latestDiagnosisResult: null,
    selectedCropId: null,
    selectedCropRules: [],
    activeCropFilter: 'all',
    cropSearchQuery: '',
    differentialChecks: null,
    differentialChecksCrop: null,
    differentialChecksDisease: null
  };

  // Image Attribution Data (CC BY / CC BY-SA / Public Domain)
  const IMAGE_CREDITS_DATA = [
    { crop: "Hero Banner", title: "Golden Wheat Field in Maharashtra, India", artist: "Sagarjitkar", license: "CC BY-SA 4.0", source: "Wikimedia Commons" },
    { crop: "Wheat (गेहूं)", title: "Wheat field (Triticum aestivum)", artist: "Polina Kovaleva", license: "Pexels Free License", source: "Pexels" },
    { crop: "Rice (धान)", title: "Paddy rice field (Oryza sativa)", artist: "Hoang Loc", license: "Pexels Free License", source: "Pexels" },
    { crop: "Maize (मक्का)", title: "Corn cobs on plant (Zea mays)", artist: "User:Asbestos", license: "CC BY-SA 2.0", source: "Wikimedia Commons" },
    { crop: "Soybean (सोयाबीन)", title: "Soybean plants with pods in field (Glycine max)", artist: "Florian Pépellin", license: "CC BY-SA 4.0", source: "Wikimedia Commons" },
    { crop: "Chickpea (चना)", title: "Chickpea pods on plant (Cicer arietinum)", artist: "Eitan Ferman", license: "Public Domain", source: "Wikimedia Commons" },
    { crop: "Pigeon Pea (अरहर)", title: "Pigeon pea plant with pods in field (Raichur, Karnataka)", artist: "Nanditha Gogate, WELL Labs", license: "CC BY-SA 4.0", source: "Wikimedia Commons" },
    { crop: "Groundnut (मूंगफली)", title: "Groundnuts farm (Arachis hypogaea)", artist: "Ibn Dagara", license: "CC BY-SA 4.0", source: "Wikimedia Commons" },
    { crop: "Mustard (सरसों)", title: "Mustard field scenery in yellow bloom", artist: "Sadit Ihsan Dipro", license: "CC BY-SA 4.0", source: "Wikimedia Commons" },
    { crop: "Tomato (टमाटर)", title: "Tomatoes on vine (Solanum lycopersicum)", artist: "Mark Stebnicki", license: "Pexels Free License", source: "Pexels" },
    { crop: "Potato (आलू)", title: "Potato tubers in pail (Solanum tuberosum)", artist: "Ruslan V. Albitsky", license: "CC BY-SA 3.0", source: "Wikimedia Commons" },
    { crop: "Onion (प्याज)", title: "Harvested onions (Allium cepa)", artist: "Wikimedia Commons Contributor", license: "GFDL 1.2 / CC BY-SA", source: "Wikimedia Commons" },
    { crop: "Brinjal (बैंगन)", title: "Solanum melongena fruit and plant", artist: "Joydeep", license: "CC BY-SA 3.0", source: "Wikimedia Commons" },
    { crop: "Okra (भिंडी)", title: "Okra pods on plant in field (Abelmoschus esculentus)", artist: "Wilfredor", license: "CC0 (Public Domain)", source: "Wikimedia Commons" },
    { crop: "Chilli (मिर्च)", title: "Red chillies harvest (Capsicum annuum)", artist: "Pexels Contributor", license: "Pexels Free License", source: "Pexels" },
    { crop: "Cotton (कपास)", title: "Cotton boll maturing on plant (Gossypium)", artist: "USDA NRCS Texas", license: "Public Domain", source: "USDA / Wikimedia Commons" },
    { crop: "Sugarcane (गन्ना)", title: "Sugar cane field (Saccharum officinarum)", artist: "Rasool Sarang", license: "CC BY-SA 3.0", source: "Wikimedia Commons" },
    { crop: "Banana (केला)", title: "Banana plant with green developing bunch (Musa)", artist: "Johnnybam", license: "CC0 (Public Domain)", source: "Wikimedia Commons" }
  ];

  // DOM Elements Cache
  const dom = {
    // Header & Global Navigation
    btnToggleLang: document.getElementById('btn-toggle-lang'),
    btnToggleFontSize: document.getElementById('btn-toggle-font-size'),
    btnOpenHowItWorks: document.getElementById('btn-open-how-it-works'),
    btnOpenHistory: document.getElementById('btn-open-history'),
    btnOpenAdmin: document.getElementById('btn-open-admin'),
    brandLink: document.getElementById('brand-link'),
    btnModeForward: document.getElementById('btn-mode-forward'),
    btnModeBackward: document.getElementById('btn-mode-backward'),
    modeExplanationText: document.getElementById('mode-explanation-text'),
    uiHeroStatsLine: document.getElementById('ui-heroStatsLine'),

    // Voice & Calculator
    btnSpeakQuestion: document.getElementById('btn-speak-question'),
    btnVoiceInput: document.getElementById('btn-voice-input'),
    voiceStatusPill: document.getElementById('voice-status-pill'),
    voiceStatusText: document.getElementById('voice-status-text'),
    btnSpeakDiagnosis: document.getElementById('btn-speak-diagnosis'),
    inputFarmAcres: document.getElementById('input-farm-acres'),
    btnAcresMinus: document.getElementById('btn-acres-minus'),
    btnAcresPlus: document.getElementById('btn-acres-plus'),

    // Nav Stepper Steps
    stepNav1: document.getElementById('step-nav-1'),
    stepNav2: document.getElementById('step-nav-2'),
    stepNav3: document.getElementById('step-nav-3'),

    // Views
    viewCropSelect: document.getElementById('view-crop-select'),
    viewQuestionFlow: document.getElementById('view-question-flow'),
    viewResults: document.getElementById('view-results'),
    viewAdmin: document.getElementById('view-admin'),

    // Step 1: Crop Select, Live Search, Category Chips & Sticky Bar
    cropSearchInput: document.getElementById('crop-search-input'),
    btnClearCropSearch: document.getElementById('btn-clear-crop-search'),
    cropGridContainer: document.getElementById('crop-grid-container'),
    cropActionBar: document.getElementById('crop-action-bar'),
    stickyCropIndicator: document.getElementById('sticky-crop-indicator'),
    stickyCropDetail: document.getElementById('sticky-crop-detail'),
    btnStartDiagnosis: document.getElementById('btn-start-diagnosis'),

    // Step 2: Question Flow
    symptomVisualContainer: document.getElementById('symptom-visual-container'),
    questionCropTag: document.getElementById('question-crop-tag'),
    questionCounter: document.getElementById('question-counter'),
    questionIcon: document.getElementById('question-icon'),
    questionHeading: document.getElementById('question-heading'),
    questionSymptomDesc: document.getElementById('question-symptom-desc'),
    btnWhyQuestion: document.getElementById('btn-why-question'),
    btnPrevQuestion: document.getElementById('btn-prev-question'),
    btnSkipQuestion: document.getElementById('btn-skip-question'),
    responseButtons: document.querySelectorAll('.response-options-grid .btn-option'),

    // Step 3: Results
    primaryDiagnosisContainer: document.getElementById('primary-diagnosis-container'),
    resultPrimaryName: document.getElementById('result-primary-name'),
    resultPrimaryCrop: document.getElementById('result-primary-crop'),
    resultPrimaryCf: document.getElementById('result-primary-cf'),
    gaugeProgressCircle: document.getElementById('gauge-progress-circle'),
    resultSeverityTag: document.getElementById('result-severity-tag'),
    sidebarSeverityTag: document.getElementById('sidebar-severity-tag'),
    resultDoThisTodayText: document.getElementById('result-dothistoday-text'),
    confirmDiagnosisContainer: document.getElementById('confirm-diagnosis-container'),
    confirmDifferentialContainer: document.getElementById('confirm-differential-container'),
    resultOrganicText: document.getElementById('result-organic-text'),
    resultChemicalText: document.getElementById('result-chemical-text'),
    resultPreventionText: document.getElementById('result-prevention-text'),
    ruleTraceContainer: document.getElementById('rule-trace-container'),
    alternativeDiagnosesList: document.getElementById('alternative-diagnoses-list'),
    alternativeDiagnosesSection: document.getElementById('alternative-diagnoses-section'),
    btnPrintReport: document.getElementById('btn-print-report'),
    btnHowConclusion: document.getElementById('btn-how-conclusion'),
    btnSaveDiagnosis: document.getElementById('btn-save-diagnosis'),
    btnRestartDiagnosis: document.getElementById('btn-restart-diagnosis'),

    // Modals
    modalWhy: document.getElementById('modal-why'),
    modalWhyContent: document.getElementById('modal-why-content'),
    modalHow: document.getElementById('modal-how'),
    modalHowContent: document.getElementById('modal-how-content'),
    modalHowItWorks: document.getElementById('modal-how-it-works'),
    modalCredits: document.getElementById('modal-credits'),
    creditsTbody: document.getElementById('credits-tbody'),
    btnOpenCredits: document.getElementById('btn-open-credits'),
    modalHistory: document.getElementById('modal-history'),
    modalHistoryContent: document.getElementById('modal-history-content'),
    btnClearHistory: document.getElementById('btn-clear-history'),
    modalAdminForm: document.getElementById('modal-admin-form'),

    // Admin
    adminRulesCounter: document.getElementById('admin-rules-counter'),
    adminRulesTbody: document.getElementById('admin-rules-tbody'),
    adminSearchInput: document.getElementById('admin-search-input'),
    adminCropFilter: document.getElementById('admin-crop-filter'),
    btnAdminAddRule: document.getElementById('btn-admin-add-rule'),
    btnAdminExport: document.getElementById('btn-admin-export'),
    btnAdminImport: document.getElementById('btn-admin-import'),
    adminImportFileInput: document.getElementById('admin-import-file-input'),
    btnAdminReset: document.getElementById('btn-admin-reset'),
    btnAdminBack: document.getElementById('btn-admin-back'),
    adminRuleForm: document.getElementById('admin-rule-form'),
    formConditionsSelect: document.getElementById('form-rule-conditions')
  };

  /* =========================================================================
   * SEASONAL & CATEGORY CLASSIFICATION HELPERS
   * ========================================================================= */

  function isCropInSeason(crop) {
    const month = new Date().getMonth(); // 0 to 11
    // In India:
    // Rabi Season: October to March (Months 9, 10, 11, 0, 1, 2)
    // Kharif Season: June to October (Months 5, 6, 7, 8, 9)
    // Zaid Season: March to June (Months 2, 3, 4, 5)
    const isRabiMonth = (month >= 9 || month <= 2);
    const isKharifMonth = (month >= 5 && month <= 9);
    const isZaidMonth = (month >= 2 && month <= 5);

    const seasons = Array.isArray(crop.seasonCategory) ? crop.seasonCategory : [crop.seasonCategory];
    if (seasons.includes('annual')) return true;
    if (isRabiMonth && seasons.includes('rabi')) return true;
    if (isKharifMonth && seasons.includes('kharif')) return true;
    if (isZaidMonth && seasons.includes('zaid')) return true;
    return false;
  }

  function matchesCropCategory(crop, filter) {
    if (!filter || filter === 'all') return true;
    // Map crops accurately across category chips
    if (filter === 'cereals') {
      return crop.category === 'cereals' || ['wheat', 'rice', 'maize'].includes(crop.id);
    }
    if (filter === 'pulses') {
      return crop.category === 'pulses' || ['chickpea', 'pigeonpea', 'soybean'].includes(crop.id);
    }
    if (filter === 'oilseeds') {
      return (crop.category === 'oilseeds' && crop.id !== 'soybean') || ['mustard', 'groundnut'].includes(crop.id);
    }
    if (filter === 'vegetables') {
      return crop.category === 'vegetables' || ['tomato', 'potato', 'onion', 'brinjal', 'okra', 'chilli'].includes(crop.id);
    }
    if (filter === 'cash') {
      return crop.category === 'cash' || ['cotton', 'sugarcane'].includes(crop.id);
    }
    if (filter === 'fruits') {
      return crop.category === 'fruits' || crop.id === 'banana';
    }
    return crop.category === filter;
  }

  /* =========================================================================
   * VIEW MANAGEMENT & STEPPER
   * ========================================================================= */

  function switchView(viewId, pushHistory = true) {
    state.activeView = viewId;
    const views = [dom.viewCropSelect, dom.viewQuestionFlow, dom.viewResults, dom.viewAdmin];
    views.forEach(v => {
      if (v) v.classList.remove('active');
    });

    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');

    // Update Minimal Stepper (completed steps show checkmarks)
    updateStepper(viewId);

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // HTML5 History Management to prevent getting kicked out of the site on back button
    if (pushHistory && window.history && window.history.pushState) {
      try {
        const hash = viewId.replace('view-', '');
        window.history.pushState({ viewId, crop: workingMemory.crop }, '', `#${hash}`);
      } catch (_) {}
    }
  }

  function updateStepper(viewId) {
    const checkSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><polyline points="20 6 9 17 4 12"/></svg>`;

    [dom.stepNav1, dom.stepNav2, dom.stepNav3].forEach(el => {
      if (el) el.classList.remove('active', 'completed');
    });

    const c1 = dom.stepNav1 ? dom.stepNav1.querySelector('.step-circle') : null;
    const c2 = dom.stepNav2 ? dom.stepNav2.querySelector('.step-circle') : null;
    const c3 = dom.stepNav3 ? dom.stepNav3.querySelector('.step-circle') : null;

    if (viewId === 'view-crop-select') {
      if (dom.stepNav1) dom.stepNav1.classList.add('active');
      if (c1) c1.textContent = '1';
      if (c2) c2.textContent = '2';
      if (c3) c3.textContent = '3';
    } else if (viewId === 'view-question-flow') {
      if (dom.stepNav1) {
        dom.stepNav1.classList.add('completed');
        if (c1) c1.innerHTML = checkSvg;
      }
      if (dom.stepNav2) dom.stepNav2.classList.add('active');
      if (c2) c2.textContent = '2';
      if (c3) c3.textContent = '3';
    } else if (viewId === 'view-results') {
      if (dom.stepNav1) {
        dom.stepNav1.classList.add('completed');
        if (c1) c1.innerHTML = checkSvg;
      }
      if (dom.stepNav2) {
        dom.stepNav2.classList.add('completed');
        if (c2) c2.innerHTML = checkSvg;
      }
      if (dom.stepNav3) {
        dom.stepNav3.classList.add('active', 'completed');
        if (c3) c3.innerHTML = checkSvg;
      }
    }
  }

  /* =========================================================================
   * LOCALIZATION & UI CHROME UPDATES
   * ========================================================================= */

  function updateHeroStats() {
    const lang = I18N.currentLang;
    const cropsCount = Object.keys(CROPS_METADATA).length;
    const rulesCount = knowledgeAdmin.getAllRules().length;
    const diseasesCount = new Set(knowledgeAdmin.getAllRules().map(r => r.conclusion)).size;

    if (dom.uiHeroStatsLine) {
      if (lang === 'hi') {
        dom.uiHeroStatsLine.innerHTML = `
          <span>${cropsCount} प्रमुख फसलें</span>
          <span class="stats-separator">·</span>
          <span>${rulesCount} नैदानिक नियम</span>
          <span class="stats-separator">·</span>
          <span>${diseasesCount}+ पादप रोग</span>
        `;
      } else {
        dom.uiHeroStatsLine.innerHTML = `
          <span>${cropsCount} crops</span>
          <span class="stats-separator">·</span>
          <span>${rulesCount} diagnostic rules</span>
          <span class="stats-separator">·</span>
          <span>${diseasesCount}+ plant diseases</span>
        `;
      }
    }
  }

  function refreshLocalizedUI() {
    const lang = I18N.currentLang;

    // Update all elements with id="ui-..."
    const uiKeys = [
      'appName', 'appTagline', 'heroTitle', 'heroSubtitle', 'heroStatsLine',
      'navHome', 'navHistory', 'navAdmin', 'navHowItWorks', 'langBtn', 'btnTextSize',
      'modeLabel', 'step1Title', 'step1Subtitle', 'step2Title', 'step2Subtitle',
      'step3Title', 'step3Subtitle', 'btnStartDiagnosis', 'btnNext', 'btnPrev',
      'btnSkip', 'btnWhy', 'btnHow', 'btnRestart', 'btnSaveHistory', 'btnBackHome',
      'btnClearHistory', 'btnExportRules', 'btnImportRules', 'btnResetRules',
      'btnAddRule', 'optYes', 'optLikely', 'optUnsure', 'optNo',
      'resultsHeading', 'topDiagnosisTitle', 'confidenceLabel', 'rankedOtherTitle',
      'tabOrganic', 'tabChemical', 'tabPrevention', 'organicHeader', 'chemicalHeader',
      'preventionHeader', 'disclaimerTitle', 'disclaimerText', 'adminTitle',
      'adminSubtitle', 'tableId', 'tableCrop', 'tableConditions', 'tableConclusion',
      'tableCF', 'tableActions', 'rulesCount',
      'filterLabel', 'filterAll', 'filterCereals', 'filterPulses', 'filterOilseeds',
      'filterVegetables', 'filterCash', 'filterFruits',
      'confirmDiagTitle', 'confirmDiagDesc', 'spraySafetyTitle',
      'safetyTip1', 'safetyTip2', 'safetyTip3', 'safetyTip4',
      'btnSpeakQ', 'btnSpeakRes', 'btnVoiceInput', 'symptomGuideBadge',
      'doThisTodayTitle', 'btnPrintReport', 'ruleTraceTitle', 'ruleTraceSubtitle',
      'footerCollege', 'footerDisclaimer', 'imageCreditsLink',
      'themeLight', 'themeComfort', 'themeDark',
      'btnEmptyRestart', 'btnEmptyChooseCrop',
      'calcTitle', 'calcSubtitle', 'calcAcresLabel', 'calcWaterLabel', 'calcTanksLabel', 'calcMedicineLabel', 'calcTimeLabel'
    ];

    uiKeys.forEach(k => {
      const el = document.getElementById(`ui-${k}`);
      if (el) {
        el.textContent = I18N.get(k);
      }
    });

    // Update Search Input placeholder
    if (dom.cropSearchInput) {
      dom.cropSearchInput.placeholder = I18N.get('cropSearchPlaceholder');
    }

    // Update Mode button texts & descriptions
    if (dom.btnModeForward) dom.btnModeForward.textContent = lang === 'hi' ? 'फॉरवर्ड चेनिंग' : 'Forward Chaining';
    if (dom.btnModeBackward) dom.btnModeBackward.textContent = lang === 'hi' ? 'बैकवर्ड चेनिंग' : 'Backward Chaining';
    if (dom.modeExplanationText) {
      dom.modeExplanationText.textContent = workingMemory.mode === 'forward'
        ? I18N.get('modeForwardDesc')
        : I18N.get('modeBackwardDesc');
    }

    // Update Dynamic Hero Stats line
    updateHeroStats();

    // Update Spray Calculation
    updateSprayCalculation();

    // Re-render current view content
    renderCropSelectionGrid();
    if (state.activeView === 'view-question-flow' && state.currentQuestion) {
      renderActiveQuestion(state.currentQuestion);
    } else if (state.activeView === 'view-results' && state.latestDiagnosisResult) {
      renderDiagnosisResults(state.latestDiagnosisResult);
    } else if (state.activeView === 'view-admin') {
      renderAdminRulesTable();
    }
  }

  /* =========================================================================
   * AUDIO VOICE ASSISTANT & VOICE RECOGNITION (WEB SPEECH API)
   * ========================================================================= */

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert(I18N.get('speechUnsupported'));
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = I18N.currentLang === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = 0.92;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis error:", e);
    }
  }

  function initVoiceRecognition() {
    if (!dom.btnVoiceInput) return;
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      dom.btnVoiceInput.addEventListener('click', () => {
        alert(I18N.get('voiceUnsupported') || "Voice input is not supported in this browser.");
      });
      return;
    }

    const recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = false;

    dom.btnVoiceInput.addEventListener('click', () => {
      const lang = I18N.currentLang;
      recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
      try {
        recognition.start();
        if (dom.voiceStatusPill) {
          dom.voiceStatusPill.style.display = 'inline-flex';
          if (dom.voiceStatusText) {
            dom.voiceStatusText.textContent = I18N.get('voiceListening') || "Listening... Speak now";
          }
        }
      } catch (e) {
        // Recognition might already be running
      }
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      if (dom.voiceStatusPill) dom.voiceStatusPill.style.display = 'none';

      // Match spoken responses
      if (transcript.includes('yes') || transcript.includes('हाँ') || transcript.includes('haan') || transcript.includes('bilkul') || transcript.includes('sahi')) {
        const btn = document.querySelector('.btn-option.opt-yes');
        if (btn) btn.click();
      } else if (transcript.includes('likely') || transcript.includes('mild') || transcript.includes('शायद') || transcript.includes('halka') || transcript.includes('maybe')) {
        const btn = document.querySelector('.btn-option.opt-likely');
        if (btn) btn.click();
      } else if (transcript.includes('no') || transcript.includes('नहीं') || transcript.includes('nahin') || transcript.includes('na')) {
        const btn = document.querySelector('.btn-option.opt-no');
        if (btn) btn.click();
      } else if (transcript.includes('skip') || transcript.includes('unsure') || transcript.includes('छोड़ें') || transcript.includes('pata nahi') || transcript.includes('chhoden')) {
        if (dom.btnSkipQuestion) dom.btnSkipQuestion.click();
      }
    };

    recognition.onerror = () => {
      if (dom.voiceStatusPill) dom.voiceStatusPill.style.display = 'none';
    };

    recognition.onend = () => {
      if (dom.voiceStatusPill) dom.voiceStatusPill.style.display = 'none';
    };
  }

  /* =========================================================================
   * EYE-COMFORT & THEME MANAGER (Light / Comfort / Dark)
   * ========================================================================= */
  function applyTheme(theme, save = true) {
    if (!['light', 'comfort', 'dark'].includes(theme)) theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    if (save) {
      try {
        localStorage.setItem('krishimitra_theme', theme);
      } catch (e) {
        console.warn('Could not save theme preference:', e);
      }
    }
    document.querySelectorAll('.btn-theme-opt').forEach(btn => {
      const isCur = btn.dataset.theme === theme;
      btn.classList.toggle('active', isCur);
      btn.setAttribute('aria-pressed', isCur ? 'true' : 'false');
    });
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem('krishimitra_theme');
    } catch (e) {}

    if (saved && ['light', 'comfort', 'dark'].includes(saved)) {
      applyTheme(saved, false);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light', false);
    }

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        let hasSaved = null;
        try { hasSaved = localStorage.getItem('krishimitra_theme'); } catch (_) {}
        if (!hasSaved) {
          applyTheme(e.matches ? 'dark' : 'light', false);
        }
      });
    }

    document.querySelectorAll('.btn-theme-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const t = e.currentTarget.dataset.theme;
        if (t) applyTheme(t, true);
      });
    });
  }

  /* =========================================================================
   * FIELD SPRAY & DOSAGE CALCULATOR
   * ========================================================================= */

  function updateSprayCalculation() {
    const acresInput = document.getElementById('input-farm-acres');
    if (!acresInput) return;
    const acres = parseFloat(acresInput.value) || 1;
    const isHi = I18N.currentLang === 'hi';

    const minWater = Math.round(acres * 150);
    const maxWater = Math.round(acres * 200);
    const minTanks = Math.max(1, Math.round(minWater / 16));
    const maxTanks = Math.max(1, Math.round(maxWater / 16));
    const minMed = Math.round(acres * 150);
    const maxMed = Math.round(acres * 200);

    const elWater = document.getElementById('calc-val-water');
    const elTanks = document.getElementById('calc-val-tanks');
    const elMed = document.getElementById('calc-val-medicine');
    const elTime = document.getElementById('calc-val-time');

    if (elWater) elWater.textContent = `${minWater} - ${maxWater} ${isHi ? 'लीटर' : 'L'}`;
    if (elTanks) elTanks.textContent = `${minTanks} - ${maxTanks} ${isHi ? 'टंकी' : 'Tanks'}`;
    if (elMed) elMed.textContent = `${minMed} - ${maxMed} ${isHi ? 'मिली / ग्रा' : 'ml / g'}`;
    if (elTime) elTime.textContent = isHi ? 'सुबह 8-11 या शाम 4-6' : '8-11 AM or 4-6 PM';
  }

  /* =========================================================================
   * INFERENCE MODE TOGGLE (Forward Chaining <-> Backward Chaining)
   * ========================================================================= */

  function setInferenceMode(mode) {
    workingMemory.setMode(mode);
    if (mode === 'forward') {
      dom.btnModeForward.classList.add('active');
      dom.btnModeForward.setAttribute('aria-checked', 'true');
      dom.btnModeBackward.classList.remove('active');
      dom.btnModeBackward.setAttribute('aria-checked', 'false');
      dom.modeExplanationText.textContent = I18N.get('modeForwardDesc');
    } else {
      dom.btnModeBackward.classList.add('active');
      dom.btnModeBackward.setAttribute('aria-checked', 'true');
      dom.btnModeForward.classList.remove('active');
      dom.btnModeForward.setAttribute('aria-checked', 'false');
      dom.modeExplanationText.textContent = I18N.get('modeBackwardDesc');
    }

    if (state.activeView === 'view-question-flow') {
      loadNextQuestion();
    }
  }

  dom.btnModeForward.addEventListener('click', () => setInferenceMode('forward'));
  dom.btnModeBackward.addEventListener('click', () => setInferenceMode('backward'));

  /* =========================================================================
   * STEP 1: CROP SELECTION (Consistent 4:3 Ratio, Serif Name, Italic Botanical, In-Season, Live Search)
   * ========================================================================= */

  function renderCropSelectionGrid() {
    const lang = I18N.currentLang;
    dom.cropGridContainer.innerHTML = '';

    const allCrops = Object.values(CROPS_METADATA);
    const query = (state.cropSearchQuery || '').trim().toLowerCase();

    const cropsToRender = allCrops.filter(crop => {
      // 1. Filter by category chip
      const matchCategory = matchesCropCategory(crop, state.activeCropFilter);
      if (!matchCategory) return false;

      // 2. Filter by search query (bilingual English + Hindi + Botanical)
      if (!query) return true;
      const nameEn = (crop.name.en || '').toLowerCase();
      const nameHi = (crop.name.hi || '').toLowerCase();
      const botanical = (crop.botanical || '').toLowerCase();
      const cropId = crop.id.toLowerCase();
      return nameEn.includes(query) || nameHi.includes(query) || botanical.includes(query) || cropId.includes(query);
    });

    if (cropsToRender.length === 0) {
      dom.cropGridContainer.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:36px;height:36px;stroke:var(--color-primary);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h4 class="empty-state-title">${lang === 'hi' ? 'कोई फसल नहीं मिली' : 'No crops found matching criteria'}</h4>
          <p class="empty-state-sub">${lang === 'hi' ? 'कृपया खोज शब्द बदलें या दूसरा फ़िल्टर चुनें।' : 'Try clearing your search or selecting another category filter above.'}</p>
          <button type="button" class="btn-action-outline btn-reset-search" style="margin-top: 10px;">
            ${lang === 'hi' ? 'फ़िल्टर हटाएं' : 'Reset Search & Filters'}
          </button>
        </div>
      `;

      const resetBtn = dom.cropGridContainer.querySelector('.btn-reset-search');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.cropSearchQuery = '';
          state.activeCropFilter = 'all';
          if (dom.cropSearchInput) dom.cropSearchInput.value = '';
          if (dom.btnClearCropSearch) dom.btnClearCropSearch.style.display = 'none';
          document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
          const allChip = document.getElementById('ui-filterAll');
          if (allChip) allChip.classList.add('active');
          renderCropSelectionGrid();
        });
      }
      return;
    }

    cropsToRender.forEach((crop, idx) => {
      const card = document.createElement('div');
      card.className = `crop-card ${state.selectedCropId === crop.id ? 'selected' : ''}`;
      card.setAttribute('role', 'option');
      card.setAttribute('aria-selected', state.selectedCropId === crop.id ? 'true' : 'false');
      card.tabIndex = 0;
      card.dataset.cropId = crop.id;
      card.style.setProperty('--card-index', idx);

      const cropRules = knowledgeAdmin.getAllRules().filter(r => r.crop === crop.id);
      const uniqueConclusions = new Set(cropRules.map(r => r.conclusion));
      const dCount = uniqueConclusions.size || crop.diseasesCount || 6;
      const diseaseLabel = lang === 'hi'
        ? `${dCount} संभावित रोग`
        : `${dCount} diseases`;

      const inSeason = isCropInSeason(crop);
      const inSeasonBadgeHtml = inSeason
        ? `<div class="crop-in-season-badge" aria-label="In season now">${lang === 'hi' ? '✦ वर्तमान सीजन' : '✦ In season now'}</div>`
        : '';

      card.innerHTML = `
        <div class="crop-photo-wrap">
          <img src="${crop.image}" alt="${crop.name[lang] || crop.name.en}" class="crop-photo-img" loading="lazy">
          ${inSeasonBadgeHtml}
          <div class="crop-selected-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <div class="crop-card-body">
          <h4 class="crop-name-title">${crop.name[lang] || crop.name.en}</h4>
          ${crop.botanical ? `<span class="crop-botanical-name">${crop.botanical}</span>` : ''}
          <span class="crop-disease-count">${diseaseLabel}</span>
        </div>
      `;

      card.addEventListener('click', () => selectCrop(crop.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCrop(crop.id);
        }
      });

      dom.cropGridContainer.appendChild(card);
    });
  }

  function selectCrop(cropId) {
    state.selectedCropId = cropId;
    renderCropSelectionGrid();

    const crop = CROPS_METADATA[cropId];
    const lang = I18N.currentLang;
    if (crop) {
      const cName = crop.name[lang] || crop.name.en;
      const bot = crop.botanical || '';
      const count = crop.diseasesCount || 5;

      if (dom.stickyCropIndicator) {
        dom.stickyCropIndicator.textContent = `${cName} ${I18N.get('stickyBarSelected') || 'selected'}`;
      }
      if (dom.stickyCropDetail) {
        dom.stickyCropDetail.textContent = `${bot} · ${count} ${lang === 'hi' ? 'संभावित रोग' : 'candidate diseases'}`;
      }
      if (dom.cropActionBar) {
        dom.cropActionBar.classList.add('has-selection');
      }
    }

    if (dom.btnStartDiagnosis) {
      dom.btnStartDiagnosis.disabled = false;
    }
  }

  // Real-time Crop Search Input
  if (dom.cropSearchInput) {
    dom.cropSearchInput.addEventListener('input', (e) => {
      state.cropSearchQuery = e.target.value;
      if (dom.btnClearCropSearch) {
        dom.btnClearCropSearch.style.display = state.cropSearchQuery ? 'block' : 'none';
      }
      renderCropSelectionGrid();
    });
  }

  if (dom.btnClearCropSearch) {
    dom.btnClearCropSearch.addEventListener('click', () => {
      state.cropSearchQuery = '';
      if (dom.cropSearchInput) dom.cropSearchInput.value = '';
      dom.btnClearCropSearch.style.display = 'none';
      renderCropSelectionGrid();
    });
  }

  // Crop Category Filter Chips (7 Categories)
  document.querySelectorAll('.season-filter-group .chip-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.season-filter-group .chip-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.activeCropFilter = e.currentTarget.dataset.filter || 'all';
      renderCropSelectionGrid();
    });
  });

  dom.btnStartDiagnosis.addEventListener('click', () => {
    if (!state.selectedCropId) return;
    startDiagnosisSession(state.selectedCropId);
  });

  /* =========================================================================
   * STEP 2: SYMPTOM ASSESSMENT QUESTION FLOW (With Botanical Reference Card)
   * ========================================================================= */

  function startDiagnosisSession(cropId) {
    workingMemory.setCrop(cropId);
    let cropRules = inferenceEngine.getCropRules(cropId);

    // Self-healing: if rules for this crop are missing in memory (e.g. from an old localStorage cache)
    if (!cropRules || cropRules.length === 0) {
      console.warn(`No rules found for crop ${cropId} in active engine. Refreshing from factory knowledge base.`);
      knowledgeAdmin.resetToDefault();
      inferenceEngine.setKnowledgeBase(knowledgeAdmin.getAllRules());
      cropRules = inferenceEngine.getCropRules(cropId);
    }

    state.selectedCropRules = cropRules;
    state.currentQuestionIndex = 0;
    state.totalEstimatedQuestions = 5;

    // Set initial goal if in backward chaining mode
    if (workingMemory.mode === 'backward') {
      const candidateGoals = inferenceEngine.getGoalHypothesesForCrop(cropId);
      if (candidateGoals.length > 0) {
        workingMemory.activeHypothesis = candidateGoals[0].diseaseId;
      }
    }

    switchView('view-question-flow');
    loadNextQuestion();
  }

  function loadNextQuestion() {
    let nextQ = null;
    if (workingMemory.mode === 'forward') {
      nextQ = inferenceEngine.getNextForwardQuestion();
    } else {
      nextQ = inferenceEngine.getNextBackwardQuestion();
    }

    if (!nextQ) {
      // Diagnostic scan complete: derive conclusions
      concludeDiagnosis();
      return;
    }

    state.currentQuestion = nextQ;
    state.currentQuestionIndex++;
    renderActiveQuestion(nextQ);
  }

  function renderActiveQuestion(q) {
    const lang = I18N.currentLang;
    const symptomId = q.symptomId;
    const meta = SYMPTOMS_METADATA[symptomId] || {
      icon: '🌿',
      label: { en: symptomId, hi: symptomId },
      question: { en: `Is ${symptomId} present?`, hi: `क्या ${symptomId} लक्षण मौजूद है?` }
    };

    const cropMeta = CROPS_METADATA[workingMemory.crop] || { icon: '🌾', name: { en: 'Crop', hi: 'फसल' } };
    dom.questionCropTag.querySelector('span').textContent = `${cropMeta.name[lang] || cropMeta.name.en}`;
    dom.questionCounter.textContent = `${lang === 'hi' ? 'सवाल' : 'Question'} ${state.currentQuestionIndex}`;

    // Render Botanical Reference Visual Card
    if (dom.symptomVisualContainer && typeof SYMPTOM_VISUALS !== 'undefined') {
      dom.symptomVisualContainer.innerHTML = SYMPTOM_VISUALS.getIllustration(symptomId);
    }

    dom.questionIcon.innerHTML = '<svg class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"/></svg>';
    dom.questionHeading.textContent = meta.question[lang] || meta.question.en;
    dom.questionSymptomDesc.textContent = meta.label[lang] || meta.label.en;

    // Configure previous button: on Q1 allow "Change Crop", on Q2+ allow "Previous"
    if (dom.btnPrevQuestion) {
      dom.btnPrevQuestion.disabled = false;
      const prevSpan = dom.btnPrevQuestion.querySelector('span');
      if (prevSpan) {
        if (workingMemory.questionHistory.length === 0) {
          prevSpan.textContent = lang === 'hi' ? '← फसल बदलें' : '← Change Crop';
        } else {
          prevSpan.textContent = lang === 'hi' ? '← पिछला सवाल' : '← Previous';
        }
      }
    }
  }

  // Handle Response Option Clicks (Yes, Likely, Unsure, No)
  dom.responseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!state.currentQuestion) return;
      const choice = btn.dataset.choice;
      const cf = parseFloat(btn.dataset.cf || '0.0');
      handleUserAnswer(choice, cf);
    });
  });

  function handleUserAnswer(choice, cf) {
    const symptomId = state.currentQuestion.symptomId;
    let isPresent = false;
    let assertionCF = 0.0;

    if (choice === 'yes') {
      isPresent = true;
      assertionCF = 1.0;
      workingMemory.assertFact(symptomId, isPresent, assertionCF);
    } else if (choice === 'likely') {
      isPresent = true;
      assertionCF = 0.65;
      workingMemory.assertFact(symptomId, isPresent, assertionCF);
    } else if (choice === 'no') {
      isPresent = false;
      assertionCF = 0.0;
      workingMemory.assertFact(symptomId, isPresent, assertionCF);
    } else {
      // 'unsure': skipped by user
      workingMemory.skipSymptom(symptomId);
    }

    workingMemory.logQuestionAnswered(symptomId, choice, assertionCF, state.currentQuestion);

    // Check if early high-confidence diagnosis reached
    const intermediateScan = inferenceEngine.runForwardChaining();
    if (intermediateScan.top3.length > 0 && intermediateScan.top3[0].combinedCF >= 0.90) {
      concludeDiagnosis();
    } else {
      loadNextQuestion();
    }
  }

  dom.btnSkipQuestion.addEventListener('click', () => {
    if (!state.currentQuestion) return;
    const symptomId = state.currentQuestion.symptomId;
    workingMemory.skipSymptom(symptomId);
    workingMemory.logQuestionAnswered(symptomId, 'skip', 0.0, state.currentQuestion);
    loadNextQuestion();
  });

  dom.btnPrevQuestion.addEventListener('click', () => {
    if (workingMemory.questionHistory.length === 0) {
      // At Question 1: return cleanly to crop selection
      workingMemory.resetAll();
      state.selectedCropId = null;
      switchView('view-crop-select');
      renderCropSelectionGrid();
      return;
    }
    const last = workingMemory.questionHistory.pop();
    workingMemory.retractFact(last.symptomId);
    workingMemory.unskipSymptom(last.symptomId);
    state.currentQuestionIndex = Math.max(1, state.currentQuestionIndex - 1);
    loadNextQuestion();
  });

  // "Why was this asked?" Button
  dom.btnWhyQuestion.addEventListener('click', () => {
    if (!state.currentQuestion) return;
    const whyData = explanationFacility.generateWhyExplanation(
      state.currentQuestion.symptomId,
      state.currentQuestion
    );
    showWhyModal(whyData);
  });

  /* =========================================================================
   * STEP 3: RESULTS & ADVISORY (2-Column Desktop, Circular Gauge, Differential Check, Spray Safety)
   * ========================================================================= */

  function concludeDiagnosis() {
    let result = null;
    if (workingMemory.mode === 'forward') {
      result = inferenceEngine.runForwardChaining();
    } else {
      result = inferenceEngine.runBackwardChaining();
    }

    state.latestDiagnosisResult = result;
    state.differentialChecks = null;
    state.differentialChecksCrop = null;
    state.differentialChecksDisease = null;
    renderDiagnosisResults(result);
    switchView('view-results');
  }

  function recalculateAndRefreshDiagnosis() {
    let result = null;
    if (workingMemory.mode === 'forward') {
      result = inferenceEngine.runForwardChaining();
    } else {
      result = inferenceEngine.runBackwardChaining();
    }
    state.latestDiagnosisResult = result;
    renderDiagnosisResults(result);
  }

  function renderDiagnosisResults(result) {
    const lang = I18N.currentLang;
    const top3 = result.top3 || [];
    const matchedView = document.getElementById('diagnosis-matched-view');
    const unmatchedView = document.getElementById('diagnosis-unmatched-view');

    // Populate Print-Only Clinical Prescription Header
    const printDate = document.getElementById('print-report-date');
    const printRef = document.getElementById('print-ref-id');
    const printCrop = document.getElementById('print-crop-name');
    const printDiag = document.getElementById('print-diagnosis-name');
    const printCf = document.getElementById('print-cf-value');

    const now = new Date();
    if (printDate) printDate.textContent = now.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    if (printRef) printRef.textContent = `KM-${Math.floor(100000 + Math.random() * 900000)}`;

    const currentCropId = workingMemory.crop;
    const currentCropMeta = CROPS_METADATA[currentCropId] || { name: { en: currentCropId || 'Crop', hi: currentCropId || 'फसल' }, botanical: '' };
    const currentCropName = currentCropMeta.name[lang] || currentCropMeta.name.en;
    if (printCrop) printCrop.textContent = `${currentCropName} (${currentCropMeta.botanical || ''})`;

    if (top3.length === 0) {
      if (matchedView) matchedView.style.display = 'none';
      if (unmatchedView) unmatchedView.style.display = 'block';
      if (dom.alternativeDiagnosesSection) dom.alternativeDiagnosesSection.style.display = 'none';

      if (printDiag) printDiag.textContent = lang === 'hi' ? 'लक्षण अनिर्णायक (अस्पष्ट)' : 'Inconclusive Symptoms';
      if (printCf) printCf.textContent = '0% — Further inspection recommended';

      // Reset sidebar gauge to clean 0% and Inconclusive
      if (dom.resultPrimaryCf) dom.resultPrimaryCf.textContent = '0%';
      if (dom.gaugeProgressCircle) {
        const circumference = 314.16;
        dom.gaugeProgressCircle.style.strokeDasharray = `${circumference}`;
        dom.gaugeProgressCircle.style.strokeDashoffset = `${circumference}`;
      }
      if (dom.sidebarSeverityTag) {
        dom.sidebarSeverityTag.className = 'severity-badge severity-low';
        dom.sidebarSeverityTag.textContent = lang === 'hi' ? 'अनिर्णायक' : 'Inconclusive';
      }
      if (dom.btnSaveDiagnosis) dom.btnSaveDiagnosis.disabled = true;
      if (dom.btnHowConclusion) dom.btnHowConclusion.disabled = true;
      return;
    }

    if (matchedView) matchedView.style.display = 'block';
    if (unmatchedView) unmatchedView.style.display = 'none';
    if (dom.btnSaveDiagnosis) dom.btnSaveDiagnosis.disabled = false;
    if (dom.btnHowConclusion) dom.btnHowConclusion.disabled = false;

    const primary = top3[0];
    const diseaseName = primary.diseaseName ? (primary.diseaseName[lang] || primary.diseaseName.en) : primary.diseaseId;
    const cropMeta = CROPS_METADATA[primary.crop] || currentCropMeta;
    const cropName = cropMeta.name[lang] || cropMeta.name.en;

    if (dom.resultPrimaryName) dom.resultPrimaryName.textContent = diseaseName;
    if (dom.resultPrimaryCrop) dom.resultPrimaryCrop.textContent = `${cropName} · ${cropMeta.botanical || ''}`;
    if (dom.resultPrimaryCf) dom.resultPrimaryCf.textContent = `${primary.percentage}%`;

    if (printDiag) printDiag.textContent = diseaseName;
    if (printCf) printCf.textContent = `${primary.percentage}% Certainty`;

    // Circular Confidence Gauge Animation
    if (dom.gaugeProgressCircle) {
      const circumference = 314.16;
      const offset = circumference - (circumference * (primary.percentage / 100));
      dom.gaugeProgressCircle.style.strokeDasharray = `${circumference}`;
      dom.gaugeProgressCircle.style.strokeDashoffset = `${offset}`;
    }

    // Severity Tag Determination (Main badge & Sidebar badge)
    let severity = 'high';
    let severityText = I18N.get('severityHigh');
    const pId = primary.diseaseId.toLowerCase();
    if (pId.includes('rust') || pId.includes('blight') || pId.includes('bollworm') || pId.includes('virus') || pId.includes('wilt') || pId.includes('rot')) {
      severity = 'high';
      severityText = I18N.get('severityHigh');
    } else if (primary.percentage >= 80) {
      severity = 'med';
      severityText = I18N.get('severityMed');
    } else {
      severity = 'low';
      severityText = I18N.get('severityLow');
    }

    if (dom.resultSeverityTag) {
      dom.resultSeverityTag.className = `severity-badge severity-${severity}`;
      dom.resultSeverityTag.textContent = severityText;
    }
    if (dom.sidebarSeverityTag) {
      dom.sidebarSeverityTag.className = `severity-badge severity-${severity}`;
      dom.sidebarSeverityTag.textContent = severityText;
    }

    // Treatment details
    const organicText = (primary.treatment && primary.treatment.organic)
      ? (primary.treatment.organic[lang] || primary.treatment.organic.en)
      : 'Consult local agricultural extension.';
    const chemicalText = (primary.treatment && primary.treatment.chemical)
      ? (primary.treatment.chemical[lang] || primary.treatment.chemical.en)
      : 'Consult local agricultural extension.';
    const preventionText = primary.prevention
      ? (primary.prevention[lang] || primary.prevention.en)
      : 'Follow crop rotation and certified disease-free seeds.';

    dom.resultOrganicText.textContent = organicText;
    dom.resultChemicalText.textContent = chemicalText;
    dom.resultPreventionText.textContent = preventionText;

    // 'Do this today' Immediate Emergency Action Box
    if (dom.resultDoThisTodayText) {
      let doThisToday = "";
      if (lang === 'hi') {
        doThisToday = `खेत के प्रभावित हिस्से को तुरंत अलग करें। रोग फैलाव रोकने के लिए कल सुबह की ओस सूखने से पहले ${chemicalText.split('।')[0] || 'अनुशंसित कवकनाशी'} का छिड़काव अवश्य करें।`;
      } else {
        doThisToday = `Isolate affected crop rows immediately. Execute targeted foliar application (${chemicalText.split('.')[0] || 'recommended formulation'}) early morning before dew dries to arrest spore transmission.`;
      }
      dom.resultDoThisTodayText.textContent = doThisToday;
    }

    // "Confirm your diagnosis" (Differential Diagnostic Check)
    renderDifferentialCheckSection(primary, top3.length > 1 ? top3[1] : null);

    // Rule Trace Reasoning Timeline
    renderRuleTraceSection(primary, lang);

    // Alternative Possibilities Considered (Ranked 2 and 3)
    renderAlternativeDiagnosesSection(top3, primary, lang);
  }

  function renderDifferentialCheckSection(primary, runnerUp) {
    if (!dom.confirmDifferentialContainer) return;

    // Construct up to 2 targeted checks if not already cached for this primary diagnosis
    if (!state.differentialChecks || state.differentialChecksCrop !== primary.crop || state.differentialChecksDisease !== primary.diseaseId) {
      state.differentialChecks = [];
      state.differentialChecksCrop = primary.crop;
      state.differentialChecksDisease = primary.diseaseId;

      const getRuleDiseaseId = r => typeof r.conclusion === 'object' ? r.conclusion.diseaseId : r.conclusion;
      const getRuleDiseaseName = r => r.disease_name || (r.conclusion && r.conclusion.diseaseName);

      const primaryCropRules = inferenceEngine.knowledgeBase.filter(r => r.crop === primary.crop && getRuleDiseaseId(r) === primary.diseaseId);
      const primaryConditionsSet = new Set();
      primaryCropRules.forEach(r => r.conditions.forEach(c => primaryConditionsSet.add(c)));

      // Check 1: Confirmatory symptom for Primary Diagnosis
      let primaryUnanswered = null;
      for (const r of primaryCropRules) {
        for (const condId of r.conditions) {
          if (!workingMemory.hasFact(condId) && !workingMemory.isSkipped(condId)) {
            primaryUnanswered = condId;
            break;
          }
        }
        if (primaryUnanswered) break;
      }

      if (primaryUnanswered) {
        state.differentialChecks.push({
          id: 'diff_primary_' + primaryUnanswered,
          symptomId: primaryUnanswered,
          type: 'confirm_primary',
          targetDiseaseId: primary.diseaseId,
          targetDiseaseName: primary.diseaseName,
          status: null,
          outcomeMessage: null
        });
      }

      // Check 2: Distinguishing symptom vs Runner-Up candidate (if runnerUp exists or competing crop disease)
      let runnerUpUnanswered = null;
      let runnerUpDiseaseName = runnerUp ? runnerUp.diseaseName : null;
      let runnerUpDiseaseId = runnerUp ? runnerUp.diseaseId : null;

      if (runnerUp && runnerUp.diseaseId !== primary.diseaseId) {
        const runnerUpRules = inferenceEngine.knowledgeBase.filter(r => r.crop === primary.crop && getRuleDiseaseId(r) === runnerUp.diseaseId);
        for (const r of runnerUpRules) {
          for (const condId of r.conditions) {
            if (!primaryConditionsSet.has(condId) && !workingMemory.hasFact(condId) && !workingMemory.isSkipped(condId)) {
              runnerUpUnanswered = condId;
              runnerUpDiseaseName = runnerUp.diseaseName || getRuleDiseaseName(r);
              runnerUpDiseaseId = runnerUp.diseaseId;
              break;
            }
          }
          if (runnerUpUnanswered) break;
        }
      }

      // If no runner-up symptom found, check other diseases of this crop
      if (!runnerUpUnanswered) {
        const otherCropRules = inferenceEngine.getCropRules(primary.crop).filter(r => getRuleDiseaseId(r) !== primary.diseaseId);
        for (const r of otherCropRules) {
          for (const condId of r.conditions) {
            if (!primaryConditionsSet.has(condId) && !workingMemory.hasFact(condId) && !workingMemory.isSkipped(condId)) {
              runnerUpUnanswered = condId;
              runnerUpDiseaseName = getRuleDiseaseName(r);
              runnerUpDiseaseId = getRuleDiseaseId(r);
              break;
            }
          }
          if (runnerUpUnanswered) break;
        }
      }

      if (runnerUpUnanswered && runnerUpUnanswered !== primaryUnanswered) {
        state.differentialChecks.push({
          id: 'diff_runnerup_' + runnerUpUnanswered,
          symptomId: runnerUpUnanswered,
          type: 'distinguish_runnerup',
          targetDiseaseId: runnerUpDiseaseId,
          targetDiseaseName: runnerUpDiseaseName,
          status: null,
          outcomeMessage: null
        });
      }
    }

    renderDifferentialCheckDOM(primary);
  }

  function renderDifferentialCheckDOM(primary) {
    if (!dom.confirmDifferentialContainer) return;
    const lang = I18N.currentLang;
    dom.confirmDifferentialContainer.innerHTML = '';

    const checks = state.differentialChecks || [];

    if (checks.length === 0) {
      dom.confirmDifferentialContainer.innerHTML = `
        <div class="diff-all-verified-msg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="diff-verified-icon">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          <span>${lang === 'hi' ? 'सभी प्रमुख नैदानिक अंतर-लक्षण सत्यापित हो चुके हैं।' : 'All key diagnostic differential symptoms have been verified.'}</span>
        </div>
      `;
      return;
    }

    let allAnswered = true;

    checks.forEach(check => {
      if (check.status === null) allAnswered = false;

      const sId = check.symptomId;
      const sMeta = SYMPTOMS_METADATA[sId] || {
        label: { en: sId, hi: sId },
        question: { en: `Did you also observe ${sId}?`, hi: `क्या आपने ${sId} भी देखा?` }
      };

      const primaryNameStr = primary.diseaseName ? (primary.diseaseName[lang] || primary.diseaseName.en) : primary.diseaseId;
      const targetNameStr = check.targetDiseaseName ? (check.targetDiseaseName[lang] || check.targetDiseaseName.en) : (check.targetDiseaseId || '');

      const diffItem = document.createElement('div');
      diffItem.className = 'confirm-differential-item differential-item';

      let eyebrowHtml = '';
      if (check.type === 'confirm_primary') {
        eyebrowHtml = `
          <span class="diff-item-eyebrow diff-eyebrow-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width:13px;height:13px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            ${lang === 'hi' ? 'पुष्टिकरण लक्षण' : 'Confirmatory Check'} · ${primaryNameStr}
          </span>
        `;
      } else {
        eyebrowHtml = `
          <span class="diff-item-eyebrow diff-eyebrow-runnerup">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width:13px;height:13px;"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/><path d="M18 8l4 4-4 4"/></svg>
            ${lang === 'hi' ? 'भेदक पहचान' : 'Differential Distinction'} · ${lang === 'hi' ? 'तुलना:' : 'vs.'} ${targetNameStr}
          </span>
        `;
      }

      let actionsHtml = '';
      if (check.status === null) {
        actionsHtml = `
          <div class="confirm-diff-actions diff-buttons-group">
            <button type="button" class="btn-diff btn-diff-confirm btn-diff-yes" data-id="${check.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px;"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${lang === 'hi' ? 'हाँ, देखा गया' : 'Yes, observed'}</span>
            </button>
            <button type="button" class="btn-diff btn-diff-confirm btn-diff-no" data-id="${check.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span>${lang === 'hi' ? 'नहीं, अनुपस्थित' : 'No, absent'}</span>
            </button>
          </div>
        `;
      } else if (check.status === 'confirmed') {
        actionsHtml = `
          <div class="diff-badge-status diff-badge-confirmed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:15px;height:15px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>${check.outcomeMessage}</span>
          </div>
        `;
      } else if (check.status === 'ruled_out') {
        actionsHtml = `
          <div class="diff-badge-status diff-badge-ruled-out">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:15px;height:15px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>${check.outcomeMessage}</span>
          </div>
        `;
      } else {
        // 'unobserved'
        actionsHtml = `
          <div class="diff-badge-status diff-badge-unobserved">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:15px;height:15px;"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            <span>${check.outcomeMessage}</span>
          </div>
        `;
      }

      diffItem.innerHTML = `
        <div class="confirm-diff-text diff-symptom-text">
          ${eyebrowHtml}
          <strong class="diff-symptom-title">${sMeta.label[lang] || sMeta.label.en}</strong>
          <span class="diff-symptom-prompt">${sMeta.question[lang] || sMeta.question.en}</span>
        </div>
        ${actionsHtml}
      `;

      if (check.status === null) {
        diffItem.querySelector('.btn-diff-yes').addEventListener('click', () => {
          handleDifferentialResponse(check, true, primary);
        });
        diffItem.querySelector('.btn-diff-no').addEventListener('click', () => {
          handleDifferentialResponse(check, false, primary);
        });
      }

      dom.confirmDifferentialContainer.appendChild(diffItem);
    });

    if (allAnswered && checks.length > 0) {
      const banner = document.createElement('div');
      banner.className = 'diff-completion-banner';
      banner.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:18px;height:18px;flex-shrink:0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span>${lang === 'hi' ? 'अंतर-पहचान पूर्ण · प्राथमिक निदान की सत्यता प्रमाणित' : 'Differential check complete · Diagnosis clinically verified'}</span>
      `;
      dom.confirmDifferentialContainer.appendChild(banner);
    }
  }

  function handleDifferentialResponse(check, isYes, primary) {
    const lang = I18N.currentLang;
    const targetNameStr = check.targetDiseaseName ? (check.targetDiseaseName[lang] || check.targetDiseaseName.en) : (check.targetDiseaseId || '');

    if (isYes) {
      workingMemory.assertFact(check.symptomId, true, 1.0);
      const res = workingMemory.mode === 'forward' ? inferenceEngine.runForwardChaining() : inferenceEngine.runBackwardChaining();
      state.latestDiagnosisResult = res;

      const newPrimary = (res.top3 && res.top3.length > 0) ? res.top3[0] : primary;

      if (check.type === 'confirm_primary') {
        check.status = 'confirmed';
        check.outcomeMessage = lang === 'hi'
          ? `पुष्टि हुई (+निश्चयता कारक ${newPrimary.percentage}%)`
          : `Confirmed (+CF increased to ${newPrimary.percentage}%)`;

        updateGaugeAndCfDisplays(res);
        renderRuleTraceSection(newPrimary, lang);
      } else {
        // 'distinguish_runnerup'
        check.status = 'confirmed';
        check.outcomeMessage = lang === 'hi'
          ? `लक्षण मौजूद · ${targetNameStr} की सम्भावना पर भी विचार करें`
          : `Symptom observed · Consider co-factor for ${targetNameStr}`;

        renderAlternativeDiagnosesSection(res.top3, newPrimary, lang);
      }
    } else {
      // isYes is FALSE
      if (check.type === 'confirm_primary') {
        // Secondary symptom was unobserved; mark as skipped so it does NOT disqualify the established diagnosis!
        workingMemory.skipSymptom(check.symptomId);
        check.status = 'unobserved';
        check.outcomeMessage = lang === 'hi'
          ? 'अनुपस्थित (निदान पूर्व-सत्यापित लक्षणों पर स्थिर है)'
          : 'Not observed (Diagnosis remains solid on confirmed symptoms)';
      } else {
        // 'distinguish_runnerup'
        // Runner-up symptom is FALSE, refuting the runner-up rule!
        workingMemory.assertFact(check.symptomId, false, 0.0);
        const res = workingMemory.mode === 'forward' ? inferenceEngine.runForwardChaining() : inferenceEngine.runBackwardChaining();
        state.latestDiagnosisResult = res;

        check.status = 'ruled_out';
        check.outcomeMessage = lang === 'hi'
          ? `✓ ${targetNameStr} निरस्त (रूल आउट)`
          : `✓ ${targetNameStr} ruled out`;

        const newPrimary = (res.top3 && res.top3.length > 0) ? res.top3[0] : primary;
        renderAlternativeDiagnosesSection(res.top3, newPrimary, lang);
      }
    }

    renderDifferentialCheckDOM(primary);
  }

  function updateGaugeAndCfDisplays(result) {
    if (!result || !result.top3 || result.top3.length === 0) return;
    const primary = result.top3[0];
    if (dom.resultPrimaryCf) dom.resultPrimaryCf.textContent = `${primary.percentage}%`;

    const printCf = document.getElementById('print-cf-value');
    if (printCf) printCf.textContent = `${primary.percentage}% Certainty`;

    if (dom.gaugeProgressCircle) {
      const circumference = 314.16;
      const offset = circumference - (circumference * (primary.percentage / 100));
      dom.gaugeProgressCircle.style.strokeDasharray = `${circumference}`;
      dom.gaugeProgressCircle.style.strokeDashoffset = `${offset}`;
    }
  }

  function renderRuleTraceSection(primary, lang) {
    if (!dom.ruleTraceContainer) return;
    dom.ruleTraceContainer.innerHTML = '';
    const firedRules = primary.firedRules || [];
    if (firedRules.length === 0) {
      dom.ruleTraceContainer.innerHTML = `<p style="font-size: 0.88rem; color: var(--color-text-muted);">No rules fired.</p>`;
      return;
    }
    firedRules.forEach((fr, idx) => {
      const r = fr.rule;
      const evalRes = fr.evalResult;
      const stepItem = document.createElement('div');
      stepItem.className = 'trace-step-item';

      const condNames = r.conditions.map(cId => {
        const sm = SYMPTOMS_METADATA[cId];
        return sm ? (sm.label[lang] || sm.label.en) : cId;
      }).join(', ');

      const refHtml = r.reference
        ? `<span class="trace-ref-tag" style="margin-top:4px; display:inline-block; font-size:0.75rem; background:rgba(31,77,58,0.08); color:var(--color-primary); padding:2px 8px; border-radius:4px;">📜 ${r.reference}</span>`
        : '';

      stepItem.innerHTML = `
        <span class="trace-rule-name">Step ${idx + 1}: Rule ${r.id} Fired</span>
        <span class="trace-rule-conditions">Verified Conditions: ${condNames}</span>
        <span class="trace-rule-calc">Premise CF: ${evalRes.premiseCF} × Rule CF: ${r.cf} = Derived CF: ${evalRes.derivedCF} (${Math.round(evalRes.derivedCF * 100)}%)</span>
        ${refHtml}
      `;
      dom.ruleTraceContainer.appendChild(stepItem);
    });

    if (firedRules.length > 1) {
      const finalStep = document.createElement('div');
      finalStep.className = 'trace-step-item';
      finalStep.innerHTML = `
        <span class="trace-rule-name">Evidence Combined (MYCIN Formula)</span>
        <span class="trace-rule-conditions">Formula: CF_comb(CF1, CF2) = CF1 + CF2 × (1 - CF1)</span>
        <span class="trace-rule-calc">Combined Diagnostic Certainty: ${primary.percentage}%</span>
      `;
      dom.ruleTraceContainer.appendChild(finalStep);
    }
  }

  function renderAlternativeDiagnosesSection(top3, primary, lang) {
    if (!dom.alternativeDiagnosesList || !dom.alternativeDiagnosesSection) return;
    dom.alternativeDiagnosesList.innerHTML = '';
    const alternatives = top3.slice(1);
    if (alternatives.length > 0) {
      dom.alternativeDiagnosesSection.style.display = 'block';
      alternatives.forEach((alt, idx) => {
        const altName = alt.diseaseName ? (alt.diseaseName[lang] || alt.diseaseName.en) : alt.diseaseId;

        const missingSymptoms = [];
        const altRules = inferenceEngine.getCropRules(primary.crop).filter(r => (r.conclusion.diseaseId || r.conclusion) === alt.diseaseId);
        altRules.forEach(r => {
          r.conditions.forEach(c => {
            const fact = workingMemory.getFact(c);
            if (!fact || !fact.value) {
              const sm = SYMPTOMS_METADATA[c];
              const label = sm ? (sm.label[lang] || sm.label.en) : c;
              if (!missingSymptoms.includes(label)) missingSymptoms.push(label);
            }
          });
        });

        const whyText = missingSymptoms.length > 0
          ? (lang === 'hi' ? `अनुपस्थित / असत्यापित लक्षण: ${missingSymptoms.slice(0, 2).join(', ')}` : `Missing or unverified: ${missingSymptoms.slice(0, 2).join(', ')}`)
          : (lang === 'hi' ? `प्राथमिक रोग की तुलना में कम साक्ष्य लागू हुए` : `Fewer matching premise rules than primary diagnosis`);

        const card = document.createElement('div');
        card.className = 'alt-diag-item';
        card.innerHTML = `
          <div class="alt-diag-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span class="alt-diag-name" style="font-weight:700; color:var(--color-primary);">${idx + 2}. ${altName}</span>
            <span class="alt-diag-cf" style="font-weight:800; color:var(--color-accent);">${alt.percentage}% CF</span>
          </div>
          <div class="alt-cf-bar-track" style="height:6px; background:var(--border-light); border-radius:3px; overflow:hidden; margin-bottom:8px;">
            <div class="alt-cf-bar-fill" style="width: ${alt.percentage}%; height:100%; background:var(--color-primary); border-radius:3px;"></div>
          </div>
          <p class="alt-diag-why" style="font-size:0.8rem; color:var(--color-text-subtle); margin:0;">
            <em>${lang === 'hi' ? 'कम संभावना का कारण:' : "Why it's less likely:"}</em> ${whyText}
          </p>
        `;
        dom.alternativeDiagnosesList.appendChild(card);
      });
    } else {
      dom.alternativeDiagnosesSection.style.display = 'none';
    }
  }

  // Print Report as Official Clean White Document / PDF
  if (dom.btnPrintReport) {
    dom.btnPrintReport.addEventListener('click', () => {
      window.print();
    });
  }

  // "How did you reach this conclusion?" Button
  dom.btnHowConclusion.addEventListener('click', () => {
    if (!state.latestDiagnosisResult) return;
    const howData = explanationFacility.generateHowExplanation(state.latestDiagnosisResult.diagnoses);
    showHowModal(howData);
  });

  // "Save Diagnosis to History" Button
  dom.btnSaveDiagnosis.addEventListener('click', () => {
    if (!state.latestDiagnosisResult || !state.latestDiagnosisResult.top3.length) return;
    const primary = state.latestDiagnosisResult.top3[0];
    const record = {
      crop: state.selectedCropId,
      mode: workingMemory.mode,
      primaryDiagnosis: primary,
      top3: state.latestDiagnosisResult.top3,
      symptomsCount: workingMemory.facts.size,
      combinedCF: primary.combinedCF
    };

    historyManager.saveDiagnosis(record);
    dom.btnSaveDiagnosis.textContent = `✓ ${I18N.get('btnSaved') || 'Saved!'}`;
    dom.btnSaveDiagnosis.disabled = true;
    setTimeout(() => {
      dom.btnSaveDiagnosis.textContent = I18N.get('btnSaveHistory');
      dom.btnSaveDiagnosis.disabled = false;
    }, 2500);
  });

  // "Diagnose Another Crop" Button
  dom.btnRestartDiagnosis.addEventListener('click', () => {
    workingMemory.resetAll();
    state.selectedCropId = null;
    state.latestDiagnosisResult = null;
    state.currentQuestion = null;
    state.currentQuestionIndex = 0;
    state.differentialChecks = null;
    state.differentialChecksCrop = null;
    state.differentialChecksDisease = null;
    if (dom.btnStartDiagnosis) dom.btnStartDiagnosis.disabled = true;
    if (dom.stickyCropIndicator) dom.stickyCropIndicator.textContent = I18N.get('stickyBarPrompt') || "Select a crop above to begin diagnosis";
    if (dom.stickyCropDetail) dom.stickyCropDetail.textContent = "Choose from 17 major staple, cash, pulse and vegetable crops";
    switchView('view-crop-select');
    renderCropSelectionGrid();
  });

  // Buttons in the Unmatched / Inconclusive Fallback View
  const btnEmptyRestart = document.getElementById('btn-empty-restart');
  if (btnEmptyRestart) {
    btnEmptyRestart.addEventListener('click', () => {
      if (workingMemory.crop) {
        startDiagnosisSession(workingMemory.crop);
      } else {
        switchView('view-crop-select');
      }
    });
  }

  const btnEmptyChooseCrop = document.getElementById('btn-empty-choose-crop');
  if (btnEmptyChooseCrop) {
    btnEmptyChooseCrop.addEventListener('click', () => {
      workingMemory.resetAll();
      state.selectedCropId = null;
      switchView('view-crop-select');
      renderCropSelectionGrid();
    });
  }

  /* =========================================================================
   * MODAL EXPLANATION RENDERING
   * ========================================================================= */

  function showWhyModal(whyData) {
    const lang = I18N.currentLang;
    let html = `
      <div style="margin-bottom: 14px;">
        <h4 style="font-size: 1.15rem; color: var(--color-primary); font-family: var(--font-serif); margin-bottom: 6px;">
          ${whyData.symptomName}
        </h4>
        <p style="font-size: 0.92rem; color: var(--color-text-subtle); line-height: 1.55;">
          ${whyData.explanationText}
        </p>
      </div>
    `;

    if (whyData.mode === 'backward') {
      html += `
        <div style="background: var(--bg-canvas-subtle); border-radius: var(--radius-sm); padding: 14px; margin-top: 12px;">
          <h5 style="font-size: 0.88rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">
            ${lang === 'hi' ? 'परिकल्पना स्थिति:' : 'Goal Hypothesis Evaluation:'} ${whyData.goalDiseaseName} (${whyData.targetRuleId})
          </h5>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px; font-size: 0.85rem;">
            ${whyData.conditionsTrace.map(c => `
              <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-light); padding-bottom: 4px;">
                <span>${c.name}</span>
                <span style="font-weight: 700;">${c.statusText}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    } else {
      html += `
        <div style="background: var(--bg-canvas-subtle); border-radius: var(--radius-sm); padding: 14px; margin-top: 12px;">
          <h5 style="font-size: 0.88rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">
            ${lang === 'hi' ? 'संबंधित सक्रिय नियम:' : 'Candidate Rules Affected:'}
          </h5>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
            ${whyData.ruleDetails.map(r => `
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-light); padding-bottom: 4px;">
                <span><strong>${r.id}</strong>: ${r.diseaseName}</span>
                <span style="color: var(--color-primary); font-weight: 700;">CF: ${r.cf}% (${r.metCount}/${r.conditionsCount} met)</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    dom.modalWhyContent.innerHTML = html;
    dom.modalWhy.classList.add('open');
  }

  function showHowModal(howData) {
    const lang = I18N.currentLang;
    let html = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <!-- Fired Rules Section -->
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--color-primary); margin-bottom: 10px;">
            ${I18N.get('rulesFiredTitle')}
          </h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${howData.diagnosisTraces.map(dt => `
              <div style="background: var(--bg-canvas-subtle); border-radius: var(--radius-sm); padding: 14px; border: 1px solid var(--border-light);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                  <strong style="color: var(--color-primary); font-size: 1rem;">${dt.diseaseName}</strong>
                  <span style="font-weight: 800; color: var(--color-primary); font-size: 1.1rem;">${dt.finalPercentage}% CF</span>
                </div>
                <div style="font-size: 0.85rem; color: var(--color-text-subtle); margin-bottom: 8px;">
                  ${dt.firedRules.map(fr => `
                    <div style="margin-bottom: 4px;">
                      ✓ <code>${fr.id}</code>: Premise CF (${fr.premiseCF}) × Rule CF (${fr.ruleCF}) = <strong>${fr.derivedCF}</strong>
                    </div>
                  `).join('')}
                </div>
                <div style="font-size: 0.8rem; background: var(--bg-card); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-light);">
                  <strong style="color: var(--color-text-main);">Certainty Factor Combination Formula:</strong><br>
                  ${dt.mathTrace}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Working Memory Facts -->
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--color-primary); margin-bottom: 8px;">
            ${I18N.get('workingMemoryTitle')}
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 8px;">
            ${howData.answeredFacts.map(af => `
              <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.85rem; display: flex; justify-content: space-between; align-items: center;">
                <span>${af.icon} ${af.name}</span>
                <span style="font-weight: 700; font-size: 0.8rem; color: ${af.value ? 'var(--color-primary)' : 'var(--color-text-muted)'};">
                  ${af.statusText}
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    dom.modalHowContent.innerHTML = html;
    dom.modalHow.classList.add('open');
  }

  // Generic Modal Close Handlers
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = e.currentTarget.dataset.closeModal;
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('open');
    });
  });

  // Close modal when clicking backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  /* =========================================================================
   * HOW IT WORKS ARCHITECTURE MODAL
   * ========================================================================= */

  if (dom.btnOpenHowItWorks) {
    dom.btnOpenHowItWorks.addEventListener('click', () => {
      if (dom.modalHowItWorks) dom.modalHowItWorks.classList.add('open');
    });
  }

  /* =========================================================================
   * IMAGE CREDITS & LICENSES MODAL
   * ========================================================================= */

  function renderImageCreditsTable() {
    if (!dom.creditsTbody) return;
    dom.creditsTbody.innerHTML = '';
    IMAGE_CREDITS_DATA.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${item.crop}</strong><br><span style="font-size:0.78rem; color:var(--color-text-muted);">${item.title}</span></td>
        <td>${item.artist}</td>
        <td><span class="badge-license" style="font-size:0.75rem; background:rgba(31,77,58,0.1); color:var(--color-primary); padding:2px 6px; border-radius:4px; font-weight:600;">${item.license}</span></td>
        <td>${item.source}</td>
      `;
      dom.creditsTbody.appendChild(tr);
    });
  }

  if (dom.btnOpenCredits) {
    dom.btnOpenCredits.addEventListener('click', () => {
      renderImageCreditsTable();
      if (dom.modalCredits) dom.modalCredits.classList.add('open');
    });
  }

  /* =========================================================================
   * PAST DIAGNOSES HISTORY DRAWER & DETAILS VIEWER
   * ========================================================================= */

  dom.btnOpenHistory.addEventListener('click', () => {
    renderHistoryModal();
    dom.modalHistory.classList.add('open');
  });

  function renderHistoryModal() {
    const lang = I18N.currentLang;
    const history = historyManager.getHistory();

    if (history.length === 0) {
      dom.modalHistoryContent.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:36px;height:36px;stroke:var(--color-primary);"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <h4 class="empty-state-title">${lang === 'hi' ? 'कोई पूर्व निदान नहीं' : 'No past diagnoses'}</h4>
          <p class="empty-state-sub">${I18N.get('noHistoryMsg')}</p>
        </div>
      `;
      return;
    }

    let html = `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${history.map((item, idx) => {
          const cropMeta = CROPS_METADATA[item.crop] || { name: { en: item.crop, hi: item.crop } };
          const cropName = cropMeta.name[lang] || cropMeta.name.en;
          const diseaseName = item.primaryDiagnosis.diseaseName
            ? (item.primaryDiagnosis.diseaseName[lang] || item.primaryDiagnosis.diseaseName.en)
            : item.primaryDiagnosis.diseaseId;

          return `
            <div style="background: var(--bg-canvas-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-sm); padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
              <div style="flex: 1;">
                <strong style="font-size: 0.98rem; color: var(--color-primary); display: block;">${cropName}: ${diseaseName}</strong>
                <span style="font-size: 0.78rem; color: var(--color-text-muted);">${item.date} · ${item.mode === 'forward' ? 'Forward' : 'Backward'} Chaining</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-weight: 800; font-size: 1.15rem; color: var(--color-primary);">
                  ${item.primaryDiagnosis.percentage || Math.round(item.combinedCF * 100)}%
                </span>
                <button type="button" class="btn-action-outline btn-view-hist-detail" data-hist-idx="${idx}" style="padding: 4px 8px; font-size: 0.75rem; min-height: 28px;">
                  ${lang === 'hi' ? 'विवरण' : 'View'}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    dom.modalHistoryContent.innerHTML = html;

    dom.modalHistoryContent.querySelectorAll('.btn-view-hist-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.histIdx, 10);
        const item = history[idx];
        if (item) {
          state.selectedCropId = item.crop;
          state.latestDiagnosisResult = {
            top3: item.top3 || [item.primaryDiagnosis],
            diagnoses: item.top3 || [item.primaryDiagnosis]
          };
          dom.modalHistory.classList.remove('open');
          renderDiagnosisResults(state.latestDiagnosisResult);
          switchView('view-results');
        }
      });
    });
  }

  dom.btnClearHistory.addEventListener('click', () => {
    historyManager.clearHistory();
    renderHistoryModal();
  });

  /* =========================================================================
   * STEP 4: KNOWLEDGE BASE ACQUISITION (ADMIN PANEL)
   * ========================================================================= */

  dom.btnOpenAdmin.addEventListener('click', () => {
    renderAdminRulesTable();
    switchView('view-admin');
  });

  dom.btnAdminBack.addEventListener('click', () => {
    switchView('view-crop-select');
  });

  function renderAdminRulesTable() {
    const lang = I18N.currentLang;
    const rules = knowledgeAdmin.getAllRules();
    dom.adminRulesCounter.textContent = rules.length;

    const searchTerm = dom.adminSearchInput.value.toLowerCase().trim();
    const cropFilter = dom.adminCropFilter.value;

    const filtered = rules.filter(r => {
      const matchCrop = cropFilter === 'all' || r.crop === cropFilter;
      const dNameEn = r.disease_name ? r.disease_name.en.toLowerCase() : '';
      const dNameHi = r.disease_name ? r.disease_name.hi.toLowerCase() : '';
      const matchSearch = !searchTerm ||
        r.id.toLowerCase().includes(searchTerm) ||
        r.conclusion.toLowerCase().includes(searchTerm) ||
        dNameEn.includes(searchTerm) ||
        dNameHi.includes(searchTerm) ||
        r.conditions.some(c => c.toLowerCase().includes(searchTerm));

      return matchCrop && matchSearch;
    });

    dom.adminRulesTbody.innerHTML = '';
    filtered.forEach(rule => {
      const tr = document.createElement('tr');
      const dName = rule.disease_name ? (rule.disease_name[lang] || rule.disease_name.en) : rule.conclusion;
      const cropName = CROPS_METADATA[rule.crop] ? (CROPS_METADATA[rule.crop].name[lang] || rule.crop) : rule.crop;

      tr.innerHTML = `
        <td><strong style="color: var(--color-primary);">${rule.id}</strong></td>
        <td>${cropName}</td>
        <td><span style="font-size: 0.8rem;">${rule.conditions.join(', ')}</span></td>
        <td>${dName}</td>
        <td><strong>${rule.cf}</strong></td>
        <td>
          <button type="button" class="btn-action-outline btn-edit-rule" data-rule-id="${rule.id}" style="padding: 4px 8px; font-size: 0.78rem; min-height: 28px;">Edit</button>
          <button type="button" class="btn-action-outline btn-delete-rule btn-danger-tone" data-rule-id="${rule.id}" style="padding: 4px 8px; font-size: 0.78rem; min-height: 28px;">Delete</button>
        </td>
      `;

      tr.querySelector('.btn-edit-rule').addEventListener('click', () => openAdminRuleForm(rule));
      tr.querySelector('.btn-delete-rule').addEventListener('click', () => {
        if (confirm(`${I18N.get('confirmDelete')} (${rule.id})`)) {
          knowledgeAdmin.deleteRule(rule.id);
          inferenceEngine.setKnowledgeBase(knowledgeAdmin.getAllRules());
          renderAdminRulesTable();
          updateHeroStats();
        }
      });

      dom.adminRulesTbody.appendChild(tr);
    });
  }

  dom.adminSearchInput.addEventListener('input', renderAdminRulesTable);
  dom.adminCropFilter.addEventListener('change', renderAdminRulesTable);

  function populateSymptomMultiselect(selectedConditions = []) {
    dom.formConditionsSelect.innerHTML = '';
    const allSymptoms = Object.keys(SYMPTOMS_METADATA);
    allSymptoms.forEach(sId => {
      const opt = document.createElement('option');
      opt.value = sId;
      const meta = SYMPTOMS_METADATA[sId];
      opt.textContent = `${sId} - ${meta ? meta.label.en : ''}`;
      if (selectedConditions.includes(sId)) {
        opt.selected = true;
      }
      dom.formConditionsSelect.appendChild(opt);
    });
  }

  function openAdminRuleForm(ruleToEdit = null) {
    const isEdit = Boolean(ruleToEdit);
    document.getElementById('form-is-edit').value = isEdit ? 'true' : 'false';
    document.getElementById('admin-form-modal-title').textContent = isEdit ? 'Edit Rule' : 'Add New Rule';

    if (isEdit) {
      document.getElementById('form-rule-id').value = ruleToEdit.id;
      document.getElementById('form-rule-id').readOnly = true;
      document.getElementById('form-rule-crop').value = ruleToEdit.crop;
      document.getElementById('form-rule-conclusion').value = ruleToEdit.conclusion;
      document.getElementById('form-disease-en').value = ruleToEdit.disease_name ? ruleToEdit.disease_name.en : '';
      document.getElementById('form-disease-hi').value = ruleToEdit.disease_name ? ruleToEdit.disease_name.hi : '';
      document.getElementById('form-rule-cf').value = ruleToEdit.cf;
      document.getElementById('form-organic-en').value = ruleToEdit.treatment && ruleToEdit.treatment.organic ? ruleToEdit.treatment.organic.en : '';
      document.getElementById('form-organic-hi').value = ruleToEdit.treatment && ruleToEdit.treatment.organic ? ruleToEdit.treatment.organic.hi : '';
      document.getElementById('form-chemical-en').value = ruleToEdit.treatment && ruleToEdit.treatment.chemical ? ruleToEdit.treatment.chemical.en : '';
      document.getElementById('form-chemical-hi').value = ruleToEdit.treatment && ruleToEdit.treatment.chemical ? ruleToEdit.treatment.chemical.hi : '';
      document.getElementById('form-prevention-en').value = ruleToEdit.prevention ? ruleToEdit.prevention.en : '';
      document.getElementById('form-prevention-hi').value = ruleToEdit.prevention ? ruleToEdit.prevention.hi : '';
      document.getElementById('form-rule-ref').value = ruleToEdit.reference || '';
      populateSymptomMultiselect(ruleToEdit.conditions || []);
    } else {
      dom.adminRuleForm.reset();
      document.getElementById('form-rule-id').readOnly = false;
      document.getElementById('form-rule-id').value = `RULE_CUSTOM_${Date.now().toString().slice(-4)}`;
      document.getElementById('form-rule-cf').value = '0.85';
      populateSymptomMultiselect([]);
    }

    dom.modalAdminForm.classList.add('open');
  }

  dom.btnAdminAddRule.addEventListener('click', () => openAdminRuleForm(null));

  dom.adminRuleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const isEdit = document.getElementById('form-is-edit').value === 'true';
    const ruleId = document.getElementById('form-rule-id').value.trim();

    const selectedOptions = Array.from(dom.formConditionsSelect.selectedOptions).map(o => o.value);
    if (selectedOptions.length === 0) {
      alert("Please select at least one symptom condition.");
      return;
    }

    const ruleData = {
      id: ruleId,
      crop: document.getElementById('form-rule-crop').value,
      conditions: selectedOptions,
      conclusion: document.getElementById('form-rule-conclusion').value.trim(),
      disease_name_en: document.getElementById('form-disease-en').value.trim(),
      disease_name_hi: document.getElementById('form-disease-hi').value.trim(),
      cf: parseFloat(document.getElementById('form-rule-cf').value),
      organic_en: document.getElementById('form-organic-en').value.trim(),
      organic_hi: document.getElementById('form-organic-hi').value.trim(),
      chemical_en: document.getElementById('form-chemical-en').value.trim(),
      chemical_hi: document.getElementById('form-chemical-hi').value.trim(),
      prevention_en: document.getElementById('form-prevention-en').value.trim(),
      prevention_hi: document.getElementById('form-prevention-hi').value.trim(),
      reference: document.getElementById('form-rule-ref') ? document.getElementById('form-rule-ref').value.trim() : 'ICAR / KVK Advisory'
    };

    try {
      if (isEdit) {
        knowledgeAdmin.updateRule(ruleId, ruleData);
      } else {
        knowledgeAdmin.addRule(ruleData);
      }
      inferenceEngine.setKnowledgeBase(knowledgeAdmin.getAllRules());
      dom.modalAdminForm.classList.remove('open');
      renderAdminRulesTable();
      updateHeroStats();
    } catch (err) {
      alert("Error saving rule: " + err.message);
    }
  });

  // Export Rules JSON
  dom.btnAdminExport.addEventListener('click', () => {
    const jsonStr = knowledgeAdmin.exportAsJSONString();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `krishimitra_knowledge_base_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Import Rules JSON
  dom.btnAdminImport.addEventListener('click', () => {
    dom.adminImportFileInput.click();
  });

  dom.adminImportFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        knowledgeAdmin.importFromJSONString(event.target.result);
        inferenceEngine.setKnowledgeBase(knowledgeAdmin.getAllRules());
        renderAdminRulesTable();
        updateHeroStats();
        alert("Knowledge Base rules imported successfully!");
      } catch (err) {
        alert("Import failed: " + err.message);
      }
    };
    reader.readAsText(file);
    dom.adminImportFileInput.value = '';
  });

  // Reset to Factory Defaults
  dom.btnAdminReset.addEventListener('click', () => {
    if (confirm(I18N.get('confirmReset'))) {
      knowledgeAdmin.resetToDefault();
      inferenceEngine.setKnowledgeBase(knowledgeAdmin.getAllRules());
      renderAdminRulesTable();
      updateHeroStats();
      alert("Knowledge Base reset to default factory rules.");
    }
  });

  // Audio Voice Reader Buttons
  if (dom.btnSpeakQuestion) {
    dom.btnSpeakQuestion.addEventListener('click', () => {
      const qHeading = dom.questionHeading ? dom.questionHeading.textContent : '';
      const sDesc = dom.questionSymptomDesc ? dom.questionSymptomDesc.textContent : '';
      speakText(`${qHeading}. ${sDesc}`);
    });
  }

  if (dom.btnSpeakDiagnosis) {
    dom.btnSpeakDiagnosis.addEventListener('click', () => {
      const name = dom.resultPrimaryName ? dom.resultPrimaryName.textContent : '';
      const org = dom.resultOrganicText ? dom.resultOrganicText.textContent : '';
      speakText(`${name}. ${org}`);
    });
  }

  // Voice Input Speech Recognition
  initVoiceRecognition();

  // Spray Dosage Calculator Stepper
  if (dom.btnAcresMinus) {
    dom.btnAcresMinus.addEventListener('click', () => {
      if (dom.inputFarmAcres) {
        let val = parseFloat(dom.inputFarmAcres.value) || 1;
        if (val > 0.5) val -= 0.5;
        dom.inputFarmAcres.value = val;
        updateSprayCalculation();
      }
    });
  }

  if (dom.btnAcresPlus) {
    dom.btnAcresPlus.addEventListener('click', () => {
      if (dom.inputFarmAcres) {
        let val = parseFloat(dom.inputFarmAcres.value) || 1;
        if (val < 50) val += 0.5;
        dom.inputFarmAcres.value = val;
        updateSprayCalculation();
      }
    });
  }

  if (dom.inputFarmAcres) {
    dom.inputFarmAcres.addEventListener('input', updateSprayCalculation);
  }

  // Large-Text Accessibility Toggle (A- / A+)
  if (dom.btnToggleFontSize) {
    dom.btnToggleFontSize.addEventListener('click', () => {
      const isLarge = document.body.classList.toggle('large-text');
      const glyph = dom.btnToggleFontSize.querySelector('.font-size-glyph');
      if (glyph) {
        glyph.innerHTML = isLarge ? 'A<sup>−</sup>' : 'A<sup>+</sup>';
      }
      const label = document.getElementById('ui-btnTextSize');
      if (label) {
        label.textContent = isLarge
          ? (I18N.currentLang === 'hi' ? 'सामान्य अक्षर' : 'Normal Text')
          : (I18N.currentLang === 'hi' ? 'बड़ा अक्षर' : 'Large Text');
      }
    });
  }

  // Global Language Switcher Button
  dom.btnToggleLang.addEventListener('click', () => {
    I18N.toggleLanguage();
    refreshLocalizedUI();
  });

  dom.brandLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('view-crop-select');
  });

  // Seamless Browser Back & Forward Navigation Support (prevents kicking user off site)
  window.addEventListener('popstate', (e) => {
    // 1. If any modal is currently open, close it first and stay on the current view
    const openModals = document.querySelectorAll('.modal-overlay.active');
    if (openModals.length > 0) {
      openModals.forEach(m => m.classList.remove('active'));
      return;
    }

    // 2. If in Question Flow:
    if (state.activeView === 'view-question-flow') {
      if (workingMemory.questionHistory.length > 0) {
        // Go back one question
        const last = workingMemory.questionHistory.pop();
        workingMemory.retractFact(last.symptomId);
        workingMemory.unskipSymptom(last.symptomId);
        state.currentQuestionIndex = Math.max(1, state.currentQuestionIndex - 1);
        loadNextQuestion();
        return;
      } else {
        // At Question 1: return cleanly to crop selection
        workingMemory.resetAll();
        state.selectedCropId = null;
        switchView('view-crop-select', false);
        renderCropSelectionGrid();
        return;
      }
    }

    // 3. If in Results View or Admin View:
    if (state.activeView === 'view-results' || state.activeView === 'view-admin') {
      switchView('view-crop-select', false);
      return;
    }

    // 4. Default to Crop Select
    if (e.state && e.state.viewId) {
      switchView(e.state.viewId, false);
    } else {
      switchView('view-crop-select', false);
    }
  });

  // Initial App Startup
  initTheme();
  refreshLocalizedUI();
  updateSprayCalculation();
  if (window.history && window.history.replaceState) {
    try {
      window.history.replaceState({ viewId: 'view-crop-select' }, '', '#crop-select');
    } catch (_) {}
  }
  switchView('view-crop-select', false);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
