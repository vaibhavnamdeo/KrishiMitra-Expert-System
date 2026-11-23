# KrishiMitra - 5 Sample Verification Test Cases

This document details 5 representative test cases covering all 5 crops supported by KrishiMitra. Each test case specifies the selected crop, input symptoms assertable by the farmer, the reasoning mode, fired rules, expected primary diagnosis, certainty factor calculation, and recommended treatments.

---

## Test Case 1: Wheat Stripe Rust (Yellow Rust)
- **Crop**: Wheat (`wheat`)
- **Reasoning Mode**: Forward Chaining (Data-Driven)
- **Input Symptoms Asserted**:
  1. `yellow_pustules_stripes` = **Yes** ($CF = 1.0$)
  2. `chlorotic_leaves` = **Yes** ($CF = 1.0$)
  3. `cool_humid_weather` = **Yes** ($CF = 1.0$)
  4. `yellow_powder_rubbing_off` = **Yes** ($CF = 1.0$)
  5. `linear_stripes_parallel_veins` = **Yes** ($CF = 1.0$)
  6. `earhead_black_powder` = **No** ($CF = 0.0$, value = false)
- **Rules Fired**:
  - `RULE_WHT_01`: IF `yellow_pustules_stripes` AND `chlorotic_leaves` AND `cool_humid_weather` THEN `wheat_yellow_rust` ($CF = 0.88$)
  - `RULE_WHT_02`: IF `yellow_powder_rubbing_off` AND `linear_stripes_parallel_veins` THEN `wheat_yellow_rust` ($CF = 0.82$)
  - `RULE_WHT_09`: IF `chlorotic_leaves` AND `yellow_powder_rubbing_off` AND `cool_humid_weather` THEN `wheat_yellow_rust` ($CF = 0.79$)
- **Certainty Factor Combining Trace**:
  - Step 1: $CF_{comb}(0.88, 0.82) = 0.88 + 0.82 \times (1 - 0.88) = 0.88 + 0.0984 = 0.9784$
  - Step 2: $CF_{comb}(0.9784, 0.79) = 0.9784 + 0.79 \times (1 - 0.9784) = 0.9784 + 0.0170 = 0.9954$
- **Expected Diagnosis**: **Yellow Rust (Stripe Rust) / पीला रतुआ (स्ट्राइप रस्ट)** with **$\ge 98\%$ Certainty**.
- **Expected Organic Treatment**: Spray 5% Cow urine solution or sour buttermilk with copper vessel extract (50ml/L); apply Trichoderma harzianum (10g/L).
- **Expected Chemical Treatment**: Spray Propiconazole 25% EC (Tilt) @ 1 ml/L or Tebuconazole 25.9% EC @ 1 ml/L.

---

## Test Case 2: Soybean Yellow Mosaic Virus (YMV)
- **Crop**: Soybean (`soybean`)
- **Reasoning Mode**: Backward Chaining (Hypothesis Goal: `soybean_yellow_mosaic`)
- **Input Symptoms Asserted**:
  1. `yellow_green_mottled_leaves` = **Yes** ($CF = 1.0$)
  2. `wrinkled_puckered_leaves` = **Yes** ($CF = 1.0$)
  3. `stunted_plant_growth` = **Yes** ($CF = 1.0$)
  4. `whitefly_presence_underside_leaf` = **Yes** ($CF = 1.0$)
  5. `yellow_patches_foliage` = **Yes** ($CF = 1.0$)
  6. `minute_brown_volcano_pustules` = **No** ($CF = 0.0$, value = false)
- **Rules Fired**:
  - `RULE_SOY_01`: IF `yellow_green_mottled_leaves` AND `wrinkled_puckered_leaves` AND `stunted_plant_growth` THEN `soybean_yellow_mosaic` ($CF = 0.90$)
  - `RULE_SOY_02`: IF `whitefly_presence_underside_leaf` AND `yellow_patches_foliage` THEN `soybean_yellow_mosaic` ($CF = 0.80$)
  - `RULE_SOY_08`: IF `wrinkled_puckered_leaves` AND `yellow_patches_foliage` THEN `soybean_yellow_mosaic` ($CF = 0.74$)
- **Certainty Factor Combining Trace**:
  - Step 1: $CF_{comb}(0.90, 0.80) = 0.90 + 0.80 \times (1 - 0.90) = 0.90 + 0.08 = 0.9800$
  - Step 2: $CF_{comb}(0.9800, 0.74) = 0.9800 + 0.74 \times (1 - 0.9800) = 0.9800 + 0.0148 = 0.9948$
- **Expected Diagnosis**: **Yellow Mosaic Virus (YMV) / पीला मोज़ेक वायरस** with **$\ge 98\%$ Certainty**.
- **Expected Organic Treatment**: Rogue out and bury infected plants immediately; install 15-20 yellow sticky traps/acre; spray 5% NSKE or Neem oil (10,000 ppm) @ 3 ml/L.
- **Expected Chemical Treatment**: Control whitefly vector with Thiamethoxam 25% WG @ 0.5 g/L or Acetamiprid 20% SP @ 0.4 g/L.

---

## Test Case 3: Tomato Early Blight (Alternaria solani)
- **Crop**: Tomato (`tomato`)
- **Reasoning Mode**: Forward Chaining (Data-Driven)
- **Input Symptoms Asserted**:
  1. `concentric_rings_target_spots` = **Yes** ($CF = 1.0$)
  2. `lower_leaves_affected` = **Yes** ($CF = 1.0$)
  3. `yellowing_around_spots` = **Yes** ($CF = 1.0$)
  4. `brown_circular_spots` = **Yes** ($CF = 1.0$)
  5. `water_soaked_dark_lesions` = **No** ($CF = 0.0$, value = false)
