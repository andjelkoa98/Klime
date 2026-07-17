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

## Šta se više ne sme samostalno menjati

- Tehnološki stack (Vite + vanilla JS + GSAP; bez React/Next)
- Struktura placeholder sistema u CLIENT_DATA.md
- Odluke iz tabela iznad
- Finalni copy iz `docs/CONTENT.md` (sekcije 14–21) — izmene zahtevaju novi zapis ovde
