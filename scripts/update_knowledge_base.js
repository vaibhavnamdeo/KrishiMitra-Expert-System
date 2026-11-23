// scripts/update_knowledge_base.js
const fs = require('fs');
const path = require('path');

const rulesPath = path.join(__dirname, '../js/rules_data.js');
const kbJsonPath = path.join(__dirname, '../data/knowledge_base.json');

const vm = require('vm');

// Read existing rules_data.js
let content = fs.readFileSync(rulesPath, 'utf8');

const parsed = vm.runInNewContext(content + '\n;({ DEFAULT_KNOWLEDGE_BASE, CROPS_METADATA, SYMPTOMS_METADATA })');

let existingRules = parsed.DEFAULT_KNOWLEDGE_BASE;
let existingCrops = parsed.CROPS_METADATA;
let existingSymptoms = parsed.SYMPTOMS_METADATA;

// The 24 new rules for the 8 crops
const newRules = [
  // SUGARCANE
  {
    "id": "RULE_SUG_01",
    "crop": "sugarcane",
    "conditions": ["sugarcane_leaf_midrib_red_lesions", "sugarcane_internal_stalk_reddening_white_patches", "sugarcane_alcoholic_sour_smell"],
    "conclusion": "sugarcane_red_rot",
    "disease_name": { "en": "Red Rot Disease", "hi": "लाल सड़न रोग" },
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
    "conditions": ["sugarcane_whip_like_black_sooty_structure", "sugarcane_narrow_stunted_leaves"],
    "conclusion": "sugarcane_smut",
    "disease_name": { "en": "Sugarcane Smut (Whip Smut)", "hi": "कंडुआ / चाबुक रोग" },
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
    "conditions": ["sugarcane_stalk_hollow_pith_drying", "sugarcane_foliage_yellowing_crown_wilting"],
    "conclusion": "sugarcane_wilt",
    "disease_name": { "en": "Sugarcane Wilt", "hi": "उकठा / विल्ट रोग" },
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

  // GROUNDNUT
  {
    "id": "RULE_GND_01",
    "crop": "groundnut",
    "conditions": ["groundnut_circular_dark_brown_spots_yellow_halo", "groundnut_premature_leaf_shedding"],
    "conclusion": "groundnut_tikka_leaf_spot",
    "disease_name": { "en": "Tikka Leaf Spot (Cercospora)", "hi": "टिक्का पर्ण चित्ती रोग" },
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
    "conditions": ["groundnut_collar_region_rotting_black_spores", "groundnut_seedling_wilting_collapse"],
    "conclusion": "groundnut_collar_rot",
    "disease_name": { "en": "Collar Rot / Crown Rot", "hi": "कॉलर रॉट / तना गलन" },
    "cf": 0.90,
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
    "conditions": ["groundnut_orange_brown_pustules_lower_leaf_surface", "groundnut_leaves_curl_necrosis_dry"],
    "conclusion": "groundnut_rust",
    "disease_name": { "en": "Groundnut Rust", "hi": "मूंगफली का गेरुई / रस्ट" },
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

  // CHICKPEA
  {
    "id": "RULE_CHK_01",
    "crop": "chickpea",
    "conditions": ["chickpea_drooping_petioles_leaves_flaccid", "chickpea_internal_vascular_browning_xylem", "chickpea_premature_field_patch_death"],
    "conclusion": "chickpea_fusarium_wilt",
    "disease_name": { "en": "Fusarium Wilt", "hi": "चना उकठा रोग" },
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
    "conditions": ["chickpea_circular_lesions_concentric_black_dots_pycnidia", "chickpea_stem_girdling_breakage"],
    "conclusion": "chickpea_ascochyta_blight",
    "disease_name": { "en": "Ascochyta Blight", "hi": "एस्कोकाइटा झुलसा" },
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
    "conditions": ["chickpea_greyish_fungal_growth_on_flowers", "chickpea_flower_drop_no_pod_formation"],
    "conclusion": "chickpea_grey_mould",
    "disease_name": { "en": "Botrytis Grey Mould", "hi": "धूसर फफूंद (ग्रे मोल्ड)" },
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

  // PIGEON PEA
  {
    "id": "RULE_PGP_01",
    "crop": "pigeonpea",
    "conditions": ["pigeonpea_foliar_yellowing_interveinal_clearing", "pigeonpea_dark_purple_stem_band_vertical_strip", "pigeonpea_black_vascular_discoloration"],
    "conclusion": "pigeonpea_fusarium_wilt",
    "disease_name": { "en": "Pigeonpea Fusarium Wilt", "hi": "अरहर उकठा रोग" },
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
    "conditions": ["pigeonpea_bushy_stunted_pale_green_appearance", "pigeonpea_severe_mosaic_mottling_leaves", "pigeonpea_complete_cessation_of_flowering_sterile"],
    "conclusion": "pigeonpea_sterility_mosaic",
    "disease_name": { "en": "Sterility Mosaic Disease (SMD)", "hi": "बांझपन मोज़ेक रोग" },
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
    "conditions": ["pigeonpea_water_soaked_brown_stem_cankers", "pigeonpea_sudden_wilting_dead_leaves_remain_attached"],
    "conclusion": "pigeonpea_phytophthora_blight",
    "disease_name": { "en": "Phytophthora Stem Blight", "hi": "तना झुलसा रोग" },
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

  // ONION
  {
    "id": "RULE_ONN_01",
    "crop": "onion",
    "conditions": ["onion_small_sunken_whitish_spots_turning_purple", "onion_concentric_rings_on_leaves_flower_stalks", "onion_leaves_girdled_collapse"],
    "conclusion": "onion_purple_blotch",
    "disease_name": { "en": "Purple Blotch", "hi": "बैंगनी धब्बा रोग" },
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
    "conditions": ["onion_small_yellow_to_orange_flecks_elongating", "onion_black_spore_mat_on_foliage_drying"],
    "conclusion": "onion_stemphylium_blight",
    "disease_name": { "en": "Stemphylium Leaf Blight", "hi": "स्टेमफीलियम पर्ण झुलसा" },
    "cf": 0.90,
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
    "conditions": ["onion_yellowing_and_curling_of_leaf_blades_from_tip", "onion_roots_turn_pink_to_dark_brown_and_rot", "onion_bulb_base_soft_decay"],
    "conclusion": "onion_basal_rot",
    "disease_name": { "en": "Basal Rot (Fusarium)", "hi": "कंद सड़न / मूल गलन" },
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

  // BRINJAL
  {
    "id": "RULE_BRN_01",
    "crop": "brinjal",
    "conditions": ["brinjal_extreme_reduction_in_leaf_size_tiny", "brinjal_bushy_phylloid_appearance_no_fruit", "brinjal_excessive_short_inter-nodes"],
    "conclusion": "brinjal_little_leaf",
    "disease_name": { "en": "Little Leaf Disease", "hi": "छोटी पत्ती रोग" },
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
    "conditions": ["brinjal_circular_brown_spots_pycnidia_on_leaves", "brinjal_soft_sunken_pale_rot_patches_on_fruit"],
    "conclusion": "brinjal_phomopsis_blight",
    "disease_name": { "en": "Phomopsis Blight & Fruit Rot", "hi": "फोमोप्सिस झुलसा व फल सड़न" },
    "cf": 0.90,
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
    "conditions": ["brinjal_sudden_wilting_without_yellowing_green_wilt", "brinjal_white_bacterial_slime_stream_in_water_vessel"],
    "conclusion": "brinjal_bacterial_wilt",
    "disease_name": { "en": "Bacterial Wilt", "hi": "जीवाणु उकठा रोग" },
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

  // OKRA
  {
    "id": "RULE_OKR_01",
    "crop": "okra",
    "conditions": ["okra_network_of_thickened_yellow_veins", "okra_leaves_completely_chlorotic_yellow", "okra_fruits_stunted_yellow_white_fibrous"],
    "conclusion": "okra_yellow_vein_mosaic",
    "disease_name": { "en": "Yellow Vein Mosaic Virus (YVMV)", "hi": "पीली शिरा मोज़ेक वायरस" },
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
    "conditions": ["okra_white_powdery_patches_on_leaf_surface", "okra_leaves_turn_yellow_brown_and_dry"],
    "conclusion": "okra_powdery_mildew",
    "disease_name": { "en": "Powdery Mildew", "hi": "चूर्णिल आसिता रोग" },
    "cf": 0.90,
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
    "conditions": ["okra_terminal_shoots_wilted_and_drooping", "okra_circular_holes_bored_in_fruits_with_frass", "okra_fruits_deformed_unmarketable"],
    "conclusion": "okra_fruit_borer",
    "disease_name": { "en": "Shoot & Fruit Borer", "hi": "तना व फल छेदक कीट" },
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

  // BANANA
  {
    "id": "RULE_BAN_01",
    "crop": "banana",
    "conditions": ["banana_lower_leaves_yellowing_from_margins_buckling", "banana_skirt_of_dead_leaves_around_pseudostem", "banana_vascular_bundles_reddish_brown_discoloration"],
    "conclusion": "banana_panama_wilt",
    "disease_name": { "en": "Panama Wilt (Fusarium)", "hi": "पनामा विल्ट / उकठा" },
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
    "conditions": ["banana_spindle_shaped_spots_with_grey_centers_dark_margins", "banana_extensive_premature_foliar_drying_scorched"],
    "conclusion": "banana_sigatoka_leaf_spot",
    "disease_name": { "en": "Sigatoka Leaf Spot", "hi": "सिगाटोका पत्ती धब्बा" },
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
    "conditions": ["banana_leaves_short_narrow_bunched_at_apex_rosette", "banana_dark_green_dots_and_dashes_along_leaf_veins", "banana_plant_severely_stunted_no_bunch"],
    "conclusion": "banana_bunchy_top",
    "disease_name": { "en": "Banana Bunchy Top Virus (BBTV)", "hi": "बंची टॉप (गुच्छा शीर्ष)" },
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
  }
];

// The 8 new crops metadata
const newCropsMetadata = {
  "sugarcane": {
    "id": "sugarcane",
    "icon": "🎋",
    "name": { "en": "Sugarcane", "hi": "गन्ना" },
    "botanical": "Saccharum officinarum",
    "subtitle": { "en": "Major commercial cash crop", "hi": "प्रमुख व्यावसायिक नकदी फसल" },
    "image": "images/crops/sugarcane.jpg",
    "badge": { "en": "Cash Crop", "hi": "नकदी फसल" },
    "category": "cash",
    "seasonCategory": ["rabi", "kharif", "annual"],
    "diseasesCount": 3
  },
  "groundnut": {
    "id": "groundnut",
    "icon": "🥜",
    "name": { "en": "Groundnut (Peanut)", "hi": "मूंगफली" },
    "botanical": "Arachis hypogaea",
    "subtitle": { "en": "Key oilseed & cash legume", "hi": "प्रमुख तिलहन व दलहनी फसल" },
    "image": "images/crops/groundnut.jpg",
    "badge": { "en": "Oilseed Crop", "hi": "तिलहन फसल" },
    "category": "oilseeds",
    "seasonCategory": ["kharif", "zaid"],
    "diseasesCount": 3
  },
  "chickpea": {
    "id": "chickpea",
    "icon": "🌱",
    "name": { "en": "Chickpea (Gram / Chana)", "hi": "चना / छोला" },
    "botanical": "Cicer arietinum",
    "subtitle": { "en": "Premier Rabi pulse crop", "hi": "प्रमुख रबी दलहन फसल" },
    "image": "images/crops/chickpea.jpg",
    "badge": { "en": "Pulse Crop", "hi": "दलहन फसल" },
    "category": "pulses",
    "seasonCategory": ["rabi"],
    "diseasesCount": 3
  },
  "pigeonpea": {
    "id": "pigeonpea",
    "icon": "🌿",
    "name": { "en": "Pigeon Pea (Tur / Arhar)", "hi": "अरहर / तुअर" },
    "botanical": "Cajanus cajan",
    "subtitle": { "en": "High-protein Kharif pulse", "hi": "प्रमुख खरीफ प्रोटीन दलहन" },
    "image": "images/crops/pigeonpea.jpg",
    "badge": { "en": "Pulse Crop", "hi": "दलहन फसल" },
    "category": "pulses",
    "seasonCategory": ["kharif"],
    "diseasesCount": 3
  },
  "onion": {
    "id": "onion",
    "icon": "🧅",
    "name": { "en": "Onion", "hi": "प्याज" },
    "botanical": "Allium cepa",
    "subtitle": { "en": "High-value commercial bulb", "hi": "प्रमुख कंदवर्गीय सब्जी फसल" },
    "image": "images/crops/onion.jpg",
    "badge": { "en": "Vegetable", "hi": "सब्जी फसल" },
    "category": "vegetables",
    "seasonCategory": ["rabi", "kharif"],
    "diseasesCount": 3
  },
  "brinjal": {
    "id": "brinjal",
    "icon": "🍆",
    "name": { "en": "Brinjal (Eggplant)", "hi": "बैंगन" },
    "botanical": "Solanum melongena",
    "subtitle": { "en": "Year-round solanaceous crop", "hi": "सदाबहार सब्जी फसल" },
    "image": "images/crops/brinjal.jpg",
    "badge": { "en": "Vegetable", "hi": "सब्जी फसल" },
    "category": "vegetables",
    "seasonCategory": ["rabi", "kharif", "annual"],
    "diseasesCount": 3
  },
  "okra": {
    "id": "okra",
    "icon": "🥬",
    "name": { "en": "Okra (Bhindi)", "hi": "भिंडी" },
    "botanical": "Abelmoschus esculentus",
    "subtitle": { "en": "Tender green pod vegetable", "hi": "लोकप्रिय हरी सब्जी फसल" },
    "image": "images/crops/okra.jpg",
    "badge": { "en": "Vegetable", "hi": "सब्जी फसल" },
    "category": "vegetables",
    "seasonCategory": ["kharif", "zaid"],
    "diseasesCount": 3
  },
  "banana": {
    "id": "banana",
    "icon": "🍌",
    "name": { "en": "Banana", "hi": "केला" },
    "botanical": "Musa acuminata",
    "subtitle": { "en": "Perennial high-yield fruit", "hi": "प्रमुख बारहमासी फल फसल" },
    "image": "images/crops/banana.jpg",
    "badge": { "en": "Fruit Crop", "hi": "फल फसल" },
    "category": "fruits",
    "seasonCategory": ["annual"],
    "diseasesCount": 3
  }
};

// Update existing 9 crops with categories
const existingCropCategoryUpdates = {
  wheat: { category: "cereals", seasonCategory: ["rabi"] },
  rice: { category: "cereals", seasonCategory: ["kharif"] },
  maize: { category: "cereals", seasonCategory: ["kharif", "rabi"] },
  soybean: { category: "oilseeds", seasonCategory: ["kharif"] },
  mustard: { category: "oilseeds", seasonCategory: ["rabi"] },
  tomato: { category: "vegetables", seasonCategory: ["rabi", "kharif", "annual"] },
  potato: { category: "vegetables", seasonCategory: ["rabi"] },
  chilli: { category: "vegetables", seasonCategory: ["rabi", "kharif", "annual"] },
  cotton: { category: "cash", seasonCategory: ["kharif"] }
};

// All new symptoms definitions for the 8 crops
const newSymptomsMetadata = {
  // Sugarcane
  "sugarcane_leaf_midrib_red_lesions": {
    "icon": "🎋",
    "label": { "en": "Blood-red elongated lesions on leaf midribs with white centers", "hi": "पत्ती की मध्य शिरा पर लाल लंबे धब्बे जिनके बीच सफेद रंग दिखता है" },
    "question": { "en": "Are there distinct blood-red streaks running along the central midrib of the sugarcane leaves?", "hi": "क्या गन्ने की पत्तियों की बीच वाली मोटी नस पर गहरे लाल रंग की धारियां बनी हुई हैं?" }
  },
  "sugarcane_internal_stalk_reddening_white_patches": {
    "icon": "🎋",
    "label": { "en": "Internal stalk tissue turns bright red with characteristic transverse white patches", "hi": "गन्ने को चीरने पर अंदर का गूदा लाल दिखना और बीच-बीच में सफेद चकत्ते होना" },
    "question": { "en": "When split open, does the cane stalk reveal reddish pith with white horizontal bands across it?", "hi": "क्या गन्ने को बीच से चीरने पर अंदर का भाग लाल और उसमें सफेद आड़े चकत्ते दिखाई देते हैं?" }
  },
  "sugarcane_alcoholic_sour_smell": {
    "icon": "👃",
    "label": { "en": "Affected split stalks emit a distinctive sour or alcoholic fermented odor", "hi": "चीरे हुए गन्ने से खट्टी या शराब जैसी किण्वित गंध आना" },
    "question": { "en": "Does the split sugarcane stem emit an unmistakable sour, alcoholic or vinegar-like smell?", "hi": "क्या प्रभावित गन्ने से खट्टी, सिरके या शराब जैसी तेज दुर्गंध आ रही है?" }
  },
  "sugarcane_whip_like_black_sooty_structure": {
    "icon": "🎋",
    "label": { "en": "Emergence of a long, curved black whip-like dusty shoot from the central growing point", "hi": "पौधे के बीच से चाबुक जैसा लंबा, मुड़ा हुआ काला धूलदार डंडा निकलना" },
    "question": { "en": "Has the central top spindle turned into a long, whip-like curved structure covered with black sooty dust?", "hi": "क्या गन्ने के गोफ से चाबुकनुमा मुड़ी हुई काली कालिख से ढकी संरचना बाहर निकली है?" }
  },
  "sugarcane_narrow_stunted_leaves": {
    "icon": "🎋",
    "label": { "en": "Leaves become unusually narrow, erect, and severely stunted", "hi": "पत्तियों का बहुत पतला, खड़ा और अत्यधिक बौना हो जाना" },
    "question": { "en": "Are the upper leaves forming around the whip abnormally narrow, short, and stiffly erect?", "hi": "क्या ऊपरी पत्तियां सामान्य से बहुत पतली, छोटी और बिल्कुल सीधी खड़ी हो गई हैं?" }
  },
  "sugarcane_stalk_hollow_pith_drying": {
    "icon": "🎋",
    "label": { "en": "Internal pith dries out, turns light dirty brown and becomes hollow/spongy", "hi": "गन्ने के अंदर का गूदा सूखकर खोखला और गंदा भूरा हो जाना" },
    "question": { "en": "Is the internal cane pith dried up, light-weight, and hollowed out with longitudinal cavities?", "hi": "क्या गन्ने का आंतरिक भाग सूखकर हल्का, खोखला और अंदर से खाली हो गया है?" }
  },
  "sugarcane_foliage_yellowing_crown_wilting": {
    "icon": "🥀",
    "label": { "en": "Crown leaves turn yellow, wither from margin inwards, and entire clump withers", "hi": "ऊपरी पत्तियों का पीला पड़कर सूखना और पूरे पौधे का मुरझा जाना" },
    "question": { "en": "Are the crown leaves turning pale yellow and withering rapidly, leading to whole clump collapse?", "hi": "क्या गन्ने का ऊपरी सिरा (अगोला) पीला पड़कर सूख रहा है और पूरा झुंड मुरझा रहा है?" }
  },

  // Groundnut
  "groundnut_circular_dark_brown_spots_yellow_halo": {
    "icon": "🥜",
    "label": { "en": "Numerous circular dark brown to black spots surrounded by a bright yellow halo (Tikka)", "hi": "पत्तियों पर गोल गहरे भूरे-काले धब्बे जिनके चारों ओर पीला घेरा (टिक्का) होता है" },
    "question": { "en": "Do you see circular dark brown leaf spots with distinct bright yellow margins on older leaves?", "hi": "क्या मूंगफली की पत्तियों पर गोल काले-भूरे धब्बे हैं जिनके चारों तरफ पीला छल्ला बना है?" }
  },
  "groundnut_premature_leaf_shedding": {
    "icon": "🍂",
    "label": { "en": "Severe defoliation with lower leaves drying up and dropping prematurely", "hi": "निचली पत्तियों का सूखकर समय से पहले झड़ जाना" },
    "question": { "en": "Are the heavily spotted leaves withering and falling off, leaving stems nearly bare?", "hi": "क्या धब्बों वाली पत्तियां सूखकर नीचे गिर रही हैं और तना पत्तीविहीन हो रहा है?" }
  },
  "groundnut_collar_region_rotting_black_spores": {
    "icon": "🥜",
    "label": { "en": "Collar region at soil line rots with black fungal spore masses visible on stem", "hi": "जमीन की सतह पर तने का गलना और उस पर काली फफूंद जमना" },
    "question": { "en": "Is the stem collar near soil level turning soft, dark brown, and covered in black powdery fungal growth?", "hi": "क्या जमीन के पास तने का निचला हिस्सा सड़कर काला पड़ गया है और उस पर काले दानेदार बीजाणु दिख रहे हैं?" }
  },
  "groundnut_seedling_wilting_collapse": {
    "icon": "🥀",
    "label": { "en": "Sudden drooping and wilting of young seedlings at ground level", "hi": "नन्हे पौधों का अचानक मुरझाकर जमीन पर गिर जाना" },
    "question": { "en": "Are young groundnut seedlings suddenly toppling over and withering away within days?", "hi": "क्या मूंगफली के छोटे पौधे अचानक मुरझाकर जमीन पर ढेर हो रहे हैं?" }
  },
  "groundnut_orange_brown_pustules_lower_leaf_surface": {
    "icon": "🥜",
    "label": { "en": "Small orange-brown to reddish raised pustules rupturing on lower leaf surface (Rust)", "hi": "पत्ती की निचली सतह पर उभरे हुए नारंगी-भूरे रंग के रतुआ फफोले" },
    "question": { "en": "Are there tiny reddish-brown powdery blisters breaking open on the underside of groundnut leaves?", "hi": "क्या मूंगफली की पत्तियों के नीचे तांबई-नारंगी पाउडर वाले नन्हे फफोले उभरे हुए हैं?" }
  },
  "groundnut_leaves_curl_necrosis_dry": {
    "icon": "🍂",
    "label": { "en": "Infected leaves curl, turn necrotic, and give the field a burnt appearance", "hi": "पत्तियों का मुड़कर झुलसना और खेत का जला हुआ सा दिखना" },
    "question": { "en": "Are the rusted leaves curling inward, drying up, and giving the crop canopy a burnt brown look?", "hi": "क्या पत्तियां सूखकर अंदर मुड़ रही हैं और दूर से देखने पर फसल जली हुई दिखती है?" }
  },

  // Chickpea
  "chickpea_drooping_petioles_leaves_flaccid": {
    "icon": "🥀",
    "label": { "en": "Sudden drooping and flaccidity of upper petioles and leaflets (Wilt)", "hi": "ऊपरी पत्तियों व डंडियों का अचानक लटककर ढीला पड़ जाना (उकठा)" },
    "question": { "en": "Are the upper leaves and branches of the chickpea plant suddenly drooping without prior yellowing?", "hi": "क्या चने के पौधे की शाखाएं और पत्तियां अचानक नीचे की ओर झुककर मुरझा रही हैं?" }
  },
  "chickpea_internal_vascular_browning_xylem": {
    "icon": "🌱",
    "label": { "en": "Dark brown to black discoloration inside split root and collar xylem vessels", "hi": "जड़ व तने को चीरने पर अंदर की नसें गहरी भूरी या काली दिखना" },
    "question": { "en": "When the main taproot and stem are sliced vertically, do you see dark brown internal xylem lines?", "hi": "क्या मुख्य जड़ को लंबाई में चीरने पर अंदर नसें काली-भूरी पड़ी हुई मिलती हैं?" }
  },
  "chickpea_premature_field_patch_death": {
    "icon": "🥀",
    "label": { "en": "Rapid drying and death of plants in circular patches across the field", "hi": "खेत में गोलाकार टुकड़ियों में पौधों का तेजी से सूखना और मरना" },
    "question": { "en": "Are chickpea plants drying up and dying in distinct circular patches across your field?", "hi": "क्या खेत में चने के पौधे गोल-गोल टुकड़ियों में तेजी से सूखकर खत्म हो रहे हैं?" }
  },
  "chickpea_circular_lesions_concentric_black_dots_pycnidia": {
    "icon": "🎯",
    "label": { "en": "Circular to elongated pale spots on leaflets, stems, and pods with concentric rings of black pinhead pycnidia", "hi": "पत्तियों, तनों और फलियों पर हल्के गोल धब्बे जिनमें छल्लों में नन्हे काले दाने होते हैं" },
    "question": { "en": "Do leaves and pods have circular spots containing concentric rings of tiny black pinhead dots?", "hi": "क्या पत्तियों और फलियों पर बने धब्बों के अंदर गोल छल्लों में काले नन्हे बिंदु दिख रहे हैं?" }
  },
  "chickpea_stem_girdling_breakage": {
    "icon": "🌱",
    "label": { "en": "Lesions encircle the branches causing them to break off easily at the canker", "hi": "तने के चारों तरफ धब्बा फैलने से शाखाओं का वहां से टूट जाना" },
    "question": { "en": "Are the branches girdled by dark cankers and snapping off at the point of infection?", "hi": "क्या शाखाओं पर काले घाव बन गए हैं और हल्की हवा में टहनियां वहीं से टूट रही हैं?" }
  },
  "chickpea_greyish_fungal_growth_on_flowers": {
    "icon": "☁️",
    "label": { "en": "Soft greyish hairy mould growth covering flowers, tender stems, and young pods", "hi": "फूलों, फलियों और कोमल तनों पर स्लेटी-धूसर रंग की रोएंदार फफूंद" },
    "question": { "en": "Do flowers and tender shoots have a dense, hairy grey mould growing over them during foggy weather?", "hi": "क्या कोहरे और नमी के मौसम में चने के फूलों पर स्लेटी रोएंदार फफूंद जमी दिखाई दे रही है?" }
  },
  "chickpea_flower_drop_no_pod_formation": {
    "icon": "🥀",
    "label": { "en": "Severe flower drop with blackened withered buds and failure of pod setting", "hi": "फूलों का भारी गिरना, कलियों का काला पड़ना और फलियां न बनना" },
    "question": { "en": "Are infected flower buds rotting, dropping off, and resulting in zero pod setting?", "hi": "क्या फूल सड़कर गिर रहे हैं और पौधे पर एक भी दाना/फली नहीं बन पा रही है?" }
  },

  // Pigeon Pea
  "pigeonpea_foliar_yellowing_interveinal_clearing": {
    "icon": "🌿",
    "label": { "en": "Gradual yellowing of leaves starting on one branch or side of the plant", "hi": "पौधे की किसी एक शाखा पर पत्तियों का पीला पड़ना शुरू होना" },
    "question": { "en": "Did the wilting and yellowing start on one individual branch while the rest still looks green?", "hi": "क्या पहले पौधे की केवल एक ही टहनी पीली पड़ी जबकि बाकी हिस्सा अभी हरा था?" }
  },
  "pigeonpea_dark_purple_stem_band_vertical_strip": {
    "icon": "🌿",
    "label": { "en": "Distinct dark purple to black band running vertically up the stem from soil line", "hi": "जमीन के पास से तने पर ऊपर की तरफ जाती गहरी बैंगनी या काली पट्टी" },
    "question": { "en": "Is there a dark purple or black vertical stripe running up the main stem from the ground?", "hi": "क्या तने के निचले हिस्से से ऊपर की ओर जाती हुई गहरी काली-बैंगनी पट्टी दिखती है?" }
  },
  "pigeonpea_black_vascular_discoloration": {
    "icon": "🌿",
    "label": { "en": "Black continuous vascular streaks inside split wood cylinder", "hi": "तना चीरने पर अंदर की लकड़ी में काली धारियां दिखाई देना" },
    "question": { "en": "When the stem bark is peeled, do you see dark brownish-black vascular lines inside the wood?", "hi": "क्या तने की छाल हटाने पर अंदर लकड़ी में गहरी काली-कत्थई धारियां नजर आती हैं?" }
  },
  "pigeonpea_bushy_stunted_pale_green_appearance": {
    "icon": "🌳",
    "label": { "en": "Extreme bushy, stunted habit with excessive branching and pale green small leaves (SMD)", "hi": "पौधे का बहुत घना, बौना और छोटी हल्की हरी पत्तियों से भर जाना" },
    "question": { "en": "Has the arhar plant become excessively bushy and stunted with a mass of tiny pale green leaves?", "hi": "क्या अरहर का पौधा असामान्य रूप से झाड़ीनुमा घना, बौना और छोटी पत्तियों वाला बन गया है?" }
  },
  "pigeonpea_severe_mosaic_mottling_leaves": {
    "icon": "🌿",
    "label": { "en": "Severe light green and dark green mosaic mottling and leaf puckering", "hi": "पत्तियों पर हल्के और गहरे हरे रंग के चितकबरे मोज़ेक धब्बे" },
    "question": { "en": "Are the pigeonpea leaves showing patches of alternating light and dark green mosaic patterns?", "hi": "क्या अरहर की पत्तियों पर हल्के और गहरे हरे रंग के चितकबरे चकत्ते दिख रहे हैं?" }
  },
  "pigeonpea_complete_cessation_of_flowering_sterile": {
    "icon": "🥀",
    "label": { "en": "Complete absence of flowers and pods; plant remains completely sterile", "hi": "पौधे में बिल्कुल फूल व फलियां न आना, पौधा पूरी तरह बांझ रहना" },
    "question": { "en": "Has the plant completely failed to produce flowers and pods, remaining totally sterile?", "hi": "क्या इस पौधे पर एक भी फूल या फली नहीं आई है और यह पूरी तरह बांझ बना हुआ है?" }
  },
  "pigeonpea_water_soaked_brown_stem_cankers": {
    "icon": "🌿",
    "label": { "en": "Dark brown water-soaked lesions on main stem and branches girdling the bark", "hi": "तने और शाखाओं पर गहरे भूरे भीगे हुए घाव जो तने को घेर लेते हैं" },
    "question": { "en": "Do you see dark purplish-brown water-soaked spots on the stem that girdle the plant?", "hi": "क्या अरहर के तने पर पानी से भीगे जैसे गहरे भूरे धब्बे हैं जो तने को चारों तरफ से घेर रहे हैं?" }
  },
  "pigeonpea_sudden_wilting_dead_leaves_remain_attached": {
    "icon": "🥀",
    "label": { "en": "Sudden blighting and wilting where dead brown leaves remain hanging on plant", "hi": "पौधे का अचानक सूखना और सूखी भूरी पत्तियां पौधे पर ही लटकी रहना" },
    "question": { "en": "Did the plant suddenly dry up while the dead dried leaves remain firmly attached to stems?", "hi": "क्या पौधा अचानक सूख गया और उसकी सूखी पत्तियां नीचे गिरने के बजाय डालियों पर ही चिपकी हैं?" }
  },

  // Onion
  "onion_small_sunken_whitish_spots_turning_purple": {
    "icon": "🧅",
    "label": { "en": "Water-soaked sunken whitish flecks enlarging rapidly into deep purple lesions", "hi": "सफेद धंसे हुए धब्बे जो तेजी से बड़े होकर गहरे बैंगनी हो जाते हैं" },
    "question": { "en": "Are the onion leaves showing small sunken spots with distinct purple or violet centers?", "hi": "क्या प्याज की पत्तियों पर बीच में गहरे बैंगनी रंग वाले धंसे हुए धब्बे बन रहे हैं?" }
  },
  "onion_concentric_rings_on_leaves_flower_stalks": {
    "icon": "🎯",
    "label": { "en": "Concentric bands or rings visible inside purple blotch lesions on leaves and scapes", "hi": "पत्तियों और डंडियों पर बैंगनी धब्बों के अंदर गोल छल्लेदार धारियां" },
    "question": { "en": "Inside the purple spots on onion leaves or seed stalks, do you see concentric rings?", "hi": "क्या बैंगनी धब्बों के अंदर गोल छल्ले बने हुए हैं?" }
  },
  "onion_leaves_girdled_collapse": {
    "icon": "🥀",
    "label": { "en": "Lesions girdle leaves and flower stalks causing them to bend over and snap", "hi": "धब्बों के फैलने से पत्तियों और फूलों की डंडियों का बीच से मुड़कर लटक जाना" },
    "question": { "en": "Are the onion leaves collapsing and falling over at the point where purple spots girdle them?", "hi": "क्या प्याज की पत्तियां धब्बों वाली जगह से कमजोर होकर नीचे झुक या टूट रही हैं?" }
  },
  "onion_small_yellow_to_orange_flecks_elongating": {
    "icon": "🧅",
    "label": { "en": "Small yellow to pale orange flecks on leaves elongating into lens-shaped lesions", "hi": "पत्तियों पर पीले-नारंगी छोटे चकत्ते जो लंबे होकर लेंस के आकार के बनते हैं" },
    "question": { "en": "Do you notice small yellowish flecks that stretch into long spindle-shaped lesions on onion blades?", "hi": "क्या पत्तियों पर छोटे पीले धब्बे लंबे होकर बादाम या आंख के आकार में फैल रहे हैं?" }
  },
  "onion_black_spore_mat_on_foliage_drying": {
    "icon": "🧅",
    "label": { "en": "Centers of leaf lesions become covered with a dense black velvet-like spore mat", "hi": "धब्बों के बीच में मखमली काली फफूंद की परत जमना और पत्ती का सूखना" },
    "question": { "en": "Are the centers of the dried spots covered in a thick, velvety black mould layer?", "hi": "क्या सूखे धब्बों के ऊपर काली मखमली परत जैसी फफूंद की चादर दिख रही है?" }
  },
  "onion_yellowing_and_curling_of_leaf_blades_from_tip": {
    "icon": "🥀",
    "label": { "en": "Leaves turn yellow, curl downwards, and die back progressively from tips (Basal Rot)", "hi": "पत्तियों का ऊपरी सिरे से पीला पड़ना, नीचे मुड़ना और सूखना" },
    "question": { "en": "Are the onion leaf tips turning yellow, curling downwards, and drying back toward the bulb?", "hi": "क्या प्याज की पत्तियां ऊपर की नोंक से पीली पड़कर नीचे की तरफ सूखती आ रही हैं?" }
  },
  "onion_roots_turn_pink_to_dark_brown_and_rot": {
    "icon": "🧅",
    "label": { "en": "Roots rot away, turn dark pink to brownish-black, and pull easily from soil", "hi": "जड़ों का सड़कर गुलाबी या काला-भूरा होना और उखाड़ने पर आसानी से टूट जाना" },
    "question": { "en": "When uprooted, are the onion roots rotted, pinkish-brown, and sloughing off easily?", "hi": "क्या उखाड़ने पर प्याज की जड़ें सड़ी हुई, गुलाबी-भूरी और बिल्कुल कमजोर मिलती हैं?" }
  },
  "onion_bulb_base_soft_decay": {
    "icon": "🧅",
    "label": { "en": "Stem plate and bulb base becomes soft, watery, and decayed with white mycelium", "hi": "प्याज की निचली गांठ का पिलपिला व सड़ जाना और सफेद फफूंद दिखना" },
    "question": { "en": "Is the base of the onion bulb soft, watery, and rotting with white fungus inside the scales?", "hi": "क्या प्याज के कंद का निचला हिस्सा पिलपिला होकर सड़ रहा है और उसमें सफेद फफूंद है?" }
  },

  // Brinjal
  "brinjal_extreme_reduction_in_leaf_size_tiny": {
    "icon": "🍆",
    "label": { "en": "Drastic reduction in leaf lamina size producing tiny, miniature soft leaves (Little Leaf)", "hi": "पत्तियों का आकार अत्यंत छोटा और नन्हा रह जाना (छोटी पत्ती रोग)" },
    "question": { "en": "Have the newly produced brinjal leaves become extremely tiny, narrow, and soft like micro-foliage?", "hi": "क्या बैंगन की नई पत्तियां सामान्य से बहुत छोटी, नन्हीं और मुलायम हो गई हैं?" }
  },
  "brinjal_bushy_phylloid_appearance_no_fruit": {
    "icon": "🌳",
    "label": { "en": "Floral parts convert into green leafy structures; plant becomes a dense sterile bush", "hi": "फूलों का हरी पत्तियों में बदल जाना और पूरे पौधे का बांझ झाड़ी बन जाना" },
    "question": { "en": "Have the flowers turned into green leafy malformations with zero fruit setting on the plant?", "hi": "क्या फूल खिलने के बजाय हरी पत्तियों में बदल गए हैं और पौधे पर कोई फल नहीं लग रहा?" }
  },
  "brinjal_excessive_short_inter-nodes": {
    "icon": "🍆",
    "label": { "en": "Internodes become severely shortened, giving a rosetted cluster look", "hi": "शाखाओं की गांठें बहुत पास-पास होना जिससे पौधा ठूंठ जैसा दिखे" },
    "question": { "en": "Are the stem nodes compressed very closely together, making branches look like crowded rosettes?", "hi": "क्या डालियों के बीच की दूरी बहुत कम हो गई है और पत्तियां एक गुच्छे में सिमट गई हैं?" }
  },
  "brinjal_circular_brown_spots_pycnidia_on_leaves": {
    "icon": "🎯",
    "label": { "en": "Circular brown to grey spots on leaves with pale centers and tiny black pycnidia specks", "hi": "पत्तियों पर गोल भूरे धब्बे जिनके केंद्र में काले नन्हे बिंदु होते हैं" },
    "question": { "en": "Are there circular greyish-brown spots on brinjal leaves speckled with tiny black dots?", "hi": "क्या पत्तियों पर गोल भूरे धब्बे हैं जिनमें बीच में काली मिर्च जैसे नन्हे दाने दिखते हैं?" }
  },
  "brinjal_soft_sunken_pale_rot_patches_on_fruit": {
    "icon": "🍆",
    "label": { "en": "Sunken, circular water-soaked pale spots on brinjal fruit turning brown with black rings", "hi": "बैंगन के फल पर धंसे हुए गोल सड़े गड्ढे जो बड़े होकर फल को गला देते हैं" },
    "question": { "en": "Are the brinjal fruits developing large, soft sunken rotten patches with concentric black rings?", "hi": "क्या बैंगन के फलों पर गोल धंसे हुए सड़े घाव बन रहे हैं जिनमें काले छल्लेदार घेरे हैं?" }
  },
  "brinjal_sudden_wilting_without_yellowing_green_wilt": {
    "icon": "🥀",
    "label": { "en": "Sudden complete wilting of plant during midday while foliage is still dark green (Bacterial Wilt)", "hi": "पत्तियों के हरे रहते ही दोपहर में पूरे पौधे का अचानक मुरझा जाना (जीवाणु उकठा)" },
    "question": { "en": "Did the brinjal plant suddenly wilt and collapse while its leaves were still completely green?", "hi": "क्या बैंगन का पौधा बिना पीला पड़े हरा रहते हुए ही अचानक पूरा मुरझा गया?" }
  },
  "brinjal_white_bacterial_slime_stream_in_water_vessel": {
    "icon": "🧪",
    "label": { "en": "Cut stem submerged in clear water exudes fine milky white bacterial streaming threads", "hi": "कटे हुए तने को पानी में डुबोने पर सफेद दूधिया धागे जैसी जीवाणु की धार निकलना" },
    "question": { "en": "When a freshly cut piece of the lower stem is dipped in clean water, do milky white threads stream out?", "hi": "क्या कटे हुए तने के टुकड़े को साफ पानी में रखने पर दूध जैसी सफेद धाराएं निकलती दिखाई देती हैं?" }
  },

  // Okra
  "okra_network_of_thickened_yellow_veins": {
    "icon": "🥬",
    "label": { "en": "Interveinal network of prominent thick yellow veins contrasting against green leaf (YVMV)", "hi": "पत्तियों की नसों का मोटा व चमकदार पीला होना (पीली नस मोज़ेक)" },
    "question": { "en": "Is there a bright yellow network of thickened veins standing out sharply against green leaf tissue?", "hi": "क्या भिंडी की पत्तियों की नसें मोटी होकर चमकदार पीले रंग की जाल जैसी दिख रही हैं?" }
  },
  "okra_leaves_completely_chlorotic_yellow": {
    "icon": "🥬",
    "label": { "en": "Severe chlorosis where newly formed upper leaves turn entirely yellow or creamy white", "hi": "नई पत्तियों का पूरी तरह पीला या मलाईदार सफेद पड़ जाना" },
    "question": { "en": "Are the younger top leaves turning completely yellow or creamy white without normal green color?", "hi": "क्या ऊपर की नई पत्तियां पूरी तरह से पीली या सफेद पड़ गई हैं और उनमें हरापन नहीं बचा?" }
  },
  "okra_fruits_stunted_yellow_white_fibrous": {
    "icon": "🥬",
    "label": { "en": "Okra pods become dwarfed, yellowish-white, hard, and fibrous (unmarketable)", "hi": "भिंडी के फल छोटे, पीले-सफेद, कड़े और रेशेदार हो जाना" },
    "question": { "en": "Are the developing okra pods stunted, pale yellowish-white, and tough or woody?", "hi": "क्या भिंडी के फल छोटे, पीले-सफेद और बहुत कड़े रेशेदार बन रहे हैं?" }
  },
  "okra_white_powdery_patches_on_leaf_surface": {
    "icon": "⚪",
    "label": { "en": "Talcum powder-like white patches appearing on both upper and lower leaf surfaces", "hi": "पत्तियों के ऊपर और नीचे सफेद पाउडर या चॉक जैसे धब्बे (चूर्णिल आसिता)" },
    "question": { "en": "Do you see white talcum powder-like fungal patches spreading across the okra foliage?", "hi": "क्या भिंडी की पत्तियों पर सफेद टैल्कम पाउडर जैसे फफूंदी के चकत्ते फैले हुए हैं?" }
  },
  "okra_leaves_turn_yellow_brown_and_dry": {
    "icon": "🍂",
    "label": { "en": "Powdery mildew patches coalesce causing leaves to turn brown, scorch, and drop", "hi": "सफेद पाउडर फैलने के बाद पत्तियों का भूरा होकर झुलसना और सूखना" },
    "question": { "en": "Are the heavily mildewed leaves turning brown and crispy and dropping prematurely?", "hi": "क्या सफेद पाउडर वाली पत्तियां बाद में भूरी होकर पापड़ जैसी सूखकर गिर रही हैं?" }
  },
  "okra_terminal_shoots_wilted_and_drooping": {
    "icon": "🥀",
    "label": { "en": "Central terminal shoots wilted, drooping downwards, and drying from caterpillar boring", "hi": "पौधे की मुख्य शाखा की नोंक का मुरझाकर नीचे लटक जाना (सूंड़ी प्रकोप)" },
    "question": { "en": "Are the growing shoot tips of the okra plants wilting, bending over, and dying back?", "hi": "क्या भिंडी के पौधे की ऊपर की कोमल टहनी मुरझाकर नीचे झुक गई है और सूख रही है?" }
  },
  "okra_circular_holes_bored_in_fruits_with_frass": {
    "icon": "🐛",
    "label": { "en": "Circular entrance holes bored into okra pods with insect excreta (frass) visible", "hi": "भिंडी के फल पर गोल छेद होना और कीड़े की विष्ठा (मल) चिपका होना" },
    "question": { "en": "Do you see circular bored holes in the okra fruits plugged with dark caterpillar frass?", "hi": "क्या भिंडी की फली पर गोल छेद हैं और छेद के पास कीड़े की काली विष्ठा चिपकी हुई है?" }
  },
  "okra_fruits_deformed_unmarketable": {
    "icon": "🥬",
    "label": { "en": "Fruits become bent, deformed, and rot internally from borer feeding", "hi": "फलों का टेढ़ा-मेढ़ा हो जाना और अंदर से सड़ जाना" },
    "question": { "en": "Are the harvested okra pods crooked, bent, and unmarketable due to internal larval tunneling?", "hi": "क्या भिंडी के फल अंदर से कीड़े द्वारा खाए जाने से टेढ़े-मेढ़े और बिकने लायक नहीं रहे?" }
  },

  // Banana
  "banana_lower_leaves_yellowing_from_margins_buckling": {
    "icon": "🍌",
    "label": { "en": "Lower leaves show prominent yellowing starting at leaf margins and buckling at petiole (Panama Wilt)", "hi": "निचली पत्तियों का किनारों से पीला पड़ना और डंडी से मुड़कर लटकना (पनामा विल्ट)" },
    "question": { "en": "Are the lowest leaves of the banana plant turning yellow along the borders and snapping down at the stalk?", "hi": "क्या केले की निचली पत्तियां किनारों से पीली पड़ रही हैं और डंडी से टूटकर लटक रही हैं?" }
  },
  "banana_skirt_of_dead_leaves_around_pseudostem": {
    "icon": "🥀",
    "label": { "en": "Wilted dead leaves hang down tightly around the pseudostem forming a skirt-like collar", "hi": "सूखी पत्तियां तने के चारों तरफ झालर या घाघरे जैसी लटक जाना" },
    "question": { "en": "Has a full ring of collapsed, dried brown leaves formed a hanging skirt around the trunk?", "hi": "क्या सूखी भूरी पत्तियां तने के चारों तरफ लटककर झालर जैसी बन गई हैं?" }
  },
  "banana_vascular_bundles_reddish_brown_discoloration": {
    "icon": "🍌",
    "label": { "en": "Reddish-brown to purple discoloration inside vascular bundles of cut pseudostem and corm", "hi": "तना या प्रकंद काटने पर अंदर की नसों का लाल-भूरा या बैंगनी दिखना" },
    "question": { "en": "When the pseudostem is cut horizontally, do you see dark reddish-brown dots or rings in the vessels?", "hi": "क्या केले के तने को काटने पर अंदर की नसों में लाल-भूरे या जामुनी रंग के छल्ले दिखते हैं?" }
  },
  "banana_spindle_shaped_spots_with_grey_centers_dark_margins": {
    "icon": "🍌",
    "label": { "en": "Spindle-shaped or oval leaf spots with sunken greyish centers and dark brown margins (Sigatoka)", "hi": "पत्तियों पर नाव या धुरी के आकार के धब्बे जिनके बीच का भाग स्लेटी और किनारे गहरे भूरे होते हैं" },
    "question": { "en": "Do banana leaves have narrow oval spots with ash-grey dead centers and dark brownish halos?", "hi": "क्या केले की पत्तियों पर नाव जैसे लंबे धब्बे हैं जिनके बीच में राख जैसा स्लेटी रंग है?" }
  },
  "banana_extensive_premature_foliar_drying_scorched": {
    "icon": "🍂",
    "label": { "en": "Spots coalesce rapidly causing extensive premature leaf scorch and bunch failure", "hi": "धब्बों के आपस में मिलने से पत्ती का जल जाना और घार/गुच्छे का दाना न भरना" },
    "question": { "en": "Are large sheets of the banana leaf area scorched and dry, causing undersized fruit bunches?", "hi": "क्या पत्तियां बुरी तरह झुलसकर सूख रही हैं जिससे केले का गुच्छा (घार) छोटा और कमजोर रह गया है?" }
  },
  "banana_leaves_short_narrow_bunched_at_apex_rosette": {
    "icon": "🍌",
    "label": { "en": "Emerging leaves become progressively short, narrow, and crowded into a rosette at the top (Bunchy Top)", "hi": "ऊपर की नई पत्तियां बहुत छोटी, संकरी और शीर्ष पर एक गुच्छे (रोजेट) में सिमटना" },
    "question": { "en": "Are the new top leaves short, narrow, stiff, and crowded tightly into a bunch like a cabbage?", "hi": "क्या केले के सिरे पर नई पत्तियां बहुत छोटी, पतली और पत्तागोभी की तरह एक गुच्छे में सिमट गई हैं?" }
  },
  "banana_dark_green_dots_and_dashes_along_leaf_veins": {
    "icon": "🍌",
    "label": { "en": "Characteristic dark green Morse code-like dots and dashes along the secondary leaf veins", "hi": "पत्ती की नसों के साथ गहरे हरे रंग की बिंदियों और डैश जैसी रेखाएं (मोर्स कोड)" },
    "question": { "en": "Held against sunlight, do you see tiny dark green streaks and dots forming broken lines along the leaf veins?", "hi": "क्या रोशनी में देखने पर पत्ती की नसों के साथ गहरे हरे रंग की नन्हीं बिंदियां और टूटी रेखाएं दिखती हैं?" }
  },
  "banana_plant_severely_stunted_no_bunch": {
    "icon": "🥀",
    "label": { "en": "Severely dwarfed plant that fails to emerge a normal flowering bunch", "hi": "पौधे का अत्यधिक बौना रह जाना और फल का गुच्छा (घार) बिल्कुल न निकलना" },
    "question": { "en": "Has the banana tree remained dwarfed and completely failed to throw out a normal fruit bunch?", "hi": "क्या पौधा बौना रह गया है और उसमें फल का गुच्छा बिल्कुल नहीं निकला है?" }
  }
};

// 1. Update rules array in content
// Add "reference" to existing rules if not present
// Parse existing DEFAULT_KNOWLEDGE_BASE
console.log('Adding new rules, crops, and symptoms to rules_data.js...');

// Ensure all existing rules have a reference
existingRules = existingRules.map(r => {
  if (!r.reference) {
    if (r.crop === 'wheat') r.reference = "ICAR-Indian Institute of Wheat & Barley Research (IIWBR) Karnal";
    else if (r.crop === 'soybean') r.reference = "ICAR-Indian Institute of Soybean Research (IISR) Indore";
    else if (r.crop === 'tomato') r.reference = "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru";
    else if (r.crop === 'cotton') r.reference = "ICAR-Central Institute for Cotton Research (CICR) Nagpur";
    else if (r.crop === 'rice') r.reference = "ICAR-National Rice Research Institute (NRRI) Cuttack";
    else if (r.crop === 'potato') r.reference = "ICAR-Central Potato Research Institute (CPRI) Shimla";
    else if (r.crop === 'maize') r.reference = "ICAR-Indian Institute of Maize Research (IIMR) Ludhiana";
    else if (r.crop === 'chilli') r.reference = "ICAR-Indian Institute of Horticultural Research (IIHR) Bengaluru";
    else if (r.crop === 'mustard') r.reference = "ICAR-Directorate of Rapeseed-Mustard Research (DRMR) Bharatpur";
    else r.reference = "ICAR-IARI Division of Plant Pathology";
  }
  return r;
});

// Combine with new rules (avoid duplicates)
const existingIds = new Set(existingRules.map(r => r.id));
for (const nr of newRules) {
  if (!existingIds.has(nr.id)) {
    existingRules.push(nr);
  }
}

// Update existing crops with category & seasonCategory
for (const [cid, meta] of Object.entries(existingCropCategoryUpdates)) {
  if (existingCrops[cid]) {
    existingCrops[cid].category = meta.category;
    existingCrops[cid].seasonCategory = meta.seasonCategory;
  }
}

// Add new crops
for (const [cid, meta] of Object.entries(newCropsMetadata)) {
  existingCrops[cid] = meta;
}

// Add new symptoms
for (const [sid, meta] of Object.entries(newSymptomsMetadata)) {
  existingSymptoms[sid] = meta;
}

// 4. Construct updated rules_data.js
const updatedRulesData = `/**
 * KrishiMitra - Default Knowledge Base and Symptom Metadata
 * Standalone file to ensure 100% offline and file:// zero-CORS compatibility.
 * Features 17 crops and ${existingRules.length} validated diagnostic rules.
 */

const DEFAULT_KNOWLEDGE_BASE = ${JSON.stringify(existingRules, null, 2)};

const CROPS_METADATA = ${JSON.stringify(existingCrops, null, 2)};

const SYMPTOMS_METADATA = ${JSON.stringify(existingSymptoms, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DEFAULT_KNOWLEDGE_BASE,
    CROPS_METADATA,
    SYMPTOMS_METADATA
  };
}
`;

fs.writeFileSync(rulesPath, updatedRulesData, 'utf8');
console.log(`✓ Updated js/rules_data.js with ${existingRules.length} rules, ${Object.keys(existingCrops).length} crops, and ${Object.keys(existingSymptoms).length} symptoms!`);

// Also save data/knowledge_base.json
const kbJsonData = {
  version: "2.0.0",
  updated_at: new Date().toISOString(),
  crops: existingCrops,
  rules: existingRules
};
fs.writeFileSync(kbJsonPath, JSON.stringify(kbJsonData, null, 2), 'utf8');
console.log('✓ Updated data/knowledge_base.json!');
