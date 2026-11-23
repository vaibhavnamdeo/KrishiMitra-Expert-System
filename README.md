# KrishiMitra (कृषि मित्र) 🌾
### Crop Problem Diagnosis & Farmer Advisory Expert System

**KrishiMitra** is a clinical-grade, accessible agricultural Expert System tailored for Indian farmers and agricultural extension officers. It diagnoses crop diseases, pests, and nutritional deficiencies across **17 major Indian crops** (**Wheat, Rice, Maize, Chickpea, Pigeon Pea, Soybean, Groundnut, Mustard, Cotton, Sugarcane, Onion, Potato, Tomato, Brinjal, Okra, Chilli, and Banana**) and provides actionable organic management and chemical control advice citing official ICAR and State Agricultural University (SAU) guidelines.

---

## 🌟 Key Architecture & Capabilities

1. **Classic AI Expert System Architecture**:
   - **Knowledge Base (KB)**: **124 comprehensive IF-THEN rules** covering 17 crops and **104 distinct diseases and pests**, stored in clean JSON format.
   - **Inference Engine**: Supports both **Forward Chaining** (data-driven symptom diagnosis with dynamic early termination at $\ge 90\%$ certainty) and **Backward Chaining** (hypothesis verification).
   - **Working Memory**: Dynamic session store recording asserted facts, confidence weights, skipped symptoms, and execution audit trails.
   - **Certainty Factor (MYCIN) Calculus**: Implements standard evidence combination for independent co-occurring symptoms:
     $$CF_{\text{combined}}(CF_1, CF_2) = CF_1 + CF_2 \times (1 - CF_1)$$
   - **Explanation Facility**:
     - *"Why was this asked?"*: Real-time reasoning modal displaying active candidate rules and the diagnostic value of the current question.
     - *"How did you reach this conclusion?"*: Comprehensive mathematical trace showing verified conditions, firing order, intermediate premise CFs, and formula combination steps.
   - **Interactive Differential Diagnosis ("Confirm Your Diagnosis")**:
     - Targeted confirmatory checks to solidify the top diagnosis.
     - Runner-up distinction checks that safely refute competing hypotheses without destroying established positive findings.
   - **Knowledge Acquisition Module**: Built-in Admin dashboard to search, add, edit, delete, export, and import rules with automatic validation and factory reset.

2. **Visual Reference Guide (Botanical Illustrations)**:
   - **112 dedicated botanical SVG archetypes** with **100% 1-to-1 mappings for all 301 symptoms**.
   - Clinically accurate pathology representations: concentric target rings with chlorotic yellow halos, raised erumpent rust pustules, vascular cylinder browning, pest borehole frass, and downy fungal fuzz.

3. **Farmer-Centric Accessibility & Design**:
   - **Eye-Comfort & Multi-Theme System**: Instant switching between **Light** (warm paper `#F4F1E8`), **Comfort** (low-glare `#EDE6D3`), and **Dark** (deep forest charcoal `#14201A`).
   - **Bilingual Interface**: Seamless instant toggle between **English** and **Hindi (हिंदी)** across all symptoms, questions, advisory instructions, and modals.
   - **Text-to-Speech (Web Speech API)**: Interactive read-aloud buttons for questions and prescriptions in both Hindi and English.
   - **Pesticide Spray & Water Calculator**: Computes required water volume and chemical dosage based on acreage and crop canopy stage.
   - **Printable Clinical Prescription**: Official printable report with prescription reference ID, timestamp, differential checks, and signature line.

---

## 🚀 Setup & Execution Instructions

### Option 1: Run with Local Node Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/vaibhavnamdeo/KrishiMitra-Expert-System.git
cd KrishiMitra-Expert-System

# Start the local static server
node server.js
```
Then visit: [http://localhost:8085](http://localhost:8085)

### Option 2: Direct File Launch
Double-click `index.html` or open it directly in any modern browser:
```bash
Start-Process "index.html"
```
*(The standalone fallback in `js/rules_data.js` ensures the system runs without CORS restrictions even via `file:///`)*

---

## 📁 Project Directory Structure

```
KrishiMitra-Expert-System/
├── index.html                   # Responsive Single Page Application interface
├── server.js                    # Lightweight zero-dependency Node static server
├── README.md                    # System documentation and user guide
├── image_credits.json           # CC-BY / CC-BY-SA attribution records
├── .gitignore                   # Ignored files and node_modules
├── css/
│   ├── tokens.css               # Design tokens (colors, typography, 3 themes)
│   └── styles.css               # Component layout, animations, print stylesheet
├── data/
│   └── knowledge_base.json      # Structured Knowledge Base (124 rules, 17 crops)
├── js/
│   ├── rules_data.js            # Default rules & 301 symptom metadata
│   ├── symptom_visuals.js       # 112 botanical SVG archetypes & mappings
│   ├── inference_engine.js      # Forward/Backward chaining & MYCIN CF engine
│   ├── working_memory.js        # Session facts and audit state manager
│   ├── explanation_facility.js  # "Why" and "How" reasoning engines
│   ├── knowledge_acquisition.js # Rule CRUD and persistence controller
│   ├── history.js               # Past diagnoses localStorage manager
│   ├── i18n.js                  # English and Hindi localization
│   └── app.js                   # Application coordinator & event controller
├── images/                      # Real farm field photographs for all 17 crops
└── tests/
    ├── verify_expert_system.js  # MYCIN formula, rule execution, and explanation tests
    ├── test_symptom_visuals.js  # Visual reference guide integrity (301 symptoms)
    ├── test_differential_check.js # Differential diagnosis & in-place state tests
    ├── test_skip_comprehensive.js # Skip, unsure, and question navigation tests
    ├── test_indian_features.js  # Season filters, speech audio, spray calculator
    ├── test_back_button_and_report_fixes.js # Navigation & print prescription tests
    ├── test_browser_e2e.js      # Browser end-to-end workflows & admin CRUD
    └── audit_comprehensive.js   # Master audit across all 17 crops
```

---

## 🔬 Automated Test Suite

Run the automated verification suite to validate inference math, rule integrity, and UI workflows:
```bash
# Run all tests
node tests/verify_expert_system.js
node tests/test_symptom_visuals.js
node tests/test_differential_check.js
node tests/audit_comprehensive.js
```

---

## 📜 License & Disclaimers
This project is developed for educational, academic, and decision-support purposes. For epidemic crop failures or restricted agrochemical usage, always consult your local Agriculture Extension Officer or nearest Krishi Vigyan Kendra (KVK) scientist.
