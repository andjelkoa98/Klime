/**
 * cookie-consent.js — minimal cookie consent banner (decision #8).
 *
 * No privacy-policy page. Preference is stored in localStorage so a future
 * analytics tool ({{ANALYTICS_TOOL}}) can gate on acceptance. No third-party
 * scripts are loaded here.
 */

const STORAGE_KEY = 'mobilklime-cookie-consent';
const ACCEPTED = 'accepted';

export function initCookieConsent() {
  const banner = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('cookie-consent-accept');
  if (!banner || !acceptBtn) return;

  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode / blocked storage — still show the banner.
  }

  if (stored === ACCEPTED) {
    banner.hidden = true;
    return;
  }

  banner.hidden = false;

  acceptBtn.addEventListener('click', () => {
    try {
      localStorage.setItem(STORAGE_KEY, ACCEPTED);
    } catch {
      // Preference may not persist; hide for this session anyway.
    }
    banner.hidden = true;
  });
}

/** True when the visitor has accepted cookies (for future analytics gating). */
export function hasCookieConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) === ACCEPTED;
  } catch {
    return false;
  }
}
