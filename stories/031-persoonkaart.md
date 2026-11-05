# 031 — Rustigere kaart voor begeleiders

**Status:** Goedgekeurd (Daan, 5 nov 2026)
**Bron:** Daan, 5 nov 2026: "De kaart met begeleiders is nu wat rommelig. Centreer de foto en de naam + rol op dezelfde manier ernaast. De tekst kan in volle breedte eronder."
**Afhankelijk van:** 005 (personenkaarten)

## Story
Als **bezoeker die wil weten wie de retraite begeleidt**
wil ik **een rustige kaart met foto, naam en rol netjes naast elkaar en de bio eronder**
zodat **ik in één oogopslag zie wie het is en de tekst prettig kan lezen**.

## Context
Nu staat de foto links en lopen naam, rol en bio er als één smalle kolom naast. De foto staat bovenaan uitgelijnd, en bij een langere bio ontstaat er onder de foto een lege strook. Dat oogt rommelig.

## Scope
**Wel:**
1. Bovenaan de kaart een rij met de foto (of de cirkel met de voorletter) en daarnaast de naam met de rol eronder. Foto en naam/rol staan verticaal gecentreerd ten opzichte van elkaar.
2. De bio staat daaronder over de volle breedte van de kaart.
3. Geldt voor alle plekken waar de kaart staat: Wat en waarom, Over de stichting en de pagina van een retraite; in alle vier de stijlen.
4. Op de telefoon dezelfde opbouw.

**Niet:**
- Andere maten, kleuren of lettertypes van de kaart
- Teksten aanpassen

## Acceptatiecriteria
1. **Gegeven** een kaart, **dan** staan foto en naam + rol naast elkaar en zijn hun middens verticaal gelijk (afwijking hooguit 2 px).
2. **Gegeven** een kaart, **dan** begint de bio onder de foto en loopt hij over de volle breedte van de kaart.
3. Werkt met foto en zonder foto (cirkel met voorletter), op 375 en 1280 px, zonder horizontaal scrollen.
4. Naam blijft een `<h3>`; contrast en toetsenbordbediening ongewijzigd in orde.

## Technische aanpak (kort)
- `partials/personen-lijst.njk`: foto en naam/rol in een eigen blok (`persoon-kaart__kop`), de bio erbuiten
- `style.css`: kaart als kolom; het kopblok als rij met `align-items: center`
- Controle: build, Controle-workflow, schermafbeeldingen voor en na in alle stijlen

## Open vragen voor Daan
- Geen.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
