# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 6 (2026-07-18)

### Šta je završeno

- GSAP 3.15 + ScrollTrigger registrovani jednom u `animations.js` (entry modul)
- Hero intro timeline (desktop ~1.4s / mobilni ≤800ms): kicker → H1 linije → CTA →
  instrument (kazaljka settle, count-up 41°→18°, statusi, strujnice line-draw)
- H1 vidljiv bez JS-a — initial state postavlja JS (`hero__title-line` spanovi)
- Idle petlje (mikro-drhtaj kazaljke ±0.5°, strujnice) — samo ≥768px; pauza van
  viewporta i na hidden tabu
- CSS 3D tilt ≤4° preko `--tilt-x` / `--tilt-y` — fine pointer, ne reduced-motion
- Scroll reveal-i (trust, problem, usluge, koraci, prednosti, mapa, završni CTA):
  `start: "top 80%"`, play once, bez reverse; kraći pomak na mobilnom
- Scrub samo ≥1024: vezna linija u „Kako funkcioniše" + blagi hero parallax
- Sticky CTA: slide-up/down (CSS transition) kada hero CTA izađe/uđe u viewport
- Header: transparent na vrhu → solidan posle ~80px skrola (`has-scroll-enhance`)
- `prefers-reduced-motion`: finalna stanja odmah, bez petlji/tilt/parallax/scrub
- `gsap.matchMedia()` za breakpoint i reduced-motion razlike
- Bez pin-a, bez smooth-scroll biblioteka, bez Three.js
- Build prolazi; JS bundle ~126 KB / ~48 KB gzip (u budžetu)

### Fajlovi kreirani

- (nema — prošireni postojeći moduli)

### Fajlovi izmenjeni

- `index.html` — H1 linije, needle `<g>`, flowline klase, steps-wrap + progress, CTA underline
- `src/js/main.js` — redosled init (animations pre hero-visual)
- `src/js/modules/animations.js` — GSAP registracija + scroll motion sistem
- `src/js/modules/hero-visual.js` — intro, idle, tilt, count-up
- `src/js/modules/navigation.js` — header scroll enhance + sticky (CSS slide)
- `src/styles/sections.css` — header scroll, steps-wrap/progress, phone line, sticky transition
- `src/styles/responsive.css` — hero scale/parallax CSS vars, steps progress ≥1024
- `src/styles/animations.css` — tilt CSS vars
- `package.json` — verzija `0.6.0`
- `docs/DECISIONS.md` — odluke Faze 6 (#49–53)
- `docs/ROADMAP.md` — Faza 6 ✅
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke Faze 6

- Jedna ST registracija u `animations.js` (odluka #49)
- H1 linije u spanovima; hide samo preko JS (odluka #50)
- Idle + tilt desktop-only; tilt preko CSS vars (odluka #51)
- Scrub samo ≥1024; parallax preko `--parallax-y` (odluka #52)
- Sticky slide = CSS transition (odluka #53)

### Šta NIJE završeno (namerno — pripada narednim fazama)

- Responsive fino podešavanje, fokus trap u meniju, dodatne a11y interakcije (Faza 7)
- Canonical, Open Graph, favicon, robots.txt, sitemap, JSON-LD, cookie consent (Faza 8)
- Performance finom podešavanje / Lighthouse (Faza 9)
- Prave fotografije, brojevi, recenzije — i dalje placeholderi

### Poznati problemi / otvorena pitanja

- Fontovi zbirno ~186 KB — cilj ≤160 KB; rešava se u Fazi 9 ako Lighthouse traži
- Svi `{{PLACEHOLDER}}` čekaju stvarne vrednosti (CONTENT.md sekcija 21)
- Recenzije sekcija i dalje `hidden` dok ne stignu `{{GOOGLE_REVIEWS}}`
- GitHub repo još nije kreiran/povezan — ime mora biti **Klime** (`base: '/Klime/'`)
- Service-card ikone: scale/fade umesto pravog SVG stroke line-draw (sprite `<use>` ograničenje)
- Konačan logo potvrditi sa vlasnikom pre Faze 10

### Sledeća faza

**Faza 7 — Responsive, pristupačnost i interakcije**

### Prompt za sledeći chat

```
Pročitaj sledeće fajlove pre bilo kakve izmene:

- AGENTS.md
- docs/PROJECT_CONTEXT.md
- docs/CLIENT_DATA.md
- docs/CONTENT.md
- docs/DESIGN_SYSTEM.md
- docs/ANIMATION_SYSTEM.md
- docs/SEO_PERFORMANCE.md
- docs/ROADMAP.md
- docs/DECISIONS.md
- docs/HANDOFF.md

Trenutna faza je Faza 7: Responsive, pristupačnost i interakcije.

Zadaci:
1. Prođi sve breakpoint-e (320–1920) — nema overflow-a, CTA tap targeti ≥44px,
   isti ključni sadržaj na mobilnom; sticky bar ne prekriva kritičan tekst.
2. Pristupačnost: fokus trap u mobilnom meniju, vidljiv focus ring, Escape/aria
   stanja (proveri Phase 5 meni), landmarki, redosled naslova, kontrast AA,
   prefers-reduced-motion (ne diraj motion sistem Faze 6 osim a11y bugova).
3. Interakcije: hover/fokus stanja dugmadi i kartica; FAQ accordion UX
   (nativni details — poboljšaj ako treba bez menjanja copy-ja).
4. Ne menjaj copy (Faza 2) ni kreativni pravac (Faza 3/5). Ne implementiraj SEO (Faza 8).

Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md. Na kraju git commit:
git commit -am "phase 07: responsive accessibility and interactions"
```
