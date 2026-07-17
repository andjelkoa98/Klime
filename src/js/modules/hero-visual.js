/**
 * hero-visual.js — hero "Dijagnostička tabla" motion (ANIMATION_SYSTEM.md §3, §6–8).
 *
 *  - Intro timeline (~1.4s desktop / ≤800ms mobile)
 *  - Count-up 41°→18°, needle settle, status fade-in
 *  - Idle loops (needle micro-tremor, flowlines) — desktop only; paused
 *    off-viewport and on hidden tab
 *  - CSS 3D tilt ≤4° — fine pointer only, no reduced-motion
 *
 * Initial states are set in JS (not CSS) so no-JS visitors see final content.
 * ScrollTrigger is registered once in animations.js (entry module).
 */

import gsap from 'gsap';
import { prefersReducedMotion } from './utils.js';

const TEMP_START = 41;
const TEMP_END = 18;
const HEAT = '#FF6B4A';
const COLD = '#7DE3F7';

/** Idle needle rotation (degrees) — OK zone resting angle. */
const NEEDLE_IDLE = 0;
/** Start rotation for sweep (toward gauge minimum). */
const NEEDLE_START = -72;

export function initHeroVisual() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: reduce)', () => {
    setFinalState();
  });

  mm.add('(prefers-reduced-motion: no-preference) and (max-width: 767px)', () => {
    const cleanup = runMobileIntro();
    return cleanup;
  });

  mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
    let idleCleanup = null;
    let tiltCleanup = null;

    const introCleanup = runDesktopIntro(() => {
      idleCleanup = setupIdleLoops(hero);
      tiltCleanup = setupTilt();
    });

    return () => {
      introCleanup();
      if (idleCleanup) idleCleanup();
      if (tiltCleanup) tiltCleanup();
      setFinalState();
    };
  });
}

function setFinalState() {
  const panelValue = document.querySelector('.instrument-readout__value');
  const stripValue = document.querySelector('.readout-strip__value');
  const panelNeedle = document.querySelector('.instrument-panel .gauge-needle-group');
  const stripNeedle = document.querySelector('.hero__readout-strip .gauge-needle-group');
  const statuses = document.querySelectorAll('.instrument-status li');

  if (panelValue) {
    panelValue.innerHTML = `${TEMP_END}<small>°C</small>`;
    gsap.set(panelValue, { color: COLD });
  }
  if (stripValue) {
    stripValue.textContent = `${TEMP_END}°C`;
    gsap.set(stripValue, { color: COLD });
  }
  if (panelNeedle) gsap.set(panelNeedle, { svgOrigin: '100 100', rotation: NEEDLE_IDLE });
  if (stripNeedle) gsap.set(stripNeedle, { svgOrigin: '32 36', rotation: NEEDLE_IDLE });

  gsap.set(statuses, { clearProps: 'opacity,transform' });
  gsap.set('.hero__flowline', { clearProps: 'strokeDasharray,strokeDashoffset,opacity' });
  gsap.set(
    [
      '.hero__kicker',
      '.hero__title-line',
      '.hero__lead',
      '.hero__cta-group',
      '.hero__micro-trust',
      '.instrument-panel',
      '.hero__readout-strip',
    ],
    { clearProps: 'opacity,transform,scale' }
  );
}

