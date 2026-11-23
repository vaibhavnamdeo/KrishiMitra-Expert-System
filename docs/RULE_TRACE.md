# KrishiMitra - Execution Rule Traces: Forward & Backward Chaining

This document demonstrates step-by-step execution traces of both **Forward Chaining** (data-driven reasoning) and **Backward Chaining** (goal-driven reasoning) using the KrishiMitra knowledge base and working memory.

---

## 1. Forward Chaining Execution Trace (Data-Driven)

### Scenario: Diagnosing Tomato Disease from Observed Symptoms
A farmer selects **Tomato** (`crop: "tomato"`) and observes dark spots with concentric bullseye rings on the lower leaves of the crop.

#### Initial State:
- **Selected Crop**: `tomato`
- **Inference Mode**: `forward`
- **Candidate Rules in Knowledge Base**: 10 tomato rules (`RULE_TOM_01` through `RULE_TOM_10`)
- **Working Memory**:
  ```json
  {}
  ```

#### Step 1: System Identifies Most Informative Symptom
The forward chaining question selector counts symptom occurrences across viable candidate rules:
- `concentric_rings_target_spots` appears in `RULE_TOM_01`, `RULE_TOM_02` (Freq: 2)
- `lower_leaves_affected` appears in `RULE_TOM_01`, `RULE_TOM_09` (Freq: 2)
- `water_soaked_dark_lesions` appears in `RULE_TOM_03`, `RULE_TOM_04` (Freq: 2)
- `upward_curling_leaves` appears in `RULE_TOM_05`, `RULE_TOM_06` (Freq: 2)
- `circular_boreholes_fruit` appears in `RULE_TOM_08`, `RULE_TOM_10` (Freq: 2)

System poses question for: `concentric_rings_target_spots`
*(Question: "Do the brown leaf spots have distinct concentric target-board like rings inside them?")*

#### Step 2: User Action & Fact Assertion
Farmer selects: **"Yes, definitely"** ($CF = 1.0$)
- **Working Memory Update**:
  ```json
  {
    "concentric_rings_target_spots": { "value": true, "cf": 1.0 }
  }
  ```

#### Step 3: Next Question Selection
Remaining viable rules with `concentric_rings_target_spots` are `RULE_TOM_01` and `RULE_TOM_02`.
Next most frequent unasserted condition among viable rules: `lower_leaves_affected`.
System poses question: *(Question: "Did the spotting start first on the bottom-most leaves touching the soil?")*

#### Step 4: User Action & Fact Assertion
Farmer selects: **"Yes, definitely"** ($CF = 1.0$)
- **Working Memory Update**:
  ```json
  {
    "concentric_rings_target_spots": { "value": true, "cf": 1.0 },
    "lower_leaves_affected": { "value": true, "cf": 1.0 }
  }
  ```

#### Step 5: Next Question Selection & Assertion
System queries: `yellowing_around_spots`
*(Question: "Is each dark spot surrounded by a prominent yellow ring or halo?")*
Farmer selects: **"Yes, definitely"** ($CF = 1.0$)
- **Working Memory Update**:
  ```json
  {
    "concentric_rings_target_spots": { "value": true, "cf": 1.0 },
    "lower_leaves_affected": { "value": true, "cf": 1.0 },
    "yellowing_around_spots": { "value": true, "cf": 1.0 }
  }
  ```

#### Step 6: Confirmation of Secondary Characteristic
System queries: `brown_circular_spots`
*(Question: "Are there dark brown circular spots expanding over the leaf surfaces?")*
Farmer selects: **"Yes, definitely"** ($CF = 1.0$)
Farmer also confirms: `water_soaked_dark_lesions` = **"No, not observed"** ($CF = 0.0, \text{value} = \text{false}$).

#### Step 7: Forward Chaining Rule Evaluation Cycle
The Inference Engine iterates through all 10 tomato rules:

