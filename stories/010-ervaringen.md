# 010 — Ervaringen van deelnemers

**Status:** Gebouwd — ter review
**Bron:** `docs/pagina-opzet.md` (US-03); Miro-frame "Feedback" (akkoord voor gebruik op de site, Daan, 2 nov 2026)
**Afhankelijk van:** geen

## Story
Als **twijfelaar**
wil ik **lezen hoe anderen een retraite hebben ervaren**
zodat **ik me een beeld kan vormen en vertrouwen krijg**.

## Scope
**Wel:**
- `src/_data/ervaringen.yaml` met vier korte quotes uit het Miro-frame "Feedback", **zonder naam**, ondertekend als "Deelnemer, eerste retraite (2025)". Licht ingekort waar nodig (aangegeven met …), niet herschreven
- Een blok "Ervaringen" op **Home** (onder de hero) en op **Wat en waarom** (boven "Begeleiding")
- Een nieuwe quote toevoegen = een regel in `ervaringen.yaml`

**Niet:** namen of foto's van deelnemers; een carrousel of beweging

## Voorgestelde quotes
1. > Schilderen is iets waarvan ik dacht: "dat kan ik echt niet, nooit gedaan." En door het gewoon te doen stond ik versteld van het resultaat.
2. > Wat ik mooi vond, was vooral dat het totaal niet ongemakkelijk voelde om niets te zeggen. Dat voelde heel vertrouwd.
3. > Een nieuwe vorm van aandacht … oefening met zachtheid, tijd nemen, oefenen met aandacht.
4. > Het programma was vol genoeg en optioneel, dus je voelde je niet verplicht. Het eten was geweldig!

## Acceptatiecriteria
1. **Gegeven** `ervaringen.yaml`, **dan** staan de quotes op Home en op Wat en waarom, als `<blockquote>` met bronvermelding, zonder namen.
2. Een vijfde quote in het bestand verschijnt vanzelf.
3. Werkt op 375 px, contrast in orde in alle vier de thema's, geen beweging.

## Open vragen voor Daan
1. Zijn deze vier goed, of wil je andere uit het frame? Quote 3 is een ingekorte opsomming: mag dat?
2. Geen achternamen en ook geen voornamen: akkoord?

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (3 nov 2026)
Echte Eleventy-build in GitHub Actions met tijdelijke testbestanden (testworkflow daarna verwijderd), en diezelfde build in Chrome op 375 px in alle vier de thema's.

| # | Resultaat |
|---|---|
| 1 | ✅ Vier quotes op Home ("Wat deelnemers zeggen") en op Wat en waarom, als blockquote met "Deelnemer, eerste retraite (2025)", zonder namen |
| 2 | ✅ Een vijfde quote in het bestand verschijnt vanzelf |
| 3 | ✅ 375 px, contrast in orde, geen beweging |
