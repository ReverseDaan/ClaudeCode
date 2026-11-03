# 011 — Galerij "Uit onze eerste retraite"

**Status:** Concept
**Bron:** Drive, map "Stillness & Strokes 2025" (4 foto's: DSCF7179, DSCF7184, DSCF7202, 0N4A0350)
**Afhankelijk van:** geen

## Story
Als **bezoeker**
wil ik **zien hoe een retraite eruitziet en wat er ontstaat**
zodat **ik me er iets bij kan voorstellen**.

## Scope
**Wel:**
- Een sectie "Uit onze eerste retraite" op **Wat en waarom**, met de foto's in een rustig raster (op mobiel onder elkaar)
- Foto's verkleind en geoptimaliseerd (de originelen zijn 2–8 MB; op de site maximaal ca. 200 kB per foto, met `srcset` voor telefoon en desktop)
- Bij elke foto een beschrijvende `alt`-tekst
- Foto's in `src/images/galerij/`, lijst met bestandsnaam en alt-tekst in `src/_data/galerij.yaml`

**Niet:** een lightbox of slideshow met JavaScript; meer dan de foto's die jullie aanwijzen

## Acceptatiecriteria
1. **Gegeven** de goedgekeurde foto's, **dan** staan ze op Wat en waarom, elk kleiner dan ca. 200 kB, met alt-tekst.
2. Een nieuwe foto toevoegen = bestand in de map + regel in `galerij.yaml`.
3. Werkt op 375 px, laadt lui (`loading="lazy"`).

## Open vragen voor Daan
1. **Toestemming:** staan er deelnemers herkenbaar op deze foto's, en hebben zij toestemming gegeven voor publicatie op een openbare website? Zonder die toestemming gebruik ik alleen foto's van werk, materiaal of de omgeving.
2. Welke van de vier foto's wil je gebruiken? Of heb je er meer (bijv. van de fotograaf)?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
