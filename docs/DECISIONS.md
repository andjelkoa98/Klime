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

## Šta se više ne sme samostalno menjati

- Tehnološki stack (Vite + vanilla JS + GSAP; bez React/Next)
- Struktura placeholder sistema u CLIENT_DATA.md
- Odluke iz tabele iznad
