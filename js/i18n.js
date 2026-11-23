/**
 * KrishiMitra - Localization (i18n) Module
 * Supports seamless switching between English and Hindi.
 */

const I18N = {
  currentLang: 'en',

  translations: {
    en: {
      appName: "KrishiMitra",
      appTagline: "Farmer Crop Disease Expert System",
      greetingText: "Namaste, Farmer! • Welcome to KrishiMitra",
      seasonText: "Active Farm Advisory • 9 Major Crops",
      heroTitle: "Crop Problem Diagnosis & Smart Advisory",
      heroSubtitle: "Identify crop diseases early and get verified organic & chemical remedies in simple steps.",
      
      // Navigation & Actions
      navHome: "Diagnose",
      navHistory: "Past Diagnoses",
      navAdmin: "Admin Rules",
      langBtn: "हिंदी",
      
      // Inference Mode
      modeLabel: "Inference Strategy:",
      modeForward: "Forward Chaining (Data-Driven)",
      modeBackward: "Backward Chaining (Goal-Driven)",
      modeForwardDesc: "Evaluates your observed symptoms step-by-step to compute candidate disease certainties.",
      modeBackwardDesc: "Hypothesizes probable diseases and queries specific evidence to verify or eliminate them.",
      
      // Steps
      step1Title: "1. Select Crop",
      step1Subtitle: "Choose the affected crop from your field",
      step2Title: "2. Symptom Assessment",
      step2Subtitle: "Answer what you observe on your plants",
      step3Title: "3. Diagnosis & Advisory",
      step3Subtitle: "Ranked results, certainty factors, and treatments",
      
      // Buttons
      btnStartDiagnosis: "Start Diagnostic Scan",
      btnNext: "Next Question",
      btnPrev: "Previous",
      btnSkip: "Not Sure / Skip",
      btnWhy: "Why was this asked?",
      btnHow: "How did you reach this conclusion?",
      btnRestart: "Diagnose Another Crop",
      btnEmptyRestart: "Re-evaluate Crop Symptoms",
      btnEmptyChooseCrop: "Select Another Crop",
      btnChangeCrop: "← Change Crop",
      btnSaveHistory: "Save Diagnosis to History",
      btnSaved: "Saved to History!",
      btnBackHome: "Back to Diagnostic Wizard",
      btnClearHistory: "Clear All History",
      btnExportRules: "Export Rules (JSON)",
      btnImportRules: "Import Rules (JSON)",
      btnResetRules: "Reset to Default Rules",
      btnAddRule: "Add New Rule",
      btnSaveRule: "Save Rule",
      btnCancel: "Cancel",
      btnEdit: "Edit",
      btnDelete: "Delete",
      btnClose: "Close",
      
      // Symptom Response Options
      optYes: "Yes, definitely",
      optLikely: "Likely / Mildly present",
      optUnsure: "Unsure / Cannot tell",
      optNo: "No, not observed",
      
      // Results Page
      resultsHeading: "Diagnostic Conclusions & Recommendations",
      topDiagnosisTitle: "Primary Diagnosis",
      confidenceLabel: "Certainty Factor",
      rankedOtherTitle: "Alternative Possibilities Considered",
      noDiagnosisFound: "No confident diagnosis could be matched with the reported symptoms. Please inspect further or consult a local agricultural officer.",
      
      // Treatment Tabs
      tabOrganic: "🌿 Organic Treatment",
      tabChemical: "🧪 Chemical Control",
      tabPrevention: "🛡️ Prevention Tips",
      organicHeader: "Natural & Eco-Friendly Management",
      chemicalHeader: "Recommended Chemical Treatment",
      preventionHeader: "Long-Term Cultural & Preventive Practices",
      
      // Disclaimer
      disclaimerTitle: "Important Advisory Disclaimer",
      disclaimerText: "KrishiMitra provides rule-based decision support. For severe crop losses, unknown epidemics, or high chemical dosages, always consult your local Agriculture Extension Officer or nearest Krishi Vigyan Kendra (KVK) scientist before spraying.",
      
      // Modals
      whyModalTitle: "Explanation: Why was this question asked?",
      howModalTitle: "Explanation: How was this conclusion reached?",
      rulesFiredTitle: "Rules Fired & Evidence Combined",
      workingMemoryTitle: "Working Memory State (Answered Symptoms)",
      combiningMathTitle: "Certainty Factor Calculation Trace",
      unmatchedRulesTitle: "Rules Considered But Disqualified",
      
      // History Drawer
      historyTitle: "Past Diagnostic Records",
      noHistoryMsg: "No past diagnoses saved yet. Complete a diagnosis and click 'Save Diagnosis'.",
      historyDate: "Date & Time",
      historyCrop: "Crop",
      historyDisease: "Top Diagnosis",
      historyCF: "Certainty",
      historyActions: "Actions",
      viewDetails: "View Details",
      
      // Admin Panel
      adminTitle: "Knowledge Base Management (Admin)",
      adminSubtitle: "Add, modify, or remove IF-THEN rules directly without modifying system source code.",
      tableId: "Rule ID",
      tableCrop: "Crop",
      tableConditions: "Conditions / Symptoms",
      tableConclusion: "Conclusion Disease",
      tableCF: "CF",
      tableActions: "Actions",
      searchPlaceholder: "Search rules by ID, crop, or disease...",
      filterAllCrops: "All Crops",
      
      // Form Fields
      fieldRuleId: "Rule ID (e.g. RULE_TOM_11)",
      fieldCrop: "Crop",
      fieldConclusionId: "Disease ID (e.g. tomato_early_blight)",
      fieldDiseaseNameEn: "Disease Name (English)",
      fieldDiseaseNameHi: "Disease Name (Hindi)",
      fieldCF: "Certainty Factor (0.10 to 1.00)",
      fieldConditions: "Select Symptoms / Conditions (Ctrl+Click to select multiple):",
      fieldOrganicEn: "Organic Treatment (English)",
      fieldOrganicHi: "Organic Treatment (Hindi)",
      fieldChemicalEn: "Chemical Treatment (English)",
      fieldChemicalHi: "Chemical Treatment (Hindi)",
      fieldPreventionEn: "Prevention Advice (English)",
      fieldPreventionHi: "Prevention Advice (Hindi)",
      confirmDelete: "Are you sure you want to delete this rule?",
      confirmReset: "Reset all rules to the factory default knowledge base? Custom edits will be overwritten.",
      rulesCount: "Total Rules in Knowledge Base:",

      // Indian Agri Ticker & Ribbon
      tickerWeather: "27°C • Clear Sunny Sky • Humidity 62%",
      tickerMandi: "Wheat ₹2,275/Q • Soybean ₹4,850/Q • Rice ₹2,183/Q • Mustard ₹5,400/Q",
      tickerHelpline: "Kisan Call Centre 1800-180-1551 (Toll-Free 6AM - 10PM)",
      
      // Crop Season Filters
      filterLabel: "Filter by Season:",
      filterAll: "🌱 All Crops (9)",
      filterRabi: "🌾 Rabi Crops",
      filterKharif: "🌿 Kharif Crops",
      filterCash: "🍅 Cash & Veg",
      
      // Audio Voice Reader
      btnSpeakQ: "Listen",
      btnSpeakRes: "Listen to Advisory",
      speechUnsupported: "Audio speech is not supported in this browser.",
      
      // Field Spray Calculator
      calcTitle: "Field Spray & Dosage Calculator",
      calcSubtitle: "Calculate accurate water, medicine dosage and pump tanks for your farm area",
      calcAcresLabel: "Farm Land Area (Acres):",
      calcWaterLabel: "Required Water Volume",
      calcTanksLabel: "16L Knapsack Pump Tanks",
      calcMedicineLabel: "Estimated Active Dose",
      calcTimeLabel: "Ideal Spraying Window",
      calcTimeVal: "8-11 AM or 4-6 PM (Avoid direct midday heat)",

      // Editorial Hero & Premium Redesign
      heroHeadline: "Early Crop Disease Diagnosis & Field Advisory",
      heroSentence: "An intelligent diagnostic expert system built to assist smallholder farmers with scientific organic and chemical crop advisory.",
      heroStatsLine: "9 crops · 58 diagnostic rules · 30+ plant diseases",
      symptomGuideBadge: "Visual Reference Guide",
      btnVoiceInput: "Voice Answer",
      voiceListening: "Listening... Say 'Yes', 'No', or 'Skip'",
      voiceUnsupported: "Voice input is not supported in this browser.",
      doThisTodayTitle: "Do This Today (First 24–48 Hours)",
      severityLabel: "Severity Level",
      severityHigh: "High Severity",
      severityMed: "Moderate Severity",
      severityLow: "Low Severity",
      btnPrintReport: "Print / Save PDF Report",
      ruleTraceTitle: "Inference Reasoning Timeline (Rule Trace)",
      ruleTraceSubtitle: "Step-by-step audit of fired rules and MYCIN Certainty Factor calculations",
      stickyBarPrompt: "Select a crop above to begin diagnosis",
      stickyBarSelected: "selected",
      footerCollege: "Made for college project · Academic Evaluation",
      footerHelpline: "Kisan Call Centre: 1800-180-1551 (Toll-Free, 6 AM – 10 PM)",
      footerDisclaimer: "KrishiMitra is an academic expert system prototype. For severe crop epidemics or commercial pesticide spraying, verify with your local KVK scientist or Block Agriculture Officer.",

      // 2.0 Feature Additions
      filterAll: "All Crops",
      filterCereals: "Cereals",
      filterPulses: "Pulses",
      filterOilseeds: "Oilseeds",
      filterVegetables: "Vegetables",
      filterCash: "Cash Crops",
      filterFruits: "Fruits",
      inSeasonTag: "In season now",
      inSeasonBadge: "In season now",
      searchCropPlaceholder: "Search crop by name (e.g., Wheat, Chana, टमाटर)...",
      cropSearchPlaceholder: "Search crop by name (e.g., Wheat, Chana, टमाटर)...",
      confirmDiagTitle: "Confirm Your Diagnosis (Differential Check)",
      confirmDiagDesc: "Checking these specific symptoms helps distinguish this diagnosis from runner-up possibilities:",
      btnYesObserved: "Yes, Observed (+CF)",
      btnNotObserved: "No, Absent",
      spraySafetyTitle: "Pesticide & Spray Application Safety Guidelines",
      safetyTip1: "Wear personal protective gear: rubber gloves, safety face mask, and full-sleeve protective clothing.",
      safetyTip2: "Avoid spraying during strong winds, rainy forecasts, or midday heat (spray early morning 6–9 AM or late afternoon).",
      safetyTip3: "Strictly adhere to the Pre-Harvest Interval (PHI) stated on the product label before harvesting produce.",
      safetyTip4: "Triple-rinse, puncture and safely dispose empty containers; never reuse for household or animal feed purposes.",
      howItWorksNav: "How It Works",
      navHowItWorks: "How It Works",
      textSizeBtn: "Text Size",
      btnTextSize: "Text Size",
      imageCreditsTitle: "Image Credits & Open Licenses",
      imageCreditsLink: "Image Credits & Licenses",
      themeLight: "Light",
      themeComfort: "Comfort",
      themeDark: "Dark",
      statCrops: "crops",
      statRules: "rules",
      statDiseases: "diseases",
      whyLessLikely: "Why it's less likely"
    },

    hi: {
      appName: "कृषि मित्र",
      appTagline: "किसान फसल रोग विशेषज्ञ प्रणाली",
      greetingText: "नमस्ते किसान भाई! • कृषि मित्र में आपका स्वागत है",
      seasonText: "सक्रिय कृषि परामर्श • 9 प्रमुख फसलें",
      heroTitle: "फसल समस्या पहचान एवं सटीक परामर्श",
      heroSubtitle: "फसल की बीमारियों को शुरुआती अवस्था में पहचानें और सरल भाषा में जैविक व रासायनिक उपाय पाएं।",
      
      // Navigation & Actions
      navHome: "जांच करें",
      navHistory: "पिछली जांचें",
      navAdmin: "नियम प्रबंधन (एडमिन)",
      langBtn: "English",
      
      // Inference Mode
      modeLabel: "तर्क प्रणाली (Inference):",
      modeForward: "फॉरवर्ड चेनिंग (लक्षण आधारित)",
      modeBackward: "बैकवर्ड चेनिंग (उद्देश्य आधारित)",
      modeForwardDesc: "आपके द्वारा बताए गए लक्षणों के आधार पर एक-एक नियम जांच कर संभावित बीमारी तय करता है।",
      modeBackwardDesc: "पहले संभावित बीमारी का अनुमान लगाकर केवल उसी के आवश्यक लक्षण आपसे पूछता है।",
      
      // Steps
      step1Title: "1. फसल का चयन करें",
      step1Subtitle: "अपने खेत की प्रभावित फसल चुनें",
      step2Title: "2. लक्षणों की जांच",
      step2Subtitle: "पौधे पर दिखने वाले लक्षणों के उत्तर दें",
      step3Title: "3. निदान एवं उपचार",
      step3Subtitle: "सटीकता प्रतिशत, रोग का नाम व उपचार",
      
      // Buttons
      btnStartDiagnosis: "जांच शुरू करें",
      btnNext: "अगला सवाल",
      btnPrev: "पिछला सवाल",
      btnSkip: "पता नहीं / छोड़ें",
      btnWhy: "यह सवाल क्यों पूछा गया?",
      btnHow: "यह निष्कर्ष कैसे निकला?",
      btnRestart: "दूसरी फसल की जांच करें",
      btnEmptyRestart: "लक्षण दोबारा जांचें",
      btnEmptyChooseCrop: "दूसरी फसल चुनें",
      btnChangeCrop: "← फसल बदलें",
      btnSaveHistory: "जांच सुरक्षित करें",
      btnSaved: "इतिहास में सुरक्षित!",
      btnBackHome: "वापस मुख्य पेज पर",
      btnClearHistory: "सारा इतिहास मिटाएं",
      btnExportRules: "नियम डाउनलोड करें (JSON)",
      btnImportRules: "नियम अपलोड करें (JSON)",
      btnResetRules: "डिफ़ॉल्ट नियम पुनः स्थापित करें",
      btnAddRule: "नया नियम जोड़ें",
      btnSaveRule: "नियम सुरक्षित करें",
      btnCancel: "रद्द करें",
      btnEdit: "संपादित करें",
      btnDelete: "हटाएं",
      btnClose: "बंद करें",
      
      // Symptom Response Options
      optYes: "हाँ, बिल्कुल दिख रहा है",
      optLikely: "हाँ, हल्का या शायद है",
      optUnsure: "निश्चित नहीं / पता नहीं",
      optNo: "नहीं, ऐसा नहीं है",
      
      // Results Page
      resultsHeading: "निदान परिणाम एवं कृषि सलाह",
      topDiagnosisTitle: "प्रमुख रोग निदान",
      confidenceLabel: "सटीकता दर (विश्वास गुणांक)",
      rankedOtherTitle: "अन्य संभावित रोग",
      noDiagnosisFound: "बताए गए लक्षणों से किसी रोग का निश्चित मिलान नहीं हो सका। कृपया लक्षण दोबारा जांचें या कृषि अधिकारी से संपर्क करें।",
      
      // Treatment Tabs
      tabOrganic: "🌿 जैविक उपचार",
      tabChemical: "🧪 रासायनिक रोकथाम",
      tabPrevention: "🛡️ रोकथाम के उपाय",
      organicHeader: "प्राकृतिक एवं पर्यावरण-अनुकूल नियंत्रण",
      chemicalHeader: "अनुशंसित रासायनिक दवाएं",
      preventionHeader: "दीर्घकालिक एवं कृषि प्रबंधन सावधानियां",
      
      // Disclaimer
      disclaimerTitle: "महत्वपूर्ण कृषि अस्वीकरण एवं सलाह",
      disclaimerText: "कृषि मित्र प्रणाली नियम-आधारित एआई सुझाव प्रदान करती है। गंभीर फसल क्षति, महामारी या तीव्र दवाओं के छिड़काव से पहले अपने नजदीकी कृषि विकास अधिकारी या कृषि विज्ञान केंद्र (KVK) के वैज्ञानिक से सलाह अवश्य लें।",
      
      // Modals
      whyModalTitle: "स्पष्टीकरण: यह सवाल क्यों पूछा गया?",
      howModalTitle: "स्पष्टीकरण: यह निष्कर्ष कैसे निकला?",
      rulesFiredTitle: "लागू हुए नियम एवं साक्ष्य",
      workingMemoryTitle: "वर्किंग मेमोरी (किसान द्वारा बताए लक्षण)",
      combiningMathTitle: "विश्वास गुणांक (CF) की गणना विधि",
      unmatchedRulesTitle: "वे नियम जो पूरे नहीं हुए",
      
      // History Drawer
      historyTitle: "पिछली जांचों का रिकॉर्ड",
      noHistoryMsg: "अभी तक कोई जांच सुरक्षित नहीं की गई है। जांच पूरी करने के बाद 'जांच सुरक्षित करें' दबाएं।",
      historyDate: "दिनांक व समय",
      historyCrop: "फसल",
      historyDisease: "प्रमुख रोग",
      historyCF: "सटीकता",
      historyActions: "कार्रवाई",
      viewDetails: "विवरण देखें",
      
      // Admin Panel
      adminTitle: "नॉलेज बेस प्रबंधन (एडमिन)",
      adminSubtitle: "सॉफ्टवेयर कोड बदले बिना नए नियम जोड़ें, संपादित करें या हटाएं।",
      tableId: "नियम क्रमांक",
      tableCrop: "फसल",
      tableConditions: "लक्षण / शर्तें",
      tableConclusion: "रोग का नाम",
      tableCF: "CF",
      tableActions: "कार्रवाई",
      searchPlaceholder: "आईडी, फसल या रोग से खोजें...",
      filterAllCrops: "सभी फसलें",
      
      // Form Fields
      fieldRuleId: "नियम आईडी (जैसे RULE_TOM_11)",
      fieldCrop: "फसल",
      fieldConclusionId: "रोग आईडी (जैसे tomato_early_blight)",
      fieldDiseaseNameEn: "रोग का नाम (अंग्रेजी)",
      fieldDiseaseNameHi: "रोग का नाम (हिंदी)",
      fieldCF: "सटीकता दर / CF (0.10 से 1.00)",
      fieldConditions: "शर्तें / लक्षण चुनें (Ctrl दबाकर एक से अधिक चुनें):",
      fieldOrganicEn: "जैविक उपचार (अंग्रेजी)",
      fieldOrganicHi: "जैविक उपचार (हिंदी)",
      fieldChemicalEn: "रासायनिक उपचार (अंग्रेजी)",
      fieldChemicalHi: "रासायनिक उपचार (हिंदी)",
      fieldPreventionEn: "रोकथाम सलाह (अंग्रेजी)",
      fieldPreventionHi: "रोकथाम सलाह (हिंदी)",
      confirmDelete: "क्या आप वाकई इस नियम को हटाना चाहते हैं?",
      confirmReset: "क्या आप सभी नियमों को फ़ैक्टरी डिफ़ॉल्ट पर रीसेट करना चाहते हैं? आपके बदलाव मिट जाएंगे।",
      rulesCount: "नॉलेज बेस में कुल नियम:",

      // Indian Agri Ticker & Ribbon
      tickerWeather: "27°C • खिली धूप (साफ़ मौसम) • नमी 62%",
      tickerMandi: "गेहूं ₹2,275/क्विं • सोयाबीन ₹4,850/क्विं • धान ₹2,183/क्विं • सरसों ₹5,400/क्विं",
      tickerHelpline: "किसान कॉल सेंटर 1800-180-1551 (टोल-फ्री, सुबह 6 से रात 10)",
      
      // Crop Season Filters
      filterLabel: "मौसम अनुसार फ़सलें:",
      filterAll: "🌱 सभी फसलें (9)",
      filterRabi: "🌾 रबी फसलें",
      filterKharif: "🌿 खरीफ फसलें",
      filterCash: "🍅 नकदी व सब्जियां",
      
      // Audio Voice Reader
      btnSpeakQ: "बोलकर सुनें",
      btnSpeakRes: "परामर्श सुनें",
      speechUnsupported: "इस ब्राउज़र में ऑडियो आवाज़ की सुविधा उपलब्ध नहीं है।",
      
      // Field Spray Calculator
      calcTitle: "स्प्रे घोल एवं दवा मात्रा गणक",
      calcSubtitle: "अपने खेत के रकबे (एकड़) अनुसार पानी, दवा व पंप टंकी की सही मात्रा जानें",
      calcAcresLabel: "खेत का रकबा (एकड़):",
      calcWaterLabel: "आवश्यक पानी की मात्रा",
      calcTanksLabel: "16L नैपसैक पंप टंकी",
      calcMedicineLabel: "अनुमानित दवा मात्रा",
      calcTimeLabel: "छिड़काव का सही समय",
      calcTimeVal: "सुबह 8-11 या शाम 4-6 (कड़क धूप में छिड़काव न करें)",

      // Editorial Hero & Premium Redesign
      heroHeadline: "फसल रोग शीघ्र पहचान एवं सटीक कृषि परामर्श",
      heroSentence: "किसानों के लिए सटीक जैविक व रासायनिक उपचार सलाह प्रदान करने वाली नियम-आधारित विशेषज्ञ प्रणाली।",
      heroStatsLine: "9 प्रमुख फसलें · 58 नैदानिक नियम · 30+ पादप रोग",
      symptomGuideBadge: "पहचान चित्र संदर्भ",
      btnVoiceInput: "बोलकर उत्तर दें",
      voiceListening: "सुन रहे हैं... 'हाँ', 'नहीं' या 'छोड़ें' बोलें",
      voiceUnsupported: "इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है।",
      doThisTodayTitle: "आज ही यह प्राथमिक कदम उठाएं (24–48 घंटे)",
      severityLabel: "गंभीरता स्तर",
      severityHigh: "गंभीर स्तर",
      severityMed: "मध्यम स्तर",
      severityLow: "हल्का / शुरुआती स्तर",
      btnPrintReport: "रिपोर्ट प्रिंट / पीडीएफ डाउनलोड करें",
      ruleTraceTitle: "तर्क निष्पादन समयरेखा (नियम ट्रेस)",
      ruleTraceSubtitle: "लागू हुए नियमों और विश्वास गुणांक (CF) की चरणबद्ध गणना विधि",
      stickyBarPrompt: "जांच शुरू करने के लिए ऊपर से एक फसल चुनें",
      stickyBarSelected: "चयनित",
      footerCollege: "कॉलेज प्रोजेक्ट व शैक्षणिक मूल्यांकन हेतु निर्मित",
      footerHelpline: "किसान कॉल सेंटर हेल्पलाइन: 1800-180-1551 (टोल-फ्री, 6 AM – 10 PM)",
      footerDisclaimer: "कृषि मित्र एक शैक्षणिक प्रोटोटाइप है। गंभीर महामारी या रासायनिक छिड़काव से पहले अपने स्थानीय KVK वैज्ञानिक या कृषि अधिकारी से पुष्टि अवश्य करें।",

      // 2.0 Feature Additions (Hindi)
      filterAll: "सभी फसलें",
      filterCereals: "अनाज",
      filterPulses: "दलहन",
      filterOilseeds: "तिलहन",
      filterVegetables: "सब्जियां",
      filterCash: "नकदी फसलें",
      filterFruits: "फल",
      inSeasonTag: "इस मौसम की फसल",
      inSeasonBadge: "वर्तमान सीजन",
      searchCropPlaceholder: "फसल खोजें (जैसे गेहूं, चना, टमाटर)...",
      cropSearchPlaceholder: "फसल खोजें (जैसे गेहूं, चना, टमाटर)...",
      confirmDiagTitle: "निदान की पुष्टि करें (अंतर पहचान)",
      confirmDiagDesc: "इन अतिरिक्त लक्षणों की जांच करने से रोग की पहचान और अधिक पुख्ता हो जाती है:",
      btnYesObserved: "हाँ, दिख रहा है (+विश्वास)",
      btnNotObserved: "नहीं, अनुपस्थित",
      spraySafetyTitle: "कीटनाशक छिड़काव एवं सुरक्षा सावधानियां",
      safetyTip1: "व्यक्तिगत सुरक्षा उपकरण पहनें: रबर के दस्ताने, मास्क और पूरी आस्तीन के कपड़े।",
      safetyTip2: "तेज हवा, बारिश या दोपहर की तेज धूप में छिड़काव न करें (सुबह 6–9 या शाम 4–6 बजे करें)।",
      safetyTip3: "फसल तुड़ाई से पूर्व उत्पाद के डिब्बे पर लिखी प्रतीक्षा अवधि (PHI) का अनिवार्य पालन करें।",
      safetyTip4: "खाली डिब्बों को तीन बार धोकर नष्ट करें; घरेलू उपयोग या पशु चारा हेतु कभी न लाएं।",
      howItWorksNav: "कार्यप्रणाली",
      navHowItWorks: "कार्यप्रणाली",
      textSizeBtn: "अक्षर आकार",
      btnTextSize: "अक्षर आकार",
      imageCreditsTitle: "चित्र श्रेय एवं मुक्त लाइसेंस",
      imageCreditsLink: "चित्र श्रेय एवं लाइसेंस",
      themeLight: "उजाला",
      themeComfort: "आराम",
      themeDark: "अंधेरा",
      statCrops: "फसलें",
      statRules: "सटीक नियम",
      statDiseases: "पादप रोग",
      whyLessLikely: "कम संभावना का कारण"
    }
  },

  get(key) {
    const lang = this.currentLang;
    if (this.translations[lang] && this.translations[lang][key]) {
      return this.translations[lang][key];
    }
    return this.translations['en'][key] || key;
  },

  setLanguage(lang) {
    if (lang === 'en' || lang === 'hi') {
      this.currentLang = lang;
      localStorage.setItem('krishimitra_lang', lang);
      document.documentElement.lang = lang;
    }
  },

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'hi' : 'en';
    this.setLanguage(newLang);
    return newLang;
  },

  init() {
    const saved = localStorage.getItem('krishimitra_lang');
    if (saved && (saved === 'en' || saved === 'hi')) {
      this.setLanguage(saved);
    } else {
      this.setLanguage('en');
    }
  }
};
