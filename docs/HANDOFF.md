# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 9 (2026-07-18)

### Šta je završeno

- Font glyph subset (`scripts/subset-fonts.mjs`, `npm run fonts:subset`):
  6 woff2 → ~63 KB zbirno (cilj ≤160 KB); `font-display: swap` + preload ATF fontova
- GSAP/motion code-split: entry JS ~4 KB; `gsap` + `motion` async chunk-ovi
- Vite build: `cssCodeSplit: false`, bez modulepreload polyfill-a, manualChunks
- CLS provera: photo placeholderi sa `aspect-ratio` + `width: 100%`; pipeline napomena
  za buduće slike (`width`/`height`, `loading="lazy"` ispod fold-a)
- Bez blokirajućih eksternih resursa (sve lokalno)
- Lighthouse mobile (`vite preview` `/Klime/`): Performance **98**, Accessibility **96**,
  Best Practices **100**, SEO **100**; network ~132 KiB
- Copy i vizuelni dizajn nisu menjani

### Fajlovi kreirani

- `scripts/subset-fonts.mjs`

### Fajlovi izmenjeni

- `src/assets/fonts/*.woff2` — glyph subset
- `src/js/main.js` — dinamički import motion/GSAP
- `vite.config.js` — chunking + build opcije
- `src/styles/typography.css` — napomena o subset pipeline-u
- `src/styles/components.css` — CLS napomena na photo placeholder
- `index.html` — komentari (preload / bez CDN)
- `package.json` — `0.9.0`, skripta `fonts:subset`, devDep `subset-font`
- `package-lock.json`
- `docs/SEO_PERFORMANCE.md` — status + mereni rezultati
- `docs/DECISIONS.md` — odluke Faze 9 (#63–66)
- `docs/ROADMAP.md` — Faza 9 ✅
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke Faze 9

- Glyph subset umesto skidanja težina fontova (odluka #63)
- Dinamički import GSAP/motion, bez idle odlaganja intro-a (odluka #64)
- Vite chunk/CSS/modulePreload podešavanja (odluka #65)
- Bez `content-visibility` zbog ScrollTrigger (odluka #66)

### Šta NIJE završeno (namerno — pripada narednim fazama)

- Finalni QA, `FINAL_QA.md`, deploy na GitHub Pages (Faza 10)
- Zamena svih `{{PLACEHOLDER}}` (telefon, gas, radno vreme, GitHub username, …)
- Prave fotografije (AVIF/WebP + `srcset`) i OG od `{{PHOTO_HERO_TECHNICIAN}}`
- Recenzije sekcija i dalje `hidden` dok ne stignu `{{GOOGLE_REVIEWS}}`
- Ručno kreiranje Google Business Profile (van koda)

### Poznati problemi / otvorena pitanja

- Lighthouse color-contrast na dekorativnim `aria-hidden` mono oznakama u readout
  traci (`--color-text-faint` na panel pozadini, 4.21:1); A11y skor i dalje 96+
- Posle izmene copy-ja / novih karaktera: ponovo `npm run fonts:subset`
  (izvor za pun re-subset: `tmp-fonts/` gwfh zip-ovi ako treba restore)
- Svi `{{PLACEHOLDER}}` čekaju stvarne vrednosti (CONTENT.md sekcija 21)
- `{{GITHUB_USERNAME}}` mora biti zamenjen u HTML + robots + sitemap pre objave
- Recenzije sekcija i dalje `hidden` dok ne stignu `{{GOOGLE_REVIEWS}}`
- GitHub repo još nije kreiran/povezan — ime mora biti **Klime** (`base: '/Klime/'`)
- Service-card ikone: scale/fade umesto pravog SVG stroke line-draw (sprite `<use>`)
- Konačan logo potvrditi sa vlasnikom pre Faze 10
- FAQ `name` exclusive: stariji browseri zadržavaju multi-open (prihvatljiv fallback)
- Cookie banner zahteva JS za dismiss; bez JS ostaje sakriven — prihvatljivo

### Sledeća faza

**Faza 10 — Finalni QA i priprema za objavljivanje**

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

Trenutna faza je Faza 10: Finalni QA i priprema za objavljivanje.

Zadaci:
1. Napravi docs/FINAL_QA.md sa checklistom (funkcionalnost, a11y, SEO, performance,
   placeholderi, pregled na breakpointima).
2. Prođi QA checklistu na build/preview verziji; zabeleži prolaze i otvorene stavke.
3. Pripremi deploy na GitHub Pages (Vite base '/Klime/' već podešen) — bez forsiranja
   push-a ako repo/remote još nije spreman; dokumentuj tačne korake.
4. Ne zamenjuj {{PLACEHOLDER}} izmišljenim podacima; nabroji šta klijent mora da
   popuni pre javnog objavljivanja.
5. Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md. Na kraju git commit:
   git commit -am "phase 10: final QA and publish prep"
```