| Rule ID | Rule Premise Conditions | Condition Status in WM | Premise CF | Rule CF | Derived CF | Fired? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `RULE_TOM_01` | `concentric_rings_target_spots` $\land$ `lower_leaves_affected` $\land$ `yellowing_around_spots` | $[1.0, 1.0, 1.0]$ All Met | $\min(1.0, 1.0, 1.0) = 1.0$ | $0.90$ | $1.0 \times 0.90 = 0.90$ | **FIRED** ✅ |
| `RULE_TOM_02` | `brown_circular_spots` $\land$ `concentric_rings_target_spots` | $[1.0, 1.0]$ All Met | $\min(1.0, 1.0) = 1.0$ | $0.82$ | $1.0 \times 0.82 = 0.82$ | **FIRED** ✅ |
| `RULE_TOM_03` | `water_soaked_dark_lesions` $\land$ `white_cottony_mold_underside` $\land$ `rapid_foliage_rot_cold_fog` | Failed (`water_soaked` = False) | $0.0$ | $0.94$ | $0.0$ | DISQUALIFIED ❌ |
| `RULE_TOM_04` | `fruit_brown_leathery_rot` $\land$ `water_soaked_dark_lesions` | Failed (`water_soaked` = False) | $0.0$ | $0.88$ | $0.0$ | DISQUALIFIED ❌ |
| `RULE_TOM_05` | `upward_curling_leaves` $\land$ `thick_leathery_stunted_leaves` | Missing (`upward_curling` = unasserted) | $0.0$ | $0.92$ | $0.0$ | UNMET ⏳ |
| `RULE_TOM_07` | `sudden_green_wilting` $\land$ `white_bacterial_ooze_stem` | Missing unasserted | $0.0$ | $0.95$ | $0.0$ | UNMET ⏳ |
| `RULE_TOM_08` | `circular_boreholes_fruit` $\land$ `caterpillar_feeding_fruits` | Missing unasserted | $0.0$ | $0.93$ | $0.0$ | UNMET ⏳ |
| `RULE_TOM_09` | `lower_leaves_affected` $\land$ `yellowing_around_spots` | $[1.0, 1.0]$ All Met | $\min(1.0, 1.0) = 1.0$ | $0.72$ | $1.0 \times 0.72 = 0.72$ | **FIRED** ✅ |

#### Step 8: Evidence Combination (MYCIN Formula)
Rules concluding `tomato_early_blight`:
- $CF(R_1) = 0.90$ (`RULE_TOM_01`)
- $CF(R_2) = 0.82$ (`RULE_TOM_02`)
- $CF(R_3) = 0.72$ (`RULE_TOM_09`)

Sequential Combination:
$$\begin{aligned}
CF_{1,2} &= CF(R_1) + CF(R_2) \times (1 - CF(R_1)) \\
&= 0.90 + 0.82 \times (1 - 0.90) \\
&= 0.90 + 0.082 = 0.9820 \quad (98.2\%)
\end{aligned}$$

$$\begin{aligned}
CF_{final} &= CF_{1,2} + CF(R_3) \times (1 - CF_{1,2}) \\
&= 0.9820 + 0.72 \times (1 - 0.9820) \\
&= 0.9820 + 0.72 \times 0.0180 \\
&= 0.9820 + 0.01296 = 0.99496 \quad (\mathbf{99.5\%})
\end{aligned}$$

#### Step 9: Final Diagnosis Rendered
- **Primary Diagnosis**: Early Blight (Alternaria) / अगेती झुलसा (अर्ली ब्लाइट)
- **Certainty Factor**: **99% (0.995)**
- **Treatments Injected**:
  - Organic: Spray Trichoderma viride (10 g/L) or 1% Bordeaux mixture; prune lower foliage.
  - Chemical: Spray Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 23% SC @ 1 ml/L.

---

## 2. Backward Chaining Execution Trace (Goal-Driven)

### Scenario: Verifying Pink Bollworm in Cotton
A farmer suspects pest damage in **Cotton** (`crop: "cotton"`). In Backward Chaining mode, the system sets specific disease hypotheses as goals and queries only the evidence needed to prove or refute the target goal.

#### Initial State:
- **Selected Crop**: `cotton`
- **Inference Mode**: `backward`
- **Initial Goal Hypothesis**: `cotton_pink_bollworm` (Pink Bollworm / गुलाबी सुंडी)
- **Working Memory**:
  ```json
  {}
  ```

#### Step 1: Goal Subgoal Expansion
The engine inspects all rules concluding the goal `cotton_pink_bollworm`:
1. `RULE_COT_01`:
   - Requires: `rosetted_flowers` $\land$ `entry_hole_boll_interlocking_fibers` $\land$ `pinkish_caterpillar_inside` ($CF = 0.96$)
