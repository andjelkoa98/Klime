# DECISIONS.md — Evidencija odobrenih odluka

Odluke upisane ovde se ne menjaju samostalno. Izmena zahteva saglasnost vlasnika
projekta i novi zapis (stara odluka se precrtava, ne briše).

## Faza 0 + 1 (2026-07-17)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 1 | Faze 0 i 1 spojene u jedan chat | Faza 0 samo kreira dokumentaciju; vlasnik odobrio spajanje manjih faza | Odvojeni chatovi za 0 i 1 |
| 2 | Radni naziv brenda: **MobilKlime** | Predlog vlasnika; kratko, opisno, lako pamtljivo | — |
| 3 | Projekat u novom folderu `C:\Users\PC\Projects\mobil-klime` | Stari workspace (leadlens) sadrži nepovezan projekat | Rad unutar leadlens foldera |
| 4 | Bez kontakt forme — samo poziv + WhatsApp/Viber | Odluka vlasnika; klijent tako prima zakazivanja; statičan sajt bez backenda | Formspree/Netlify Forms |
| 5 | Cene se ne objavljuju na sajtu | Cena zavisi od više faktora; strategija „prvo pregled, pa dogovor" | Javni cenovnik |
| 6 | Samo srpski, latinica | Odluka vlasnika; engleska verzija van scope-a | Višejezičnost |
| 7 | Početni hosting: GitHub Pages (besplatan domen) | Odluka vlasnika; kasnije možda Netlify | Odmah kupovina domena |
| 8 | Cookie consent DA, politika privatnosti NE | Odluka vlasnika | Stranica politike privatnosti |
| 9 | Google Business Profile preskočen za sad | Vlasnik nije siguran; vraća se kao preporuka u Fazi 8 | — |
| 10 | Placeholderi `{{NAZIV}}` za sve nepoznate podatke | Vlasnik menja podatke kasnije; zabranjeno izmišljanje | Izmišljeni podaci |
| 11 | Potvrđene usluge: dijagnostika, vakuumiranje, dopuna, UV boja, dezinfekcija | Potvrdio vlasnik | Navođenje tipova gasa (nepoznato) |
| 12 | Područje: Beograd, Lazarevac, Obrenovac, Aranđelovac, Lajkovac | Potvrdio vlasnik | — |
| 13 | Hero mora biti moderan „wow" efekat, ne prost | Eksplicitan zahtev vlasnika; Faza 3 istražuje najbolje sajtove iz sfere | Minimalistički/prost hero |
| 14 | Primarni conversion: telefonski poziv; sekundarni: WhatsApp/Viber | Sledi iz načina na koji klijent posluje | — |
| 15 | Ton: direktan, lokalan, prijateljski-profesionalan, persiranje | Faza 1 strategija | Korporativni/marketinški ton |

