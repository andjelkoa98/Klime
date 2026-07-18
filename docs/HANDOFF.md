# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 10 (2026-07-18)

### Šta je završeno

- Kreiran `docs/FINAL_QA.md` — checklist (funkcionalnost, a11y, SEO, performance,
  placeholderi, breakpointi) + rezultati provere na `vite preview` `/Klime/`
- QA na build/preview: meni (open/lock/Escape/link/≥1024), sticky CTA, FAQ exclusive,
  cookie consent, anchori, overflow na 320/375/768/1024/1920, asseti 200
- Deploy na GitHub Pages **pripremljen dokumentacijom** (Opcija A: Actions, Opcija B:
  `gh-pages`) — **bez push-a** (nema `git remote`)
- Placeholderi **nisu** zamenjeni izmišljenim katalogom; nabrojan obavezni spisak
  za klijenta u FINAL_QA.md §10
- Copy, dizajn i motion nisu menjani

### Fajlovi kreirani

- `docs/FINAL_QA.md`

### Fajlovi izmenjeni

- `docs/DECISIONS.md` — odluke Faze 10 (#67–70)
- `docs/ROADMAP.md` — Faza 10 ✅
- `docs/HANDOFF.md` — ovaj dokument
- `package.json` — verzija `1.0.0` (publish-prep milestone)

### Ključne odluke Faze 10

- FINAL_QA.md kao trajni QA zapis (odluka #67)
- Bez forsiranog push-a dok remote/repo nisu spremni (odluka #68)
- Javna objava blokirana dok obavezni placeholderi nisu popunjeni (odluka #69)
- Preporučen GitHub Actions deploy iz `dist/` (odluka #70)

### Šta NIJE završeno (namerno — posle Faze 10 / vlasnik + klijent)

- Kreiranje GitHub repo-a **Klime** + `git remote add` + prvi push
- Zamena svih obaveznih `{{PLACEHOLDER}}` (FINAL_QA.md §10)
- Prave fotografije (AVIF/WebP) i eventualni OG od terenske fotke
- Uklanjanje `hidden` sa `#recenzije` tek sa stvarnim `{{GOOGLE_REVIEWS}}`
- Ručno Google Business Profile
- Povezivanje analytics alata posle cookie pristanka
- Potvrda konačnog logo/wordmark-a sa vlasnikom

### Poznati problemi / otvorena pitanja

- Nema git remote — deploy čeka vlasnika (koraci u FINAL_QA.md §9)
- Lighthouse color-contrast na dekorativnim `aria-hidden` mono oznakama (A11y 96)
- Posle izmene copy-ja: ponovo `npm run fonts:subset`
- Service-card ikone: scale/fade umesto pravog SVG stroke line-draw
- FAQ `name` exclusive: stariji browseri zadržavaju multi-open (prihvatljivo)
- Cookie banner zahteva JS za dismiss

### Sledeća faza

**Nema naredne roadmap faze.** Projekat je u stanju „spreman za klijentske podatke
+ GitHub Pages objavu“. Sledeći chat = publish checklist (placeholderi → build →
remote → deploy), ne nova razvojna faza.

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
```