function runMobileIntro() {
  const ctx = gsap.context(() => {
    const kicker = document.querySelector('.hero__kicker');
    const lines = gsap.utils.toArray('.hero__title-line');
    const lead = document.querySelector('.hero__lead');
    const cta = document.querySelector('.hero__cta-group');
    const micro = document.querySelector('.hero__micro-trust');
    const strip = document.querySelector('.hero__readout-strip');
    const stripValue = document.querySelector('.readout-strip__value');
    const stripNeedle = document.querySelector('.hero__readout-strip .gauge-needle-group');

    gsap.set([kicker, lead, cta, micro, strip].filter(Boolean), { opacity: 0, y: 12 });
    gsap.set(lines, { opacity: 0, y: 16 });
    if (stripNeedle) gsap.set(stripNeedle, { svgOrigin: '32 36', rotation: NEEDLE_START });
    if (stripValue) {
      stripValue.textContent = `${TEMP_START}°C`;
      gsap.set(stripValue, { color: HEAT });
    }

    const temp = { value: TEMP_START };
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    if (kicker) tl.to(kicker, { opacity: 1, y: 0, duration: 0.25 }, 0);
    if (lines.length) {
      tl.to(lines, { opacity: 1, y: 0, duration: 0.35, stagger: 0.07, ease: 'power3.out' }, 0.1);
    }
    if (lead) tl.to(lead, { opacity: 1, y: 0, duration: 0.3 }, 0.28);
    if (cta) tl.to(cta, { opacity: 1, y: 0, duration: 0.3 }, 0.32);
    if (micro) tl.to(micro, { opacity: 1, y: 0, duration: 0.25 }, 0.4);

    if (strip) {
      tl.to(strip, { opacity: 1, y: 0, duration: 0.3 }, 0.35);
      if (stripNeedle) {
        tl.to(stripNeedle, { rotation: NEEDLE_IDLE, duration: 0.45, ease: 'power4.out' }, 0.4);
      }
      if (stripValue) {
        tl.to(
          temp,
          {
            value: TEMP_END,
            duration: 0.5,
            ease: 'power2.out',
            onUpdate: () => {
              stripValue.textContent = `${Math.round(temp.value)}°C`;
            },
          },
          0.4
        );
        tl.to(stripValue, { color: COLD, duration: 0.5, ease: 'power1.inOut' }, 0.4);
      }
    }
  });

  return () => ctx.revert();
}

function runDesktopIntro(onComplete) {
  const ctx = gsap.context(() => {
    const kicker = document.querySelector('.hero__kicker');
    const lines = gsap.utils.toArray('.hero__title-line');
    const lead = document.querySelector('.hero__lead');
    const cta = document.querySelector('.hero__cta-group');
    const micro = document.querySelector('.hero__micro-trust');
    const panel = document.querySelector('.instrument-panel');
    const panelValue = document.querySelector('.instrument-readout__value');
    const panelNeedle = document.querySelector('.instrument-panel .gauge-needle-group');
    const statuses = gsap.utils.toArray('.instrument-status li');
    const flowlines = gsap.utils.toArray('.hero__flowline');

    gsap.set([kicker, lead, cta, micro].filter(Boolean), { opacity: 0, y: 12 });
    gsap.set(lines, { opacity: 0, y: 24 });
    if (panel) gsap.set(panel, { opacity: 0, scale: 0.96 });
    if (panelNeedle) gsap.set(panelNeedle, { svgOrigin: '100 100', rotation: NEEDLE_START });
    if (panelValue) {
      panelValue.innerHTML = `${TEMP_START}<small>°C</small>`;
      gsap.set(panelValue, { color: HEAT });
    }
    gsap.set(statuses, { opacity: 0, y: 6 });

    flowlines.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0.22,
      });
    });

    const temp = { value: TEMP_START };
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        // Drop GSAP transform so CSS 3D tilt can compose cleanly
        if (panel) gsap.set(panel, { clearProps: 'transform' });
        if (typeof onComplete === 'function') onComplete();
      },
    });

    // 0–300ms: kicker
    if (kicker) tl.to(kicker, { opacity: 1, y: 0, duration: 0.3 }, 0);

    // 150–700ms: H1 lines
    if (lines.length) {
      tl.to(lines, { opacity: 1, y: 0, duration: 0.55, stagger: 0.09, ease: 'power3.out' }, 0.15);
    }

    // 300–900ms: lead + CTAs
    if (lead) tl.to(lead, { opacity: 1, y: 0, duration: 0.45 }, 0.3);
    if (cta) tl.to(cta, { opacity: 1, y: 0, duration: 0.45 }, 0.35);
    if (micro) tl.to(micro, { opacity: 1, y: 0, duration: 0.4 }, 0.45);

    // 400–1400ms: instrument
    if (panel) {
      tl.to(panel, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }, 0.4);
    }
    if (panelNeedle) {
      tl.to(panelNeedle, { rotation: NEEDLE_IDLE + 2, duration: 0.7, ease: 'power4.out' }, 0.5);
      tl.to(panelNeedle, { rotation: NEEDLE_IDLE, duration: 0.2, ease: 'power2.out' }, 1.15);
    }
    if (panelValue) {
      tl.to(
        temp,
        {
          value: TEMP_END,
          duration: 0.9,
          ease: 'power2.out',
          onUpdate: () => {
            panelValue.innerHTML = `${Math.round(temp.value)}<small>°C</small>`;
          },
        },
        0.5
      );
      tl.to(panelValue, { color: COLD, duration: 0.9, ease: 'power1.inOut' }, 0.5);
    }
    if (statuses.length) {
      tl.to(statuses, { opacity: 1, y: 0, duration: 0.35, stagger: 0.08 }, 0.85);
    }

    // 1000ms+: flowline draw
    if (flowlines.length) {
      tl.to(
        flowlines,
        {
          strokeDashoffset: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
        },
        1.0
      );
    }
  });

  return () => ctx.revert();
}

