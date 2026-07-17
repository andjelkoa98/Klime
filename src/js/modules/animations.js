/**
 * animations.js — GSAP + ScrollTrigger motion system.
 *
 * Spec: docs/ANIMATION_SYSTEM.md. Implemented in Phase 6:
 *  - ScrollTrigger registered ONCE here (single entry module)
 *  - gsap.matchMedia() blocks per breakpoint and prefers-reduced-motion
 *  - reveal pattern: start "top 80%", play once, no reverse
 *  - pin is forbidden site-wide; scrub only for the "Kako funkcioniše"
 *    timeline line and the subtle hero parallax
 *
 * GSAP is installed as a dependency in Phase 4 but intentionally not
 * imported yet, so it stays out of the bundle until Phase 6.
 */

export function initAnimations() {
  // Phase 4: no animations — intentionally a no-op.
}