## Faza 2 (2026-07-17)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 16 | Finalni redosled sekcija: Header → Hero → Trust strip → Problem i rešenje → Usluge → Kako funkcioniše → Prednosti → Područje dolaska → Recenzije → FAQ → Završni CTA → Footer | Konverzijski tok: ponuda → poverenje → problem → šta → kako → zašto → gde → dokaz → prigovori → akcija | Menjanje polaznog redosleda (bio je ispravan) |
| 17 | Dodat sticky mobilni CTA bar („Pozovi" + „Poruka") koji se pojavljuje kad hero izađe iz viewporta | Primarni conversion je poziv sa mobilnog — korisnik uvek na jedan tap od poziva | Floating dugme samo za poziv (poruka je bitan sekundarni kanal) |
| 18 | Recenzije su uslovna sekcija — objavljuje se samo sa stvarnim Google recenzijama, inače se sakriva | Zabrana izmišljanja; recenzije postoje ali tekstovi još nisu dostavljeni | Prazna sekcija ili fake recenzije |
| 19 | H1: „Servis auto-klime dolazi na vašu adresu" | Centralna poruka „dolazimo na adresu" + ključne reči; jedini H1 na stranici | Brend u H1 (brend ide u title tag) |
| 20 | Title: „Servis auto-klime na vašoj adresi — Beograd i okolina | MobilKlime" | Ključna fraza + lokacija + brend, ≤ 65 karaktera | Nabrajanje svih 5 mesta u title (predugačko; mesta su u meta description) |
| 21 | FAQ: 9 pitanja koja pokrivaju svih 6 prigovora iz Faze 1 + praktična pitanja (trajanje, zakazivanje) | Uklanjanje prigovora pre poziva; kandidat za FAQPage JSON-LD u Fazi 8 | Duži FAQ sa nepotvrđenim odgovorima |
| 22 | Područje dolaska: stilizovana SVG mapa umesto Google Maps embeda | Performance budžet (embed je težak); nema javne poslovne adrese za pin | Google Maps iframe |
| 23 | Anchor ID-jevi na srpskom: `#pocetak`, `#problem`, `#usluge`, `#kako-funkcionise`, `#prednosti`, `#podrucje`, `#recenzije`, `#pitanja`, `#kontakt` | Sajt je na srpskom; čitljivi URL fragmenti | Engleski ID-jevi |
| 24 | FAQ odgovori 6 i 7 sadrže placeholdere `{{POWER_REQUIREMENT}}` i `{{GAS_TYPES}}` | Podaci nepotvrđeni — klijent mora potvrditi pre objave | Izmišljanje tehničkih uslova i tipova gasa |

## Faza 3 (2026-07-17)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 25 | Izabran kreativni pravac A: **„Hladna preciznost"** (dijagnostički HUD — tamni grafit + ledeno-plavi akcenat + mono tehničke oznake) | Jedini od 3 pravca pokriva ceo koncept „mobilna klima laboratorija na točkovima"; tamni automotive izgled dokazano konvertuje (istraživanje Faze 3); najveći wow potencijal u okviru performance budžeta | Pravac B „Ledeni talas" (svetla tema — slab wow, klizi ka zabranjenim pahuljicama); Pravac C „Ruta 5" (mapa u hero-u — duplira sekciju Područje, generičan) |
| 26 | Semantika boja: hladno = MobilKlime/rešenje, toplo (`--color-heat`) = isključivo problem/vrelina; topla boja zabranjena u CTA, header-u, footer-u i brend elementima | Unikatan storytelling (readout 41°→18°) koji direktno prikazuje uslugu; sprečava razvodnjavanje jedne akcentne boje | Dvobojni akcenat sistem |
| 27 | Fontovi (lokalno hostovani woff2, latin + latin-ext subset): **Space Grotesk** (naslovi), **Inter** (tekst), **IBM Plex Mono** (tehničke oznake/brojevi) | Tehnički geometrijski karakter pravca; puna podrška š đ č ć ž; 6 fajlova ≤160 KB u budžetu | Google Fonts CDN (blokirajući, privatnost); variable fontovi (veći fajlovi za 2 potrebne težine) |
| 28 | Hero koncept: **„Dijagnostička tabla"** — asimetrija, levo H1+CTA, desno animirana SVG instrument kompozicija (manometar + temperaturni readout 41°→18° + strujnice); na mobilnom svedena na kompaktnu readout traku, H1 i CTA imaju prioritet above the fold | Wow kroz zanatsku preciznost umesto teškog 3D; mobilna verzija čuva konverziju (poziv na jedan tap u prvih 5s) | Hero fotografija (prave fotke još ne postoje); full-screen WebGL scena |
| 29 | **Bez Three.js/WebGL** — SVG + GSAP + suptilni CSS 3D tilt (≤4°, samo desktop) | Hero koncept je 2D/2.5D; SVG ga izvodi u ~10–30 KB vs ~150 KB+ za Three.js; performance budžet (Lighthouse mobile 90+) ostaje komotan | Three.js/React Three Fiber |
| 30 | ScrollTrigger pravila: **pin zabranjen na celom sajtu**; scrub samo za veznu liniju u „Kako funkcioniše" (desktop) i blagi hero parallax; reveal-i se izvode jednom (`top 80%`), bez reverse | Konverzioni one-page sajt ne sme zadržavati posetioca na putu do broja; pin pravi jank na mobilnim browserima | Pinned storytelling sekcije (premium obrazac, ali pogrešan za ovaj cilj) |
| 31 | Bez smooth-scroll biblioteka (Lenis i sl.) — native scroll ostaje netaknut | Zabrana scroll-jackinga; pristupačnost; jedan dependency manje | Lenis (deo premium stack-a iz istraživanja) |
| 32 | Breakpoint sistem (mobile-first, min-width): 320 bazno / 375 / 430 / 768 / 1024 (desktop nav) / 1280 / 1440 / cap 1920+ | Pokriva tražene širine iz ulaznih smernica; 1024 kao nav breakpoint odgovara tablet pejzažu | — |
| 33 | Zabranjen gejmerski HUD kliše: radar sweep, crosshair, glitch tekst, terminal kucanje, matrix efekti; glow budžet: samo hero instrument + fokus stanja, max blur 24px, nikad na tekstu | HUD estetika bez ovih granica sklizne u kič i ruši premium/trust utisak | — |
| 34 | Motion standardi: easing familija `power*` (bez bounce/elastic); trajanja 150ms–1.4s po tipovima; reduced-motion = identičan sadržaj bez kretanja; idle petlje se pauzuju van viewporta i na skrivenom tabu | Precizan, smiren karakter pokreta u skladu sa pravcem; pristupačnost i baterija | Playful/bouncy motion |