function setupIdleLoops(hero) {
  const needle = document.querySelector('.instrument-panel .gauge-needle-group');
  const flowlines = gsap.utils.toArray('.hero__flowline');
  const loops = [];
  let inView = true;
  let tabVisible = document.visibilityState === 'visible';

  function syncPlayState() {
    const play = inView && tabVisible && !prefersReducedMotion();
    loops.forEach((tween) => {
      if (play) tween.resume();
      else tween.pause();
    });
  }

  if (needle) {
    gsap.set(needle, { svgOrigin: '100 100', rotation: NEEDLE_IDLE });
    loops.push(
      gsap.to(needle, {
        rotation: NEEDLE_IDLE + 0.5,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        paused: true,
      })
    );
  }

  flowlines.forEach((path, index) => {
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: `${length * 0.35} ${length * 0.65}`,
      strokeDashoffset: 0,
      opacity: 0.22,
    });
    loops.push(
      gsap.to(path, {
        strokeDashoffset: -length,
        duration: 7 + index * 0.6,
        ease: 'none',
        repeat: -1,
        paused: true,
      })
    );
  });

  const io =
    'IntersectionObserver' in window
      ? new IntersectionObserver(
          ([entry]) => {
            inView = entry.isIntersecting;
            syncPlayState();
          },
          { threshold: 0.15 }
        )
      : null;

  if (io) io.observe(hero);

  function onVisibility() {
    tabVisible = document.visibilityState === 'visible';
    syncPlayState();
  }
  document.addEventListener('visibilitychange', onVisibility);
  syncPlayState();

  return () => {
    document.removeEventListener('visibilitychange', onVisibility);
    if (io) io.disconnect();
    loops.forEach((tween) => tween.kill());
  };
}

function setupTilt() {
  const panel = document.querySelector('.instrument-panel');
  if (!panel) return undefined;

  const finePointer = window.matchMedia('(pointer: fine)');
  if (!finePointer.matches || prefersReducedMotion()) return undefined;

  panel.classList.add('has-tilt');
  panel.style.setProperty('--tilt-x', '0deg');
  panel.style.setProperty('--tilt-y', '0deg');

  const state = { rx: 0, ry: 0, trx: 0, try: 0 };
  let rafId = 0;

  function lerpLoop() {
    state.rx += (state.trx - state.rx) * 0.08;
    state.ry += (state.try - state.ry) * 0.08;
    panel.style.setProperty('--tilt-x', `${state.rx.toFixed(2)}deg`);
    panel.style.setProperty('--tilt-y', `${state.ry.toFixed(2)}deg`);
    rafId = requestAnimationFrame(lerpLoop);
  }
  rafId = requestAnimationFrame(lerpLoop);

  function onMove(event) {
    const rect = panel.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    state.try = gsap.utils.clamp(-4, 4, px * 8);
    state.trx = gsap.utils.clamp(-4, 4, -py * 8);
  }

  function onLeave() {
    state.trx = 0;
    state.try = 0;
  }

  panel.addEventListener('pointermove', onMove);
  panel.addEventListener('pointerleave', onLeave);

  return () => {
    cancelAnimationFrame(rafId);
    panel.removeEventListener('pointermove', onMove);
    panel.removeEventListener('pointerleave', onLeave);
    panel.classList.remove('has-tilt');
    panel.style.removeProperty('--tilt-x');
    panel.style.removeProperty('--tilt-y');
  };
}
