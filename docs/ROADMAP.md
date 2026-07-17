# ROADMAP.md — Faze projekta

Jedan chat = jedna faza. Manje faze mogu biti spojene samo uz zapis u `DECISIONS.md`.
Status: ⬜ nije počelo · 🔄 u toku · ✅ završeno

| Faza | Naziv | Status | Napomena |
|---|---|---|---|
| 0 | Projektna memorija (dokumentacija + Cursor pravila) | ✅ | Spojena sa Fazom 1 u istom chatu |
| 1 | Poslovna strategija i pozicioniranje | ✅ | Spojena sa Fazom 0 u istom chatu |
| 2 | Struktura stranice i sadržaj (kompletan copy) | ✅ | Finalni copy u CONTENT.md (sekcije 14–21) |
| 3 | Kreativni pravac i dizajn sistem (3 pravca → izbor → razrada) | ✅ | Izabran pravac „Hladna preciznost"; bez Three.js (SVG + GSAP) |
| 4 | Tehnička arhitektura i Vite scaffold | ✅ | Vite `base: '/Klime/'` (ime repo-a potvrdio vlasnik) |
| 5 | Statički vizuelni dizajn | ⬜ | |
| 6 | GSAP animacije i 3D efekti | ⬜ | Hero mora da "oduševi na prvu" |
| 7 | Responsive, pristupačnost i interakcije | ⬜ | |
| 8 | SEO i lokalna optimizacija | ⬜ | GBP preporuka, JSON-LD bez izmišljenih podataka |
| 9 | Performance optimizacija | ⬜ | Lighthouse mobile 90+, budžeti u SEO_PERFORMANCE.md |
| 10 | Finalni QA i priprema za objavljivanje | ⬜ | FINAL_QA.md, deploy na GitHub Pages |

## Šta blokira koje faze

- Faza 2 može da počne odmah (copy sa placeholderima za nepoznate podatke).
- Pre objavljivanja (Faza 10) vlasnik mora zameniti sve `{{PLACEHOLDER}}` vrednosti
  u `CLIENT_DATA.md` i kroz sadržaj sajta: telefon, WhatsApp/Viber, radno vreme,
  tipovi gasa, stvarne Google recenzije, stvarne fotografije.
