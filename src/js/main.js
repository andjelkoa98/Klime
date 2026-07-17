/**
 * main.js — application entry point.
 *
 * CSS is linked directly from index.html (not imported here) so the page
 * stays styled and readable without JavaScript (progressive enhancement).
 *
 * Critical path: navigation + cookie consent (no GSAP).
 * Motion (GSAP + ScrollTrigger + hero intro) loads as a deferred chunk so
 * initial JS stays small — Phase 9 performance budget.
 *
 * Module responsibilities:
 *  - navigation.js     → mobile menu, header scroll state, sticky CTA
 *  - animations.js     → GSAP + ScrollTrigger registration (once) + scroll motion
 *  - hero-visual.js    → hero intro, idle loops, CSS 3D tilt
 *  - cookie-consent.js → cookie banner (decision #8; no privacy-policy page)
 *  - utils.js          → shared helpers (media queries, reduced motion)
 */

import { initNavigation } from './modules/navigation.js';
import { initCookieConsent } from './modules/cookie-consent.js';

initNavigation();
initCookieConsent();

/**
 * Start GSAP chunk immediately (async) so hero intro still runs near first paint,
 * without blocking parse/eval of the critical entry bundle.
 */
function initMotion() {
  return Promise.all([
    import('./modules/animations.js'),
    import('./modules/hero-visual.js'),
  ]).then(([{ initAnimations }, { initHeroVisual }]) => {
    initAnimations();
    initHeroVisual();
  });
}

void initMotion();
