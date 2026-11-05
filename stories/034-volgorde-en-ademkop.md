# 034 — "Is dit iets voor mij?" lager op Wat en waarom, en een nieuwe ademkop

**Status:** Concept
**Bron:** Daan, 5 nov 2026
**Afhankelijk van:** 012 ("Is dit iets voor mij?"), 033 (ademblok)

## Story
Als **bezoeker die twijfelt**
wil ik **"Is dit iets voor mij?" lezen nadat ik weet hoe een dag eruitziet, vlak voor de ervaringen van anderen**
zodat **mijn twijfels beantwoord worden op het moment dat ik ze heb**.

## Context
"Is dit iets voor mij?" staat nu bovenaan Wat en waarom, onder "Voor wie". Daan wil het direct boven "Wat deelnemers zeggen". Daarnaast wordt de ademkop op Home persoonlijker en uitnodigender.

## Scope
**Wel:**
1. Op Wat en waarom komt "Is dit iets voor mij?" direct boven "Wat deelnemers zeggen", na "Zo kan een dag eruitzien". De volgorde wordt: Wat het is (met Voor wie) · Waarom · Zo kan een dag eruitzien · Is dit iets voor mij? · Wat deelnemers zeggen · Begeleiding.
2. De kop "Is dit iets voor mij?" krijgt het juiste kopniveau voor zijn nieuwe plek (een `h3` onder "Zo kan een dag eruitzien"; nu is het een `h4` onder "Voor wie"). Hij blijft er hetzelfde uitzien als nu.
3. De ademkop op Home wordt **"Adem kort met ons mee"** (`home.yaml`, veld `ademkop`).

**Niet:**
- De vragen en antwoorden zelf aanpassen
- Andere pagina's

## Acceptatiecriteria
1. **Gegeven** Wat en waarom, **dan** staat "Is dit iets voor mij?" direct boven "Wat deelnemers zeggen" en niet meer onder "Voor wie".
2. De koppen op de pagina slaan geen niveau over (Controle en een check van de koppenvolgorde), en "Is dit iets voor mij?" ziet er hetzelfde uit als nu.
3. **Gegeven** Home, **dan** staat er tijdens het ademen "Adem kort met ons mee".
4. Contrast ≥ 4,5:1 in alle stijlen; 0 CSP-meldingen; Controle groen.

## Technische aanpak (kort)
- `src/wat-en-waarom.md`: de regel `{% include "partials/past-bij-mij.njk" %}` verplaatsen
- `src/_includes/partials/past-bij-mij.njk` en `style.css`: `h4` wordt `h3`, met dezelfde opmaak
- `src/_data/pastbijmij.yaml`: commentaar "(onder Voor wie)" bijwerken
- `src/_data/home.yaml`: `ademkop`

## Open vragen voor Daan
Geen.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