## Faza 4 (2026-07-17)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 35 | Ime GitHub repozitorijuma: **Klime** → Vite `base: '/Klime/'` | Vlasnik potvrdio ime repozitorijuma na direktno pitanje; obavezno za GitHub Pages putanje | Pretpostavljanje imena bez potvrde |
| 36 | FAQ accordion: nativni `<details>/<summary>` (tehnička odluka najavljena u CONTENT.md 15.10) | Radi bez JavaScript-a (progressive enhancement); pristupačan po default-u; animacija otvaranja se dodaje u Fazi 6 kao poboljšanje | Custom JS accordion (nepotrebna JS zavisnost za osnovnu funkciju) |
| 37 | CSS se učitava direktno iz `index.html` (`<link rel="stylesheet">`), ne kroz JS import | Sadržaj ostaje stilizovan i čitljiv bez JavaScript-a; Vite svejedno bundluje i hešira CSS pri build-u | CSS import u `main.js` (Vite default — bez JS-a stranica ostaje nestilizovana) |
| 38 | Font pipeline: gotovi subset woff2 fajlovi (latin + latin-ext kombinovano) preko google-webfonts-helper API-ja; 6 fajlova, ~186 KB zbirno | Tačno traženi subset bez lokalnog Python/fonttools pipeline-a; jedan fajl po težini (ne dva po subsetu) | Google Fonts CDN (odluka #27); ručno subsetovanje fonttools-om (dodatni alat bez dobitka — gwfh daje identican Google subset) |
| 39 | GSAP 3.15 instaliran kao dependency, ali se **ne importuje** ni u jednom modulu do Faze 6 | Zadatak Faze 4 je samo dependency; bundle ostaje minimalan (0.7 KB JS) dok animacije ne počnu | Import + registracija ScrollTrigger-a odmah (mrtav kod u bundle-u) |
| 40 | JS moduli (`navigation`, `animations`, `hero-visual`, `utils`) kreirani kao dokumentovani stubovi sa no-op init funkcijama | Struktura po odgovornosti postavljena sad; markup od kog zavise nastaje u Fazi 5 | Prazni fajlovi bez dokumentovanih odgovornosti |
| 41 | Sekcija Recenzije u skeletu nosi `hidden` atribut | Sprovodi odluku #18 na nivou koda — sekcija ne sme biti vidljiva bez stvarnih recenzija | Vidljiva prazna sekcija |

## Faza 5 (2026-07-17)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 42 | Wordmark: Space Grotesk 700 + akcentna SVG „strujnica" (tri horizontalne linije u `--color-accent`); bez zasebne ikonice-loga | DESIGN_SYSTEM.md sekcija 16; strujnica nosi motiv hladnog vazduha unutar pravca A bez pahuljica | Puna ikonica-logo u ovoj fazi (odloženo do potvrde vlasnika pre Faze 10) |
| 43 | Header desktop CTA koristi `button--tint` (ne primary); hero i sticky zadržavaju primary | DESIGN_SYSTEM.md §8: u jednom viewport-u najviše jedan primary; header CTA mora ostati vidljiv ali ne konkurisati hero dugmetu | Primary i u header-u i u hero-u istovremeno |
| 44 | SVG ikone: stroke atributi (`currentColor`, 1.75, round) na geometriji unutar `<symbol>`, ne na `<use>` | `<use>` klonovi pouzdano nasleđuju presentation atribute; CSS na `use` nije konzistentan po browserima | Icon font ili eksterna biblioteka |
| 45 | Hero instrument: statično idle stanje (18°C, kazaljka u OK zoni, statusi); bez GSAP | Faza 5 je statički dizajn; animacije su Faza 6 (ANIMATION_SYSTEM.md) | Delimični CSS keyframes za kazaljku (duplira posao Faze 6) |
| 46 | Stilizovana SVG mapa područja sakrivena ispod 768px; lista mesta uvek vidljiva | CONTENT.md 15.8: na mobilnom lista ima prioritet; mapa je dekorativna (`aria-hidden`) | Google Maps embed; mapa obavezna na mobilnom |
| 47 | Sticky mobilni CTA bar: vidljiv bez JS-a; sa JS-om `IntersectionObserver` ga skriva dok je hero CTA u viewportu | Progressive enhancement + CONTENT.md 15.13; slide animacija pojavljivanja ostaje za Fazu 6 | Bar uvek vidljiv (dvostruki CTA u hero viewportu) |
| 48 | Placeholder fotografije = tamni paneli sa mono oznakom `Foto // {{PHOTO_*}}` i opisom iz CLIENT_DATA.md | DESIGN_SYSTEM.md §11; zabranjen stock | Generičke stock fotografije |

## Faza 6 (2026-07-18)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 49 | GSAP + ScrollTrigger registruju se jednom u `animations.js` (entry modul); `hero-visual.js` koristi isti GSAP import bez ponovne registracije | ANIMATION_SYSTEM.md §5 — jedna registracija, čist lifecycle sa `gsap.matchMedia()` | Registracija u više modula; dinamički import GSAP-a (odloženo do Faze 9 ako budžet traži) |
| 50 | Hero H1 podeljen u dva `.hero__title-line` span-a (isti copy); initial hide/show postavlja JS, ne CSS | ANIMATION_SYSTEM.md §3 — ulazak po linijama; no-JS posetioci vide kompletan H1 odmah | SplitText plugin (Club GSAP); CSS `opacity: 0` na H1 |
| 51 | Idle petlje (mikro-drhtaj kazaljke, strujnice) i CSS 3D tilt (CSS varijable `--tilt-x/y`, ≤4°) samo ≥768px + fine pointer; pauza preko IntersectionObserver + `visibilitychange` | ANIMATION_SYSTEM.md §3, §6, §8; baterija i touch UX | Tilt preko GSAP transform (sukob sa CSS scale); idle na mobilnom |
| 52 | Scrub samo na desktopu (≥1024): `.steps__progress-fill` (`scaleX`) + blagi hero parallax (`--parallax-y` CSS var); pin zabranjen | Odluka #30; CSS var parallax čuva `--hero-scale` na laptopu | Scrub na touch; pin storytelling; Lenis |
| 53 | Sticky CTA slide = CSS `transform` transition (350ms) na `.is-hidden`; header `has-scroll-enhance` / `is-scrolled` posle 80px | ANIMATION_SYSTEM.md §4; progressive enhancement (bez JS bara ostaje vidljiv, header solidan) | GSAP timeline za sticky bar; uvek-transparentan header |

## Faza 7 (2026-07-18)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 54 | Mobilni meni: fokus trap (Tab ciklus kroz nav + tel ikonu + toggle); `inert` na `main` / footer / sticky; wordmark `tabindex="-1"` dok je otvoren; Escape i zatvaranje linkom vraćaju fokus na toggle | CONTENT.md 15.1 + quality rules; sprečava fokus da „pobegne" u pozadinu dok je panel otvoren | Fokus trap biblioteka; dialog `role="dialog"` (meni nije modal dijalog) |
| 55 | FAQ: nativni exclusive accordion preko `name="faq"` na svim `<details>`; veći tap target (min 52px) + hover/fokus stilovi — bez izmene copy-ja | Progressive enhancement (radi bez JS-a u modernim browserima); odluka #36 ostaje; bolji UX jednog otvorenog odgovora | Custom JS accordion; accordion bez exclusive ponašanja |
| 56 | Sticky CTA je `<nav aria-label="Brzi kontakt">`; `body` padding-bottom 80px + `scroll-padding` na `html` (top 72 / bottom 80 mobilno) | Landmark za brzi kontakt; sticky bar ne prekriva kritičan tekst ni anchor skokove | Floating dugme van navigacionog landmarka |
| 57 | ~~Na ≤374px: readout traka sakrivena + kompaktniji hero ritam~~ — **zamenjeno odlukom #71** | (stari) DESIGN_SYSTEM.md §12 + CONTENT.md 15.2 | Sakrivanje supporting teksta |

## Faza 8 (2026-07-18)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 58 | Canonical / OG / Twitter / robots / sitemap koriste placeholder `https://{{GITHUB_USERNAME}}.github.io/Klime/` | Repo još nije povezan; base `/Klime/` je potvrđen (odluka #35); zabranjeno izmišljanje username-a | Hardkodovan lažni github.io nalog |
| 59 | JSON-LD `@graph`: `AutoRepair` + `FAQPage`; `areaServed` = 5 gradova; `makesOffer` = 5 potvrđenih usluga; telefon i FAQ placeholderi kao na stranici | Structured data mora da odgovara vidljivom sadržaju (SEO_PERFORMANCE.md); AutoRepair je LocalBusiness podtip | `address` / `aggregateRating` / `priceRange` / `openingHoursSpecification` (podaci nepostoje) |
| 60 | Favicon = SVG „MK" na `--color-bg` sa akcentom; OG image = 1200×630 PNG (wordmark + „Dolazak na adresu") | DESIGN_SYSTEM.md §16 + CONTENT.md §19 | Stock fotografija; tekstualno nabijanje ključnih reči na OG slici |
| 61 | Cookie consent: fiksni banner + `localStorage` (`mobilklime-cookie-consent`); bez linka na politiku privatnosti; bez učitavanja analytics skripte | Odluka #8; `{{ANALYTICS_TOOL}}` još nije izabran — banner samo beleži pristanak za buduće povezivanje | Stranica politike privatnosti; cookie biblioteka treće strane |
| 62 | GBP: samo dokumentovana preporuka u `SEO_PERFORMANCE.md` (bez koda, bez izmišljenih podataka) | Odluka #9 — vlasnik nije siguran; profil se radi ručno kad stignu stvarni podaci | Schema.org polja ili UI blokovi za nepostojeći GBP |

