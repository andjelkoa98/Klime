# HANDOFF.md — Prelaz između chatova

> Ovaj dokument uvek opisuje stanje NAKON poslednjeg završenog chata.
> Novi chat ga čita poslednji, posle svih ostalih dokumenata.

---

## Poslednji chat: Faza 2 (2026-07-17)

### Šta je završeno

- Finalni redosled sekcija one-page sajta (12 sekcija + sticky mobilni CTA bar)
  sa obrazloženjem izmena u odnosu na polaznu strukturu
- Kompletna specifikacija svake sekcije: cilj, glavna poruka, naslov, supporting
  tekst, CTA, elementi poverenja, potrebni vizuali, desktop sadržaj i mobilno ponašanje
- Finalni copy: hero (kicker, H1, supporting, mikro-poverenje), trust strip stavke,
  3 para problem→rešenje, 5 kartica usluga, 4 koraka procesa, poređenje klasičan/mobilni,
  područje dolaska, završni CTA, footer
- SEO paket: ciljna fraza, title tag, meta description, H1/H2/H3 struktura
- Kompletan spisak CTA tekstova sa pravilima
- 9 FAQ pitanja i odgovora (pokrivaju svih 6 prigovora iz Faze 1)
- Open Graph tekstovi + alt text smernice sa finalnim alt tekstovima za sve foto placeholdere
- Spisak otvorenih pitanja za klijenta pre objavljivanja (CONTENT.md sekcija 21)
- 9 novih odluka upisano u `docs/DECISIONS.md` (#16–24)

### Fajlovi izmenjeni

- `docs/CONTENT.md` — dodate sekcije 14–21 (arhitektura + finalni copy)
- `docs/DECISIONS.md` — odluke Faze 2 (#16–24)
- `docs/ROADMAP.md` — Faza 2 označena kao završena
- `docs/HANDOFF.md` — ovaj dokument

### Ključne odluke Faze 2

- Sticky mobilni CTA bar („Pozovi" + „Poruka") dodat u strukturu
- Recenzije su uslovna sekcija — ide uživo samo sa stvarnim Google recenzijama
- H1: „Servis auto-klime dolazi na vašu adresu"
- Stilizovana SVG mapa umesto Google Maps embeda (performance)
- Anchor ID-jevi na srpskom (`#usluge`, `#kako-funkcionise`, `#podrucje`…)

### Šta NIJE završeno (namerno — pripada narednim fazama)

- Nema HTML/CSS/JS koda ni Vite scaffold-a (Faza 4)
- Nema dizajn sistema, boja, tipografije ni hero koncepta (Faza 3)
- Nema logoa (Faza 3)
- SEO copy (title, meta, OG) se potvrđuje u Fazi 8

### Poznati problemi / otvorena pitanja

- Svi `{{PLACEHOLDER}}` podaci čekaju stvarne vrednosti — spisak pitanja za
  klijenta je u `docs/CONTENT.md`, sekcija 21
- FAQ odgovori 6 (struja na lokaciji) i 7 (tipovi gasa) zavise od potvrde klijenta
- Recenzije: tekstovi i Google link još nisu dostavljeni — sekcija je uslovna
- Ime GitHub repozitorijuma još nije određeno (bitno za Vite `base` u Fazi 4)

### Sledeća faza

**Faza 3 — Kreativni pravac i dizajn sistem** (3 pravca → izbor → razrada;
uključuje istraživanje najboljih sajtova iz auto/servisne/tehničke sfere;
bez HTML/CSS/JS produkcionog koda)

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

Trenutna faza je Faza 3: kreativni pravac i dizajn sistem.

Ne piši produkcioni HTML, CSS ili JavaScript.

Prvo istraži najbolje sajtove iz auto-servisne, tehničke i srodnih sfera
(premium landing stranice, hero efekti, motion) i izvuci obrasce koji rade.

Zatim predloži 3 različita kreativna pravca za MobilKlime, u skladu sa konceptom
„Mobilna klima laboratorija na točkovima" i zabranama iz DESIGN_SYSTEM.md.
Za svaki pravac: naziv, opis atmosfere, paleta boja, tipografija, hero koncept
(mora da „oduševi na prvu"), motion koncept, prednosti i rizici.

Preporuči najjači pravac i obrazloži. Nakon izbora razradi kompletan dizajn
sistem u docs/DESIGN_SYSTEM.md: CSS varijable za boje, tipografska skala i
fontovi (lokalno hostovani), spacing skala, container/grid, radius/shadow/border,
button i card varijante, icon pravila, image treatment, hero kompozicija za sve
breakpoint-e, odluka o Three.js/WebGL vs CSS 3D + SVG + GSAP, responsive
breakpoint-i, odobreni i zabranjeni obrasci.

Konceptualno definiši motion sistem u docs/ANIMATION_SYSTEM.md (tipovi animacija
po sekcijama, trajanja, easing, ScrollTrigger pravila, mobilno ponašanje,
prefers-reduced-motion) — bez produkcionog koda.

Ažuriraj docs/DECISIONS.md i docs/HANDOFF.md. Na kraju git commit:
git commit -am "phase 03: creative direction and design system"
```
