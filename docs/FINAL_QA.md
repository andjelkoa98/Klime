# FINAL_QA.md — Finalni QA i priprema za objavljivanje

> **Faza 10 (2026-07-18).** Checklist + rezultati provere na `npm run build` →
> `npm run preview` (`http://127.0.0.1:4173/Klime/`).
> Status: ✅ prolaz · 🟡 prolaz uz napomenu · ⬜ otvoreno (blokira javnu objavu) · ❌ pad

---

## 1. Rezime

| Oblast | Status |
|---|---|
| Funkcionalnost | ✅ |
| Pristupačnost (a11y) | 🟡 |
| SEO | 🟡 (placeholder URL-ovi do zamene username-a) |
| Performance | ✅ (iz Faze 9; dist ~298 KiB) |
| Placeholderi | ⬜ namerno ostaju do klijentskih podataka |
| Breakpoint pregled | ✅ |
| Deploy na GitHub Pages | ⬜ koraci dokumentovani; remote još nije povezan |

**Zaključak:** sajt je tehnički spreman za deploy čim klijent zameni obavezne
placeholdere i poveže GitHub repo **Klime**. Javna objava sa `{{PLACEHOLDER}}`
vrednostima nije dozvoljena.

---

## 2. Okruženje provere

| Stavka | Vrednost |
|---|---|
| Datum | 2026-07-18 |
| Komande | `npm run build` · `npm run preview -- --host 127.0.0.1 --port 4173` |
| URL | `http://127.0.0.1:4173/Klime/` |
| Vite `base` | `/Klime/` |
| Dist ukupno | ~305 KB (~298 KiB) fajlova na disku |
| Mreža (mobilni preview) | ~120 KiB transfer (resource timing) |
| Lighthouse (Faza 9) | Perf 98 · A11y 96 · BP 100 · SEO 100 |
| Git remote | **nema** — push nije forsirán |

---

## 3. Checklist — Funkcionalnost

| # | Stavka | Status | Napomena |
|---|---|---|---|
| F1 | Stranica se učitava na `/Klime/` bez 404 asseta | ✅ | CSS/JS/fontovi/favicon/og/robots/sitemap 200 |
| F2 | Jedan H1, sekcije i anchori iz CONTENT.md | ✅ | `#pocetak` … `#kontakt`; bez broken `#` linkova |
| F3 | Navigacija skroluje na sekcije | ✅ | Nav linkovi `#usluge`, `#kako-funkcionise`, `#podrucje`, `#pitanja` |
| F4 | Mobilni meni: otvara se na klik | ✅ | `aria-expanded`, label „Zatvori meni“, fokus na prvi link |
| F5 | Mobilni meni: zaključava pozadinski skrol | ✅ | `body.nav-locked` + `inert` na main/footer/sticky |
| F6 | Mobilni meni: Escape zatvara + fokus na toggle | ✅ | |
| F7 | Mobilni meni: klik na link zatvara | ✅ | hash `#usluge` postavljen |
| F8 | Mobilni meni: zatvara se ≥1024px | ✅ | toggle `display: none`, nav nije `is-open` |
| F9 | Sticky CTA: sakriven dok je hero CTA u viewportu | ✅ | klasa `is-hidden` |
| F10 | Sticky CTA: pojavi se posle skrola ispod hero-a | ✅ | `display: flex`, bez `is-hidden` |
| F11 | Sticky CTA: nema na desktopu (≥1024) | ✅ | `display: none` |
| F12 | FAQ accordion (9 pitanja), exclusive `name="faq"` | ✅ | otvaranje drugog zatvara prvo |
| F13 | Cookie banner: prikaz + Prihvatam → localStorage | ✅ | ključ `mobilklime-cookie-consent=accepted` |
| F14 | Recenzije sekcija sakrivena bez stvarnih recenzija | ✅ | `hidden` + `display: none` |
| F15 | `tel:` / WhatsApp / Viber linkovi postoje | 🟡 | href sadrži placeholdere — ne klikati kao produkciju |
| F16 | Nema kontakt forme | ✅ | |
| F17 | Console: nema runtime grešaka pri load-u | ✅ | entry + gsap + motion chunk učitani |