## Faza 9 (2026-07-18)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 63 | Fontovi: glyph subset preko `subset-font` (`npm run fonts:subset`) na osnovu `index.html` + srpska latinica; zadržanih 6 woff2 fajlova | DESIGN_SYSTEM.md ≤160 KB; pre subset-a ~186 KB → posle ~63 KB; latin+latin-ext gwfh bio preširok za sajt | Uklanjanje težina (Space Grotesk 500 / IBM Plex Mono 400); Google Fonts CDN |
| 64 | GSAP + motion moduli (`animations.js`, `hero-visual.js`) učitavaju se dinamičkim `import()` u posebnim chunk-ovima; entry (`main.js`) ostaje nav + cookie | Odluka #49; kritični JS ~4 KB; hero intro i dalje startuje odmah nakon async učitavanja, bez idle odlaganja | Zadržavanje GSAP-a u glavnom bundle-u; `requestIdleCallback` odlaganje intro-a (škodi „wow na prvu") |
| 65 | Vite: `cssCodeSplit: false`, `modulePreload.polyfill: false`, `manualChunks` za `gsap` + `motion` | Manji entry, jedan CSS fajl, bez polyfill bajtova na es2020 targetu | Dodatne biblioteke za compress/image pipeline (nema pravih fotografija još) |
| 66 | Bez `content-visibility` na sekcijama sa ScrollTrigger reveal-ima | Rizik od pogrešnih trigger/visina merenja; budžet već ispunjen font+JS optimizacijom | `content-visibility: auto` na svim below-fold sekcijama |

