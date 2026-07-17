# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 0 + Faza 1 (2026-07-17)

### Šta je završeno

- Kreiran novi projekat `C:\Users\PC\Projects\mobil-klime` sa git repozitorijumom
- Kompletan dokumentacioni sistem (AGENTS.md + 9 docs fajlova)
- 4 Cursor pravila u `.cursor/rules/`
- Faza 1: ciljna publika, problemi, prigovori i odgovori, vrednosna ponuda,
  conversion ciljevi, ključne poruke, ton komunikacije, zabranjene tvrdnje,
  radna pozicionirajuća rečenica — sve u `docs/CONTENT.md`
- Odluke vlasnika iz uvodnog razgovora upisane u `docs/DECISIONS.md` (15 odluka)

### Fajlovi kreirani

- `AGENTS.md`
- `docs/PROJECT_CONTEXT.md`, `docs/CLIENT_DATA.md`, `docs/CONTENT.md`,
  `docs/DESIGN_SYSTEM.md`, `docs/ANIMATION_SYSTEM.md`, `docs/SEO_PERFORMANCE.md`,
  `docs/ROADMAP.md`, `docs/DECISIONS.md`, `docs/HANDOFF.md`
- `.cursor/rules/project-core.mdc`, `design-rules.mdc`, `development-rules.mdc`,
  `quality-rules.mdc`

### Šta NIJE završeno (namerno — pripada narednim fazama)

- Nema index.html, nema koda, nema instaliranih paketa (Faza 4)
- Nema finalnog copy-ja (Faza 2)
- Nema dizajn sistema ni kreativnih pravaca (Faza 3)

### Poznati problemi / otvorena pitanja

- Svi `{{PLACEHOLDER}}` podaci u `CLIENT_DATA.md` čekaju stvarne vrednosti
  (telefon, WhatsApp/Viber brojevi, radno vreme, tipovi gasa, recenzije, fotografije)
- Tipovi gasa nepoznati — ne pominjati R134a/R1234yf kao činjenicu
- Ime GitHub repozitorijuma još nije određeno (bitno za Vite `base` u Fazi 4)

### Sledeća faza

**Faza 2 — Struktura stranice i sadržaj** (kompletan copy, bez HTML/CSS/JS)

### Prompt za sledeći chat

```
Pročitaj sledeće fajlove pre bilo kakve izmene:

- AGENTS.md
- docs/PROJECT_CONTEXT.md
- docs/CLIENT_DATA.md
- docs/CONTENT.md
- docs/DESIGN_SYSTEM.md
- docs/ANIMATION_SYSTEM.md
- docs/SEO_PERFORMANCE.md
- docs/ROADMAP.md
- docs/DECISIONS.md
- docs/HANDOFF.md

Trenutna faza je Faza 2: information architecture i sadržaj.

Ne piši HTML, CSS ili JavaScript.

Definiši finalni redosled sekcija one-page sajta. Za svaku sekciju napiši:
cilj, glavnu poruku, naslov, supporting tekst, CTA, elemente poverenja,
potrebne fotografije/vizuale, sadržaj za desktop i ponašanje na mobilnom.

Polazna struktura (proveri i unapredi): Header, Hero, Trust strip,
Problem i rešenje, Usluge, Kako funkcioniše, Prednosti mobilnog servisa,
Područje dolaska, Recenzije, FAQ, Završni CTA, Footer.

Copy mora biti jasan, direktan, lokalno relevantan, bez generičkih fraza,
bez izmišljenih podataka (koristi placeholdere iz CLIENT_DATA.md),
fokusiran na dolazak na adresu i jednostavno zakazivanje pozivom/porukom.

Pripremi i: title tag, meta description, H1, H2 strukturu, CTA tekstove,
FAQ pitanja i odgovore, Open Graph tekst, alt text smernice.

Sve upiši u docs/CONTENT.md. Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md.
Nemoj još razvijati sajt. Na kraju git commit:
git commit -am "phase 02: define page architecture and content"
```
