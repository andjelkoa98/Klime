# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Terenske fotografije + mapa na mobilnom (2026-07-18)

### Šta je završeno

1. **SVG mapa područja na mobilnom** (odluka #72) — lista → mapa → CTA
2. **Tri terenske fotografije** umesto placeholder panela (odluka #73):
   - `dijagnostika-na-terenu` → sekcija Problem (`PHOTO_WORK_2`)
   - `oprema-manometri` → sekcija Usluge (`PHOTO_EQUIPMENT`)
   - `servisno-vozilo-teren` → sekcija Prednosti (`PHOTO_VEHICLE`)
3. Optimizacija: AVIF + WebP, max 1024px, ~33–99 KB po fajlu
4. Semantički nazivi (bez ChatGPT generičkih imena) u `public/images/`

### Fajlovi kreirani

- `public/images/dijagnostika-na-terenu.{avif,webp}`
- `public/images/oprema-manometri.{avif,webp}`
- `public/images/servisno-vozilo-teren.{avif,webp}`
- `scripts/optimize-photos.mjs`

### Fajlovi izmenjeni

- `index.html` — `<picture>` umesto placeholder panela; area-actions layout
- `src/styles/components.css` — `.photo-frame`
- `src/styles/sections.css`, `src/styles/responsive.css` — mapa + area grid
- `docs/CLIENT_DATA.md`, `docs/CONTENT.md`, `docs/DECISIONS.md` (#72–73), ovaj HANDOFF

### Ključne odluke

- #72 mapa na mobilnom; #73 mapiranje i optimizacija fotki

### Deploy

- S23 readout fix je uživo na https://andjelkoa98.github.io/Klime/
- **Mapa + fotke još nisu push-ovane** — čeka commit + deploy

### Šta NIJE završeno

- `PHOTO_HERO_TECHNICIAN`, `PHOTO_WORK_1`, `PHOTO_DISINFECTION`
- Deploy (push master)
- Google recenzije, GBP, analytics
