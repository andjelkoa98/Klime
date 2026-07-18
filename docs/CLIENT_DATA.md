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
| Telefon | `+381631234567` | ✅ |
| WhatsApp | isti kao telefon (`381631234567` za wa.me) | ✅ |
| Viber | isti kao telefon (`+381631234567`) | ✅ |
| Email | nema / ne prikazuje se na sajtu | ✅ |
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
| Radno vreme | Po dogovoru | ✅ |
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
| Tipovi gasa | R134a i R1234yf (radna potvrda - može se korigovati) |
| Hibridna/električna vozila | `{{HYBRID_EV_SUPPORT}}` |
| Izvlačenje starog gasa | `{{GAS_RECOVERY}}` |
| Potrebna struja na lokaciji | Ne - majstor donosi sopstveni dizel agregat |
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
| GitHub username (Pages) | `andjelkoa98` (`https://andjelkoa98.github.io/Klime/`) | ✅ |

## Fotografije

| Placeholder | Fajl / status | Opis |
|---|---|---|
| `{{PHOTO_HERO_TECHNICIAN}}` | ⬜ još nema (hero je SVG HUD) | Majstor pored servisnog vozila sa mašinom, dnevno svetlo |
| `{{PHOTO_EQUIPMENT}}` | ✅ `public/images/oprema-manometri.{avif,webp}` | Krupan kadar manometara + plava servisna mašina |
| `{{PHOTO_WORK_1}}` | ⬜ još nema (nema sekcije u HTML-u) | Majstor priključuje creva (otvorena hauba) |
| `{{PHOTO_WORK_2}}` | ✅ `public/images/dijagnostika-na-terenu.{avif,webp}` | Majstor meri pritisak na terenu, kombi u pozadini |
| `{{PHOTO_VEHICLE}}` | ✅ `public/images/servisno-vozilo-teren.{avif,webp}` | Otvoren servisni kombi sa opremom pored vozila |
| `{{PHOTO_DISINFECTION}}` | ⬜ još nema | Dezinfekcija sistema ventilacije |

Optimizacija: max širina 1024px, AVIF (~33–55 KB) + WebP fallback (~57–99 KB).

## Zakazivanje

| Podatak | Vrednost | Status |
|---|---|---|
| Način zakazivanja | Telefonski poziv (primarno), WhatsApp/Viber poruka (sekundarno) | ✅ |
| Šta korisnik javlja | lokacija + marka/model vozila + opis problema | 🟡 logična pretpostavka, potvrditi |
