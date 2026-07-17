# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 3 (2026-07-17)

### Šta je završeno

- Istraženi najbolji sajtovi iz auto/tehničke sfere (Awwwards SOTD: Longbow,
  Ford M-Sport Raptor T1+, Radian, Scout Motors), trend analize premium landing
  stranica 2025/26 i case study-ji mobilnih mehaničara — 10 izvučenih obrazaca
  zapisano u `DESIGN_SYSTEM.md` sekcija 1
- Predložena 3 kreativna pravca (A „Hladna preciznost" — dijagnostički HUD,
  B „Ledeni talas" — svetla atmosfera hladnog vazduha, C „Ruta 5" — mapa/ruta),
  sa atmosferom, paletom, tipografijom, hero konceptom, motion konceptom,
  prednostima i rizicima za svaki
- **Izabran pravac A „Hladna preciznost"** + zadržani elementi B (strujnice
  vazduha kao sekundarni motiv) i C (line-draw ruta u sekciji Područje)
- Kompletan dizajn sistem u `docs/DESIGN_SYSTEM.md`: CSS varijable za boje
  (semantika hladno=rešenje / toplo=problem), tipografija (Space Grotesk +
  Inter + IBM Plex Mono, lokalno, latin-ext), fluid type skala, spacing skala,
  container/grid, radius/shadow/border, 5 button varijanti, 5 card varijanti,
  SVG icon pravila, image treatment, hero kompozicija za 5 breakpoint opsega,
  odluka bez Three.js, responsive breakpoint-i, odobreni i zabranjeni obrasci,
  logo/wordmark smernica
- Konceptualni motion sistem u `docs/ANIMATION_SYSTEM.md`: principi, trajanja i
  easing standardi, hero intro choreografija (~1.4s, readout 41°→18°), animacije
  po svih 13 sekcija, ScrollTrigger pravila (pin zabranjen, scrub samo 2 mesta),
  mobilno ponašanje, prefers-reduced-motion tabela po tipu animacije, pravila
  za 3D/idle petlje, definicija uspeha
- 10 novih odluka upisano u `docs/DECISIONS.md` (#25–34)

### Fajlovi izmenjeni

- `docs/DESIGN_SYSTEM.md` — kompletno popunjen (bio prazan skelet)
- `docs/ANIMATION_SYSTEM.md` — kompletno popunjen (bio prazan skelet)
- `docs/DECISIONS.md` — odluke Faze 3 (#25–34) + prošireno „ne menja se" poglavlje
- `docs/ROADMAP.md` — Faza 3 označena kao završena
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke Faze 3

- Pravac: „Hladna preciznost" — tamni grafit `#0B0F14`, ledeno-plavi akcenat
  `#4CC9F0`, mono tehničke oznake; toplo-crvena samo kao semantika problema
- Hero: „Dijagnostička tabla" — SVG manometar + temperaturni readout 41°→18° +
  strujnice; na mobilnom kompaktna readout traka, H1/CTA prioritet above the fold
- **Bez Three.js/WebGL** — SVG + GSAP + CSS 3D tilt (≤4°, samo desktop)
- Pin zabranjen na celom sajtu; scrub samo za timeline liniju i hero parallax;
  bez smooth-scroll biblioteka
- Fontovi: Space Grotesk / Inter / IBM Plex Mono — lokalno hostovani woff2

### Šta NIJE završeno (namerno — pripada narednim fazama)

- Nema HTML/CSS/JS koda ni Vite scaffold-a (Faza 4)
- Font fajlovi još nisu preuzeti/subsetovani (Faza 4)
- Logo/wordmark se gradi u Fazi 5 (smernica postoji u DESIGN_SYSTEM.md sekcija 16)
- SVG instrument kompozicija, ikone i mapa se crtaju u Fazi 5
- GSAP implementacija motion sistema je Faza 6

### Poznati problemi / otvorena pitanja

- Svi `{{PLACEHOLDER}}` podaci i dalje čekaju stvarne vrednosti
  (`docs/CONTENT.md` sekcija 21)
- Prave fotografije ne postoje — dizajn sistem definiše placeholder tretman
  (tamni panel sa mono opisom); hero namerno ne zavisi od fotografije
- Ime GitHub repozitorijuma još nije određeno (bitno za Vite `base` u Fazi 4)
- Kontrastne vrednosti u DESIGN_SYSTEM.md su računate za navedene parove —
  pri implementaciji (Faza 5/7) svaku kombinaciju proveriti alatom

### Sledeća faza

**Faza 4 — Tehnička arhitektura i Vite scaffold** (struktura projekta, Vite
config sa `base` za GitHub Pages, modularni CSS fajlovi sa tokenima iz
DESIGN_SYSTEM.md, JS moduli, font pipeline; bez vizuelnog dizajna sekcija —
to je Faza 5)

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

Trenutna faza je Faza 4: tehnička arhitektura i Vite scaffold.

Zadaci:
1. Inicijalizuj Vite projekat (vanilla JS, bez framework-a) u korenu repozitorijuma.
   Podesi `base` opciju za GitHub Pages (ime repozitorijuma potvrdi sa vlasnikom
   pre podešavanja).
2. Postavi strukturu foldera: modularni CSS (reset, variables, typography, layout,
   components, sections, animations, responsive), JS moduli po odgovornosti
   (navigation, animations, hero-visual, utils), assets (fonts, icons, images).
3. Prenesi dizajn tokene iz docs/DESIGN_SYSTEM.md u CSS custom properties
   (variables fajl) — tačno kako su specificirani.
4. Preuzmi i subsetuj fontove (Space Grotesk 500/700, Inter 400/600,
   IBM Plex Mono 400/500) kao lokalne woff2 fajlove sa latin + latin-ext;
   podesi @font-face sa font-display: swap i preload za kritične fajlove.
5. Instaliraj GSAP + ScrollTrigger kao dependency (bez implementacije animacija —
   to je Faza 6).
6. Napravi osnovni index.html skelet sa semantičkom strukturom svih sekcija iz
   docs/CONTENT.md (sekcija 14) — prazne ili minimalno popunjene sekcije sa
   ispravnim ID-jevima, lang="sr-Latn", meta osnovama; bez finalnog vizuelnog
   dizajna (Faza 5) i bez animacija (Faza 6).

Ne radi vizuelni dizajn sekcija, ne crtaj SVG instrumente i ne piši animacije.

Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md. Na kraju git commit:
git commit -am "phase 04: technical architecture and vite scaffold"
```
