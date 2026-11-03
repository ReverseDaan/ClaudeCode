# 015 — Voorwaarden: aanmelden, betalen en annuleren

**Status:** Gebouwd — ter review
**Bron:** `docs/pagina-opzet.md` (US-17); `docs/siteplan.md` (juridische eisen); Drive: brochure 2025, dia 7 (aanmeldproces en annuleringsvoorwaarden)
**Afhankelijk van:** geen (017 en 018 linken hiernaartoe)

## Story
Als **iemand die een plek aanvraagt**
wil ik **vooraf lezen wat er gebeurt als ik aanbetaal, betaal of moet afzeggen**
zodat **ik weet waar ik aan begin en niet voor verrassingen kom te staan**.

## Context
`/voorwaarden/` staat nu op "in de maak". Het aanmeldformulier (018) vraagt straks om akkoord met de voorwaarden, dus deze pagina moet er eerst zijn. De brochure van 2025 had al heldere annuleringsvoorwaarden; die nemen we als basis.

## Scope
**Wel:**
- Pagina `/voorwaarden/` met vier korte secties: Aanmelden is een aanvraag · Betalen · Annuleren door jou · Annuleren of wijzigen door ons
- Annuleringstermijnen uit de brochure 2025, in een kleine tabel
- Bovenaan een zichtbare melding "Conceptvoorwaarden" zolang `concept: true` in de front matter staat
- Teksten in het Markdown-bestand, niet in een template
- Datum "Laatst bijgewerkt" onderaan

**Niet:**
- Juridische toetsing (dat doet een jurist; zie open vragen)
- Bedragen per retraite anders dan de aanbetaling
- Privacybeleid (story 016)

## Conceptteksten
**Aanmelden is een aanvraag**
> Met het formulier vraag je een plek aan. Dat is nog geen boeking. Na je aanvraag maken we kort kennis (meestal telefonisch). Daarna bevestigen we je plek en sturen we een betaallink.

**Betalen**
> Je plek is gereserveerd zodra de aanbetaling van € 100 binnen is. Het restbedrag betaal je uiterlijk [termijn] voor de start. Je betaalt via een betaallink; op de site zelf reken je niets af.

**Annuleren door jou**

| Wanneer je annuleert | Wat je terugkrijgt |
|---|---|
| Tot 8 weken voor de start | 80% van het totaalbedrag (de aanbetaling houden we in) |
| 8 tot 4 weken voor de start | 50% van het totaalbedrag |
| Binnen 4 weken voor de start | Alleen als je plek wordt ingevuld via de wachtlijst of door iemand die jij voordraagt |

> We bekijken elke situatie met zorg en redelijkheid.

**Annuleren of wijzigen door ons**
> Gaat een retraite niet door (bijvoorbeeld door te weinig aanmeldingen of overmacht), dan krijg je alles terug wat je hebt betaald. We laten het uiterlijk [termijn] voor de start weten.

## Acceptatiecriteria
1. **Gegeven** `/voorwaarden/`, **dan** staan de vier secties in deze volgorde met de conceptteksten hierboven; de tekst "in de maak" is weg.
2. **Gegeven** `concept: true`, **dan** staat bovenaan een duidelijk zichtbare melding dat het conceptvoorwaarden zijn; met `concept: false` verdwijnt die.
3. De annuleringstermijnen staan in een echte tabel met kopregel en zijn op 375 px leesbaar zonder horizontaal scrollen.
4. Plekken met `[termijn]` zijn op de site zichtbaar gemarkeerd als "volgt" en niet als een verzonnen getal.
5. Onderaan staat "Laatst bijgewerkt" met een datum uit de front matter.
6. Contrast ≥ 4,5:1 in alle vier de thema's; koppen in logische volgorde.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Annuleringstermijnen | Brochure 2025 | Definitief: overgenomen uit editie 1 (Daan, 3 nov 2026) |
| Aanbetaling | € 100 (in de voorwaarden zelf, niet per retraite) | Definitief (Daan, 3 nov 2026) |
| Termijn restbetaling | "volgt" | Placeholder |
| Go/no-go-termijn | "volgt" | Placeholder; hangt aan de go/no-go-datum die nog niet vastligt |

## Technische aanpak (kort)
- `src/voorwaarden.md`: teksten, tabel, front matter `concept` en `bijgewerkt`
- Kleine aanpassing in `layouts/pagina.njk` (of een partial) voor de conceptmelding, herbruikbaar voor 016
- Controle: echte build in GitHub Actions + browsercontrole

## Open vragen voor Daan
1. ~~Termijnen?~~ Overnemen uit de vorige editie (Daan, 3 nov 2026).
2. ~~Aanbetaling?~~ € 100 (Daan, 3 nov 2026).
3. Wanneer moet het restbedrag binnen zijn, en tot wanneer kunnen jullie een retraite afblazen? Dat hangt samen met de go/no-go-datum die nog openstaat.
4. Laat een jurist dit toetsen voor de lancering (o.a. herroepingsrecht: bij vrijetijdsdiensten op een vaste datum geldt dat meestal niet, maar dat moet een jurist bevestigen).

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (3 nov 2026)
Echte Eleventy-build in GitHub Actions (tijdelijke testworkflow, daarna verwijderd) en diezelfde build in Chrome op 375 px en 1280 px, in alle vier de thema's.

| # | Resultaat |
|---|---|
| 1 | ✅ Vier h2's in de juiste volgorde met de conceptteksten; "in de maak" is weg |
| 2 | ✅ Melding "Concept" bovenaan; getest met `concept: false`: melding verdwijnt. Andere pagina's krijgen geen melding |
| 3 | ✅ Echte tabel met kopregel en drie rijen; geen horizontaal scrollen op 375 px |
| 4 | ✅ Twee keer "termijn volgt", zichtbaar gemarkeerd (zandvlak met gestippelde okerlijn) |
| 5 | ✅ "Laatst bijgewerkt: 3 november 2026" onderaan, uit de front matter |
| 6 | ✅ Laagste contrast 4,77:1 (thema Zand), alle tekst ≥ 4,5:1; koppen logisch; focusrand zichtbaar met Tab; geen JavaScript-fouten |

Ook gewijzigd: `layouts/pagina.njk` kan nu op elke pagina een conceptmelding en "Laatst bijgewerkt" tonen (herbruikbaar voor 016); twee kleine CSS-regels (`.volgt`, `.pagina__bijgewerkt`).
