# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 4 (2026-07-17)

### Šta je završeno

- Vite projekat inicijalizovan u korenu repozitorijuma (vanilla JS, bez framework-a);
  `vite.config.js` sa `base: '/Klime/'` — ime GitHub repozitorijuma **Klime**
  potvrdio vlasnik
- Struktura foldera postavljena:
  - `src/styles/` — modularni CSS: `variables`, `reset`, `typography`, `layout`,
    `components`, `sections`, `animations`, `responsive` + `main.css` (entry sa
    @import redosledom); fajlovi za Fazu 5/6 su skelet sa opisom odgovornosti
  - `src/js/` — `main.js` + `modules/`: `navigation.js`, `animations.js`,
    `hero-visual.js`, `utils.js` (dokumentovani stubovi; utils ima breakpoint
    i reduced-motion helpere)
  - `src/assets/` — `fonts/` (6 woff2), `icons/`, `images/` (prazni do Faze 5)
- Svi dizajn tokeni iz `DESIGN_SYSTEM.md` (sekcije 3–7) preneti u
  `src/styles/variables.css` tačno kako su specificirani; breakpoint vrednosti
  dokumentovane kao referentni komentar (custom properties ne rade u media query)
- Fontovi preuzeti kao subset woff2 (latin + latin-ext kombinovano, preko
  google-webfonts-helper API-ja): Space Grotesk 500/700, Inter 400/600,
  IBM Plex Mono 400/500 — 6 fajlova, ~186 KB zbirno; `@font-face` sa
  `font-display: swap` u `typography.css`; preload za Space Grotesk 700 i
  Inter 400 u `index.html`
- GSAP 3.15 instaliran kao dependency (bez ijednog importa — Faza 6);
  Vite 8.1 kao devDependency
- `index.html` semantički skelet: `lang="sr-Latn"`, title + meta description iz
  CONTENT.md sekcije 16, sve sekcije iz sekcije 14 sa ispravnim anchor ID-jevima
  (`#pocetak`, `#problem`, `#usluge`, `#kako-funkcionise`, `#prednosti`,
  `#podrucje`, `#recenzije` (hidden), `#pitanja`, `#kontakt`), skip link,
  hero sa finalnim copy-jem i oba CTA, trust strip `ul`, FAQ obrazac sa
  nativnim `details/summary`, footer; placeholderi `{{PHONE_NUMBER}}` u tel: linkovima
- Provereno: `npm run build` prolazi (base putanje `/Klime/...` ispravne u dist-u),
  preview u browseru — fontovi se učitavaju (sve 3 familije), recenzije sekcija
  `display: none`, tamna tema i tokeni aktivni; bez linter grešaka
- README.md sa uputstvom za pokretanje
- 7 novih odluka u `DECISIONS.md` (#35–41)

### Fajlovi kreirani

- `package.json`, `package-lock.json`, `vite.config.js`, `.gitignore`, `README.md`
- `index.html`
- `src/styles/`: `main.css`, `variables.css`, `reset.css`, `typography.css`,
  `layout.css`, `components.css`, `sections.css`, `animations.css`, `responsive.css`
- `src/js/main.js`, `src/js/modules/`: `navigation.js`, `animations.js`,
  `hero-visual.js`, `utils.js`
- `src/assets/fonts/`: 6 woff2 fajlova

### Fajlovi izmenjeni

- `docs/DECISIONS.md` — odluke Faze 4 (#35–41)
- `docs/ROADMAP.md` — Faza 4 označena kao završena
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke Faze 4

- GitHub repo: **Klime** → `base: '/Klime/'` (odluka #35)
- FAQ: nativni `details/summary` accordion (odluka #36)
- CSS linkovan iz HTML-a, ne importovan u JS — sadržaj radi bez JS-a (odluka #37)
- GSAP instaliran ali se ne importuje do Faze 6 — bundle trenutno 0.7 KB JS (odluka #39)
- Recenzije sekcija nosi `hidden` dok ne stignu stvarne recenzije (odluka #41)

### Šta NIJE završeno (namerno — pripada narednim fazama)

- Vizuelni dizajn sekcija, logo/wordmark, SVG instrument kompozicija, ikone,
  mapa područja, kompletan sadržaj sekcija 4–11, sticky mobilni CTA bar,
  mobilni meni markup (Faza 5)
- GSAP/ScrollTrigger implementacija, hero intro, scroll reveal-i (Faza 6)
- Responsive fino podešavanje, pristupačnost interakcija (Faza 7)
- Canonical, Open Graph, favicon, robots.txt, sitemap, JSON-LD, cookie consent (Faza 8)

### Poznati problemi / otvorena pitanja

- Fontovi zbirno ~186 KB — cilj iz DESIGN_SYSTEM.md je ≤160 KB. Ako Faza 9
  pokaže da je bitno, dodatno subsetovanje (uklanjanje neiskorišćenih glifova
  fonttools-om) može spustiti ispod cilja; nije blokirajuće za Lighthouse cilj
- Svi `{{PLACEHOLDER}}` podaci i dalje čekaju stvarne vrednosti
  (`docs/CONTENT.md` sekcija 21); `{{PHONE_NUMBER}}` je sada i u tel: linkovima
  u `index.html` — zameniti pre objave
- GitHub repo još nije kreiran/povezan (`git remote` ne postoji) — pri prvom
  push-u ime mora biti tačno **Klime** ili se `base` menja uz novi zapis u DECISIONS.md
- Footer godina je statična „2026" — pre objave proveriti (ili rešiti u Fazi 8)

### Sledeća faza

**Faza 5 — Statički vizuelni dizajn** (logo/wordmark, kompletan sadržaj svih
sekcija iz CONTENT.md, SVG instrument kompozicija hero-a, ikone, mapa područja,
sticky mobilni CTA bar, mobilni meni markup — bez animacija, to je Faza 6)

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

Trenutna faza je Faza 5: statički vizuelni dizajn.

Zadaci:
1. Popuni sve sekcije index.html kompletnim finalnim copy-jem iz docs/CONTENT.md
   (sekcije 15, 17, 18) — uključujući svih 9 FAQ pitanja (details/summary),
   kartice usluga, korake procesa, poređenje, završni CTA i footer.
   Placeholderi {{NAZIV}} ostaju gde stvarni podaci ne postoje.
2. Izgradi wordmark MobilKlime (DESIGN_SYSTEM.md sekcija 16) i mobilni meni
   markup (hamburger + tel ikona; ponašanje po CONTENT.md 15.1).
3. Nacrtaj SVG elemente u stilu pravca „Hladna preciznost": instrument
   kompoziciju hero-a (statično idle stanje — animacije su Faza 6), inline SVG
   sprite ikona (DESIGN_SYSTEM.md sekcija 10), stilizovanu mapu područja.
4. Implementiraj kompletan statički CSS: komponente (dugmad, kartice, pill-ovi),
   sekcije po specifikaciji (DESIGN_SYSTEM.md sekcije 8–12), sticky mobilni CTA
   bar, responsive po breakpoint tabeli — mobile-first.
5. Placeholder fotografije kao tamni paneli sa mono opisom sadržaja
   (DESIGN_SYSTEM.md sekcija 11, CLIENT_DATA.md fotografije).
6. Proveri kontrast svih kombinacija boja (AA), tap targete ≥44px i da nema
   horizontalnog overflow-a ni CLS-a.

Ne piši GSAP animacije (Faza 6). Hero mora izgledati impresivno i statično.

Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md. Na kraju git commit:
git commit -am "phase 05: static visual design"
```
