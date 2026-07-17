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

## Šta se više ne sme samostalno menjati

- Tehnološki stack (Vite + vanilla JS + GSAP; bez React/Next)
- Struktura placeholder sistema u CLIENT_DATA.md
- Odluke iz tabela iznad
- Finalni copy iz `docs/CONTENT.md` (sekcije 14–21) — izmene zahtevaju novi zapis ovde
- Dizajn sistem iz `docs/DESIGN_SYSTEM.md` (tokeni, hero koncept, zabranjeni obrasci)
  i motion sistem iz `docs/ANIMATION_SYSTEM.md` — izmene zahtevaju novi zapis ovde
