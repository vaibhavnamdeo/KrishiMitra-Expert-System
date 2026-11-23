/**
 * KrishiMitra - Past Diagnoses History Module
 * Persists and manages diagnosis records in the browser's localStorage.
 */

class HistoryManager {
  constructor(storageKey = 'krishimitra_history') {
    this.storageKey = storageKey;
  }

  getAll() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to load history from localStorage:", e);
      return [];
    }
  }

  getHistory() {
    return this.getAll();
  }

  saveDiagnosis(record) {
    try {
      const history = this.getAll();
      const newEntry = {
        id: 'DIAG_' + Date.now(),
        timestamp: Date.now(),
        formattedDate: new Date().toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        crop: record.crop,
        mode: record.mode,
        primaryDiagnosis: record.primaryDiagnosis,
        top3: record.top3 || [],
        symptomsCount: record.symptomsCount || 0,
        combinedCF: record.combinedCF || 0
      };
      history.unshift(newEntry);
      // Keep up to 50 most recent records
      if (history.length > 50) {
        history.length = 50;
      }
      localStorage.setItem(this.storageKey, JSON.stringify(history));
      return newEntry;
    } catch (e) {
      console.error("Failed to save diagnosis:", e);
      return null;
    }
  }

  getById(id) {
    const list = this.getAll();
    return list.find(item => item.id === id) || null;
  }

  deleteById(id) {
    const list = this.getAll().filter(item => item.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
    return list;
  }

  clearAll() {
    localStorage.removeItem(this.storageKey);
  }

  clearHistory() {
    this.clearAll();
  }
}
