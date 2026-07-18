# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Post-Faza 10 bugfix — S23 readout (2026-07-18)

### Šta je završeno

- Dijagnostikovan bug: hero readout traka (manometar + 18°C + statusi) se
  **nije prikazivala** na Samsung Galaxy S23
- Uzrok: `@media (max-width: 374px) { .hero__readout-strip { display: none } }`
  — S23/S23+ imaju CSS širinu **360px**, pa je traka bila sakrivena; na telefonima
  ≥375px (npr. mnogi iPhone) bila je vidljiva
- Fix: traka ostaje vidljiva na svim mobilnim širinama; na ≤374px kompaktniji
  padding/gap; status linije od ≥360px
- Ažurirani DESIGN_SYSTEM.md §12, DECISIONS.md (#71), ovaj HANDOFF

### Fajlovi kreirani

- (nema)

### Fajlovi izmenjeni

- `src/styles/responsive.css` — uklonjen `display: none` na readout traci ≤374px;
  status breakpoint 375→360
- `docs/DESIGN_SYSTEM.md` — §12 red za 320–374px
- `docs/DECISIONS.md` — odluka #71; #57 označena kao zamenjena
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke

- Odluka #71: readout traka vidljiva i na 360px Android uređajima; #57 povučena

### Deploy (2026-07-18)

- Push `1442a86` → `origin/master` → GitHub Actions **success**
- Javni URL: https://andjelkoa98.github.io/Klime/
- Workflow: https://github.com/andjelkoa98/Klime/actions/runs/29638599183

### Šta NIJE završeno (namerno — publish checklist)

- Eventualna zamena preostalih `{{PLACEHOLDER}}` ako ih još ima (FINAL_QA.md §10)
- Prave fotografije, Google recenzije, GBP, analytics

### Poznati problemi / otvorena pitanja

- Isto kao posle Faze 10 (remote, placeholderi, Lighthouse contrast na mono oznakama)
- Na ekstremno uskim 320px ekranima status linije u traci su i dalje sakrivene
  (&lt;360px) — namerno radi prostora

### Sledeća faza

**Nema naredne roadmap faze.** Sledeći chat = publish checklist ili dodatni
bugfix po potrebi.

### Prompt za sledeći chat (publish)

```
Pročitaj AGENTS.md i docs/FINAL_QA.md (sekcije 9–10), docs/CLIENT_DATA.md,
docs/HANDOFF.md.

Zadaci (samo kad vlasnik/klijent dostavi podatke):
1. Zameni obavezne {{PLACEHOLDER}} stvarnim vrednostima iz CLIENT_DATA.md
   (telefon, WhatsApp, Viber, email, radno vreme, POWER_REQUIREMENT, GAS_TYPES,
   GITHUB_USERNAME u index.html + public/robots.txt + public/sitemap.xml).
2. Ako stignu Google recenzije — popuni #recenzije i skini hidden.
3. Poveži git remote na https://github.com/<user>/Klime.git (repo ime mora biti Klime).
4. npm run build; deploy preko GitHub Actions ili dokumentovane Opcije B.
5. Ne izmišljaj podatke koji i dalje nedostaju.
6. Posle deploy-a: na Galaxy S23 (360 CSS px) potvrdi da je hero readout traka
   vidljiva (odluka #71).
```
