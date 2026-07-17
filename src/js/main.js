/**
 * main.js — application entry point.
 *
 * CSS is linked directly from index.html (not imported here) so the page
 * stays styled and readable without JavaScript (progressive enhancement).
 *
 * Module responsibilities:
 *  - navigation.js  → mobile menu, header scroll state (Phase 5/7)
 *  - hero-visual.js → SVG diagnostic panel behavior (Phase 5/6)
 *  - animations.js  → GSAP + ScrollTrigger motion system (Phase 6)
 *  - utils.js       → shared helpers (media queries, reduced motion)
 */

import { initNavigation } from './modules/navigation.js';
import { initHeroVisual } from './modules/hero-visual.js';
import { initAnimations } from './modules/animations.js';

initNavigation();
initHeroVisual();
initAnimations();
