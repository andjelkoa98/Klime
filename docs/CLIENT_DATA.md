# CLIENT_DATA.md — Stvarni podaci klijenta

Ovo je jedini izvor poslovnih činjenica. Ako podatak ovde ne postoji, **ne sme se izmišljati**
— koristi se placeholder u formatu `{{NAZIV}}`. Vlasnik projekta zamenjuje placeholdere
stvarnim podacima pre objavljivanja.

Status legende: ✅ potvrđeno · 🟡 radna verzija (može se menjati) · ⬜ nepoznato (placeholder)

## Identitet

| Podatak | Vrednost | Status |
|---|---|---|
| Naziv biznisa | MobilKlime | 🟡 radni naziv, odobren za razvoj |
| Kratak opis | Mobilni servis auto-klime — dolazak na adresu | ✅ |
| Ime majstora | `{{TECHNICIAN_NAME}}` | ⬜ |
| Logo | ne postoji — gradi se od nule u Fazi 3 | ✅ |
| Boje brenda | ne postoje — definišu se u Fazi 3 | ✅ |

## Kontakt

| Podatak | Vrednost | Status |
|---|---|---|
| Telefon | `{{PHONE_NUMBER}}` (format: +381 6X XXX XX XX) | ⬜ |
| WhatsApp | `{{WHATSAPP_NUMBER}}` — klijent koristi WhatsApp | 🟡 kanal potvrđen, broj nepoznat |
| Viber | `{{VIBER_NUMBER}}` — klijent koristi Viber | 🟡 kanal potvrđen, broj nepoznat |
| Email | `{{EMAIL}}` | ⬜ |
| Instagram | `{{INSTAGRAM_URL}}` | ⬜ |
| Facebook | `{{FACEBOOK_URL}}` | ⬜ |
| Kontakt forma | **NE POSTOJI i ne pravi se** — samo poziv i poruke | ✅ |

## Područje dolaska

| Podatak | Vrednost | Status |
|---|---|---|
| Gradovi/opštine | Beograd, Lazarevac, Obrenovac, Aranđelovac, Lajkovac | ✅ |
| Primarna lokacija | `{{PRIMARY_LOCATION}}` | ⬜ |
| Maks. udaljenost dolaska | `{{MAX_DISTANCE}}` | ⬜ |
| Naplata dolaska | `{{TRAVEL_FEE_POLICY}}` | ⬜ |
| Javna poslovna adresa | ne postoji / nepoznata — **ne koristiti u schema.org address polju** | ⬜ |

## Radno vreme

| Podatak | Vrednost | Status |
|---|---|---|
| Radno vreme | `{{WORKING_HOURS}}` | ⬜ |
| Rad vikendom | `{{WEEKEND_AVAILABILITY}}` | ⬜ |
| Hitni dolasci | `{{EMERGENCY_AVAILABILITY}}` | ⬜ |

## Usluge

Potvrđene usluge (✅ — smeju se navoditi na sajtu):

- Dijagnostika auto-klime
- Vakuumiranje sistema
- Dopuna gasa
- Dodavanje UV boje (provera curenja)
- Dezinfekcija i tretman neprijatnih mirisa

Nepotvrđeno (⬜ — ne navoditi kao činjenicu dok se ne potvrdi):

| Podatak | Vrednost |
|---|---|
| Tipovi gasa | `{{GAS_TYPES}}` (R134a? R1234yf? — klijent nije siguran) |
| Hibridna/električna vozila | `{{HYBRID_EV_SUPPORT}}` |
| Izvlačenje starog gasa | `{{GAS_RECOVERY}}` |
| Potrebna struja na lokaciji | `{{POWER_REQUIREMENT}}` |
| Usluge koje NE pruža | `{{EXCLUDED_SERVICES}}` |

## Cene

| Podatak | Vrednost | Status |
|---|---|---|
| Politika cena | Cena zavisi od više faktora — **ne objavljuju se fiksne cene na sajtu** | ✅ |
| Od čega zavisi cena | `{{PRICE_FACTORS}}` (npr. tip vozila, količina gasa, vrsta intervencije) | ⬜ |
| Šta je uključeno | `{{PRICE_INCLUDES}}` | ⬜ |

## Kredibilitet

| Podatak | Vrednost | Status |
|---|---|---|
| Godine iskustva | `{{YEARS_EXPERIENCE}}` | ⬜ |
| Broj odrađenih vozila | `{{VEHICLES_SERVICED}}` | ⬜ |
| Sertifikati | `{{CERTIFICATIONS}}` | ⬜ |
| Garancija/reklamacija | `{{WARRANTY_TERMS}}` | ⬜ |
| Google recenzije | POSTOJE (klijent ih ima) — tekstovi: `{{GOOGLE_REVIEWS}}` | 🟡 postojanje potvrđeno, sadržaj nepoznat |
| Link na Google recenzije | `{{GOOGLE_REVIEWS_URL}}` | ⬜ |
| Google Business Profile | nema potvrđenih podataka za unos — vidi preporuku u `docs/SEO_PERFORMANCE.md` § GBP | 🟡 |
| GitHub username (Pages) | `{{GITHUB_USERNAME}}` — za canonical, OG, robots, sitemap (`https://{{GITHUB_USERNAME}}.github.io/Klime/`) | ⬜ |

## Fotografije

Nijedna stvarna fotografija još ne postoji. Do dobijanja pravih fotografija koriste se
placeholder fajlovi sa opisom šta na slici treba da bude:

| Placeholder | Šta treba da bude na stvarnoj fotografiji |
|---|---|
| `{{PHOTO_HERO_TECHNICIAN}}` | Majstor u radnoj odeći pored servisnog vozila, sa mašinom za klimu, dnevno svetlo, autentično okruženje (ulica/dvorište), bez stock poziranja |
| `{{PHOTO_EQUIPMENT}}` | Krupan kadar profesionalne mašine za servis klime (manometri, creva, displej) |
| `{{PHOTO_WORK_1}}` | Majstor priključuje creva na klima sistem vozila (otvorena hauba) |
| `{{PHOTO_WORK_2}}` | Merenje pritiska / očitavanje dijagnostike tokom rada |
| `{{PHOTO_VEHICLE}}` | Servisno vozilo brenda na terenu, prepoznatljivo ali bez tablica |
| `{{PHOTO_DISINFECTION}}` | Postupak dezinfekcije ventilacionog sistema |

## Zakazivanje

| Podatak | Vrednost | Status |
|---|---|---|
| Način zakazivanja | Telefonski poziv (primarno), WhatsApp/Viber poruka (sekundarno) | ✅ |
| Šta korisnik javlja | lokacija + marka/model vozila + opis problema | 🟡 logična pretpostavka, potvrditi |