## Faza 10 (2026-07-18)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 67 | Finalni QA živi u `docs/FINAL_QA.md` (checklist + rezultati build/preview + deploy koraci + spisak placeholdera za klijenta) | Trajni zapis prolaza/otvorenih stavki pre objave; AGENTS/ROADMAP zahtev Faze 10 | Ad-hoc QA samo u chatu bez fajla |
| 68 | Git push / GitHub Pages deploy **nije** izvršen u ovoj fazi — dokumentovani su tačni koraci (Actions ili `gh-pages`); remote još ne postoji | Nema `git remote`; zabranjeno forsirati push i izmišljati `{{GITHUB_USERNAME}}` | Lažni remote / hardkodovan github.io nalog |
| 69 | Javna objava blokirana dok klijent ne zameni obavezne placeholdere (telefon, WhatsApp, Viber, email, radno vreme, gas, struja, GitHub username); recenzije ostaju `hidden` bez stvarnih tekstova | Odluka #10/#18; quality rules — bez izmišljenih podataka i bez fake recenzija | Objava sa vidljivim `{{PLACEHOLDER}}` vrednostima |
| 70 | Preporučen deploy put: GitHub Actions → `actions/upload-pages-artifact` + `deploy-pages` iz `dist/` posle `npm run build` | Standard za Vite + Pages; ne zahteva ručno commitovanje `dist/` | Commit `dist/` na `master` |

