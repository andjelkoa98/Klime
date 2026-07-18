# DESIGN_SYSTEM.md — Vizuelni sistem

> **Status: DEFINISAN u Fazi 3 (2026-07-17).** Ovo je izvor istine za sve vizuelne
> odluke od Faze 4 nadalje. Izmene zahtevaju zapis u `DECISIONS.md`.
> CSS vrednosti ovde su specifikacija dizajna, ne produkcioni kod — implementiraju se u Fazi 4/5.

---

## 1. Istraživanje — obrasci koji rade (izvučeno u Fazi 3)

Analizirani su nagrađivani auto/tehnički sajtovi (Awwwards SOTD: Longbow, Ford
M-Sport Raptor T1+, Radian, Scout Motors), trend analize premium landing stranica
2025/26 i case study-ji sajtova mobilnih mehaničara.

**Premium obrasci (estetika i motion):**

1. Tamna, skoro crna paleta + **jedna** zasićena akcentna boja; gradijent samo
   „hirurški" — na jednom hero elementu ili CTA, nikad kao tapeta.
2. Velika, smela tipografija kao glavni nosilac utiska; monospace/tehnički tip
   za oznake, brojeve i podatke („function-forward" trend).
3. Motion je „surgical": 1–2 naštimovana reveal-a po sekciji; animira se ono što
   priča priču, ne sve što može.
4. Scroll-driven storytelling (pin + scrub) samo tamo gde sekvenca to traži —
   nikad kao default.
5. WebGL/3D je mainstream, ali uvek lazy-loaded sa mobilnim fallback-om; čist
   SVG + GSAP postiže isti „tehnički" utisak za deo troška.
6. HUD/instrument estetika (SVG manometri, readout brojevi, mono oznake) odlično
   nosi tehničke brendove bez canvas-a/WebGL-a (~1–3 KB po elementu).

**Conversion obrasci (lokalni mobilni servisi):**

7. Poziv na jedan tap u prvih 5 sekundi; sticky click-to-call; load < 1.5 s na 4G.
8. „Rugged dark mode" izgled signalizira ozbiljan automotive biznis
   (case study mobilnog mehaničara: +30% poziva nakon takvog redizajna).
9. Prave fotografije majstora i opreme umesto stock-a; trust signali above the fold.
10. Animacija nikada ne sme usporiti put do broja telefona.

---

## 2. Tri kreativna pravca i izbor

### Pravac A — „Hladna preciznost" (dijagnostički HUD) ✅ IZABRAN

- **Atmosfera:** mobilna laboratorija pod kontrolom — tamni grafit, instrumenti
  svetle hladnim plavim, sve izmereno i smireno. Premium tehnički, ne SF spektakl.
- **Paleta:** grafit skoro crni, ledeno-plavi akcenat, hladno srebrni tekst;
  toplo-crvena isključivo kao semantika problema (vrelina) koja se „hladi" u plavo.
- **Tipografija:** Space Grotesk (naslovi) · Inter (tekst) · IBM Plex Mono (oznake/brojevi).
- **Hero:** asimetrija — levo H1 + CTA, desno animirana SVG dijagnostička tabla
  (manometar, temperaturni readout 41°→18°, strujnice vazduha, mono status oznake).
- **Motion:** choreografisan hero intro (~1.4 s), surgical scroll reveal-i,
  count-up brojevi, suptilan parallax.
- **Prednosti:** jedini pravac koji pokriva ceo koncept (laboratorija + preciznost +
  klima + premium); tamni automotive izgled dokazano konvertuje; sve izvodljivo
  SVG + GSAP u okviru performance budžeta; semantika toplo→hladno je unikatna.
- **Rizici (i kontrole):** tamna tema traži AA kontrast (obavezna provera);
  HUD može skliznuti u gejmerski kič (budžet za glow, zabrana klišea u sekciji 14);
  fotografije moraju biti kolor-gradirane (sekcija 11).

### Pravac B — „Ledeni talas" (atmosfera hladnog vazduha) — odbijen

- Svetla ledena tema, duboka petrolej plava, SVG strujnice vazduha kroz veliku
  tipografiju; mekan, vazdušast, „olakšanje kad klima prvi put dune hladno".
- **Zašto ne:** teže postiže „wow na prvu" (elegancija se lako pročita kao obična);
  strujnice bez tehničkog konteksta klize ka zabranjenim „pahuljicama"; ne pokriva
  „laboratorijsku preciznost" iz odobrenog koncepta.
- **Šta se zadržava:** motiv strujnica vazduha kao sekundarni grafički element
  unutar pravca A (uz tehnički kontekst, ne kao dekoracija).

### Pravac C — „Ruta 5" (lokalni servis u pokretu) — odbijen

- Editorial, topli ugalj + amber akcenat; hero = SVG mapa sa line-draw rutom kroz
  svih 5 mesta i oznakom vozila.
- **Zašto ne:** dupliranje motiva (mapa i u hero-u i u sekciji Područje); ne pokriva
  laboratorijsku preciznost; vizuelno najbliži prosečnom lokalnom sajtu — najmanji
  wow potencijal.
- **Šta se zadržava:** line-draw ruta kroz 5 mesta — ali u sekciji „Područje dolaska",
  gde joj je mesto.

---

## 3. Boje — CSS varijable

Semantika palete: **hladno = MobilKlime/rešenje, toplo = problem (vrelina u autu).**
Topla boja se koristi isključivo za prikaz problema, nikada za brend ili CTA.

```css
:root {
  /* Pozadine (tamni grafit sistem) */
  --color-bg:            #0B0F14;  /* osnovna pozadina stranice */
  --color-bg-raised:     #101720;  /* alternativne sekcije */
  --color-panel:         #131C26;  /* kartice, paneli */
  --color-panel-raised:  #18232F;  /* hover/istaknuti panel */

  /* Tekst */
  --color-text:          #E9EFF4;  /* primarni tekst — kontrast ~15:1 na --color-bg */
  --color-text-muted:    #A7B7C4;  /* sekundarni tekst — kontrast ~8:1 */
  --color-text-faint:    #6E8090;  /* mono oznake, caption — kontrast ~4.6:1, samo ≥14px */

  /* Akcenat — ledeno plava (brend) */
  --color-accent:        #4CC9F0;  /* linkovi, ikone, akcenti, glow */
  --color-accent-strong: #22B8E6;  /* hover/aktivna stanja akcenta */
  --color-accent-deep:   #0E7490;  /* tamnija podloga akcentnih zona */
  --color-accent-tint:   rgba(76, 201, 240, 0.12);  /* pozadine badge-eva, tint paneli */

  /* CTA — poziv (najvažnija akcija na sajtu) */
  --color-cta:           #4CC9F0;  /* pozadina primarnog CTA */
  --color-cta-text:      #06171F;  /* tekst na CTA — kontrast ~12:1 */

  /* Semantika toplo/hladno (storytelling problema) */
  --color-heat:          #FF6B4A;  /* vrelina/problem — samo u problem kontekstu */
  --color-heat-tint:     rgba(255, 107, 74, 0.12);
  --color-cold:          #7DE3F7;  /* svetlija hladna za readout „posle" */

  /* Statusi instrumenata (SVG) */
  --color-ok:            #34D399;  /* zona „sistem ispravan" na manometru */

  /* Linije i ivice */
  --color-border:        rgba(167, 183, 196, 0.14);  /* standardna ivica panela */
  --color-border-strong: rgba(167, 183, 196, 0.28);  /* ivica na hover/fokusu */
  --color-grid-line:     rgba(76, 201, 240, 0.06);   /* tehnička mreža u pozadini */

  /* Fokus (pristupačnost) */
  --color-focus-ring:    #7DE3F7;  /* 2px outline + 2px offset, vidljiv na svim podlogama */
}
```

Pravila upotrebe:

- Jedna akcentna boja na ekranu dominira — ledeno plava. `--color-heat` sme da
  postoji samo u sekcijama Problem i Hero (readout „pre"), nikad uz CTA.
- Gradijenti: dozvoljen je samo hladni gradijent `--color-accent-deep → --color-accent`
  na hero instrumentu i primarnom CTA (hover). Bez gradijenta preko cele pozadine.
- Glow budžet: `box-shadow`/`filter` glow samo na hero instrumentu i fokus stanjima;
  max blur 24px; nikada na tekstu.
- Kontrast: sav tekst mora AA (4.5:1; 3:1 za ≥24px). `--color-text-faint` je
  dozvoljen samo za mono oznake ≥14px koje imaju i tekstualnu alternativu.

## 4. Tipografija

Svi fontovi **lokalno hostovani** (woff2, `font-display: swap`), subset
`latin` + `latin-ext` (obavezno zbog š đ č ć ž). Bez Google Fonts CDN-a.

| Uloga | Font | Fajlovi (težine) | Fallback stack |
|---|---|---|---|
| Naslovi (display) | **Space Grotesk** | 500, 700 | `'Space Grotesk', 'Segoe UI', system-ui, sans-serif` |
| Tekst (body/UI) | **Inter** | 400, 600 | `'Inter', 'Segoe UI', system-ui, sans-serif` |
| Tehničke oznake/brojevi | **IBM Plex Mono** | 400, 500 | `'IBM Plex Mono', 'Consolas', monospace` |

Ukupno 6 woff2 fajlova, cilj ≤ 160 KB zbirno (subset). Preload samo za
Space Grotesk 700 i Inter 400 (koriste se above the fold).

Fluid tipografska skala (mobile-first, `clamp()`):

```css
:root {
  --font-display: 'Space Grotesk', 'Segoe UI', system-ui, sans-serif;
  --font-body:    'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono:    'IBM Plex Mono', 'Consolas', monospace;

  --text-xs:   0.8125rem;                          /* 13px — mono caption oznake */
  --text-sm:   0.875rem;                           /* 14px — sitni UI tekst, footer */
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);   /* 16–17px — body */
  --text-lg:   clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem);  /* 18–20px — lead pasusi */
  --text-xl:   clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem);     /* 20–24px — H3, kartice */
  --text-2xl:  clamp(1.5rem, 1.25rem + 1.2vw, 2rem);       /* 24–32px — manji H2 */
  --text-3xl:  clamp(1.875rem, 1.5rem + 1.9vw, 2.625rem);  /* 30–42px — H2 sekcija */
  --text-4xl:  clamp(2.375rem, 1.8rem + 2.9vw, 3.5rem);    /* 38–56px — H1 hero */
  --text-tel:  clamp(1.75rem, 1.3rem + 2.3vw, 2.75rem);    /* 28–44px — broj u završnom CTA */

  --leading-tight: 1.1;    /* H1/H2 */
  --leading-snug:  1.3;    /* H3, kartice */
  --leading-body:  1.6;    /* pasusi */

  --tracking-tight: -0.02em;  /* display naslovi */
  --tracking-mono:  0.08em;   /* mono oznake, uppercase */
}
```

Pravila:

- H1/H2: Space Grotesk 700, `--leading-tight`, `--tracking-tight`.
- Mono oznake (kicker, statusi, brojevi koraka): IBM Plex Mono 500, uppercase,
  `--tracking-mono`, `--text-xs`/`--text-sm`, boja `--color-text-faint` ili `--color-accent`.
- Body max širina: 65ch. Bez justified poravnanja.
- Brojevi u readout-ima: IBM Plex Mono sa `font-variant-numeric: tabular-nums`
  (bez skakanja layout-a pri count-up animaciji).

## 5. Spacing skala

Baza 4px; imenovani koraci (ne koristiti proizvoljne vrednosti):

```css
:root {
  --space-1:  0.25rem;   /*   4px — ikona ↔ tekst */
  --space-2:  0.5rem;    /*   8px — unutrašnji razmaci malih elemenata */
  --space-3:  0.75rem;   /*  12px — gap u badge/label grupama */
  --space-4:  1rem;      /*  16px — osnovni unutrašnji padding */
  --space-5:  1.5rem;    /*  24px — padding kartica, gap grid-a mobilno */
  --space-6:  2rem;      /*  32px — gap grid-a desktop, veći unutrašnji razmaci */
  --space-7:  3rem;      /*  48px — razmak podsekcija */
  --space-8:  4rem;      /*  64px — vertikalni ritam sekcija (mobilno) */
  --space-9:  6rem;      /*  96px — vertikalni ritam sekcija (desktop) */
  --space-10: 8rem;      /* 128px — hero prostor, završni CTA */

  --section-padding: clamp(var(--space-8), 6vw + 2rem, var(--space-9));
}
```

## 6. Container i grid

```css
:root {
  --container-max:    1200px;  /* standardne sekcije */
  --container-wide:   1360px;  /* hero i završni CTA */
  --container-narrow: 760px;   /* FAQ, tekstualni blokovi (≈65ch) */
  --container-gutter: clamp(1rem, 4vw, 2rem);  /* bočni padding */
}
```

- Grid: CSS Grid, 12 kolona na ≥1024px; na manjim širinama sekcije definišu
  sopstveni jednostavniji grid (1 kolona / 2×2). Bez grid framework-a.
- Asimetrija (potpis pravca): hero 6/6 → vizuelno 55/45 u korist teksta;
  sekcije sa slikom 7/5 ili 5/7 — nikad sve 50/50.
- Tehnička mreža: pozadinski `--color-grid-line` linijski raster u hero-u i
  završnom CTA (dekorativan, `aria-hidden`).

## 7. Radius, shadow, border

```css
:root {
  --radius-sm:   6px;    /* badge, mono oznake, inputi */
  --radius-md:   10px;   /* dugmad */
  --radius-lg:   16px;   /* kartice, paneli, slike */
  --radius-full: 999px;  /* pill elementi (trust strip stavke, sticky bar dugmad) */

  --border-panel:  1px solid var(--color-border);
  --border-strong: 1px solid var(--color-border-strong);

  /* Senke — tamna tema: senka je suptilna, „elevaciju" primarno nosi svetlija podloga */
  --shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md:   0 8px 24px rgba(0, 0, 0, 0.35);
  --shadow-glow: 0 0 24px rgba(76, 201, 240, 0.18);  /* SAMO hero instrument i fokus */
}
```

- Elevacija = svetlija pozadina (`--color-panel` → `--color-panel-raised`) +
  jača ivica; senka je sekundarna.
- `--shadow-glow` van hero-a i fokusa = zabranjen (glow budžet, sekcija 3).

## 8. Dugmad (button varijante)

Sva dugmad: min visina 48px (tap target ≥44px + margina), `--radius-md`,
Inter 600, fokus `2px solid var(--color-focus-ring)` + `outline-offset: 2px`.

| Varijanta | Upotreba | Izgled |
|---|---|---|
| **Primary (poziv)** | `tel:` CTA svuda | Pozadina `--color-cta`, tekst `--color-cta-text`; hover: `--color-accent-strong` + suptilan hladni gradijent; active: spuštanje 1px |
| **Secondary (poruka)** | WhatsApp/Viber | Transparentna pozadina, `--border-strong`, tekst `--color-text`; hover: `--color-panel-raised` pozadina + akcentna ivica |
| **Ghost/tekstualni** | „Pogledajte kako funkcioniše →" | Bez pozadine/ivice, boja `--color-accent`, underline na hover; strelica se pomera 4px na hover |
| **Sticky bar dugmad** | Mobilni sticky CTA | „Pozovi" = primary, „Poruka" = secondary; pune širine 50/50, `--radius-full`, visina 52px |
| **Broj u završnom CTA** | `#kontakt` | Nije dugme — ogroman `tel:` link, IBM Plex Mono, `--text-tel`, boja `--color-text`, akcentni underline |

Pravila: primarni CTA je uvek poziv; u jednom viewport-u najviše jedan primary;
hover animacije ≤200ms, bez skakanja layout-a; ništa ne animira primarni CTA
tako da ometa klik.

## 9. Kartice (card varijante)

Zajedničko: pozadina `--color-panel`, `--border-panel`, `--radius-lg`,
padding `--space-5` (mobilno) / `--space-6` (desktop).

| Varijanta | Upotreba | Specifičnost |
|---|---|---|
| **Service card** | 5 usluga | SVG ikona 32px u akcentnoj boji + mono redni broj („01"–„05") u `--color-text-faint`; hover: `--color-panel-raised` + `--border-strong`, lift `translateY(-4px)` (samo desktop pointer) |
| **Problem/rešenje par** | 3 para | Dvodelna kartica: problem red sa `--color-heat` tankom levom ivicom → rešenje red sa `--color-accent` ivicom (vizuelna priča toplo→hladno) |
| **Step card** | 4 koraka procesa | Veliki mono broj koraka, povezani akcentnom linijom (timeline) |
| **Review card** | Recenzije | Tekst + ime + Google ocena; bez avatara; citat oznaka u `--color-accent-tint` |
| **Trust pill** | Trust strip | `--radius-full`, ikona + kratak tekst, transparentnija pozadina `--color-accent-tint` bez ivice |

## 10. Ikone (SVG pravila)

- Stil: outline/stroke, `stroke-width: 1.75`, zaobljeni krajevi (`round` cap/join),
  mreža 24×24, bez fill-a osim malih akcentnih tačaka.
- Boja: uvek `currentColor` — nasleđuje iz konteksta (akcenat u karticama,
  muted u footer-u). Bez multi-color ikona.
- Inline SVG sprite (bez icon font-a, bez eksternih biblioteka).
- Dekorativne ikone: `aria-hidden="true"`; samostalne ikone-linkovi (telefon u
  mobilnom header-u): `aria-label` obavezan.
- Motivi: manometar, termometar, kapljica/UV, vetar/protok, štit/dogovor, pin
  lokacije, telefon, poruka — crtaju se namenski u istom stilu (ne mešati setove).

## 11. Slike i pozadine (image treatment)

- Formati: AVIF + WebP fallback, `<picture>` sa `srcset`; uvek `width`/`height`
  atributi (bez CLS); lazy load svega ispod fold-a.
- Kolor tretman fotografija: hladna gradacija (blago spuštena saturacija,
  temperatura ka plavom) + tamni gradijent overlay `rgba(11,15,20,0.0→0.55)` ka
  ivici uz tekst — fotografije moraju „sedeti" u grafitnom okruženju.
- Radius `--radius-lg`; opciona tanka mono oznaka u uglu slike (npr. „NA TERENU //
  BEOGRAD") kao laboratorijski potpis — nikada preko važnog dela fotografije.
- Pozadine sekcija: smena `--color-bg` / `--color-bg-raised` za ritam; tehnička
  mreža samo hero + završni CTA; suptilan grain (CSS, opacity ≤0.04) dozvoljen
  globalno, bez blur „blob" oblaka.
- Placeholder fotografije do dobijanja pravih: tamni panel sa mono opisom
  sadržaja budućeg snimka (iz `CLIENT_DATA.md`) — bez stock materijala.

## 12. Hero kompozicija po breakpoint-ima

Koncept: **„Dijagnostička tabla"** — levo poruka i akcija, desno živa SVG
instrument kompozicija koja priča toplo→hladno.

Sadržaj vizuala (slojevi, sve SVG + CSS/GSAP):

1. Panel „instrumenta": veliki manometar (kazaljka + zone, `--color-ok` zona),
   temperaturni readout koji odbrojava **41° → 18°** (boja `--color-heat` →
   `--color-cold`), mono status linije („PRITISAK: OK", „SISTEM: HLADI").
2. Strujnice vazduha: 2–3 SVG putanje koje poteku iz panela ka levoj koloni.
3. Tehnička mreža + sitne kote/oznake u pozadini (dekoracija, `aria-hidden`).

| Breakpoint | Kompozicija |
|---|---|
| **≥1440px (veliki desktop)** | `--container-wide`; tekst levo ~55%, instrument tabla desno ~45%, blago prelazi desnu ivicu kontejnera; puna instrument kompozicija + strujnice; visina hero-a ~90vh, min 640px, max 900px |
| **1024–1439px (laptop)** | Ista podela, instrument skaliran ~85%; strujnice skraćene; ~85vh |
| **768–1023px (tablet)** | Tekst i CTA gore (pune širine), instrument tabla ispod teksta, centrirana, ~70% širine; oba CTA vidljiva bez skrola |
| **≤767px (mobilni)** | H1 + supporting + oba CTA imaju apsolutni prioritet i staju u prvi viewport; instrument sveden na **kompaktnu readout traku** (manometar mini + temp odbrojavanje) između kickera i H1 ili odmah ispod CTA — bez strujnica, bez mreže; visina trake ≤96px |
| **320–374px (mali mobilni)** | Kao mobilni; readout traka **ostaje vidljiva** (kompaktniji padding/gap — Galaxy S23 = 360 CSS px); status linije od ≥360px; font skala na donjoj granici clamp opsega; CTA i dalje prioritet kroz smanjen hero ritam |

Pravila: tekst nikad preko instrumenta; instrument je `aria-hidden` (poruka
postoji u tekstu); H1 se renderuje odmah (bez čekanja na JS/animaciju);
hero bez fotografije — `{{PHOTO_HERO_TECHNICIAN}}` se koristi u sekcijama niže.

## 13. Odluka: Three.js/WebGL vs CSS 3D + SVG + GSAP

**Odluka: BEZ Three.js/WebGL. Koristi se SVG + GSAP (+ CSS 3D za suptilan tilt).**

Obrazloženje:

1. Hero koncept (instrumenti, readout, strujnice) je 2D/2.5D po prirodi — SVG ga
   izvodi pixel-perfect u ~10–30 KB; Three.js bi dodao ~150 KB+ JS-a bez vizuelnog dobitka.
2. Performance budžet (Lighthouse mobile 90+, ≤1 MB transfer) ostaje komotan.
3. Istraživanje: loše naštimovan 3D odmah strči; SVG HUD estetika postiže
   „tehnički wow" pouzdanije i na slabijim uređajima.
4. Dozvoljen CSS 3D: blagi perspective tilt instrument panela na pointer move
   (desktop, ≤4°, isključeno za `prefers-reduced-motion` i touch uređaje).

## 14. Responsive breakpoint-i

Mobile-first; min-width media upiti:

| Token | Vrednost | Cilja |
|---|---|---|
| (bazno) | 320px+ | najmanji mobilni |
| `--bp-sm` | 375px | standardni mobilni |
| `--bp-md` | 430px | veliki mobilni |
| `--bp-tablet` | 768px | tablet portret |
| `--bp-lg` | 1024px | tablet pejzaž / mali laptop; **desktop nav breakpoint** |
| `--bp-xl` | 1280px | desktop |
| `--bp-2xl` | 1440px | veliki desktop |
| (cap) | 1920px+ | sadržaj ograničen kontejnerima, pozadina se širi |

Mobilni meni postoji do <1024px; ≥1024px puna navigacija (meni se automatski
zatvara pri prelasku breakpointa).

## 15. Odobreni i zabranjeni obrasci

**Odobreno (potpis pravca „Hladna preciznost"):**

- Tamni grafit + jedan ledeno-plavi akcenat; `--color-heat` samo za problem
- SVG instrumenti (manometar, readout, statusi) i mono tehničke oznake
- Semantika toplo→hladno u hero-u i sekciji Problem
- Asimetrični layout-i (55/45, 7/5), tehnička mreža u hero/CTA
- Count-up brojevi tabular-nums; line-draw ruta u sekciji Područje
- Choreografisan hero intro; surgical scroll reveal-i (detalji u ANIMATION_SYSTEM.md)
- Hladno gradirane prave fotografije sa mono potpisom u uglu

**Zabranjeno (trajno + specifično za pravac):**

- Generičke ilustracije pahuljica; snežni/ledeni čestični efekti
- Preterani neon; glow van budžeta (sekcija 3/7); glow na tekstu
- Stock fotografije luksuznih automobila; bilo koji stock „majstor se smeši u kameru"
- Generičan auto-servis template (fotka auta + plavo dugme + tri kartice)
- Tekst preko važnog dela fotografije
- Gejmerski HUD kliše: radar sweep, crosshair/nišan, „glitch" tekst, terminal
  kursor koji kuca, matrix efekti
- Topla boja (`--color-heat`) u CTA, header-u, footer-u ili brend elementima
- Gradijent preko cele pozadine; više od jednog akcenta po viewport-u
- Karusel/slider za osnovni sadržaj; autoplay video
- Three.js/WebGL (odluka u sekciji 13 — promena zahteva novi zapis u DECISIONS.md)

## 16. Logo/wordmark smernica (gradi se u Fazi 5)

- Wordmark **MobilKlime**: Space Grotesk 700, `--color-text`, sa akcentnim
  detaljem (npr. tačka/strujnica u `--color-accent`).
- Bez ikonice-loga u Fazi 5 (wordmark je dovoljan); favicon = inicijali „MK" na
  `--color-bg` sa akcentom.
- Konačan logo dizajn se potvrđuje sa vlasnikom pre Faze 10.