---

## 4. Checklist — Pristupačnost (a11y)

| # | Stavka | Status | Napomena |
|---|---|---|---|
| A1 | `lang="sr-Latn"` | ✅ | |
| A2 | Skip link „Preskoči na sadržaj“ | ✅ | |
| A3 | Landmarki: header, nav, main, footer | ✅ | 3× nav (glavna, footer, sticky) |
| A4 | Redosled naslova H1→H2→H3 | ✅ | jedan H1; H2 po CONTENT.md (Recenzije H2 u DOM-u ali `hidden`) |
| A5 | Fokus stanja (focus-ring token) | ✅ | CSS `--color-focus-ring` (Faza 7) |
| A6 | `aria-expanded` / `aria-label` na meniju i tel ikoni | ✅ | |
| A7 | Tap targeti ≥ 44px (toggle, tel, CTA) | ✅ | 44×44 toggle/tel; dugmad h=48 |
| A8 | Hero CTA above the fold na mobilnom | ✅ | 375×667 i 320×568 — oba dugmeta u prvom viewportu |
| A9 | `prefers-reduced-motion` podrška u CSS/JS | ✅ | media upiti prisutni; GSAP matchMedia (Faza 6) |
| A10 | Dekorativni SVG `aria-hidden` | ✅ | |
| A11 | Lighthouse A11y | 🟡 | 96 (Faza 9); kontrast na `aria-hidden` mono readout oznakama |

---

## 5. Checklist — SEO

| # | Stavka | Status | Napomena |
|---|---|---|---|
| S1 | Unique title ≤ 65 znakova | ✅ | CONTENT.md §16 |
| S2 | Meta description | ✅ | |
| S3 | Canonical | 🟡 | `https://{{GITHUB_USERNAME}}.github.io/Klime/` |
| S4 | Open Graph + Twitter card | 🟡 | URL/image zavisе od `{{GITHUB_USERNAME}}` |
| S5 | Favicon SVG | ✅ | `/Klime/favicon.svg` 200 |
| S6 | `robots.txt` + `sitemap.xml` | 🟡 | fajlovi 200; sitemap loc ima placeholder username |
| S7 | JSON-LD AutoRepair + FAQPage | 🟡 | bez address/ratings/hours; telefon/FAQ placeholderi kao na strani |
| S8 | OG image 1200×630 | ✅ | `og-image.png` 200 |
| S9 | Bez izmišljenih schema polja | ✅ | |

---

## 6. Checklist — Performance

| # | Stavka | Status | Napomena |
|---|---|---|---|
| P1 | Lighthouse mobile Performance ≥ 90 | ✅ | **98** (Faza 9) |
| P2 | Initial transfer ≤ 1 MB mobile | ✅ | ~120–132 KiB network |
| P3 | Dist ukupno ≤ 1.5 MB | ✅ | ~298 KiB |
| P4 | Lokalni fontovi, `font-display: swap`, subset | ✅ | 6 woff2 ~63 KB |
| P5 | GSAP u async chunk-u | ✅ | entry ~4 KB; gsap + motion odvojeni |
| P6 | Bez eksternih CDN fontova/skripti | ✅ | |
| P7 | Nema horizontalnog overflow-a | ✅ | 320 / 375 / 768 / 1024 / 1920 |
| P8 | CLS: photo placeholderi sa aspect-ratio | ✅ | nema `<img>` još — placeholder paneli |

---

## 7. Checklist — Placeholderi (ne zamenjivati izmišljenim podacima)

Vidljivi / u href / u meta na produkcionom HTML-u:

