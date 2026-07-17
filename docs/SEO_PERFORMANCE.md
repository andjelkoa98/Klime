# SEO_PERFORMANCE.md — SEO i performance

> **Status: CILJEVI POSTAVLJENI, IMPLEMENTACIJA NIJE POČELA.**
> SEO se implementira u Fazi 8, performance u Fazi 9.

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

## SEO polazne osnove

- Jezik: srpski latinica → `<html lang="sr-Latn">`
- Lokalne fraze cilja: servis auto klime + dolazak na adresu + gradovi
  (Beograd, Lazarevac, Obrenovac, Aranđelovac, Lajkovac)
- Ciljna ključna fraza, title, meta description: definišu se u Fazi 2, potvrđuju u Fazi 8
- Structured data: LocalBusiness podtip (verovatno `AutoRepair`), **bez** `address`
  (nema javne poslovne adrese), **bez** izmišljenih `aggregateRating`, `priceRange`,
  `openingHoursSpecification` dok podaci ne postoje u CLIENT_DATA.md
- `serviceArea`: navedeni gradovi
- Canonical / sitemap / robots: GitHub Pages URL kao placeholder dok se domen ne odluči

## Hosting napomene

- GitHub Pages: Vite `base: '/<repo-name>/'` obavezno u Fazi 4
- Ako se kasnije pređe na Netlify + custom domen: ažurirati canonical, sitemap, OG URL-ove

## Analitika i privatnost (odluka vlasnika)

- Cookie consent: DA (implementacija najkasnije u Fazi 8)
- Stranica politike privatnosti: NE
- Konkretan analytics alat: `{{ANALYTICS_TOOL}}` — još nije izabran
