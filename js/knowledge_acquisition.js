/**
 * KrishiMitra - Knowledge Acquisition Module (Admin)
 * Enables non-technical domain experts/administrators to Add, Edit, Delete,
 * Search, Export, and Import IF-THEN rules without touching application code.
 */

class KnowledgeAcquisitionModule {
  constructor(storageKey = 'krishimitra_rules_v3') {
    this.storageKey = storageKey;
    this.rules = [];
    this.loadRules();
  }

  loadRules() {
    const factoryRules = (typeof DEFAULT_KNOWLEDGE_BASE !== 'undefined' && Array.isArray(DEFAULT_KNOWLEDGE_BASE))
      ? [...DEFAULT_KNOWLEDGE_BASE]
      : [];

    try {
      // 1. Check if new v3 key exists
      let stored = localStorage.getItem(this.storageKey);

      // 2. If not, check old legacy keys (v2 or unversioned)
      if (!stored) {
        const v2Stored = localStorage.getItem('krishimitra_rules_v2');
        const legacyStored = localStorage.getItem('krishimitra_rules');
        stored = v2Stored || legacyStored;
      }

      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge any factory rules that might be missing (e.g. 12 newly added crops)
          const existingIds = new Set(parsed.map(r => r.id));
          let merged = false;
          for (const fRule of factoryRules) {
            if (!existingIds.has(fRule.id)) {
              parsed.push(fRule);
              existingIds.add(fRule.id);
              merged = true;
            }
          }
          this.rules = parsed;
          if (merged || !localStorage.getItem(this.storageKey)) {
            this.persistRules();
          }
          return;
        }
      }

