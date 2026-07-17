# SEO_PERFORMANCE.md — SEO i performance

> **Status: SEO IMPLEMENTIRAN u Fazi 8 (2026-07-18). Performance = Faza 9.**

## Performance budžet (ciljevi projekta, ne garancije)

| Metrika | Cilj |
|---|---|
| Lighthouse Performance (mobile) | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |
| Initial transfer (desktop) | ≤ 1.5 MB |
| Initial transfer (mobile) | ≤ 1 MB |
| Hero slika (desktop) | ~250 KB |
| Hero slika (mobile) | ~150 KB |

Bez: autoplay videa, blokirajućih eksternih fontova, nepotrebnih JS biblioteka,
CLS-a izazvanog slikama i fontovima.

## SEO — implementirano (Faza 8)

- Jezik: srpski latinica → `<html lang="sr-Latn">`
- Title / meta description: iz `docs/CONTENT.md` §16
- Canonical, `og:url`, Twitter image URL, `robots.txt`, `sitemap.xml`:
  `https://{{GITHUB_USERNAME}}.github.io/Klime/` (zameniti pre objave)
- Open Graph + Twitter `summary_large_image` (CONTENT.md §19)
- Favicon: SVG „MK" inicijali (`public/favicon.svg`, DESIGN_SYSTEM.md §16)
- OG image: `public/og-image.png` 1200×630 (wordmark + „Dolazak na adresu")
- JSON-LD `@graph`: `AutoRepair` + `FAQPage`
  - `areaServed`: Beograd, Lazarevac, Obrenovac, Aranđelovac, Lajkovac
  - **bez** `address`, `aggregateRating`, `priceRange`, `openingHoursSpecification`
  - FAQ tekstovi = vidljivi FAQ odgovori (uključujući placeholdere dok klijent ne potvrdi)
- Cookie consent: banner + `localStorage` (odluka #8); bez stranice politike privatnosti;
  analytics alat još nije izabran (`{{ANALYTICS_TOOL}}`)

Lokalne fraze cilja: servis auto klime + dolazak na adresu + gradovi
(Beograd, Lazarevac, Obrenovac, Aranđelovac, Lajkovac).

## Google Business Profile — preporuka (odluka #9)

GBP **nije konfigurisan u kodu** i **ne smeju se izmišljati** podaci za profil.

Preporuka vlasniku / klijentu (ručno, van sajta):

1. Kreirati ili dovršiti Google Business Profile kad budu poznati stvarni podaci
   (telefon, radno vreme, način prikaza lokacije za mobilni servis).
2. Kategorija tipično u domenu auto-servisa / klima — tačan izbor potvrditi u GBP UI.
3. Opis i usluge moraju da se slažu sa sajtom (5 potvrđenih usluga, 5 mesta dolaska,
   bez fiksnih cena, bez lažnih ocena).
4. Ako nema javne poslovne adrese: koristiti GBP opcije za servis na lokaciji korisnika
   (service-area business) — **ne** unositi izmišljenu ulicu u schema.org ni na sajt.
5. Tekstovi Google recenzija (`{{GOOGLE_REVIEWS}}`) + URL (`{{GOOGLE_REVIEWS_URL}}`)
   trebaju za sekciju Recenzije pre Faze 10; link ka GBP/recenzijama dodati tek kad postoji.
6. Posle kreiranja profila: po želji dodati `sameAs` u JSON-LD sa stvarnim GBP URL-om
   (samo kad URL postoji).

## Hosting napomene

- GitHub Pages: Vite `base: '/Klime/'` (odluka #35)
- Pre objave zameniti sva `{{GITHUB_USERNAME}}` u: `index.html` (canonical/OG/JSON-LD),
  `public/robots.txt`, `public/sitemap.xml`
- Ako se kasnije pređe na Netlify + custom domen: ažurirati canonical, sitemap, OG URL-ove

## Analitika i privatnost (odluka vlasnika)

- Cookie consent: DA — implementiran u Fazi 8 (`src/js/modules/cookie-consent.js`)
- Stranica politike privatnosti: NE
- Konkretan analytics alat: `{{ANALYTICS_TOOL}}` — još nije izabran; učitavati tek posle
  prihvatanja (`hasCookieConsent()`)
