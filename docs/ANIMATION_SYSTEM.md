# ANIMATION_SYSTEM.md — Motion sistem

> **Status: NIJE DEFINISAN.** Konceptualno se definiše u Fazi 3, implementira u Fazi 6.
> Bez produkcionog JavaScript koda u ovom dokumentu.

## Ulazne smernice (odobreno u Fazi 0/1)

- GSAP + ScrollTrigger su jedine odobrene animacione biblioteke
- Hero animacija je prioritet — mora ostaviti snažan prvi utisak
- Animacije podržavaju sadržaj; ne animira se element samo zato što je moguće

## Šta Faza 3 mora da definiše (konceptualno)

- [ ] Tipovi animacija po sekcijama
- [ ] Trajanja i easing standardi
- [ ] ScrollTrigger pravila (kada scrub, kada pin, kada ništa)
- [ ] Ponašanje na mobilnom (jednostavnije animacije)
- [ ] prefers-reduced-motion ponašanje za svaki tip animacije
- [ ] Pravila za 3D i eventualni WebGL (lazy load, fallback, pauza van viewporta)

## Trajna pravila (važe bez obzira na izabrani pravac)

- `prefers-reduced-motion` fallback je obavezan
- Bez scroll-jackinga i blokiranja normalnog skrolovanja
- Bez animiranja glavnog CTA dugmeta tako da ometa klik
- Transform + opacity umesto width/height/top/left gde god je moguće
- ScrollTrigger se registruje samo jednom; instance se čiste pri resize/orijentaciji
- `gsap.matchMedia()` za različita ponašanja po breakpoint-ima
- Mobilni uređaji ne smeju biti preopterećeni