      // Default to factory rules
      this.rules = factoryRules;
      this.persistRules();
    } catch (e) {
      console.warn("Could not load rules from storage, falling back to factory defaults:", e);
      this.rules = factoryRules;
      this.persistRules();
    }
  }

  persistRules() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.rules));
    } catch (e) {
      console.error("Failed to persist rules to localStorage:", e);
    }
  }

  getAllRules() {
    return [...this.rules];
  }

  getRulesCount() {
    return this.rules.length;
  }

  getRuleById(id) {
    return this.rules.find(r => r.id === id) || null;
  }

  filterRules(crop = 'all', searchQuery = '') {
    return this.rules.filter(rule => {
      const matchesCrop = (crop === 'all' || !crop) ? true : rule.crop === crop;
      if (!matchesCrop) return false;

      if (!searchQuery || !searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();

      const idMatch = rule.id.toLowerCase().includes(query);
      const conclusionMatch = rule.conclusion.toLowerCase().includes(query);
      const nameEnMatch = rule.disease_name && rule.disease_name.en && rule.disease_name.en.toLowerCase().includes(query);
      const nameHiMatch = rule.disease_name && rule.disease_name.hi && rule.disease_name.hi.toLowerCase().includes(query);
      const conditionMatch = rule.conditions.some(c => c.toLowerCase().includes(query));

      return idMatch || conclusionMatch || nameEnMatch || nameHiMatch || conditionMatch;
    });
  }

  addRule(newRuleData) {
    if (!newRuleData.id || !newRuleData.id.trim()) {
      throw new Error("Rule ID cannot be blank.");
    }
    const cleanId = newRuleData.id.trim().toUpperCase();
    if (this.rules.some(r => r.id === cleanId)) {
      throw new Error(`A rule with ID '${cleanId}' already exists.`);
    }

    if (!newRuleData.crop) throw new Error("Crop must be specified.");
    if (!newRuleData.conditions || newRuleData.conditions.length === 0) {
      throw new Error("At least one symptom condition is required.");
    }
    if (!newRuleData.conclusion) throw new Error("Disease conclusion is required.");

    const ruleObj = {
      id: cleanId,
      crop: newRuleData.crop,
      conditions: Array.isArray(newRuleData.conditions) ? newRuleData.conditions : [newRuleData.conditions],
      conclusion: newRuleData.conclusion,
      disease_name: {
        en: newRuleData.disease_name_en || newRuleData.conclusion,
        hi: newRuleData.disease_name_hi || newRuleData.disease_name_en || newRuleData.conclusion
      },
      cf: Math.max(0.05, Math.min(1.0, Number(newRuleData.cf) || 0.8)),
      treatment: {
        organic: {
          en: newRuleData.organic_en || "Apply biological neem extract.",
          hi: newRuleData.organic_hi || "जैविक नीम अर्क का छिड़काव करें।"
        },
        chemical: {
          en: newRuleData.chemical_en || "Consult local agricultural extension officer.",
          hi: newRuleData.chemical_hi || "स्थानीय कृषि विस्तार अधिकारी से संपर्क करें।"
        }
      },
      prevention: {
        en: newRuleData.prevention_en || "Practice healthy crop management.",
        hi: newRuleData.prevention_hi || "उचित कृषि प्रबंधन अपनाएं।"
      }
    };

    this.rules.unshift(ruleObj);
    this.persistRules();
    return ruleObj;
  }

  updateRule(ruleId, updatedData) {
    const index = this.rules.findIndex(r => r.id === ruleId);
    if (index === -1) {
      throw new Error(`Rule with ID '${ruleId}' was not found.`);
    }

    const existing = this.rules[index];
    const updatedRule = {
      ...existing,
      crop: updatedData.crop || existing.crop,
      conditions: updatedData.conditions || existing.conditions,
      conclusion: updatedData.conclusion || existing.conclusion,
      disease_name: {
        en: updatedData.disease_name_en || (existing.disease_name && existing.disease_name.en) || existing.conclusion,
        hi: updatedData.disease_name_hi || (existing.disease_name && existing.disease_name.hi) || existing.conclusion
      },
      cf: updatedData.cf !== undefined ? Math.max(0.05, Math.min(1.0, Number(updatedData.cf))) : existing.cf,
      treatment: {
        organic: {
          en: updatedData.organic_en || (existing.treatment && existing.treatment.organic && existing.treatment.organic.en) || "",
          hi: updatedData.organic_hi || (existing.treatment && existing.treatment.organic && existing.treatment.organic.hi) || ""
        },
        chemical: {
          en: updatedData.chemical_en || (existing.treatment && existing.treatment.chemical && existing.treatment.chemical.en) || "",
          hi: updatedData.chemical_hi || (existing.treatment && existing.treatment.chemical && existing.treatment.chemical.hi) || ""
        }
      },
      prevention: {
        en: updatedData.prevention_en || (existing.prevention && existing.prevention.en) || "",
        hi: updatedData.prevention_hi || (existing.prevention && existing.prevention.hi) || ""
      }
    };

    this.rules[index] = updatedRule;
    this.persistRules();
    return updatedRule;
  }

  deleteRule(ruleId) {
    const initialLen = this.rules.length;
    this.rules = this.rules.filter(r => r.id !== ruleId);
    if (this.rules.length === initialLen) {
      return false;
    }
    this.persistRules();
    return true;
  }

  resetToDefault() {
    this.rules = typeof DEFAULT_KNOWLEDGE_BASE !== 'undefined' ? [...DEFAULT_KNOWLEDGE_BASE] : [];
    this.persistRules();
    return this.rules;
  }

  exportAsJSONString() {
    return JSON.stringify(this.rules, null, 2);
  }

  importFromJSONString(jsonString) {
    const parsed = JSON.parse(jsonString);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error("Invalid JSON format. Expected a non-empty array of rules.");
    }
    // Validate that each entry looks like a rule
    for (const item of parsed) {
      if (!item.id || !item.crop || !item.conditions || !item.conclusion) {
        throw new Error(`Rule ${item.id || 'Unknown'} is missing required fields (id, crop, conditions, conclusion).`);
      }
    }
    this.rules = parsed;
    this.persistRules();
    return this.rules;
  }
}
