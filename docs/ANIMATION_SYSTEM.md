# ANIMATION_SYSTEM.md — Motion sistem

> **Status: KONCEPTUALNO DEFINISAN u Fazi 3 (2026-07-17).** Implementira se u Fazi 6.
> Ovaj dokument je specifikacija ponašanja — bez produkcionog JavaScript koda.
> Vizuelni kontekst: pravac „Hladna preciznost" (docs/DESIGN_SYSTEM.md).

## 1. Motion principi

1. **Surgical, ne dekorativno:** po sekciji najviše 1–2 naštimovana reveal-a.
   Animira se ono što priča priču (toplo→hladno, dolazak na adresu, proces),
   ne sve što može.
2. **Karakter pokreta:** precizan i smiren — kao kazaljka manometra koja se
   smiruje u ispravnoj zoni. Bez bounce/elastic/jelly easing-a bilo gde.
3. **Konverzija je iznad motion-a:** ništa ne odlaže prikaz H1, broja telefona
   ili CTA; nijedna animacija ne pomera elemente ispod prsta/kursora.
4. Samo `transform` + `opacity` (+ SVG atributi poput `stroke-dashoffset`);
   bez animiranja layout svojstava.
5. GSAP + ScrollTrigger su jedine animacione biblioteke. Bez smooth-scroll
   biblioteka (Lenis i sl.) — native scroll ostaje netaknut.

## 2. Standardi trajanja i easing-a

| Token (koncept) | Vrednost | Upotreba |
|---|---|---|
| `dur-micro` | 150–200ms | hover/fokus stanja, ikone |
| `dur-short` | 300–400ms | fade/slide reveal manjih elemenata |
| `dur-medium` | 500–700ms | reveal kartica i blokova, count-up kraćih brojeva |
| `dur-long` | 800–1200ms | hero slojevi, line-draw putanja, veliki count-up |
| `dur-intro` | ~1400ms ukupno | ceo hero intro (zbir preklopljenih segmenata) |

| Easing | Upotreba |
|---|---|
| `power2.out` | default za sve reveal-e (ulazak elemenata) |
| `power3.out` | hero naslov i instrument panel (izraženiji, premium ulazak) |
| `power1.inOut` | kontinuirani/looping pokreti (strujnice, blagi float) |
| custom „needle settle" (npr. `power4.out` sa blagim overshoot-om <5%) | isključivo kazaljka manometra |

Stagger: 60–100ms između srodnih elemenata (kartice, trust pill-ovi, koraci);
maksimalno 5 elemenata u stagger grupi.

## 3. Hero intro (prioritet — „wow na prvu")

Choreografisan GSAP timeline na load, ukupno ~1.4s, preklopljeni segmenti:

1. **0–300ms:** kicker (mono oznaka) fade + slide 12px; tehnička mreža fade na
   punu (nisku) vidljivost.
2. **150–700ms:** H1 ulazi po linijama (2 linije, stagger 90ms, slide 24px +
   fade, `power3.out`). H1 je u DOM-u i vidljiv i bez JS-a — animacija ga
   samo „uvodi" (initial state se postavlja JS-om, ne CSS-om, da no-JS
   posetioci vide sadržaj odmah).
3. **300–900ms:** supporting tekst + oba CTA fade + slide (CTA klikabilni od
   prvog frame-a svog pojavljivanja).
