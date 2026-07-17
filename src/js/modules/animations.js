/**
 * animations.js — GSAP + ScrollTrigger motion system (entry module).
 *
 * Spec: docs/ANIMATION_SYSTEM.md
 *  - ScrollTrigger registered ONCE here
 *  - gsap.matchMedia() for breakpoints and prefers-reduced-motion
 *  - reveal: start "top 80%", play once, no reverse
 *  - pin forbidden; scrub only for "Kako funkcioniše" line (desktop) + hero parallax
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVEAL = {
  start: 'top 80%',
  toggleActions: 'play none none none',
};

export function initAnimations() {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: reduce)', () => {
    // Identical content, no motion — ensure reveal targets stay visible
    gsap.set(
      [
        '.trust-pill',
        '.pair-card',
        '.pair-card__problem',
        '.pair-card__solution',
        '.service-card',
        '.step-card',
        '.compare-pair',
        '.compare-cell--classic',
        '.compare-cell--mobil',
        '.area-map__route',
        '.area-map__node',
        '.final-cta__phone',
        '.final-cta__phone-line',
        '.place-pill',
      ],
      { clearProps: 'all' }
    );
  });

  mm.add('(prefers-reduced-motion: no-preference) and (max-width: 767px)', () => {
    const ctx = gsap.context(() => {
      setupTrustReveal(12, 3);
      setupProblemReveal(12);
      setupServicesReveal(12, 3);
      setupStepsRevealMobile(12);
      setupCompareReveal(12);
      setupAreaReveal(0.6);
      setupFinalCtaReveal();
    });
    return () => ctx.revert();
  });

  mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
    const ctx = gsap.context(() => {
      setupTrustReveal(16, 5);
      setupProblemReveal(16);
      setupServicesReveal(16, 5);
      setupCompareReveal(24);
      setupAreaReveal(1.0);
      setupFinalCtaReveal();
    });
    return () => ctx.revert();
  });

  // Parallax + scrub timeline — desktop (≥1024)
  mm.add('(prefers-reduced-motion: no-preference) and (min-width: 1024px)', () => {
    const ctx = gsap.context(() => {
      setupHeroParallax();
      setupStepsScrub();
    });
    return () => ctx.revert();
  });

  // Tablet / mid: steps without scrub
  mm.add(
    '(prefers-reduced-motion: no-preference) and (min-width: 768px) and (max-width: 1023px)',
    () => {
      const ctx = gsap.context(() => {
        setupStepsRevealMobile(16);
      });
      return () => ctx.revert();
    }
  );
}

function setupHeroParallax() {
  const content = document.querySelector('.hero__content');
  const visual = document.querySelector('.hero__visual');
  const hero = document.querySelector('.hero');
  if (!hero || (!content && !visual)) return;

  if (content) {
    gsap.to(content, {
      y: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // Parallax via CSS var so it composes with responsive --hero-scale
  if (visual) {
    gsap.fromTo(
      visual,
      { '--parallax-y': '0px' },
      {
        '--parallax-y': '16px',
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }
}

function setupTrustReveal(offsetY, maxStagger) {
  const pills = gsap.utils.toArray('.trust-pill');
  if (!pills.length) return;

  gsap.set(pills, { opacity: 0, y: offsetY });

  // Cap stagger group size (mobile ≤3, desktop ≤5 per ANIMATION_SYSTEM.md)
  const groups = chunk(pills, maxStagger);
  groups.forEach((group, groupIndex) => {
    gsap.to(group, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      stagger: 0.08,
      ease: 'power2.out',
      delay: groupIndex * 0.12,
      scrollTrigger: {
        trigger: '.trust-strip',
        ...REVEAL,
      },
    });
  });
}

function chunk(items, size) {
  const groups = [];
  for (let i = 0; i < items.length; i += size) {
    groups.push(items.slice(i, i + size));
  }
  return groups;
}

function setupProblemReveal(offsetY) {
  const cards = gsap.utils.toArray('.pair-card');
  if (!cards.length) return;

  cards.forEach((card, index) => {
    const problem = card.querySelector('.pair-card__problem');
    const solution = card.querySelector('.pair-card__solution');
    if (!problem || !solution) return;

    gsap.set([problem, solution], { opacity: 0, y: offsetY });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        ...REVEAL,
      },
      delay: index * 0.08,
    });

    tl.to(problem, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    tl.to(solution, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
  });
}

function setupServicesReveal(offsetY, maxStagger) {
  const cards = gsap.utils.toArray('.service-card');
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, y: offsetY });

  chunk(cards, maxStagger).forEach((group) => {
    ScrollTrigger.batch(group, {
      start: 'top 80%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
          overwrite: true,
          onStart() {
            batch.forEach((card) => {
              const icon = card.querySelector('.service-card__icon');
              if (!icon) return;
              gsap.fromTo(
                icon,
                { opacity: 0, scale: 0.85 },
                { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
              );
            });
          },
        });
      },
    });
  });
}

function setupStepsRevealMobile(offsetY) {
  const steps = gsap.utils.toArray('.step-card');
  if (!steps.length) return;

  gsap.set(steps, { opacity: 0, y: offsetY });

  gsap.to(steps, {
    opacity: 1,
    y: 0,
    duration: 0.45,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.steps-wrap',
      ...REVEAL,
    },
  });
}

function setupStepsScrub() {
  const wrap = document.querySelector('.steps-wrap');
  const fill = document.querySelector('.steps__progress-fill');
  const steps = gsap.utils.toArray('.step-card');
  if (!wrap || !fill || !steps.length) return;

  gsap.set(fill, { scaleX: 0, transformOrigin: 'left center' });
  gsap.set(steps, { opacity: 0, y: 20 });

  gsap.to(fill, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: wrap,
      start: 'top 75%',
      end: 'bottom 55%',
      scrub: true,
    },
  });

  steps.forEach((step, index) => {
    const progress = index / (steps.length - 1 || 1);
    gsap.to(step, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: wrap,
        start: `top ${70 - progress * 15}%`,
        toggleActions: 'play none none none',
      },
    });
  });
}

function setupCompareReveal(offsetY) {
  const pairs = gsap.utils.toArray('.compare-pair');
  if (!pairs.length) return;

  pairs.forEach((pair, index) => {
    const classic = pair.querySelector('.compare-cell--classic');
    const mobil = pair.querySelector('.compare-cell--mobil');
    if (!classic || !mobil) return;

    gsap.set(classic, { opacity: 0, x: -offsetY });
    gsap.set(mobil, { opacity: 0, x: offsetY });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: pair,
          ...REVEAL,
        },
        delay: Math.min(index, 4) * 0.08,
      })
      .to(classic, { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out' })
      .to(mobil, { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out' }, '-=0.35');
  });
}

function setupAreaReveal(routeDuration) {
  const map = document.querySelector('.area-map');
  const route = document.querySelector('.area-map__route');
  const nodes = gsap.utils.toArray('.area-map__node');
  const places = gsap.utils.toArray('.place-pill');

  if (places.length) {
    gsap.set(places, { opacity: 0, y: 12 });
    gsap.to(places, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.area-places',
        ...REVEAL,
      },
    });
  }

  if (!map || !route) return;

  const length = route.getTotalLength();
  gsap.set(route, {
    strokeDasharray: length,
    strokeDashoffset: length,
    opacity: 0.85,
  });
  gsap.set(nodes, { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: map,
      ...REVEAL,
    },
  });

  tl.to(route, {
    strokeDashoffset: 0,
    duration: routeDuration,
    ease: 'power2.out',
  });
  tl.to(
    nodes,
    {
      opacity: 1,
      scale: 1,
      duration: 0.35,
      stagger: 0.12,
      ease: 'power2.out',
    },
    `-=${routeDuration * 0.45}`
  );
}

function setupFinalCtaReveal() {
  const phone = document.querySelector('.final-cta__phone');
  const line = document.querySelector('.final-cta__phone-line');
  const section = document.querySelector('.final-cta');
  if (!phone || !section) return;

  gsap.set(phone, { opacity: 0, scale: 0.97 });
  if (line) gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      ...REVEAL,
    },
  });

  tl.to(phone, { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out' });
  if (line) {
    tl.to(line, { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.25');
  }
}
