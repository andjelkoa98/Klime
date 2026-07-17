# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 8 (2026-07-18)

### Šta je završeno

- Title + meta description (već iz Faze 2/4) potvrđeni; dodat canonical
  `https://{{GITHUB_USERNAME}}.github.io/Klime/`
- Open Graph + Twitter `summary_large_image` (CONTENT.md §19)
- Favicon SVG „MK" (`public/favicon.svg`); OG image 1200×630 (`public/og-image.png`)
- `public/robots.txt` + `public/sitemap.xml` za GitHub Pages putanju `/Klime/`
- JSON-LD `@graph`: `AutoRepair` (areaServed = 5 mesta, makesOffer = 5 usluga)
  + `FAQPage` (9 pitanja = vidljivi FAQ); bez address / ratings / priceRange / hours
- Cookie consent banner (odluka #8): `cookie-consent.js` + stilovi; bez politike privatnosti;
  analytics se ne učitava (`{{ANALYTICS_TOOL}}` neizabran)
- GBP: dokumentovana preporuka u `docs/SEO_PERFORMANCE.md` (odluka #9) — bez izmišljenih podataka
- Copy stranice nije menjan (samo SEO meta / JSON-LD); performance Faze 9 nije dirao

### Fajlovi kreirani

- `public/favicon.svg`
- `public/og-image.png`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/js/modules/cookie-consent.js`
- `scripts/generate-og-image.ps1` (util za regeneraciju OG slike)

### Fajlovi izmenjeni

- `index.html` — canonical, OG/Twitter, favicon, JSON-LD, cookie banner markup
- `src/js/main.js` — init cookie consent
- `src/styles/components.css` — cookie consent stilovi
- `package.json` — verzija `0.8.0`
- `docs/CLIENT_DATA.md` — `{{GITHUB_USERNAME}}`; GBP napomena
- `docs/SEO_PERFORMANCE.md` — SEO status + GBP preporuka
- `docs/DECISIONS.md` — odluke Faze 8 (#58–62)
- `docs/ROADMAP.md` — Faza 8 ✅
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke Faze 8

- GitHub Pages URL placeholder sa `{{GITHUB_USERNAME}}` (odluka #58)
- AutoRepair + FAQPage bez izmišljenih schema polja (odluka #59)
- MK favicon + minimal OG PNG (odluka #60)
- Cookie banner bez privacy page / bez analytics skripte (odluka #61)
- GBP samo kao docs preporuka (odluka #62)

### Šta NIJE završeno (namerno — pripada narednim fazama)

- Performance finom podešavanje / Lighthouse (Faza 9)
- Zamena svih `{{PLACEHOLDER}}` (telefon, gas, radno vreme, GitHub username, …)
- Prave fotografije i OG image od `{{PHOTO_HERO_TECHNICIAN}}` kad stigne
- Recenzije sekcija i dalje `hidden` dok ne stignu `{{GOOGLE_REVIEWS}}`
- Finalni QA i deploy (Faza 10)
- Ručno kreiranje Google Business Profile (van koda)

### Poznati problemi / otvorena pitanja

- Fontovi zbirno ~186 KB — cilj ≤160 KB; rešava se u Fazi 9 ako Lighthouse traži
- Svi `{{PLACEHOLDER}}` čekaju stvarne vrednosti (CONTENT.md sekcija 21)
- `{{GITHUB_USERNAME}}` mora biti zamenjen u HTML + robots + sitemap pre objave
- Recenzije sekcija i dalje `hidden` dok ne stignu `{{GOOGLE_REVIEWS}}`
- GitHub repo još nije kreiran/povezan — ime mora biti **Klime** (`base: '/Klime/'`)
- Service-card ikone: scale/fade umesto pravog SVG stroke line-draw (sprite `<use>` ograničenje)
- Konačan logo potvrditi sa vlasnikom pre Faze 10
- FAQ `name` exclusive: stariji browseri zadržavaju multi-open (prihvatljiv fallback)
- Cookie banner zahteva JS za dismiss; bez JS ostaje sakriven (`hidden` default) —
  prihvatljivo jer analytics ionako zahteva JS

### Sledeća faza

**Faza 9 — Performance optimizacija**

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

Trenutna faza je Faza 9: Performance optimizacija.

Zadaci:
1. Lighthouse mobile cilj 90+ (Performance); Accessibility / Best Practices / SEO 95+
   gde je u okviru ove faze.
2. Poštuj budžete iz docs/SEO_PERFORMANCE.md (initial transfer, fontovi, slike).
3. Optimizuj fontove, JS (GSAP), CSS, slike/asset pipeline — bez menjanja copy-ja
   i bez redizajna.
4. Proveri CLS (width/height, font-display), lazy-load ispod fold-a, bez blokirajućih
   eksternih resursa.
5. Ne započinji Fazu 10 (finalni QA / deploy).

Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md. Na kraju git commit:
git commit -am "phase 09: performance optimization"
```