2. `RULE_COT_02`:
   - Requires: `stunted_boll_drop` $\land$ `rosetted_flowers` ($CF = 0.84$)
3. `RULE_COT_09`:
   - Requires: `entry_hole_boll_interlocking_fibers` $\land$ `stunted_boll_drop` ($CF = 0.77$)

The engine identifies `rosetted_flowers` as the first missing subgoal premise in `RULE_COT_01`.

#### Step 2: Targeted Query 1
System queries: `rosetted_flowers`
*(Why Context: "Testing goal hypothesis: Pink Bollworm. Rule RULE_COT_01 requires checking if flowers are twisted in closed rosettes.")*
Farmer selects: **"Yes, definitely"** ($CF = 1.0$)

- **Working Memory Update**:
  ```json
  {
    "rosetted_flowers": { "value": true, "cf": 1.0 }
  }
  ```

#### Step 3: Targeted Query 2
`RULE_COT_01` still needs `entry_hole_boll_interlocking_fibers`.
System queries: *(Question: "Are developing bolls showing tiny entry holes with stained, interlocking fiber strands?")*
Farmer selects: **"Yes, definitely"** ($CF = 1.0$)

- **Working Memory Update**:
  ```json
  {
    "rosetted_flowers": { "value": true, "cf": 1.0 },
    "entry_hole_boll_interlocking_fibers": { "value": true, "cf": 1.0 }
  }
  ```

#### Step 4: Targeted Query 3 (Final Premise for RULE_COT_01)
System queries: `pinkish_caterpillar_inside`
*(Question: "When you open an infected green boll, do you find a pink-colored caterpillar eating the seeds?")*
Farmer selects: **"Yes, definitely"** ($CF = 1.0$)

- **Working Memory Update**:
  ```json
  {
    "rosetted_flowers": { "value": true, "cf": 1.0 },
    "entry_hole_boll_interlocking_fibers": { "value": true, "cf": 1.0 },
    "pinkish_caterpillar_inside": { "value": true, "cf": 1.0 }
  }
  ```

#### Step 5: Verification of Hypothesis
At this point, all conditions of `RULE_COT_01` are satisfied:
$$CF_{premise} = \min(1.0, 1.0, 1.0) = 1.0$$
$$CF_{derived}(RULE\_COT\_01) = 1.0 \times 0.96 = 0.96$$

System queries one corroborating symptom for `RULE_COT_02`: `stunted_boll_drop`.
Farmer selects: **"Yes, definitely"** ($CF = 1.0$).
`RULE_COT_02` fires with $CF = 0.84$.
`RULE_COT_09` fires with $CF = 0.77$.

Combined Certainty:
$$CF_{comb}(0.96, 0.84) = 0.96 + 0.84 \times (1 - 0.96) = 0.9936$$
$$CF_{final} = 0.9936 + 0.77 \times (1 - 0.9936) = 0.9985 \quad (\mathbf{99.9\%})$$

Goal `cotton_pink_bollworm` is **PROVEN TRUE**.
Inference stops early and surfaces the verified diagnosis immediately to the farmer!

---

## 3. Comparison Summary: Forward vs. Backward Chaining in KrishiMitra

| Dimension | Forward Chaining (Data-Driven) | Backward Chaining (Goal-Driven) |
| :--- | :--- | :--- |
| **Starting Point** | Observed facts & general crop symptoms. | Formulated disease hypothesis (e.g. Pink Bollworm). |
| **Direction** | Bottom-up (Data $\rightarrow$ Conclusions). | Top-down (Goal Hypothesis $\rightarrow$ Required Evidence). |
| **Question Selection** | Highest frequency across remaining viable rules (information gain). | Specific missing conditions required by active hypothesis. |
| **Farmer Use Case** | Farmer does not know what is wrong; comprehensive diagnostic check. | Farmer suspects a specific pest/rot and wants quick confirmation. |
| **Early Stopping** | When all symptoms assessed or single disease exceeds threshold ($CF \ge 0.94$). | As soon as the active goal hypothesis is confirmed ($CF \ge 0.90$) or refuted. |
| **Certainty Math** | Identical MYCIN combination: $CF_1 + CF_2(1 - CF_1)$. | Identical MYCIN combination: $CF_1 + CF_2(1 - CF_1)$. |