4. **400–1400ms:** instrument panel: skala panela 0.96→1 + fade; kazaljka
   manometra sweep od minimuma i „settle" u OK zonu; temperaturni readout
   count-up **41° → 18°** uz prelaz boje heat→cold; status mono linije se
   ispisuju fade-om (bez „kucanja" karaktera — zabranjen terminal kliše).
5. **1000ms+:** strujnice vazduha: line-draw (`stroke-dashoffset`) pa prelaz u
   spor, jedva primetan loop protoka (`power1.inOut`, ciklus 6–8s).

Idle stanje posle intro-a: readout na 18°, kazaljka miruje uz mikro-drhtaj
(±0.5°, ciklus ~4s), strujnice sporo teku. Sve idle petlje se pauzuju kada je
tab u pozadini i kada hero izađe iz viewporta (IntersectionObserver).

Desktop dodatak: CSS 3D tilt instrument panela na pointer move (≤4°, lerp
smiren, samo pointer: fine uređaji).

## 4. Tipovi animacija po sekcijama

| Sekcija | Animacija | Trajanje/easing |
|---|---|---|
| **Header** | Bez entrance animacije. Suptilna promena pozadine (transparent → `--color-bg` + border) posle skrola od ~80px | `dur-micro` |
| **Hero** | Intro timeline (sekcija 3) + blagi parallax slojeva pri skrolu (instrument sporije od teksta, pomak ≤40px) | vidi sekciju 3 |
| **Trust strip** | Pill-ovi fade + slide 16px, stagger 80ms, jednom pri ulasku u viewport | `dur-short`, `power2.out` |
| **Problem i rešenje** | Par kartica: problem red ulazi prvi (leva `--color-heat` ivica se iscrta), zatim rešenje red (akcentna ivica) — mikro-priča toplo→hladno po kartici; stagger među karticama | `dur-medium` |
| **Usluge** | Grid kartica fade + slide, stagger 80ms; ikona se iscrta (line-draw ~400ms) pri prvom pojavljivanju kartice | `dur-medium` |
| **Kako funkcioniše** | Vezna linija timeline-a se iscrtava kroz sekciju (`stroke-dashoffset` vezan za scroll progres — jedini scrub na sajtu); koraci se otkrivaju redom kako linija stiže do njih | scrub bez pin-a |
| **Prednosti** | Dve kolone poređenja ulaze sa suprotnih strana (slide 24px + fade), parovi stagger-ovani | `dur-medium` |
| **Područje dolaska** | SVG mapa: ruta line-draw kroz 5 mesta + pin-ovi mesta iskaču redom (scale 0.6→1 + fade, stagger 120ms), jednom pri ulasku | `dur-long` za rutu |
| **Recenzije** | Jednostavan fade + slide kartica, stagger | `dur-short` |
| **FAQ** | Bez scroll animacije. Accordion: otvaranje/zatvaranje visine ~250ms + rotacija indikatora | `dur-micro`/250ms |
| **Završni CTA** | Broj telefona fade + scale 0.97→1; akcentni underline se iscrta ispod broja; tehnička mreža fade | `dur-medium` |
| **Footer** | Bez animacije | — |
| **Sticky mobilni CTA bar** | Slide-up 100%→0 kada hero CTA izađe iz viewporta; slide-down kada se vrati; bez animacije samih dugmadi | `dur-short` |

Count-up brojevi: samo temperaturni readout u hero-u. Bez izmišljenih statistika
(nema „broj klijenata" counter-a — podaci ne postoje).

## 5. ScrollTrigger pravila

- **Registracija jednom** (jedan entry modul); sve instance se čiste i ponovo
  kreiraju pri promeni breakpointa/orijentacije (`gsap.matchMedia()` +
  `ScrollTrigger.refresh()`).
- **Reveal pattern (default):** `start: "top 80%"`, `toggleActions: "play none
  none none"` — animacija se izvodi jednom, bez reverse pri skrolu nagore.
- **Scrub:** dozvoljen isključivo za veznu liniju u „Kako funkcioniše" i blagi
  hero parallax. Bez `scrub` na tekstu i karticama.
- **Pin: zabranjen na celom sajtu.** One-page konverzioni sajt ne sme da
  „zadržava" posetioca na putu ka broju telefona; pin na mobilnim browserima
  pravi jank i layout probleme.
- Bez scroll-jackinga, bez otimanja wheel/touch eventova, bez snap sekcija.
- Elementi animirani na scroll ne smeju izazvati CLS: initial state menja samo
  `transform`/`opacity`, nikad prostor koji element zauzima.
- Dev praksa (Faza 6): `markers` samo lokalno; batch srodnih trigger-a
  (`ScrollTrigger.batch`) za grid-ove.

## 6. Ponašanje na mobilnom (<768px)

- Hero: intro sveden na tekst sekvencu (kicker → H1 → CTA, ukupno ≤800ms) +
  readout traka sa count-up-om; **bez strujnica, bez parallax-a, bez tilt-a**.
- Scroll reveal-i: zadržavaju se, ali sa kraćim pomakom (12px umesto 24px) i
  bez stagger-a preko 3 elementa.
- Scrub linija u „Kako funkcioniše": zamenjuje se jednostavnim reveal-om koraka
  (bez scrub-a na touch uređajima).
- Mapa područja: ista line-draw animacija, skraćena (~600ms).
- Idle petlje (kazaljka, strujnice): isključene na mobilnom — statično idle stanje.
- Sve razlike se implementiraju kroz `gsap.matchMedia()` breakpoint blokove,
  ne kroz runtime if-ove.

## 7. prefers-reduced-motion

Obavezan fallback za svaki tip animacije; provera i preko CSS i preko
`matchMedia` u JS (GSAP matchMedia uslov).

| Tip animacije | Reduced-motion ponašanje |
|---|---|
| Hero intro | Bez timeline-a: sve odmah vidljivo u finalnom stanju; readout statično prikazuje 18°; kazaljka statična u OK zoni |
| Scroll reveal-i | Elementi uvek vidljivi (bez initial hide); najviše čist fade ≤200ms ili ništa |
| Count-up | Broj se prikazuje odmah u konačnoj vrednosti |
| Line-draw (ikone, ruta, timeline) | Putanje iscrtane od starta |
| Idle petlje (strujnice, kazaljka) | Isključene — statična grafika |
| Parallax / 3D tilt | Isključeni |
| Sticky CTA bar | Pojavljuje se bez slide-a (instant, ili fade ≤150ms) |
| Accordion / hover stanja | Zadržavaju se skraćeni (≤150ms) — funkcionalni feedback nije dekoracija |

Princip: reduced-motion korisnik dobija identičan sadržaj i identične
informacije, samo bez kretanja.

## 8. Pravila za 3D i eventualni WebGL

- WebGL/Three.js: **ne koristi se** (odluka u DESIGN_SYSTEM.md sekcija 13).
- CSS 3D tilt (jedini 3D efekat): samo desktop + fine pointer; ≤4° rotacije;
  lerp smiren; isključen za reduced-motion; bez `preserve-3d` dubokih scena.
- Sve idle/loop animacije: pauza kada element nije u viewportu i kada je
  dokument sakriven (`visibilitychange`) — bez trošenja baterije u pozadini.
- JS animacioni kod (GSAP + moduli) se učitava kao deo glavnog bundle-a
  (GSAP core + ScrollTrigger ≈ 60KB gzip — u budžetu); teže sekvence se ne
  uvode bez provere budžeta u Fazi 9.

## 9. Definicija uspeha motion sistema (provera u Fazi 6/9)

- Hero intro ne odlaže LCP (H1 renderovan pre JS-a; instrument je SVG u DOM-u).
- Bez long task-ova >50ms izazvanih animacijom na mid-range mobilnom.
- Lighthouse mobile 90+ sa uključenim animacijama.
- Sve animacije prolaze test: „da li bi sekcija bila siromašnija bez ove
  animacije?" — ako ne, animacija se briše.
