# AGENTS.md — Uputstvo za svaki Cursor chat

Ovaj projekat je one-page sajt za **MobilKlime** — mobilni servis auto-klime koji
dolazi na adresu korisnika (Beograd, Lazarevac, Obrenovac, Aranđelovac, Lajkovac)
i tamo vrši pregled, dijagnostiku i potrebnu intervenciju.

## Obavezno čitanje pre bilo kakve izmene

Svaki novi chat mora prvo da pročita, ovim redosledom:

1. `AGENTS.md` (ovaj fajl)
2. `docs/PROJECT_CONTEXT.md` — stvari koje se skoro nikad ne menjaju
3. `docs/CLIENT_DATA.md` — stvarni podaci klijenta i placeholderi
4. `docs/CONTENT.md` — strategija, poruke i copy
5. `docs/DESIGN_SYSTEM.md` — vizuelni sistem
6. `docs/ANIMATION_SYSTEM.md` — motion sistem
7. `docs/SEO_PERFORMANCE.md` — SEO i performance ciljevi
8. `docs/ROADMAP.md` — faze i njihov status
9. `docs/DECISIONS.md` — donete odluke koje se ne menjaju samostalno
10. `docs/HANDOFF.md` — gde je stao prethodni chat i šta je sledeće

Dokumentacija u repozitorijumu ima prioritet nad pretpostavkama i memorijom chata.

## Radni proces

- Radi **isključivo zadatke trenutne faze** iz `docs/ROADMAP.md`.
- Ne započinji narednu fazu bez novog chata.
- Ne menjaj odobrene odluke iz `docs/DECISIONS.md` bez jasnog obrazloženja koje se dokumentuje.
- Ne redizajniraj ceo sajt kada je tražena fokusirana izmena.
- Nakon svake faze ažuriraj `docs/DECISIONS.md` i `docs/HANDOFF.md`.
- Na kraju faze uradi git commit sa porukom `phase XX: <opis>`.

## Zabrana izmišljanja

Nikada ne izmišljaj: telefon, email, adresu, cene, broj klijenata, godine iskustva,
sertifikate, recenzije, statistike, radno vreme, garancije.

Kada podatak ne postoji u `docs/CLIENT_DATA.md`, koristi jasno označen placeholder:
`{{PHONE_NUMBER}}`, `{{WORKING_HOURS}}`, `{{GAS_TYPES}}` itd.

## Format završnog izveštaja

Svaki chat se završava izveštajem:

```
PHASE COMPLETED: <naziv faze>
COMPLETED: <lista>
FILES CREATED: <lista>
FILES MODIFIED: <lista>
DECISIONS MADE: <odluka + razlog>
KNOWN ISSUES: <problemi ili "Nema poznatih problema">
NOT COMPLETED: <šta namerno pripada narednim fazama>
NEXT PHASE: <naziv>
NEXT CHAT PROMPT: <kompletan prompt za sledeći chat>
```
