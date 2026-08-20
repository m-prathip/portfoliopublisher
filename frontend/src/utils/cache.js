const CACHE_PREFIX = 'portfolio_cache_';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

export const getCachedPortfolio = (username) => {
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${username}`);
    if (!cached) return null;
    
    const parsed = JSON.parse(cached);
    const age = Date.now() - parsed.timestamp;
    
    if (age > CACHE_TTL_MS) {
      // It's stale, but in Stale-While-Revalidate we might still return it 
      // while we fetch in the background. The caller decides.
      parsed.isStale = true;
    } else {
      parsed.isStale = false;
    }
    return parsed;
  } catch (err) {
    console.error('Error reading cache', err);
    return null;
  }
};

export const setCachedPortfolio = (username, data) => {
  try {
    const payload = {
      timestamp: Date.now(),
      data
    };
    localStorage.setItem(`${CACHE_PREFIX}${username}`, JSON.stringify(payload));
  } catch (err) {
    console.error('Error writing cache', err);
    // Usually means localStorage is full, try to clear old entries if we wanted to be robust,
    // but a simple clear is fine for a free tier architecture
    if (err.name === 'QuotaExceededError') {
      localStorage.clear();
    }
  }
};

export const clearPortfolioCache = (username) => {
  try {
    localStorage.removeItem(`${CACHE_PREFIX}${username}`);
  } catch (err) {
    console.error('Error clearing cache', err);
  }
};
