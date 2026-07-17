# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 7 (2026-07-18)

### Šta je završeno

- Responsive audit 320–1920: bez horizontalnog overflow-a; grid `min-width: 0`;
  instrument overflow clip na hero ≥1440
- Mali mobilni (≤374px): readout sakriven + kompaktniji hero — oba CTA above the fold
  na 320×568; tap targeti ≥44px (CTA/dugmad 48–52px)
- Sticky CTA: `body` padding-bottom 80px + safe-area; `scroll-padding` na `html`;
  sticky je `<nav aria-label="Brzi kontakt">`; ne postoji ≥1024
- Fokus trap u mobilnom meniju: Tab ciklus (nav linkovi → tel → toggle);
  `inert` na main/footer/sticky; wordmark van tab reda dok je otvoren;
  Escape / klik linka / desktop breakpoint zatvaraju meni; fokus nazad na toggle
- Focus ring: globalni `:focus-visible` + glow na dugmadima/nav/sticky;
  FAQ summary focus-visible
- Landmarki i naslovi: skip → `#sadrzaj` (`tabindex="-1"`); H1 + 8× H2 redosled;
  sticky kao nav landmark
- Interakcije: hover/focus-within na service/step/pair karticama; FAQ hover +
  exclusive accordion (`name="faq"`); veći FAQ tap target (52px)
- `prefers-reduced-motion`: sticky bez slide tranzicije (globalni kill + eksplicitno);
  motion sistem Faze 6 netaknut
- Copy (Faza 2) i kreativni pravac (Faza 3/5) nisu menjani; SEO nije dirao

### Fajlovi kreirani

- (nema)

### Fajlovi izmenjeni

- `index.html` — skip → `#sadrzaj`, main `tabindex="-1"`, FAQ `name="faq"`,
  sticky kao `<nav>`
- `src/js/modules/navigation.js` — fokus trap, inert, restore focus
- `src/styles/reset.css` — focus glow; reduced-motion sticky
- `src/styles/layout.css` — scroll-padding; skip-link stil
- `src/styles/components.css` — kartice hover/focus; FAQ UX
- `src/styles/animations.css` — tranzicije za kartice/FAQ
- `src/styles/sections.css` — sticky body padding 80px
- `src/styles/responsive.css` — ≤374px hero kompaktnost; overflow guardovi
- `package.json` — verzija `0.7.0`
- `docs/DECISIONS.md` — odluke Faze 7 (#54–57)
- `docs/ROADMAP.md` — Faza 7 ✅
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke Faze 7

- Fokus trap + inert bez dialog role (odluka #54)
- FAQ exclusive preko `name="faq"` (odluka #55)
- Sticky kao nav + scroll-padding (odluka #56)
- ≤374px kompaktniji hero radi above-the-fold CTA (odluka #57)

### Šta NIJE završeno (namerno — pripada narednim fazama)

- Canonical, Open Graph, favicon, robots.txt, sitemap, JSON-LD, cookie consent (Faza 8)
- Performance finom podešavanje / Lighthouse (Faza 9)
- Prave fotografije, brojevi, recenzije — i dalje placeholderi
- Finalni QA i deploy (Faza 10)

### Poznati problemi / otvorena pitanja

- Fontovi zbirno ~186 KB — cilj ≤160 KB; rešava se u Fazi 9 ako Lighthouse traži
- Svi `{{PLACEHOLDER}}` čekaju stvarne vrednosti (CONTENT.md sekcija 21)
- Recenzije sekcija i dalje `hidden` dok ne stignu `{{GOOGLE_REVIEWS}}`
- GitHub repo još nije kreiran/povezan — ime mora biti **Klime** (`base: '/Klime/'`)
- Service-card ikone: scale/fade umesto pravog SVG stroke line-draw (sprite `<use>` ograničenje)
- Konačan logo potvrditi sa vlasnikom pre Faze 10
- FAQ `name` exclusive: stariji browseri zadržavaju multi-open (prihvatljiv fallback)

### Sledeća faza

**Faza 8 — SEO i lokalna optimizacija**

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

Trenutna faza je Faza 8: SEO i lokalna optimizacija.

Zadaci:
1. Title, meta description, canonical (GitHub Pages URL placeholder), Open Graph,
   Twitter card, favicon (MK inicijali po DESIGN_SYSTEM.md §16).
2. robots.txt + sitemap.xml za GitHub Pages putanju `/Klime/`.
3. JSON-LD: LocalBusiness / AutoRepair podtip — serviceArea (5 mesta), bez address,
   bez izmišljenih aggregateRating / priceRange / openingHoursSpecification.
   Opciono FAQPage od FAQ copy-ja. Structured data mora da odgovara vidljivom sadržaju.
4. Cookie consent (odluka #8: DA, bez stranice politike privatnosti).
5. GBP preporuka kao napomena u dokumentaciji (odluka #9) — ne izmišljati podatke.
6. Ne diraj copy osim SEO meta/JSON-LD; ne radi performance Faze 9.

Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md. Na kraju git commit:
git commit -am "phase 08: SEO and local optimization"
```