## Post-Faza 10 — bugfix (2026-07-18)

| # | Odluka | Razlog | Odbijeno |
|---|---|---|---|
| 71 | Readout traka (`.hero__readout-strip`) **ostaje vidljiva** na 320–374px; umesto `display: none` koristi se kompaktniji padding/gap/tipografija. Status linije u traci od **≥360px** (ne ≥375px). Odluka #57 (sakrivanje) je povučena. | Galaxy S23/S23+ ima CSS viewport **360px** — stara granica 374px je sakrivala brand HUD na uobičajenom Android flagship-u, dok se na ≥375px (npr. iPhone) prikazivao. DESIGN_SYSTEM.md §12 dozvoljava izostavljanje samo ako CTA trpi; kompaktan ritam čuva CTA bez gubitka „wow" signala. | Zadržavanje `display: none` ≤374px; puna desktop instrument tabla na mobilnom |

## Šta se više ne sme samostalno menjati

- Tehnološki stack (Vite + vanilla JS + GSAP; bez React/Next)
- Struktura placeholder sistema u CLIENT_DATA.md
- Odluke iz tabela iznad
- Finalni copy iz `docs/CONTENT.md` (sekcije 14–21) — izmene zahtevaju novi zapis ovde
- Dizajn sistem iz `docs/DESIGN_SYSTEM.md` (tokeni, hero koncept, zabranjeni obrasci)
  i motion sistem iz `docs/ANIMATION_SYSTEM.md` — izmene zahtevaju novi zapis ovde
