/**
 * hero-visual.js — hero "Dijagnostička tabla" SVG composition behavior.
 *
 * Scope (SVG is drawn in Phase 5, motion in Phase 6):
 *  - intro choreography hooks (readout 41°→18°, needle settle)
 *  - idle loops paused off-viewport / on hidden tab (IntersectionObserver,
 *    visibilitychange)
 *  - CSS 3D tilt ≤4° — desktop fine pointer only, disabled for
 *    prefers-reduced-motion
 */

export function initHeroVisual() {
  // Phase 4: hero SVG does not exist yet — intentionally a no-op.
}
