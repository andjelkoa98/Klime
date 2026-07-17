/**
 * navigation.js — header and mobile menu behavior (CONTENT.md 15.1, 15.13).
 *
 * Phase 5: mobile menu, sticky CTA IntersectionObserver.
 * Phase 6: header background after ~80px scroll; sticky bar slide via CSS transition.
 * Phase 7: focus trap in mobile menu; return focus to toggle; inert on page chrome.
 */

import { minWidth } from './utils.js';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function initNavigation() {
  initMobileMenu();
  initHeaderScroll();
  initStickyCtaBar();
}

function getFocusable(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
  );
}

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const wordmark = document.querySelector('.site-header .wordmark');
  const telIcon = document.querySelector('.site-header__tel');

  if (!toggle || !nav) return;

  const desktopQuery = minWidth('lg');
  const inertTargets = [
    document.querySelector('main'),
    document.querySelector('.site-footer'),
    document.querySelector('.sticky-cta'),
  ].filter(Boolean);

  function isOpen() {
    return nav.classList.contains('is-open');
  }

  function setInert(active) {
    inertTargets.forEach((el) => {
      if (active) el.setAttribute('inert', '');
      else el.removeAttribute('inert');
    });
  }

  /** DOM order while open: nav links → nav CTA → tel icon → toggle */
  function getTrapElements() {
    const items = [...getFocusable(nav)];
    if (telIcon && getComputedStyle(telIcon).display !== 'none') {
      items.push(telIcon);
    }
    items.push(toggle);
    return items;
  }

  function openMenu() {
    nav.classList.add('is-open');
    document.body.classList.add('nav-locked');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Zatvori meni');
    setInert(true);
    if (wordmark) wordmark.setAttribute('tabindex', '-1');

    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu({ restoreFocus = true } = {}) {
    if (!isOpen()) return;

    nav.classList.remove('is-open');
    document.body.classList.remove('nav-locked');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Otvori meni');
    setInert(false);
    if (wordmark) wordmark.removeAttribute('tabindex');

    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => {
    if (isOpen()) closeMenu({ restoreFocus: true });
    else openMenu();
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu({ restoreFocus: true });
  });

  document.addEventListener('keydown', (event) => {
    if (!isOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu({ restoreFocus: true });
      return;
    }

    if (event.key !== 'Tab') return;

    const trap = getTrapElements();
    if (trap.length === 0) return;

    const first = trap[0];
    const last = trap[trap.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) closeMenu({ restoreFocus: false });
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
