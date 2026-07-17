/**
 * navigation.js — header and mobile menu behavior (CONTENT.md 15.1, 15.13).
 *
 * Implemented (Phase 5):
 *  - mobile menu open/close, background scroll lock, focus return to trigger
 *  - close on Escape, on link click, and automatically at ≥1024px
 *  - aria-expanded state on the trigger
 *  - sticky mobile CTA bar: hidden while the hero CTA group is in the
 *    viewport (IntersectionObserver); without JS the bar stays visible
 *
 * Phase 6 adds: header background change after ~80px of scroll,
 * slide animation for the sticky bar.
 */

import { minWidth } from './utils.js';

export function initNavigation() {
  initMobileMenu();
  initStickyCtaBar();
}

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  const desktopQuery = minWidth('lg');

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-locked', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Zatvori meni' : 'Otvori meni');
  }

  function isOpen() {
    return nav.classList.contains('is-open');
  }

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  // Zatvaranje na klik linka ili CTA unutar menija
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  // Escape zatvara meni i vraća fokus na trigger
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Meni se automatski zatvara pri prelasku na desktop breakpoint
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches && isOpen()) setOpen(false);
  });
}

function initStickyCtaBar() {
  const bar = document.querySelector('.sticky-cta');
  const heroCta = document.querySelector('.hero__cta-group');

  if (!bar || !heroCta || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      bar.classList.toggle('is-hidden', entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(heroCta);
}
