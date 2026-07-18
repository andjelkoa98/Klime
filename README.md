# MobilKlime sajt

One-page sajt za MobilKlime - mobilni servis auto-klime koji dolazi na adresu
korisnika (Beograd, Lazarevac, Obrenovac, Aranđelovac, Lajkovac).

## Pokretanje

```bash
npm install
npm run dev      # razvojni server
npm run build    # produkcioni build (dist/)
npm run preview  # pregled build-a
```

## Stack

Vite · semantički HTML5 · modularni CSS (bez frameworka) · vanilla JS (ES moduli) ·
GSAP + ScrollTrigger. Hosting: GitHub Pages (`base: '/Klime/'` u `vite.config.js`).

## Struktura

```
index.html              — semantički skelet stranice
src/styles/             — modularni CSS (variables = dizajn tokeni)
src/js/                 — main.js + moduli (navigation, animations, hero-visual, utils)
src/assets/fonts/       — lokalni woff2 fontovi (latin + latin-ext subset)
docs/                   — projektna dokumentacija (izvor istine - čitati pre izmena)
```