| Placeholder | Gde | Obavezno pre javne objave |
|---|---|---|
| `{{PHONE_NUMBER}}` | CTA, FAQ, JSON-LD, footer | **DA** |
| `{{WHATSAPP_NUMBER}}` | `wa.me` linkovi | **DA** |
| `{{VIBER_NUMBER}}` | `viber://` linkovi | **DA** |
| `{{EMAIL}}` | Footer | **DA** (ili ukloniti stavku) |
| `{{WORKING_HOURS}}` | Završni CTA | **DA** |
| `{{POWER_REQUIREMENT}}` | FAQ #6 + JSON-LD | **DA** |
| `{{GAS_TYPES}}` | FAQ #7 + JSON-LD | **DA** |
| `{{GITHUB_USERNAME}}` | canonical, OG, Twitter, JSON-LD, robots, sitemap | **DA** |
| `{{PHOTO_WORK_2}}` / `{{PHOTO_EQUIPMENT}}` / `{{PHOTO_VEHICLE}}` | Placeholder paneli | Preporučeno (ne blokira ako paneli ostanu) |
| `{{GOOGLE_REVIEWS}}` + `{{GOOGLE_REVIEWS_URL}}` | Sekcija Recenzije | Za prikaz sekcije — inače ostaje `hidden` |
| `{{INSTAGRAM_URL}}` / `{{FACEBOOK_URL}}` | Footer (komentar) | Samo ako postoje |
| `{{ANALYTICS_TOOL}}` | Cookie napomena / budući load | Ne blokira; učitati tek posle consent-a |

Kompletan spisak za klijenta: **sekcija 10** ispod + `CLIENT_DATA.md` + CONTENT.md §21.

---

## 8. Checklist — Breakpoint pregled

| Breakpoint | Status | Šta je provereno |
|---|---|---|
| 320×568 | ✅ | Oba hero CTA u prvom viewportu; readout `display: none`; bez overflow-a; toggle 44px |
| 375×667 | ✅ | Hero CTA u viewportu; readout traka; sticky sakriven pa vidljiv posle skrola; meni OK |
| 768×1024 | ✅ | Mapa područja vidljiva; hamburger i dalje; sticky prisutan; bez overflow-a |
| 1024×768 | ✅ | Desktop nav; header CTA; sticky sakriven; toggle sakriven; hero visual; meni zatvoren |
| ~1920 | ✅ | Bez overflow-a; desktop kompozicija |

---

## 9. Deploy na GitHub Pages — tačni koraci

**Stanje (2026-07-18):** lokalni git na grani `master`, **nema `git remote`**.
Push nije izvršen i ne sme se forsirati dok vlasnik ne kreira repo i ne potvrdi
GitHub username.

### Preduslovi

