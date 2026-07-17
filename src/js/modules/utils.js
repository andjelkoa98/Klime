/**
 * utils.js — shared helpers used across modules.
 */

/** Canonical breakpoints (docs/DESIGN_SYSTEM.md section 14). */
export const BREAKPOINTS = {
  sm: 375,
  md: 430,
  tablet: 768,
  lg: 1024, // desktop nav breakpoint
  xl: 1280,
  xxl: 1440,
};

/** True when the user prefers reduced motion (checked live, not cached). */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Media query helper: matches min-width for a named breakpoint. */
export function minWidth(name) {
  return window.matchMedia(`(min-width: ${BREAKPOINTS[name]}px)`);
}
