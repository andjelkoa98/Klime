/**
 * navigation.js — header and mobile menu behavior (CONTENT.md 15.1, 15.13).
 *
 * Phase 5: mobile menu, sticky CTA IntersectionObserver.
 * Phase 6: header background after ~80px scroll; sticky bar slide via CSS transition.
 */

import { minWidth } from './utils.js';

export function initNavigation() {
  initMobileMenu();
  initHeaderScroll();
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

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  desktopQuery.addEventListener('change', (event) => {
    if (event.matches && isOpen()) setOpen(false);
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  header.classList.add('has-scroll-enhance');

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 80);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initStickyCtaBar() {
  const bar = document.querySelector('.sticky-cta');
  const heroCta = document.querySelector('.hero__cta-group');

  if (!bar || !heroCta || !('IntersectionObserver' in window)) return;

  // Progressive enhancement: hide while hero CTA is visible; CSS transitions slide.
  const observer = new IntersectionObserver(
    ([entry]) => {
      bar.classList.toggle('is-hidden', entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(heroCta);
}
