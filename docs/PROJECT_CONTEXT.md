# PROJECT_CONTEXT.md — Trajni kontekst projekta

Ovaj dokument sadrži stvari koje se skoro nikada ne menjaju.
Izmene ovde zahtevaju eksplicitnu saglasnost vlasnika projekta i zapis u `DECISIONS.md`.

## Tip biznisa

Mobilni servis auto-klime. Majstor dolazi na adresu korisnika (kuća, posao, parking)
i na licu mesta vrši pregled, dijagnostiku i dogovorenu intervenciju na klima sistemu vozila.

Radni naziv brenda: **MobilKlime** (odobren kao radna verzija, može se korigovati).

## Cilj sajta

Jedan (one-page) sajt čiji je zadatak da poseticoca što brže dovede do **telefonskog poziva**
ili **WhatsApp/Viber poruke** za zakazivanje dolaska. Sajt nema kontakt formu.

## Ciljna publika

- Vlasnici vozila u Beogradu i okolini (Lazarevac, Obrenovac, Aranđelovac, Lajkovac)
- Ljudi kojima klima slabo hladi ili ne hladi, tipično pred/tokom letnje sezone
- Zaposleni ljudi koji nemaju vremena da voze auto u klasičan servis i čekaju
- Porodice sa decom i kućnim ljubimcima kojima je ispravna klima prioritet
- Detaljnije u `docs/CONTENT.md` (Faza 1).

## Glavni conversion cilj

1. **Primarni:** klik na telefonski broj (poziv)
2. **Sekundarni:** WhatsApp / Viber poruka
3. **Tercijarni:** pamćenje brenda i područja dolaska (za kasniju odluku)

## Početni kreativni pravac

Radni koncept: **„Mobilna klima laboratorija na točkovima"**

Kombinuje: preciznost dijagnostičke opreme, osećaj hladnog vazduha, mobilnost usluge,
poverenje lokalnog majstora i čist savremen premium izgled.

Očekivanje vlasnika projekta: hero efekat treba da bude **moderan i da oduševi na prvu** —
nije prihvatljivo prosto/generično rešenje. Konačni pravac se bira u Fazi 3
nakon istraživanja najboljih sajtova iz ove i srodnih sfera.

Zabranjeno: generičke ilustracije pahuljica, preterani neon, stock luksuzni automobili,
animacija na svakom elementu, veliki blokirajući video, lažne statistike,
scroll-jacking koji remeti mobilne uređaje.

## Tehnološki stack

- Vite
- Semantički HTML5
- Modularni CSS (bez frameworka)
- Vanilla JavaScript (ES moduli)
- GSAP + ScrollTrigger
- CSS 3D transformacije, SVG animacije
- Three.js **samo** ako Faza 3 dokaže da je neophodan (prednost lakšim rešenjima)
- Lokalno hostovani fontovi, SVG ikone, AVIF/WebP slike

React/Next.js se ne koriste — nepotrebna složenost za statičan lokalni sajt.

## Hosting

- Početno: **GitHub Pages** sa besplatnim domenom (`*.github.io`)
  - Napomena za Fazu 4: Vite `base` opcija mora biti podešena na ime repozitorijuma
- Kasnije moguće: Netlify ili drugi hosting — odluka odložena

## Jezik

Samo srpski, **latinica**. Bez engleske verzije (van scope-a).

## Osnovna struktura stranice (radna verzija, potvrđuje se u Fazi 2)

1. Header (logo, Usluge, Kako funkcioniše, Područje dolaska, FAQ, kontakt CTA, mobilni meni)
2. Hero
3. Trust strip
4. Problem i rešenje
5. Usluge
6. Kako funkcioniše
7. Zašto mobilni servis
8. Područje dolaska
9. Recenzije (stvarne Google recenzije)
10. FAQ
11. Finalni CTA
12. Footer

## Šta se ne sme izmišljati

Telefon, email, adresa, cene, tipovi gasa, godine iskustva, broj klijenata,
sertifikati, recenzije, statistike, radno vreme, garancije.
Za nepoznate podatke koristiti placeholdere iz `docs/CLIENT_DATA.md`.

## Pravilo faznog razvoja

Projekat se razvija po fazama definisanim u `docs/ROADMAP.md`.
Jedan chat = jedna faza (manje faze mogu biti spojene uz zapis u DECISIONS.md).
Nijedan chat ne sme samoinicijativno preći u narednu fazu.