- **Rules Fired**:
  - `RULE_TOM_01`: IF `concentric_rings_target_spots` AND `lower_leaves_affected` AND `yellowing_around_spots` THEN `tomato_early_blight` ($CF = 0.90$)
  - `RULE_TOM_02`: IF `brown_circular_spots` AND `concentric_rings_target_spots` THEN `tomato_early_blight` ($CF = 0.82$)
  - `RULE_TOM_09`: IF `lower_leaves_affected` AND `yellowing_around_spots` THEN `tomato_early_blight` ($CF = 0.72$)
- **Certainty Factor Combining Trace**:
  - Step 1: $CF_{comb}(0.90, 0.82) = 0.90 + 0.82 \times (1 - 0.90) = 0.90 + 0.082 = 0.9820$
  - Step 2: $CF_{comb}(0.9820, 0.72) = 0.9820 + 0.72 \times (1 - 0.9820) = 0.9820 + 0.0129 = 0.9949$
- **Expected Diagnosis**: **Early Blight (Alternaria) / अगेती झुलसा (अर्ली ब्लाइट)** with **$\ge 98\%$ Certainty**.
- **Expected Organic Treatment**: Prune lower leaves; spray Trichoderma viride (10 g/L) or fermented buttermilk with turmeric; apply 1% Bordeaux mixture.
- **Expected Chemical Treatment**: Spray Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 23% SC @ 1 ml/L or Difenoconazole 25% EC @ 1 ml/L.

---

## Test Case 4: Cotton Pink Bollworm (Pectinophora gossypiella)
- **Crop**: Cotton (`cotton`)
- **Reasoning Mode**: Backward Chaining (Hypothesis Goal: `cotton_pink_bollworm`)
- **Input Symptoms Asserted**:
  1. `rosetted_flowers` = **Yes** ($CF = 1.0$)
  2. `entry_hole_boll_interlocking_fibers` = **Yes** ($CF = 1.0$)
  3. `pinkish_caterpillar_inside` = **Yes** ($CF = 1.0$)
  4. `stunted_boll_drop` = **Yes** ($CF = 1.0$)
  5. `upward_curling_cotton_leaves` = **No** ($CF = 0.0$, value = false)
- **Rules Fired**:
  - `RULE_COT_01`: IF `rosetted_flowers` AND `entry_hole_boll_interlocking_fibers` AND `pinkish_caterpillar_inside` THEN `cotton_pink_bollworm` ($CF = 0.96$)
  - `RULE_COT_02`: IF `stunted_boll_drop` AND `rosetted_flowers` THEN `cotton_pink_bollworm` ($CF = 0.84$)
  - `RULE_COT_09`: IF `entry_hole_boll_interlocking_fibers` AND `stunted_boll_drop` THEN `cotton_pink_bollworm` ($CF = 0.77$)
- **Certainty Factor Combining Trace**:
  - Step 1: $CF_{comb}(0.96, 0.84) = 0.96 + 0.84 \times (1 - 0.96) = 0.96 + 0.0336 = 0.9936$
  - Step 2: $CF_{comb}(0.9936, 0.77) = 0.9936 + 0.77 \times (1 - 0.9936) = 0.9936 + 0.0049 = 0.9985$
- **Expected Diagnosis**: **Pink Bollworm (PBW) / गुलाबी सुंडी** with **$\ge 99\%$ Certainty**.
- **Expected Organic Treatment**: Install 8-10 Gossyplure pheromone traps/acre; release Trichogramma bactrae @ 60,000/acre; spray 5% NSKE; handpick rosetted flowers.
- **Expected Chemical Treatment**: Spray Chlorpyrifos 20% EC @ 2.5 ml/L or Emamectin Benzoate 5% SG @ 0.5 g/L or Chlorantraniliprole 18.5% SC @ 0.3 ml/L.

---

## Test Case 5: Rice Bacterial Leaf Blight (Xanthomonas oryzae)
- **Crop**: Rice (`rice`)
- **Reasoning Mode**: Forward Chaining (Data-Driven)
- **Input Symptoms Asserted**:
  1. `wavy_translucent_leaf_margins` = **Yes** ($CF = 1.0$)
  2. `milky_bacterial_dew_droplets` = **Yes** ($CF = 1.0$)
  3. `straw_bleached_leaf_drying` = **Yes** ($CF = 1.0$)
  4. `spindle_diamond_shaped_spots` = **No** ($CF = 0.0$, value = false)
  5. `hopper_burn_circular_drying_patches` = **No** ($CF = 0.0$, value = false)
- **Rules Fired**:
  - `RULE_RIC_01`: IF `wavy_translucent_leaf_margins` AND `milky_bacterial_dew_droplets` AND `straw_bleached_leaf_drying` THEN `rice_bacterial_leaf_blight` ($CF = 0.94$)
  - `RULE_RIC_02`: IF `straw_bleached_leaf_drying` AND `wavy_translucent_leaf_margins` THEN `rice_bacterial_leaf_blight` ($CF = 0.81$)
- **Certainty Factor Combining Trace**:
  - Step 1: $CF_{comb}(0.94, 0.81) = 0.94 + 0.81 \times (1 - 0.94) = 0.94 + 0.0486 = 0.9886$
- **Expected Diagnosis**: **Bacterial Leaf Blight (BLB) / जीवाणु पत्ती झुलसा** with **$\ge 98\%$ Certainty**.
- **Expected Organic Treatment**: Spray fresh cow-dung supernatant liquid (20%) or neem cake extract (5%); drain excess standing water from field immediately.
- **Expected Chemical Treatment**: Spray Streptocycline 1 g / 10 L water + Copper Oxychloride 50% WP @ 2.5 g/L; stop top-dressing urea immediately.
