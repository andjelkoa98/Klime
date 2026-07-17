# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 5 (2026-07-17)

### Šta je završeno

- `index.html` popunjen kompletnim finalnim copy-jem iz CONTENT.md (sekcije 15, 17, 18):
  header, hero, trust strip, problem/rešenje, 5 kartica usluga, 4 koraka procesa,
  poređenje, područje dolaska, 9 FAQ (`details/summary`), završni CTA, footer;
  placeholderi `{{NAZIV}}` ostaju gde nema stvarnih podataka
- Wordmark MobilKlime (Space Grotesk 700 + akcentna SVG strujnica) u header-u i footer-u;
  `aria-label="MobilKlime — mobilni servis auto-klime"`
- Mobilni meni markup: hamburger + tel ikona; ponašanje u `navigation.js`
  (open/close, scroll lock, Escape, zatvaranje na link, auto-close ≥1024px)
- SVG „Hladna preciznost":
  - hero instrument kompozicija (manometar, readout 18° idle, statusi, strujnice)
  - mobilna kompaktna readout traka (≤767px)
  - inline SVG sprite ikona (stroke na geometriji, `currentColor`)
  - stilizovana mapa 5 mesta (prikaz ≥768px)
- Kompletan statički CSS: dugmad, kartice, pill-ovi, sekcije, sticky CTA bar,
  responsive po breakpoint tabeli (mobile-first)
- Placeholder fotografije kao tamni paneli sa mono opisom
- Sticky mobilni CTA („Pozovi" + „Poruka"): vidljiv bez JS-a; IO skriva dok je
  hero CTA u viewportu
- QA: nema horizontalnog overflow-a na 390px; tap targeti ≥44px; recenzije
  `display: none` (`hidden`); build prolazi; bez GSAP animacija
- 7 novih odluka u `DECISIONS.md` (#42–48)

### Fajlovi kreirani

- (nema novih fajlova — proširen postojeći scaffold Faze 4)

### Fajlovi izmenjeni

- `index.html` — kompletan sadržaj, wordmark, SVG sprite/instrument/mapa, sticky bar
- `src/styles/components.css` — dugmad, kartice, pill-ovi, FAQ, wordmark, placeholderi
- `src/styles/sections.css` — sve sekcije + header/footer/sticky
- `src/styles/responsive.css` — breakpoint overrides (uklj. mapa ≥768px)
- `src/styles/animations.css` — CSS hover/fokus tranzicije (bez GSAP)
- `src/js/modules/navigation.js` — mobilni meni + sticky CTA IntersectionObserver
- `src/js/modules/hero-visual.js` — komentar (statično; motion = Faza 6)
- `package.json` — verzija `0.5.0`
- `docs/DECISIONS.md` — odluke Faze 5 (#42–48)
- `docs/ROADMAP.md` — Faza 5 označena kao završena
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke Faze 5

- Wordmark = tekst + strujnica, bez ikonice-loga (odluka #42)
- Header CTA = tint, ne primary (odluka #43)
- Ikone: stroke na symbol geometriji (odluka #44)
- Hero statičan idle; GSAP tek u Fazi 6 (odluka #45)
- Mapa sakrivena na mobilnom (odluka #46)
- Sticky CTA progressive enhancement + IO (odluka #47)

### Šta NIJE završeno (namerno — pripada narednim fazama)

- GSAP/ScrollTrigger: hero intro, scroll reveal-i, count-up 41°→18°,
  line-draw ruta/timeline, idle petlje, sticky slide (Faza 6)
- Responsive fino podešavanje, fokus trap u meniju, dodatne a11y interakcije (Faza 7)
- Canonical, Open Graph, favicon, robots.txt, sitemap, JSON-LD, cookie consent (Faza 8)
- Performance finom podešavanje / Lighthouse (Faza 9)

### Poznati problemi / otvorena pitanja

- Fontovi zbirno ~186 KB — cilj ≤160 KB; rešava se u Fazi 9 ako Lighthouse traži
- Svi `{{PLACEHOLDER}}` čekaju stvarne vrednosti (CONTENT.md sekcija 21)
- Recenzije sekcija i dalje `hidden` dok ne stignu `{{GOOGLE_REVIEWS}}`
- GitHub repo još nije kreiran/povezan — ime mora biti **Klime** (`base: '/Klime/'`)
- Konačan logo potvrditi sa vlasnikom pre Faze 10

### Sledeća faza

**Faza 6 — GSAP animacije i 3D efekti** (hero intro ~1.4s, surgical scroll
reveal-i, count-up, line-draw, CSS 3D tilt ≤4°, prefers-reduced-motion —
prema `docs/ANIMATION_SYSTEM.md`)

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

Trenutna faza je Faza 6: GSAP animacije i 3D efekti.

Zadaci:
1. Registruj GSAP + ScrollTrigger jednom (entry modul); implementiraj motion
   sistem iz docs/ANIMATION_SYSTEM.md — bez pin-a, bez smooth-scroll biblioteka.
2. Hero intro timeline (~1.4s desktop; ≤800ms mobilni): kicker → H1 → CTA →
   instrument (kazaljka settle, count-up 41°→18°, statusi); H1 vidljiv bez JS-a
   (initial state postavlja JS, ne CSS).
3. Idle petlje (mikro-drhtaj kazaljke, strujnice) — samo desktop; pauza van
   viewporta i na hidden tabu. CSS 3D tilt ≤4° samo fine pointer + ne reduced-motion.
4. Scroll reveal-i po sekcijama (trust, problem, usluge, koraci, prednosti,
   mapa, završni CTA) — surgical, jednom, start "top 80%"; scrub samo za veznu
   liniju u „Kako funkcioniše" (desktop) i blagi hero parallax.
5. Sticky CTA bar: slide-up/down kada hero CTA izađe/uđe u viewport.
6. prefers-reduced-motion: identičan sadržaj bez kretanja (tabela u
   ANIMATION_SYSTEM.md sekcija 7). gsap.matchMedia() za breakpoint razlike.

Ne menjaj copy ni statički vizuelni sistem (Faza 5). Ne implementiraj SEO (Faza 8).

Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md. Na kraju git commit:
git commit -am "phase 06: gsap animations and motion system"
```
