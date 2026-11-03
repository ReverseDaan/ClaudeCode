# 017 — Aanmelden in drie stappen, met kennismakingsgesprek

**Status:** Goedgekeurd (Daan, 3 nov 2026)
**Bron:** Drive: brochure 2025, dia 7 (aanmeldproces: mail → kort telefoongesprek → formulier + aanbetaling); Gmail: antwoorden aan geïnteresseerden in juni 2025 (Daan plant na een aanmelding een kort intakegesprek)
**Afhankelijk van:** 015 (voorwaarden, voor de link)

## Story
Als **twijfelaar die overweegt zich aan te melden**
wil ik **zien welke stappen er volgen en dat er eerst een persoonlijk gesprekje is**
zodat **aanmelden voelt als een kennismaking en niet als een verplichting**.

## Context
De huidige uitleg op `/aanmelden/` noemt "aanvraag → bevestiging → betaallink", maar niet het korte kennismakingsgesprek dat jullie in 2025 met elke aanmelder voerden. In de mail blijkt dat dit gesprek juist twijfel wegnam (vragen over kamers, sfeer, "past dit bij mij").

## Scope
**Wel:**
- De lijst "Zo werkt aanmelden" wordt een genummerde stappenrij met drie stappen: **1. Je vraagt een plek aan** · **2. We maken kort kennis** (±15 minuten, telefonisch) · **3. Je plek is vast na de aanbetaling**
- Elke stap: korte kop, één zin uitleg, klein handgetekend cijfer (SVG/CSS, in de stijl van de penseelstreken)
- Onder stap 3 een link naar `/voorwaarden/`
- Dezelfde drie stappen kort op de eventpagina, bij de aanmeldknop (alleen koppen)
- Teksten in de front matter van `aanmelden.njk`

**Niet:**
- Het formulier zelf (018)
- Een afsprakenplanner (Calendly e.d.)

## Conceptteksten
1. **Je vraagt een plek aan.** Via het formulier of per mail. Het is nog geen boeking.
2. **We maken kort kennis.** Binnen een paar dagen bellen we je even. Zo kun je al je vragen stellen en voelen we samen of het klopt.
3. **Je plek is vast.** Je krijgt een betaallink. Zodra de aanbetaling binnen is, is je plek gereserveerd. Lees ook onze [voorwaarden](/voorwaarden/).

## Acceptatiecriteria
1. **Gegeven** `/aanmelden/`, **dan** staan de drie stappen in deze volgorde als geordende lijst (`<ol>`), met de teksten hierboven.
2. Op 375 px staan de stappen onder elkaar; vanaf tabletbreedte naast elkaar; geen horizontaal scrollen.
3. De cijfers zijn decoratief (`aria-hidden`) zodat schermlezers niet "1 1" voorlezen.
4. **Gegeven** een eventpagina van een komende retraite, **dan** staan bij de aanmeldknop de drie stapkoppen.
5. Stap 3 linkt naar `/voorwaarden/`.
6. Contrast ≥ 4,5:1 in alle thema's; geen JavaScript nodig.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Duur gesprek | "±15 minuten" | Concept |
| Gesprek | telefonisch | Definitief (Daan, 3 nov 2026) |

## Technische aanpak (kort)
- `src/aanmelden.njk` (front matter + markup), nieuwe partial `partials/aanmeldstappen.njk` voor hergebruik op `layouts/retraite.njk`
- CSS-sectie "Aanmeldstappen" in `style.css`

## Open vragen voor Daan
1. ~~Gesprek?~~ Ja, weer met iedereen, telefonisch (Daan, 3 nov 2026). Op de site staat "we".

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
