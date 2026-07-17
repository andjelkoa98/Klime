/**
 * main.js — application entry point.
 *
 * CSS is linked directly from index.html (not imported here) so the page
 * stays styled and readable without JavaScript (progressive enhancement).
 *
 * Module responsibilities:
 *  - navigation.js  → mobile menu, header scroll state, sticky CTA
 *  - animations.js  → GSAP + ScrollTrigger registration (once) + scroll motion
 *  - hero-visual.js → hero intro, idle loops, CSS 3D tilt
 *  - utils.js       → shared helpers (media queries, reduced motion)
 */

import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';
import { initHeroVisual } from './modules/hero-visual.js';

initNavigation();
initAnimations();
initHeroVisual();