1. GitHub nalog → zapamtiti username (zamenjuje `{{GITHUB_USERNAME}}`).
2. Kreirati **javni** repozitorijum tačno imena **`Klime`**
   (Vite `base: '/Klime/'` — odluka #35).
3. Zameniti placeholdere iz sekcije 10 (minimum: telefon, WhatsApp, Viber,
   radno vreme, gas, struja, GitHub username u HTML/robots/sitemap).
4. `npm run build` lokalno — provera da `dist/` nastaje bez greške.

### Opcija A — GitHub Actions (preporučeno)

1. Povezati remote (jednom):

```bash
git remote add origin https://github.com/<GITHUB_USERNAME>/Klime.git
git push -u origin master
```

2. U repou dodati workflow (primer) `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. GitHub → Settings → Pages → Source: **GitHub Actions**.
4. Posle uspešnog run-a: `https://<GITHUB_USERNAME>.github.io/Klime/`

### Opcija B — ručni `gh-pages` branch iz `dist/`

```bash
npm run build
# Primer sa git subtree / gh-pages alatkom — samo ako Actions nije opcija:
npx gh-pages -d dist -b gh-pages
```

Zatim Settings → Pages → Branch: `gh-pages` / root.

### Posle deploy-a (obavezna provera)

- [ ] Canonical / OG / sitemap URL odgovaraju stvarnom `github.io` nalogu
- [ ] Favicon i OG image učitavaju se sa `/Klime/`
- [ ] `tel:` i poruke otvaraju stvarne brojeve
- [ ] Lighthouse na javnom URL-u (mobilni) i dalje ≥ 90 Performance
- [ ] Recenzije: ukloniti `hidden` tek kad postoje stvarni tekstovi

### Čega NE raditi

- Ne forsirati `git push` dok remote ne postoji
- Ne hardkodovati lažan GitHub username
- Ne objavljivati sajt sa vidljivim `{{PHONE_NUMBER}}` / `{{GAS_TYPES}}` itd.
- Ne menjati `base` bez izmene imena repoa (mora ostati `/Klime/`)

---

## 10. Šta klijent mora da popuni pre javnog objavljivanja

### Obavezno (blokira javnu objavu)

1. **`{{PHONE_NUMBER}}`** — prikaz + `tel:` (format npr. +381 6X XXX XX XX)
2. **`{{WHATSAPP_NUMBER}}`** — za `https://wa.me/...` (obično bez + / razmaka)
3. **`{{VIBER_NUMBER}}`** — za `viber://chat?number=...`
4. **`{{EMAIL}}`** — ili ukloniti email stavku iz footera ako ne postoji
5. **`{{WORKING_HOURS}}`** — završni CTA
6. **`{{POWER_REQUIREMENT}}`** — FAQ #6 (struja / uslovi na parkingu)
7. **`{{GAS_TYPES}}`** — FAQ #7 (koji gasovi)
8. **`{{GITHUB_USERNAME}}`** — u `index.html`, `public/robots.txt`, `public/sitemap.xml`

### Jako preporučeno pre marketinga

9. Stvarne fotografije umesto panela (`PHOTO_*` iz CLIENT_DATA.md) — AVIF/WebP + width/height
10. **`{{GOOGLE_REVIEWS}}`** + **`{{GOOGLE_REVIEWS_URL}}`** → skinuti `hidden` sa `#recenzije`
11. Potvrda wordmark/logo sa vlasnikom
12. Google Business Profile (ručno; vidi SEO_PERFORMANCE.md § GBP)
13. **`{{ANALYTICS_TOOL}}`** + učitavanje tek posle cookie pristanka
14. **`{{TRAVEL_FEE_POLICY}}`** — ako postoji naplata dolaska, dopuniti FAQ o ceni

### Opciono / nije na sajtu dok se ne potvrdi

- `{{TECHNICIAN_NAME}}`, `{{PRIMARY_LOCATION}}`, `{{MAX_DISTANCE}}`
- `{{HYBRID_EV_SUPPORT}}`, `{{GAS_RECOVERY}}`, `{{EXCLUDED_SERVICES}}`
- `{{YEARS_EXPERIENCE}}`, `{{VEHICLES_SERVICED}}`, `{{CERTIFICATIONS}}`, `{{WARRANTY_TERMS}}`
- `{{INSTAGRAM_URL}}`, `{{FACEBOOK_URL}}`
- `{{WEEKEND_AVAILABILITY}}`, `{{EMERGENCY_AVAILABILITY}}`

---

## 11. Poznati otvoreni problemi (ne blokiraju Fazu 10 dokumentaciju)

| Problem | Severitet | Akcija |
|---|---|---|
| Svi poslovni placeholderi i dalje u HTML-u | Visok za objavu | Klijent popunjava (sekcija 10) |
| Nema git remote / GitHub repo | Visok za deploy | Vlasnik kreira `Klime` + remote |
| Lighthouse kontrast na dekorativnim readout oznakama | Nizak | Prihvatljivo (A11y 96); aria-hidden |
| Service-card ikone: scale/fade umesto stroke line-draw | Nizak | Nice-to-have |
| FAQ `name` exclusive na starim browserima | Nizak | Multi-open fallback OK |
| Cookie banner zahteva JS | Nizak | Prihvatljivo (odluka #61) |

---

## 12. Potpis Faze 10

- Checklist kreiran i prođen na build/preview.
- Deploy koraci dokumentovani bez forsiranja push-a.
- Placeholderi nisu zamenjeni izmišljenim podacima.
- ROADMAP: Faza 10 ✅
