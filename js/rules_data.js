/**
 * KrishiMitra - Knowledge Base & Symptom Metadata Library
 * Fully offline & zero-CORS compatible dataset with 17 crops and 124 validated diagnostic rules.
 */

const DEFAULT_KNOWLEDGE_BASE = [
  {
    "id": "RULE_WHT_01",
    "crop": "wheat",
    "conditions": [
      "yellow_pustules_stripes",
      "chlorotic_leaves",
      "cool_humid_weather"
    ],
    "conclusion": "wheat_yellow_rust",
    "disease_name": {
      "en": "Yellow Rust (Stripe Rust)",
      "hi": "पीला रतुआ (स्ट्राइप रस्ट)"
    },
    "cf": 0.88,
    "treatment": {
      "organic": {
        "en": "Spray 5% Cow urine solution or Sour buttermilk (Chhachh) mixed with copper vessel extract (50ml/L); apply Trichoderma harzianum (10g/L).",
        "hi": "5% गोमूत्र घोल या तांबे के बर्तन में रखी खट्टी छाछ (50 मिली/लीटर) का छिड़काव करें; ट्राइकोडर्मा हरजिएनम (10 ग्राम/लीटर) का प्रयोग करें।"
      },
      "chemical": {
        "en": "Spray Propiconazole 25% EC (Tilt) @ 1 ml/L or Tebuconazole 25.9% EC @ 1 ml/L upon first detection.",
        "hi": "लक्षण दिखते ही प्रोपिकोनाज़ोल 25% EC (टिल्ट) 1 मिली/लीटर या टेबुकोनाज़ोल 25.9% EC 1 मिली/लीटर पानी में घोलकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Sow rust-resistant varieties like HD-2967, PBW-550, or DBW-187; avoid late sowing; avoid excess nitrogen fertilizer.",
      "hi": "प्रतिरोधी किस्में जैसे HD-2967, PBW-550 या DBW-187 लगाएं; समय पर बुवाई करें; अधिक यूरिया (नाइट्रोजन) के प्रयोग से बचें।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_02",
    "crop": "wheat",
    "conditions": [
      "yellow_powder_rubbing_off",
      "linear_stripes_parallel_veins"
    ],
    "conclusion": "wheat_yellow_rust",
    "disease_name": {
      "en": "Yellow Rust (Stripe Rust)",
      "hi": "पीला रतुआ (स्ट्राइप रस्ट)"
    },
    "cf": 0.82,
    "treatment": {
      "organic": {
        "en": "Dust wood ash mixed with sulphur early morning; spray aqueous garlic-chili extract.",
        "hi": "सुबह के समय राख और सल्फर पाउडर का बुरकाव करें; लहसुन-मिर्च का काढ़ा छिड़कें।"
      },
      "chemical": {
        "en": "Foliar application of Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L.",
        "hi": "मैंकोजेब 75% WP 2.5 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन + डिफेनोकोनाज़ोल 1 मिली/लीटर का पर्णीय छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Inspect borders of fields weekly during foggy winter spells; maintain clean field margins.",
      "hi": "सर्दियों में कोहरे के समय खेतों की मेड़ों का साप्ताहिक निरीक्षण करें; खेत के किनारे खरपतवार मुक्त रखें।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_03",
    "crop": "wheat",
    "conditions": [
      "orange_brown_scattered_pustules",
      "round_oval_leaf_spots",
      "warm_moist_weather"
    ],
    "conclusion": "wheat_brown_rust",
    "disease_name": {
      "en": "Brown Rust (Leaf Rust)",
      "hi": "भूरा रतुआ (पत्ती का रतुआ)"
    },
    "cf": 0.86,
    "treatment": {
      "organic": {
        "en": "Spray Neem seed kernel extract (NSKE 5%) or Jeevamrutha @ 200 L/acre; dust sulphur powder (20-25 kg/ha).",
        "hi": "नीम बीज अर्क (NSKE 5%) या जीवामृत 200 लीटर/एकड़ का छिड़काव करें; सल्फर डस्ट (20-25 किग्रा/हेक्टेयर) बुरकें।"
      },
      "chemical": {
        "en": "Spray Propiconazole 25% EC @ 1 ml/L or Hexaconazole 5% EC @ 2 ml/L water.",
        "hi": "प्रोपिकोनाज़ोल 25% EC 1 मिली/लीटर या हेक्साकोनाज़ोल 5% EC 2 मिली/लीटर पानी में मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Use recommended certified seeds; eradicate alternate host weeds around irrigation channels.",
      "hi": "प्रमाणित बीज ही बोएं; मेड़ों और सिंचाई की नालियों से खरपतवार हटा दें।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_04",
    "crop": "wheat",
    "conditions": [
      "brown_pustules_underside_leaf",
      "premature_leaf_drying"
    ],
    "conclusion": "wheat_brown_rust",
    "disease_name": {
      "en": "Brown Rust (Leaf Rust)",
      "hi": "भूरा रतुआ (पत्ती का रतुआ)"
    },
    "cf": 0.78,
    "treatment": {
      "organic": {
        "en": "Apply fermented butter milk spray (50 ml/L) mixed with a pinch of turmeric powder.",
        "hi": "खट्टी छाछ (50 मिली/लीटर) में थोड़ी हल्दी मिलाकर छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Carbendazim 12% + Mancozeb 63% WP (Saaf) @ 2 g/L water.",
        "hi": "कार्बेंडाजिम 12% + मैंकोजेब 63% WP (साफ) 2 ग्राम/लीटर पानी में घोलकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Balanced NPK application (avoid excessive nitrogen; ensure adequate potassium).",
      "hi": "संतुलित उर्वरक दें (नाइट्रोजन कम और पोटाश की पर्याप्त मात्रा सुनिश्चित करें)।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_05",
    "crop": "wheat",
    "conditions": [
      "earhead_black_powder",
      "grain_converted_sooty_mass",
      "flowering_stage_damage"
    ],
    "conclusion": "wheat_loose_smut",
    "disease_name": {
      "en": "Loose Smut",
      "hi": "खुली कंडुआ (लूज स्मट)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Solar seed treatment in May-June (soak seeds in water for 4 hrs, dry under hot sun for 4 hrs); rogue out black heads in polythene bags.",
        "hi": "मई-जून में बीजों का सौर उपचार करें (4 घंटे पानी में भिगोकर 4 घंटे कड़ी धूप में सुखाएं); काली बालियों को पन्नी में ढककर सावधानी से काटकर जलाएं।"
      },
      "chemical": {
        "en": "Seed treatment with Carboxin 75% WP (Vitavax) @ 2.5 g/kg seed or Tebuconazole 2% DS @ 1.25 g/kg seed before sowing.",
        "hi": "बुवाई पूर्व बीजोपचार: कार्बोक्सिन 75% WP (विटावैक्स) 2.5 ग्राम/किग्रा बीज या टेबुकोनाज़ोल 2% DS 1.25 ग्राम/किग्रा बीज।"
      }
    },
    "prevention": {
      "en": "Never harvest seed from infected plots; strictly use certified pathogen-free seeds.",
      "hi": "रोगग्रस्त खेत से बीज न रखें; केवल प्रमाणित व रोगमुक्त बीज ही खरीदें।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_06",
    "crop": "wheat",
    "conditions": [
      "fishy_foul_odor_grains",
      "partial_blackening_grains",
      "canoeing_grain_shape"
    ],
    "conclusion": "wheat_karnal_bunt",
    "disease_name": {
      "en": "Karnal Bunt",
      "hi": "करनाल बंट"
    },
    "cf": 0.92,
    "treatment": {
      "organic": {
        "en": "Seed treatment with Trichoderma viride @ 10 g/kg seed; incorporate neem cake in soil (250 kg/ha).",
        "hi": "ट्राइकोडर्मा विरिडी (10 ग्राम/किग्रा) से बीजोपचार करें; खेत में नीम की खली (250 किग्रा/हेक्टेयर) मिलाएं।"
      },
      "chemical": {
        "en": "Spray Propiconazole 25% EC @ 1 ml/L at earhead emergence (boot leaf / flowering stage).",
        "hi": "बालियां निकलते समय (बूट लीफ अवस्था पर) प्रोपिकोनाज़ोल 25% EC 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Avoid excessive irrigation during heading and flowering stage; rotate crops with non-gramineous crops.",
      "hi": "बालियां और फूल आने के समय अधिक सिंचाई न करें; दलहनी फसलों के साथ फसल चक्र अपनाएं।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_07",
    "crop": "wheat",
    "conditions": [
      "white_cottony_powdery_patches",
      "leaf_sheath_powder",
      "cloudy_cool_weather"
    ],
    "conclusion": "wheat_powdery_mildew",
    "disease_name": {
      "en": "Powdery Mildew",
      "hi": "चूर्णिल आसिता (पाउडरी मिल्ड्यू)"
    },
    "cf": 0.84,
    "treatment": {
      "organic": {
        "en": "Spray wettable sulphur 80% WDG @ 3 g/L or baking soda (sodium bicarbonate 5g/L) with soap solution.",
        "hi": "घुलनशील गंधक (सल्फर 80% WDG) 3 ग्राम/लीटर या बेकिंग सोडा (5 ग्राम/लीटर) साबुन के घोल के साथ छिड़कें।"
      },
      "chemical": {
        "en": "Spray Hexaconazole 5% EC @ 2 ml/L or Difenoconazole 25% EC @ 1 ml/L water.",
        "hi": "हेक्साकोनाज़ोल 5% EC 2 मिली/लीटर या डिफेनोकोनाज़ोल 25% EC 1 मिली/लीटर पानी में छिड़कें।"
      }
    },
    "prevention": {
      "en": "Avoid high seed rate / dense planting; ensure good sunlight penetration and aeration in field.",
      "hi": "बीज दर अधिक न रखें; पौधों में पर्याप्त दूरी और धूप व हवा का प्रवाह बना रहने दें।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_08",
    "crop": "wheat",
    "conditions": [
      "green_black_tiny_insects_cluster",
      "sticky_honeydew_leaves",
      "earhead_sap_sucking"
    ],
    "conclusion": "wheat_aphids",
    "disease_name": {
      "en": "Wheat Aphids (Mahoo)",
      "hi": "गेहूं का माहू (एफिड)"
    },
    "cf": 0.89,
    "treatment": {
      "organic": {
        "en": "Spray 5% Neem Seed Kernel Extract (NSKE) or Neem oil (3000 ppm) @ 5 ml/L; conserve ladybird beetles.",
        "hi": "5% नीम अर्क (NSKE) या नीम तेल (3000 ppm) 5 मिली/लीटर छिड़कें; मित्र कीट (लेडीबर्ड बीटल) का संरक्षण करें।"
      },
      "chemical": {
        "en": "Spray Thiamethoxam 25% WG @ 0.4 g/L or Imidacloprid 17.8% SL @ 0.5 ml/L if pest exceeds 10-15 aphids/tiller.",
        "hi": "यदि माहू 10-15 प्रति कल्ला से अधिक हो तो थायमेथोक्सम 25% WG 0.4 ग्राम/लीटर या इमिडाक्लोप्रिड 0.5 मिली/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Install yellow sticky traps @ 10-12 per acre; avoid delayed sowing.",
      "hi": "खेत में पीले चिपचिपे कार्ड (येलो स्टिकी ट्रैप) 10-12 प्रति एकड़ लगाएं; समय पर बुवाई करें।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_09",
    "crop": "wheat",
    "conditions": [
      "chlorotic_leaves",
      "yellow_powder_rubbing_off",
      "cool_humid_weather"
    ],
    "conclusion": "wheat_yellow_rust",
    "disease_name": {
      "en": "Yellow Rust (Stripe Rust)",
      "hi": "पीला रतुआ (स्ट्राइप रस्ट)"
    },
    "cf": 0.79,
    "treatment": {
      "organic": {
        "en": "Spray fermented sour whey (Chhachh) mixed with neem leaf extract (10%).",
        "hi": "खट्टी छाछ और नीम की पत्तियों के अर्क (10%) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Propiconazole 25% EC (Tilt) @ 1 ml/L at canopy level.",
        "hi": "कैनोपी स्तर पर प्रोपिकोनाज़ोल 25% EC (टिल्ट) 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Monitor northern belt fields continuously from mid-December through February.",
      "hi": "दिसंबर मध्य से फरवरी तक उत्तरी क्षेत्रों में नियमित निगरानी रखें।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_SOY_01",
    "crop": "soybean",
    "conditions": [
      "yellow_green_mottled_leaves",
      "wrinkled_puckered_leaves",
      "stunted_plant_growth"
    ],
    "conclusion": "soybean_yellow_mosaic",
    "disease_name": {
      "en": "Yellow Mosaic Virus (YMV)",
      "hi": "पीला मोज़ेक वायरस (YMV)"
    },
    "cf": 0.9,
    "treatment": {
      "organic": {
        "en": "Rogue out and bury infected plants immediately; spray 5% NSKE or Neem oil (10,000 ppm) @ 3 ml/L to control whitefly vector.",
        "hi": "शुरुआती संक्रमित पौधों को तुरंत उखाड़कर जमीन में दबा दें; सफेद मक्खी की रोकथाम हेतु 5% NSKE या नीम तेल 3 मिली/लीटर छिड़कें।"
      },
      "chemical": {
        "en": "Control whitefly vector with Thiamethoxam 25% WG @ 0.5 g/L or Acetamiprid 20% SP @ 0.4 g/L.",
        "hi": "सफेद मक्खी को नियंत्रित करने के लिए थायमेथोक्सम 25% WG 0.5 ग्राम/लीटर या एसिटामिप्रिड 20% SP 0.4 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Sow YMV tolerant varieties like JS-9752, JS-2034, NRC-86; treat seed with Imidacloprid (3g/kg seed).",
      "hi": "रोग प्रतिरोधी किस्में (JS-9752, JS-2034, NRC-86) बोएं; इमिडाक्लोप्रिड 3 ग्राम/किग्रा बीज से बीजोपचार करें।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_SOY_02",
    "crop": "soybean",
    "conditions": [
      "whitefly_presence_underside_leaf",
      "yellow_patches_foliage"
    ],
    "conclusion": "soybean_yellow_mosaic",
    "disease_name": {
      "en": "Yellow Mosaic Virus (YMV)",
      "hi": "पीला मोज़ेक वायरस (YMV)"
    },
    "cf": 0.8,
    "treatment": {
      "organic": {
        "en": "Install yellow sticky traps (15-20/acre); spray Verticillium lecanii bio-pesticide (5g/L).",
        "hi": "येलो स्टिकी ट्रैप (15-20 प्रति एकड़) लगाएं; वर्टिसिलियम लेकानी जैविक फफूंद (5 ग्राम/लीटर) छिड़कें।"
      },
      "chemical": {
        "en": "Spray Spiromesifen 22.9% SC @ 1.25 ml/L or Diafenthiuron 50% WP @ 1.2 g/L.",
        "hi": "स्पिरोमेसिफेन 22.9% SC 1.25 मिली/लीटर या डायफेंथियूरॉन 50% WP 1.2 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Avoid planting near alternate host crops like mungbean or urdbean with active virus infection.",
      "hi": "संक्रमित मूंग या उड़द के खेतों के पास सोयाबीन लगाने से बचें।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_SOY_03",
    "crop": "soybean",
    "conditions": [
      "minute_brown_volcano_pustules",
      "leaves_turn_bronze_fall",
      "humid_warm_monsoon"
    ],
    "conclusion": "soybean_rust",
    "disease_name": {
      "en": "Soybean Rust",
      "hi": "सोयाबीन रतुआ (सोयाबीन रस्ट)"
    },
    "cf": 0.88,
    "treatment": {
      "organic": {
        "en": "Spray fermented garlic-onion extract with soap or Trichoderma harzianum @ 10g/L.",
        "hi": "लहसुन-प्याज का किण्वित अर्क या ट्राइकोडर्मा हरजिएनम 10 ग्राम/लीटर का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Hexaconazole 5% EC @ 1.5 ml/L or Tebuconazole 25.9% EC @ 1 ml/L or Pyraclostrobin 20% WG @ 1 g/L.",
        "hi": "हेक्साकोनाज़ोल 5% EC 1.5 मिली/लीटर या टेबुकोनाज़ोल 25.9% EC 1 मिली/लीटर या पायराक्लोस्ट्रोबिन 20% WG 1 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Plant tolerant varieties (e.g. DSb-21); maintain optimum plant population; spray fungicide at first notice.",
      "hi": "सहनशील किस्में (DSb-21) लगाएं; पौधों की घनी बुवाई न करें; पहला लक्षण दिखते ही फफूंदनाशक छिड़कें।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_SOY_04",
    "crop": "soybean",
    "conditions": [
      "premature_defoliation",
      "rusty_powder_underside_leaf"
    ],
    "conclusion": "soybean_rust",
    "disease_name": {
      "en": "Soybean Rust",
      "hi": "सोयाबीन रतुआ (सोयाबीन रस्ट)"
    },
    "cf": 0.82,
    "treatment": {
      "organic": {
        "en": "Apply wettable sulphur 80% WP @ 3 g/L early in the day.",
        "hi": "घुलनशील गंधक 80% WP 3 ग्राम/लीटर सुबह के समय छिड़कें।"
      },
      "chemical": {
        "en": "Foliar spray of Propiconazole 25% EC @ 1 ml/L water.",
        "hi": "प्रोपिकोनाज़ोल 25% EC 1 मिली/लीटर पानी में मिलाकर पर्णीय छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Scout lower foliage twice weekly during rainy breaks in August-September.",
      "hi": "अगस्त-सितंबर में बारिश रुकने पर सप्ताह में दो बार निचली पत्तियों की जांच करें।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_SOY_05",
    "crop": "soybean",
    "conditions": [
      "ashy_grey_stem_discoloration",
      "pith_decay_black_specks",
      "post_flowering_drought"
    ],
    "conclusion": "soybean_charcoal_rot",
    "disease_name": {
      "en": "Charcoal Rot",
      "hi": "चारकोल रॉट (अंगमारी)"
    },
    "cf": 0.89,
    "treatment": {
      "organic": {
        "en": "Soil drenching with Trichoderma viride enriched Farm Yard Manure (FYM 5kg/acre); conserve soil moisture through mulching.",
        "hi": "ट्राइकोडर्मा विरिडी मिश्रित गोबर की खाद डालें; खेत में नमी बनाए रखने हेतु पुआल की पलवार (मल्चिंग) करें।"
      },
      "chemical": {
        "en": "Seed treatment with Carbendazim + Mancozeb (2 g/kg seed); drench Carbendazim 50% WP @ 1.5 g/L at stem base.",
        "hi": "कार्बेंडाजिम + मैंकोजेब (2 ग्राम/किग्रा बीज) से बीजोपचार; पौधे के तने के पास कार्बेंडाजिम 1.5 ग्राम/लीटर घोल डालें।"
      }
    },
    "prevention": {
      "en": "Provide life-saving irrigation during dry spells at pod development; rotate with sorghum or corn.",
      "hi": "फली बनते समय सूखे की स्थिति में जीवनरक्षक सिंचाई अवश्य दें; ज्वार या मक्का के साथ फसल चक्र अपनाएं।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_SOY_06",
    "crop": "soybean",
    "conditions": [
      "black_sunken_lesions_pods",
      "twigs_die_back",
      "poor_seed_filling"
    ],
    "conclusion": "soybean_anthracnose_pod_blight",
    "disease_name": {
      "en": "Anthracnose & Pod Blight",
      "hi": "एन्थ्रेक्नोज़ और फली झुलसा"
    },
    "cf": 0.87,
    "treatment": {
      "organic": {
        "en": "Spray Panchagavya (30 ml/L) or botanical extract of Lantana camara (10%); remove infected residue.",
        "hi": "पंचगव्य (30 मिली/लीटर) या लैंटाना पत्ती का अर्क (10%) छिड़कें; रोगग्रस्त अवशेषों को नष्ट करें।"
      },
      "chemical": {
        "en": "Spray Tebuconazole 25.9% EC @ 1.25 ml/L or Carbendazim 12% + Mancozeb 63% WP @ 2.5 g/L at pod filling.",
        "hi": "फली भरते समय टेबुकोनाज़ोल 25.9% EC 1.25 मिली/लीटर या साफ (Saaf) 2.5 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Ensure proper drainage in monsoon; avoid waterlogging; use certified disease-free seed.",
      "hi": "बरसात में खेत से जल निकासी की उत्तम व्यवस्था रखें; जलभराव न होने दें; प्रमाणित बीज बोएं।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_SOY_07",
    "crop": "soybean",
    "conditions": [
      "ring_cut_stem_girdle",
      "wilting_upper_trifoliate",
      "hollow_stem_larva"
    ],
    "conclusion": "soybean_girdle_beetle",
    "disease_name": {
      "en": "Girdle Beetle / Stem Fly",
      "hi": "गर्डल बीटल / तना मक्खी"
    },
    "cf": 0.91,
    "treatment": {
      "organic": {
        "en": "Pluck and destroy girdled branches bearing eggs/larvae; spray 5% NSKE at initial ring formation.",
        "hi": "रिंग कटी हुई शाखाओं को तोड़कर नष्ट करें; शुरुआती छल्ला बनते ही 5% नीम अर्क (NSKE) छिड़कें।"
      },
      "chemical": {
        "en": "Spray Chlorantraniliprole 18.5% SC @ 0.3 ml/L or Thiamethoxam 12.6% + Lambda-cyhalothrin 9.5% ZC @ 0.5 ml/L.",
        "hi": "कोराजन (Chlorantraniliprole 18.5% SC) 0.3 मिली/लीटर या अलिका (Alika) 0.5 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Timely sowing in June-July; destroy crop stubble post-harvest to kill diapausing larvae.",
      "hi": "जून-जुलाई में समय पर बुवाई करें; कटाई के बाद खेत के अवशेष जलाएं या गहरी जुताई करें।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_SOY_08",
    "crop": "soybean",
    "conditions": [
      "wrinkled_puckered_leaves",
      "yellow_patches_foliage"
    ],
    "conclusion": "soybean_yellow_mosaic",
    "disease_name": {
      "en": "Yellow Mosaic Virus (YMV)",
      "hi": "पीला मोज़ेक वायरस (YMV)"
    },
    "cf": 0.74,
    "treatment": {
      "organic": {
        "en": "Spray neem oil 3000 ppm @ 5ml/L; eradicate weed hosts like Parthenium around the farm.",
        "hi": "नीम तेल 3000 ppm 5 मिली/लीटर छिड़कें; खेत के आसपास से गाजरघास नष्ट करें।"
      },
      "chemical": {
        "en": "Spray Dimethoate 30% EC @ 1.7 ml/L or Thiamethoxam 25% WG @ 0.4 g/L.",
        "hi": "डाइमेथोएट 30% EC 1.7 मिली/लीटर या थायमेथोक्सम 25% WG 0.4 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Grow border crop of 2-3 rows of maize or bajra as barrier against whiteflies.",
      "hi": "खेत के चारों ओर मक्का या बाजरे की 2-3 कतारें सुरक्षा दीवार के रूप में लगाएं।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_SOY_09",
    "crop": "soybean",
    "conditions": [
      "black_sunken_lesions_pods",
      "leaves_turn_bronze_fall"
    ],
    "conclusion": "soybean_anthracnose_pod_blight",
    "disease_name": {
      "en": "Anthracnose & Pod Blight",
      "hi": "एन्थ्रेक्नोज़ और फली झुलसा"
    },
    "cf": 0.76,
    "treatment": {
      "organic": {
        "en": "Foliar spray with cow-urine + neem leaf decotion (10%).",
        "hi": "गोमूत्र और नीम पत्ती के काढ़े (10%) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Azoxystrobin 11% + Tebuconazole 18.3% SC @ 1.5 ml/L.",
        "hi": "कस्टोडिया (Azoxystrobin + Tebuconazole) 1.5 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Maintain row spacing of 45 cm for better sun exposure and ventilation.",
      "hi": "हवा और धूप के लिए कतार से कतार की दूरी 45 सेमी बनाए रखें।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_TOM_01",
    "crop": "tomato",
    "conditions": [
      "concentric_rings_target_spots",
      "lower_leaves_affected",
      "yellowing_around_spots"
    ],
    "conclusion": "tomato_early_blight",
    "disease_name": {
      "en": "Early Blight (Alternaria)",
      "hi": "अगेती झुलसा (अर्ली ब्लाइट)"
    },
    "cf": 0.9,
    "treatment": {
      "organic": {
        "en": "Prune affected lower leaves; spray Trichoderma viride (10 g/L) or fermented buttermilk with turmeric.",
        "hi": "निचली संक्रमित पत्तियां काटकर नष्ट करें; ट्राइकोडर्मा विरिडी (10 ग्राम/लीटर) या हल्दी युक्त खट्टी छाछ छिड़कें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2.5 g/L or Chlorothalonil 75% WP @ 2 g/L or Azoxystrobin 23% SC @ 1 ml/L.",
        "hi": "मैंकोजेब 75% WP 2.5 ग्राम/लीटर या क्लोरोथैलोनिल 2 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन 1 मिली/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Stake plants upright; mulch with dry straw to prevent soil splash; practice 3-year solanaceous crop rotation.",
      "hi": "टमाटर के पौधों को बांस से सहारा (स्टेकिंग) दें; जमीन पर पुआल की पलवार बिछाएं; 3 साल का फसल चक्र अपनाएं।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_02",
    "crop": "tomato",
    "conditions": [
      "brown_circular_spots",
      "concentric_rings_target_spots"
    ],
    "conclusion": "tomato_early_blight",
    "disease_name": {
      "en": "Early Blight (Alternaria)",
      "hi": "अगेती झुलसा (अर्ली ब्लाइट)"
    },
    "cf": 0.82,
    "treatment": {
      "organic": {
        "en": "Spray copper oxychloride 50% WP @ 3 g/L or 1% Bordeaux mixture on lower leaves.",
        "hi": "कॉपर ऑक्सीक्लोराइड 50% WP 3 ग्राम/लीटर या 1% बोर्डो मिश्रण का निचली पत्तियों पर छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Difenoconazole 25% EC (Score) @ 1 ml/L water.",
        "hi": "डिफेनोकोनाज़ोल 25% EC (स्कोर) 1 मिली/लीटर पानी में मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Avoid overhead watering; use drip irrigation to keep foliage dry.",
      "hi": "फव्वारे या ऊपर से पानी न दें; टपक (ड्रिप) सिंचाई अपनाकर पत्तियों को सूखा रखें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_03",
    "crop": "tomato",
    "conditions": [
      "water_soaked_dark_lesions",
      "white_cottony_mold_underside",
      "rapid_foliage_rot_cold_fog"
    ],
    "conclusion": "tomato_late_blight",
    "disease_name": {
      "en": "Late Blight (Phytophthora)",
      "hi": "पछेती झुलसा (लेट ब्लाइट)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Immediate spray of 1% Bordeaux mixture or Copper Hydroxide (2.5 g/L); rogue out heavily blighted vines.",
        "hi": "तुरंत 1% बोर्डो मिश्रण या कॉपर हाइड्रोक्साइड (2.5 ग्राम/लीटर) का छिड़काव करें; अत्यधिक सड़े पौधों को उखाड़कर गाड़ दें।"
      },
      "chemical": {
        "en": "Spray Metalaxyl 8% + Mancozeb 64% WP (Ridomil Gold) @ 2.5 g/L or Dimethomorph 50% WP @ 1 g/L urgently.",
        "hi": "तुरंत रिडोमिल गोल्ड (Metalaxyl + Mancozeb) 2.5 ग्राम/लीटर या डाइमेथोमॉर्फ 50% WP 1 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Plant resistant hybrids; provide wide spacing; avoid winter night irrigations during dense fog periods.",
      "hi": "रोगरोधी संकर किस्में लगाएं; उचित दूरी रखें; घने कोहरे के दिनों में रात की सिंचाई से बचें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_04",
    "crop": "tomato",
    "conditions": [
      "fruit_brown_leathery_rot",
      "water_soaked_dark_lesions"
    ],
    "conclusion": "tomato_late_blight",
    "disease_name": {
      "en": "Late Blight (Phytophthora)",
      "hi": "पछेती झुलसा (लेट ब्लाइट)"
    },
    "cf": 0.88,
    "treatment": {
      "organic": {
        "en": "Destroy affected fruits in a deep pit; spray copper oxychloride (3 g/L).",
        "hi": "प्रभावित सड़े फलों को गहरे गड्ढे में दबाएं; कॉपर ऑक्सीक्लोराइड (3 ग्राम/लीटर) छिड़कें।"
      },
      "chemical": {
        "en": "Spray Cymoxanil 8% + Mancozeb 64% WP (Curzate) @ 2 g/L.",
        "hi": "साइमोक्सानिल 8% + मैंकोजेब 64% WP (कर्जेट) 2 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Apply protective fungicide barrier spray before forecasted winter rains or persistent fog.",
      "hi": "सर्दियों की बारिश या लगातार कोहरे के पूर्वानुमान से पहले सुरक्षात्मक फफूंदनाशक छिड़कें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_05",
    "crop": "tomato",
    "conditions": [
      "upward_curling_leaves",
      "thick_leathery_stunted_leaves",
      "bushy_stunted_growth"
    ],
    "conclusion": "tomato_leaf_curl_virus",
    "disease_name": {
      "en": "Tomato Leaf Curl Virus (ToLCV)",
      "hi": "टमाटर पर्ण कुंचन (लीफ कर्ल वायरस)"
    },
    "cf": 0.92,
    "treatment": {
      "organic": {
        "en": "Uproot severely stunted plants and burn; install 20 yellow sticky traps/acre; spray 5% NSKE + Neem oil 10,000 ppm (3 ml/L).",
        "hi": "गंभीर रूप से बौने पौधों को उखाड़कर नष्ट करें; 20 पीले स्टिकी ट्रैप लगाएं; 5% NSKE + नीम तेल (3 मिली/लीटर) छिड़कें।"
      },
      "chemical": {
        "en": "Spray Cyantraniliprole 10.26% OD (Benevia) @ 1.8 ml/L or Diafenthiuron 50% WP @ 1.2 g/L to suppress vector whitefly.",
        "hi": "सफेद मक्खी को मारने के लिए बेनेविया (Cyantraniliprole) 1.8 मिली/लीटर या पेगासस (Diafenthiuron) 1.2 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Raise nursery seedlings under 40-mesh insect net; use tolerant hybrids (e.g. US-440, NS-501, Abhinav).",
      "hi": "नर्सरी में पौध 40-मेश मच्छरदानी/नेट के अंदर तैयार करें; सहनशील किस्में (जैसे अभिनव, US-440) लगाएं।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_06",
    "crop": "tomato",
    "conditions": [
      "whitefly_presence_underside_leaf",
      "upward_curling_leaves"
    ],
    "conclusion": "tomato_leaf_curl_virus",
    "disease_name": {
      "en": "Tomato Leaf Curl Virus (ToLCV)",
      "hi": "टमाटर पर्ण कुंचन (लीफ कर्ल वायरस)"
    },
    "cf": 0.8,
    "treatment": {
      "organic": {
        "en": "Spray entomopathogenic fungus Beauveria bassiana (5 g/L) on leaf undersides.",
        "hi": "पत्तियों के निचले हिस्से पर बवेरिया बासियाना (5 ग्राम/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Thiamethoxam 25% WG @ 0.5 g/L or Acetamiprid 20% SP @ 0.4 g/L.",
        "hi": "थायमेथोक्सम 25% WG 0.5 ग्राम/लीटर या एसिटामिप्रिड 20% SP 0.4 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Eradicate solanaceous weed hosts (datura, black nightshade) around farm boundaries.",
      "hi": "खेत के आसपास के धतूरा और मकोय जैसे जंगली खरपतवार उखाड़ फेंकें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_07",
    "crop": "tomato",
    "conditions": [
      "sudden_green_wilting",
      "white_bacterial_ooze_stem",
      "vascular_browning_stem"
    ],
    "conclusion": "tomato_bacterial_wilt",
    "disease_name": {
      "en": "Bacterial Wilt (Ralstonia)",
      "hi": "जीवाणु उकठा / झुलसा (बैक्टीरियल विल्ट)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Soil drenching with Pseudomonas fluorescens (10 g/L) or Bacillus subtilis; drench with fresh lime water (10 g/L) to raise pH.",
        "hi": "स्यूडोमोनास फ्लोरेसेंस (10 ग्राम/लीटर) से जड़ों को तर करें; चूने का पानी (10 ग्राम/लीटर) डालकर मिट्टी का शोधन करें।"
      },
      "chemical": {
        "en": "Drench plant base with Streptocycline @ 1 g / 10 L water + Copper Oxychloride 50% WP @ 2.5 g/L.",
        "hi": "स्ट्रेप्टोसाइक्लिन (1 ग्राम प्रति 10 लीटर पानी) + कॉपर ऑक्सीक्लोराइड (2.5 ग्राम/लीटर) से पौधों की जड़ों का शोधन करें।"
      }
    },
    "prevention": {
      "en": "Avoid waterlogging; graft on resistant wild brinjal rootstock; rotate with paddy or maize (not potato/brinjal/chili).",
      "hi": "जलभराव रोकें; जंगली बैंगन के रूटस्टॉक पर ग्राफ्टिंग करें; धान या मक्का के साथ फसल चक्र रखें (आलू/मिर्च के बाद न लगाएं)।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_08",
    "crop": "tomato",
    "conditions": [
      "circular_boreholes_fruit",
      "caterpillar_feeding_fruits",
      "premature_fruit_drop"
    ],
    "conclusion": "tomato_fruit_borer",
    "disease_name": {
      "en": "Tomato Fruit Borer (Helicoverpa)",
      "hi": "टमाटर फल छेदक (हेलिकोवर्पा इल्ली)"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Install 5-8 pheromone traps (Helilure)/acre; spray Bacillus thuringiensis (Bt) @ 2 g/L or HaNPV 250 LE/ha.",
        "hi": "5-8 फेरोमोन ट्रैप (हेलील्योर) प्रति एकड़ लगाएं; बीटी (Bt) 2 ग्राम/लीटर या HaNPV 250 LE प्रति हेक्टेयर छिड़कें।"
      },
      "chemical": {
        "en": "Spray Chlorantraniliprole 18.5% SC (Coragen) @ 0.3 ml/L or Flubendiamide 39.35% SC (Fame) @ 0.3 ml/L.",
        "hi": "कोराजन (Chlorantraniliprole) 0.3 मिली/लीटर या फेम (Flubendiamide) 0.3 मिली/लीटर पानी में घोलकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Plant African Marigold as trap crop (1 row marigold for every 16 rows of tomato); handpick early larvae.",
      "hi": "ट्रैप फसल के रूप में अफ्रीकन गेंदा लगाएं (प्रत्येक 16 कतार टमाटर के बाद 1 कतार गेंदा); शुरुआती इल्लियां हाथ से बीनें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_09",
    "crop": "tomato",
    "conditions": [
      "lower_leaves_affected",
      "yellowing_around_spots"
    ],
    "conclusion": "tomato_early_blight",
    "disease_name": {
      "en": "Early Blight (Alternaria)",
      "hi": "अगेती झुलसा (अर्ली ब्लाइट)"
    },
    "cf": 0.72,
    "treatment": {
      "organic": {
        "en": "Spray botanical ginger-garlic extract (5%) mixed with neem oil (3 ml/L).",
        "hi": "अदरक-लहसुन अर्क (5%) नीम तेल (3 मिली/लीटर) के साथ छिड़कें।"
      },
      "chemical": {
        "en": "Preventative spray of Mancozeb 75% WP @ 2.5 g/L.",
        "hi": "सुरक्षात्मक रूप से मैंकोजेब 75% WP 2.5 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Regularly inspect bottom leaves for yellowing margins after rain.",
      "hi": "बारिश के बाद निचली पत्तियों के किनारों के पीलेपन की नियमित जांच करें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_TOM_10",
    "crop": "tomato",
    "conditions": [
      "circular_boreholes_fruit",
      "flower_bud_shedding"
    ],
    "conclusion": "tomato_fruit_borer",
    "disease_name": {
      "en": "Tomato Fruit Borer (Helicoverpa)",
      "hi": "टमाटर फल छेदक (हेलिकोवर्पा इल्ली)"
    },
    "cf": 0.81,
    "treatment": {
      "organic": {
        "en": "Release egg parasitoid Trichogramma pretiosum @ 50,000/ha; spray 5% NSKE at flower bud stage.",
        "hi": "ट्राइकोग्रामा परजीवी ततैया 50,000/हेक्टेयर छोड़ें; कलियों की अवस्था में 5% NSKE छिड़कें।"
      },
      "chemical": {
        "en": "Spray Emamectin Benzoate 5% SG (Proclaim) @ 0.4 g/L water.",
        "hi": "इमामेक्टिन बेंजोएट 5% SG (प्रोक्लेम) 0.4 ग्राम/लीटर पानी में मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Deep summer plowing to expose pupae to predatory birds and solar heat.",
      "hi": "गर्मी में गहरी जुताई करें ताकि जमीन में छुपे प्यूपा धूप और पक्षियों द्वारा नष्ट हो सकें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_COT_01",
    "crop": "cotton",
    "conditions": [
      "rosetted_flowers",
      "entry_hole_boll_interlocking_fibers",
      "pinkish_caterpillar_inside"
    ],
    "conclusion": "cotton_pink_bollworm",
    "disease_name": {
      "en": "Pink Bollworm (PBW)",
      "hi": "गुलाबी सुंडी (पिंक बॉलवर्म)"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Install 8-10 Gossyplure pheromone traps/acre; release Trichogramma bactrae @ 60,000/acre; spray 5% NSKE.",
        "hi": "8-10 गोसीप्ल्योर फेरोमोन ट्रैप प्रति एकड़ लगाएं; ट्राइकोग्रामा बैक्रे 60,000/एकड़ छोड़ें; 5% NSKE छिड़कें।"
      },
      "chemical": {
        "en": "Spray Chlorpyrifos 20% EC @ 2.5 ml/L or Emamectin Benzoate 5% SG @ 0.5 g/L or Profenofos 50% EC @ 2 ml/L.",
        "hi": "क्लोरपायरीफॉस 20% EC 2.5 मिली/लीटर या इमामेक्टिन बेंजोएट 0.5 ग्राम/लीटर या प्रोफेनोफॉस 2 मिली/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Avoid extending cotton season into ratoon; destroy ginning waste; follow window of sowing strictly.",
      "hi": "कपास की फसल को लंबी अवधि तक (रेटून) न रखें; जीनिंग वेस्ट नष्ट करें; समय पर एक साथ बुवाई करें।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_COT_02",
    "crop": "cotton",
    "conditions": [
      "stunted_boll_drop",
      "rosetted_flowers"
    ],
    "conclusion": "cotton_pink_bollworm",
    "disease_name": {
      "en": "Pink Bollworm (PBW)",
      "hi": "गुलाबी सुंडी (पिंक बॉलवर्म)"
    },
    "cf": 0.84,
    "treatment": {
      "organic": {
        "en": "Manual destruction of rosetted (closed rosette) flowers every morning.",
        "hi": "गुलाब जैसे बंद फूलों (रोसेट) को प्रतिदिन सुबह तोड़कर नष्ट करें।"
      },
      "chemical": {
        "en": "Spray Spinetoram 11.7% SC @ 1 ml/L or Indoxacarb 14.5% SC @ 1 ml/L.",
        "hi": "स्पिनिटोरम 11.7% SC 1 मिली/लीटर या इंडोक्साकार्ब 14.5% SC 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Install light traps at night to monitor and kill adult moths.",
      "hi": "वयस्क कीटों की निगरानी व खात्मे के लिए रात में प्रकाश प्रपंच (लाइट ट्रैप) लगाएं।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_COT_03",
    "crop": "cotton",
    "conditions": [
      "upward_curling_cotton_leaves",
      "enation_leaf_like_outgrowths",
      "thickened_dark_green_veins"
    ],
    "conclusion": "cotton_leaf_curl_virus",
    "disease_name": {
      "en": "Cotton Leaf Curl Virus (CLCuV)",
      "hi": "कपास लीफ कर्ल वायरस (मरोड़िया रोग)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Uproot initial infected plants; spray Neem oil 10,000 ppm (3 ml/L) mixed with Pongamia (Karanja) oil (2 ml/L).",
        "hi": "शुरुआती संक्रमित पौधे तुरंत उखाड़ें; नीम तेल 10,000 ppm (3 मिली/लीटर) और करंज तेल (2 मिली/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Control whitefly vector: spray Afidopyropen 50 g/L (Sefina) @ 2 ml/L or Flonicamid 50% WG (Ulala) @ 0.4 g/L.",
        "hi": "सफेद मक्खी नियंत्रण: सेफीना (Afidopyropen) 2 मिली/लीटर या उलाला (Flonicamid 50% WG) 0.4 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Grow resistant BG-II hybrids (e.g. resistant northern zone varieties); weed out Sida spinosa and Abutilon weeds.",
      "hi": "क्षेत्रीय प्रतिरोधी BG-II हाइब्रिड किस्में लगाएं; खेत व मेड़ों से कंघी व खरपतवार नष्ट करें।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_COT_04",
    "crop": "cotton",
    "conditions": [
      "whitefly_presence_underside_leaf",
      "thickened_dark_green_veins"
    ],
    "conclusion": "cotton_leaf_curl_virus",
    "disease_name": {
      "en": "Cotton Leaf Curl Virus (CLCuV)",
      "hi": "कपास लीफ कर्ल वायरस (मरोड़िया रोग)"
    },
    "cf": 0.81,
    "treatment": {
      "organic": {
        "en": "Install 25 yellow sticky sheets per acre at canopy level; spray 5% NSKE.",
        "hi": "फसल के स्तर पर 25 पीले चिपचिपे कार्ड प्रति एकड़ लगाएं; 5% NSKE का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Diafenthiuron 50% WP @ 1.25 g/L or Pyriproxyfen 10% EC @ 2 ml/L.",
        "hi": "डायफेंथियूरॉन 50% WP 1.25 ग्राम/लीटर या पायरीप्रॉक्सीफेन 10% EC 2 मिली/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Avoid excess nitrogen fertilizer which causes succulent leafy growth attractive to whitefly.",
      "hi": "अधिक यूरिया न दें, जिससे पत्तियां ज्यादा मुलायम होकर सफेद मक्खी को आकर्षित करती हैं।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_COT_05",
    "crop": "cotton",
    "conditions": [
      "angular_water_soaked_leaf_spots",
      "black_arm_stem_cankers",
      "vein_browning_leaves"
    ],
    "conclusion": "cotton_bacterial_blight",
    "disease_name": {
      "en": "Bacterial Blight (Black Arm)",
      "hi": "जीवाणु अंगमारी (ब्लैक आर्म रोग)"
    },
    "cf": 0.92,
    "treatment": {
      "organic": {
        "en": "Spray copper hydroxide 2 g/L or 1% Bordeaux mixture; spray cow-dung filtrate (20%).",
        "hi": "कॉपर हाइड्रोक्साइड 2 ग्राम/लीटर या 1% बोर्डो मिश्रण छिड़कें; छाना हुआ गाय के गोबर का घोल (20%) छिड़कें।"
      },
      "chemical": {
        "en": "Spray Copper Oxychloride 50% WP @ 2.5 g/L + Streptocycline @ 1 g per 10 L water.",
        "hi": "कॉपर ऑक्सीक्लोराइड 50% WP 2.5 ग्राम/लीटर + स्ट्रेप्टोसाइक्लिन 1 ग्राम प्रति 10 लीटर पानी में मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Acid delinting of cotton seed with commercial sulfuric acid (100 ml/kg seed) followed by fungicide dressing.",
      "hi": "सल्फ्यूरिक एसिड (100 मिली/किग्रा बीज) से बीज का बिनौला रेशारहित (डीलिंटिंग) और बीजोपचार करें।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_COT_06",
    "crop": "cotton",
    "conditions": [
      "tiger_stripe_leaf_chlorosis",
      "vascular_browning_stem",
      "gradual_wilting_leaf_drop"
    ],
    "conclusion": "cotton_verticillium_wilt",
    "disease_name": {
      "en": "Verticillium Wilt",
      "hi": "वर्टिसिलियम उकठा (विल्ट)"
    },
    "cf": 0.89,
    "treatment": {
      "organic": {
        "en": "Soil application of Trichoderma viride enriched FYM (500 kg/ha); drench neem cake extract.",
        "hi": "ट्राइकोडर्मा विरिडी मिश्रित गोबर की खाद (500 किग्रा/हेक्टेयर) डालें; नीम की खली का पानी जड़ों में दें।"
      },
      "chemical": {
        "en": "Drench collar region with Carbendazim 50% WP @ 1 g/L or Benomyl @ 1 g/L.",
        "hi": "पौधे के तने और जड़ों के पास कार्बेंडाजिम 50% WP 1 ग्राम/लीटर का घोल डालें।"
      }
    },
    "prevention": {
      "en": "Avoid field flooding; cultivate on raised ridges; rotate with cereals (sorghum, pearl millet).",
      "hi": "खेत में पानी भरने से रोकें; ऊंची मेड़ों (रिज) पर बुवाई करें; बाजरा या ज्वार के साथ फसल चक्र अपनाएं।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_COT_07",
    "crop": "cotton",
    "conditions": [
      "whitefly_presence_underside_leaf",
      "sticky_honeydew_leaves",
      "black_sooty_mold_leaves"
    ],
    "conclusion": "cotton_whitefly_infestation",
    "disease_name": {
      "en": "Whitefly Infestation & Sooty Mold",
      "hi": "सफेद मक्खी प्रकोप और काली फफूंद"
    },
    "cf": 0.88,
    "treatment": {
      "organic": {
        "en": "Spray fish oil rosin soap @ 20 g/L or Neem oil 10,000 ppm (4 ml/L); wash off sooty mold with dilute starch water.",
        "hi": "फिश ऑयल रोजिन सोप 20 ग्राम/लीटर या नीम तेल (4 मिली/लीटर) छिड़कें; काली फफूंद धोने हेतु हल्का मांड का पानी छिड़कें।"
      },
      "chemical": {
        "en": "Spray Spiromesifen 22.9% SC @ 1.2 ml/L or Pyriproxyfen 10% EC @ 2 ml/L.",
        "hi": "स्पिरोमेसिफेन 22.9% SC 1.2 मिली/लीटर या पायरीप्रॉक्सीफेन 10% EC 2 मिली/लीटर पानी में मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Install yellow sticky traps (15-20/acre); avoid broad-spectrum pyrethroid sprays that kill beneficial predators.",
      "hi": "15-20 पीले स्टिकी ट्रैप लगाएं; सिंथेटिक पायरेथ्रोइड के अंधाधुंध छिड़काव से बचें जो मित्र कीटों को मार देते हैं।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_COT_08",
    "crop": "cotton",
    "conditions": [
      "angular_water_soaked_leaf_spots",
      "black_arm_stem_cankers"
    ],
    "conclusion": "cotton_bacterial_blight",
    "disease_name": {
      "en": "Bacterial Blight (Black Arm)",
      "hi": "जीवाणु अंगमारी (ब्लैक आर्म रोग)"
    },
    "cf": 0.8,
    "treatment": {
      "organic": {
        "en": "Foliar spray of 1% Bordeaux mixture before monsoon storms.",
        "hi": "मानसून की तूफानी बारिश से पहले 1% बोर्डो मिश्रण का छिड़काव करें।"
      },
      "chemical": {
        "en": "Foliar spray of Copper Oxychloride @ 2.5 g/L with Agrimycin @ 0.5 g/10L.",
        "hi": "कॉपर ऑक्सीक्लोराइड 2.5 ग्राम/लीटर + एग्रीमाइसिन 0.5 ग्राम/10 लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Destroy cotton crop residues and stalks after harvest by burning or deep burial.",
      "hi": "कटाई के बाद कपास की पुरानी पराली व डंठलों को नष्ट करें।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_COT_09",
    "crop": "cotton",
    "conditions": [
      "entry_hole_boll_interlocking_fibers",
      "stunted_boll_drop"
    ],
    "conclusion": "cotton_pink_bollworm",
    "disease_name": {
      "en": "Pink Bollworm (PBW)",
      "hi": "गुलाबी सुंडी (पिंक बॉलवर्म)"
    },
    "cf": 0.77,
    "treatment": {
      "organic": {
        "en": "Mass trapping with pheromone lures @ 15-20 traps per hectare.",
        "hi": "फेरोमोन ट्रैप 15-20 प्रति हेक्टेयर लगाकर नर पतंगों को बड़े पैमाने पर पकड़ें।"
      },
      "chemical": {
        "en": "Spray Chlorantraniliprole 18.5% SC @ 0.3 ml/L.",
        "hi": "कोराजन (Chlorantraniliprole) 0.3 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Terminate crop irrigation by December to induce early PBW diapause starvation.",
      "hi": "दिसंबर तक सिंचाई बंद कर दें ताकि गुलाबी सुंडी को जीवित रहने का भोजन न मिले।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_RIC_01",
    "crop": "rice",
    "conditions": [
      "wavy_translucent_leaf_margins",
      "milky_bacterial_dew_droplets",
      "straw_bleached_leaf_drying"
    ],
    "conclusion": "rice_bacterial_leaf_blight",
    "disease_name": {
      "en": "Bacterial Leaf Blight (BLB)",
      "hi": "जीवाणु पत्ती झुलसा (बैक्टीरियल ब्लाइट)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray fresh cow-dung supernatant liquid (20%) or neem cake extract (5%); drain excess standing water from field immediately.",
        "hi": "गाय के गोबर का निथरा हुआ पानी (20%) या 5% नीम खली अर्क छिड़कें; खेत से तुरंत अतिरिक्त पानी निकाल दें।"
      },
      "chemical": {
        "en": "Spray Streptocycline 1 g / 10 L water + Copper Oxychloride 50% WP @ 2.5 g/L; stop nitrogen top dressing.",
        "hi": "स्ट्रेप्टोसाइक्लिन 1 ग्राम/10 लीटर + कॉपर ऑक्सीक्लोराइड 2.5 ग्राम/लीटर छिड़कें; यूरिया डालना तुरंत बंद करें।"
      }
    },
    "prevention": {
      "en": "Grow resistant varieties like Improved Samba Mahsuri, IR-64, or Pusa Basmati 1718; split nitrogen application into 3-4 doses.",
      "hi": "रोगरोधी किस्में (जैसे इम्प्रूव्ड साम्बा महसूरी, IR-64, पूसा बासमती 1718) बोएं; यूरिया को 3-4 बार में बांटकर दें।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_02",
    "crop": "rice",
    "conditions": [
      "straw_bleached_leaf_drying",
      "wavy_translucent_leaf_margins"
    ],
    "conclusion": "rice_bacterial_leaf_blight",
    "disease_name": {
      "en": "Bacterial Leaf Blight (BLB)",
      "hi": "जीवाणु पत्ती झुलसा (बैक्टीरियल ब्लाइट)"
    },
    "cf": 0.81,
    "treatment": {
      "organic": {
        "en": "Dust dry wood ash mixed with copper sulfate (10:1 ratio) on dew-moist canopy.",
        "hi": "ओस भीगी फसल पर लकड़ी की राख और नीला थोथा (10:1 अनुपात) का बुरकाव करें।"
      },
      "chemical": {
        "en": "Spray Plantomycin @ 1 g/L with Copper Hydroxide @ 2 g/L.",
        "hi": "प्लेंटोमाइसिन 1 ग्राम/लीटर और कॉपर हाइड्रोक्साइड 2 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Avoid clipping seedling tips at transplanting, which opens entry wounds for bacteria.",
      "hi": "रोपाई के समय पौध की ऊपरी पत्तियों को न काटें, इससे जीवाणु के प्रवेश का घाव बन जाता है।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_03",
    "crop": "rice",
    "conditions": [
      "spindle_diamond_shaped_spots",
      "grey_center_brown_margin_spots",
      "black_broken_neck_node"
    ],
    "conclusion": "rice_blast",
    "disease_name": {
      "en": "Rice Blast (Magnaporthe)",
      "hi": "धान का झोंका रोग (ब्लास्ट)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Spray Pseudomonas fluorescens (10 g/L) or fermented sour buttermilk (50 ml/L) with cow urine; treat seed with Trichoderma (10g/kg).",
        "hi": "स्यूडोमोनास फ्लोरेसेंस (10 ग्राम/लीटर) या खट्टी छाछ (50 मिली/लीटर) गोमूत्र के साथ छिड़कें; ट्राइकोडर्मा से बीजोपचार करें।"
      },
      "chemical": {
        "en": "Spray Tricyclazole 75% WP (Baan) @ 0.6 g/L or Isoprothiolane 40% EC (Fuji-one) @ 1.5 ml/L or Kasugamycin 3% SL @ 2 ml/L.",
        "hi": "ट्राइसाइक्लाज़ोल 75% WP (बान) 0.6 ग्राम/लीटर या इसोप्रोथियोलेन 1.5 मिली/लीटर या कासुगामाइसिन 2 मिली/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Use resistant cultivars; do not apply excessive urea; maintain shallow water layer in paddy field.",
      "hi": "प्रतिरोधी किस्में लगाएं; अधिक यूरिया के इस्तेमाल से बचें; खेत में पानी की पतली परत बनाए रखें।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_04",
    "crop": "rice",
    "conditions": [
      "spindle_diamond_shaped_spots",
      "grey_center_brown_margin_spots"
    ],
    "conclusion": "rice_blast",
    "disease_name": {
      "en": "Rice Blast (Magnaporthe)",
      "hi": "धान का झोंका रोग (ब्लास्ट)"
    },
    "cf": 0.83,
    "treatment": {
      "organic": {
        "en": "Foliar spray of 5% NSKE mixed with fermented garlic extract.",
        "hi": "5% NSKE और लहसुन के काढ़े का पर्णीय छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Azoxystrobin 18.2% + Difenoconazole 11.4% SC (Amistar Top) @ 1 ml/L.",
        "hi": "एमिस्टार टॉप (Azoxystrobin + Difenoconazole) 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Avoid water deficit stress during tillering and panicle initiation phases.",
      "hi": "कल्ले फूटने और बाली बनते समय खेत में नमी की कमी न होने दें।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_05",
    "crop": "rice",
    "conditions": [
      "oval_greenish_grey_waterline_lesions",
      "serpentine_snake_skin_patterns",
      "sclerotia_mustard_seed_bodies"
    ],
    "conclusion": "rice_sheath_blight",
    "disease_name": {
      "en": "Sheath Blight (Rhizoctonia)",
      "hi": "शीथ ब्लाइट (पर्णच्छद अंगमारी)"
    },
    "cf": 0.91,
    "treatment": {
      "organic": {
        "en": "Spray Pseudomonas fluorescens (10 g/L) directed at stem base; apply neem cake in soil (150 kg/ha).",
        "hi": "स्यूडोमोनास फ्लोरेसेंस (10 ग्राम/लीटर) का पौधों की जड़ों और तने के पास छिड़काव करें; खेत में नीम खली डालें।"
      },
      "chemical": {
        "en": "Spray Hexaconazole 5% SC (Contaf) @ 2 ml/L or Validamycin 3% L (Sheathmar) @ 2.5 ml/L or Thifluzamide 24% SC @ 0.75 ml/L.",
        "hi": "हेक्साकोनाज़ोल (कॉन्टाफ) 2 मिली/लीटर या वैलिडामाइसिन 2.5 मिली/लीटर या थिफ्लूज़ामाइड 0.75 मिली/लीटर तने पर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Ensure optimal plant spacing (20x15 cm); skim off floating sclerotial bodies during puddle preparation.",
      "hi": "उचित दूरी (20x15 सेमी) पर पौध लगाएं; लेह (कद्दू) करते समय पानी पर तैरते कचरे व फफूंद अवशेषों को छानकर निकालें।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_06",
    "crop": "rice",
    "conditions": [
      "hopper_burn_circular_drying_patches",
      "brown_insects_base_of_tillers",
      "plant_lodging_circular_patches"
    ],
    "conclusion": "rice_brown_planthopper",
    "disease_name": {
      "en": "Brown Plant Hopper (BPH)",
      "hi": "भूरा फुदका / भूरा माहू (BPH)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Drain standing water immediately for 3-4 days (alternate wetting and drying); spray 5% neem seed oil with detergent at hill base.",
        "hi": "खेत से पानी तुरंत 3-4 दिन के लिए निकाल दें (वैकल्पिक गीला-सूखा रखें); पौधों के आधार पर 5% नीम तेल साबुन के साथ छिड़कें।"
      },
      "chemical": {
        "en": "Direct spray at stem base: Pymetrozine 50% WDG (Chess) @ 0.6 g/L or Triflumezopyrim 10% SC (Pexalon) @ 0.5 ml/L or Dinotefuran 20% SG @ 0.4 g/L.",
        "hi": "तने के आधार पर सीधे स्प्रे करें: चेस (Pymetrozine) 0.6 ग्राम/लीटर या पेक्सलोन (Triflumezopyrim) 0.5 मिली/लीटर या डाइनोटेफ्यूरॉन 0.4 ग्राम/लीटर।"
      }
    },
    "prevention": {
      "en": "Create alleyways (skip 1 row every 2-3 meters) for light and air; avoid synthetic pyrethroids which cause BPH resurgence.",
      "hi": "खेत में हवा-धूप के लिए हर 2-3 मीटर पर एक कतार खाली छोड़ें (गली बनाएं); पायरेथ्रोइड के छिड़काव से बचें जिससे फुदके तेजी से बढ़ते हैं।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_07",
    "crop": "rice",
    "conditions": [
      "dead_heart_central_shoot_drying",
      "white_ear_chaffy_panicles",
      "boreholes_frass_stem_base"
    ],
    "conclusion": "rice_stem_borer",
    "disease_name": {
      "en": "Yellow Stem Borer",
      "hi": "पीला तना छेदक (स्टेम बोरर)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Install 5-8 pheromone traps (Scirpo-lure)/acre; release Trichogramma japonicum @ 40,000/acre at weekly intervals.",
        "hi": "5-8 फेरोमोन ट्रैप प्रति एकड़ लगाएं; ट्राइकोग्रामा जापोनिकम परजीवी 40,000/एकड़ प्रति सप्ताह छोड़ें।"
      },
      "chemical": {
        "en": "Apply Cartap Hydrochloride 4% G @ 8 kg/acre or Chlorantraniliprole 0.4% G (Ferterra) @ 4 kg/acre with sand in standing water.",
        "hi": "खेत में पानी होने पर कार्टाप हाइड्रोक्लोराइड 4G (8 किग्रा/एकड़) या फरटेरा (4 किग्रा/एकड़) बालू में मिलाकर बुरकें।"
      }
    },
    "prevention": {
      "en": "Clip seedling leaf tips before transplanting to destroy egg masses; harvest crop close to ground level.",
      "hi": "रोपाई से पहले पौध के ऊपरी सिरे काटें ताकि अंडों के गुच्छे नष्ट हों; फसल की कटाई जमीन की सतह के पास से करें।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_08",
    "crop": "rice",
    "conditions": [
      "hopper_burn_circular_drying_patches",
      "brown_insects_base_of_tillers"
    ],
    "conclusion": "rice_brown_planthopper",
    "disease_name": {
      "en": "Brown Plant Hopper (BPH)",
      "hi": "भूरा फुदका / भूरा माहू (BPH)"
    },
    "cf": 0.85,
    "treatment": {
      "organic": {
        "en": "Install light traps 1 hour after sunset to catch attracted hoppers; allow spiders and mirid bugs to proliferate.",
        "hi": "सूर्यास्त के 1 घंटे बाद लाइट ट्रैप लगाएं; खेत में मकड़ियों और मित्र कीटों को पनपने दें।"
      },
      "chemical": {
        "en": "Spray Buprofezin 25% SC @ 1.5 ml/L targeting the plant base.",
        "hi": "तने के आधार को लक्ष्य करके ब्यूप्रोफेज़िन 25% SC 1.5 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Follow intermittent irrigation instead of continuous deep submergence.",
      "hi": "लगातार गहरा पानी भरने के बजाय खेत में रुक-रुक कर सिंचाई करें।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_09",
    "crop": "rice",
    "conditions": [
      "dead_heart_central_shoot_drying",
      "boreholes_frass_stem_base"
    ],
    "conclusion": "rice_stem_borer",
    "disease_name": {
      "en": "Yellow Stem Borer",
      "hi": "पीला तना छेदक (स्टेम बोरर)"
    },
    "cf": 0.82,
    "treatment": {
      "organic": {
        "en": "Apply Neem cake @ 200 kg/ha at root zone; spray Azadirachtin 10,000 ppm @ 3 ml/L.",
        "hi": "जड़ों में नीम खली 200 किग्रा/हेक्टेयर डालें; अज़ाडिराक्टिन (नीम तेल) 3 मिली/लीटर छिड़कें।"
      },
      "chemical": {
        "en": "Spray Chlorantraniliprole 18.5% SC @ 0.3 ml/L or Fipronil 5% SC @ 2 ml/L.",
        "hi": "कोराजन (Chlorantraniliprole) 0.3 मिली/लीटर या फिप्रोनिल 5% SC 2 मिली/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Plough stubbles immediately after harvest and submerge with water to kill overwintering larvae.",
      "hi": "कटाई के तुरंत बाद खेत की जुताई करके पानी भर दें ताकि तने में छिपी इल्लियां मर जाएं।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_POT_01",
    "crop": "potato",
    "conditions": [
      "water_soaked_dark_leaf_blotch",
      "white_mildew_underside_leaf",
      "tubers_purplish_brown_rot"
    ],
    "conclusion": "potato_late_blight",
    "disease_name": {
      "en": "Late Blight of Potato",
      "hi": "आलू का पछेती झुलसा (लेट ब्लाइट)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray 1% Bordeaux mixture or Copper Hydroxide (2.5 g/L); rogue out blighted plants immediately.",
        "hi": "1% बोर्डो मिश्रण या कॉपर हाइड्रोक्साइड (2.5 ग्राम/लीटर) का छिड़काव करें; रोगग्रस्त पौधों को उखाड़कर नष्ट करें।"
      },
      "chemical": {
        "en": "Spray Cymoxanil 8% + Mancozeb 64% WP @ 2.5 g/L or Dimethomorph 50% WP @ 1 g/L urgently upon appearance.",
        "hi": "तुरंत साइमोक्सानिल + मैंकोजेब 2.5 ग्राम/लीटर या डाइमेथोमॉर्फ 50% WP 1 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Plant certified disease-free seed tubers; practice ridge earthing-up to cover tubers from sporangia wash.",
      "hi": "प्रमाणित रोगमुक्त आलू बीज बोएं; कंदों को ढकने के लिए मिट्टी चढ़ाने (अर्धिंग-अप) का कार्य सही समय पर करें।"
    },
    "reference": "ICAR-Central Potato Research Institute (CPRI) Shimla"
  },
  {
    "id": "RULE_POT_02",
    "crop": "potato",
    "conditions": [
      "concentric_target_rings_potato",
      "chlorotic_leaf_borders"
    ],
    "conclusion": "potato_early_blight",
    "disease_name": {
      "en": "Early Blight of Potato",
      "hi": "आलू का अगेती झुलसा (अर्ली ब्लाइट)"
    },
    "cf": 0.88,
    "treatment": {
      "organic": {
        "en": "Spray fermented buttermilk (50ml/L) with a pinch of turmeric powder; apply Trichoderma viride (10g/L).",
        "hi": "हल्दी युक्त खट्टी छाछ (50 मिली/लीटर) या ट्राइकोडर्मा विरिडी (10 ग्राम/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2.5 g/L or Difenoconazole 25% EC @ 1 ml/L water.",
        "hi": "मैंकोजेब 75% WP 2.5 ग्राम/लीटर या डिफेनोकोनाज़ोल 25% EC 1 मिली/लीटर पानी में मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Ensure balanced nutrition (avoid potassium deficiency); practice 3-year solanaceous crop rotation.",
      "hi": "संतुलित पोटाश दें; सोलेनेसी कुल की फसलों (टमाटर, बैंगन) के साथ 3 साल का फसल चक्र रखें।"
    },
    "reference": "ICAR-Central Potato Research Institute (CPRI) Shimla"
  },
  {
    "id": "RULE_POT_03",
    "crop": "potato",
    "conditions": [
      "black_crusty_specks_tuber_skin",
      "aerial_tubers_stems"
    ],
    "conclusion": "potato_black_scurf",
    "disease_name": {
      "en": "Black Scurf (Rhizoctonia)",
      "hi": "आलू का काली पपड़ी रोग (ब्लैक स्कर्फ)"
    },
    "cf": 0.91,
    "treatment": {
      "organic": {
        "en": "Treat seed tubers with Trichoderma harzianum @ 10 g/kg; incorporate neem cake in soil.",
        "hi": "ट्राइकोडर्मा हरजिएनम (10 ग्राम/किग्रा) से बीजोपचार करें; खेत में नीम की खली मिलाएं।"
      },
      "chemical": {
        "en": "Tuber dip in Pencycuron 250 SC @ 2 ml/L or Carboxin 37.5% + Thiram 37.5% WS @ 2 g/L before planting.",
        "hi": "बुवाई पूर्व पेंसीक्यूरॉन 250 SC (2 मिली/लीटर) के घोल में 10-15 मिनट आलू बीज को डुबोकर उपचारित करें।"
      }
    },
    "prevention": {
      "en": "Use green manuring before potato planting; avoid planting tubers too deep in cold damp soil.",
      "hi": "आलू से पहले हरी खाद (ढैंचा/सनई) लगाएं; ठंड में बीज को बहुत अधिक गहराई में न दबाएं।"
    },
    "reference": "ICAR-Central Potato Research Institute (CPRI) Shimla"
  },
  {
    "id": "RULE_MAI_01",
    "crop": "maize",
    "conditions": [
      "whorl_ragged_leaf_feeding",
      "sawdust_frass_whorl",
      "caterpillar_inverted_y_head"
    ],
    "conclusion": "maize_fall_armyworm",
    "disease_name": {
      "en": "Fall Armyworm (Spodoptera frugiperda)",
      "hi": "मक्का का फॉल आर्मीवर्म (सैनिक कीट)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Apply dry soil/ash mixed with lime (9:1) directly into leaf whorls; spray Bacillus thuringiensis (Bt) @ 2 g/L or Metarhizium rileyi @ 5 g/L.",
        "hi": "गोभ (भोंपू) में सूखी मिट्टी/राख और चूने का मिश्रण डालें; बीटी (Bt) 2 ग्राम/लीटर या मेटाराइजियम 5 ग्राम/लीटर छिड़कें।"
      },
      "chemical": {
        "en": "Apply Chlorantraniliprole 18.5% SC @ 0.4 ml/L or Emamectin Benzoate 5% SG @ 0.4 g/L targeting central whorl.",
        "hi": "कोराजन (Chlorantraniliprole) 0.4 मिली/लीटर या इमामेक्टिन बेंजोएट 0.4 ग्राम/लीटर का सीधे गोभ में छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Install FAW pheromone lures (5/acre); plant border crop of 3-4 rows of cowpea; avoid staggered sowing.",
      "hi": "5 फेरोमोन ट्रैप प्रति एकड़ लगाएं; खेत के चारों ओर लोबिया की 3-4 कतारें सुरक्षा हेतु लगाएं।"
    },
    "reference": "ICAR-Indian Institute of Maize Research (IIMR) Ludhiana"
  },
  {
    "id": "RULE_MAI_02",
    "crop": "maize",
    "conditions": [
      "rectangular_tan_leaf_lesions",
      "parallel_vein_blight_zones"
    ],
    "conclusion": "maize_maydis_blight",
    "disease_name": {
      "en": "Maydis Leaf Blight",
      "hi": "मैडिस पत्ती झुलसा"
    },
    "cf": 0.87,
    "treatment": {
      "organic": {
        "en": "Spray 5% Neem Seed Kernel Extract (NSKE) or fermented cow-urine solution (10%).",
        "hi": "5% नीम अर्क (NSKE) या 10% गोमूत्र के घोल का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L.",
        "hi": "मैंकोजेब 75% WP 2.5 ग्राम/लीटर या एमिस्टार टॉप 1 मिली/लीटर पानी में मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Sow tolerant hybrids (e.g. DHM-117, HQPM-1); destroy infected maize residue after harvest.",
      "hi": "सहनशील संकर किस्में लगाएं; कटाई के बाद पुरानी फसल के अवशेष नष्ट करें।"
    },
    "reference": "ICAR-Indian Institute of Maize Research (IIMR) Ludhiana"
  },
  {
    "id": "RULE_MAI_03",
    "crop": "maize",
    "conditions": [
      "cinnamon_brown_pustules_upper_lower",
      "powdery_spores_scattered"
    ],
    "conclusion": "maize_common_rust",
    "disease_name": {
      "en": "Common Rust (Puccinia)",
      "hi": "मक्का का सामान्य रतुआ (रस्ट)"
    },
    "cf": 0.86,
    "treatment": {
      "organic": {
        "en": "Spray wettable sulphur 80% WP @ 3 g/L early morning; apply sour buttermilk spray.",
        "hi": "सुबह के समय घुलनशील गंधक (सल्फर 80% WP) 3 ग्राम/लीटर या खट्टी छाछ का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Propiconazole 25% EC @ 1 ml/L or Mancozeb 75% WP @ 2.5 g/L at early rust notice.",
        "hi": "प्रोपिकोनाज़ोल 25% EC 1 मिली/लीटर या मैंकोजेब 2.5 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Ensure proper field drainage; maintain balanced potassium fertilization.",
      "hi": "खेत में जल निकास का प्रबंध रखें और पोटाश की संतुलित मात्रा दें।"
    },
    "reference": "ICAR-Indian Institute of Maize Research (IIMR) Ludhiana"
  },
  {
    "id": "RULE_CHI_01",
    "crop": "chilli",
    "conditions": [
      "upward_cupping_chilli_leaves",
      "shortened_internodes_bushy",
      "whitefly_presence_underside_leaf"
    ],
    "conclusion": "chilli_leaf_curl_virus",
    "disease_name": {
      "en": "Chilli Leaf Curl Virus (Murda Rog)",
      "hi": "मिर्च का पर्ण कुंचन (मुरड़ा रोग / चुरड़ा-मुरड़ा)"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Install 20 yellow sticky traps/acre; spray Neem oil 10,000 ppm (3 ml/L) mixed with Pongamia oil (2 ml/L); uproot severely stunted plants.",
        "hi": "20 पीले स्टिकी कार्ड प्रति एकड़ लगाएं; नीम तेल (3 मिली/लीटर) व करंज तेल छिड़कें; अत्यधिक बौने पौधे उखाड़कर नष्ट करें।"
      },
      "chemical": {
        "en": "Spray Diafenthiuron 50% WP @ 1.2 g/L or Cyantraniliprole 10.26% OD (Benevia) @ 1.5 ml/L to control vector whitefly.",
        "hi": "सफेद मक्खी नियंत्रण हेतु पेगासस (Diafenthiuron) 1.2 ग्राम/लीटर या बेनेविया 1.5 मिली/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Grow nursery under 40-mesh insect net; plant 2 rows of maize or jowar around chilli border as barrier.",
      "hi": "नर्सरी 40-मेश मच्छरदानी में तैयार करें; खेत के चारों तरफ मक्का या ज्वार की 2 कतारें रक्षात्मक घेरे के रूप में लगाएं।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_CHI_02",
    "crop": "chilli",
    "conditions": [
      "sunken_circular_spots_ripe_chilli",
      "acervuli_black_concentric_dots",
      "dieback_twigs_from_top"
    ],
    "conclusion": "chilli_anthracnose_dieback",
    "disease_name": {
      "en": "Anthracnose Fruit Rot & Dieback",
      "hi": "मिर्च का फल सड़न एवं डाइबैक रोग"
    },
    "cf": 0.92,
    "treatment": {
      "organic": {
        "en": "Spray 1% Bordeaux mixture or Trichoderma viride @ 10 g/L; prune and destroy blighted twigs.",
        "hi": "1% बोर्डो मिश्रण या ट्राइकोडर्मा विरिडी 10 ग्राम/लीटर का छिड़काव करें; सूखी टहनियां काटकर नष्ट करें।"
      },
      "chemical": {
        "en": "Spray Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L or Tebuconazole 25.9% EC @ 1 ml/L at flowering & fruiting.",
        "hi": "फूल व फल बनते समय एमिस्टार टॉप (1 मिली/लीटर) या टेबुकोनाज़ोल (1 मिली/लीटर) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Seed treatment with Thiram or Captan @ 3 g/kg seed; avoid sprinkler irrigation that wets ripe fruit.",
      "hi": "कैप्टन या थीरम (3 ग्राम/किग्रा) से बीजोपचार करें; पकते फलों पर फव्वारे से पानी न दें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_CHI_03",
    "crop": "chilli",
    "conditions": [
      "downward_boat_curling_leaves",
      "bronzing_underside_leaves",
      "elongated_shoots"
    ],
    "conclusion": "chilli_thrips_mites",
    "disease_name": {
      "en": "Yellow Mites & Thrips Infestation",
      "hi": "मिर्च के माइट (मकड़ी) व थ्रिप्स कीट"
    },
    "cf": 0.89,
    "treatment": {
      "organic": {
        "en": "Spray wettable sulphur 80% WDG @ 3 g/L or Neem oil (10,000 ppm) @ 3 ml/L; install blue sticky traps for thrips.",
        "hi": "घुलनशील गंधक (3 ग्राम/लीटर) या नीम तेल 3 मिली/लीटर छिड़कें; थ्रिप्स हेतु नीले स्टिकी ट्रैप (15/एकड़) लगाएं।"
      },
      "chemical": {
        "en": "Spray Spiromesifen 22.9% SC @ 1 ml/L for mites or Fipronil 5% SC @ 2 ml/L for thrips.",
        "hi": "माइट्स हेतु ओबरॉन (Spiromesifen) 1 मिली/लीटर या थ्रिप्स हेतु फिप्रोनिल 5% SC 2 मिली/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Maintain adequate soil moisture (drought promotes mite multiplication); avoid excessive nitrogen.",
      "hi": "खेत में नमी बनाए रखें क्योंकि सूखे में माइट्स तेजी से बढ़ते हैं; अधिक यूरिया न दें।"
    },
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru"
  },
  {
    "id": "RULE_MUS_01",
    "crop": "mustard",
    "conditions": [
      "white_creamy_blister_pustules_underside",
      "staghead_malformed_floral_axis"
    ],
    "conclusion": "mustard_white_rust",
    "disease_name": {
      "en": "White Rust (Staghead Disease)",
      "hi": "सरसों का सफेद रतुआ / छाछिया (स्टैगहेड)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray fermented garlic-turmeric extract (5%) or sour buttermilk (50ml/L); cut and destroy malformed stagheads.",
        "hi": "लहसुन-हल्दी का काढ़ा या खट्टी छाछ (50 मिली/लीटर) छिड़कें; विकृत फूलों के गुच्छों (स्टैगहेड) को काटकर जला दें।"
      },
      "chemical": {
        "en": "Spray Metalaxyl 8% + Mancozeb 64% WP (Ridomil Gold) @ 2.5 g/L or Mancozeb 75% WP @ 2.5 g/L at early infection.",
        "hi": "शुरुआती लक्षण दिखते ही रिडोमिल गोल्ड 2.5 ग्राम/लीटर या मैंकोजेब 2.5 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Sow resistant cultivars like Pusa Mustard 25, RH-0749; timely sowing before 20th October avoids disease peak.",
      "hi": "प्रतिरोधी किस्में (पूसा 25, RH-0749) लगाएं; 20 अक्टूबर से पहले अगेती बुवाई करने से रोग का प्रकोप कम होता है।"
    },
    "reference": "ICAR-Directorate of Rapeseed-Mustard Research (DRMR) Bharatpur"
  },
  {
    "id": "RULE_MUS_02",
    "crop": "mustard",
    "conditions": [
      "brown_black_circular_target_spots_siliquae",
      "stem_streaks_pod_shattering"
    ],
    "conclusion": "mustard_alternaria_blight",
    "disease_name": {
      "en": "Alternaria Leaf & Pod Blight",
      "hi": "सरसों का अल्टरनेरिया पत्ती व फली झुलसा"
    },
    "cf": 0.88,
    "treatment": {
      "organic": {
        "en": "Foliar spray of 5% NSKE mixed with copper sulfate extract; rogue out blighted plants.",
        "hi": "5% नीम बीज अर्क (NSKE) का छिड़काव करें; संक्रमित पौधों को खेत से बाहर निकालें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2.5 g/L or Iprodione 50% WP @ 2 g/L at 45 and 60 days after sowing.",
        "hi": "बुवाई के 45 और 60 दिन बाद मैंकोजेब 75% WP 2.5 ग्राम/लीटर का पर्णीय छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Seed treatment with Apron 35 SD @ 6 g/kg seed; destroy crop residue post-harvest.",
      "hi": "बीज का शोधन करें; कटाई के बाद खेत में बची सरसों की पुरानी सूखी डंडियों को जलाकर नष्ट करें।"
    },
    "reference": "ICAR-Directorate of Rapeseed-Mustard Research (DRMR) Bharatpur"
  },
  {
    "id": "RULE_MUS_03",
    "crop": "mustard",
    "conditions": [
      "dense_colonies_greenish_aphids_inflorescence",
      "honeydew_sooty_coating_pods",
      "plant_wilting_drying"
    ],
    "conclusion": "mustard_aphids",
    "disease_name": {
      "en": "Mustard Aphid (Lipaphis erysimi)",
      "hi": "सरसों का चेपा / माहू कीट"
    },
    "cf": 0.92,
    "treatment": {
      "organic": {
        "en": "Install 12 yellow sticky traps per acre; spray 5% NSKE or Neem oil (3000 ppm) @ 5 ml/L; protect ladybird beetle predators.",
        "hi": "12 पीले चिपचिपे ट्रैप प्रति एकड़ लगाएं; 5% नीम अर्क या नीम तेल (5 मिली/लीटर) छिड़कें; मित्र कीट (लेडीबर्ड) का संरक्षण करें।"
      },
      "chemical": {
        "en": "Spray Dimethoate 30% EC @ 1.7 ml/L or Thiamethoxam 25% WG @ 0.4 g/L when ETL crosses 1.5 cm aphid colony on central shoot.",
        "hi": "जब तने पर माहू की 1.5 सेमी लंबी कालोनी दिखे तो रोगोर (डाइमेथोएट) 1.7 मिली/लीटर या थायमेथोक्सम 0.4 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Timely early sowing (first fortnight of October) enables crop to escape peak aphid infestation in January.",
      "hi": "अक्टूबर के पहले पखवाड़े में समय पर बुवाई करें ताकि जनवरी में माहू के peak प्रकोप से फसल बच सके।"
    },
    "reference": "ICAR-Directorate of Rapeseed-Mustard Research (DRMR) Bharatpur"
  },
  {
    "id": "RULE_SUG_01",
    "crop": "sugarcane",
    "conditions": [
      "sugarcane_leaf_midrib_red_lesions",
      "sugarcane_internal_stalk_reddening_white_patches",
      "sugarcane_alcoholic_sour_smell"
    ],
    "conclusion": "sugarcane_red_rot",
    "disease_name": {
      "en": "Red Rot Disease",
      "hi": "लाल सड़न रोग"
    },
    "cf": 0.94,
    "reference": "ICAR-SBI Coimbatore & IISR Lucknow Cane Pathology Advisory",
    "treatment": {
      "organic": {
        "en": "Dip seed setts in Trichoderma viride (10g/L); apply neem cake in furrow (250 kg/ha). Rogue out and burn affected clumps.",
        "hi": "बीज टुकड़ों (सेट्स) को ट्राइकोडर्मा विरिडी (10 ग्राम/ली) के घोल में डुबोएं; खेत में 250 किग्रा/हेक्टेयर नीम की खली डालें। ग्रसित पौधों को उखाड़कर नष्ट करें।"
      },
      "chemical": {
        "en": "Dip setts in Carbendazim 50% WP (1g/L) for 15 minutes before planting; drench affected clumps with Thiophanate-methyl 70% WP @ 1.5g/L.",
        "hi": "बुवाई पूर्व सेट्स को कार्बेन्डाजिम 50% WP (1 ग्राम/लीटर) के घोल में 15 मिनट डुबोएं; ग्रसित थानों पर थायोफैनेट-मिथाइल 70% WP (1.5 ग्राम/ली) का ड्रेन्चिंग करें।"
      }
    },
    "prevention": {
      "en": "Sow certified resistant varieties like Co-0238, Co-86032, or CoJ-64; practice hot water sett treatment at 52°C for 30 minutes; do not take ratoon from diseased crop.",
      "hi": "प्रमाणित रोगरोधी किस्में जैसे Co-0238, Co-86032 या CoJ-64 लगाएं; 52°C पर 30 मिनट तक गर्म जल से सेट्स उपचार करें; रोगी फसल से पेड़ी (रेटून) न लें।"
    }
  },
  {
    "id": "RULE_SUG_02",
    "crop": "sugarcane",
    "conditions": [
      "sugarcane_whip_like_black_sooty_structure",
      "sugarcane_narrow_stunted_leaves"
    ],
    "conclusion": "sugarcane_smut",
    "disease_name": {
      "en": "Sugarcane Smut (Whip Smut)",
      "hi": "कंडुआ / चाबुक रोग"
    },
    "cf": 0.92,
    "reference": "ICAR-IISR Lucknow Technical Bulletin",
    "treatment": {
      "organic": {
        "en": "Enclose whip structure in polythene bag before cutting to prevent spore dispersal; apply Trichoderma harzianum (2.5 kg/acre) with FYM.",
        "hi": "काटने से पहले चाबुकनुमा काले डंडे को पॉलीथिन बैग से ढकें ताकि बीजाणु न फैलें; गोबर की खाद के साथ ट्राइकोडर्मा (2.5 किग्रा/एकड़) डालें।"
      },
      "chemical": {
        "en": "Treat seed setts with Triadimefon 25% WP (1g/L) or Carbendazim (1g/L); spray Hexaconazole 5% SC @ 2ml/L.",
        "hi": "सेट्स को ट्रायडिमेफोन 25% WP (1 ग्राम/ली) या कार्बेन्डाजिम से उपचारित करें; हेक्साकोनाज़ोल 5% SC (2 मिली/लीटर) का पर्णीय छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Rogue out smutted stools completely upon first appearance; avoid ratooning in infected plots; use disease-free seed nurseries.",
      "hi": "कंडुआ दिखे पौधे को जड़ सहित निकालकर जला दें; प्रभावित खेत में पेड़ी न रखें; रोगमुक्त प्राथमिक नर्सरी से ही बीज लें।"
    }
  },
  {
    "id": "RULE_SUG_03",
    "crop": "sugarcane",
    "conditions": [
      "sugarcane_stalk_hollow_pith_drying",
      "sugarcane_foliage_yellowing_crown_wilting"
    ],
    "conclusion": "sugarcane_wilt",
    "disease_name": {
      "en": "Sugarcane Wilt",
      "hi": "उकठा / विल्ट रोग"
    },
    "cf": 0.88,
    "reference": "PAU Ludhiana & TNAU Cane Protection Guide",
    "treatment": {
      "organic": {
        "en": "Soil application of Pseudomonas fluorescens (2.5 kg/ha) with well-rotted compost; ensure field drainage.",
        "hi": "सड़ी गोबर की खाद के साथ स्यूडोमोनास फ्लोरीसेन्स (2.5 किग्रा/हेक्टेयर) का मृदा उपचार करें; खेत से जल निकासी दुरुस्त रखें।"
      },
      "chemical": {
        "en": "Drench root zone of affected plants with Carbendazim 50% WP @ 2g/L or Thiophanate-methyl @ 1.5g/L.",
        "hi": "कार्बेन्डाजिम 50% WP (2 ग्राम/लीटर) या थायोफैनेट-मिथाइल (1.5 ग्राम/ली) से पौधों की जड़ों में ड्रेन्चिंग करें।"
      }
    },
    "prevention": {
      "en": "Avoid waterlogging; maintain balanced nutrition; rotate cane with rice or green manure sunn hemp.",
      "hi": "खेत में जलभराव न होने दें; संतुलित खाद डालें; गन्ने के बाद धान या सनई की हरी खाद की फसल चक्र अपनाएं।"
    }
  },
  {
    "id": "RULE_GND_01",
    "crop": "groundnut",
    "conditions": [
      "groundnut_circular_dark_brown_spots_yellow_halo",
      "groundnut_premature_leaf_shedding"
    ],
    "conclusion": "groundnut_tikka_leaf_spot",
    "disease_name": {
      "en": "Tikka Leaf Spot (Cercospora)",
      "hi": "टिक्का पर्ण चित्ती रोग"
    },
    "cf": 0.93,
    "reference": "ICAR-Directorate of Groundnut Research (DGR) Junagadh Guidelines",
    "treatment": {
      "organic": {
        "en": "Spray 5% Neem Seed Kernel Extract (NSKE) or Pseudomonas fluorescens (5g/L) upon first spot appearance.",
        "hi": "पत्तियों पर पहले धब्बे दिखते ही 5% नीम गिरी काढ़ा (NSKE) या स्यूडोमोनास (5 ग्राम/ली) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2g/L or Tebuconazole 25.9% EC @ 1ml/L or Carbendazim 50% WP @ 1g/L.",
        "hi": "मैंकोजेब 75% WP (2 ग्राम/ली) या टेबुकोनाज़ोल 25.9% EC (1 मिली/ली) या कार्बेन्डाजिम (1 ग्राम/ली) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Intercrop with pearl millet or pigeon pea (3:1); remove crop residue; rotate with cereals.",
      "hi": "बाजरा या अरहर के साथ अंतर्वर्ती खेती (3:1) करें; फसल अवशेष नष्ट करें; दलहन-अनाज फसल चक्र अपनाएं।"
    }
  },
  {
    "id": "RULE_GND_02",
    "crop": "groundnut",
    "conditions": [
      "groundnut_collar_region_rotting_black_spores",
      "groundnut_seedling_wilting_collapse"
    ],
    "conclusion": "groundnut_collar_rot",
    "disease_name": {
      "en": "Collar Rot / Crown Rot",
      "hi": "कॉलर रॉट / तना गलन"
    },
    "cf": 0.9,
    "reference": "ICAR-DGR Junagadh & ANGRAU Groundnut Pathology Advisory",
    "treatment": {
      "organic": {
        "en": "Seed biopriming with Trichoderma viride @ 10g/kg seed; apply neem cake in soil.",
        "hi": "ट्राइकोडर्मा विरिडी (10 ग्राम/किग्रा बीज) से बीजोपचार करें; खेत में नीम की खली मिलाएं।"
      },
      "chemical": {
        "en": "Seed treatment with Thiram 37.5% + Carboxin 37.5% DS @ 2.5g/kg seed or Carbendazim @ 2g/kg.",
        "hi": "थिरम + कार्बोक्सिन (2.5 ग्राम/किग्रा बीज) या कार्बेन्डाजिम (2 ग्राम/किग्रा) से बीज शोधन करें।"
      }
    },
    "prevention": {
      "en": "Avoid deep sowing (sow at 5 cm depth); avoid seed mechanical damage; ensure good drainage.",
      "hi": "बीज को अधिक गहरा न बोएं (5 सेमी गहराई); बीज को छिलने से बचाएं; खेत में जल निकास उत्तम रखें।"
    }
  },
  {
    "id": "RULE_GND_03",
    "crop": "groundnut",
    "conditions": [
      "groundnut_orange_brown_pustules_lower_leaf_surface",
      "groundnut_leaves_curl_necrosis_dry"
    ],
    "conclusion": "groundnut_rust",
    "disease_name": {
      "en": "Groundnut Rust",
      "hi": "मूंगफली का गेरुई / रस्ट"
    },
    "cf": 0.89,
    "reference": "ICAR-DGR Junagadh Pulse & Oilseed Protection Bulletin",
    "treatment": {
      "organic": {
        "en": "Foliar spray of fermented buttermilk (50ml/L) or aqueous garlic-chili extract; dust sulphur powder.",
        "hi": "खट्टी छाछ (50 मिली/लीटर) या लहसुन-मिर्च अर्क का छिड़काव करें; गंधक चूर्ण का बुरकाव करें।"
      },
      "chemical": {
        "en": "Spray Chlorothalonil 75% WP @ 2g/L or Hexaconazole 5% EC @ 1.5ml/L at initiation of pustules.",
        "hi": "क्लोरोथैलोनिल 75% WP (2 ग्राम/लीटर) या हेक्साकोनाज़ोल 5% EC (1.5 मिली/लीटर) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Sow rust-tolerant cultivars like Kadiri-6, TAG-24, or GPBD-4; avoid late sowing in Kharif.",
      "hi": "सहनशील किस्में जैसे कादिरी-6, TAG-24 या GPBD-4 लगाएं; खरीफ में देरी से बुवाई करने से बचें।"
    }
  },
  {
    "id": "RULE_CHK_01",
    "crop": "chickpea",
    "conditions": [
      "chickpea_drooping_petioles_leaves_flaccid",
      "chickpea_internal_vascular_browning_xylem",
      "chickpea_premature_field_patch_death"
    ],
    "conclusion": "chickpea_fusarium_wilt",
    "disease_name": {
      "en": "Fusarium Wilt",
      "hi": "चना उकठा रोग"
    },
    "cf": 0.95,
    "reference": "ICAR-Indian Institute of Pulses Research (IIPR) Kanpur Guidelines",
    "treatment": {
      "organic": {
        "en": "Seed biopriming with Trichoderma asperellum (10g/kg); furrow application of Trichoderma enriched FYM (5 kg/ha).",
        "hi": "ट्राइकोडर्मा एस्परेलियम (10 ग्राम/किग्रा बीज) से बीजोपचार करें; कतारों में ट्राइकोडर्मा युक्त गोबर खाद डालें।"
      },
      "chemical": {
        "en": "Seed treatment with Carbendazim 50% WP + Thiram 75% WP (1:1) @ 2g/kg seed; drench furrow with Carbendazim @ 1g/L.",
        "hi": "कार्बेन्डाजिम + थिरम (1:1 अनुपात, 2 ग्राम/किग्रा बीज) से बीज शोधन करें; क्यारियों में कार्बेन्डाजिम (1 ग्राम/ली) डालें।"
      }
    },
    "prevention": {
      "en": "Deep summer ploughing; plant wilt-resistant varieties like JG-315, JG-11, or JAKI-9218; 3-year crop rotation with sorghum or wheat.",
      "hi": "गर्मी की गहरी जुताई करें; उकठा रोधी किस्में JG-315, JG-11 या जाकी-9218 बोएं; ज्वार या गेहूं के साथ 3 वर्षीय फसल चक्र अपनाएं।"
    }
  },
  {
    "id": "RULE_CHK_02",
    "crop": "chickpea",
    "conditions": [
      "chickpea_circular_lesions_concentric_black_dots_pycnidia",
      "chickpea_stem_girdling_breakage"
    ],
    "conclusion": "chickpea_ascochyta_blight",
    "disease_name": {
      "en": "Ascochyta Blight",
      "hi": "एस्कोकाइटा झुलसा"
    },
    "cf": 0.91,
    "reference": "ICAR-IIPR Kanpur Pulse Pathology Advisory",
    "treatment": {
      "organic": {
        "en": "Foliar spray of cow urine (10%) mixed with Pseudomonas fluorescens (5g/L).",
        "hi": "10% गोमूत्र अर्क और स्यूडोमोनास फ्लोरीसेन्स (5 ग्राम/ली) का पर्णीय छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Chlorothalonil 75% WP @ 2g/L or Azoxystrobin 23% SC @ 1ml/L at first disease detection.",
        "hi": "रोग दिखते ही क्लोरोथैलोनिल 75% WP (2 ग्राम/लीटर) या एज़ोक्सीस्ट्रोबिन 23% SC (1 मिली/लीटर) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Use certified disease-free seed; destroy crop debris; avoid high planting density.",
      "hi": "प्रमाणित रोगमुक्त बीज प्रयोग करें; पुरानी फसल के ठूंठ नष्ट करें; पौधों की अत्यधिक घनी बुवाई न करें।"
    }
  },
  {
    "id": "RULE_CHK_03",
    "crop": "chickpea",
    "conditions": [
      "chickpea_greyish_fungal_growth_on_flowers",
      "chickpea_flower_drop_no_pod_formation"
    ],
    "conclusion": "chickpea_grey_mould",
    "disease_name": {
      "en": "Botrytis Grey Mould",
      "hi": "धूसर फफूंद (ग्रे मोल्ड)"
    },
    "cf": 0.89,
    "reference": "ICAR-IIPR Kanpur Field Handbook",
    "treatment": {
      "organic": {
        "en": "Spray Trichoderma harzianum formulation (10g/L) during flowering stage.",
        "hi": "फूल आने की अवस्था में ट्राइकोडर्मा हरजिएनम (10 ग्राम/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Carbendazim 12% + Mancozeb 63% WP (SAAF) @ 2g/L or Iprodione 50% WP @ 2g/L.",
        "hi": "कार्बेन्डाजिम + मैंकोजेब (साफ, 2 ग्राम/लीटर) या इप्रोडिओन 50% WP (2 ग्राम/लीटर) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Adopt wider row spacing (45 cm) for canopy aeration; avoid irrigation during peak flowering.",
      "hi": "हवा के संचार हेतु कतार से कतार 45 सेमी दूरी रखें; फूल खिलने के समय खेत में पानी लगाने से बचें।"
    }
  },
  {
    "id": "RULE_PGP_01",
    "crop": "pigeonpea",
    "conditions": [
      "pigeonpea_foliar_yellowing_interveinal_clearing",
      "pigeonpea_dark_purple_stem_band_vertical_strip",
      "pigeonpea_black_vascular_discoloration"
    ],
    "conclusion": "pigeonpea_fusarium_wilt",
    "disease_name": {
      "en": "Pigeonpea Fusarium Wilt",
      "hi": "अरहर उकठा रोग"
    },
    "cf": 0.94,
    "reference": "ICAR-IIPR Kanpur & ICRISAT Pulse Pathology Guide",
    "treatment": {
      "organic": {
        "en": "Seed treatment with Trichoderma viride (10g/kg seed); apply neem cake in rhizosphere.",
        "hi": "ट्राइकोडर्मा विरिडी (10 ग्राम/किग्रा बीज) से बीजोपचार; पौधों के पास नीम की खली डालें।"
      },
      "chemical": {
        "en": "Seed dressing with Carboxin + Thiram @ 2.5g/kg seed; spot drenching with Carbendazim @ 1.5g/L.",
        "hi": "कार्बोक्सिन + थिरम (2.5 ग्राम/किग्रा बीज) से बीज उपचार; रोगी थानों में कार्बेन्डाजिम (1.5 ग्राम/ली) डालें।"
      }
    },
    "prevention": {
      "en": "Grow wilt-resistant varieties (Asha / ICPL-87119, Maruti / ICP-8863); intercrop with sorghum or maize.",
      "hi": "उकठा रोधी किस्में जैसे आशा (ICPL-87119) या मारुति लगाएं; ज्वार या मक्का के साथ अंतर्वर्ती खेती करें।"
    }
  },
  {
    "id": "RULE_PGP_02",
    "crop": "pigeonpea",
    "conditions": [
      "pigeonpea_bushy_stunted_pale_green_appearance",
      "pigeonpea_severe_mosaic_mottling_leaves",
      "pigeonpea_complete_cessation_of_flowering_sterile"
    ],
    "conclusion": "pigeonpea_sterility_mosaic",
    "disease_name": {
      "en": "Sterility Mosaic Disease (SMD)",
      "hi": "बांझपन मोज़ेक रोग"
    },
    "cf": 0.95,
    "reference": "ICRISAT & ICAR-IIPR SMD Technical Advisory",
    "treatment": {
      "organic": {
        "en": "Spray neem oil 1500 ppm @ 3ml/L to deter eriophyid mite vectors.",
        "hi": "वाहक माइट (मकड़ी) की रोकथाम हेतु नीम का तेल 1500 ppm (3 मिली/लीटर) छिड़कें।"
      },
      "chemical": {
        "en": "Spray Fenazaquin 10% EC @ 1.5ml/L or Propargite 57% EC @ 2ml/L to eliminate vector mites.",
        "hi": "माइट्स की रोकथाम हेतु फेनाज़ाक्विन 10% EC (1.5 मिली/ली) या प्रोपारगाइट 57% EC (2 मिली/ली) छिड़कें।"
      }
    },
    "prevention": {
      "en": "Sow SMD-resistant varieties (BSMR-736, ICPL-87119); rogue out infected plants within first 45 days.",
      "hi": "रोगरोधी किस्में (BSMR-736, ICPL-87119) लगाएं; पहले 45 दिनों में रोगी पौधों को उखाड़कर नष्ट करें।"
    }
  },
  {
    "id": "RULE_PGP_03",
    "crop": "pigeonpea",
    "conditions": [
      "pigeonpea_water_soaked_brown_stem_cankers",
      "pigeonpea_sudden_wilting_dead_leaves_remain_attached"
    ],
    "conclusion": "pigeonpea_phytophthora_blight",
    "disease_name": {
      "en": "Phytophthora Stem Blight",
      "hi": "तना झुलसा रोग"
    },
    "cf": 0.88,
    "reference": "ICAR-IIPR Kanpur Technical Advisory",
    "treatment": {
      "organic": {
        "en": "Seed biopriming and soil drenching with Trichoderma harzianum; ensure field drainage.",
        "hi": "ट्राइकोडर्मा हरजिएनम से बीजोपचार व ड्रेन्चिंग करें; खेत से वर्षा जल तुरंत निकालें।"
      },
      "chemical": {
        "en": "Spray Metalaxyl-M 4% + Mancozeb 64% WP (Ridomil Gold) @ 2.5g/L or Fosetyl-Al @ 2g/L.",
        "hi": "मेटालेक्सिल + मैंकोजेब (रिडोमिल गोल्ड, 2.5 ग्राम/लीटर) या फोसेटाइल-अल (2 ग्राम/लीटर) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Plant on raised ridge-and-furrow systems; ensure rapid water runoff during heavy monsoon showers.",
      "hi": "मेड़ों (रिज व फरो) पर बुवाई करें; भारी मानसूनी बारिश में खेत में पानी जमा न होने दें।"
    }
  },
  {
    "id": "RULE_ONN_01",
    "crop": "onion",
    "conditions": [
      "onion_small_sunken_whitish_spots_turning_purple",
      "onion_concentric_rings_on_leaves_flower_stalks",
      "onion_leaves_girdled_collapse"
    ],
    "conclusion": "onion_purple_blotch",
    "disease_name": {
      "en": "Purple Blotch",
      "hi": "बैंगनी धब्बा रोग"
    },
    "cf": 0.93,
    "reference": "ICAR-Directorate of Onion and Garlic Research (DOGR) Rajgurunagar Advisory",
    "treatment": {
      "organic": {
        "en": "Spray 5% Neem Seed Kernel Extract (NSKE) or Pseudomonas fluorescens (5g/L) with soap-nut sticker.",
        "hi": "5% नीम गिरी काढ़ा (NSKE) या स्यूडोमोनास (5 ग्राम/ली) में रीठा/साबुन घोल मिलाकर छिड़कें।"
      },
      "chemical": {
        "en": "Spray Difenoconazole 25% EC @ 1ml/L or Mancozeb 75% WP @ 2.5g/L or Tebuconazole @ 1ml/L with sticking agent.",
        "hi": "डिफेनोकोनाज़ोल 25% EC (1 मिली/ली) या मैंकोजेब 75% WP (2.5 ग्राम/ली) किसी चिपचिपे पदार्थ के साथ छिड़कें।"
      }
    },
    "prevention": {
      "en": "Crop rotation with non-allium crops (maize, pulses); avoid overhead sprinkler irrigation in late afternoon.",
      "hi": "मक्का या दलहन के साथ फसल चक्र अपनाएं; शाम के समय फव्वारा सिंचाई से बचें ताकि पत्तियां गीली न रहें।"
    }
  },
  {
    "id": "RULE_ONN_02",
    "crop": "onion",
    "conditions": [
      "onion_small_yellow_to_orange_flecks_elongating",
      "onion_black_spore_mat_on_foliage_drying"
    ],
    "conclusion": "onion_stemphylium_blight",
    "disease_name": {
      "en": "Stemphylium Leaf Blight",
      "hi": "स्टेमफीलियम पर्ण झुलसा"
    },
    "cf": 0.9,
    "reference": "ICAR-DOGR Rajgurunagar Technical Bulletin",
    "treatment": {
      "organic": {
        "en": "Spray Trichoderma harzianum (10g/L) or copper oxychloride bio-suspension.",
        "hi": "ट्राइकोडर्मा हरजिएनम (10 ग्राम/लीटर) या कॉपर आधारित जैविक घोल का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1ml/L or Chlorothalonil 75% WP @ 2g/L.",
        "hi": "एज़ोक्सीस्ट्रोबिन + डिफेनोकोनाज़ोल (1 मिली/लीटर) या क्लोरोथैलोनिल 75% WP (2 ग्राम/लीटर) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Maintain 15x10 cm optimum spacing; avoid excessive nitrogen fertilizer; field sanitation.",
      "hi": "उचित दूरी (15x10 सेमी) रखें; अधिक यूरिया के उपयोग से बचें; खेत से पुराने पत्तों को हटा दें।"
    }
  },
  {
    "id": "RULE_ONN_03",
    "crop": "onion",
    "conditions": [
      "onion_yellowing_and_curling_of_leaf_blades_from_tip",
      "onion_roots_turn_pink_to_dark_brown_and_rot",
      "onion_bulb_base_soft_decay"
    ],
    "conclusion": "onion_basal_rot",
    "disease_name": {
      "en": "Basal Rot (Fusarium)",
      "hi": "कंद सड़न / मूल गलन"
    },
    "cf": 0.91,
    "reference": "ICAR-DOGR & NHRDF Onion Protection Advisory",
    "treatment": {
      "organic": {
        "en": "Seedling root dip in Trichoderma viride suspension (10g/L) for 30 mins before transplanting.",
        "hi": "रोपाई से पहले पौध की जड़ों को ट्राइकोडर्मा विरिडी (10 ग्राम/ली) के घोल में 30 मिनट डुबोएं।"
      },
      "chemical": {
        "en": "Seedling dip in Carbendazim 50% WP (1g/L); soil drenching with Copper Oxychloride 50% WP @ 3g/L.",
        "hi": "कार्बेन्डाजिम (1 ग्राम/ली) में पौध जड़ डुबोएं; कॉपर ऑक्सीक्लोराइड 50% WP (3 ग्राम/ली) से ड्रेन्चिंग करें।"
      }
    },
    "prevention": {
      "en": "Avoid physical damage to bulbs during intercultural operations; store in well-ventilated dry rooms.",
      "hi": "निराई-गुड़ाई के समय कंदों को छिलने से बचाएं; प्याज को हवादार व सूखे कमरों में भंडारित करें।"
    }
  },
  {
    "id": "RULE_BRN_01",
    "crop": "brinjal",
    "conditions": [
      "brinjal_extreme_reduction_in_leaf_size_tiny",
      "brinjal_bushy_phylloid_appearance_no_fruit",
      "brinjal_excessive_short_inter-nodes"
    ],
    "conclusion": "brinjal_little_leaf",
    "disease_name": {
      "en": "Little Leaf Disease",
      "hi": "छोटी पत्ती रोग"
    },
    "cf": 0.95,
    "reference": "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru Guidelines",
    "treatment": {
      "organic": {
        "en": "Rogue out and destroy infected plants; spray neem oil (3ml/L) or pongamia oil to repel leafhopper vector.",
        "hi": "रोगी पौधों को तुरंत उखाड़कर जलाएं; वाहक कीट (फुदका) को भगाने हेतु नीम तेल (3 मिली/ली) छिड़कें।"
      },
      "chemical": {
        "en": "Spray Dimethoate 30% EC @ 1.7ml/L or Imidacloprid 17.8% SL @ 0.5ml/L to control leafhopper vector.",
        "hi": "पत्ती फुदका की रोकथाम हेतु डाइमेथोएट 30% EC (1.7 मिली/ली) या इमिडाक्लोप्रिड 17.8% SL (0.5 मिली/ली) छिड़कें।"
      }
    },
    "prevention": {
      "en": "Eradicate solanaceous weeds around nursery; cover nursery with 40-mesh insect net.",
      "hi": "नर्सरी के आसपास मकोय व धतूरा जैसे खरपतवार नष्ट करें; नर्सरी को 40-मेश कीट जाली से ढकें।"
    }
  },
  {
    "id": "RULE_BRN_02",
    "crop": "brinjal",
    "conditions": [
      "brinjal_circular_brown_spots_pycnidia_on_leaves",
      "brinjal_soft_sunken_pale_rot_patches_on_fruit"
    ],
    "conclusion": "brinjal_phomopsis_blight",
    "disease_name": {
      "en": "Phomopsis Blight & Fruit Rot",
      "hi": "फोमोप्सिस झुलसा व फल सड़न"
    },
    "cf": 0.9,
    "reference": "ICAR-IIHR Bengaluru & TNAU Vegetable Protection Guide",
    "treatment": {
      "organic": {
        "en": "Seed treatment with Trichoderma viride (4g/kg seed); foliar spray of Pseudomonas fluorescens (5g/L).",
        "hi": "ट्राइकोडर्मा (4 ग्राम/किग्रा) से बीजोपचार; स्यूडोमोनास फ्लोरीसेन्स (5 ग्राम/ली) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2g/L or Carbendazim 50% WP @ 1g/L at flowering and fruit formation.",
        "hi": "फूल और फल बनते समय मैंकोजेब 75% WP (2 ग्राम/ली) या कार्बेन्डाजिम (1 ग्राम/ली) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Collect and deeply bury infected fruits; sow disease-tolerant varieties like Pant Samrat.",
      "hi": "सड़े फलों को इकट्ठा कर जमीन में गहरा गाड़ें; सहनशील किस्में जैसे पंत सम्राट लगाएं।"
    }
  },
  {
    "id": "RULE_BRN_03",
    "crop": "brinjal",
    "conditions": [
      "brinjal_sudden_wilting_without_yellowing_green_wilt",
      "brinjal_white_bacterial_slime_stream_in_water_vessel"
    ],
    "conclusion": "brinjal_bacterial_wilt",
    "disease_name": {
      "en": "Bacterial Wilt",
      "hi": "जीवाणु उकठा रोग"
    },
    "cf": 0.94,
    "reference": "ICAR-IIHR Bengaluru Technical Advisory",
    "treatment": {
      "organic": {
        "en": "Soil application of bleaching powder @ 15 kg/ha before planting; drench with Pseudomonas fluorescens (10g/L).",
        "hi": "रोपाई से पूर्व 15 किग्रा/हेक्टेयर ब्लीचिंग पाउडर मिलाएं; स्यूडोमोनास (10 ग्राम/ली) से जड़ ड्रेन्चिंग करें।"
      },
      "chemical": {
        "en": "Drench root zone with Streptocycline (200 ppm, 0.2g/L) mixed with Copper Oxychloride 50% WP @ 2g/L.",
        "hi": "स्ट्रेप्टोसाइक्लिन (0.2 ग्राम/ली) + कॉपर ऑक्सीक्लोराइड 50% WP (2 ग्राम/ली) के घोल से जड़ों में ड्रेन्चिंग करें।"
      }
    },
    "prevention": {
      "en": "Plant resistant cultivars (Swarna Pratibha, Arka Nidhi, Pant Rituraj); rotate with maize or marigold.",
      "hi": "रोगरोधी किस्में (स्वर्ण प्रतिभा, अर्का निधि, पंत ऋतुराज) लगाएं; मक्का या गेंदे के साथ फसल चक्र अपनाएं।"
    }
  },
  {
    "id": "RULE_OKR_01",
    "crop": "okra",
    "conditions": [
      "okra_network_of_thickened_yellow_veins",
      "okra_leaves_completely_chlorotic_yellow",
      "okra_fruits_stunted_yellow_white_fibrous"
    ],
    "conclusion": "okra_yellow_vein_mosaic",
    "disease_name": {
      "en": "Yellow Vein Mosaic Virus (YVMV)",
      "hi": "पीली शिरा मोज़ेक वायरस"
    },
    "cf": 0.96,
    "reference": "ICAR-Indian Institute of Vegetable Research (IIVR) Varanasi Guidelines",
    "treatment": {
      "organic": {
        "en": "Install yellow sticky traps (10-15 per acre); spray 5% neem seed kernel extract (NSKE) or neem oil 1500 ppm @ 3ml/L.",
        "hi": "खेत में पीले चिपचिपे ट्रैप (10-15 प्रति एकड़) लगाएं; 5% नीम गिरी अर्क या नीम का तेल (3 मिली/ली) छिड़कें।"
      },
      "chemical": {
        "en": "Spray Acetamiprid 20% SP @ 0.3g/L or Diafenthiuron 50% WP @ 1g/L to control whitefly vector.",
        "hi": "सफेद मक्खी की रोकथाम हेतु एसीटामिप्रिड 20% SP (0.3 ग्राम/ली) या डायाफेन्थियुरॉन 50% WP (1 ग्राम/ली) छिड़कें।"
      }
    },
    "prevention": {
      "en": "Sow YVMV-resistant varieties like Arka Anamika, Parbhani Kranti, or Kashi Kranti; remove weed hosts.",
      "hi": "रोगरोधी किस्में जैसे अर्का अनामिका, परभणी क्रांति या काशी क्रांति बोएं; जंगली खरपतवार नष्ट करें।"
    }
  },
  {
    "id": "RULE_OKR_02",
    "crop": "okra",
    "conditions": [
      "okra_white_powdery_patches_on_leaf_surface",
      "okra_leaves_turn_yellow_brown_and_dry"
    ],
    "conclusion": "okra_powdery_mildew",
    "disease_name": {
      "en": "Powdery Mildew",
      "hi": "चूर्णिल आसिता रोग"
    },
    "cf": 0.9,
    "reference": "ICAR-IIVR Varanasi & TNAU Agritech Portal",
    "treatment": {
      "organic": {
        "en": "Spray wettable sulfur 80% WP @ 2.5g/L or fermented sour buttermilk (50ml/L).",
        "hi": "घुलनशील गंधक 80% WP (2.5 ग्राम/लीटर) या खट्टी छाछ (50 मिली/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Hexaconazole 5% EC @ 1.5ml/L or Difenoconazole 25% EC @ 1ml/L.",
        "hi": "हेक्साकोनाज़ोल 5% EC (1.5 मिली/लीटर) या डिफेनोकोनाज़ोल 25% EC (1 मिली/लीटर) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Avoid dense sowing; allow good sunlight and ventilation; destroy old harvested residues.",
      "hi": "उचित दूरी पर बोएं; खेत में धूप और हवा का संचार बना रहने दें; पुरानी फसल के ठूंठ जला दें।"
    }
  },
  {
    "id": "RULE_OKR_03",
    "crop": "okra",
    "conditions": [
      "okra_terminal_shoots_wilted_and_drooping",
      "okra_circular_holes_bored_in_fruits_with_frass",
      "okra_fruits_deformed_unmarketable"
    ],
    "conclusion": "okra_fruit_borer",
    "disease_name": {
      "en": "Shoot & Fruit Borer",
      "hi": "तना व फल छेदक कीट"
    },
    "cf": 0.93,
    "reference": "ICAR-NCIPM New Delhi Integrated Pest Management Advisory",
    "treatment": {
      "organic": {
        "en": "Install pheromone traps (5/acre); release Trichogramma chilonis egg parasitoids (50,000/ha); spray Bacillus thuringiensis (Bt) @ 2g/L.",
        "hi": "फेरोमोन ट्रैप (5 प्रति एकड़) लगाएं; ट्राइकोग्रामा परजीवी छोड़ें; बीटी (Bt, 2 ग्राम/ली) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Emamectin Benzoate 5% SG @ 0.4g/L or Chlorantraniliprole 18.5% SC (Coragen) @ 0.3ml/L.",
        "hi": "इमामेक्टिन बेंजोएट 5% SG (0.4 ग्राम/ली) या कोराजन (0.3 मिली/ली) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Clip and destroy attacked shoot tips with larvae; follow safe Pre-Harvest Interval (PHI) of 3 days.",
      "hi": "ग्रसित शाखाओं के अग्रभाग को तोड़कर नष्ट करें; छिड़काव के बाद 3 दिन तक फल की तुड़ाई न करें।"
    }
  },
  {
    "id": "RULE_BAN_01",
    "crop": "banana",
    "conditions": [
      "banana_lower_leaves_yellowing_from_margins_buckling",
      "banana_skirt_of_dead_leaves_around_pseudostem",
      "banana_vascular_bundles_reddish_brown_discoloration"
    ],
    "conclusion": "banana_panama_wilt",
    "disease_name": {
      "en": "Panama Wilt (Fusarium)",
      "hi": "पनामा विल्ट / उकठा"
    },
    "cf": 0.95,
    "reference": "ICAR-National Research Centre for Banana (NRCB) Tiruchirappalli Technical Bulletin",
    "treatment": {
      "organic": {
        "en": "Dip suckers in Pseudomonas fluorescens (10g/L) and Trichoderma viride; apply neem cake (1 kg/plant).",
        "hi": "रोपाई से पूर्व पुत्ती (सकर्स) को स्यूडोमोनास व ट्राइकोडर्मा के घोल में डुबोएं; प्रति पौधा 1 किग्रा नीम खली डालें।"
      },
      "chemical": {
        "en": "Corm injection of Carbendazim 2% solution (2-3 ml) into pseudostem; drench root zone with Carbendazim 50% WP @ 2g/L.",
        "hi": "तने के प्रकंद में कार्बेन्डाजिम 2% घोल का इंजेक्शन लगाएं; जड़ों में कार्बेन्डाजिम (2 ग्राम/लीटर) से ड्रेन्चिंग करें।"
      }
    },
    "prevention": {
      "en": "Use certified disease-free tissue culture plantlets; plant resistant Cavendish cultivars; field quarantine.",
      "hi": "प्रमाणित रोगमुक्त टिशू कल्चर पौधे ही लगाएं; प्रतिरोधी कैवेंडिश समूह की किस्में चुनें; खेत में स्वच्छता रखें।"
    }
  },
  {
    "id": "RULE_BAN_02",
    "crop": "banana",
    "conditions": [
      "banana_spindle_shaped_spots_with_grey_centers_dark_margins",
      "banana_extensive_premature_foliar_drying_scorched"
    ],
    "conclusion": "banana_sigatoka_leaf_spot",
    "disease_name": {
      "en": "Sigatoka Leaf Spot",
      "hi": "सिगाटोका पत्ती धब्बा"
    },
    "cf": 0.92,
    "reference": "ICAR-NRCB Tiruchirappalli Foliar Advisory",
    "treatment": {
      "organic": {
        "en": "Spray agricultural mineral oil (10ml/L) emulsified in water; spray Bacillus subtilis formulation.",
        "hi": "पानी में मिनरल स्प्रे ऑयल (10 मिली/लीटर) मिलाकर छिड़कें; बैसिलस सबटिलिस का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Propiconazole 25% EC @ 1ml/L or Azoxystrobin 23% SC @ 1ml/L combined with 1% mineral oil.",
        "hi": "प्रोपिकोनाज़ोल 25% EC (1 मिली/लीटर) या एज़ोक्सीस्ट्रोबिन (1 मिली/लीटर) में 1% स्प्रे तेल मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Ensure rapid drainage; de-trash (remove and burn severely infected dry leaves); maintain 1.8x1.8m spacing.",
      "hi": "जल निकास दुरुस्त रखें; अत्यधिक सूखी रोगी पत्तियों को काटकर जलाएं; पौधों के बीच 1.8x1.8 मीटर दूरी रखें।"
    }
  },
  {
    "id": "RULE_BAN_03",
    "crop": "banana",
    "conditions": [
      "banana_leaves_short_narrow_bunched_at_apex_rosette",
      "banana_dark_green_dots_and_dashes_along_leaf_veins",
      "banana_plant_severely_stunted_no_bunch"
    ],
    "conclusion": "banana_bunchy_top",
    "disease_name": {
      "en": "Banana Bunchy Top Virus (BBTV)",
      "hi": "बंची टॉप (गुच्छा शीर्ष)"
    },
    "cf": 0.97,
    "reference": "ICAR-NRCB Tiruchirappalli & DPPQS Quarantine Guidelines",
    "treatment": {
      "organic": {
        "en": "Inject kerosene (4ml) or 2,4-D into infected pseudostem to destroy stool in-situ; spray neem oil to deter aphids.",
        "hi": "संक्रमित तने में 4 मिली मिट्टी का तेल या 2,4-D का इंजेक्शन देकर पौधे को नष्ट करें; माहू भगाने हेतु नीम तेल छिड़कें।"
      },
      "chemical": {
        "en": "Spray Dimethoate 30% EC @ 1.7ml/L or Imidacloprid 17.8% SL @ 0.5ml/L to eliminate aphid vector (Pentalonia).",
        "hi": "माहू कीट की रोकथाम हेतु डाइमेथोएट 30% EC (1.7 मिली/ली) या इमिडाक्लोप्रिड (0.5 मिली/ली) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Use only virus-indexed tissue-cultured plants; destroy infected mats immediately; never take suckers from diseased fields.",
      "hi": "केवल प्रमाणित वायरस-मुक्त टिशू कल्चर पौधे लगाएं; रोगी गुच्छे तुरंत नष्ट करें; संक्रमित खेत से सकर्स न लें।"
    }
  },
  {
    "id": "RULE_WHT_10",
    "crop": "wheat",
    "conditions": [
      "dark_brown_black_elongated_pustules_stem",
      "pustules_rupture_epidermis_ragged_edges",
      "warm_temperature_with_high_humidity"
    ],
    "conclusion": "wheat_stem_black_rust",
    "disease_name": {
      "en": "Black Rust / Stem Rust",
      "hi": "काला रतुआ / तना रतुआ"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray 5% Cow urine solution or Sour buttermilk (Chhachh) mixed with copper vessel extract (50ml/L); apply Trichoderma harzianum (10g/L).",
        "hi": "5% गोमूत्र घोल या तांबे के बर्तन में रखी खट्टी छाछ (50 मिली/लीटर) का छिड़काव करें; ट्राइकोडर्मा हरजिएनम (10 ग्राम/लीटर) का प्रयोग करें।"
      },
      "chemical": {
        "en": "Spray Propiconazole 25% EC (Tilt) @ 1 ml/L or Tebuconazole 25.9% EC @ 1 ml/L immediately upon first detection.",
        "hi": "रोग का पहला लक्षण दिखते ही प्रोपिकोनाज़ोल 25% EC (टिल्ट) 1 मिली/लीटर या टेबुकोनाज़ोल 25.9% EC 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Sow stem rust resistant varieties like HD-3086, DBW-187 (Karan Vandana), or GW-322; timely sowing before mid-November.",
      "hi": "तना रतुआ प्रतिरोधी किस्में जैसे HD-3086, DBW-187 (करन वंदना) या GW-322 लगाएं; 15 नवंबर से पहले समय पर बुवाई करें।"
    },
    "reference": "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal"
  },
  {
    "id": "RULE_WHT_11",
    "crop": "wheat",
    "conditions": [
      "bleached_straw_colored_spikelets_earhead",
      "salmon_pink_orange_spores_glumes",
      "prolonged_rain_fog_during_flowering"
    ],
    "conclusion": "wheat_head_blight_scab",
    "disease_name": {
      "en": "Fusarium Head Blight (Scab)",
      "hi": "गेहूं का हेड ब्लाइट / स्कैब"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Spray Pseudomonas fluorescens (10g/L) at early anthesis; avoid overhead sprinkler irrigation during flowering.",
        "hi": "फूल आने की प्रारंभिक अवस्था में स्यूडोमोनास फ्लोरेसेंस (10 ग्राम/लीटर) का छिड़काव करें; फूल आते समय स्प्रिंकलर से बचें।"
      },
      "chemical": {
        "en": "Foliar spray of Tebuconazole 25.9% EC @ 1 ml/L or Metconazole 50 g/L @ 1.5 ml/L during early to mid-flowering stage.",
        "hi": "फूल आने के समय टेबुकोनाज़ोल 25.9% EC 1 मिली/लीटर या मेटकोनाज़ोल 1.5 मिली/लीटर का सुरक्षात्मक छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Crop rotation with non-hosts (avoid maize-wheat rotation where scab is endemic); deep ploughing to bury crop residues.",
      "hi": "गैर-पोषक फसलों के साथ फसल चक्र अपनाएं (मक्का-गेहूं चक्र से बचें); फसल अवशेषों को मिट्टी में दबाने के लिए गहरी जुताई करें।"
    },
    "reference": "ICAR-IIWBR Karnal & PAU Ludhiana"
  },
  {
    "id": "RULE_RIC_10",
    "crop": "rice",
    "conditions": [
      "individual_grains_transform_yellowish_green_velvet_balls",
      "spore_balls_burst_releasing_greenish_black_powder",
      "high_relative_humidity_cloudy_rain_flowering"
    ],
    "conclusion": "rice_false_smut",
    "disease_name": {
      "en": "False Smut (Green Smut)",
      "hi": "धान का कूट कंडुआ (झूठा कंड / हल्दी रोग)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Spray 5% Neem Seed Kernel Extract (NSKE) or Copper Hydroxide (2g/L) at booting stage.",
        "hi": "बालियां निकलने से पहले 5% नीम बीज अर्क (NSKE) या कॉपर हाइड्रॉक्साइड (2 ग्राम/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Propiconazole 25% EC @ 1 ml/L or Trifloxystrobin 25% + Tebuconazole 50% WG @ 0.4 g/L at 50% panicle emergence.",
        "hi": "बालियां 50% निकलने की अवस्था में प्रोपिकोनाज़ोल 25% EC 1 मिली/लीटर या ट्राइफ्लोक्सीस्ट्रोबिन + टेबुकोनाज़ोल 0.4 ग्राम/लीटर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Avoid excessive nitrogen application; treat seeds with Thiram (2g/kg); use certified tolerant seeds like PR-121 or Pusa-44.",
      "hi": "यूरिया (नाइट्रोजन) की अत्यधिक मात्रा से बचें; थीरम (2 ग्राम/किग्रा) से बीजोपचार करें; सहनशील किस्में लगाएं।"
    },
    "reference": "ICAR-National Rice Research Institute (NRRI) Cuttack"
  },
  {
    "id": "RULE_RIC_11",
    "crop": "rice",
    "conditions": [
      "dark_brown_oval_sesame_seed_spots_leaves",
      "spots_have_greyish_white_centers_yellow_halo",
      "soil_nutritional_deficiency_potash"
    ],
    "conclusion": "rice_brown_spot",
    "disease_name": {
      "en": "Brown Spot of Rice",
      "hi": "धान का भूरा धब्बा रोग"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Foliar spray of 10% Cow urine solution or Pseudomonas fluorescens (10g/L); apply balanced potash fertilizer.",
        "hi": "10% गोमूत्र घोल या स्यूडोमोनास फ्लोरेसेंस (10 ग्राम/लीटर) का छिड़काव करें; संतुलित पोटाश खाद दें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L.",
        "hi": "मैनकोज़ेब 75% WP 2.5 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन + डाइफेनोकोनाज़ोल 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Correct soil potassium and zinc deficiency; hot water seed treatment at 52-54°C for 10 minutes; apply green manuring.",
      "hi": "मिट्टी में पोटाश और जिंक की कमी दूर करें; 52-54°C गर्म पानी में 10 मिनट बीजोपचार करें; हरी खाद का प्रयोग करें।"
    },
    "reference": "ICAR-Indian Institute of Rice Research (IIRR) Hyderabad"
  },
  {
    "id": "RULE_SOY_10",
    "crop": "soybean",
    "conditions": [
      "minute_light_green_spots_raised_central_pustule",
      "pustules_develop_without_bacterial_ooze_droplet",
      "warm_rainy_weather_with_frequent_splashes"
    ],
    "conclusion": "soybean_bacterial_pustule",
    "disease_name": {
      "en": "Bacterial Pustule",
      "hi": "सोयाबीन का जीवाणु फुंसी रोग"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Spray copper oxychloride (2g/L) mixed with Streptocycline or fermented sour buttermilk (50ml/L).",
        "hi": "कॉपर ऑक्सीक्लोराइड (2 ग्राम/लीटर) के साथ स्ट्रेप्टोसाइक्लिन या खट्टी छाछ (50 मिली/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Copper Oxychloride 50% WP (2.5 g/L) + Streptocycline (1 g per 10 L water) at disease onset.",
        "hi": "कॉपर ऑक्सीक्लोराइड 50% WP (2.5 ग्राम/लीटर) + स्ट्रेप्टोसाइक्लिन (1 ग्राम प्रति 10 लीटर पानी) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Grow resistant cultivars like JS-93-05, NRC-37, or JS-97-52; avoid overhead irrigation; sanitize tools.",
      "hi": "प्रतिरोधी किस्में जैसे JS-93-05, NRC-37 या JS-97-52 लगाएं; स्प्रिंकलर सिंचाई से बचें।"
    },
    "reference": "ICAR-Indian Institute of Soybean Research (IISR) Indore"
  },
  {
    "id": "RULE_COT_10",
    "crop": "cotton",
    "conditions": [
      "flared_squares_unopened_drying_flower_buds",
      "tender_terminal_shoots_bored_and_drooping",
      "caterpillar_spindle_body_orange_black_warts"
    ],
    "conclusion": "cotton_spotted_bollworm",
    "disease_name": {
      "en": "Spotted Bollworm",
      "hi": "कपास की चित्तीदार सुंडी (चितकबरी इल्ली)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Install 5 pheromone traps/ha; release Trichogramma chilonis @ 1,50,000/ha; spray 5% NSKE (Neem Seed Extract).",
        "hi": "5 फेरोमोन ट्रैप/हेक्टेयर लगाएं; ट्राइकोग्रामा चिलोनीस 1.5 लाख/हेक्टेयर छोड़ें; 5% नीम अर्क का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Chlorantraniliprole 18.5% SC @ 0.3 ml/L or Emamectin Benzoate 5% SG @ 0.4 g/L or Spinosad 45% SC @ 0.3 ml/L.",
        "hi": "क्लोरांट्रानिलीप्रोल 18.5% SC 0.3 मिली/लीटर या एमामेक्टिन बेंजोएट 0.4 ग्राम/लीटर पानी में घोलकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Destroy alternative weed hosts (Abutilon, Malva); remove and bury dropped flared squares weekly; clean picking.",
      "hi": "खेत से खरपतवार हटाएं; गिरी हुई कलियों को इकट्ठा कर नष्ट करें; समय पर कपास की चुनाई करें।"
    },
    "reference": "ICAR-Central Institute for Cotton Research (CICR) Nagpur"
  },
  {
    "id": "RULE_POT_04",
    "crop": "potato",
    "conditions": [
      "potato_sudden_midday_wilting",
      "potato_vascular_brown_ring_tuber",
      "potato_bacterial_ooze_tuber_eyes"
    ],
    "conclusion": "potato_bacterial_wilt",
    "disease_name": {
      "en": "Bacterial Wilt / Brown Rot",
      "hi": "आलू का जीवाणु मुरझान / भूरा विगलन"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Soil application of Pseudomonas fluorescens (5 kg/ha) or Trichoderma viride with FYM; rogue out wilted plants immediately.",
        "hi": "स्यूडोमोनास फ्लोरेसेंस (5 किग्रा/हेक्टेयर) या ट्राइकोडर्मा को गोबर की खाद में मिलाकर डालें; रोगी पौधों को उखाड़कर नष्ट करें।"
      },
      "chemical": {
        "en": "Treat seed tubers with Streptocycline (100 ppm) + Copper Oxychloride (2 g/L) for 15 minutes before planting; avoid waterlogging.",
        "hi": "बुवाई से पहले बीज कंदों को स्ट्रेप्टोसाइक्लिन (100 ppm) + कॉपर ऑक्सीक्लोराइड (2 ग्राम/लीटर) घोल में 15 मिनट डुबोएं।"
      }
    },
    "prevention": {
      "en": "Use certified disease-free seed tubers (Kufri Jyoti); follow 3-year crop rotation with maize or paddy; never rotate with tomato/brinjal.",
      "hi": "प्रमाणित रोगमुक्त बीज कंद लगाएं; मक्का या धान के साथ 3 वर्षीय फसल चक्र अपनाएं; टमाटर या बैंगन के बाद आलू न लगाएं।"
    },
    "reference": "ICAR-Central Potato Research Institute (CPRI) Shimla"
  },
  {
    "id": "RULE_POT_05",
    "crop": "potato",
    "conditions": [
      "potato_corky_rough_raised_scab_tuber",
      "potato_shallow_pitted_depressions",
      "alkaline_dry_soil_conditions"
    ],
    "conclusion": "potato_common_scab",
    "disease_name": {
      "en": "Common Scab of Potato",
      "hi": "आलू का सामान्य खुरंड (स्कैब) रोग"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Green manuring with Sesbania (Dhaincha) to reduce soil pH; apply Trichoderma enriched farmyard manure; maintain constant soil moisture.",
        "hi": "मिट्टी का pH कम करने के लिए ढैंचा की हरी खाद दें; ट्राइकोडर्मा युक्त गोबर की खाद डालें; कंद बनते समय खेत में नमी बनाए रखें।"
      },
      "chemical": {
        "en": "Dip seed tubers in 3% Boric acid solution for 30 minutes before cold storage or before planting.",
        "hi": "कोल्ड स्टोर में रखने से पहले या बुवाई से पूर्व बीज कंदों को 3% बोरिक एसिड घोल में 30 मिनट तक उपचारित करें।"
      }
    },
    "prevention": {
      "en": "Avoid applying unslaked lime or fresh wood ash; ensure frequent light irrigation during tuber initiation (4-6 weeks after planting).",
      "hi": "खेत में चूना या लकड़ी की राख डालने से बचें; कंद बनने की अवस्था (बुवाई के 4-6 सप्ताह बाद) में खेत को कभी सूखने न दें।"
    },
    "reference": "ICAR-CPRI Shimla"
  },
  {
    "id": "RULE_POT_06",
    "crop": "potato",
    "conditions": [
      "potato_upward_rolling_stiff_lower_leaves",
      "potato_leathery_brittle_leaves_rattling",
      "potato_apical_chlorosis_stunting"
    ],
    "conclusion": "potato_leaf_roll_virus",
    "disease_name": {
      "en": "Potato Leaf Roll Virus (PLRV)",
      "hi": "आलू का पत्ती मोड़क विषाणु (लीफ रोल)"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Spray Neem oil (5 ml/L) or 5% NSKE to control aphid vectors; rogue out and bury virus-infected plants with tubers.",
        "hi": "माहू (एफिड) नियंत्रण हेतु नीम का तेल (5 मिली/लीटर) छिड़कें; विषाणु ग्रसित पौधों को कंद सहित उखाड़कर गहरा गाड़ दें।"
      },
      "chemical": {
        "en": "Spray Imidacloprid 17.8% SL @ 0.3 ml/L or Thiamethoxam 25% WG @ 0.4 g/L when aphid threshold exceeds 20 aphids/100 leaves.",
        "hi": "एफिड दिखने पर इमिडाक्लोप्रिड 17.8% SL 0.3 मिली/लीटर या थायमेथॉक्सम 25% WG 0.4 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Produce seed potatoes using the 'Seed Plot Technique' during aphid-free window; install yellow sticky traps (15-20/ha).",
      "hi": "एफिड-मुक्त अवधि में 'सीड प्लॉट तकनीक' द्वारा बीज तैयार करें; खेत में पीले चिपचिपे ट्रैप (15-20 प्रति हेक्टेयर) लगाएं।"
    },
    "reference": "ICAR-CPRI Shimla"
  },
  {
    "id": "RULE_MAZ_04",
    "crop": "maize",
    "conditions": [
      "maize_large_cigar_boat_shaped_lesions",
      "maize_olive_grey_spores_on_lesions",
      "maize_extensive_canopy_blighting"
    ],
    "conclusion": "maize_turcicum_blight",
    "disease_name": {
      "en": "Turcicum Leaf Blight (Northern Corn Leaf Blight)",
      "hi": "मक्के का टर्सिकम झुलसा रोग"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray Pseudomonas fluorescens (10g/L) or sour buttermilk (50ml/L); remove infected lower senescent leaves.",
        "hi": "स्यूडोमोनास फ्लोरेसेंस (10 ग्राम/लीटर) या खट्टी छाछ (50 मिली/लीटर) का छिड़काव करें; निचली रोगी पत्तियां तोड़ दें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L at first sign of lesions.",
        "hi": "लक्षण दिखते ही मैनकोज़ेब 75% WP 2.5 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन + डाइफेनोकोनाज़ोल 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Plant resistant hybrids like HQPM-1, DHM-117, or Bio-9681; balanced NPK fertilization with adequate potash.",
      "hi": "प्रतिरोधी संकर किस्में जैसे HQPM-1, DHM-117 या Bio-9681 लगाएं; पोटाश की संतुलित मात्रा दें।"
    },
    "reference": "ICAR-Indian Institute of Maize Research (IIMR) Ludhiana"
  },
  {
    "id": "RULE_MAZ_05",
    "crop": "maize",
    "conditions": [
      "maize_concentric_bleached_bands_sheath",
      "maize_blight_ascending_to_ears",
      "maize_brown_globose_sclerotia_sheath"
    ],
    "conclusion": "maize_banded_sheath_blight",
    "disease_name": {
      "en": "Banded Leaf & Sheath Blight (BLSB)",
      "hi": "मक्के का बैंडेड पत्ती व शीथ झुलसा"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Strip lower 2-3 leaves touching the soil; spray Trichoderma harzianum (10g/L) directed onto lower leaf sheaths.",
        "hi": "जमीन से छूने वाली नीचे की 2-3 पत्तियां हटा दें; निचली शीथ पर ट्राइकोडर्मा हरजिएनम (10 ग्राम/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Validamycin 3% L @ 2 ml/L or Trifloxystrobin 25% + Tebuconazole 50% WG @ 0.7 g/L targeting lower plant base.",
        "hi": "निचले तने पर वेलीडामाईसीन 3% L 2 मिली/लीटर या ट्राइफ्लोक्सीस्ट्रोबिन + टेबुकोनाज़ोल 0.7 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Avoid water stagnation and excessive planting density; ensure wide row spacing (60 x 20 cm); destroy stubbles.",
      "hi": "खेत में जलभराव न होने दें; पौधों के बीच उचित दूरी (60 x 20 सेमी) रखें; फसल अवशेषों को नष्ट करें।"
    },
    "reference": "ICAR-IIMR Ludhiana"
  },
  {
    "id": "RULE_MAZ_06",
    "crop": "maize",
    "conditions": [
      "maize_pinhole_parallel_slits_whorl",
      "maize_deadheart_offensive_odor",
      "maize_caterpillar_tunneling_stem_base"
    ],
    "conclusion": "maize_stem_borer",
    "disease_name": {
      "en": "Maize Stem Borer (Spotted Borer)",
      "hi": "मक्के का तना छेदक (तना भेदक)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Release egg parasitoid Trichogramma chilonis @ 1,00,000/ha; apply fine neem cake powder mixed with dry sand in leaf whorls.",
        "hi": "ट्राइकोग्रामा चिलोनीस 1 लाख/हेक्टेयर छोड़ें; पत्ती की भोंपू (गोभ) में नीम की खली का चूर्ण और सूखी रेत डालें।"
      },
      "chemical": {
        "en": "Whorl application of Carbofuran 3% CG @ 7 kg/ha or spray Chlorantraniliprole 18.5% SC @ 0.4 ml/L.",
        "hi": "गोभ में कार्बोफ्यूरान 3% CG 7 किग्रा/हेक्टेयर डालें या क्लोरांट्रानिलीप्रोल 18.5% SC 0.4 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Pull out and destroy dead heart plants; install light traps to catch adult moths; intercrop with cowpea or soybean.",
      "hi": "सूखे डेड हार्ट वाले पौधों को उखाड़कर नष्ट करें; प्रकाश प्रपंच (लाइट ट्रैप) लगाएं; लोबिया या सोयाबीन के साथ अंतःफसल लें।"
    },
    "reference": "ICAR-IIMR Ludhiana"
  },
  {
    "id": "RULE_CHL_04",
    "crop": "chilli",
    "conditions": [
      "chilli_white_powdery_fuzz_underside",
      "chilli_bright_yellow_chlorotic_patches_upper",
      "chilli_severe_premature_leaf_fall"
    ],
    "conclusion": "chilli_powdery_mildew",
    "disease_name": {
      "en": "Powdery Mildew of Chilli",
      "hi": "मिर्च का छाछ्या (चूर्णिल आसिता) रोग"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray Wettable Sulfur 80% WDG (3 g/L) or 5% Sour buttermilk (Chhachh); ensure thorough coverage under leaves.",
        "hi": "घुलनशील गंधक (सल्फर 80% WDG) 3 ग्राम/लीटर या 5% खट्टी छाछ का पत्तियों के नीचे अच्छी तरह छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Azoxystrobin 11% + Tebuconazole 18.3% SC @ 1.5 ml/L or Dinocap 48% EC @ 1 ml/L at first disease detection.",
        "hi": "रोग दिखते ही एज़ोक्सीस्ट्रोबिन + टेबुकोनाज़ोल 1.5 मिली/लीटर या डाइनोकैप 48% EC 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Avoid overcrowded plantations; ensure good aeration between rows; destroy infected crop debris after harvest.",
      "hi": "पौधों को अधिक पास-पास न लगाएं; खेत में हवा का आवागमन बनाए रखें; कटाई के बाद अवशेषों को जला दें।"
    },
    "reference": "ICAR-Indian Institute of Vegetable Research (IIVR) Varanasi"
  },
  {
    "id": "RULE_CHL_05",
    "crop": "chilli",
    "conditions": [
      "chilli_small_circular_dark_water_soaked_spots",
      "chilli_corky_rough_scab_spots_fruit",
      "chilli_chlorotic_halo_leaf_shedding"
    ],
    "conclusion": "chilli_bacterial_spot",
    "disease_name": {
      "en": "Bacterial Leaf Spot & Scab",
      "hi": "मिर्च का जीवाणु पत्ती धब्बा व खुरंड"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray Pseudomonas fluorescens (10 g/L) or copper vessel extract; avoid overhead sprinkler irrigation.",
        "hi": "स्यूडोमोनास फ्लोरेसेंस (10 ग्राम/लीटर) का छिड़काव करें; ऊपर से फव्वारा सिंचाई से बचें।"
      },
      "chemical": {
        "en": "Spray Copper Oxychloride 50% WP (2.5 g/L) + Streptocycline (1 g in 10 L water) at 12-day intervals.",
        "hi": "कॉपर ऑक्सीक्लोराइड 50% WP (2.5 ग्राम/लीटर) + स्ट्रेप्टोसाइक्लिन (1 ग्राम प्रति 10 लीटर) का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Hot water seed treatment at 50°C for 25 minutes; use certified disease-free nursery seedlings; crop rotation.",
      "hi": "50°C गर्म पानी में 25 मिनट बीजोपचार करें; प्रमाणित रोगमुक्त पौध लगाएं; गैर-सोलेनेसी फसलों से फसल चक्र अपनाएं।"
    },
    "reference": "ICAR-IIVR Varanasi"
  },
  {
    "id": "RULE_CHL_06",
    "crop": "chilli",
    "conditions": [
      "chilli_progressive_yellowing_wilting_foliage",
      "chilli_collar_brown_lesion_root_decay",
      "chilli_vascular_browning_split_stem"
    ],
    "conclusion": "chilli_fusarium_wilt",
    "disease_name": {
      "en": "Fusarium Wilt / Collar Rot",
      "hi": "मिर्च का उकठा (उखटा) व विगलन रोग"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Drench root collar with Trichoderma viride (10 g/L) enriched in FYM; apply neem cake (250 kg/ha) at planting.",
        "hi": "गोबर की खाद में संवर्धित ट्राइकोडर्मा विरिडी (10 ग्राम/लीटर) से तने की जड़ में ड्रेंचिंग करें; नीम की खली डालें।"
      },
      "chemical": {
        "en": "Soil drenching around collar with Carbendazim 50% WP @ 1 g/L or Metalaxyl 8% + Mancozeb 64% WP @ 2 g/L.",
        "hi": "पौधे के तने के पास कार्बेंडाजिम 50% WP 1 ग्राम/लीटर या मेटालेक्सिल + मैनकोज़ेब 2 ग्राम/लीटर घोल डालकर तर करें।"
      }
    },
    "prevention": {
      "en": "Solarize nursery beds; prepare raised planting beds to prevent water stagnation; 3-year rotation with non-hosts.",
      "hi": "नर्सरी की मिट्टी का सौरीकरण करें; जलभराव रोकने हेतु उठी हुई क्यारियों (रेज्ड बेड) पर रोपाई करें।"
    },
    "reference": "ICAR-IIVR Varanasi"
  },
  {
    "id": "RULE_MST_04",
    "crop": "mustard",
    "conditions": [
      "mustard_angular_pale_yellow_chlorotic_patches",
      "mustard_greyish_white_downy_growth_underside",
      "mustard_hypertrophy_inflorescence_stems"
    ],
    "conclusion": "mustard_downy_mildew",
    "disease_name": {
      "en": "Downy Mildew of Mustard",
      "hi": "सरसों का मृदुरोमिल आसिता (डाउनी मिल्ड्यू)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Foliar spray of 5% Cow urine solution with garlic extract or copper hydroxide (2 g/L).",
        "hi": "लहसुन अर्क युक्त 5% गोमूत्र घोल या कॉपर हाइड्रॉक्साइड (2 ग्राम/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Metalaxyl-M 4% + Mancozeb 64% WP @ 2.5 g/L or Cymoxanil 8% + Mancozeb 64% WP @ 2 g/L.",
        "hi": "मेटालेक्सिल + मैनकोज़ेब 2.5 ग्राम/लीटर या साइमोक्सानिल + मैनकोज़ेब 2 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Sow in early October to escape disease peak; avoid high seed rate; destroy crop debris after harvest.",
      "hi": "अक्टूबर के प्रथम पखवाड़े में बुवाई करें; अधिक बीज दर से बचें; कटाई के बाद फसल अवशेष नष्ट करें।"
    },
    "reference": "ICAR-Directorate of Rapeseed-Mustard Research (DRMR) Bharatpur"
  },
  {
    "id": "RULE_MST_05",
    "crop": "mustard",
    "conditions": [
      "mustard_water_soaked_elongated_bleached_stem_lesions",
      "mustard_white_cottony_mycelium_on_stem",
      "mustard_black_elongated_sclerotia_inside_pith"
    ],
    "conclusion": "mustard_sclerotinia_stem_rot",
    "disease_name": {
      "en": "Sclerotinia Stem Rot",
      "hi": "सरसों का तना गलन (स्क्लेरोटिनिया रॉट)"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Soil application of Trichoderma harzianum (5 kg/ha) with FYM; deep summer ploughing to bury sclerotia.",
        "hi": "गोबर की खाद में ट्राइकोडर्मा हरजिएनम (5 किग्रा/हेक्टेयर) मिलाकर मिट्टी में डालें; गहरी ग्रीष्मकालीन जुताई करें।"
      },
      "chemical": {
        "en": "Spray Carbendazim 50% WP @ 1 g/L or Thiophanate Methyl 70% WP @ 1 g/L at first flowering (45-50 DAS).",
        "hi": "फूल आने की शुरुआत (45-50 दिन) पर कार्बेंडाजिम 1 ग्राम/लीटर या थायोफिनेट मिथाइल 1 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Crop rotation with non-hosts like wheat or barley; avoid excessive irrigation in December-January; clean seed.",
      "hi": "गेहूं या जौ के साथ फसल चक्र अपनाएं; फूल आते समय अधिक सिंचाई से बचें; प्रमाणित साफ बीज बोएं।"
    },
    "reference": "ICAR-DRMR Bharatpur"
  },
  {
    "id": "RULE_MST_06",
    "crop": "mustard",
    "conditions": [
      "mustard_white_floury_talcum_patches_leaves",
      "mustard_entire_canopy_white_powder_coating",
      "mustard_shriveled_undersized_seeds"
    ],
    "conclusion": "mustard_powdery_mildew",
    "disease_name": {
      "en": "Powdery Mildew of Mustard",
      "hi": "सरसों का चूर्णिल आसिता (सफेद फफूंद)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Dust fine sulfur powder @ 20 kg/ha in morning or spray Wettable Sulfur 80% WDG @ 3 g/L.",
        "hi": "सुबह के समय बारीक गंधक चूर्ण (20 किग्रा/हेक्टेयर) बुरकें या घुलनशील गंधक 3 ग्राम/लीटर पानी में घोलकर छिड़कें।"
      },
      "chemical": {
        "en": "Spray Dinocap 48% EC @ 1 ml/L or Propiconazole 25% EC @ 1 ml/L upon appearance of white floury spots.",
        "hi": "डाइनोकैप 48% EC 1 मिली/लीटर या प्रोपिकोनाज़ोल 25% EC 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Grow tolerant varieties like DRMRIJ-31 (Giriraj) or RH-0749; timely sowing; avoid post-flowering drought stress.",
      "hi": "सहनशील किस्में जैसे DRMRIJ-31 (गिरिराज) या RH-0749 लगाएं; समय पर बुवाई करें।"
    },
    "reference": "ICAR-DRMR Bharatpur"
  },
  {
    "id": "RULE_SUG_04",
    "crop": "sugarcane",
    "conditions": [
      "sugarcane_profuse_bushy_thin_chlorotic_tillers",
      "sugarcane_narrow_papery_leaves_no_stalk",
      "sugarcane_spongy_stunted_stool"
    ],
    "conclusion": "sugarcane_grassy_shoot",
    "disease_name": {
      "en": "Grassy Shoot Disease (GSD)",
      "hi": "गन्ने का घसियाला प्ररोह (घास जैसी बढ़वार)"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Rogue out and destroy infected grassy stools completely; drench root zone with Pseudomonas fluorescens.",
        "hi": "घास जैसे रोगग्रस्त थानों को जड़ सहित उखाड़कर तुरंत नष्ट करें; स्यूडोमोनास फ्लोरेसेंस से ड्रेंचिंग करें।"
      },
      "chemical": {
        "en": "Spray Dimethoate 30% EC @ 1.7 ml/L or Thiamethoxam 25% WG @ 0.3 g/L to suppress leafhopper vector insects.",
        "hi": "वाहक कीट (लीफहॉपर) नियंत्रण हेतु डाइमेथोएट 30% EC 1.7 मिली/लीटर या थायमेथॉक्सम 0.3 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Treat seed cane setts with Moist Hot Air Treatment (MHAT at 54°C for 2.5 hours); use certified tissue-cultured setts.",
      "hi": "बीज गन्ने को नम गर्म हवा उपचार (MHAT 54°C पर 2.5 घंटे) दें; टिशू कल्चर से तैयार प्रमाणित बीज लगाएं।"
    },
    "reference": "ICAR-Sugarcane Breeding Institute (SBI) Coimbatore & IISR Lucknow"
  },
  {
    "id": "RULE_SUG_05",
    "crop": "sugarcane",
    "conditions": [
      "sugarcane_deadheart_offensive_foul_odor",
      "sugarcane_entrance_hole_at_soil_surface",
      "sugarcane_caterpillar_five_violet_stripes"
    ],
    "conclusion": "sugarcane_early_shoot_borer",
    "disease_name": {
      "en": "Early Shoot Borer",
      "hi": "गन्ने का अगेती तना भेदक (कंसुआ)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Release Trichogramma chilonis egg parasitoids @ 50,000/ha; spread thick trash mulching (10 cm) between cane rows.",
        "hi": "ट्राइकोग्रामा चिलोनीस 50,000/हेक्टेयर छोड़ें; कतारों के बीच गन्ने की सूखी पत्तियों की पलवार (मल्चिंग) बिछाएं।"
      },
      "chemical": {
        "en": "Apply Chlorantraniliprole 0.4% G @ 18.75 kg/ha or spray Chlorantraniliprole 18.5% SC @ 0.4 ml/L along the furrow line.",
        "hi": "क्लोरांट्रानिलीप्रोल 0.4% G 18.75 किग्रा/हेक्टेयर कूड़ों में डालें या 18.5% SC 0.4 मिली/लीटर का तनों पर छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Earthing up at 35-45 days after planting; ensure light and frequent irrigation during hot summer months.",
      "hi": "बुवाई के 35-45 दिन बाद पौधों पर मिट्टी चढ़ाएं; गर्मियों में हल्की और नियमित सिंचाई करें।"
    },
    "reference": "ICAR-SBI Coimbatore"
  },
  {
    "id": "RULE_SUG_06",
    "crop": "sugarcane",
    "conditions": [
      "sugarcane_small_yellow_elongated_flecks",
      "sugarcane_reddish_brown_linear_erumpent_pustules",
      "sugarcane_extensive_apical_scorching"
    ],
    "conclusion": "sugarcane_rust",
    "disease_name": {
      "en": "Sugarcane Rust",
      "hi": "गन्ने का गेरुई (रतुआ) रोग"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray sour buttermilk (50 ml/L) or neem oil (5 ml/L); avoid excessive nitrogen top-dressing.",
        "hi": "खट्टी छाछ (50 मिली/लीटर) या नीम तेल (5 मिली/लीटर) का छिड़काव करें; अधिक यूरिया देने से बचें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2.5 g/L or Propiconazole 25% EC @ 1 ml/L at first notice of rust pustules.",
        "hi": "रतुआ के फफोले दिखते ही मैनकोज़ेब 2.5 ग्राम/लीटर या प्रोपिकोनाज़ोल 25% EC 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Plant rust-resistant cultivars like Co 0238, Co 86032, or CoM 0265; avoid late season planting.",
      "hi": "प्रतिरोधी किस्में जैसे Co 0238, Co 86032 या CoM 0265 लगाएं; देर से बुवाई न करें।"
    },
    "reference": "ICAR-IISR Lucknow"
  },
  {
    "id": "RULE_GRN_04",
    "crop": "groundnut",
    "conditions": [
      "groundnut_brown_lesion_soil_line_wilting",
      "groundnut_fan_like_white_mycelial_web_soil",
      "groundnut_mustard_seed_brown_sclerotia_collar"
    ],
    "conclusion": "groundnut_stem_rot",
    "disease_name": {
      "en": "Stem Rot / Sclerotium Wilt",
      "hi": "मूंगफली का तना विगलन (सफेद फफूंद)"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Soil application of Trichoderma harzianum (4 kg/ha) mixed with 500 kg FYM and neem cake at sowing and pegging.",
        "hi": "बुवाई और खूंटी बनते समय ट्राइकोडर्मा हरजिएनम (4 किग्रा/हेक्टेयर) को 500 किग्रा गोबर खाद और नीम खली में मिलाकर डालें।"
      },
      "chemical": {
        "en": "Drench stem bases with Tebuconazole 25.9% EC @ 1.5 ml/L or Hexaconazole 5% SC @ 2 ml/L.",
        "hi": "तने के आधार पर टेबुकोनाज़ोल 25.9% EC 1.5 मिली/लीटर या हेक्साकोनाज़ोल 5% SC 2 मिली/लीटर से ड्रेंचिंग करें।"
      }
    },
    "prevention": {
      "en": "Deep summer ploughing to bury sclerotia; avoid throwing soil onto plant crowns during intercultivation.",
      "hi": "गहरी गर्मी की जुताई करें; निराई-गुड़ाई करते समय पौधे के तने पर गीली मिट्टी न चढ़ाएं।"
    },
    "reference": "ICAR-Directorate of Groundnut Research (DGR) Junagadh"
  },
  {
    "id": "RULE_GRN_05",
    "crop": "groundnut",
    "conditions": [
      "groundnut_chlorotic_concentric_ring_spots_young_leaves",
      "groundnut_terminal_growing_bud_necrosis",
      "groundnut_severe_stunting_auxiliary_shoots"
    ],
    "conclusion": "groundnut_bud_necrosis",
    "disease_name": {
      "en": "Bud Necrosis Disease (GBNV)",
      "hi": "मूंगफली का कली सड़न (बड नेक्रोसिस)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Foliar spray of 5% Neem Seed Kernel Extract (NSKE) or Neem oil (5 ml/L); rogue out infected plants within 45 days.",
        "hi": "थ्रिप्स नियंत्रण हेतु 5% नीम अर्क (NSKE) या नीम तेल (5 मिली/लीटर) छिड़कें; रोगी पौधों को उखाड़ दें।"
      },
      "chemical": {
        "en": "Spray Dimethoate 30% EC @ 1.7 ml/L or Imidacloprid 17.8% SL @ 0.3 ml/L to control the vector thrips.",
        "hi": "वाहक थ्रिप्स कीट रोकने हेतु डाइमेथोएट 1.7 मिली/लीटर या इमिडाक्लोप्रिड 0.3 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Adopt optimum plant spacing (30 x 10 cm); sow early with monsoon onset; intercrop with pearl millet or sorghum (4:1) as barrier.",
      "hi": "उचित दूरी (30 x 10 सेमी) पर सघन बुवाई करें; बाजरा या ज्वार के साथ 4:1 अनुपात में रोधक अंतःफसल लें।"
    },
    "reference": "ICAR-DGR Junagadh"
  },
  {
    "id": "RULE_GRN_06",
    "crop": "groundnut",
    "conditions": [
      "groundnut_subterranean_pods_discolored_black_spongy",
      "groundnut_shell_decay_shriveled_kernels",
      "groundnut_foliar_yellowing_stunted_pods"
    ],
    "conclusion": "groundnut_pod_rot",
    "disease_name": {
      "en": "Pod Rot Complex",
      "hi": "मूंगफली का फली विगलन (काली फली)"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Soil application of Trichoderma viride (5 kg/ha) with castor or neem cake at sowing and pegging stages.",
        "hi": "बुवाई और पेग बनते समय ट्राइकोडर्मा विरिडी (5 किग्रा/हेक्टेयर) को अरंडी या नीम की खली के साथ मिट्टी में मिलाएं।"
      },
      "chemical": {
        "en": "Seed treatment with Carboxin 37.5% + Thiram 37.5% WS @ 2.5 g/kg seed; drench root zone with Mancozeb (2.5 g/L).",
        "hi": "कार्बोक्सिन + थीरम 2.5 ग्राम/किग्रा बीज से बीजोपचार करें; जड़ क्षेत्र में मैनकोज़ेब (2.5 ग्राम/लीटर) डालें।"
      }
    },
    "prevention": {
      "en": "Apply Gypsum @ 500 kg/ha at pegging (40-45 DAS) to supply calcium; prevent water stagnation in heavy soils.",
      "hi": "खूंटी बनते समय (40-45 दिन) 500 किग्रा/हेक्टेयर जिप्सम डालें ताकि फलियों को कैल्शियम मिले; जलभराव से बचें।"
    },
    "reference": "ICAR-DGR Junagadh"
  },
  {
    "id": "RULE_CHK_04",
    "crop": "chickpea",
    "conditions": [
      "chickpea_straw_colored_drying_without_drooping",
      "chickpea_taproot_dark_dry_brittle_shredded",
      "chickpea_absence_fine_lateral_roots"
    ],
    "conclusion": "chickpea_dry_root_rot",
    "disease_name": {
      "en": "Dry Root Rot of Chickpea",
      "hi": "चने का सूखा जड़ विगलन (ड्राई रूट रॉट)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Seed treatment with Trichoderma viride (10 g/kg seed) + Pseudomonas fluorescens (10 g/kg); apply neem cake in soil.",
        "hi": "ट्राइकोडर्मा विरिडी (10 ग्राम) + स्यूडोमोनास (10 ग्राम प्रति किग्रा बीज) से बीजोपचार करें; मिट्टी में नीम खली डालें।"
      },
      "chemical": {
        "en": "Seed dressing with Carboxin 37.5% + Thiram 37.5% DS @ 2 g/kg seed before sowing.",
        "hi": "बुवाई से पहले कार्बोक्सिन + थीरम 2 ग्राम/किग्रा बीज की दर से सूखा बीजोपचार करें।"
      }
    },
    "prevention": {
      "en": "Avoid moisture stress during pod filling; sow tolerant varieties like JG-11, JAKI-9218, or RVG-202; deep summer ploughing.",
      "hi": "दाना बनते समय खेत में नमी की कमी न होने दें; सहनशील किस्में जैसे JG-11 या JAKI-9218 लगाएं।"
    },
    "reference": "ICAR-Indian Institute of Pulses Research (IIPR) Kanpur"
  },
  {
    "id": "RULE_CHK_05",
    "crop": "chickpea",
    "conditions": [
      "chickpea_circular_boreholes_green_pods",
      "chickpea_caterpillar_body_outside_pod",
      "chickpea_defoliation_chewed_leaflets"
    ],
    "conclusion": "chickpea_pod_borer",
    "disease_name": {
      "en": "Gram Pod Borer (Helicoverpa)",
      "hi": "चने की फली छेदक (इल्ली / सुंडी)"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Spray HaNPV (Helicoverpa virus) @ 250 LE/ha or Bacillus thuringiensis (Bt) @ 1.5 kg/ha; install 5 pheromone traps/ha.",
        "hi": "HaNPV 250 LE/हेक्टेयर या बीटी (Bt) 1.5 किग्रा/हेक्टेयर छिड़कें; 5 फेरोमोन ट्रैप/हेक्टेयर लगाएं।"
      },
      "chemical": {
        "en": "Spray Chlorantraniliprole 18.5% SC @ 0.3 ml/L or Emamectin Benzoate 5% SG @ 0.4 g/L at early larval appearance.",
        "hi": "छोटी इल्लियां दिखने पर क्लोरांट्रानिलीप्रोल 0.3 मिली/लीटर या एमामेक्टिन बेंजोएट 0.4 ग्राम/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Erect T-shaped bird perches (40-50/ha); intercrop with coriander or mustard (4:1 ratio); avoid late sowing.",
      "hi": "खेत में 'T' आकार के पक्षी बसेरे (40-50 प्रति हेक्टेयर) लगाएं; धनिया या सरसों के साथ 4:1 में अंतःफसल लें।"
    },
    "reference": "ICAR-IIPR Kanpur"
  },
  {
    "id": "RULE_CHK_06",
    "crop": "chickpea",
    "conditions": [
      "chickpea_seedling_collar_constriction_collapse",
      "chickpea_white_fan_mycelium_collar_seedling",
      "chickpea_spherical_brown_mustard_sclerotia"
    ],
    "conclusion": "chickpea_collar_rot",
    "disease_name": {
      "en": "Collar Rot of Chickpea",
      "hi": "चने का कॉलर रॉट (तना आधार विगलन)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Seed biopriming with Trichoderma harzianum (10 g/kg seed); drench nursery/field soil with Trichoderma enriched FYM.",
        "hi": "ट्राइकोडर्मा हरजिएनम (10 ग्राम/किग्रा बीज) से बीजोपचार करें; ट्राइकोडर्मा युक्त गोबर की खाद मिट्टी में दें।"
      },
      "chemical": {
        "en": "Seed treatment with Captan 50% WP @ 3 g/kg seed or Carbendazim 50% WP @ 2 g/kg seed.",
        "hi": "कैप्टान 50% WP 3 ग्राम/किग्रा या कार्बेंडाजिम 2 ग्राम/किग्रा बीज की दर से उपचारित करें।"
      }
    },
    "prevention": {
      "en": "Remove undecomposed organic matter from field; sow on well-drained raised beds; avoid excessive pre-sowing irrigation.",
      "hi": "खेत से बिना सड़े अवशेष हटाएं; जल निकासी वाली उठी हुई क्यारियों में बोएं; अधिक पलेवा पानी से बचें।"
    },
    "reference": "ICAR-IIPR Kanpur"
  },
  {
    "id": "RULE_PGP_04",
    "crop": "pigeonpea",
    "conditions": [
      "pigeonpea_large_circular_holes_pods",
      "pigeonpea_caterpillar_excreta_frass_pods",
      "pigeonpea_flower_buds_perforated_shed"
    ],
    "conclusion": "pigeonpea_pod_borer",
    "disease_name": {
      "en": "Gram Pod Borer in Arhar",
      "hi": "अरहर का फली छेदक (इल्ली)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Spray Neem oil (5 ml/L) or HaNPV @ 250 LE/ha; install 5 pheromone traps/ha; spray Bt @ 1.5 kg/ha.",
        "hi": "नीम तेल (5 मिली/लीटर) या HaNPV 250 LE/हेक्टेयर छिड़कें; 5 फेरोमोन ट्रैप लगाएं; पक्षी बसेरे लगाएं।"
      },
      "chemical": {
        "en": "Spray Chlorantraniliprole 18.5% SC @ 0.3 ml/L or Flubendiamide 39.35% SC @ 0.2 ml/L at 50% flowering stage.",
        "hi": "50% फूल आने की अवस्था में क्लोरांट्रानिलीप्रोल 0.3 मिली/लीटर या फ्लूबेन्डियामाइड 0.2 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Intercrop with sorghum or pearl millet; shake plants over polythene sheets in early morning to dislodge caterpillars.",
      "hi": "ज्वार या बाजरा के साथ अंतःफसल लें; सुबह के समय पौधों को हिलाकर पॉलीथिन पर इल्लियां गिराकर नष्ट करें।"
    },
    "reference": "ICAR-IIPR Kanpur"
  },
  {
    "id": "RULE_PGP_05",
    "crop": "pigeonpea",
    "conditions": [
      "pigeonpea_small_pinhead_exit_hole_dry_pod",
      "pigeonpea_white_maggots_feeding_inside_seed",
      "pigeonpea_shriveled_hollow_seeds"
    ],
    "conclusion": "pigeonpea_pod_fly",
    "disease_name": {
      "en": "Pod Fly Infestation",
      "hi": "अरहर की फली मक्खी (पॉड फ्लाई)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray 5% NSKE (Neem Seed Extract) at petal fall stage to deter adult flies from egg laying on young pods.",
        "hi": "फूलों की पंखुड़ियां गिरते समय 5% नीम अर्क का छिड़काव करें ताकि मक्खियां फलियों पर अंडे न दे सकें।"
      },
      "chemical": {
        "en": "Spray Dimethoate 30% EC @ 1.7 ml/L or Quinalphos 25% EC @ 2 ml/L during pod formation.",
        "hi": "फली बनने की अवस्था में डाइमेथोएट 30% EC 1.7 मिली/लीटर या क्विनालफॉस 25% EC 2 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Grow early-maturing cultivars like UPAS-120 or Pusa-992; harvest mature pods promptly to avoid post-maturity infestation.",
      "hi": "अगेती किस्में जैसे UPAS-120 या पूसा-992 लगाएं; फलियां पकते ही तुरंत कटाई करें।"
    },
    "reference": "ICAR-IIPR Kanpur"
  },
  {
    "id": "RULE_PGP_06",
    "crop": "pigeonpea",
    "conditions": [
      "pigeonpea_concentric_brown_spots_leaves",
      "pigeonpea_sunken_cankers_pod_margins",
      "pigeonpea_premature_pod_blighting"
    ],
    "conclusion": "pigeonpea_anthracnose",
    "disease_name": {
      "en": "Anthracnose & Pod Canker",
      "hi": "अरहर का एन्थ्रेक्नोज़ व फली कैंकर"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Foliar spray of Trichoderma viride (10 g/L) or Copper Hydroxide (2 g/L) at disease initiation.",
        "hi": "ट्राइकोडर्मा विरिडी (10 ग्राम/लीटर) या कॉपर हाइड्रॉक्साइड (2 ग्राम/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 23% SC @ 1 ml/L upon appearance of leaf lesions.",
        "hi": "मैनकोज़ेब 75% WP 2.5 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन 23% SC 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Seed treatment with Carbendazim (2 g/kg seed); clean cultivation; 2-year crop rotation.",
      "hi": "कार्बेंडाजिम 2 ग्राम/किग्रा बीज से बीजोपचार करें; 2 वर्षीय फसल चक्र अपनाएं।"
    },
    "reference": "ICAR-IIPR Kanpur"
  },
  {
    "id": "RULE_ONI_04",
    "crop": "onion",
    "conditions": [
      "onion_pale_oval_patches_violet_downy_fuzz",
      "onion_leaves_fold_over_snap_downward",
      "onion_rapid_defoliation_cold_fog"
    ],
    "conclusion": "onion_downy_mildew",
    "disease_name": {
      "en": "Downy Mildew of Onion",
      "hi": "प्याज का डाउनी मिल्ड्यू (मृदुरोमिल आसिता)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Foliar spray of Copper Oxychloride (2.5 g/L) or fermented sour buttermilk (50 ml/L); improve field ventilation.",
        "hi": "कॉपर ऑक्सीक्लोराइड (2.5 ग्राम/लीटर) या खट्टी छाछ (50 मिली/लीटर) का छिड़काव करें; खेत में वायु संचार रखें।"
      },
      "chemical": {
        "en": "Spray Metalaxyl-M 4% + Mancozeb 64% WP @ 2.5 g/L or Dimethomorph 50% WP @ 1 g/L with agricultural sticker.",
        "hi": "मेटालेक्सिल + मैनकोज़ेब 2.5 ग्राम/लीटर या डाइमेथोमॉर्फ 1 ग्राम/लीटर के साथ चिपकने वाला पदार्थ (स्टिकर) मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Avoid dense plantings and excessive nitrogen; grow on well-drained raised beds; 3-year rotation.",
      "hi": "सघन रोपाई और अधिक यूरिया से बचें; उठी हुई क्यारियों पर रोपाई करें; 3 वर्षीय फसल चक्र अपनाएं।"
    },
    "reference": "ICAR-Directorate of Onion and Garlic Research (DOGR) Rajgurunagar Pune"
  },
  {
    "id": "RULE_ONI_05",
    "crop": "onion",
    "conditions": [
      "onion_black_powdery_spore_masses_dry_scales",
      "onion_soft_watery_breakdown_inner_scales",
      "onion_black_dusting_around_bulb_neck"
    ],
    "conclusion": "onion_black_mold",
    "disease_name": {
      "en": "Black Mold of Onion",
      "hi": "प्याज का काला फफूंद (ब्लैक मोल्ड) रोग"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Thorough field curing in shade for 10-15 days before storage; apply Trichoderma to storage room floors.",
        "hi": "भंडारण से पहले प्याज को छायादार स्थान पर 10-15 दिन अच्छी तरह सुखाएं; भंडार कक्ष में ट्राइकोडर्मा का छिड़काव करें।"
      },
      "chemical": {
        "en": "Pre-harvest spray of Carbendazim 50% WP (1 g/L) 15 days before harvest; dip bulbs in 0.1% Carbendazim.",
        "hi": "खुदाई से 15 दिन पहले खेत में कार्बेंडाजिम 1 ग्राम/लीटर का छिड़काव करें; कंदों को 0.1% कार्बेंडाजिम घोल में डुबोएं।"
      }
    },
    "prevention": {
      "en": "Ensure complete drying of neck tops before clipping; avoid bruising during harvest; well-ventilated dry storage.",
      "hi": "गर्दन पूरी तरह सूखने के बाद ही डंठल काटें; कंदों को चोट लगने से बचाएं; हवादार और सूखे गोदाम में रखें।"
    },
    "reference": "ICAR-DOGR Pune"
  },
  {
    "id": "RULE_ONI_06",
    "crop": "onion",
    "conditions": [
      "onion_silvery_white_blotches_feeding_scrapes",
      "onion_black_tar_like_fecal_specks_leaves",
      "onion_twisted_curled_leaf_tips_drying"
    ],
    "conclusion": "onion_thrips",
    "disease_name": {
      "en": "Onion Thrips Infestation",
      "hi": "प्याज का थ्रिप्स (चंपा / मरोड़िया कीट)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Spray Neem oil (5 ml/L) or 5% NSKE; install blue sticky traps (30/ha); overhead sprinkler irrigation dislodges thrips.",
        "hi": "नीम तेल (5 मिली/लीटर) या 5% नीम अर्क छिड़कें; नीले चिपचिपे ट्रैप (30 प्रति हेक्टेयर) लगाएं; स्प्रिंकलर से पानी दें।"
      },
      "chemical": {
        "en": "Spray Fipronil 5% SC @ 1.5 ml/L or Spinosad 45% SC @ 0.3 ml/L or Profenofos 50% EC @ 1 ml/L with sticker.",
        "hi": "फिप्रोनिल 5% SC 1.5 मिली/लीटर या स्पिनोसाड 0.3 मिली/लीटर या प्रोफेनोफॉस 1 मिली/लीटर स्टिकर मिलाकर छिड़कें।"
      }
    },
    "prevention": {
      "en": "Grow thrips-tolerant cultivars like Bhima Kiran or Bhima Shakti; avoid planting near garlic or brassica fields.",
      "hi": "सहनशील किस्में जैसे भीमा किरण या भीमा शक्ति लगाएं; लहसुन या गोभी के खेतों के पास प्याज न लगाएं।"
    },
    "reference": "ICAR-DOGR Pune"
  },
  {
    "id": "RULE_BRN_04",
    "crop": "brinjal",
    "conditions": [
      "brinjal_tender_shoots_drooping_withered",
      "brinjal_circular_boreholes_fruit_frass",
      "brinjal_caterpillar_pinkish_white_feeding_flesh"
    ],
    "conclusion": "brinjal_shoot_fruit_borer",
    "disease_name": {
      "en": "Shoot & Fruit Borer (BSFB)",
      "hi": "बैंगन का तना व फल छेदक कीट"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Clip and bury wilted shoots weekly; install Lucinlure pheromone traps @ 12/ha; release Trichogramma @ 50,000/ha.",
        "hi": "मुरझाई शाखाओं को सप्ताह में एक बार काटकर गाड़ दें; ल्यूसिनल्यूर फेरोमोन ट्रैप (12/हेक्टेयर) लगाएं।"
      },
      "chemical": {
        "en": "Spray Chlorantraniliprole 18.5% SC @ 0.4 ml/L or Emamectin Benzoate 5% SG @ 0.4 g/L or Flubendiamide 39.35% SC @ 0.3 ml/L.",
        "hi": "क्लोरांट्रानिलीप्रोल 18.5% SC 0.4 मिली/लीटर या एमामेक्टिन बेंजोएट 0.4 ग्राम/लीटर का फल बनते समय छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Avoid continuous solanaceous cultivation; plant tolerant varieties like Pusa Purple Cluster; destroy stubbles.",
      "hi": "लगातार बैंगन की खेती न करें; सहनशील किस्में जैसे पूसा पर्पल क्लस्टर लगाएं; पुरानी फसल अवशेष नष्ट करें।"
    },
    "reference": "ICAR-IIVR Varanasi"
  },
  {
    "id": "RULE_BRN_05",
    "crop": "brinjal",
    "conditions": [
      "brinjal_circular_chlorotic_spots_concentric_rings",
      "brinjal_prominent_yellow_halo_around_spots",
      "brinjal_premature_leaf_drying_defoliation"
    ],
    "conclusion": "brinjal_cercospora_leaf_spot",
    "disease_name": {
      "en": "Cercospora Leaf Spot",
      "hi": "बैंगन का सर्कोस्पोरा पत्ती धब्बा"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Spray Copper Oxychloride (2.5 g/L) or sour buttermilk (50 ml/L) mixed with garlic extract.",
        "hi": "कॉपर ऑक्सीक्लोराइड (2.5 ग्राम/लीटर) या लहसुन अर्क युक्त खट्टी छाछ (50 मिली/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Carbendazim 50% WP @ 1 g/L or Mancozeb 75% WP @ 2.5 g/L or Difenoconazole 25% EC @ 0.5 ml/L.",
        "hi": "कार्बेंडाजिम 1 ग्राम/लीटर या मैनकोज़ेब 2.5 ग्राम/लीटर या डाइफेनोकोनाज़ोल 0.5 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Collect and burn fallen diseased leaves; avoid overhead watering; provide balanced potash fertilization.",
      "hi": "नीचे गिरी रोगी पत्तियां जला दें; ऊपर से पानी देने से बचें; पोटाश की संतुलित मात्रा दें।"
    },
    "reference": "ICAR-IIVR Varanasi"
  },
  {
    "id": "RULE_BRN_06",
    "crop": "brinjal",
    "conditions": [
      "brinjal_seedling_collar_water_soaked_soft_rot",
      "brinjal_seedlings_fall_flat_collapse_nursery",
      "brinjal_high_soil_moisture_nursery_crowding"
    ],
    "conclusion": "brinjal_damping_off",
    "disease_name": {
      "en": "Damping-Off & Collar Rot",
      "hi": "बैंगन का आर्द्र विगलन (डैम्पिंग-ऑफ)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Seed biopriming with Trichoderma viride (10 g/kg seed); drench nursery beds with Trichoderma enriched FYM.",
        "hi": "ट्राइकोडर्मा विरिडी (10 ग्राम/किग्रा बीज) से बीजोपचार करें; ट्राइकोडर्मा युक्त गोबर की खाद क्यारियों में डालें।"
      },
      "chemical": {
        "en": "Drench nursery bed with Copper Oxychloride 50% WP @ 2.5 g/L or Metalaxyl 8% + Mancozeb 64% WP @ 2 g/L.",
        "hi": "नर्सरी की क्यारी में कॉपर ऑक्सीक्लोराइड 2.5 ग्राम/लीटर या मेटालेक्सिल + मैनकोज़ेब 2 ग्राम/लीटर घोल से ड्रेंचिंग करें।"
      }
    },
    "prevention": {
      "en": "Raise nursery on raised beds (15 cm high); solarize nursery beds with clear polythene sheets for 30 days; thin sowing.",
      "hi": "नर्सरी 15 सेमी उठी हुई क्यारियों पर लगाएं; गर्मियों में 30 दिन पॉलीथिन से सौरीकरण करें; बीजों को विरल (दूर-दूर) बोएं।"
    },
    "reference": "ICAR-IIVR Varanasi"
  },
  {
    "id": "RULE_OKR_04",
    "crop": "okra",
    "conditions": [
      "okra_upward_curling_thick_leathery_leaves",
      "okra_enation_ridge_like_outgrowths_veins",
      "okra_severe_stunting_twisted_canopy"
    ],
    "conclusion": "okra_enation_leaf_curl",
    "disease_name": {
      "en": "Enation Leaf Curl Virus (OELCV)",
      "hi": "भिंडी का इनेशन पत्ती मरोड़ विषाणु"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Spray Neem oil (5 ml/L) or 5% NSKE; install yellow sticky traps (25/ha); rogue out infected plants immediately.",
        "hi": "नीम तेल (5 मिली/लीटर) छिड़कें; पीले चिपचिपे ट्रैप (25/हेक्टेयर) लगाएं; ग्रसित पौधों को तुरंत उखाड़कर नष्ट करें।"
      },
      "chemical": {
        "en": "Spray Diafenthiuron 50% WP @ 1.2 g/L or Spiromesifen 22.9% SC @ 1 ml/L to control the vector whitefly.",
        "hi": "सफेद मक्खी नियंत्रण हेतु डायफेंथियूरॉन 50% WP 1.2 ग्राम/लीटर या स्पाइरोमेसिफेन 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Grow resistant/tolerant cultivars like Kashi Kranti, Arka Anamika, or Parbhani Kranti; synchronize planting.",
      "hi": "प्रतिरोधी किस्में जैसे काशी क्रांति, अर्का अनामिका या परभणी क्रांति लगाएं; समय पर बुवाई करें।"
    },
    "reference": "ICAR-IIVR Varanasi"
  },
  {
    "id": "RULE_OKR_05",
    "crop": "okra",
    "conditions": [
      "okra_sooty_black_velvety_patches_leaf_underside",
      "okra_upper_leaf_chlorotic_yellowing_rolling",
      "okra_defoliation_exposed_stems"
    ],
    "conclusion": "okra_cercospora_leaf_spot",
    "disease_name": {
      "en": "Cercospora Leaf Spot & Blight",
      "hi": "भिंडी का सर्कोस्पोरा पत्ती धब्बा"
    },
    "cf": 0.93,
    "treatment": {
      "organic": {
        "en": "Foliar spray of Pseudomonas fluorescens (10 g/L) or copper hydroxide; strip and burn lower infected leaves.",
        "hi": "स्यूडोमोनास फ्लोरेसेंस (10 ग्राम/लीटर) का छिड़काव करें; निचली रोगी पत्तियों को तोड़कर जला दें।"
      },
      "chemical": {
        "en": "Spray Carbendazim 50% WP @ 1 g/L or Mancozeb 75% WP @ 2.5 g/L or Propiconazole 25% EC @ 1 ml/L.",
        "hi": "कार्बेंडाजिम 1 ग्राम/लीटर या मैनकोज़ेब 2.5 ग्राम/लीटर या प्रोपिकोनाज़ोल 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Maintain wider spacing (60 x 30 cm) for canopy aeration; destroy infected crop residues after final picking.",
      "hi": "हवा के संचार हेतु उचित दूरी (60 x 30 सेमी) रखें; फसल समाप्ति पर अवशेषों को नष्ट करें।"
    },
    "reference": "ICAR-IIVR Varanasi"
  },
  {
    "id": "RULE_OKR_06",
    "crop": "okra",
    "conditions": [
      "okra_progressive_yellowing_lower_leaves_wilting",
      "okra_vascular_cylinder_brown_streak_taproot",
      "okra_plant_stunting_premature_death"
    ],
    "conclusion": "okra_fusarium_wilt",
    "disease_name": {
      "en": "Fusarium Wilt / Vascular Rot",
      "hi": "भिंडी का उकठा (उखटा / संवहनी विगलन)"
    },
    "cf": 0.95,
    "treatment": {
      "organic": {
        "en": "Soil application of Trichoderma viride (5 kg/ha) with well-cured FYM and neem cake; seed biopriming with Trichoderma (10 g/kg).",
        "hi": "गोबर की खाद और नीम खली में ट्राइकोडर्मा विरिडी (5 किग्रा/हेक्टेयर) मिलाकर मिट्टी में डालें; बीजोपचार करें।"
      },
      "chemical": {
        "en": "Seed treatment with Carbendazim @ 2 g/kg; drench root zone with Carbendazim 50% WP @ 1 g/L.",
        "hi": "कार्बेंडाजिम 2 ग्राम/किग्रा से बीजोपचार करें; रोगी पौधों के पास कार्बेंडाजिम 1 ग्राम/लीटर से ड्रेंचिंग करें।"
      }
    },
    "prevention": {
      "en": "Crop rotation with non-hosts like maize or cereals; avoid soil compaction and water stagnation; solarize soil before planting.",
      "hi": "मक्का या अनाज फसलों के साथ फसल चक्र अपनाएं; खेत में जलभराव न होने दें; गहरी जुताई करें।"
    },
    "reference": "ICAR-IIVR Varanasi"
  },
  {
    "id": "RULE_BAN_04",
    "crop": "banana",
    "conditions": [
      "banana_circular_sunken_black_spots_fruit_peel",
      "banana_pink_gelatinous_spore_masses_lesions",
      "banana_fruit_tip_pedicel_black_rot"
    ],
    "conclusion": "banana_anthracnose",
    "disease_name": {
      "en": "Anthracnose & Black End Rot",
      "hi": "केले का एन्थ्रेक्नोज़ व फल सड़न"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Bagging of emerging bunches with ventilated polyethylene sleeves; spray Trichoderma viride (5 g/L).",
        "hi": "घहर (बंच) निकलते ही छिद्रित पॉलीथिन की थैली से ढकें (बैगिंग); ट्राइकोडर्मा (5 ग्राम/लीटर) का छिड़काव करें।"
      },
      "chemical": {
        "en": "Spray Carbendazim 50% WP @ 1 g/L or Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 23% SC @ 1 ml/L on young fruit bunches.",
        "hi": "फलों पर कार्बेंडाजिम 1 ग्राम/लीटर या मैनकोज़ेब 2.5 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन 1 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Remove dried floral remnants from finger tips promptly; avoid peel bruising during harvest and transport; wash bunches in clean water.",
      "hi": "फलों की नोक पर लगे सूखे फूल हटा दें; कटाई व ढुलाई के समय छिलके पर खरोंच न लगने दें; साफ पानी से धोएं।"
    },
    "reference": "ICAR-National Research Centre for Banana (NRCB) Tiruchirappalli"
  },
  {
    "id": "RULE_BAN_05",
    "crop": "banana",
    "conditions": [
      "banana_foul_smelling_soft_watery_rhizome_decay",
      "banana_pseudostem_breaks_easily_at_ground",
      "banana_central_heart_leaf_rot_wilting"
    ],
    "conclusion": "banana_bacterial_soft_rot",
    "disease_name": {
      "en": "Bacterial Soft Rot / Rhizome Rot",
      "hi": "केले का प्रकंद विगलन (जीवाणु युक्त सड़न)"
    },
    "cf": 0.96,
    "treatment": {
      "organic": {
        "en": "Drench collar region with Pseudomonas fluorescens (20 g/L); remove and bury rotten pseudostems in deep pits with quicklime.",
        "hi": "स्यूडोमोनास फ्लोरेसेंस (20 ग्राम/लीटर) से जड़ क्षेत्र में ड्रेंचिंग करें; रोगी थान को चूना डालकर गहरे गड्ढे में गाड़ें।"
      },
      "chemical": {
        "en": "Drench pseudostem collar and corm with Streptocycline (0.5 g/L) + Copper Oxychloride 50% WP (2.5 g/L).",
        "hi": "तने के आधार पर स्ट्रेप्टोसाइक्लिन (0.5 ग्राम/लीटर) + कॉपर ऑक्सीक्लोराइड (2.5 ग्राम/लीटर) घोल डालकर तर करें।"
      }
    },
    "prevention": {
      "en": "Plant certified disease-free sword suckers or tissue culture plants; dip suckers in 0.1% Emisan + 0.02% Streptocycline for 30 minutes; ensure excellent plantation drainage.",
      "hi": "प्रमाणित रोगमुक्त पुत्तियां (सकर्स) या टिशू कल्चर पौधे लगाएं; रोपाई से पूर्व बीजोपचार करें; जल निकासी की उत्तम व्यवस्था रखें।"
    },
    "reference": "ICAR-NRCB Tiruchirappalli"
  },
  {
    "id": "RULE_BAN_06",
    "crop": "banana",
    "conditions": [
      "banana_narrow_chlorotic_yellow_stripes_to_margin",
      "banana_leaf_distortion_corrugation_brittle",
      "banana_heart_leaf_rot_winter_stunting"
    ],
    "conclusion": "banana_mosaic_virus",
    "disease_name": {
      "en": "Banana Mosaic / Infectious Chlorosis (CMV)",
      "hi": "केले का मोज़ेक विषाणु (संक्रामक क्लोरोसिस)"
    },
    "cf": 0.94,
    "treatment": {
      "organic": {
        "en": "Spray Neem oil (5 ml/L) or 5% NSKE to control aphid vector; rogue and destroy infected banana plants and suckers.",
        "hi": "वाहक एफिड कीट रोकने हेतु नीम तेल (5 मिली/लीटर) छिड़कें; विषाणु ग्रसित पौधों को सकर्स सहित उखाड़कर नष्ट करें।"
      },
      "chemical": {
        "en": "Spray Dimethoate 30% EC @ 1.7 ml/L or Imidacloprid 17.8% SL @ 0.3 ml/L around pseudostem and leaf axils.",
        "hi": "तने और पत्ती के जोड़ पर डाइमेथोएट 1.7 मिली/लीटर या इमिडाक्लोप्रिड 0.3 मिली/लीटर का छिड़काव करें।"
      }
    },
    "prevention": {
      "en": "Use certified virus-tested tissue-cultured plantlets; strictly avoid intercropping with cucurbits, tomato, or brinjal (CMV hosts); eradicate weeds.",
      "hi": "प्रमाणित वायरस-मुक्त टिशू कल्चर पौधे लगाएं; कद्दूवर्गीय सब्जियों, टमाटर या बैंगन के साथ अंतःफसल कभी न लें।"
    },
    "reference": "ICAR-NRCB Tiruchirappalli"
  }
];

const CROPS_METADATA = {
  "wheat": {
    "id": "wheat",
    "icon": "🌾",
    "name": {
      "en": "Wheat",
      "hi": "गेहूं"
    },
    "botanical": "Triticum aestivum",
    "subtitle": {
      "en": "Staple Rabi cereal crop",
      "hi": "प्रमुख रबी खाद्यान्न फसल"
    },
    "image": "images/crops/wheat.jpg",
    "badge": {
      "en": "Rabi Season",
      "hi": "रबी फसल"
    },
    "seasonCategory": [
      "rabi"
    ],
    "diseasesCount": 8,
    "category": "cereals"
  },
  "soybean": {
    "id": "soybean",
    "icon": "🌱",
    "name": {
      "en": "Soybean",
      "hi": "सोयाबीन"
    },
    "botanical": "Glycine max",
    "subtitle": {
      "en": "Kharif oilseed & pulse",
      "hi": "प्रमुख खरीफ तिलहनी फसल"
    },
    "image": "images/crops/soybean.jpg",
    "badge": {
      "en": "Kharif Season",
      "hi": "खरीफ फसल"
    },
    "seasonCategory": [
      "kharif"
    ],
    "diseasesCount": 6,
    "category": "oilseeds"
  },
  "tomato": {
    "id": "tomato",
    "icon": "🍅",
    "name": {
      "en": "Tomato",
      "hi": "टमाटर"
    },
    "botanical": "Solanum lycopersicum",
    "subtitle": {
      "en": "Fresh vegetable vine crop",
      "hi": "उच्च मूल्यवान सब्जी फसल"
    },
    "image": "images/crops/tomato.jpg",
    "badge": {
      "en": "Vegetable",
      "hi": "सब्जी फसल"
    },
    "seasonCategory": [
      "rabi",
      "kharif",
      "annual"
    ],
    "diseasesCount": 5,
    "category": "vegetables"
  },
  "cotton": {
    "id": "cotton",
    "icon": "☁️",
    "name": {
      "en": "Cotton",
      "hi": "कपास"
    },
    "botanical": "Gossypium hirsutum",
    "subtitle": {
      "en": "Fibre cash crop (White gold)",
      "hi": "सफेद सोना - नकदी फसल"
    },
    "image": "images/crops/cotton.jpg",
    "badge": {
      "en": "Cash Crop",
      "hi": "नकदी फसल"
    },
    "seasonCategory": [
      "kharif"
    ],
    "diseasesCount": 6,
    "category": "cash"
  },
  "rice": {
    "id": "rice",
    "icon": "🌾",
    "name": {
      "en": "Rice (Paddy)",
      "hi": "धान / चावल"
    },
    "botanical": "Oryza sativa",
    "subtitle": {
      "en": "Monsoon wetland paddy crop",
      "hi": "प्रमुख खरीफ खाद्यान्न फसल"
    },
    "image": "images/crops/rice.jpg",
    "badge": {
      "en": "Kharif Season",
      "hi": "धान फसल"
    },
    "seasonCategory": [
      "kharif"
    ],
    "diseasesCount": 7,
    "category": "cereals"
  },
  "potato": {
    "id": "potato",
    "icon": "🥔",
    "name": {
      "en": "Potato",
      "hi": "आलू"
    },
    "botanical": "Solanum tuberosum",
    "subtitle": {
      "en": "Primary tuber crop in soil",
      "hi": "प्रमुख नकदी कंद फसल"
    },
    "image": "images/crops/potato.jpg",
    "badge": {
      "en": "Tuber Crop",
      "hi": "कंद फसल"
    },
    "seasonCategory": [
      "rabi"
    ],
    "diseasesCount": 6,
    "category": "vegetables"
  },
  "maize": {
    "id": "maize",
    "icon": "🌽",
    "name": {
      "en": "Maize (Corn)",
      "hi": "मक्का"
    },
    "botanical": "Zea mays",
    "subtitle": {
      "en": "Grain & fodder stalk crop",
      "hi": "प्रमुख खाद्यान्न व चारा फसल"
    },
    "image": "images/crops/maize.jpg",
    "badge": {
      "en": "Coarse Cereal",
      "hi": "मोटा अनाज"
    },
    "seasonCategory": [
      "kharif",
      "rabi"
    ],
    "diseasesCount": 6,
    "category": "cereals"
  },
  "chilli": {
    "id": "chilli",
    "icon": "🌶️",
    "name": {
      "en": "Chilli (Pepper)",
      "hi": "मिर्च"
    },
    "botanical": "Capsicum annuum",
    "subtitle": {
      "en": "High-value spice condiment",
      "hi": "मसाला व नकद सब्जी फसल"
    },
    "image": "images/crops/chilli.jpg",
    "badge": {
      "en": "Spice Crop",
      "hi": "मसाला फसल"
    },
    "seasonCategory": [
      "rabi",
      "kharif",
      "annual"
    ],
    "diseasesCount": 6,
    "category": "vegetables"
  },
  "mustard": {
    "id": "mustard",
    "icon": "🌼",
    "name": {
      "en": "Mustard (Sarson)",
      "hi": "सरसों / तोरिया"
    },
    "botanical": "Brassica juncea",
    "subtitle": {
      "en": "Yellow flower Rabi oilseed",
      "hi": "प्रमुख रबी तिलहनी फसल"
    },
    "image": "images/crops/mustard.jpg",
    "badge": {
      "en": "Rabi Season",
      "hi": "तिलहन फसल"
    },
    "seasonCategory": [
      "rabi"
    ],
    "diseasesCount": 6,
    "category": "oilseeds"
  },
  "sugarcane": {
    "id": "sugarcane",
    "icon": "🎋",
    "name": {
      "en": "Sugarcane",
      "hi": "गन्ना"
    },
    "botanical": "Saccharum officinarum",
    "subtitle": {
      "en": "Major commercial cash crop",
      "hi": "प्रमुख व्यावसायिक नकदी फसल"
    },
    "image": "images/crops/sugarcane.jpg",
    "badge": {
      "en": "Cash Crop",
      "hi": "नकदी फसल"
    },
    "category": "cash",
    "seasonCategory": [
      "rabi",
      "kharif",
      "annual"
    ],
    "diseasesCount": 6
  },
  "groundnut": {
    "id": "groundnut",
    "icon": "🥜",
    "name": {
      "en": "Groundnut (Peanut)",
      "hi": "मूंगफली"
    },
    "botanical": "Arachis hypogaea",
    "subtitle": {
      "en": "Key oilseed & cash legume",
      "hi": "प्रमुख तिलहन व दलहनी फसल"
    },
    "image": "images/crops/groundnut.jpg",
    "badge": {
      "en": "Oilseed Crop",
      "hi": "तिलहन फसल"
    },
    "category": "oilseeds",
    "seasonCategory": [
      "kharif",
      "zaid"
    ],
    "diseasesCount": 6
  },
  "chickpea": {
    "id": "chickpea",
    "icon": "🌱",
    "name": {
      "en": "Chickpea (Gram / Chana)",
      "hi": "चना / छोला"
    },
    "botanical": "Cicer arietinum",
    "subtitle": {
      "en": "Premier Rabi pulse crop",
      "hi": "प्रमुख रबी दलहन फसल"
    },
    "image": "images/crops/chickpea.jpg",
    "badge": {
      "en": "Pulse Crop",
      "hi": "दलहन फसल"
    },
    "category": "pulses",
    "seasonCategory": [
      "rabi"
    ],
    "diseasesCount": 6
  },
  "pigeonpea": {
    "id": "pigeonpea",
    "icon": "🌿",
    "name": {
      "en": "Pigeon Pea (Tur / Arhar)",
      "hi": "अरहर / तुअर"
    },
    "botanical": "Cajanus cajan",
    "subtitle": {
      "en": "High-protein Kharif pulse",
      "hi": "प्रमुख खरीफ प्रोटीन दलहन"
    },
    "image": "images/crops/pigeonpea.jpg",
    "badge": {
      "en": "Pulse Crop",
      "hi": "दलहन फसल"
    },
    "category": "pulses",
    "seasonCategory": [
      "kharif"
    ],
    "diseasesCount": 6
  },
  "onion": {
    "id": "onion",
    "icon": "🧅",
    "name": {
      "en": "Onion",
      "hi": "प्याज"
    },
    "botanical": "Allium cepa",
    "subtitle": {
      "en": "High-value commercial bulb",
      "hi": "प्रमुख कंदवर्गीय सब्जी फसल"
    },
    "image": "images/crops/onion.jpg",
    "badge": {
      "en": "Vegetable",
      "hi": "सब्जी फसल"
    },
    "category": "vegetables",
    "seasonCategory": [
      "rabi",
      "kharif"
    ],
    "diseasesCount": 6
  },
  "brinjal": {
    "id": "brinjal",
    "icon": "🍆",
    "name": {
      "en": "Brinjal (Eggplant)",
      "hi": "बैंगन"
    },
    "botanical": "Solanum melongena",
    "subtitle": {
      "en": "Year-round solanaceous crop",
      "hi": "सदाबहार सब्जी फसल"
    },
    "image": "images/crops/brinjal.jpg",
    "badge": {
      "en": "Vegetable",
      "hi": "सब्जी फसल"
    },
    "category": "vegetables",
    "seasonCategory": [
      "rabi",
      "kharif",
      "annual"
    ],
    "diseasesCount": 6
  },
  "okra": {
    "id": "okra",
    "icon": "🥬",
    "name": {
      "en": "Okra (Bhindi)",
      "hi": "भिंडी"
    },
    "botanical": "Abelmoschus esculentus",
    "subtitle": {
      "en": "Tender green pod vegetable",
      "hi": "लोकप्रिय हरी सब्जी फसल"
    },
    "image": "images/crops/okra.jpg",
    "badge": {
      "en": "Vegetable",
      "hi": "सब्जी फसल"
    },
    "category": "vegetables",
    "seasonCategory": [
      "kharif",
      "zaid"
    ],
    "diseasesCount": 6
  },
  "banana": {
    "id": "banana",
    "icon": "🍌",
    "name": {
      "en": "Banana",
      "hi": "केला"
    },
    "botanical": "Musa acuminata",
    "subtitle": {
      "en": "Perennial high-yield fruit",
      "hi": "प्रमुख बारहमासी फल फसल"
    },
    "image": "images/crops/banana.jpg",
    "badge": {
      "en": "Fruit Crop",
      "hi": "फल फसल"
    },
    "category": "fruits",
    "seasonCategory": [
      "annual"
    ],
    "diseasesCount": 6
  }
};

const SYMPTOMS_METADATA = {
  "yellow_pustules_stripes": {
    "icon": "🟡",
    "label": {
      "en": "Bright yellow pustules arranged in linear stripes on leaves",
      "hi": "पत्तियों पर कतारबद्ध चमकीली पीली धारियां/फफोले"
    },
    "question": {
      "en": "Do you see bright yellow powder or pustules forming long stripes along the leaf veins?",
      "hi": "क्या पत्तियों की नसों के समानांतर लंबी पीली धारियों में पाउडर या फफोले दिख रहे हैं?"
    }
  },
  "chlorotic_leaves": {
    "icon": "🍃",
    "label": {
      "en": "Pale chlorotic yellowing of foliage",
      "hi": "पत्तियों का पीला पड़ना (क्लोरोसिस)"
    },
    "question": {
      "en": "Are the crop leaves turning abnormally pale or yellowish?",
      "hi": "क्या फसल की पत्तियां सामान्य से अधिक पीली पड़ रही हैं?"
    }
  },
  "cool_humid_weather": {
    "icon": "❄️",
    "label": {
      "en": "Cool temperature (10-18°C) with persistent fog or morning dew",
      "hi": "ठंडा मौसम (10-18°C) और लगातार कोहरा या ओस"
    },
    "question": {
      "en": "Has the weather recently been cold and foggy with heavy morning dew?",
      "hi": "क्या हाल ही में मौसम ठंडा, कोहरे वाला और भारी ओस युक्त रहा है?"
    }
  },
  "yellow_powder_rubbing_off": {
    "icon": "✋",
    "label": {
      "en": "Yellow powder rubs off onto fingers or clothes when touched",
      "hi": "पत्ती छूने पर उंगलियों पर पीला पाउडर चिपकना"
    },
    "question": {
      "en": "When you touch or rub the leaf, does yellow powder stick to your fingers?",
      "hi": "क्या पत्ती को छूने पर उंगलियों पर पीला पाउडर लग जाता है?"
    }
  },
  "linear_stripes_parallel_veins": {
    "icon": "📏",
    "label": {
      "en": "Stripes strictly parallel to leaf veins",
      "hi": "पत्तियों की नसों के समानांतर धारियां"
    },
    "question": {
      "en": "Are the yellow spots strictly confined to parallel stripes along the veins?",
      "hi": "क्या पीले धब्बे नसों के समानांतर लंबी रेखाओं में सीमित हैं?"
    }
  },
  "orange_brown_scattered_pustules": {
    "icon": "🟤",
    "label": {
      "en": "Orange-brown round/oval pustules scattered randomly across leaves",
      "hi": "पत्तियों पर अनियमित रूप से बिखरे नारंगी-भूरे गोल फफोले"
    },
    "question": {
      "en": "Are there reddish-brown or orange powdery pustules scattered randomly over the leaf blade?",
      "hi": "क्या पत्ती की सतह पर नारंगी-भूरे रंग के बिखरे हुए फफोले दिखाई दे रहे हैं?"
    }
  },
  "round_oval_leaf_spots": {
    "icon": "⭕",
    "label": {
      "en": "Round to oval scattered spots without linear pattern",
      "hi": "गोल या अंडाकार बिखरे हुए धब्बे"
    },
    "question": {
      "en": "Are the spots circular or oval rather than forming lines?",
      "hi": "क्या धब्बे धारियों के बजाय गोल या अंडाकार आकार के हैं?"
    }
  },
  "warm_moist_weather": {
    "icon": "🌡️",
    "label": {
      "en": "Relatively warm temperature (20-25°C) with high humidity",
      "hi": "गर्म व नम मौसम (20-25°C)"
    },
    "question": {
      "en": "Has the daytime temperature warmed up (above 20°C) with humid conditions?",
      "hi": "क्या दिन का तापमान बढ़कर गर्म (20°C से ऊपर) और उमस भरा हो गया है?"
    }
  },
  "brown_pustules_underside_leaf": {
    "icon": "🍃",
    "label": {
      "en": "Brown pustules prominently visible on underside of leaves",
      "hi": "पत्ती के निचले हिस्से पर भूरे फफोले"
    },
    "question": {
      "en": "Are the brown powdery spots visible on the underside of the leaves?",
      "hi": "क्या पत्ती को पलटने पर उसके निचले हिस्से पर भी भूरे धब्बे दिखते हैं?"
    }
  },
  "premature_leaf_drying": {
    "icon": "🍂",
    "label": {
      "en": "Premature drying and withering of leaves from tip backwards",
      "hi": "पत्तियों का समय से पहले सूखना"
    },
    "question": {
      "en": "Are leaves drying up and withering earlier than usual?",
      "hi": "क्या पत्तियां समय से पहले ही सूखकर मुरझाने लगी हैं?"
    }
  },
  "earhead_black_powder": {
    "icon": "🌾",
    "label": {
      "en": "Entire earhead transformed into loose black powdery mass",
      "hi": "पूरी बाली काले चूर्ण में बदल जाना"
    },
    "question": {
      "en": "Has the wheat earhead turned into a loose black sooty powder instead of healthy grain?",
      "hi": "क्या गेहूं की पूरी बाली दानों के बजाय काले कोयले जैसे चूर्ण में बदल गई है?"
    }
  },
  "grain_converted_sooty_mass": {
    "icon": "⚫",
    "label": {
      "en": "Grain spikelets replaced by olive-black spores",
      "hi": "दानों की जगह काले फफूंद के बीजाणु"
    },
    "question": {
      "en": "Have the individual spikelets been replaced by black dust that blows away in the wind?",
      "hi": "क्या दानों की जगह काला पाउडर बन गया है जो हवा में उड़ता है?"
    }
  },
  "flowering_stage_damage": {
    "icon": "🌸",
    "label": {
      "en": "Symptoms noticed right upon earhead emergence at flowering",
      "hi": "फूल आने और बाली निकलने पर ही लक्षण दिखना"
    },
    "question": {
      "en": "Did these black earheads appear right as the heads emerged from the boot leaf?",
      "hi": "क्या बालियां निकलते ही यह कालापन तुरंत दिखाई दिया?"
    }
  },
  "fishy_foul_odor_grains": {
    "icon": "🐟",
    "label": {
      "en": "Foul rotten-fish odor from infected grain heads",
      "hi": "दानों से सड़ी मछली जैसी दुर्गंध आना"
    },
    "question": {
      "en": "Do the crushed grains emit a strong rotten fish smell (trimethylamine odor)?",
      "hi": "क्या दानों को मसलने पर सड़ी मछली जैसी तीखी बदबू आती है?"
    }
  },
  "partial_blackening_grains": {
    "icon": "🌓",
    "label": {
      "en": "Grains partially converted to black powder inside husk",
      "hi": "दानों का आंशिक रूप से काला पड़ना"
    },
    "question": {
      "en": "Are only parts of the grain converted into black powder while the rest looks normal?",
      "hi": "क्या दाने का केवल कुछ हिस्सा काला पड़ा है और बाकी सामान्य दिखता है?"
    }
  },
  "canoeing_grain_shape": {
    "icon": "🛶",
    "label": {
      "en": "Grains swollen, split open into canoe/boat shape with black cavity",
      "hi": "दाने का नाव के आकार में फटना और काला खोखलापन"
    },
    "question": {
      "en": "Have infected grains split open along the crease looking like a small boat or canoe?",
      "hi": "क्या दाने बीच से फटकर छोटी नाव जैसे आकार के हो गए हैं?"
    }
  },
  "white_cottony_powdery_patches": {
    "icon": "⚪",
    "label": {
      "en": "White cottony or flour-like powdery coating on leaves",
      "hi": "पत्तियों पर सफेद आटे जैसा चूर्ण"
    },
    "question": {
      "en": "Is there a white talcum or flour-like powdery coating spreading across the upper leaf surface?",
      "hi": "क्या पत्तियों पर सफेद आटे या टैल्कम पाउडर जैसी परत बिछी हुई है?"
    }
  },
  "leaf_sheath_powder": {
    "icon": "🌿",
    "label": {
      "en": "Powder spreading onto leaf sheaths and stems",
      "hi": "पत्ती के तने और आवरण पर भी सफेद पाउडर"
    },
    "question": {
      "en": "Is the powdery coating spreading onto the leaf sheaths and main stem?",
      "hi": "क्या यह सफेद पाउडर पत्ती के तने और आवरण तक भी फैल रहा है?"
    }
  },
  "cloudy_cool_weather": {
    "icon": "☁️",
    "label": {
      "en": "Overcast, cloudy weather with shade and cool breeze",
      "hi": "बादल छाए रहना और छायादार ठंडा मौसम"
    },
    "question": {
      "en": "Has the crop had prolonged cloudy, shaded, and cool conditions?",
      "hi": "क्या खेत में लंबे समय से बादल और छायादार ठंडा मौसम बना हुआ है?"
    }
  },
  "green_black_tiny_insects_cluster": {
    "icon": "🐛",
    "label": {
      "en": "Dense colonies of tiny green or black soft-bodied insects on tillers/ears",
      "hi": "बालियों या तनों पर छोटे हरे/काले कीड़ों का झुंड (माहू)"
    },
    "question": {
      "en": "Do you see dense clusters of tiny green or black soft insects crawling on the ears and stems?",
      "hi": "क्या बालियों और तनों पर छोटे हरे या काले कीड़ों (माहू) का जमावड़ा दिख रहा है?"
    }
  },
  "sticky_honeydew_leaves": {
    "icon": "🍯",
    "label": {
      "en": "Sticky shiny honey-like fluid (honeydew) deposited on leaves",
      "hi": "पत्तियों पर चिपचिपा रस (हनीड्यू)"
    },
    "question": {
      "en": "Are the leaves sticky and glossy with sweet fluid excreted by insects?",
      "hi": "क्या पत्तियां चिपचिपी और चमकदार रस से सनी हुई महसूस हो रही हैं?"
    }
  },
  "earhead_sap_sucking": {
    "icon": "🌾",
    "label": {
      "en": "Insects actively sucking sap from developing milky grain heads",
      "hi": "दूधिया दानों से कीड़ों द्वारा रस चूसना"
    },
    "question": {
      "en": "Are insects crowding inside the earheads sucking sap from the milky grains?",
      "hi": "क्या कीड़े बालियों के अंदर दूधिया दानों का रस चूस रहे हैं जिससे दाने पिचक रहे हैं?"
    }
  },
  "yellow_green_mottled_leaves": {
    "icon": "🎨",
    "label": {
      "en": "Mosaic pattern of alternating bright yellow and green patches on leaves",
      "hi": "पत्तियों पर चमकीले पीले और हरे रंग के चितकबरे धब्बे (मोज़ेक)"
    },
    "question": {
      "en": "Do the soybean leaves show an irregular mosaic pattern of bright yellow and dark green patches?",
      "hi": "क्या सोयाबीन की पत्तियों पर पीले और गहरे हरे रंग का चितकबरा (मोज़ेक) डिज़ाइन दिख रहा है?"
    }
  },
  "wrinkled_puckered_leaves": {
    "icon": "🥬",
    "label": {
      "en": "Crinkled, puckered, or blistered leaf surface with reduced size",
      "hi": "पत्तियों की सतह पर सिकुड़न और फफोलेनुमा उभार"
    },
    "question": {
      "en": "Are young leaves twisted, wrinkled, puckered, or reduced in size?",
      "hi": "क्या नई पत्तियां सिकुड़ी हुई, झुर्रीदार और आकार में छोटी हो गई हैं?"
    }
  },
  "stunted_plant_growth": {
    "icon": "📉",
    "label": {
      "en": "Severe stunting of entire plant with few or empty pods",
      "hi": "पौधे का बौना रह जाना और फलियां न बनना"
    },
    "question": {
      "en": "Is the infected plant severely stunted with shortened nodes and few pods?",
      "hi": "क्या प्रभावित पौधे की बढ़वार रुक गई है और वह बौना रह गया है?"
    }
  },
  "whitefly_presence_underside_leaf": {
    "icon": "🪰",
    "label": {
      "en": "Tiny white flying insects fluttering when plant is shaken",
      "hi": "पौधा हिलाने पर उड़ती हुई छोटी सफेद मक्खियां"
    },
    "question": {
      "en": "When you gently shake the plant, do tiny white insects fly up from under the leaves?",
      "hi": "क्या पौधे को हिलाने पर पत्तियों के नीचे से नन्ही सफेद मक्खियां उड़ती हैं?"
    },
    "category": "pest"
  },
  "yellow_patches_foliage": {
    "icon": "🟡",
    "label": {
      "en": "Irregular bright yellow patches appearing across canopy foliage",
      "hi": "कैनोपी पर अनियमित चमकीले पीले धब्बे"
    },
    "question": {
      "en": "Are there scattered bright yellow patches appearing on the crop foliage?",
      "hi": "क्या पत्तियों पर बिखरे हुए चमकीले पीले धब्बे दिखाई दे रहे हैं?"
    }
  },
  "minute_brown_volcano_pustules": {
    "icon": "🌋",
    "label": {
      "en": "Tiny pinpoint volcano-shaped brown pustules on leaf underside",
      "hi": "पत्ती के नीचे नन्हे ज्वालामुखी जैसे भूरे फफोले"
    },
    "question": {
      "en": "Under a lens, do you see tiny raised volcano-like brown specks on the lower leaf surface?",
      "hi": "क्या पत्ती के निचले हिस्से पर नन्हे उभरे हुए भूरे दाने या फफोले दिख रहे हैं?"
    }
  },
  "leaves_turn_bronze_fall": {
    "icon": "🍁",
    "label": {
      "en": "Foliage turns bronze, dries crisp, and sheds prematurely",
      "hi": "पत्तियां तांबई/कत्थई होकर सूखना और झड़ना"
    },
    "question": {
      "en": "Are the leaves turning a distinct copper or bronze color and dropping off rapidly?",
      "hi": "क्या पत्तियां तांबे के रंग जैसी होकर सूख रही हैं और तेजी से झड़ रही हैं?"
    }
  },
  "humid_warm_monsoon": {
    "icon": "🌧️",
    "label": {
      "en": "Warm monsoon rains with extended canopy leaf wetness (>6 hrs)",
      "hi": "मानसून की नमी और पत्तियों का लंबे समय तक गीला रहना"
    },
    "question": {
      "en": "Has there been continuous monsoon drizzle keeping leaves wet for hours?",
      "hi": "क्या मानसूनी बारिश के कारण पत्तियां घंटों तक गीली बनी रहती हैं?"
    }
  },
  "premature_defoliation": {
    "icon": "🍂",
    "label": {
      "en": "Severe premature leaf drop leaving bare stems with immature pods",
      "hi": "समय से पहले पत्तियों का भारी रूप से झड़ जाना"
    },
    "question": {
      "en": "Is the soybean plant dropping most of its leaves before the pods have matured?",
      "hi": "क्या फलियां पकने से पहले ही पौधे की ज्यादातर पत्तियां झड़ चुकी हैं?"
    }
  },
  "rusty_powder_underside_leaf": {
    "icon": "🟫",
    "label": {
      "en": "Rust-brown powder rubbing onto hand from lower leaf surface",
      "hi": "पत्ती के नीचे से रतुआ जैसा भूरा पाउडर छूटना"
    },
    "question": {
      "en": "Does a rust-brown powder dust off when you rub the underside of older leaves?",
      "hi": "क्या पुरानी पत्तियों के नीचे रगड़ने पर जंग जैसा भूरा पाउडर हाथ पर लगता है?"
    }
  },
  "ashy_grey_stem_discoloration": {
    "icon": "🪵",
    "label": {
      "en": "Ashy grey discoloration of the lower stem and taproot",
      "hi": "तने के निचले भाग और जड़ का राख जैसा धूसर होना"
    },
    "question": {
      "en": "Does the lower stem near the soil line look ashy grey with peeling bark?",
      "hi": "क्या जमीन के पास तने का निचला हिस्सा राख जैसे धूसर रंग का दिखाई दे रहा है?"
    }
  },
  "pith_decay_black_specks": {
    "icon": "🔬",
    "label": {
      "en": "Split stem shows shredded pith embedded with tiny black pepper specks",
      "hi": "चीरा लगाने पर तने के अंदर काली मिर्च जैसे दाने (माइक्रोस्क्लेरोशिया)"
    },
    "question": {
      "en": "When you split open the lower stem, is the inside pith dry, hollow, and full of tiny black specks?",
      "hi": "क्या तने को बीच से चीरने पर अंदर सूखा खोखलापन और काली मिर्च जैसे नन्हे दाने दिखते हैं?"
    }
  },
  "post_flowering_drought": {
    "icon": "☀️",
    "label": {
      "en": "Extended hot dry spell with high soil temperatures post-flowering",
      "hi": "फूल आने के बाद सूखा और जमीन का अत्यधिक तपना"
    },
    "question": {
      "en": "Has the crop experienced prolonged drought and intense heat during pod filling?",
      "hi": "क्या फलियां बनते समय बारिश न होने से खेत में सूखा और तेज धूप रही है?"
    }
  },
  "black_sunken_lesions_pods": {
    "icon": "🫘",
    "label": {
      "en": "Dark brown to black sunken circular spots on pods and stems",
      "hi": "फलियों पर गहरे भूरे/काले धंसे हुए गड्ढेनुमा धब्बे"
    },
    "question": {
      "en": "Are there dark sunken lesions or black spots with tiny bristles on the green pods?",
      "hi": "क्या हरी फलियों पर काले धंसे हुए गोल धब्बे दिख रहे हैं?"
    }
  },
  "twigs_die_back": {
    "icon": "🥀",
    "label": {
      "en": "Die-back of branch tips drying downwards",
      "hi": "शाखाओं के ऊपरी सिरों का ऊपर से नीचे की ओर सूखना"
    },
    "question": {
      "en": "Are the upper tips of branches drying and dying backwards toward the stem?",
      "hi": "क्या टहनियां ऊपरी सिरे से नीचे की ओर सूखती जा रही हैं?"
    }
  },
  "poor_seed_filling": {
    "icon": "🫛",
    "label": {
      "en": "Pods are deformed, flat, seedless or produce shriveled discolored seeds",
      "hi": "फलियों में दाने न भरना या दाने सिकुड़े व काले होना"
    },
    "question": {
      "en": "Are the pods failing to fill seeds or containing shriveled, moldy beans?",
      "hi": "क्या फलियों में दाने नहीं बन रहे हैं या दाने छोटे और सिकुड़े हुए हैं?"
    }
  },
  "ring_cut_stem_girdle": {
    "icon": "⭕",
    "label": {
      "en": "Two parallel circular ring cuts girdling the stem or petiole",
      "hi": "तने या पत्ती की डंडी पर दो समानांतर गोल छल्लेदार कट"
    },
    "question": {
      "en": "Do you see neat circular ring cuts girdling the stem or leaf stalk like a bracelet?",
      "hi": "क्या तने या पत्ती की डंडी पर चूड़ी जैसे गोल कटे हुए छल्ले दिखाई दे रहे हैं?"
    }
  },
  "wilting_upper_trifoliate": {
    "icon": "🥀",
    "label": {
      "en": "Sudden wilting and drooping of leaves above the girdled ring",
      "hi": "छल्ले के ऊपर की पत्तियों का अचानक मुरझाना"
    },
    "question": {
      "en": "Are the leaves strictly above the girdled ring wilting while lower leaves remain green?",
      "hi": "क्या कटे हुए छल्ले के ठीक ऊपर की पत्तियां लटककर सूख रही हैं जबकि नीचे की हरी हैं?"
    }
  },
  "hollow_stem_larva": {
    "icon": "🐛",
    "label": {
      "en": "White/yellowish grub boring tunnel inside the central stem pith",
      "hi": "तने के अंदर सुरंग बनाकर खाती हुई सफेद/पीली इल्ली"
    },
    "question": {
      "en": "If you split the stem lengthwise, do you find a small whitish grub tunneling inside?",
      "hi": "क्या तने को लंबाई में काटने पर अंदर सुरंग में छुपी छोटी इल्ली मिलती है?"
    }
  },
  "concentric_rings_target_spots": {
    "icon": "🎯",
    "label": {
      "en": "Concentric dark rings creating a target-board bullseye pattern on spots",
      "hi": "धब्बों के अंदर गोल छल्ले (निशानेबाजी के बोर्ड जैसा बुल-आई आकार)"
    },
    "question": {
      "en": "Do the brown leaf spots have distinct concentric target-board like rings inside them?",
      "hi": "क्या भूरे धब्बों के अंदर गोल छल्ले बने हैं जैसे निशाने लगाने वाला बोर्ड होता है?"
    }
  },
  "lower_leaves_affected": {
    "icon": "🌱",
    "label": {
      "en": "Symptoms start on oldest lower leaves and progress upwards",
      "hi": "रोग की शुरुआत सबसे निचली पुरानी पत्तियों से होना"
    },
    "question": {
      "en": "Did the spotting start first on the bottom-most leaves touching or near the soil?",
      "hi": "क्या धब्बे सबसे पहले पौधे के निचले हिस्से की पुरानी पत्तियों पर शुरू हुए?"
    }
  },
  "yellowing_around_spots": {
    "icon": "🟡",
    "label": {
      "en": "Bright yellow halo or chlorotic zone surrounding brown spots",
      "hi": "भूरे धब्बों के चारों ओर पीला घेरा (हेलो)"
    },
    "question": {
      "en": "Is each dark spot surrounded by a prominent yellow ring or yellow leaf tissue?",
      "hi": "क्या गहरे धब्बों के चारों तरफ साफ पीला घेरा बना हुआ है?"
    }
  },
  "brown_circular_spots": {
    "icon": "🟤",
    "label": {
      "en": "Brown circular spots expanding across foliage",
      "hi": "पत्तियों पर फैलते हुए भूरे गोल धब्बे"
    },
    "question": {
      "en": "Are there dark brown circular spots expanding over the leaf surfaces?",
      "hi": "क्या पत्तियों पर भूरे गोल धब्बे तेजी से फैलते जा रहे हैं?"
    }
  },
  "water_soaked_dark_lesions": {
    "icon": "💧",
    "label": {
      "en": "Large irregular water-soaked greasy greenish-black lesions",
      "hi": "गीले, पानी से भीगे जैसे बड़े गहरे काले-हरे धब्बे"
    },
    "question": {
      "en": "Do you see large dark irregular patches that look like they were scalded with boiling water?",
      "hi": "क्या पत्तियों पर उबले पानी से जले जैसे बड़े, गीले और काले-हरे धब्बे हैं?"
    }
  },
  "white_cottony_mold_underside": {
    "icon": "☁️",
    "label": {
      "en": "Delicate white fuzzy fungal mold on the underside of dark lesions in humid mornings",
      "hi": "सुबह के समय धब्बों के नीचे सफेद रोयेंदार फफूंद"
    },
    "question": {
      "en": "In early morning dampness, do you see a delicate white fuzz or mold under the dark spots?",
      "hi": "क्या सुबह की नमी में पत्तियों के नीचे काले धब्बों पर सफेद रोईं जैसी फफूंद दिखती है?"
    }
  },
  "rapid_foliage_rot_cold_fog": {
    "icon": "❄️",
    "label": {
      "en": "Entire plant rapidly collapsing into brown-black rot during cold, foggy spells",
      "hi": "ठंड और कोहरे में पूरे पौधे का तेजी से सड़कर झुलस जाना"
    },
    "question": {
      "en": "Did whole branches turn black, rot, and collapse within 2-3 days during cool foggy weather?",
      "hi": "क्या कोहरे और ठंड के दौरान 2-3 दिन में ही पूरे पौधे सड़कर काले पड़ गए हैं?"
    }
  },
  "fruit_brown_leathery_rot": {
    "icon": "🍅",
    "label": {
      "en": "Firm, leathery, dark brown or greasy decay on green/ripe fruits",
      "hi": "टमाटर के फल पर सख्त, चमड़े जैसा गहरा भूरा सड़ांध"
    },
    "question": {
      "en": "Are green or ripe tomatoes developing large, firm, greasy brown leathery patches?",
      "hi": "क्या टमाटर के फलों पर सख्त, चमड़े जैसा गहरा भूरा सड़ा हुआ धब्बा बन रहा है?"
    }
  },
  "upward_curling_leaves": {
    "icon": "🔄",
    "label": {
      "en": "Severe upward rolling and curling of leaf margins into cup shapes",
      "hi": "पत्तियों के किनारों का ऊपर की ओर मुड़कर कटोरी जैसा बनना"
    },
    "question": {
      "en": "Are the leaf margins curled tightly upward, making the leaves look like little cups or spoons?",
      "hi": "क्या पत्तियों के किनारे ऊपर की ओर मुड़कर कटोरी या चम्मच जैसे हो गए हैं?"
    }
  },
  "thick_leathery_stunted_leaves": {
    "icon": "🍃",
    "label": {
      "en": "Curled leaves become thick, brittle, leathery and diminutive",
      "hi": "पत्तियों का मोटा, कड़ा, चमड़े जैसा और छोटा होना"
    },
    "question": {
      "en": "Do the curled leaves feel unusually thick, leathery, and brittle when bent?",
      "hi": "क्या मुड़ी हुई पत्तियां छूने में मोटी, कड़क और मुड़ने पर टूटने जैसी लगती हैं?"
    }
  },
  "bushy_stunted_growth": {
    "icon": "🌳",
    "label": {
      "en": "Severely stunted plant with dense cluster of tiny branches (witch's broom)",
      "hi": "पौधे का बौना होकर झाड़ी जैसा घना हो जाना"
    },
    "question": {
      "en": "Has the tomato plant stopped upward growth and become a compact, bushy dwarf?",
      "hi": "क्या पौधे की ऊपर की बढ़वार बंद हो गई है और वह एक छोटी झाड़ी जैसा बन गया है?"
    }
  },
  "sudden_green_wilting": {
    "icon": "🥀",
    "label": {
      "en": "Rapid wilting of entire plant while leaves remain completely green",
      "hi": "पत्तियों के हरे रहते ही पूरे पौधे का अचानक मुरझाना"
    },
    "question": {
      "en": "Did the whole plant suddenly wilt and collapse overnight while its leaves were still green?",
      "hi": "क्या हरा-भरा पौधा बिना पत्तियां पीली पड़े अचानक 1-2 दिन में ही मुरझाकर गिर गया?"
    }
  },
  "white_bacterial_ooze_stem": {
    "icon": "🧪",
    "label": {
      "en": "White milky bacterial slime streaming from stem cut in clear water (ooze test)",
      "hi": "तने को पानी में डुबाने पर दूध जैसी सफेद धार निकलना (ऊज टेस्ट)"
    },
    "question": {
      "en": "When a freshly cut lower stem is placed in a glass of clear water, do white milky threads stream out?",
      "hi": "क्या ताजे कटे तने को साफ पानी के गिलास में लटकाने पर दूधिया सफेद धार बहती दिखती है?"
    }
  },
  "vascular_browning_stem": {
    "icon": "🪵",
    "label": {
      "en": "Internal vascular water tubes inside the stem show dark brown discoloration",
      "hi": "तने के अंदरूनी नसों (जाइलम) का भूरा पड़ना"
    },
    "question": {
      "en": "When you slice into the lower stem, are the internal vascular rings stained dark brown?",
      "hi": "क्या तने को छीलने पर अंदर की पानी ले जाने वाली नसें गहरे भूरे रंग की दिखती हैं?"
    }
  },
  "circular_boreholes_fruit": {
    "icon": "🕳️",
    "label": {
      "en": "Circular entry boreholes drilled into tomato fruits with caterpillar frass",
      "hi": "टमाटर के फल में गोल छेद और इल्ली का मल"
    },
    "question": {
      "en": "Do you see neat round boreholes drilled into the green or ripe tomato fruits?",
      "hi": "क्या टमाटर के फलों में गोल छेद दिख रहे हैं जिनके आसपास कीड़े की विष्ठा है?"
    }
  },
  "caterpillar_feeding_fruits": {
    "icon": "🐛",
    "label": {
      "en": "Green or brownish striped caterpillar found with head buried inside fruit",
      "hi": "फल के अंदर मुंह घुसाकर खाती हुई धारीदार इल्ली"
    },
    "question": {
      "en": "Have you spotted a striped caterpillar feeding with its front half burrowed inside a fruit?",
      "hi": "क्या फल के छेद में आधी घुसी हुई हरी या भूरी धारीदार इल्ली नजर आई है?"
    }
  },
  "premature_fruit_drop": {
    "icon": "🍅",
    "label": {
      "en": "Bored and damaged green fruits dropping prematurely onto soil",
      "hi": "छेदे हुए कच्चे फलों का टूटकर जमीन पर गिरना"
    },
    "question": {
      "en": "Are damaged immature green fruits dropping heavily from the vines?",
      "hi": "क्या कीड़े लगे कच्चे टमाटर पकने से पहले ही जमीन पर गिर रहे हैं?"
    }
  },
  "flower_bud_shedding": {
    "icon": "🥀",
    "label": {
      "en": "Flower buds chewed and dropping before setting fruit",
      "hi": "फूलों की कलियों का कटकर गिर जाना"
    },
    "question": {
      "en": "Are flower buds being eaten away and dropping before tomatoes can set?",
      "hi": "क्या फूल आने से पहले ही कलियां कट-कट कर गिर रही हैं?"
    }
  },
  "rosetted_flowers": {
    "icon": "🌸",
    "label": {
      "en": "Flowers unable to open normally, twisted into closed rose-bud shape (rosetting)",
      "hi": "फूलों का पूरी तरह न खिलना, गुलाब जैसी बंद कली (रोसेट) बनना"
    },
    "question": {
      "en": "Are the cotton flowers twisted and trapped shut looking like closed rosebuds?",
      "hi": "क्या कपास के फूल सामान्य खिलने के बजाय गुलाब की बंद कली जैसे मुड़े हुए हैं?"
    }
  },
  "entry_hole_boll_interlocking_fibers": {
    "icon": "🧶",
    "label": {
      "en": "Tiny entry hole in boll sealed shut; stained fiber strands stuck together inside",
      "hi": "टिंडे पर सूक्ष्म छेद और अंदर सने हुए आपस में चिपके रेशे"
    },
    "question": {
      "en": "Are developing bolls showing tiny holes, with the cotton fiber stained yellow-brown and webbed together?",
      "hi": "क्या टिंडों (बॉल्स) में छेद हैं और अंदर की रुई पीली-भूरी होकर आपस में चिपक गई है?"
    }
  },
  "pinkish_caterpillar_inside": {
    "icon": "🐛",
    "label": {
      "en": "Small pinkish or cream larva feeding on seeds inside split boll",
      "hi": "टिंडे को खोलने पर अंदर गुलाबी रंग की नन्हीं इल्ली"
    },
    "question": {
      "en": "When you open an infected green boll, do you find a pink-colored caterpillar eating the seeds?",
      "hi": "क्या टिंडे को चीरने पर अंदर बीजों को खाती हुई गुलाबी रंग की इल्ली मिलती है?"
    }
  },
  "stunted_boll_drop": {
    "icon": "📉",
    "label": {
      "en": "Premature shedding of young bolls and squares (buds)",
      "hi": "छोटे टिंडों और कलियों (स्क्वायर) का समय से पहले गिरना"
    },
    "question": {
      "en": "Are young green bolls and squares dropping heavily onto the ground?",
      "hi": "क्या छोटे कच्चे टिंडे और कलियां भारी मात्रा में टूटकर गिर रहे हैं?"
    }
  },
  "upward_curling_cotton_leaves": {
    "icon": "🔄",
    "label": {
      "en": "Upward curling and crinkling of cotton leaf margins",
      "hi": "कपास की पत्तियों के किनारों का ऊपर की ओर मुड़ना"
    },
    "question": {
      "en": "Are cotton leaves curling upward at the edges with wrinkled veins?",
      "hi": "क्या कपास की पत्तियां किनारों से ऊपर की तरफ मुड़ रही हैं?"
    }
  },
  "enation_leaf_like_outgrowths": {
    "icon": "🌱",
    "label": {
      "en": "Enations (tiny leaf-like leafy outgrowths) emerging from veins under leaves",
      "hi": "पत्ती के निचले हिस्से की नसों पर छोटे पत्ती जैसे उभार (इनेशन)"
    },
    "question": {
      "en": "If you check the underside of leaves, do you see tiny leaf-like leafy flaps growing out of the veins?",
      "hi": "क्या पत्ती के निचले हिस्से में नसों के ऊपर छोटी-छोटी नई पत्तियों जैसे उभार दिख रहे हैं?"
    }
  },
  "thickened_dark_green_veins": {
    "icon": "🌿",
    "label": {
      "en": "Veins appear swollen, thickened, and dark green against pale lamina",
      "hi": "पत्तियों की नसें मोटी, उभरी हुई और गहरे हरे रंग की दिखना"
    },
    "question": {
      "en": "Are the leaf veins noticeably thick, swollen, and dark green?",
      "hi": "क्या पत्तियों की नसें सूजी हुई, असामान्य रूप से मोटी और गहरी हरी हैं?"
    }
  },
  "angular_water_soaked_leaf_spots": {
    "icon": "📐",
    "label": {
      "en": "Angular water-soaked spots bounded sharply by leaf veins",
      "hi": "नसों द्वारा घिरे कोणीय (कोनेदार) गीले धब्बे"
    },
    "question": {
      "en": "Do the leaf spots have sharp geometric angular borders stopped by the veinlets?",
      "hi": "क्या पत्तियों पर बने धब्बे गोल न होकर नसों के बीच कोनेदार ज्यामितीय आकार के हैं?"
    }
  },
  "black_arm_stem_cankers": {
    "icon": "🪵",
    "label": {
      "en": "Black elongated cankers girdling stems and branches causing them to snap (Black Arm)",
      "hi": "तनों और टहनियों पर काले लंबे घाव, जिससे टहनी टूट जाए (ब्लैक आर्म)"
    },
    "question": {
      "en": "Are there elongated dark brown or black lesions running along the stems causing branches to break?",
      "hi": "क्या टहनियों पर लंबे काले घाव हैं जिससे वजन पड़ने पर शाखाएं टूट रही हैं?"
    }
  },
  "vein_browning_leaves": {
    "icon": "🍂",
    "label": {
      "en": "Browning and necrosis spreading directly along major leaf veins",
      "hi": "पत्तियों की मुख्य नसों का भूरा पड़कर सूखना"
    },
    "question": {
      "en": "Are the major veins turning dark brown to black and dying off?",
      "hi": "क्या मुख्य नसें गहरे भूरे रंग की होकर सूख रही हैं?"
    }
  },
  "tiger_stripe_leaf_chlorosis": {
    "icon": "🐅",
    "label": {
      "en": "Tiger-stripe yellowing between veins followed by brown dead sectors",
      "hi": "नसों के बीच बाघ की धारियों जैसा पीलापन और सूखापन (टाइगर स्ट्राइप)"
    },
    "question": {
      "en": "Do the leaves show yellow stripes between veins resembling a tiger's skin pattern?",
      "hi": "क्या पत्तियों पर नसों के बीच बाघ जैसी पीली-भूरी धारियां नजर आ रही हैं?"
    }
  },
  "gradual_wilting_leaf_drop": {
    "icon": "🥀",
    "label": {
      "en": "Gradual wilting, yellowing, and defoliation from base upwards",
      "hi": "पौधे का नीचे से ऊपर की ओर धीरे-धीरे मुरझाना और पत्तियां गिरना"
    },
    "question": {
      "en": "Is the cotton plant slowly wilting and dropping its leaves starting from the bottom branches?",
      "hi": "क्या पौधा नीचे की टहनियों से शुरू होकर धीरे-धीरे मुरझा रहा है?"
    }
  },
  "black_sooty_mold_leaves": {
    "icon": "⚫",
    "label": {
      "en": "Black soot-like mold powder coating leaf upper surface and bolls",
      "hi": "पत्तियों और टिंडों पर काले कोयले/कालिख जैसी फफूंद"
    },
    "question": {
      "en": "Is there a black chimney-soot like coating covering the leaves that rubs off as black powder?",
      "hi": "क्या पत्तियों और टिंडों पर कालिख जैसी काली फफूंद जम गई है?"
    }
  },
  "wavy_translucent_leaf_margins": {
    "icon": "〰️",
    "label": {
      "en": "Wavy undulating lesions starting from leaf tip along the outer margins",
      "hi": "पत्ती के किनारे और सिरे से शुरू होने वाले लहरदार धब्बे"
    },
    "question": {
      "en": "Do you see wavy, water-soaked yellowish streaks starting from the leaf tip along the outer edges?",
      "hi": "क्या पत्ती के ऊपरी सिरे और किनारों से शुरू होकर नीचे की ओर लहरदार पीली धारियां बढ़ रही हैं?"
    }
  },
  "milky_bacterial_dew_droplets": {
    "icon": "💧",
    "label": {
      "en": "Milky, amber-colored bacterial dew drops oozing on leaf lesions early morning",
      "hi": "सुबह के समय पत्ती के किनारों पर दूधिया-पीली चिपचिपी बूंदें"
    },
    "question": {
      "en": "In early morning, do you see turbid milky or amber droplet beads along the drying leaf margins?",
      "hi": "क्या सुबह के समय रोगग्रस्त पत्तियों के किनारों पर दूधिया या बादामी रंग की चिपचिपी बूंदें दिखती हैं?"
    }
  },
  "straw_bleached_leaf_drying": {
    "icon": "🌾",
    "label": {
      "en": "Blighted leaf blades turn bleached straw-white or dirty grey and dry out",
      "hi": "पत्तियों का पुआल जैसा सफेद-भूरा होकर सूख जाना"
    },
    "question": {
      "en": "Are infected leaves turning straw-yellow or bleached white and drying up like hay?",
      "hi": "क्या पत्तियां भूसी/पुआल जैसी सफेद पड़कर पूरी तरह सूख रही हैं?"
    }
  },
  "spindle_diamond_shaped_spots": {
    "icon": "💎",
    "label": {
      "en": "Spindle-shaped or eye-shaped lesions with pointed ends on rice leaves",
      "hi": "पत्तियों पर आंख या तकली (नाव) जैसे नुकीले किनारों वाले धब्बे"
    },
    "question": {
      "en": "Are the leaf spots shaped like an eye or spindle, wide in the middle with pointed ends?",
      "hi": "क्या पत्तियों पर बने धब्बे दोनों तरफ नुकीले और बीच में चौड़े (आंख या तकली के आकार के) हैं?"
    }
  },
  "grey_center_brown_margin_spots": {
    "icon": "👁️",
    "label": {
      "en": "Ashy grey center surrounded by reddish-brown outer margin",
      "hi": "धब्बे का केंद्र धूसर (राख जैसा) और किनारा लाल-भूरा होना"
    },
    "question": {
      "en": "Does each spot have a grey or whitish center encircled by a dark reddish-brown border?",
      "hi": "क्या धब्बे के बीच का हिस्सा राख जैसा सफेद-धूसर और किनारा लाल-भूरा है?"
    }
  },
  "black_broken_neck_node": {
    "icon": "🌾",
    "label": {
      "en": "Neck node of the panicle turns black, rots, and snaps causing chaffy head",
      "hi": "बाली का आधार (गला) काला पड़कर टूटना (नेक ब्लास्ट)"
    },
    "question": {
      "en": "Has the base of the panicle neck turned black and rotten, causing the earhead to hang down broken?",
      "hi": "क्या बाली का निचला हिस्सा (गर्दन) काला पड़कर सड़ गया है और बाली टूटकर लटक गई है?"
    }
  },
  "oval_greenish_grey_waterline_lesions": {
    "icon": "🟢",
    "label": {
      "en": "Oval greenish-grey water-soaked spots on leaf sheath near the water line",
      "hi": "पानी की सतह के पास तने के आवरण पर हरे-धूसर अंडाकार धब्बे"
    },
    "question": {
      "en": "Are there greenish-grey oval spots on the lower leaf sheath right above the flood water level?",
      "hi": "क्या खेत में भरे पानी की सतह के पास धान के तने पर हरे-धूसर अंडाकार धब्बे हैं?"
    }
  },
  "serpentine_snake_skin_patterns": {
    "icon": "🐍",
    "label": {
      "en": "Lesions coalesce into banded, serpentine snake-skin patterns creeping up stems",
      "hi": "धब्बों का मिलकर सांप की केंचुली जैसा टेढ़ा-मेढ़ा पट्टेदार रूप लेना"
    },
    "question": {
      "en": "Do the spots join together creating irregular bands resembling snake-skin patterns crawling up the sheath?",
      "hi": "क्या धब्बे आपस में मिलकर तने पर सांप की चमड़ी जैसी टेढ़ी-मेढ़ी धारियां बना रहे हैं?"
    }
  },
  "sclerotia_mustard_seed_bodies": {
    "icon": "🟤",
    "label": {
      "en": "Small round mustard-seed like resting bodies (sclerotia) on infected sheaths",
      "hi": "तने पर सरसों के दाने जैसे छोटे भूरे फफूंद के पिंड (स्क्लेरोशिया)"
    },
    "question": {
      "en": "Can you see small brown or black mustard-seed like spherical grains attached to the decaying spots?",
      "hi": "क्या सड़े हुए धब्बों पर सरसों के दाने जैसे छोटे गोल भूरे दाने चिपके दिखते हैं?"
    }
  },
  "hopper_burn_circular_drying_patches": {
    "icon": "🔥",
    "label": {
      "en": "Circular patches of crop drying rapidly looking scorched by fire (Hopper Burn)",
      "hi": "खेत में आग से जले जैसे गोल सूखे घेरे (हॉपर बर्न)"
    },
    "question": {
      "en": "Are there circular patches in the paddy field that look scorched and burned dry from insect attack?",
      "hi": "क्या खेत में बीच-बीच में गोल घेरों में फसल आग से जली हुई जैसी सूखी दिखाई दे रही है?"
    }
  },
  "brown_insects_base_of_tillers": {
    "icon": "🦗",
    "label": {
      "en": "Thousands of small brown plant hopper bugs massed at base of tillers near water",
      "hi": "तनों के निचले हिस्से पर हजारों नन्हे भूरे फुदके कीट (BPH)"
    },
    "question": {
      "en": "When you part the hills and look near the water level, are there thousands of tiny brown insects hopping around?",
      "hi": "क्या पौधों को हटाकर नीचे पानी के पास देखने पर भारी संख्या में नन्हे भूरे कीड़े फुदकते दिखते हैं?"
    }
  },
  "plant_lodging_circular_patches": {
    "icon": "📐",
    "label": {
      "en": "Severe lodging (falling flat) of plants in circular rings",
      "hi": "घेरों में फसल का जमीन पर गिर जाना (लॉजिंग)"
    },
    "question": {
      "en": "Has the rice crop fallen completely flat on the water in distinct circular patches?",
      "hi": "क्या फसल गोल चकत्तों में जमीन पर पूरी तरह गिर गई है?"
    }
  },
  "dead_heart_central_shoot_drying": {
    "icon": "🌱",
    "label": {
      "en": "Central young shoot dies and easily pulls out dry with rotten base (Dead Heart)",
      "hi": "बीच का गोभ सूखना और खींचने पर आसानी से बदबूदार निकल आना (डेड हार्ट)"
    },
    "question": {
      "en": "Has the central leaf shoot dried up, and does it pull out very easily when you tug it?",
      "hi": "क्या बीच का गोभ (पत्ती) सूख चुका है और खींचने पर बिना जोर लगाए आसानी से बाहर आ जाता है?"
    }
  },
  "white_ear_chaffy_panicles": {
    "icon": "🌾",
    "label": {
      "en": "Emerged panicles completely white, erect, and empty with no grain filling (White Head)",
      "hi": "पूरी बाली सफेद, खड़ी और बिना दानों के खाली होना (सफेद बाली)"
    },
    "question": {
      "en": "Are the earheads completely bleached white and standing straight up because there are no grains inside?",
      "hi": "क्या बालियां पूरी तरह सफेद व खोखली हैं और दाने न होने के कारण सीधी खड़ी हैं?"
    }
  },
  "boreholes_frass_stem_base": {
    "icon": "🕳️",
    "label": {
      "en": "Tiny hole bored at the stem base plugged with caterpillar excreta (frass)",
      "hi": "तने के निचले हिस्से में छेद और इल्ली का बुरादा/मल"
    },
    "question": {
      "en": "Do you see a small pinhole near the bottom of the stem plugged with yellowish sawdust-like frass?",
      "hi": "क्या तने के निचले भाग में एक छेद है जिसमें लकड़ी के बुरादे जैसा कीड़े का मल फंसा है?"
    }
  },
  "water_soaked_dark_leaf_blotch": {
    "icon": "💧",
    "label": {
      "en": "Water-soaked dark lesions spreading rapidly across potato leaves and stems",
      "hi": "आलू की पत्तियों व तने पर पानी से भीगे जैसे गहरे धब्बे"
    },
    "question": {
      "en": "Are there dark water-soaked patches spreading quickly on potato leaves and petioles?",
      "hi": "क्या आलू की पत्तियों और डंठल पर तेजी से फैलते हुए पानी से भीगे काले-भूरे धब्बे हैं?"
    }
  },
  "white_mildew_underside_leaf": {
    "icon": "☁️",
    "label": {
      "en": "White downy fungal growth on the underside of dark leaf lesions in cool humid weather",
      "hi": "सुबह की नमी में पत्ती के नीचे धब्बों पर सफेद रोयेंदार फफूंद"
    },
    "question": {
      "en": "In early morning dampness, do you see a delicate whitish ring of mold on the underside of leaf lesions?",
      "hi": "क्या सुबह के समय पत्तियों के निचले हिस्से में काले धब्बों के किनारों पर सफेद फफूंद दिखती है?"
    }
  },
  "tubers_purplish_brown_rot": {
    "icon": "🥔",
    "label": {
      "en": "Tuber skin shows purplish-brown sunken patches with dry granular reddish rot inside",
      "hi": "आलू कंद पर बैंगनी-भूरे धंसे हुए धब्बे और अंदर लाल-भूरी सड़ांध"
    },
    "question": {
      "en": "Do harvested tubers have purplish-brown dry rot extending under the skin into the flesh?",
      "hi": "क्या आलू के कंदों की चमड़ी पर बैंगनी-भूरे गड्ढे हैं और काटने पर अंदर लाल-भूरा सूखा सड़ापन है?"
    }
  },
  "concentric_target_rings_potato": {
    "icon": "🎯",
    "label": {
      "en": "Dark brown circular spots with concentric target-board rings on older foliage",
      "hi": "पुरानी पत्तियों पर गोल छल्लेदार निशानेबाजी जैसे धब्बे (टारगेट बोर्ड)"
    },
    "question": {
      "en": "Do older potato leaves have circular brown spots marked by distinct concentric bullseye rings?",
      "hi": "क्या निचली पुरानी पत्तियों पर निशानेबाजी बोर्ड जैसे गोल छल्लों वाले गहरे भूरे धब्बे हैं?"
    }
  },
  "chlorotic_leaf_borders": {
    "icon": "🟡",
    "label": {
      "en": "Prominent yellow chlorotic border surrounding brown necrotic spots",
      "hi": "धब्बों के चारों ओर साफ पीला घेरा (हेलो)"
    },
    "question": {
      "en": "Are the dark leaf spots encircled by a clear yellow chlorotic ring?",
      "hi": "क्या पत्ती के धब्बों के चारों तरफ पीला छल्ला बना हुआ है?"
    }
  },
  "black_crusty_specks_tuber_skin": {
    "icon": "⚫",
    "label": {
      "en": "Hard, black crust-like dirt specks firmly adhering to tuber skin (dirt that will not wash off)",
      "hi": "आलू पर कोयले जैसे काले कड़े दाने जो धोने पर भी न छूटें (काली पपड़ी)"
    },
    "question": {
      "en": "Are there small black crusty pebbles or dirt-like bodies stuck to the potato skin that cannot be washed off with water?",
      "hi": "क्या आलू की सतह पर काली मिर्च जैसे कड़े दाने चिपके हैं जो पानी से धोने पर भी नहीं छूटते?"
    }
  },
  "aerial_tubers_stems": {
    "icon": "🌱",
    "label": {
      "en": "Small green aerial tubers forming on above-ground stem leaf axils",
      "hi": "जमीन के ऊपर तने की गांठों पर छोटे हरे आलू (एरियल ट्यूबर) बनना"
    },
    "question": {
      "en": "Are tiny green miniature potatoes (aerial tubers) sprouting above ground in the leaf axils along the stem?",
      "hi": "क्या पौधे के तने पर जमीन के ऊपर पत्तियों के जोड़ों पर छोटे हरे आलू बनने लगे हैं?"
    }
  },
  "whorl_ragged_leaf_feeding": {
    "icon": "🌽",
    "label": {
      "en": "Whorl leaves heavily chewed with large irregular holes and window-pane damage",
      "hi": "मक्का के गोभ (भोंपू) की पत्तियों का बुरी तरह कटा-फटा होना"
    },
    "question": {
      "en": "Are young corn leaves emerging from the central whorl riddled with large ragged holes and chewed edges?",
      "hi": "क्या मक्का के पौधे के बीच के गोभ से निकलने वाली पत्तियां इल्ली द्वारा बुरी तरह कटी-फटी हैं?"
    }
  },
  "sawdust_frass_whorl": {
    "icon": "🪵",
    "label": {
      "en": "Abundant yellowish-brown sawdust-like caterpillar excreta (frass) packed in whorl",
      "hi": "गोभ के अंदर लकड़ी के बुरादे जैसा भारी कीड़े का मल (विष्ठा)"
    },
    "question": {
      "en": "Is the central leaf funnel packed with coarse, wet yellowish-brown sawdust-like caterpillar frass?",
      "hi": "क्या पत्तों के बीच की भोंपू में लकड़ी के बुरादे जैसा गीला पीला-भूरा कीड़े का मल भरा हुआ है?"
    }
  },
  "caterpillar_inverted_y_head": {
    "icon": "🐛",
    "label": {
      "en": "Stout caterpillar with distinct inverted white 'Y' mark on head and four dots on tail",
      "hi": "सिर पर उल्टा 'Y' का निशान और पूंछ पर 4 काले बिंदुओं वाली इल्ली"
    },
    "question": {
      "en": "When inspecting the worm inside the corn whorl, do you see an inverted white 'Y' on its dark head capsule?",
      "hi": "क्या गोभ में छिपी इल्ली के सिर पर उल्टा 'Y' जैसा सफेद निशान और शरीर पर धारियां दिखती हैं?"
    }
  },
  "rectangular_tan_leaf_lesions": {
    "icon": "📏",
    "label": {
      "en": "Elongated rectangular tan or buff-colored lesions confined strictly between leaf veins",
      "hi": "पत्तियों की नसों के बीच आयताकार लंबे बादामी धब्बे"
    },
    "question": {
      "en": "Do the corn leaves show narrow, rectangular tan dead spots running parallel between the veins?",
      "hi": "क्या पत्तियों की नसों के समानांतर आयताकार लंबे हल्के भूरे-बादामी सूखे धब्बे बने हैं?"
    }
  },
  "parallel_vein_blight_zones": {
    "icon": "🌿",
    "label": {
      "en": "Lesions merge into large dead stripes causing premature foliage drying",
      "hi": "धब्बों का मिलकर पूरी पत्ती को सुखा देना"
    },
    "question": {
      "en": "Are the rectangular lesions joining together to dry up large strips of the corn leaves?",
      "hi": "क्या ये आयताकार धब्बे आपस में मिलकर पत्तियों के बड़े हिस्से को सुखा रहे हैं?"
    }
  },
  "cinnamon_brown_pustules_upper_lower": {
    "icon": "🟤",
    "label": {
      "en": "Cinnamon-brown powdery blister pustules breaking through both upper and lower leaf surfaces",
      "hi": "पत्ती के दोनों तरफ दालचीनी जैसे भूरे उभरे हुए चूर्ण भरे फफोले"
    },
    "question": {
      "en": "Are there small oval cinnamon-brown powdery pustules erupting across both sides of the maize leaves?",
      "hi": "क्या मक्का की पत्तियों के ऊपर और नीचे दोनों तरफ दालचीनी जैसे भूरे पाउडर के फफोले उभरे हैं?"
    }
  },
  "powdery_spores_scattered": {
    "icon": "✋",
    "label": {
      "en": "Brown spore dust easily rubs off onto fingertips upon touching",
      "hi": "छूने पर उंगलियों पर भूरा जंग जैसा पाउडर लगना"
    },
    "question": {
      "en": "Does a fine reddish-brown spore powder dust onto your fingers when rubbing the spots?",
      "hi": "क्या धब्बों को हाथ से छूने पर उंगलियों पर भूरा जंग जैसा पाउडर लग जाता है?"
    }
  },
  "upward_cupping_chilli_leaves": {
    "icon": "🌶️",
    "label": {
      "en": "Leaves curled upward into boat/cup shapes with twisted margins (Murda Rog)",
      "hi": "मिर्च की पत्तियों का ऊपर की ओर मुड़कर नाव या कटोरी जैसा बनना (मुरड़ा रोग)"
    },
    "question": {
      "en": "Are the chilli leaf margins curled tightly upward, resembling small boats or cups?",
      "hi": "क्या मिर्च की पत्तियां ऊपर की तरफ मुड़कर नाव या चम्मच के आकार की हो गई हैं?"
    }
  },
  "shortened_internodes_bushy": {
    "icon": "🌳",
    "label": {
      "en": "Severe stunting with shortened internodes creating a dense, bushy rosetted plant",
      "hi": "पौधे की गांठें छोटी होना और पौधा झाड़ीनुमा बौना बन जाना"
    },
    "question": {
      "en": "Has the chilli plant stopped normal height growth and become a compact bushy cluster of tiny leaves?",
      "hi": "क्या पौधे की ऊपर की बढ़वार रुक गई है और वह एक घनी झाड़ी जैसा बौना गुच्छा बन गया है?"
    }
  },
  "sunken_circular_spots_ripe_chilli": {
    "icon": "🔴",
    "label": {
      "en": "Sunken circular or oblong spots on green or ripening red chilli pods",
      "hi": "पकी लाल या हरी मिर्च के फल पर धंसे हुए गोल सड़े धब्बे"
    },
    "question": {
      "en": "Are the chilli pods developing sunken circular decayed patches that make the fruit soften and shrivel?",
      "hi": "क्या मिर्च के फलों पर गोल धंसे हुए गड्ढेनुमा धब्बे हैं जिससे फल सड़कर सूख रहे हैं?"
    }
  },
  "acervuli_black_concentric_dots": {
    "icon": "🎯",
    "label": {
      "en": "Concentric rings of tiny black pinhead dots (fungal fruiting bodies) inside fruit rot spots",
      "hi": "सड़े हुए धब्बों के अंदर गोल छल्लों में नन्हे काले दाने (फफूंद पिंड)"
    },
    "question": {
      "en": "Inside the sunken spots on the chilli fruit, can you see concentric rings of tiny black pepper-like specks?",
      "hi": "क्या मिर्च के धब्बों के अंदर गोल छल्ले में काली मिर्च जैसे नन्हे काले बिंदु दिखाई दे रहे हैं?"
    }
  },
  "dieback_twigs_from_top": {
    "icon": "🥀",
    "label": {
      "en": "Twigs and branches drying and turning straw-colored from top tip downwards (Dieback)",
      "hi": "टहनियों का ऊपरी सिरे से नीचे की ओर सूखकर पुआल जैसा होना (डाइबैक)"
    },
    "question": {
      "en": "Are the tips of the chilli branches turning white-straw colored and dying backward toward the main stem?",
      "hi": "क्या मिर्च की शाखाएं ऊपर के सिरे से नीचे की ओर सूखती और सफेद पड़ती जा रही हैं?"
    }
  },
  "downward_boat_curling_leaves": {
    "icon": "🔄",
    "label": {
      "en": "Downward curling and drooping of leaves like an inverted boat from yellow mite attack",
      "hi": "पत्तियों के किनारों का नीचे की तरफ मुड़ना (उल्टी नाव जैसा) - माइट्स प्रकोप"
    },
    "question": {
      "en": "Are the younger chilli leaves curling downward with margins rolled under like an inverted boat?",
      "hi": "क्या नई पत्तियां नीचे की तरफ मुड़कर उल्टी नाव जैसी लटक रही हैं?"
    }
  },
  "bronzing_underside_leaves": {
    "icon": "🍂",
    "label": {
      "en": "Underside of leaves turns coppery-brown or bronze with silvery sheen",
      "hi": "पत्ती के निचले हिस्से का तांबई-कत्थई या चमकीला कांस्य रंग का होना"
    },
    "question": {
      "en": "Does the lower surface of curled leaves show a metallic, bronzed or silvery oily appearance?",
      "hi": "क्या मुड़ी हुई पत्तियों के नीचे देखने पर तांबे जैसी चमक या मैटेलिक भूरापन दिखता है?"
    }
  },
  "elongated_shoots": {
    "icon": "📏",
    "label": {
      "en": "Petiole and leaf stalk becomes abnormally elongated and brittle (rat tail symptom)",
      "hi": "पत्ती की डंडी असामान्य रूप से लंबी और टूटने योग्य होना (चूहे की पूंछ जैसा)"
    },
    "question": {
      "en": "Are the leaf stalks stretched unusually long, making the stunted foliage look like rat tails?",
      "hi": "क्या पत्तियों की डंडी असामान्य रूप से लंबी और कमजोर होकर लटकी हुई है?"
    }
  },
  "white_creamy_blister_pustules_underside": {
    "icon": "⚪",
    "label": {
      "en": "Raised, chalky-white or creamy blister-like pustules on lower surface of leaves",
      "hi": "पत्ती के निचले हिस्से पर उभरे हुए सफेद या मलाईदार फफोले (सफेद रतुआ)"
    },
    "question": {
      "en": "Do you see chalky-white, raised blister-like pustules scattered on the underside of mustard leaves?",
      "hi": "क्या सरसों की पत्तियों के नीचे चूने जैसे सफेद उभरे हुए फफोले दिखाई दे रहे हैं?"
    }
  },
  "staghead_malformed_floral_axis": {
    "icon": "🦌",
    "label": {
      "en": "Floral branches swollen, twisted, and converted into sterile green leafy masses (Staghead)",
      "hi": "फूलों के गुच्छों का मोटा, मुड़ा हुआ और हरी पत्तियों में बदलना (बारहसिंगा सींग / स्टैगहेड)"
    },
    "question": {
      "en": "Has the flowering head become grotesquely swollen, thickened, and twisted into a green leafy club like deer antlers?",
      "hi": "क्या फूल वाली डंडी असामान्य रूप से फूलकर मोटी हो गई है और फूल के बजाय हरी पत्तियों का गुच्छा बन गई है?"
    }
  },
  "brown_black_circular_target_spots_siliquae": {
    "icon": "🎯",
    "label": {
      "en": "Prominent circular zonate spots on leaves and elongated black spots on pods (siliquae)",
      "hi": "पत्तियों पर गोल छल्लेदार और फलियों पर काले लंबे धब्बे"
    },
    "question": {
      "en": "Are there dark brown circular spots with concentric rings on the leaves and black sunken streaks on the mustard pods?",
      "hi": "क्या पत्तियों पर गोल छल्लों वाले धब्बे हैं और फलियों (फलियों) पर काले धंसे हुए लंबे निशान बन रहे हैं?"
    }
  },
  "stem_streaks_pod_shattering": {
    "icon": "🌾",
    "label": {
      "en": "Elongated dark streaks on stems and pods splitting open prematurely with shriveled seed",
      "hi": "तने पर काली धारियां और फलियों का समय से पहले चटककर बीज गिरना"
    },
    "question": {
      "en": "Are the seed pods turning black, drying up, and splitting open before harvest with small shriveled grains?",
      "hi": "क्या फलियां काली पड़कर समय से पहले ही चटक रही हैं और अंदर के दाने सिकुड़े हुए हैं?"
    }
  },
  "dense_colonies_greenish_aphids_inflorescence": {
    "icon": "🐛",
    "label": {
      "en": "Massive colonies of tiny greenish-grey aphids completely covering flowering shoots and pods (Mahoo)",
      "hi": "फूलों और फलियों पर हरे-धूसर नन्हे माहू/चेपा कीड़ों का भारी जमावड़ा"
    },
    "question": {
      "en": "Are the tender flowering branches, buds, and young pods heavily covered with thousands of tiny sap-sucking green aphids?",
      "hi": "क्या सरसों के फूलों की डंडी, कलियों और फलियों पर हजारों छोटे हरे कीड़े (माहू/चेपा) चिपके हुए हैं?"
    }
  },
  "honeydew_sooty_coating_pods": {
    "icon": "🍯",
    "label": {
      "en": "Sticky honeydew secretion covering plants followed by black sooty mold growth",
      "hi": "पौधे पर चिपचिपा रस और उसके ऊपर काली कालिख जैसी फफूंद"
    },
    "question": {
      "en": "Is the crop sticky with insect fluid and coated in a black soot-like mold that covers the pods?",
      "hi": "क्या फसल कीड़े के रस से चिपचिपी हो गई है और उस पर कालिख जैसी काली फफूंद जम गई है?"
    }
  },
  "plant_wilting_drying": {
    "icon": "🥀",
    "label": {
      "en": "Heavy sap loss causing entire plant to wither, turn yellow, and dry prematurely",
      "hi": "रस चूसने के कारण पूरे पौधे का पीला पड़कर सूख जाना"
    },
    "question": {
      "en": "Are heavily infested mustard plants turning pale yellow, withering, and drying out without forming grains?",
      "hi": "क्या कीड़ों के प्रकोप से पौधे पीले पड़कर मुरझा रहे हैं और उनमें दाने नहीं बन रहे हैं?"
    }
  },
  "sugarcane_leaf_midrib_red_lesions": {
    "icon": "🎋",
    "label": {
      "en": "Blood-red elongated lesions on leaf midribs with white centers",
      "hi": "पत्ती की मध्य शिरा पर लाल लंबे धब्बे जिनके बीच सफेद रंग दिखता है"
    },
    "question": {
      "en": "Are there distinct blood-red streaks running along the central midrib of the sugarcane leaves?",
      "hi": "क्या गन्ने की पत्तियों की बीच वाली मोटी नस पर गहरे लाल रंग की धारियां बनी हुई हैं?"
    }
  },
  "sugarcane_internal_stalk_reddening_white_patches": {
    "icon": "🎋",
    "label": {
      "en": "Internal stalk tissue turns bright red with characteristic transverse white patches",
      "hi": "गन्ने को चीरने पर अंदर का गूदा लाल दिखना और बीच-बीच में सफेद चकत्ते होना"
    },
    "question": {
      "en": "When split open, does the cane stalk reveal reddish pith with white horizontal bands across it?",
      "hi": "क्या गन्ने को बीच से चीरने पर अंदर का भाग लाल और उसमें सफेद आड़े चकत्ते दिखाई देते हैं?"
    }
  },
  "sugarcane_alcoholic_sour_smell": {
    "icon": "👃",
    "label": {
      "en": "Affected split stalks emit a distinctive sour or alcoholic fermented odor",
      "hi": "चीरे हुए गन्ने से खट्टी या शराब जैसी किण्वित गंध आना"
    },
    "question": {
      "en": "Does the split sugarcane stem emit an unmistakable sour, alcoholic or vinegar-like smell?",
      "hi": "क्या प्रभावित गन्ने से खट्टी, सिरके या शराब जैसी तेज दुर्गंध आ रही है?"
    }
  },
  "sugarcane_whip_like_black_sooty_structure": {
    "icon": "🎋",
    "label": {
      "en": "Emergence of a long, curved black whip-like dusty shoot from the central growing point",
      "hi": "पौधे के बीच से चाबुक जैसा लंबा, मुड़ा हुआ काला धूलदार डंडा निकलना"
    },
    "question": {
      "en": "Has the central top spindle turned into a long, whip-like curved structure covered with black sooty dust?",
      "hi": "क्या गन्ने के गोफ से चाबुकनुमा मुड़ी हुई काली कालिख से ढकी संरचना बाहर निकली है?"
    }
  },
  "sugarcane_narrow_stunted_leaves": {
    "icon": "🎋",
    "label": {
      "en": "Leaves become unusually narrow, erect, and severely stunted",
      "hi": "पत्तियों का बहुत पतला, खड़ा और अत्यधिक बौना हो जाना"
    },
    "question": {
      "en": "Are the upper leaves forming around the whip abnormally narrow, short, and stiffly erect?",
      "hi": "क्या ऊपरी पत्तियां सामान्य से बहुत पतली, छोटी और बिल्कुल सीधी खड़ी हो गई हैं?"
    }
  },
  "sugarcane_stalk_hollow_pith_drying": {
    "icon": "🎋",
    "label": {
      "en": "Internal pith dries out, turns light dirty brown and becomes hollow/spongy",
      "hi": "गन्ने के अंदर का गूदा सूखकर खोखला और गंदा भूरा हो जाना"
    },
    "question": {
      "en": "Is the internal cane pith dried up, light-weight, and hollowed out with longitudinal cavities?",
      "hi": "क्या गन्ने का आंतरिक भाग सूखकर हल्का, खोखला और अंदर से खाली हो गया है?"
    }
  },
  "sugarcane_foliage_yellowing_crown_wilting": {
    "icon": "🥀",
    "label": {
      "en": "Crown leaves turn yellow, wither from margin inwards, and entire clump withers",
      "hi": "ऊपरी पत्तियों का पीला पड़कर सूखना और पूरे पौधे का मुरझा जाना"
    },
    "question": {
      "en": "Are the crown leaves turning pale yellow and withering rapidly, leading to whole clump collapse?",
      "hi": "क्या गन्ने का ऊपरी सिरा (अगोला) पीला पड़कर सूख रहा है और पूरा झुंड मुरझा रहा है?"
    }
  },
  "groundnut_circular_dark_brown_spots_yellow_halo": {
    "icon": "🥜",
    "label": {
      "en": "Numerous circular dark brown to black spots surrounded by a bright yellow halo (Tikka)",
      "hi": "पत्तियों पर गोल गहरे भूरे-काले धब्बे जिनके चारों ओर पीला घेरा (टिक्का) होता है"
    },
    "question": {
      "en": "Do you see circular dark brown leaf spots with distinct bright yellow margins on older leaves?",
      "hi": "क्या मूंगफली की पत्तियों पर गोल काले-भूरे धब्बे हैं जिनके चारों तरफ पीला छल्ला बना है?"
    }
  },
  "groundnut_premature_leaf_shedding": {
    "icon": "🍂",
    "label": {
      "en": "Severe defoliation with lower leaves drying up and dropping prematurely",
      "hi": "निचली पत्तियों का सूखकर समय से पहले झड़ जाना"
    },
    "question": {
      "en": "Are the heavily spotted leaves withering and falling off, leaving stems nearly bare?",
      "hi": "क्या धब्बों वाली पत्तियां सूखकर नीचे गिर रही हैं और तना पत्तीविहीन हो रहा है?"
    }
  },
  "groundnut_collar_region_rotting_black_spores": {
    "icon": "🥜",
    "label": {
      "en": "Collar region at soil line rots with black fungal spore masses visible on stem",
      "hi": "जमीन की सतह पर तने का गलना और उस पर काली फफूंद जमना"
    },
    "question": {
      "en": "Is the stem collar near soil level turning soft, dark brown, and covered in black powdery fungal growth?",
      "hi": "क्या जमीन के पास तने का निचला हिस्सा सड़कर काला पड़ गया है और उस पर काले दानेदार बीजाणु दिख रहे हैं?"
    }
  },
  "groundnut_seedling_wilting_collapse": {
    "icon": "🥀",
    "label": {
      "en": "Sudden drooping and wilting of young seedlings at ground level",
      "hi": "नन्हे पौधों का अचानक मुरझाकर जमीन पर गिर जाना"
    },
    "question": {
      "en": "Are young groundnut seedlings suddenly toppling over and withering away within days?",
      "hi": "क्या मूंगफली के छोटे पौधे अचानक मुरझाकर जमीन पर ढेर हो रहे हैं?"
    }
  },
  "groundnut_orange_brown_pustules_lower_leaf_surface": {
    "icon": "🥜",
    "label": {
      "en": "Small orange-brown to reddish raised pustules rupturing on lower leaf surface (Rust)",
      "hi": "पत्ती की निचली सतह पर उभरे हुए नारंगी-भूरे रंग के रतुआ फफोले"
    },
    "question": {
      "en": "Are there tiny reddish-brown powdery blisters breaking open on the underside of groundnut leaves?",
      "hi": "क्या मूंगफली की पत्तियों के नीचे तांबई-नारंगी पाउडर वाले नन्हे फफोले उभरे हुए हैं?"
    }
  },
  "groundnut_leaves_curl_necrosis_dry": {
    "icon": "🍂",
    "label": {
      "en": "Infected leaves curl, turn necrotic, and give the field a burnt appearance",
      "hi": "पत्तियों का मुड़कर झुलसना और खेत का जला हुआ सा दिखना"
    },
    "question": {
      "en": "Are the rusted leaves curling inward, drying up, and giving the crop canopy a burnt brown look?",
      "hi": "क्या पत्तियां सूखकर अंदर मुड़ रही हैं और दूर से देखने पर फसल जली हुई दिखती है?"
    }
  },
  "chickpea_drooping_petioles_leaves_flaccid": {
    "icon": "🥀",
    "label": {
      "en": "Sudden drooping and flaccidity of upper petioles and leaflets (Wilt)",
      "hi": "ऊपरी पत्तियों व डंडियों का अचानक लटककर ढीला पड़ जाना (उकठा)"
    },
    "question": {
      "en": "Are the upper leaves and branches of the chickpea plant suddenly drooping without prior yellowing?",
      "hi": "क्या चने के पौधे की शाखाएं और पत्तियां अचानक नीचे की ओर झुककर मुरझा रही हैं?"
    }
  },
  "chickpea_internal_vascular_browning_xylem": {
    "icon": "🌱",
    "label": {
      "en": "Dark brown to black discoloration inside split root and collar xylem vessels",
      "hi": "जड़ व तने को चीरने पर अंदर की नसें गहरी भूरी या काली दिखना"
    },
    "question": {
      "en": "When the main taproot and stem are sliced vertically, do you see dark brown internal xylem lines?",
      "hi": "क्या मुख्य जड़ को लंबाई में चीरने पर अंदर नसें काली-भूरी पड़ी हुई मिलती हैं?"
    }
  },
  "chickpea_premature_field_patch_death": {
    "icon": "🥀",
    "label": {
      "en": "Rapid drying and death of plants in circular patches across the field",
      "hi": "खेत में गोलाकार टुकड़ियों में पौधों का तेजी से सूखना और मरना"
    },
    "question": {
      "en": "Are chickpea plants drying up and dying in distinct circular patches across your field?",
      "hi": "क्या खेत में चने के पौधे गोल-गोल टुकड़ियों में तेजी से सूखकर खत्म हो रहे हैं?"
    }
  },
  "chickpea_circular_lesions_concentric_black_dots_pycnidia": {
    "icon": "🎯",
    "label": {
      "en": "Circular to elongated pale spots on leaflets, stems, and pods with concentric rings of black pinhead pycnidia",
      "hi": "पत्तियों, तनों और फलियों पर हल्के गोल धब्बे जिनमें छल्लों में नन्हे काले दाने होते हैं"
    },
    "question": {
      "en": "Do leaves and pods have circular spots containing concentric rings of tiny black pinhead dots?",
      "hi": "क्या पत्तियों और फलियों पर बने धब्बों के अंदर गोल छल्लों में काले नन्हे बिंदु दिख रहे हैं?"
    }
  },
  "chickpea_stem_girdling_breakage": {
    "icon": "🌱",
    "label": {
      "en": "Lesions encircle the branches causing them to break off easily at the canker",
      "hi": "तने के चारों तरफ धब्बा फैलने से शाखाओं का वहां से टूट जाना"
    },
    "question": {
      "en": "Are the branches girdled by dark cankers and snapping off at the point of infection?",
      "hi": "क्या शाखाओं पर काले घाव बन गए हैं और हल्की हवा में टहनियां वहीं से टूट रही हैं?"
    }
  },
  "chickpea_greyish_fungal_growth_on_flowers": {
    "icon": "☁️",
    "label": {
      "en": "Soft greyish hairy mould growth covering flowers, tender stems, and young pods",
      "hi": "फूलों, फलियों और कोमल तनों पर स्लेटी-धूसर रंग की रोएंदार फफूंद"
    },
    "question": {
      "en": "Do flowers and tender shoots have a dense, hairy grey mould growing over them during foggy weather?",
      "hi": "क्या कोहरे और नमी के मौसम में चने के फूलों पर स्लेटी रोएंदार फफूंद जमी दिखाई दे रही है?"
    }
  },
  "chickpea_flower_drop_no_pod_formation": {
    "icon": "🥀",
    "label": {
      "en": "Severe flower drop with blackened withered buds and failure of pod setting",
      "hi": "फूलों का भारी गिरना, कलियों का काला पड़ना और फलियां न बनना"
    },
    "question": {
      "en": "Are infected flower buds rotting, dropping off, and resulting in zero pod setting?",
      "hi": "क्या फूल सड़कर गिर रहे हैं और पौधे पर एक भी दाना/फली नहीं बन पा रही है?"
    }
  },
  "pigeonpea_foliar_yellowing_interveinal_clearing": {
    "icon": "🌿",
    "label": {
      "en": "Gradual yellowing of leaves starting on one branch or side of the plant",
      "hi": "पौधे की किसी एक शाखा पर पत्तियों का पीला पड़ना शुरू होना"
    },
    "question": {
      "en": "Did the wilting and yellowing start on one individual branch while the rest still looks green?",
      "hi": "क्या पहले पौधे की केवल एक ही टहनी पीली पड़ी जबकि बाकी हिस्सा अभी हरा था?"
    }
  },
  "pigeonpea_dark_purple_stem_band_vertical_strip": {
    "icon": "🌿",
    "label": {
      "en": "Distinct dark purple to black band running vertically up the stem from soil line",
      "hi": "जमीन के पास से तने पर ऊपर की तरफ जाती गहरी बैंगनी या काली पट्टी"
    },
    "question": {
      "en": "Is there a dark purple or black vertical stripe running up the main stem from the ground?",
      "hi": "क्या तने के निचले हिस्से से ऊपर की ओर जाती हुई गहरी काली-बैंगनी पट्टी दिखती है?"
    }
  },
  "pigeonpea_black_vascular_discoloration": {
    "icon": "🌿",
    "label": {
      "en": "Black continuous vascular streaks inside split wood cylinder",
      "hi": "तना चीरने पर अंदर की लकड़ी में काली धारियां दिखाई देना"
    },
    "question": {
      "en": "When the stem bark is peeled, do you see dark brownish-black vascular lines inside the wood?",
      "hi": "क्या तने की छाल हटाने पर अंदर लकड़ी में गहरी काली-कत्थई धारियां नजर आती हैं?"
    }
  },
  "pigeonpea_bushy_stunted_pale_green_appearance": {
    "icon": "🌳",
    "label": {
      "en": "Extreme bushy, stunted habit with excessive branching and pale green small leaves (SMD)",
      "hi": "पौधे का बहुत घना, बौना और छोटी हल्की हरी पत्तियों से भर जाना"
    },
    "question": {
      "en": "Has the arhar plant become excessively bushy and stunted with a mass of tiny pale green leaves?",
      "hi": "क्या अरहर का पौधा असामान्य रूप से झाड़ीनुमा घना, बौना और छोटी पत्तियों वाला बन गया है?"
    }
  },
  "pigeonpea_severe_mosaic_mottling_leaves": {
    "icon": "🌿",
    "label": {
      "en": "Severe light green and dark green mosaic mottling and leaf puckering",
      "hi": "पत्तियों पर हल्के और गहरे हरे रंग के चितकबरे मोज़ेक धब्बे"
    },
    "question": {
      "en": "Are the pigeonpea leaves showing patches of alternating light and dark green mosaic patterns?",
      "hi": "क्या अरहर की पत्तियों पर हल्के और गहरे हरे रंग के चितकबरे चकत्ते दिख रहे हैं?"
    }
  },
  "pigeonpea_complete_cessation_of_flowering_sterile": {
    "icon": "🥀",
    "label": {
      "en": "Complete absence of flowers and pods; plant remains completely sterile",
      "hi": "पौधे में बिल्कुल फूल व फलियां न आना, पौधा पूरी तरह बांझ रहना"
    },
    "question": {
      "en": "Has the plant completely failed to produce flowers and pods, remaining totally sterile?",
      "hi": "क्या इस पौधे पर एक भी फूल या फली नहीं आई है और यह पूरी तरह बांझ बना हुआ है?"
    }
  },
  "pigeonpea_water_soaked_brown_stem_cankers": {
    "icon": "🌿",
    "label": {
      "en": "Dark brown water-soaked lesions on main stem and branches girdling the bark",
      "hi": "तने और शाखाओं पर गहरे भूरे भीगे हुए घाव जो तने को घेर लेते हैं"
    },
    "question": {
      "en": "Do you see dark purplish-brown water-soaked spots on the stem that girdle the plant?",
      "hi": "क्या अरहर के तने पर पानी से भीगे जैसे गहरे भूरे धब्बे हैं जो तने को चारों तरफ से घेर रहे हैं?"
    }
  },
  "pigeonpea_sudden_wilting_dead_leaves_remain_attached": {
    "icon": "🥀",
    "label": {
      "en": "Sudden blighting and wilting where dead brown leaves remain hanging on plant",
      "hi": "पौधे का अचानक सूखना और सूखी भूरी पत्तियां पौधे पर ही लटकी रहना"
    },
    "question": {
      "en": "Did the plant suddenly dry up while the dead dried leaves remain firmly attached to stems?",
      "hi": "क्या पौधा अचानक सूख गया और उसकी सूखी पत्तियां नीचे गिरने के बजाय डालियों पर ही चिपकी हैं?"
    }
  },
  "onion_small_sunken_whitish_spots_turning_purple": {
    "icon": "🧅",
    "label": {
      "en": "Water-soaked sunken whitish flecks enlarging rapidly into deep purple lesions",
      "hi": "सफेद धंसे हुए धब्बे जो तेजी से बड़े होकर गहरे बैंगनी हो जाते हैं"
    },
    "question": {
      "en": "Are the onion leaves showing small sunken spots with distinct purple or violet centers?",
      "hi": "क्या प्याज की पत्तियों पर बीच में गहरे बैंगनी रंग वाले धंसे हुए धब्बे बन रहे हैं?"
    }
  },
  "onion_concentric_rings_on_leaves_flower_stalks": {
    "icon": "🎯",
    "label": {
      "en": "Concentric bands or rings visible inside purple blotch lesions on leaves and scapes",
      "hi": "पत्तियों और डंडियों पर बैंगनी धब्बों के अंदर गोल छल्लेदार धारियां"
    },
    "question": {
      "en": "Inside the purple spots on onion leaves or seed stalks, do you see concentric rings?",
      "hi": "क्या बैंगनी धब्बों के अंदर गोल छल्ले बने हुए हैं?"
    }
  },
  "onion_leaves_girdled_collapse": {
    "icon": "🥀",
    "label": {
      "en": "Lesions girdle leaves and flower stalks causing them to bend over and snap",
      "hi": "धब्बों के फैलने से पत्तियों और फूलों की डंडियों का बीच से मुड़कर लटक जाना"
    },
    "question": {
      "en": "Are the onion leaves collapsing and falling over at the point where purple spots girdle them?",
      "hi": "क्या प्याज की पत्तियां धब्बों वाली जगह से कमजोर होकर नीचे झुक या टूट रही हैं?"
    }
  },
  "onion_small_yellow_to_orange_flecks_elongating": {
    "icon": "🧅",
    "label": {
      "en": "Small yellow to pale orange flecks on leaves elongating into lens-shaped lesions",
      "hi": "पत्तियों पर पीले-नारंगी छोटे चकत्ते जो लंबे होकर लेंस के आकार के बनते हैं"
    },
    "question": {
      "en": "Do you notice small yellowish flecks that stretch into long spindle-shaped lesions on onion blades?",
      "hi": "क्या पत्तियों पर छोटे पीले धब्बे लंबे होकर बादाम या आंख के आकार में फैल रहे हैं?"
    }
  },
  "onion_black_spore_mat_on_foliage_drying": {
    "icon": "🧅",
    "label": {
      "en": "Centers of leaf lesions become covered with a dense black velvet-like spore mat",
      "hi": "धब्बों के बीच में मखमली काली फफूंद की परत जमना और पत्ती का सूखना"
    },
    "question": {
      "en": "Are the centers of the dried spots covered in a thick, velvety black mould layer?",
      "hi": "क्या सूखे धब्बों के ऊपर काली मखमली परत जैसी फफूंद की चादर दिख रही है?"
    }
  },
  "onion_yellowing_and_curling_of_leaf_blades_from_tip": {
    "icon": "🥀",
    "label": {
      "en": "Leaves turn yellow, curl downwards, and die back progressively from tips (Basal Rot)",
      "hi": "पत्तियों का ऊपरी सिरे से पीला पड़ना, नीचे मुड़ना और सूखना"
    },
    "question": {
      "en": "Are the onion leaf tips turning yellow, curling downwards, and drying back toward the bulb?",
      "hi": "क्या प्याज की पत्तियां ऊपर की नोंक से पीली पड़कर नीचे की तरफ सूखती आ रही हैं?"
    }
  },
  "onion_roots_turn_pink_to_dark_brown_and_rot": {
    "icon": "🧅",
    "label": {
      "en": "Roots rot away, turn dark pink to brownish-black, and pull easily from soil",
      "hi": "जड़ों का सड़कर गुलाबी या काला-भूरा होना और उखाड़ने पर आसानी से टूट जाना"
    },
    "question": {
      "en": "When uprooted, are the onion roots rotted, pinkish-brown, and sloughing off easily?",
      "hi": "क्या उखाड़ने पर प्याज की जड़ें सड़ी हुई, गुलाबी-भूरी और बिल्कुल कमजोर मिलती हैं?"
    }
  },
  "onion_bulb_base_soft_decay": {
    "icon": "🧅",
    "label": {
      "en": "Stem plate and bulb base becomes soft, watery, and decayed with white mycelium",
      "hi": "प्याज की निचली गांठ का पिलपिला व सड़ जाना और सफेद फफूंद दिखना"
    },
    "question": {
      "en": "Is the base of the onion bulb soft, watery, and rotting with white fungus inside the scales?",
      "hi": "क्या प्याज के कंद का निचला हिस्सा पिलपिला होकर सड़ रहा है और उसमें सफेद फफूंद है?"
    }
  },
  "brinjal_extreme_reduction_in_leaf_size_tiny": {
    "icon": "🍆",
    "label": {
      "en": "Drastic reduction in leaf lamina size producing tiny, miniature soft leaves (Little Leaf)",
      "hi": "पत्तियों का आकार अत्यंत छोटा और नन्हा रह जाना (छोटी पत्ती रोग)"
    },
    "question": {
      "en": "Have the newly produced brinjal leaves become extremely tiny, narrow, and soft like micro-foliage?",
      "hi": "क्या बैंगन की नई पत्तियां सामान्य से बहुत छोटी, नन्हीं और मुलायम हो गई हैं?"
    }
  },
  "brinjal_bushy_phylloid_appearance_no_fruit": {
    "icon": "🌳",
    "label": {
      "en": "Floral parts convert into green leafy structures; plant becomes a dense sterile bush",
      "hi": "फूलों का हरी पत्तियों में बदल जाना और पूरे पौधे का बांझ झाड़ी बन जाना"
    },
    "question": {
      "en": "Have the flowers turned into green leafy malformations with zero fruit setting on the plant?",
      "hi": "क्या फूल खिलने के बजाय हरी पत्तियों में बदल गए हैं और पौधे पर कोई फल नहीं लग रहा?"
    }
  },
  "brinjal_excessive_short_inter-nodes": {
    "icon": "🍆",
    "label": {
      "en": "Internodes become severely shortened, giving a rosetted cluster look",
      "hi": "शाखाओं की गांठें बहुत पास-पास होना जिससे पौधा ठूंठ जैसा दिखे"
    },
    "question": {
      "en": "Are the stem nodes compressed very closely together, making branches look like crowded rosettes?",
      "hi": "क्या डालियों के बीच की दूरी बहुत कम हो गई है और पत्तियां एक गुच्छे में सिमट गई हैं?"
    }
  },
  "brinjal_circular_brown_spots_pycnidia_on_leaves": {
    "icon": "🎯",
    "label": {
      "en": "Circular brown to grey spots on leaves with pale centers and tiny black pycnidia specks",
      "hi": "पत्तियों पर गोल भूरे धब्बे जिनके केंद्र में काले नन्हे बिंदु होते हैं"
    },
    "question": {
      "en": "Are there circular greyish-brown spots on brinjal leaves speckled with tiny black dots?",
      "hi": "क्या पत्तियों पर गोल भूरे धब्बे हैं जिनमें बीच में काली मिर्च जैसे नन्हे दाने दिखते हैं?"
    }
  },
  "brinjal_soft_sunken_pale_rot_patches_on_fruit": {
    "icon": "🍆",
    "label": {
      "en": "Sunken, circular water-soaked pale spots on brinjal fruit turning brown with black rings",
      "hi": "बैंगन के फल पर धंसे हुए गोल सड़े गड्ढे जो बड़े होकर फल को गला देते हैं"
    },
    "question": {
      "en": "Are the brinjal fruits developing large, soft sunken rotten patches with concentric black rings?",
      "hi": "क्या बैंगन के फलों पर गोल धंसे हुए सड़े घाव बन रहे हैं जिनमें काले छल्लेदार घेरे हैं?"
    }
  },
  "brinjal_sudden_wilting_without_yellowing_green_wilt": {
    "icon": "🥀",
    "label": {
      "en": "Sudden complete wilting of plant during midday while foliage is still dark green (Bacterial Wilt)",
      "hi": "पत्तियों के हरे रहते ही दोपहर में पूरे पौधे का अचानक मुरझा जाना (जीवाणु उकठा)"
    },
    "question": {
      "en": "Did the brinjal plant suddenly wilt and collapse while its leaves were still completely green?",
      "hi": "क्या बैंगन का पौधा बिना पीला पड़े हरा रहते हुए ही अचानक पूरा मुरझा गया?"
    }
  },
  "brinjal_white_bacterial_slime_stream_in_water_vessel": {
    "icon": "🧪",
    "label": {
      "en": "Cut stem submerged in clear water exudes fine milky white bacterial streaming threads",
      "hi": "कटे हुए तने को पानी में डुबोने पर सफेद दूधिया धागे जैसी जीवाणु की धार निकलना"
    },
    "question": {
      "en": "When a freshly cut piece of the lower stem is dipped in clean water, do milky white threads stream out?",
      "hi": "क्या कटे हुए तने के टुकड़े को साफ पानी में रखने पर दूध जैसी सफेद धाराएं निकलती दिखाई देती हैं?"
    }
  },
  "okra_network_of_thickened_yellow_veins": {
    "icon": "🥬",
    "label": {
      "en": "Interveinal network of prominent thick yellow veins contrasting against green leaf (YVMV)",
      "hi": "पत्तियों की नसों का मोटा व चमकदार पीला होना (पीली नस मोज़ेक)"
    },
    "question": {
      "en": "Is there a bright yellow network of thickened veins standing out sharply against green leaf tissue?",
      "hi": "क्या भिंडी की पत्तियों की नसें मोटी होकर चमकदार पीले रंग की जाल जैसी दिख रही हैं?"
    }
  },
  "okra_leaves_completely_chlorotic_yellow": {
    "icon": "🥬",
    "label": {
      "en": "Severe chlorosis where newly formed upper leaves turn entirely yellow or creamy white",
      "hi": "नई पत्तियों का पूरी तरह पीला या मलाईदार सफेद पड़ जाना"
    },
    "question": {
      "en": "Are the younger top leaves turning completely yellow or creamy white without normal green color?",
      "hi": "क्या ऊपर की नई पत्तियां पूरी तरह से पीली या सफेद पड़ गई हैं और उनमें हरापन नहीं बचा?"
    }
  },
  "okra_fruits_stunted_yellow_white_fibrous": {
    "icon": "🥬",
    "label": {
      "en": "Okra pods become dwarfed, yellowish-white, hard, and fibrous (unmarketable)",
      "hi": "भिंडी के फल छोटे, पीले-सफेद, कड़े और रेशेदार हो जाना"
    },
    "question": {
      "en": "Are the developing okra pods stunted, pale yellowish-white, and tough or woody?",
      "hi": "क्या भिंडी के फल छोटे, पीले-सफेद और बहुत कड़े रेशेदार बन रहे हैं?"
    }
  },
  "okra_white_powdery_patches_on_leaf_surface": {
    "icon": "⚪",
    "label": {
      "en": "Talcum powder-like white patches appearing on both upper and lower leaf surfaces",
      "hi": "पत्तियों के ऊपर और नीचे सफेद पाउडर या चॉक जैसे धब्बे (चूर्णिल आसिता)"
    },
    "question": {
      "en": "Do you see white talcum powder-like fungal patches spreading across the okra foliage?",
      "hi": "क्या भिंडी की पत्तियों पर सफेद टैल्कम पाउडर जैसे फफूंदी के चकत्ते फैले हुए हैं?"
    }
  },
  "okra_leaves_turn_yellow_brown_and_dry": {
    "icon": "🍂",
    "label": {
      "en": "Powdery mildew patches coalesce causing leaves to turn brown, scorch, and drop",
      "hi": "सफेद पाउडर फैलने के बाद पत्तियों का भूरा होकर झुलसना और सूखना"
    },
    "question": {
      "en": "Are the heavily mildewed leaves turning brown and crispy and dropping prematurely?",
      "hi": "क्या सफेद पाउडर वाली पत्तियां बाद में भूरी होकर पापड़ जैसी सूखकर गिर रही हैं?"
    }
  },
  "okra_terminal_shoots_wilted_and_drooping": {
    "icon": "🥀",
    "label": {
      "en": "Central terminal shoots wilted, drooping downwards, and drying from caterpillar boring",
      "hi": "पौधे की मुख्य शाखा की नोंक का मुरझाकर नीचे लटक जाना (सूंड़ी प्रकोप)"
    },
    "question": {
      "en": "Are the growing shoot tips of the okra plants wilting, bending over, and dying back?",
      "hi": "क्या भिंडी के पौधे की ऊपर की कोमल टहनी मुरझाकर नीचे झुक गई है और सूख रही है?"
    }
  },
  "okra_circular_holes_bored_in_fruits_with_frass": {
    "icon": "🐛",
    "label": {
      "en": "Circular entrance holes bored into okra pods with insect excreta (frass) visible",
      "hi": "भिंडी के फल पर गोल छेद होना और कीड़े की विष्ठा (मल) चिपका होना"
    },
    "question": {
      "en": "Do you see circular bored holes in the okra fruits plugged with dark caterpillar frass?",
      "hi": "क्या भिंडी की फली पर गोल छेद हैं और छेद के पास कीड़े की काली विष्ठा चिपकी हुई है?"
    }
  },
  "okra_fruits_deformed_unmarketable": {
    "icon": "🥬",
    "label": {
      "en": "Fruits become bent, deformed, and rot internally from borer feeding",
      "hi": "फलों का टेढ़ा-मेढ़ा हो जाना और अंदर से सड़ जाना"
    },
    "question": {
      "en": "Are the harvested okra pods crooked, bent, and unmarketable due to internal larval tunneling?",
      "hi": "क्या भिंडी के फल अंदर से कीड़े द्वारा खाए जाने से टेढ़े-मेढ़े और बिकने लायक नहीं रहे?"
    }
  },
  "banana_lower_leaves_yellowing_from_margins_buckling": {
    "icon": "🍌",
    "label": {
      "en": "Lower leaves show prominent yellowing starting at leaf margins and buckling at petiole (Panama Wilt)",
      "hi": "निचली पत्तियों का किनारों से पीला पड़ना और डंडी से मुड़कर लटकना (पनामा विल्ट)"
    },
    "question": {
      "en": "Are the lowest leaves of the banana plant turning yellow along the borders and snapping down at the stalk?",
      "hi": "क्या केले की निचली पत्तियां किनारों से पीली पड़ रही हैं और डंडी से टूटकर लटक रही हैं?"
    }
  },
  "banana_skirt_of_dead_leaves_around_pseudostem": {
    "icon": "🥀",
    "label": {
      "en": "Wilted dead leaves hang down tightly around the pseudostem forming a skirt-like collar",
      "hi": "सूखी पत्तियां तने के चारों तरफ झालर या घाघरे जैसी लटक जाना"
    },
    "question": {
      "en": "Has a full ring of collapsed, dried brown leaves formed a hanging skirt around the trunk?",
      "hi": "क्या सूखी भूरी पत्तियां तने के चारों तरफ लटककर झालर जैसी बन गई हैं?"
    }
  },
  "banana_vascular_bundles_reddish_brown_discoloration": {
    "icon": "🍌",
    "label": {
      "en": "Reddish-brown to purple discoloration inside vascular bundles of cut pseudostem and corm",
      "hi": "तना या प्रकंद काटने पर अंदर की नसों का लाल-भूरा या बैंगनी दिखना"
    },
    "question": {
      "en": "When the pseudostem is cut horizontally, do you see dark reddish-brown dots or rings in the vessels?",
      "hi": "क्या केले के तने को काटने पर अंदर की नसों में लाल-भूरे या जामुनी रंग के छल्ले दिखते हैं?"
    }
  },
  "banana_spindle_shaped_spots_with_grey_centers_dark_margins": {
    "icon": "🍌",
    "label": {
      "en": "Spindle-shaped or oval leaf spots with sunken greyish centers and dark brown margins (Sigatoka)",
      "hi": "पत्तियों पर नाव या धुरी के आकार के धब्बे जिनके बीच का भाग स्लेटी और किनारे गहरे भूरे होते हैं"
    },
    "question": {
      "en": "Do banana leaves have narrow oval spots with ash-grey dead centers and dark brownish halos?",
      "hi": "क्या केले की पत्तियों पर नाव जैसे लंबे धब्बे हैं जिनके बीच में राख जैसा स्लेटी रंग है?"
    }
  },
  "banana_extensive_premature_foliar_drying_scorched": {
    "icon": "🍂",
    "label": {
      "en": "Spots coalesce rapidly causing extensive premature leaf scorch and bunch failure",
      "hi": "धब्बों के आपस में मिलने से पत्ती का जल जाना और घार/गुच्छे का दाना न भरना"
    },
    "question": {
      "en": "Are large sheets of the banana leaf area scorched and dry, causing undersized fruit bunches?",
      "hi": "क्या पत्तियां बुरी तरह झुलसकर सूख रही हैं जिससे केले का गुच्छा (घार) छोटा और कमजोर रह गया है?"
    }
  },
  "banana_leaves_short_narrow_bunched_at_apex_rosette": {
    "icon": "🍌",
    "label": {
      "en": "Emerging leaves become progressively short, narrow, and crowded into a rosette at the top (Bunchy Top)",
      "hi": "ऊपर की नई पत्तियां बहुत छोटी, संकरी और शीर्ष पर एक गुच्छे (रोजेट) में सिमटना"
    },
    "question": {
      "en": "Are the new top leaves short, narrow, stiff, and crowded tightly into a bunch like a cabbage?",
      "hi": "क्या केले के सिरे पर नई पत्तियां बहुत छोटी, पतली और पत्तागोभी की तरह एक गुच्छे में सिमट गई हैं?"
    }
  },
  "banana_dark_green_dots_and_dashes_along_leaf_veins": {
    "icon": "🍌",
    "label": {
      "en": "Characteristic dark green Morse code-like dots and dashes along the secondary leaf veins",
      "hi": "पत्ती की नसों के साथ गहरे हरे रंग की बिंदियों और डैश जैसी रेखाएं (मोर्स कोड)"
    },
    "question": {
      "en": "Held against sunlight, do you see tiny dark green streaks and dots forming broken lines along the leaf veins?",
      "hi": "क्या रोशनी में देखने पर पत्ती की नसों के साथ गहरे हरे रंग की नन्हीं बिंदियां और टूटी रेखाएं दिखती हैं?"
    }
  },
  "banana_plant_severely_stunted_no_bunch": {
    "icon": "🥀",
    "label": {
      "en": "Severely dwarfed plant that fails to emerge a normal flowering bunch",
      "hi": "पौधे का अत्यधिक बौना रह जाना और फल का गुच्छा (घार) बिल्कुल न निकलना"
    },
    "question": {
      "en": "Has the banana tree remained dwarfed and completely failed to throw out a normal fruit bunch?",
      "hi": "क्या पौधा बौना रह गया है और उसमें फल का गुच्छा बिल्कुल नहीं निकला है?"
    }
  },
  "dark_brown_black_elongated_pustules_stem": {
    "icon": "🟤",
    "label": {
      "en": "Dark reddish-brown to black elongated pustules on stems and leaf sheaths",
      "hi": "तनों और पर्ण आवरण पर गहरे लाल-भूरे से काले लंबे फफोले"
    },
    "question": {
      "en": "Do you see dark reddish-brown to black elongated pustules on the stems or leaf sheaths?",
      "hi": "क्या तनों या पत्तियों के आवरण पर गहरे भूरे-काले रंग के उभरे हुए लंबे फफोले दिख रहे हैं?"
    }
  },
  "pustules_rupture_epidermis_ragged_edges": {
    "icon": "🍂",
    "label": {
      "en": "Pustules rupture the stem epidermis leaving ragged shredded edges",
      "hi": "फफोले तने की ऊपरी त्वचा को फाड़कर खुरदरे रेशेदार किनारे बनाते हैं"
    },
    "question": {
      "en": "Have the pustules burst open through the stem surface, leaving ragged bark-like edges?",
      "hi": "क्या फफोले तने की त्वचा को फाड़कर बाहर निकल आए हैं और खुरदरे किनारे छोड़ रहे हैं?"
    }
  },
  "warm_temperature_with_high_humidity": {
    "icon": "🌡️",
    "label": {
      "en": "Warm temperature (>22°C) with persistent high humidity or rain",
      "hi": "गर्म तापमान (>22°C) और लगातार उच्च आर्द्रता या बारिश"
    },
    "question": {
      "en": "Has the weather recently been relatively warm (>22°C) with humid conditions?",
      "hi": "क्या हाल ही में मौसम गर्म (>22°C) और नमी युक्त रहा है?"
    }
  },
  "bleached_straw_colored_spikelets_earhead": {
    "icon": "🌾",
    "label": {
      "en": "Individual or groups of spikelets turn prematurely bleached straw-colored",
      "hi": "बाली के कुछ या सभी दाने समय से पहले सफेद-भूसे जैसे रंग के हो जाते हैं"
    },
    "question": {
      "en": "Are individual spikelets or portions of the wheat head bleached white while the rest remains green?",
      "hi": "क्या गेहूं की बाली के कुछ हिस्से या दाने समय से पहले सफेद पड़कर सूख रहे हैं?"
    }
  },
  "salmon_pink_orange_spores_glumes": {
    "icon": "🟠",
    "label": {
      "en": "Salmon-pink or orange spore masses on glumes and kernel bases",
      "hi": "दानों के छिलके और आधार पर गुलाबी-नारंगी फफूंद के बीजाणु"
    },
    "question": {
      "en": "Do you observe salmon-pink or orange spore masses on the infected spikelets?",
      "hi": "क्या प्रभावित बालियों के दानों पर गुलाबी या नारंगी रंग की फफूंद दिखाई दे रही है?"
    }
  },
  "prolonged_rain_fog_during_flowering": {
    "icon": "🌧️",
    "label": {
      "en": "Extended wet weather, rain or dense fog during wheat anthesis (flowering)",
      "hi": "फूल आने के समय लगातार बारिश, नमी या घना कोहरा"
    },
    "question": {
      "en": "Was there prolonged rainfall or heavy fog during the flowering/anthesis period?",
      "hi": "क्या गेहूं में फूल आने के दौरान लगातार बारिश या भारी कोहरा रहा था?"
    }
  },
  "individual_grains_transform_yellowish_green_velvet_balls": {
    "icon": "🟡",
    "label": {
      "en": "Individual grains transform into large swollen yellowish-green velvety balls",
      "hi": "धान के दाने बड़े, फूले हुए पीले-हरे मखमली गोलों में बदल जाते हैं (हल्दी रोग)"
    },
    "question": {
      "en": "Have individual paddy grains transformed into large, velvety yellowish-green balls?",
      "hi": "क्या धान की बाली में कुछ दाने फूलकर हल्दी जैसे पीले-हरे मखमली गोलों में बदल गए हैं?"
    }
  },
  "spore_balls_burst_releasing_greenish_black_powder": {
    "icon": "🟢",
    "label": {
      "en": "Smut balls burst open releasing dark greenish-black powdery dust",
      "hi": "मखमली गोले फटकर गहरा हरा-काला पाउडर छोड़ते हैं"
    },
    "question": {
      "en": "Do the velvet spore balls burst open releasing olive-green or black powdery dust?",
      "hi": "क्या वे गोले फटकर गहरे हरे या काले रंग का बीजाणु पाउडर छोड़ रहे हैं?"
    }
  },
  "high_relative_humidity_cloudy_rain_flowering": {
    "icon": "☁️",
    "label": {
      "en": "High humidity (>90%) with overcast skies during panicle emergence",
      "hi": "बाली निकलते समय 90% से अधिक नमी और बादलों भरा मौसम"
    },
    "question": {
      "en": "Was the weather overcast, rainy, and very humid when the paddy heads emerged?",
      "hi": "क्या धान की बालियां निकलते समय मौसम लगातार बादलों वाला और अत्यधिक नम था?"
    }
  },
  "dark_brown_oval_sesame_seed_spots_leaves": {
    "icon": "🟤",
    "label": {
      "en": "Dark brown oval sesame seed-shaped spots scattered on leaves and glumes",
      "hi": "पत्तियों और दानों पर तिल के आकार के गहरे भूरे अंडाकार धब्बे"
    },
    "question": {
      "en": "Are there small oval, dark brown spots resembling sesame seeds scattered across the leaves?",
      "hi": "क्या पत्तियों पर तिल के आकार के गहरे भूरे रंग के गोल/अंडाकार धब्बे दिखाई दे रहे हैं?"
    }
  },
  "spots_have_greyish_white_centers_yellow_halo": {
    "icon": "🎯",
    "label": {
      "en": "Spots develop greyish-white necrotic centers surrounded by a bright yellow halo",
      "hi": "धब्बों के केंद्र में राख जैसा सफेद रंग और चारों ओर पीला घेरा बन जाता है"
    },
    "question": {
      "en": "Do mature spots have a light grey center with a distinct yellowish chlorotic halo?",
      "hi": "क्या बड़े धब्बों के बीच में हल्का धूसर रंग और किनारे पर पीला छल्ला दिखता है?"
    }
  },
  "soil_nutritional_deficiency_potash": {
    "icon": "🧪",
    "label": {
      "en": "Poor unfertilized soil with potassium/potash or zinc deficiency",
      "hi": "पोटाश या सूक्ष्म पोषक तत्वों की कमी वाली कमजोर मिट्टी"
    },
    "question": {
      "en": "Is the crop growing in light, sandy, or nutrient-deficient soil lacking potash?",
      "hi": "क्या यह फसल पोटाश या पोषक तत्वों की कमी वाली हल्की मिट्टी में उगाई गई है?"
    }
  },
  "minute_light_green_spots_raised_central_pustule": {
    "icon": "🟢",
    "label": {
      "en": "Tiny light green specks with a raised pimple-like central pustule on leaf underside",
      "hi": "पत्ती की निचली सतह पर उभरी हुई फुंसी जैसे छोटे हल्के हरे धब्बे"
    },
    "question": {
      "en": "Do you see tiny raised blister-like pimples/pustules on the underside of soybean leaves?",
      "hi": "क्या सोयाबीन की पत्तियों के नीचे छोटे-छोटे उभरे हुए फुंसी जैसे दाने दिख रहे हैं?"
    }
  },
  "pustules_develop_without_bacterial_ooze_droplet": {
    "icon": "🍃",
    "label": {
      "en": "Pustules remain dry without forming gummy amber bacterial ooze droplets",
      "hi": "फुंसियां सूखी रहती हैं और उन पर कोई चिपचिपा जीवाणु रस नहीं निकलता"
    },
    "question": {
      "en": "Do the raised pustules stay dry without any sticky gummy ooze droplets forming on them?",
      "hi": "क्या वे उभरे हुए दाने सूखे रहते हैं और उन पर कोई चिपचिपा स्राव नहीं होता?"
    }
  },
  "warm_rainy_weather_with_frequent_splashes": {
    "icon": "🌦️",
    "label": {
      "en": "Warm rainy weather with wind-driven rain splashes spreading infection",
      "hi": "गर्म बारिश और हवा के साथ पानी की छींटों से संक्रमण का फैलाव"
    },
    "question": {
      "en": "Has the disease appeared or spread rapidly following warm rainstorms and wind?",
      "hi": "क्या गर्म मौसम में तेज हवा-बारिश के बाद यह समस्या तेजी से फैली है?"
    }
  },
  "flared_squares_unopened_drying_flower_buds": {
    "icon": "🥀",
    "label": {
      "en": "Flared squares where bracteoles open out abnormally and flower buds turn yellow and drop",
      "hi": "कलियों की पत्तियां बाहर की ओर फैल जाती हैं (फ्लेयर्ड स्क्वेयर) और सूखकर गिरती हैं"
    },
    "question": {
      "en": "Are young flower buds (squares) flaring open abnormally, turning yellow, and dropping off?",
      "hi": "क्या कपास की छोटी कलियां (स्क्वेयर) असामान्य रूप से खुलकर पीली पड़ रही हैं और झड़ रही हैं?"
    }
  },
  "tender_terminal_shoots_bored_and_drooping": {
    "icon": "🌱",
    "label": {
      "en": "Tender growing shoots bored by caterpillars, wilting and drooping downwards",
      "hi": "कोमल ऊपरी शाखाएं अंदर से कीड़े द्वारा खाए जाने से मुरझाकर लटक जाती हैं"
    },
    "question": {
      "en": "Are tender terminal shoots bored by larvae, causing the top shoots to wilt and droop?",
      "hi": "क्या पौधे की सबसे ऊपर की कोमल शाखाएं अंदर से छेदकर मुरझाकर नीचे झुक गई हैं?"
    }
  },
  "caterpillar_spindle_body_orange_black_warts": {
    "icon": "🐛",
    "label": {
      "en": "Spindle-shaped brownish caterpillar with orange, black, and white warts along its body",
      "hi": "नारंगी, काले और सफेद उभारों (मस्सों) वाली तकली के आकार की इल्ली"
    },
    "question": {
      "en": "Have you found spindle-shaped caterpillars with prominent orange and black warts on their bodies?",
      "hi": "क्या कलियों या टहनियों के अंदर नारंगी और काले धब्बों वाली नुकीली इल्ली मिली है?"
    }
  },
  "potato_sudden_midday_wilting": {
    "icon": "☀️",
    "label": {
      "en": "Rapid wilting of potato foliage during warm sunny midday hours",
      "hi": "दोपहर की तेज धूप में आलू के पौधे का अचानक मुरझा जाना"
    },
    "question": {
      "en": "Do potato plants wilt rapidly during hot sunny afternoons, sometimes recovering overnight initially?",
      "hi": "क्या दोपहर के समय आलू के पौधे अचानक मुरझा जाते हैं और शुरू में रात को थोड़े संभलते हैं?"
    }
  },
  "potato_vascular_brown_ring_tuber": {
    "icon": "🥔",
    "label": {
      "en": "Cut potato tuber reveals a distinct brown ring along the vascular bundles",
      "hi": "कटे हुए आलू के कंद में छिलके के पास एक भूरा संवहनी छल्ला दिखाई देता है"
    },
    "question": {
      "en": "When you cut across an infected potato tuber, is there a distinct brown ring inside?",
      "hi": "क्या आलू को बीच से काटने पर छिलके के थोड़ा अंदर भूरे रंग का गोल छल्ला दिखाई देता है?"
    }
  },
  "potato_bacterial_ooze_tuber_eyes": {
    "icon": "💧",
    "label": {
      "en": "Milky bacterial slime exuding from tuber eyes or vascular ring when gently squeezed",
      "hi": "कंद को दबाने पर उसकी आंखों या भूरे छल्ले से सफेद दूधिया मवाद जैसा रस निकलता है"
    },
    "question": {
      "en": "Does white milky bacterial slime ooze out from the tuber eyes or vascular ring when squeezed?",
      "hi": "क्या आलू को हल्का दबाने पर आंखों या कटे छल्ले से दूधिया सफेद जीवाणु रस बाहर आता है?"
    }
  },
  "potato_corky_rough_raised_scab_tuber": {
    "icon": "🥔",
    "label": {
      "en": "Rough, corky, raised or crater-like brownish scab lesions on potato tuber skin",
      "hi": "आलू की त्वचा पर खुरदरे, उभरे हुए या गड्ढेनुमा भूरे रंग के खुरंड (स्कैब)"
    },
    "question": {
      "en": "Are there rough, corky, raised or pitted brownish-tan scabs on the potato tuber skin?",
      "hi": "क्या आलू के छिलके पर खुरदरे, पपड़ीदार या गड्ढेदार भूरे रंग के दाद/खुरंड बने हुए हैं?"
    }
  },
  "potato_shallow_pitted_depressions": {
    "icon": "🕳️",
    "label": {
      "en": "Shallow pitted depressions and rough fissures disfiguring the tuber surface",
      "hi": "कंद की सतह पर उथले गड्ढे और खुरदरी दरारें जिससे बाजार भाव गिरता है"
    },
    "question": {
      "en": "Do the scab lesions form shallow pitted craters or rough fissures across the tuber?",
      "hi": "क्या खुरंड के कारण आलू की सतह पर छोटे-छोटे उथले गड्ढे या दरारें बन गई हैं?"
    }
  },
  "alkaline_dry_soil_conditions": {
    "icon": "🏜️",
    "label": {
      "en": "Dry sandy or alkaline soil (pH > 6.8) during the tuber development period",
      "hi": "कंद बनते समय सूखी, हल्की या क्षारीय (pH > 6.8) मिट्टी की स्थिति"
    },
    "question": {
      "en": "Was the soil relatively dry and alkaline or treated with lime/fresh ashes during tuber initiation?",
      "hi": "क्या कंद बनते समय खेत की मिट्टी सूखी या क्षारीय थी या चूना/राख डाली गई थी?"
    }
  },
  "potato_upward_rolling_stiff_lower_leaves": {
    "icon": "🍃",
    "label": {
      "en": "Lower leaves roll upward along margins into erect, stiff, leathery cup or spoon shapes",
      "hi": "निचली पत्तियां किनारों से ऊपर की ओर मुड़कर चमचे जैसी कठोर और खड़ी हो जाती हैं"
    },
    "question": {
      "en": "Are the lower leaves rolling upward into stiff, erect, spoon-shaped or cupped leaves?",
      "hi": "क्या आलू की निचली पत्तियां ऊपर की ओर मुड़कर कठोर, खड़ी और चम्मच के आकार की हो गई हैं?"
    }
  },
  "potato_leathery_brittle_leaves_rattling": {
    "icon": "🍂",
    "label": {
      "en": "Leaves become abnormally thick, leathery, and make a crisp rattling sound when shaken",
      "hi": "पत्तियां असामान्य रूप से मोटी और चमड़े जैसी कठोर होकर हिलाने पर खड़खड़ाती हैं"
    },
    "question": {
      "en": "Do the curled leaves feel thick, brittle, and produce a dry rattling sound when brushed?",
      "hi": "क्या मुड़ी हुई पत्तियां छूने पर बहुत मोटी, कड़क लगती हैं और हिलाने पर सूखी आवाज करती हैं?"
    }
  },
  "potato_apical_chlorosis_stunting": {
    "icon": "🌾",
    "label": {
      "en": "Stunting of plant with apical leaves showing pale yellowish chlorosis or pinkish tinge",
      "hi": "पौधा बौना रह जाता है और ऊपर की नई पत्तियां पीली या हल्की गुलाबी आभा लिए होती हैं"
    },
    "question": {
      "en": "Is the entire potato plant stunted with pale yellowish or pinkish apical foliage?",
      "hi": "क्या पूरा पौधा छोटा रह गया है और ऊपर की पत्तियां हल्की पीली या गुलाबी दिख रही हैं?"
    }
  },
  "maize_large_cigar_boat_shaped_lesions": {
    "icon": "🍂",
    "label": {
      "en": "Large elongated elliptical, cigar or boat-shaped greyish-tan necrotic lesions (3-15 cm)",
      "hi": "पत्तियों पर सिगार या नाव के आकार के बड़े लंबे धूसर-भूरे धब्बे (3 से 15 सेमी लंबे)"
    },
    "question": {
      "en": "Do you observe large, elongated cigar-shaped or boat-shaped tan lesions (3-15 cm long) on maize leaves?",
      "hi": "क्या मक्के की पत्तियों पर सिगार या नाव के आकार के बहुत लंबे (3-15 सेमी) भूरे सूखे धब्बे दिख रहे हैं?"
    }
  },
  "maize_olive_grey_spores_on_lesions": {
    "icon": "🌫️",
    "label": {
      "en": "Dark olive-grey or blackish velvet fungal spore coating over lesion centers under humid weather",
      "hi": "नमी वाले मौसम में धब्बों के बीच में गहरा जैतून-धूसर या काला मखमली फफूंद"
    },
    "question": {
      "en": "Is there a dark olive-grey or velvety spore layer developing over the center of the lesions?",
      "hi": "क्या उन लंबे धब्बों के बीच में जैतून जैसे हरे-काले रंग की मखमली फफूंद दिखती है?"
    }
  },
  "maize_extensive_canopy_blighting": {
    "icon": "🔥",
    "label": {
      "en": "Lesions coalesce rapidly, scorching and killing entire lower leaf blades upwards",
      "hi": "धब्बे आपस में मिलकर नीचे से ऊपर की ओर पूरी पत्तियों को झुलसा देते हैं"
    },
    "question": {
      "en": "Have the long lesions joined together, making the entire lower leaves look scorched and burnt?",
      "hi": "क्या वे धब्बे मिलकर पूरी निचली पत्तियों को आग से झुलसी हुई जैसी बना रहे हैं?"
    }
  },
  "maize_concentric_bleached_bands_sheath": {
    "icon": "🦓",
    "label": {
      "en": "Large irregular bleached straw blotches with characteristic purplish-brown concentric bands on leaf sheaths",
      "hi": "पत्ती की शीथ पर जामुनी-भूरे रंग की धारियों वाले बड़े हल्के सफेद-भूसे जैसे छल्लेदार धब्बे"
    },
    "question": {
      "en": "Do the lower leaf sheaths show large bleached patches with alternating purplish-brown concentric bands?",
      "hi": "क्या तने के निचले छिलके (शीथ) पर हल्के रंग के बड़े धब्बों पर जामुनी-भूरे रंग की पट्टियां बनी हैं?"
    }
  },
  "maize_blight_ascending_to_ears": {
    "icon": "🌽",
    "label": {
      "en": "Blight ascends progressively from base up to the ear husks causing cob rotting",
      "hi": "झुलसा रोग नीचे से ऊपर भुट्टे के छिलकों तक पहुंचकर भुट्टे को सड़ा देता है"
    },
    "question": {
      "en": "Has the banded blight spread upwards from the lower stem to infect the ear husks and cob?",
      "hi": "क्या यह बीमारी नीचे के तने से ऊपर चढ़कर भुट्टे के आवरण और दानों तक पहुंच गई है?"
    }
  },
  "maize_brown_globose_sclerotia_sheath": {
    "icon": "🟤",
    "label": {
      "en": "Brownish-tan spherical sclerotial resting bodies formed on infected sheaths and husks",
      "hi": "संक्रमित शीथ और भुट्टों पर गोल भूरे रंग के छोटे-छोटे दाने (स्क्लेरोशिया)"
    },
    "question": {
      "en": "Can you see small brown spherical mustard-seed-like resting bodies on the diseased sheaths?",
      "hi": "क्या प्रभावित छिलकों पर भूरे रंग के छोटे गोल दाने जैसी फफूंद की गांठें दिख रही हैं?"
    }
  },
  "maize_pinhole_parallel_slits_whorl": {
    "icon": "🕳️",
    "label": {
      "en": "Clean horizontal series of parallel pinholes and shot-holes across unfurling whorl leaves",
      "hi": "गोभ की खुलती पत्तियों पर एक सीधी कतार में गोल छेद और समानांतर छलनी जैसे निशान"
    },
    "question": {
      "en": "As new leaves emerge from the whorl, do they show neat parallel rows of small pinholes across the blade?",
      "hi": "क्या गोभ से निकलने वाली नई पत्तियों पर एक सीध में बंदूक के छर्रों जैसे छेद बने हुए हैं?"
    }
  },
  "maize_deadheart_offensive_odor": {
    "icon": "🥀",
    "label": {
      "en": "Central growing shoot withers and dries into a dead heart that pulls easily with offensive smell",
      "hi": "बीच की मुख्य गोभ सूखकर डेड हार्ट बन जाती है जो खींचने पर बदबू के साथ आसानी से निकल आती है"
    },
    "question": {
      "en": "Has the central young whorl dried into a dead heart that pulls out easily and smells foul?",
      "hi": "क्या मक्के की बीच की गोभ सूख गई है और खींचने पर सड़ी हुई बदबू के साथ बाहर निकल आती है?"
    }
  },
  "maize_caterpillar_tunneling_stem_base": {
    "icon": "🐛",
    "label": {
      "en": "Brown-headed caterpillar with longitudinal body stripes boring tunnels inside the stalk base",
      "hi": "भूरे सिर और शरीर पर धारियों वाली इल्ली तने के अंदर सुरंग बनाकर खाती है"
    },
    "question": {
      "en": "Did you find a striped caterpillar tunneling inside the central stem pith near the base?",
      "hi": "क्या तने को चीरने पर अंदर धारियों वाली इल्ली तने के गूदे को खाती हुई दिखाई दी?"
    }
  },
  "chilli_white_powdery_fuzz_underside": {
    "icon": "⚪",
    "label": {
      "en": "Delicate white talcum powdery fungal patches predominantly on the underside of leaves",
      "hi": "पत्तियों की निचली सतह पर सफेद पाउडर जैसी फफूंद के धब्बे"
    },
    "question": {
      "en": "Is there a fine white powdery fungal coating primarily on the lower surface of chilli leaves?",
      "hi": "क्या मिर्च की पत्तियों की निचली सतह पर सफेद पाउडर या आटे जैसी फफूंद दिख रही है?"
    }
  },
  "chilli_bright_yellow_chlorotic_patches_upper": {
    "icon": "🟡",
    "label": {
      "en": "Corresponding bright yellow chlorotic angular patches visible on the upper leaf surface",
      "hi": "पत्ती की ऊपरी सतह पर उसी स्थान पर चमकीले पीले रंग के कोणीय धब्बे"
    },
    "question": {
      "en": "Do you see bright yellow angular patches on the top of the leaf directly above the white powder below?",
      "hi": "क्या नीचे की सफेद फफूंद के ठीक ऊपर पत्ती की ऊपरी सतह पर चमकीले पीले धब्बे दिखते हैं?"
    }
  },
  "chilli_severe_premature_leaf_fall": {
    "icon": "🍂",
    "label": {
      "en": "Infected leaves roll inward, dry rapidly, and drop off prematurely leaving bare twigs",
      "hi": "प्रभावित पत्तियां अंदर की ओर मुड़कर तेजी से सूखती हैं और झड़कर टहनियों को नंगा कर देती हैं"
    },
    "question": {
      "en": "Are the diseased leaves drying and dropping off heavily, leaving bare chilli branches?",
      "hi": "क्या पत्तियां सूख-सूखकर भारी मात्रा में झड़ रही हैं और सिर्फ खाली डालियां बच रही हैं?"
    }
  },
  "chilli_small_circular_dark_water_soaked_spots": {
    "icon": "🟤",
    "label": {
      "en": "Small circular to irregular dark brown water-soaked spots with pale centers on leaves",
      "hi": "पत्तियों पर छोटे गोल से अनियमित गहरे भूरे जलीय धब्बे जिनके केंद्र हल्के होते हैं"
    },
    "question": {
      "en": "Do you see small, dark brown water-soaked spots with lighter centers scattered on chilli leaves?",
      "hi": "क्या मिर्च की पत्तियों पर पानी से भीगे जैसे छोटे गहरे भूरे गोल धब्बे दिखाई दे रहे हैं?"
    }
  },
  "chilli_corky_rough_scab_spots_fruit": {
    "icon": "🌶️",
    "label": {
      "en": "Raised brownish, corky, wart-like scab pustules developing on green and ripe chilli fruits",
      "hi": "हरी और पकी मिर्चों पर उभरे हुए खुरदरे, पपड़ीदार मस्से जैसे छाले (स्कैब)"
    },
    "question": {
      "en": "Are there raised, rough, corky blister spots or scabs appearing on the chilli fruits?",
      "hi": "क्या मिर्च के फलों पर उभरे हुए खुरदरे, मस्से जैसे भूरे रंग के छाले बने हुए हैं?"
    }
  },
  "chilli_chlorotic_halo_leaf_shedding": {
    "icon": "🟡",
    "label": {
      "en": "Yellow chlorotic halo around spots causing extensive blighting and defoliation during warm rains",
      "hi": "धब्बों के चारों ओर पीला घेरा जिससे गर्म बारिश में पत्तियां झुलसकर तेजी से गिरती हैं"
    },
    "question": {
      "en": "Are the spots surrounded by a yellow ring, causing extensive leaf yellowing and dropping during rains?",
      "hi": "क्या उन धब्बों के चारों ओर पीला छल्ला है और बारिश के बाद पत्तियां तेजी से पीली होकर गिर रही हैं?"
    }
  },
  "chilli_progressive_yellowing_wilting_foliage": {
    "icon": "🥀",
    "label": {
      "en": "Upward progressing yellowing, drooping, and permanent wilting of foliage starting from lower leaves",
      "hi": "निचली पत्तियों से शुरू होकर ऊपर की ओर बढ़ता पीलापन और पौधे का स्थायी रूप से मुरझाना"
    },
    "question": {
      "en": "Is the plant foliage yellowing from the bottom upwards and drooping into a permanent wilt?",
      "hi": "क्या मिर्च का पौधा नीचे से ऊपर की ओर पीला पड़कर सूख रहा है और स्थायी रूप से मुरझा गया है?"
    }
  },
  "chilli_collar_brown_lesion_root_decay": {
    "icon": "🪵",
    "label": {
      "en": "Dark brown rotting lesion girdling the collar line with taproot decay and loss of fine roots",
      "hi": "तने के आधार पर गहरा भूरा सड़ा हुआ घाव और मुख्य जड़ का सड़ जाना"
    },
    "question": {
      "en": "Is there a dark brown rotted constriction at the stem collar and decay of the root system?",
      "hi": "क्या जमीन की सतह पर तने का निचला हिस्सा भूरा पड़कर सड़ गया है और जड़ें गल रही हैं?"
    }
  },
  "chilli_vascular_browning_split_stem": {
    "icon": "🔬",
    "label": {
      "en": "Cut stem collar reveals distinct dark reddish-brown vascular discoloration inside",
      "hi": "तने को चीरकर देखने पर अंदर संवहनी नलिकाओं में गहरा लाल-भूरा रंग दिखता है"
    },
    "question": {
      "en": "When you slice open the lower stem, do you see dark brown discoloration in the inner wood/vessels?",
      "hi": "क्या नीचे के तने को चीरकर देखने पर अंदर भूरे-लाल रंग की नसें/धारियां दिखाई देती हैं?"
    }
  },
  "mustard_angular_pale_yellow_chlorotic_patches": {
    "icon": "🟡",
    "label": {
      "en": "Yellowish angular chlorotic spots on the upper leaf surface bounded by veins",
      "hi": "पत्ती की ऊपरी सतह पर नसों से घिरे हुए कोणीय हल्के पीले धब्बे"
    },
    "question": {
      "en": "Are there pale yellow angular patches on the top surface of the mustard leaves bounded by veins?",
      "hi": "क्या सरसों की पत्तियों की ऊपरी सतह पर नसों के बीच कोणीय पीले धब्बे दिखाई दे रहे हैं?"
    }
  },
  "mustard_greyish_white_downy_growth_underside": {
    "icon": "🌫️",
    "label": {
      "en": "Delicate greyish-white downy fungal felt on the lower leaf surface under cool damp morning conditions",
      "hi": "सुबह की ओस और ठंड में पत्ती की निचली सतह पर हल्का भूरा-सफेद रोएंदार फफूंद"
    },
    "question": {
      "en": "Do you see a delicate greyish-white downy fungal fuzz on the underside of those yellow patches in the morning?",
      "hi": "क्या सुबह के समय उन पीले धब्बों के नीचे पत्ती की उल्टी तरफ सफेद-धूसर रोएंदार फफूंद दिखती है?"
    }
  },
  "mustard_hypertrophy_inflorescence_stems": {
    "icon": "🌱",
    "label": {
      "en": "Swelling, purplish distortion, and twisting of flower stems and floral branches",
      "hi": "फूलों की डालियों का असामान्य रूप से सूज जाना, मुड़ना और जामुनी रंग का होना"
    },
    "question": {
      "en": "Are the flowering shoots swollen, twisted, or distorted with a purplish discoloration?",
      "hi": "क्या फूलों की टहनियां असामान्य रूप से फूलकर मुड़ गई हैं और जामुनी रंग की हो रही हैं?"
    }
  },
  "mustard_water_soaked_elongated_bleached_stem_lesions": {
    "icon": "🪵",
    "label": {
      "en": "Elongated, water-soaked, bleached ash-white lesions girdling the lower main stem",
      "hi": "तने के निचले हिस्से पर पानी से भीगे जैसे लंबे, राख जैसे सफेद रंग के सूखे घाव"
    },
    "question": {
      "en": "Does the lower stem show elongated, bleached straw-white or ash-colored lesions girdling the stalk?",
      "hi": "क्या सरसों के तने के निचले हिस्से पर राख जैसे सफेद रंग के लंबे धब्बे बने हैं जो तने को घेर रहे हैं?"
    }
  },
  "mustard_white_cottony_mycelium_on_stem": {
    "icon": "☁️",
    "label": {
      "en": "Dense cottony white fungal mycelium spreading over stem lesions in foggy weather",
      "hi": "कोहरे वाले मौसम में तने के घावों पर सफेद रुई जैसी घनी फफूंद फैल जाती है"
    },
    "question": {
      "en": "Is there a dense white cotton-like mold growing over the stem lesions during humid foggy days?",
      "hi": "क्या कोहरे और नमी वाले दिनों में तने के उन धब्बों पर रुई जैसी सफेद फफूंद दिखाई देती है?"
    }
  },
  "mustard_black_elongated_sclerotia_inside_pith": {
    "icon": "🟤",
    "label": {
      "en": "Split stem reveals large black mouse-dropping-like sclerotial bodies inside the hollow pith",
      "hi": "तने को चीरने पर अंदर खोखले गूदे में चूहे की लेंडी जैसे काले कड़े दाने (स्क्लेरोशिया) मिलते हैं"
    },
    "question": {
      "en": "When the dried stem is split open, are there hard black cylindrical pellets inside the hollow stalk?",
      "hi": "क्या सूखे तने को चीरकर देखने पर अंदर खोखली नली में चूहे की लेंडी जैसे काले कड़े दाने मिलते हैं?"
    }
  },
  "mustard_white_floury_talcum_patches_leaves": {
    "icon": "⚪",
    "label": {
      "en": "Small dirty-white floury powdery spots expanding across leaves, stems, and green siliquae",
      "hi": "पत्तियों, तनों और फलियों पर छोटे सफेद आटे या पाउडर जैसे धब्बे फैलते हैं"
    },
    "question": {
      "en": "Do you see white flour-like powdery patches spreading over leaves, stems, and green pods?",
      "hi": "क्या सरसों की पत्तियों, तनों और फलियों पर सफेद आटे जैसा पाउडर लिपटा हुआ दिखता है?"
    }
  },
  "mustard_entire_canopy_white_powder_coating": {
    "icon": "❄️",
    "label": {
      "en": "Whole plant foliage and pods appear dusted with white flour, turning greyish-brown later",
      "hi": "पूरा पौधा और फलियां सफेद पाउडर से पुते हुए दिखते हैं जो बाद में मटमैले हो जाते हैं"
    },
    "question": {
      "en": "Has the entire plant canopy become coated with white powder as if dusted with flour?",
      "hi": "क्या पूरा पौधा और फलियां ऐसे सफेद दिख रहे हैं जैसे किसी ने सूखा आटा छिड़क दिया हो?"
    }
  },
  "mustard_shriveled_undersized_seeds": {
    "icon": "🌰",
    "label": {
      "en": "Infected pods become dwarfed, discolored, and produce tiny, shriveled, oil-poor seeds",
      "hi": "फलियां छोटी रह जाती हैं और अंदर के दाने सिकुड़े हुए, पतले और कम तेल वाले निकलते हैं"
    },
    "question": {
      "en": "Are the mature pods small, pale, and containing shriveled, underdeveloped seeds?",
      "hi": "क्या फलियां छोटी और बदरंग हो गई हैं और उनके अंदर के दाने बहुत छोटे व सिकुड़े हुए हैं?"
    }
  },
  "sugarcane_profuse_bushy_thin_chlorotic_tillers": {
    "icon": "🌾",
    "label": {
      "en": "Prolific emergence of numerous thin, papery, pale-yellow to white tillers resembling wild grass clumps",
      "hi": "गन्ने के थान से बहुत पतले, पीले-सफेद कल्ले निकलकर जंगली घास जैसी घनी झाड़ी बना लेते हैं"
    },
    "question": {
      "en": "Are clumps producing an abnormal bushy mass of thin, pale-yellow grassy shoots from the base?",
      "hi": "क्या गन्ने की जड़ से बहुत सारे पतले, पीले-सफेद कल्ले निकलकर बिल्कुल जंगली घास का गुच्छा बना रहे हैं?"
    }
  },
  "sugarcane_narrow_papery_leaves_no_stalk": {
    "icon": "🍃",
    "label": {
      "en": "Leaves are short, narrow, albino or chlorotic with complete failure to form thick millable cane stalks",
      "hi": "पत्तियां छोटी, पतली और सफेद-पीली होती हैं और मोटा पेराई योग्य गन्ना बिल्कुल नहीं बनता"
    },
    "question": {
      "en": "Are the shoots showing very narrow, papery pale leaves with complete failure to produce normal thick stalks?",
      "hi": "क्या पत्तियां बहुत पतली, कागजी और सफेद हो गई हैं और सामान्य मोटा गन्ना बिल्कुल नहीं बन पा रहा है?"
    }
  },
  "sugarcane_spongy_stunted_stool": {
    "icon": "🪵",
    "label": {
      "en": "Infected clumps remain completely stunted, spongy, and dry up prematurely",
      "hi": "रोगी थान पूरी तरह बौना, स्पंजी रह जाता है और समय से पहले सूख जाता है"
    },
    "question": {
      "en": "Does the infected stool remain dwarfed, spongy, and fail to yield any harvestable canes?",
      "hi": "क्या ग्रसित थान पूरी तरह बौना रह गया है और उसमें काटने लायक कोई गन्ना नहीं निकला?"
    }
  },
  "sugarcane_deadheart_offensive_foul_odor": {
    "icon": "🥀",
    "label": {
      "en": "Central young shoot dries into a dead heart that comes out easily with a light tug and smells offensive",
      "hi": "बीच की मुख्य गोभ सूखकर डेड हार्ट बन जाती है जो खींचने पर सड़ी बदबू के साथ आसानी से निकल आती है"
    },
    "question": {
      "en": "Has the central shoot of young cane dried into a dead heart that pulls out easily and gives a rotten smell?",
      "hi": "क्या छोटे गन्ने (1-3 माह) की बीच की गोभ सूख गई है और खींचने पर सड़ी हुई बदबू के साथ बाहर आ जाती है?"
    }
  },
  "sugarcane_entrance_hole_at_soil_surface": {
    "icon": "🕳️",
    "label": {
      "en": "Tiny circular entrance hole bored into the shoot right at or just beneath the soil level",
      "hi": "जमीन की सतह पर या थोड़ा नीचे तने में कीड़े द्वारा किया गया छोटा गोल छेद"
    },
    "question": {
      "en": "Can you see a small circular borehole bored into the base of the shoot near the soil surface?",
      "hi": "क्या जमीन के पास तने के निचले हिस्से में कीड़े के घुसने का एक छोटा गोल छेद दिखाई देता है?"
    }
  },
  "sugarcane_caterpillar_five_violet_stripes": {
    "icon": "🐛",
    "label": {
      "en": "Dirty-white caterpillar with five violet-brown stripes along its back found inside the shoot",
      "hi": "तने के अंदर पीठ पर पांच बैंगनी-भूरे रंग की धारियों वाली मटमैली सफेद इल्ली"
    },
    "question": {
      "en": "Inside the damaged shoot, is there a dirty-white caterpillar having five violet-brown stripes on its back?",
      "hi": "क्या सूखे कल्ले को चीरने पर अंदर पीठ पर पांच बैंगनी धारियों वाली इल्ली मिली है?"
    }
  },
  "sugarcane_small_yellow_elongated_flecks": {
    "icon": "🟡",
    "label": {
      "en": "Tiny elongated yellowish spots on both leaf surfaces expanding parallel to veins",
      "hi": "पत्तियों के दोनों तरफ नसों के समानांतर फैलने वाले छोटे लंबे पीले धब्बे"
    },
    "question": {
      "en": "Do you observe small elongated yellowish spots running parallel to the leaf veins?",
      "hi": "क्या गन्ने की पत्तियों पर नसों के समानांतर छोटे-छोटे पीले लंबे धब्बे दिख रहे हैं?"
    }
  },
  "sugarcane_reddish_brown_linear_erumpent_pustules": {
    "icon": "🟤",
    "label": {
      "en": "Spots turn reddish-brown and rupture into powdery raised pustules releasing rust spores",
      "hi": "धब्बे लाल-भूरे हो जाते हैं और फटकर पाउडर जैसे उभरे हुए रतुआ के फफोले बनाते हैं"
    },
    "question": {
      "en": "Have the spots turned reddish-brown, bursting open on the underside to release orange-brown powder?",
      "hi": "क्या वे धब्बे लाल-भूरे होकर फट गए हैं और हाथ लगाने पर गेरुआ या भूरा पाउडर लगता है?"
    }
  },
  "sugarcane_extensive_apical_scorching": {
    "icon": "🔥",
    "label": {
      "en": "Pustules coalesce causing leaf blades to dry prematurely and give a scorched fired appearance",
      "hi": "फफोले आपस में मिलकर पत्तियों को समय से पहले सूखाकर जली हुई जैसी बना देते हैं"
    },
    "question": {
      "en": "Have the rust pustules covered the leaf blades so heavily that the leaves look dried and burnt?",
      "hi": "क्या रतुआ के कारण गन्ने की पत्तियां झुलसकर बिल्कुल सूखी और जली हुई जैसी दिख रही हैं?"
    }
  },
  "groundnut_brown_lesion_soil_line_wilting": {
    "icon": "🪵",
    "label": {
      "en": "Sudden wilting of main stems or branches associated with a dark brown water-soaked lesion at the soil line",
      "hi": "जमीन की सतह पर गहरे भूरे पानीदार घाव के साथ मूंगफली की शाखाओं का अचानक मुरझा जाना"
    },
    "question": {
      "en": "Are branches wilting suddenly with a dark brown rotting lesion on the stem right at the soil level?",
      "hi": "क्या जमीन की सतह पर तने के भूरे सड़न के साथ मूंगफली की डालियां अचानक मुरझा रही हैं?"
    }
  },
  "groundnut_fan_like_white_mycelial_web_soil": {
    "icon": "🕸️",
    "label": {
      "en": "Prominent white, fan-shaped, feather-like fungal mycelial web spreading over the stem collar and adjacent soil",
      "hi": "तने के आधार और आसपास की मिट्टी पर पंखे जैसा फैला हुआ सफेद रोएंदार जाला"
    },
    "question": {
      "en": "Is there a thick white, feather-like or fan-shaped fungal web growing on the stem base and soil surface?",
      "hi": "क्या तने के निचले हिस्से और जमीन पर रुई या पंखे जैसा फैला हुआ सफेद फफूंद का जाला दिख रहा है?"
    }
  },
  "groundnut_mustard_seed_brown_sclerotia_collar": {
    "icon": "🟤",
    "label": {
      "en": "Numerous tiny round mustard-seed-sized resting sclerotial bodies embedded in the white web",
      "hi": "सफेद जाले में सरसों के दाने के आकार की अनगिनत गोल भूरी गांठें (स्क्लेरोशिया)"
    },
    "question": {
      "en": "Can you see small round brownish bodies resembling mustard seeds scattered on the white fungal web?",
      "hi": "क्या उस सफेद जाले पर सरसों के दाने जैसी छोटी-छोटी गोल भूरी गांठें चिपकी हुई दिख रही हैं?"
    }
  },
  "groundnut_chlorotic_concentric_ring_spots_young_leaves": {
    "icon": "🎯",
    "label": {
      "en": "Chlorotic ring spots, target patterns, and chlorotic veinal banding on young quadrifoliate leaves",
      "hi": "नई चौपत्तिया पत्तियों पर गोल पीले छल्लेदार धब्बे और नसों के पास पीलापन"
    },
    "question": {
      "en": "Do young terminal leaves show distinct chlorotic ring spots and concentric target-like rings?",
      "hi": "क्या ऊपर की नई पत्तियों पर पीले रंग के गोल छल्ले और निशाने (टारगेट) जैसे गोल निशान बने हैं?"
    }
  },
  "groundnut_terminal_growing_bud_necrosis": {
    "icon": "🥀",
    "label": {
      "en": "Necrosis, browning, and dying back of the central terminal growing bud",
      "hi": "मुख्य ऊपरी कली का भूरा पड़कर सूखना और सड़ जाना (बड नेक्रोसिस)"
    },
    "question": {
      "en": "Has the central top growing bud turned brown, necrotic, and died back completely?",
      "hi": "क्या पौधे की सबसे ऊपर की मुख्य कली भूरी पड़कर सड़ गई है और सूख चुकी है?"
    }
  },
  "groundnut_severe_stunting_auxiliary_shoots": {
    "icon": "🌱",
    "label": {
      "en": "Severe plant dwarfing with proliferated upright auxiliary shoots giving a bushy appearance",
      "hi": "पौधा बहुत छोटा रह जाता है और अगल-बगल से बहुत सी शाखाएं निकलकर झाड़ीनुमा हो जाती हैं"
    },
    "question": {
      "en": "Is the plant severely dwarfed with numerous short erect side shoots giving a stunted bushy clump?",
      "hi": "क्या पौधा बिल्कुल छोटा रह गया है और उसमें से बहुत सी छोटी-छोटी शाखाएं निकलकर झाड़ी बन गई है?"
    }
  },
  "groundnut_subterranean_pods_discolored_black_spongy": {
    "icon": "🥜",
    "label": {
      "en": "Developing underground pods show dark brown to black soft, spongy, water-soaked decay",
      "hi": "जमीन के नीचे बनने वाली फलियां काली-भूरी, नरम, स्पंजी और सड़ी हुई निकलती हैं"
    },
    "question": {
      "en": "When pulling up plants, are the underground pods discolored blackish-brown and soft or rotting?",
      "hi": "क्या पौधे को उखाड़ने पर नीचे की फलियां काली-भूरी पड़कर सड़ी या पिलपिली निकली हैं?"
    }
  },
  "groundnut_shell_decay_shriveled_kernels": {
    "icon": "🌰",
    "label": {
      "en": "Pod shells become brittle or decayed with discolored, shriveled, bitter, or rotting kernels inside",
      "hi": "फली का छिलका गल जाता है और अंदर के दाने सिकुड़े हुए, कड़वे या सड़े हुए होते हैं"
    },
    "question": {
      "en": "Are the shells rotting away with shriveled, discolored, or hollow kernels inside?",
      "hi": "क्या फलियों के छिलके सड़ रहे हैं और अंदर दाने नहीं बन पाए या बिल्कुल सिकुड़े व सड़े हुए हैं?"
    }
  },
  "groundnut_foliar_yellowing_stunted_pods": {
    "icon": "🟡",
    "label": {
      "en": "Foliage shows general yellowing and canopy stunting with very poor pod pegging",
      "hi": "पत्तियों में पीलापन, पौधा कमजोर और जमीन में बहुत कम फलियां (पेग) बनना"
    },
    "question": {
      "en": "Are the above-ground leaves pale yellow with very few healthy pods formed underground?",
      "hi": "क्या ऊपर की पत्तियां पीली पड़ रही हैं और जमीन के नीचे बहुत कम या खराब फलियां लगी हैं?"
    }
  },
  "chickpea_straw_colored_drying_without_drooping": {
    "icon": "🌾",
    "label": {
      "en": "Foliage turns completely straw-yellow and dries crisp without petiole drooping during post-flowering warm weather",
      "hi": "गर्म मौसम में पत्तियां बिना झुके सीधे खड़े-खड़े भूसे जैसी पीली होकर सूख जाती हैं"
    },
    "question": {
      "en": "Are chickpea plants turning completely straw-yellow and drying crisp upright without the leaves drooping?",
      "hi": "क्या चने के पौधे पत्तियां नीचे झुकाए बिना, सीधे खड़े-खड़े सूखे भूसे जैसे पीले होकर सूख रहे हैं?"
    }
  },
  "chickpea_taproot_dark_dry_brittle_shredded": {
    "icon": "🪵",
    "label": {
      "en": "Taproot is completely dark brown-to-black, dry, brittle, and woody with shredded bark like a brush",
      "hi": "मुख्य मूसला जड़ बिल्कुल काली-भूरी, सूखी, भुरभुरी और छिलका ब्रश की तरह फटा हुआ होता है"
    },
    "question": {
      "en": "When you pull up a dead plant, is the taproot completely black, dry, brittle, with bark shredded like a broom?",
      "hi": "क्या सूखे पौधे को उखाड़ने पर मुख्य जड़ काली, सूखी, आसानी से टूटने वाली और छिलका ब्रश जैसा फटा हुआ है?"
    }
  },
  "chickpea_absence_fine_lateral_roots": {
    "icon": "🚫",
    "label": {
      "en": "Complete absence or rotting away of secondary and lateral feeder roots with tiny black sclerotial specks under bark",
      "hi": "बारीक जड़ों का बिल्कुल गायब होना और छिलके के नीचे बारीक काले दाने (स्क्लेरोशिया) दिखना"
    },
    "question": {
      "en": "Are all the fine feeder rootlets completely absent with tiny black pepper-like specks under the root bark?",
      "hi": "क्या जड़ पर बारीक रेशेदार जड़ें बिल्कुल सड़कर खत्म हो गई हैं और छिलके के नीचे काले बारीक दाने हैं?"
    }
  },
  "chickpea_circular_boreholes_green_pods": {
    "icon": "🟢",
    "label": {
      "en": "Clean circular holes bored into developing green chickpea pods with internal seed eaten",
      "hi": "चने की हरी फलियों (घेंटियों) में गोल छेद और अंदर के दाने खाए हुए होना"
    },
    "question": {
      "en": "Do you see neat circular holes bored through the green chickpea pods with seeds hollowed out?",
      "hi": "क्या चने की हरी फलियों (घेंटियों) में गोल छेद दिख रहे हैं और अंदर का दाना खाया हुआ है?"
    }
  },
  "chickpea_caterpillar_body_outside_pod": {
    "icon": "🐛",
    "label": {
      "en": "Green to brownish striped caterpillar feeding on seeds with only its head inserted into the pod",
      "hi": "हरी या भूरी धारियों वाली इल्ली जिसका केवल सिर फली के अंदर और बाकी शरीर बाहर रहता है"
    },
    "question": {
      "en": "Have you observed caterpillars feeding with only their head thrust into the pod and body outside?",
      "hi": "क्या आपने ऐसी इल्ली देखी है जो केवल सिर फली के अंदर डालकर और बाकी शरीर बाहर रखकर दाना खाती है?"
    }
  },
  "chickpea_defoliation_chewed_leaflets": {
    "icon": "🍃",
    "label": {
      "en": "Chewed, ragged leaflets and severed flower buds during vegetative and flowering stage",
      "hi": "पत्तियों के कटे-फटे किनारे और फूलों की कलियों का कीड़े द्वारा काटा जाना"
    },
    "question": {
      "en": "Are leaflets visibly chewed along the edges and flower buds severed by feeding caterpillars?",
      "hi": "क्या चने की पत्तियां कटी-फटी हैं और फूलों की कलियां काटकर गिराई गई हैं?"
    }
  },
  "chickpea_seedling_collar_constriction_collapse": {
    "icon": "🥀",
    "label": {
      "en": "Dark brown rotting constriction at the collar region causing young seedlings to fall over and collapse flat",
      "hi": "तने के आधार पर गहरा भूरा सड़न जिससे छोटे पौधे जमीन पर गिरकर ढेर हो जाते हैं"
    },
    "question": {
      "en": "Are young chickpea seedlings rotting at the soil line and falling flat onto the ground?",
      "hi": "क्या चने के छोटे पौधे जमीन की सतह पर तना गलने से लुढ़क कर जमीन पर गिर रहे हैं?"
    }
  },
  "chickpea_white_fan_mycelium_collar_seedling": {
    "icon": "🕸️",
    "label": {
      "en": "White cottony fan-like mycelial threads coating the rotted stem collar at ground level",
      "hi": "जमीन की सतह पर सड़े हुए तने पर रुई जैसा सफेद पंखाकार फफूंद का जाल"
    },
    "question": {
      "en": "Is there white cottony or fan-like fungal mycelium wrapped around the rotted seedling collar?",
      "hi": "क्या सड़े हुए पौधे के तने पर रुई जैसा सफेद फफूंद का जाला लिपटा हुआ दिखाई दे रहा है?"
    }
  },
  "chickpea_spherical_brown_mustard_sclerotia": {
    "icon": "🟤",
    "label": {
      "en": "Brownish-tan spherical mustard-like sclerotial bodies scattered on the rotted collar and soil",
      "hi": "सड़े हुए तने और मिट्टी पर सरसों के दाने जैसे गोल भूरे दाने (स्क्लेरोशिया)"
    },
    "question": {
      "en": "Can you spot small round mustard-seed-like brown resting bodies on the collapsed seedling collar?",
      "hi": "क्या गिरे हुए पौधे के तने के पास सरसों के दाने जैसे छोटे गोल भूरे दाने दिख रहे हैं?"
    }
  },
  "pigeonpea_large_circular_holes_pods": {
    "icon": "🕳️",
    "label": {
      "en": "Large circular entrance holes bored through green pod walls with developing seeds consumed",
      "hi": "अरहर की हरी फलियों में बड़े गोल छेद और अंदर के बनते हुए दानों का खाया जाना"
    },
    "question": {
      "en": "Are there large round holes bored into green pigeonpea pods with seeds damaged inside?",
      "hi": "क्या अरहर की फलियों में बड़े गोल छेद दिख रहे हैं और अंदर के दाने खाए हुए हैं?"
    }
  },
  "pigeonpea_caterpillar_excreta_frass_pods": {
    "icon": "💩",
    "label": {
      "en": "Wet brownish caterpillar fecal pellets around bored holes and on flower clusters",
      "hi": "छेदों के पास और फूलों के गुच्छों पर इल्ली की गीली भूरी विष्ठा (मल/मलत्याग)"
    },
    "question": {
      "en": "Do you see wet brownish fecal pellets (frass) around the holes or on flower clusters?",
      "hi": "क्या फलियों के छेदों के पास या फूलों पर इल्ली की भूरी विष्ठा (मल के दाने) चिपकी दिखती है?"
    }
  },
  "pigeonpea_flower_buds_perforated_shed": {
    "icon": "🥀",
    "label": {
      "en": "Severed, perforated flower buds and stripped inflorescence dropping off heavily",
      "hi": "फूलों की कलियों में छेद, कटी हुई कलियां और फूलों का भारी मात्रा में झड़ना"
    },
    "question": {
      "en": "Are flower buds perforated and dropping off, leaving stripped flower stalks?",
      "hi": "क्या अरहर के फूल और कलियां कुतरे हुए हैं और झड़कर केवल खाली डंठल बच रहे हैं?"
    }
  },
  "pigeonpea_small_pinhead_exit_hole_dry_pod": {
    "icon": "🕳️",
    "label": {
      "en": "Small circular pinhead-sized exit holes on mature dried pod walls where adult fly has emerged",
      "hi": "सूखी पकी फलियों पर बिल्कुल छोटा पिन के सिर जैसा गोल छेद जहां से मक्खी निकली हो"
    },
    "question": {
      "en": "Do dry mature pods show tiny, neat pinhead-sized exit holes on the outer shell?",
      "hi": "क्या पकी हुई सूखी फलियों की दीवार पर सुई की नोक जैसे बहुत छोटे गोल छेद बने हुए हैं?"
    }
  },
  "pigeonpea_white_maggots_feeding_inside_seed": {
    "icon": "🪱",
    "label": {
      "en": "Legless, pale yellowish-white maggots boring and feeding inside unopened green seeds",
      "hi": "बिना पैर वाली छोटी सफेद सूंडी (मैगट) जो बंद फली के दाने के अंदर घुसकर खाती है"
    },
    "question": {
      "en": "When you open an infested green pod, do you find tiny legless white maggots inside the seed?",
      "hi": "क्या हरी फली को छीलने पर दाने के अंदर छोटी बिना पैरों वाली सफेद सूंडी (मैगट) मिली है?"
    }
  },
  "pigeonpea_shriveled_hollow_seeds": {
    "icon": "🌰",
    "label": {
      "en": "Harvested seeds show striped brown surface galleries, internal hollowness, and decay",
      "hi": "दाने अंदर से खोखले, सिकुड़े हुए और उन पर भूरी धारियां बनी होती हैं"
    },
    "question": {
      "en": "Are the grains inside the pods hollowed out from within with surface feeding stripes?",
      "hi": "क्या फलियों के अंदर दाने सिकुड़कर खोखले हो गए हैं और उन पर भूरी लकीरें बनी हुई हैं?"
    }
  },
  "pigeonpea_concentric_brown_spots_leaves": {
    "icon": "🎯",
    "label": {
      "en": "Small sub-circular dark brown lesions with concentric zonations on leaves",
      "hi": "पत्तियों पर संकेंद्रित छल्लों वाले छोटे गोल गहरे भूरे धब्बे"
    },
    "question": {
      "en": "Do you observe dark brown spots with concentric target-like rings on the pigeonpea leaves?",
      "hi": "क्या अरहर की पत्तियों पर छल्लेदार गोल गहरे भूरे धब्बे दिखाई दे रहे हैं?"
    }
  },
  "pigeonpea_sunken_cankers_pod_margins": {
    "icon": "🟤",
    "label": {
      "en": "Deep sunken brown-to-black cankerous lesions on green pods and twigs with pinkish spore exudate",
      "hi": "हरी फलियों और टहनियों पर गहरे धंसे हुए काले-भूरे घाव जिन पर गुलाबी फफूंद का स्राव होता है"
    },
    "question": {
      "en": "Are there sunken dark brown canker spots on the pods with pinkish moist spore masses in humid weather?",
      "hi": "क्या फलियों पर अंदर धंसे हुए गहरे घाव हैं जिन पर नमी में हल्का गुलाबी रंग दिखता है?"
    }
  },
  "pigeonpea_premature_pod_blighting": {
    "icon": "🍂",
    "label": {
      "en": "Infected pods shrivel, turn blackish, and fail to mature healthy seeds",
      "hi": "संक्रमित फलियां सिकुड़कर काली पड़ जाती हैं और उनमें स्वस्थ दाना नहीं बन पाता"
    },
    "question": {
      "en": "Are diseased pods turning black and withering prematurely before grain filling?",
      "hi": "क्या फलियां दाना भरने से पहले ही काली पड़कर सूख और सड़ रही हैं?"
    }
  },
  "onion_pale_oval_patches_violet_downy_fuzz": {
    "icon": "🟣",
    "label": {
      "en": "Pale yellowish-green oval elongated lesions on tubular leaves showing fine violet-purple downy fungal fuzz in humid mornings",
      "hi": "सुबह की नमी में प्याज की पत्तियों पर हल्के पीले धब्बे जिन पर बैंगनी-जामुनी रंग का रोएंदार फफूंद दिखता है"
    },
    "question": {
      "en": "Do onion leaves show pale oval patches covered with delicate violet-purple downy fuzz in damp mornings?",
      "hi": "क्या सुबह के समय प्याज की पत्तियों पर हल्के पीले धब्बों पर बैंगनी-जामुनी रंग की मखमली फफूंद दिखती है?"
    }
  },
  "onion_leaves_fold_over_snap_downward": {
    "icon": "⤵️",
    "label": {
      "en": "Infected leaf blades buckle, fold over at the lesion point, and snap downwards",
      "hi": "पत्तियां धब्बे वाले स्थान से मुड़कर नीचे की ओर लटक जाती हैं और टूट जाती हैं"
    },
    "question": {
      "en": "Are the tubular leaves buckling at the spot and bending or snapping downwards toward the ground?",
      "hi": "क्या प्याज की पत्तियां धब्बे वाली जगह से मुड़कर नीचे झुक रही हैं या टूटकर लटक रही हैं?"
    }
  },
  "onion_rapid_defoliation_cold_fog": {
    "icon": "🌫️",
    "label": {
      "en": "Foliage rapidly pales, withers from the tip downwards, and collapses during cool foggy weather",
      "hi": "ठंडे और कोहरे वाले मौसम में पत्तियां ऊपर से नीचे सूखकर तेजी से नष्ट हो जाती हैं"
    },
    "question": {
      "en": "Is the foliage rapidly collapsing and drying up from the tips during cold, foggy weather spells?",
      "hi": "क्या कोहरे और ठंड के मौसम में प्याज की पत्तियां नोक से सूखकर बहुत तेजी से ढेर हो रही हैं?"
    }
  },
  "onion_black_powdery_spore_masses_dry_scales": {
    "icon": "⚫",
    "label": {
      "en": "Black powdery soot-like fungal spore masses forming along veins on dry outer papery scales and neck of bulb",
      "hi": "प्याज के कंद के सूखे छिलकों और गर्दन पर नसों के साथ काला कालिख जैसा पाउडर जमना"
    },
    "question": {
      "en": "Do you see black powdery sooty fungal clusters along the veins of the dry outer onion scales or neck?",
      "hi": "क्या प्याज के सूखे छिलके या गर्दन पर कालिख जैसा काला पाउडर जमा हुआ दिखाई दे रहा है?"
    }
  },
  "onion_soft_watery_breakdown_inner_scales": {
    "icon": "💧",
    "label": {
      "en": "Outer scale leaves develop dark sunken lesions that cause soft watery breakdown during post-harvest storage",
      "hi": "भंडारण के दौरान कंद की परतें पानी जैसी नरम होकर गलने और सड़ने लगती हैं"
    },
    "question": {
      "en": "Are the bulb scales becoming soft, watery, and decayed under the black powdery spots in storage?",
      "hi": "क्या काले पाउडर के नीचे प्याज के छिलके और परतें नरम, पिलपिली होकर सड़ रही हैं?"
    }
  },
  "onion_black_dusting_around_bulb_neck": {
    "icon": "🧅",
    "label": {
      "en": "Prominent black spore dusting visible around the harvested bulb neck and between fleshy scales",
      "hi": "खुदाई के बाद प्याज की गर्दन और परतों के बीच काला पाउडर स्पष्ट दिखाई देना"
    },
    "question": {
      "en": "Is there prominent black spore dust around the top neck of the harvested onion bulbs?",
      "hi": "क्या खोदे गए प्याज के ऊपरी भाग (गर्दन) पर स्पष्ट काला पाउडर लगा हुआ दिखता है?"
    }
  },
  "onion_silvery_white_blotches_feeding_scrapes": {
    "icon": "✨",
    "label": {
      "en": "Silvery-white speckles, patches, and feeding scrapes along the leaf blade surface",
      "hi": "पत्तियों पर चांदी जैसे सफेद चमकीले धब्बे, लकीरें और खुरचे हुए निशान"
    },
    "question": {
      "en": "Are the leaves covered with silvery-white shiny patches and feeding streaks caused by thrips?",
      "hi": "क्या प्याज की पत्तियों पर चांदी जैसी सफेद चमकती हुई धारियां और खुरचे हुए निशान दिख रहे हैं?"
    }
  },
  "onion_black_tar_like_fecal_specks_leaves": {
    "icon": "⚫",
    "label": {
      "en": "Minute black tar-like faecal droplets deposited across the silvery leaf lesions",
      "hi": "चांदी जैसे धब्बों पर कीड़े की बहुत छोटी-छोटी काली डामर जैसी विष्ठा की बूंदें"
    },
    "question": {
      "en": "Do you see tiny black tar-like specks of insect droppings scattered on the silvery patches?",
      "hi": "क्या उन चांदी जैसे धब्बों पर कीड़ों की छोटी-छोटी काली बूंदें (मल के निशान) चिपकी हैं?"
    }
  },
  "onion_twisted_curled_leaf_tips_drying": {
    "icon": "🌀",
    "label": {
      "en": "Leaves become curled, crinkled, and twisted, drying progressively from the tips like scorched paper",
      "hi": "पत्तियां ऐंठकर मुड़ जाती हैं और ऊपर की नोक से कागज की तरह सूखने लगती हैं"
    },
    "question": {
      "en": "Are the onion leaves twisted and curled, drying backwards from the tips like burnt paper?",
      "hi": "क्या प्याज की पत्तियां मुड़-तुड़कर ऐंठ रही हैं और नोक से जली हुई जैसी सूख रही हैं?"
    }
  },
  "brinjal_tender_shoots_drooping_withered": {
    "icon": "🥀",
    "label": {
      "en": "Tender terminal vegetative shoots drooping, wilting, and withering downward (dead hearts)",
      "hi": "बैंगन की ऊपरी कोमल शाखाएं नीचे की ओर लटककर मुरझा और सूख जाती हैं"
    },
    "question": {
      "en": "Are the tender growing tips of the eggplant branches wilting, drooping downwards, and drying up?",
      "hi": "क्या बैंगन की सबसे ऊपर की कोमल टहनियां मुरझाकर नीचे लटक गई हैं और सूख रही हैं?"
    }
  },
  "brinjal_circular_boreholes_fruit_frass": {
    "icon": "🍆",
    "label": {
      "en": "Round entry/exit holes bored into eggplant fruits plugged with brownish caterpillar frass",
      "hi": "बैंगन के फल में गोल छेद और उसमें से भूरी कीड़े की विष्ठा (मल/बुरादा) निकलना"
    },
    "question": {
      "en": "Do the brinjal fruits have visible circular holes plugged with wet brownish caterpillar frass?",
      "hi": "क्या बैंगन के फलों में गोल छेद बने हुए हैं और उनमें से भूरा बुरादा जैसा मल निकल रहा है?"
    }
  },
  "brinjal_caterpillar_pinkish_white_feeding_flesh": {
    "icon": "🐛",
    "label": {
      "en": "Pinkish-white stout caterpillar boring tunnels and feeding on seeds and inner fruit pulp",
      "hi": "फल के अंदर गूदे और बीजों को खाती हुई गुलाबी-सफेद रंग की मोटी इल्ली"
    },
    "question": {
      "en": "Inside the damaged fruit, is there a pinkish-white caterpillar boring tunnels in the flesh?",
      "hi": "क्या बैंगन को काटने पर अंदर गूदे में सुरंग बनाती हुई गुलाबी-सफेद इल्ली मिली है?"
    }
  },
  "brinjal_circular_chlorotic_spots_concentric_rings": {
    "icon": "🎯",
    "label": {
      "en": "Small circular chlorotic spots on leaves expanding with concentric brown rings and greyish centers",
      "hi": "पत्तियों पर संकेंद्रित छल्लों वाले छोटे गोल धब्बे जिनके केंद्र धूसर होते हैं"
    },
    "question": {
      "en": "Do you see circular leaf spots having concentric brown rings and greyish centers?",
      "hi": "क्या बैंगन की पत्तियों पर गोल धब्बे दिख रहे हैं जिनमें छल्ले बने हुए हैं और बीच में धूसर रंग है?"
    }
  },
  "brinjal_prominent_yellow_halo_around_spots": {
    "icon": "🟡",
    "label": {
      "en": "Distinct yellow chlorotic halo surrounding leaf spots causing extensive leaf yellowing",
      "hi": "धब्बों के चारों ओर साफ पीला घेरा जिससे पूरी पत्ती पीली पड़ जाती है"
    },
    "question": {
      "en": "Are the brown circular spots bordered by a bright yellow chlorotic halo?",
      "hi": "क्या उन गोल धब्बों के चारों ओर चमकीला पीला छल्ला बना हुआ है?"
    }
  },
  "brinjal_premature_leaf_drying_defoliation": {
    "icon": "🍂",
    "label": {
      "en": "Severe premature leaf scorch and heavy defoliation leaving only young apical leaves",
      "hi": "पत्तियां समय से पहले सूखकर तेजी से झड़ जाती हैं और केवल ऊपर की नई पत्तियां बचती हैं"
    },
    "question": {
      "en": "Is there heavy premature leaf shedding from the lower plant, leaving the stems largely bare?",
      "hi": "क्या निचली पत्तियां सूखकर तेजी से झड़ रही हैं और पौधे पर केवल ऊपरी पत्तियां बची हैं?"
    }
  },
  "brinjal_seedling_collar_water_soaked_soft_rot": {
    "icon": "🪵",
    "label": {
      "en": "Water-soaked, soft, brownish-black lesion constricting the seedling stem right at the soil line",
      "hi": "नर्सरी में जमीन की सतह पर पौधे के तने पर पानीदार काला-भूरा सड़न का घाव"
    },
    "question": {
      "en": "Do young nursery seedlings show a water-soaked brownish-black constriction right at the ground level?",
      "hi": "क्या नर्सरी में छोटे पौधों का तना जमीन की सतह से गलकर पतला और काला-भूरा हो गया है?"
    }
  },
  "brinjal_seedlings_fall_flat_collapse_nursery": {
    "icon": "🥀",
    "label": {
      "en": "Seedlings topple over, fall flat on the soil, and rot rapidly in nursery patches",
      "hi": "पौधे तने से लुढ़ककर जमीन पर ढेर हो जाते हैं और क्यारियों में सड़ जाते हैं"
    },
    "question": {
      "en": "Are young seedlings collapsing, toppling over flat onto the nursery bed and dying in patches?",
      "hi": "क्या क्यारी में छोटे पौधे जमीन पर गिरकर ढेर हो रहे हैं और टुकड़ियों में सड़ रहे हैं?"
    }
  },
  "brinjal_high_soil_moisture_nursery_crowding": {
    "icon": "💧",
    "label": {
      "en": "Overcrowded nursery seedbeds under heavy irrigation or poor soil drainage",
      "hi": "घनी बुवाई वाली नर्सरी क्यारियां जहां जलभराव और अधिक नमी की स्थिति हो"
    },
    "question": {
      "en": "Is the problem occurring in dense, overcrowded nursery beds with high moisture or poor drainage?",
      "hi": "क्या यह समस्या बहुत घनी बोई गई और ज्यादा नमी या जलभराव वाली क्यारियों में हो रही है?"
    }
  },
  "okra_upward_curling_thick_leathery_leaves": {
    "icon": "🍃",
    "label": {
      "en": "Severe upward curling and rolling of leaves, becoming unusually thick, brittle, and leathery",
      "hi": "पत्तियां ऊपर की ओर मुड़कर असामान्य रूप से मोटी, चमड़े जैसी कड़क और खुरदरी हो जाती हैं"
    },
    "question": {
      "en": "Are okra leaves curled upward, becoming remarkably thick, stiff, and leathery?",
      "hi": "क्या भिंडी की पत्तियां ऊपर की ओर मुड़कर बहुत मोटी, कड़क और चमड़े जैसी हो गई हैं?"
    }
  },
  "okra_enation_ridge_like_outgrowths_veins": {
    "icon": "🌿",
    "label": {
      "en": "Prominent enations—small cup-like or leaf-like laminar outgrowths on the lower main and secondary veins",
      "hi": "पत्तियों की निचली नसों पर छोटे कप या पत्ती जैसे उभरे हुए छिलके/उभार (इनेशन)"
    },
    "question": {
      "en": "When you inspect the leaf underside, are there small ridge-like or leaf-like outgrowths (enations) on the veins?",
      "hi": "क्या पत्ती के नीचे देखने पर नसों पर छोटे-छोटे कप या अतिरिक्त पत्ती जैसे उभार बने हुए हैं?"
    }
  },
  "okra_severe_stunting_twisted_canopy": {
    "icon": "🌱",
    "label": {
      "en": "Plant canopy becomes severely stunted, bushy, twisted with drastic reduction in flowering",
      "hi": "पौधा पूरी तरह बौना, ऐंठा हुआ और झाड़ीनुमा हो जाता है और फूल-फल बहुत कम आते हैं"
    },
    "question": {
      "en": "Is the entire okra plant severely dwarfed, twisted, and bushy with very few flowers formed?",
      "hi": "क्या पूरा पौधा छोटा रह गया है, टहनियां मुड़ी-तुड़ी हैं और फूल-फल लगना लगभग बंद हो गया है?"
    }
  },
  "okra_sooty_black_velvety_patches_leaf_underside": {
    "icon": "⚫",
    "label": {
      "en": "Irregular smoky-brown to velvety sooty-black fungal patches spreading across the lower leaf surface",
      "hi": "पत्ती की निचली सतह पर मटमैले भूरे से मखमली काले रंग के फफूंद के धब्बे"
    },
    "question": {
      "en": "Do you see velvety, smoky-brown to sooty-black patches spreading across the underside of the leaves?",
      "hi": "क्या भिंडी की पत्तियों की निचली सतह पर कालिख जैसे काले-भूरे मखमली धब्बे दिख रहे हैं?"
    }
  },
  "okra_upper_leaf_chlorotic_yellowing_rolling": {
    "icon": "🟡",
    "label": {
      "en": "Corresponding upper leaf surface turns dull yellowish-brown, curls, and dries",
      "hi": "पत्ती की ऊपरी सतह मटमैली पीली पड़ जाती है, मुड़ती है और सूखने लगती है"
    },
    "question": {
      "en": "Is the top surface of the leaf turning yellowish-brown and curling directly above the black patches?",
      "hi": "क्या काले धब्बों के ठीक ऊपर पत्ती की ऊपरी सतह पीली-भूरी होकर सूख रही है?"
    }
  },
  "okra_defoliation_exposed_stems": {
    "icon": "🍂",
    "label": {
      "en": "Extensive defoliation starting from lower leaves, leaving bare stalks with stunted small pods",
      "hi": "नीचे से पत्तियां सूखकर तेजी से झड़ जाती हैं और तने खाली होकर छोटी फलियां रह जाती हैं"
    },
    "question": {
      "en": "Has severe leaf dropping occurred from below, leaving bare stalks with poor small pods?",
      "hi": "क्या पौधे की पत्तियां नीचे से झड़ गई हैं और केवल तना व छोटी फलियां बची हैं?"
    }
  },
  "okra_progressive_yellowing_lower_leaves_wilting": {
    "icon": "🥀",
    "label": {
      "en": "Foliage yellows progressively from the bottom upward, becoming flaccid and drooping during warm days",
      "hi": "नीचे की पत्तियां पहले पीली पड़ती हैं और दोपहर में पौधा ढीला पड़कर मुरझाने लगता है"
    },
    "question": {
      "en": "Are lower leaves turning yellow first, followed by gradual daytime wilting and drooping of the plant?",
      "hi": "क्या नीचे की पत्तियां पहले पीली पड़ रही हैं और दिन में पूरा पौधा ढीला पड़कर मुरझा रहा है?"
    }
  },
  "okra_vascular_cylinder_brown_streak_taproot": {
    "icon": "🔬",
    "label": {
      "en": "Split lower stem and taproot shows a dark brown-to-black continuous vascular discoloration ring",
      "hi": "निचले तने और मुख्य जड़ को चीरने पर अंदर गहरा भूरा-काला संवहनी छल्ला दिखता है"
    },
    "question": {
      "en": "When you split open the lower stem and taproot, is there a dark brown vascular ring inside?",
      "hi": "क्या तने के निचले हिस्से या जड़ को चीरकर देखने पर अंदर भूरे-काले रंग की नसें/छल्ला दिखता है?"
    }
  },
  "okra_plant_stunting_premature_death": {
    "icon": "🪵",
    "label": {
      "en": "Entire plant withers, sheds foliage, and dies prematurely without yielding marketable pods",
      "hi": "पौधा पूरी तरह सूखकर समय से पहले मर जाता है और फलियां नहीं बन पातीं"
    },
    "question": {
      "en": "Does the diseased plant wither and die completely without yielding marketable okra pods?",
      "hi": "क्या पौधा पूरी तरह सूखकर समय से पहले मर जाता है और उसमें फल नहीं आ पाते?"
    }
  },
  "banana_circular_sunken_black_spots_fruit_peel": {
    "icon": "🍌",
    "label": {
      "en": "Small circular, sunken dark brown to black spots on unripe green and ripe banana peel",
      "hi": "हरे व पके केले के छिलके पर छोटे गोल, अंदर धंसे हुए गहरे भूरे-काले धब्बे"
    },
    "question": {
      "en": "Do you see small, sunken circular dark brown to black spots on the banana fruit peel?",
      "hi": "क्या केले के फलों के छिलके पर अंदर धंसे हुए गोल काले-भूरे धब्बे दिखाई दे रहे हैं?"
    }
  },
  "banana_pink_gelatinous_spore_masses_lesions": {
    "icon": "🌸",
    "label": {
      "en": "Spots coalesce forming large sunken black lesions with moist, salmon-pink gelatinous spore masses in humid air",
      "hi": "धब्बे आपस में मिलकर बड़े घाव बनाते हैं जिन पर नमी में चिपचिपा गुलाबी फफूंद निकलता है"
    },
    "question": {
      "en": "Do the black fruit spots produce moist, salmon-pink gelatinous spore masses in humid weather?",
      "hi": "क्या काले धब्बों पर नमी में चिपचिपे गुलाबी रंग के फफूंद के बीजाणु दिखते हैं?"
    }
  },
  "banana_fruit_tip_pedicel_black_rot": {
    "icon": "🍂",
    "label": {
      "en": "Black rot of fruit pedicel and distal tip causing fingers to drop off the bunch prematurely",
      "hi": "फल के डंठल और नोक पर काला सड़न जिससे केले घहर से टूटकर गिर जाते हैं"
    },
    "question": {
      "en": "Is there a black rot at the tip or stem-end of the banana fingers causing them to drop off?",
      "hi": "क्या केले की उंगलियों के डंठल या नोक पर काली सड़न है जिससे फल टूटकर गिर रहे हैं?"
    }
  },
  "banana_foul_smelling_soft_watery_rhizome_decay": {
    "icon": "🧄",
    "label": {
      "en": "Intensely foul-smelling, soft, watery, yellowish-brown rot of the underground corm and pseudostem base",
      "hi": "जमीन के नीचे प्रकंद (कंद) और तने के आधार में अत्यधिक बदबूदार, पिलपिला, जलीय सड़न"
    },
    "question": {
      "en": "Is there an intensely foul-smelling, soft watery yellowish-brown rot at the base of the trunk and corm?",
      "hi": "क्या केले के तने की जड़ और कंद में बहुत गंदी बदबूदार, पिलपिली पानी जैसी सड़न हो गई है?"
    }
  },
  "banana_pseudostem_breaks_easily_at_ground": {
    "icon": "🪵",
    "label": {
      "en": "Pseudostem becomes loose, hollowed at collar, and easily snaps or topples over at ground level",
      "hi": "तना आधार से खोखला व ढीला होकर जमीन की सतह से आसानी से टूटकर गिर जाता है"
    },
    "question": {
      "en": "Does the banana tree feel loose at the soil line and easily break or topple over when pushed?",
      "hi": "क्या केला जमीन के पास से बिल्कुल ढीला हो गया है और हल्का धक्का देने पर ही टूटकर गिर जाता है?"
    }
  },
  "banana_central_heart_leaf_rot_wilting": {
    "icon": "🥀",
    "label": {
      "en": "Central newly emerging unfurled heart leaf rots, turns dark brown, and can be pulled out with foul odor",
      "hi": "बीच की नई निकलने वाली गोभ (हार्ट लीफ) सड़कर काली हो जाती है और खींचने पर बदबू के साथ निकल आती है"
    },
    "question": {
      "en": "Has the central young unfurled leaf rotted brown and does it pull out easily with an offensive smell?",
      "hi": "क्या बीच की नई निकलने वाली गोभ सड़कर भूरी-काली हो गई है और खींचने पर बदबू के साथ बाहर आ जाती है?"
    }
  },
  "banana_narrow_chlorotic_yellow_stripes_to_margin": {
    "icon": "🟡",
    "label": {
      "en": "Narrow, continuous yellowish chlorotic linear streaks running parallel from midrib to leaf margin",
      "hi": "मध्य नस से किनारे की ओर समानांतर जाने वाली बारीक पीली निरंतर लकीरें/धारियां"
    },
    "question": {
      "en": "Do you observe narrow yellow chlorotic stripes running parallel from the midrib out to the leaf edge?",
      "hi": "क्या केले की पत्ती की बीच की मोटी नस से किनारे तक समानांतर जाती हुई बारीक पीली धारियां दिखती हैं?"
    }
  },
  "banana_leaf_distortion_corrugation_brittle": {
    "icon": "🍃",
    "label": {
      "en": "Young leaves show mottled mosaic, corrugated wavy blade margins, and brittle texture",
      "hi": "नई पत्तियों में मोज़ेक जैसा चितकबरापन, लहरदार किनारे और आसानी से टूटने वाली कठोर बनावट"
    },
    "question": {
      "en": "Are young leaves mottled with green and yellow, with wavy corrugated edges and a brittle feel?",
      "hi": "क्या नई पत्तियां चितकबरी, लहरदार किनारों वाली और मोड़ने पर आसानी से टूटने वाली कड़क हो गई हैं?"
    }
  },
  "banana_heart_leaf_rot_winter_stunting": {
    "icon": "❄️",
    "label": {
      "en": "Heart leaf develops dark necrotic rot in cool winter periods; plants remain severely dwarfed",
      "hi": "ठंड के मौसम में बीच की गोभ में सड़न हो जाती है और पौधा बिल्कुल बौना व अविकसित रह जाता है"
    },
    "question": {
      "en": "During cooler weather, does the heart leaf show dark necrotic rotting with severe overall plant stunting?",
      "hi": "क्या ठंड के दिनों में बीच की पत्ती सड़ रही है और पूरा पेड़ बहुत छोटा बौना रह गया है?"
    }
  }
};

// Support CommonJS export for Node.js automated test environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DEFAULT_KNOWLEDGE_BASE,
    CROPS_METADATA,
    SYMPTOMS_METADATA
  };
}
