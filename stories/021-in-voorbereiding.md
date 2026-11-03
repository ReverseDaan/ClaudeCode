# 021 — Retraites "in voorbereiding" tonen zonder datum

**Status:** Concept
**Bron:** Project "Waar we nu staan" (zomer/najaar 2027: OostRaven en Uelenspieghel in beeld); Miro "Weekender voorjaar" en "2026/27" (locaties met beschikbaarheid in mei, september–november); story 014 (interesselijst)
**Afhankelijk van:** 004 (retraites), 014 (interesselijst)

## Story
Als **geïnteresseerde voor wie april niet uitkomt**
wil ik **zien dat er later in 2027 meer retraites aankomen, ook al staat de datum nog niet vast**
zodat **ik me op de hoogte laat houden in plaats van af te haken**.

## Context
Op de site staat nu alleen de voorjaarsretraite. Jullie oriënteren je al op zomer/najaar 2027, maar die data zijn niet bevestigd. CLAUDE.md zegt: data en locaties niet als bevestigd tonen. Deze story maakt een aparte, duidelijk gemarkeerde vorm: "in voorbereiding", met alleen een seizoen en geen locatie of prijs.

## Scope
**Wel:**
- Nieuw optioneel veld `seizoen` (bijv. "najaar 2027") voor retraites zonder vaste datum; `start`/`eind`, `locatie` en `prijs` zijn dan niet verplicht
- Zo'n retraite heeft automatisch de status "In voorbereiding" en verschijnt onderaan Retraites en events en Kalender, onder het kopje "In voorbereiding"
- Kaart toont titel, seizoen, korte omschrijving en de knop "Houd me op de hoogte" (interesselijst) of "Laat het ons weten" (contact); geen aanmeldknop, geen .ics, geen eigen pagina
- Niet op Home als "eerstvolgende retraite"
- Uitleg in README en commentaar in het voorbeeldbestand

**Niet:**
- Een echte retraite toevoegen: deze story levert alleen de mogelijkheid plus één voorbeeldbestand met `voorbeeld: true` dat niet live gaat (staat als `draft`/uitgesloten)
- Locatienamen noemen (OostRaven, Uelenspieghel) zolang er niets is vastgelegd

## Acceptatiecriteria
1. **Gegeven** een retraite met `seizoen` en zonder `start`, **dan** bouwt de site zonder fout en staat de retraite onder "In voorbereiding" op Retraites en events en Kalender.
2. **Gegeven** zo'n retraite, **dan** heeft hij geen eigen pagina, geen .ics en geen aanmeldknop, en verschijnt hij niet als eerstvolgende retraite.
3. **Gegeven** een retraite zonder `start` én zonder `seizoen`, **dan** stopt de build met een Nederlandse melding.
4. Het label "In voorbereiding" is als tekst zichtbaar (niet alleen kleur).
5. Het voorbeeldbestand komt niet op de live site.
6. 375 px zonder horizontaal scrollen; contrast ≥ 4,5:1 in alle thema's.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Voorbeeld | "Zomerretraite, zomer 2027" | Voorbeeld, niet live |

## Technische aanpak (kort)
- `lib/retraites.js`: controle aanpassen (seizoen óf datums), nieuwe functie `inVoorbereiding`
- `eleventy.config.js`: collectie `retraitesInVoorbereiding`; `komendeRetraites` slaat ze over
- `src/retraites/retraites.json`: geen permalink als er geen `start` is
- `retraites.njk`, `kalender.njk`, `partials/retraite-kaart.njk`, README

## Open vragen voor Daan
1. Willen jullie nu al laten zien dat er een zomer- of najaarseditie komt, of pas na de go/no-go van april? *Af te stemmen met Vincent; raakt aan "eerst een gedeeld beeld".*
2. Met welk woord: "In voorbereiding", "Binnenkort" of "Gepland"?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
