# 006 — Pagina "Over de stichting" met missie, geschiedenis en voorbeeldgegevens

**Status:** Gebouwd — ter review
**Bron:** `docs/pagina-opzet.md` (US-14); `docs/siteplan.md` sectie C (pagina 06) en "Juridisch"; Drive: brochure 2025 (dia 2), Draaiboek en overleg editie 1
**Afhankelijk van:** 005 (personen met echte namen); kan ook los gebouwd worden

## Story
Als **bezoeker die wil weten met wie ik te maken heb**
wil ik **zien wie er achter de retraites zit, wat ze willen en hoe het georganiseerd is**
zodat **ik vertrouwen heb voordat ik me aanmeld**.

## Context
Er is nog geen stichting (Daan, 3 nov 2026). De pagina krijgt daarom **gegenereerde voorbeeldgegevens** voor KvK, RSIN en statutaire zetel, met daarboven een duidelijke melding dat het voorbeelddata is. Zo staat de opzet klaar en hoeven later alleen de echte waarden in `stichting.yaml`.

## Scope
**Wel:**
- Secties: **Missie**, **Hoe het begon**, **Wie wij zijn** (de bestuursleden uit `personen.yaml`), **Gegevens**
- Bovenaan de sectie "Gegevens" een opvallende melding:
  > **Let op: voorbeeldgegevens.** Er is nog geen stichting opgericht. De gegevens hieronder zijn gegenereerd om de opzet van de pagina te laten zien en zijn niet echt.
- `stichting.yaml`: voorbeeldwaarden plus een instelling `voorbeeld: true` die de melding aanzet. Ook in de voettekst staat bij KvK/RSIN "(voorbeeld)" zolang die instelling aan staat
- ANBI-blok blijft uit (`anbi: false`)
- Geen telefoonnummers; contact alleen via het gedeelde mailadres
- Teksten in `stichting.md` en `stichting.yaml`, niet in templates

**Niet (expliciet buiten deze story):**
- Privacybeleid en voorwaarden (US-17)
- Donatie-informatie
- Echte stichtingsgegevens

## Conceptteksten

### Intro
> Wie er achter de retraites zit, en waarom we dit doen.

### Missie
> We geloven dat er in deze snel veranderende wereld een tegenbeweging nodig is. Een beweging die ruimte biedt voor vertraging, verstilling en bewuste aandacht. Met {{ site.naam }} maken we die ruimte: retraites waarin stilte, creativiteit en natuurlijke verbinding samenkomen, toegankelijk voor iedereen, ook zonder ervaring.

### Hoe het begon
> Het idee ontstond toen Daan tijdens een reis door India een houtskoolcursus volgde, en ervoer hoe tekenen en stilte elkaar versterken. Samen met Vincent groeide dat uit tot een eigen retraite.
>
> In de zomer van 2025 vond de eerste editie plaats: vijf dagen op de Veluwe, met meditatie, yoga, schilderen en veel tijd in de natuur. Wat we daar leerden, nemen we mee in elke volgende retraite.

### Wie wij zijn
Kaarten van Daan Smit en Vincent Nieuwenhuis uit `personen.yaml`, met de rol "Oprichter en begeleider".

### Gegevens *(voorbeeld)*
| Gegeven | Voorbeeldwaarde |
|---|---|
| Naam | Stichting {{ site.naam }} |
| KvK-nummer | 12345678 |
| RSIN | 123456789 |
| Statutaire zetel | Epe |
| Contact | stillnessandstrokes@gmail.com |

De nummers zijn bewust herkenbaar nep (oplopende cijfers), zodat ze niet per ongeluk lijken op een bestaand nummer.

## Acceptatiecriteria
1. **Gegeven** `/stichting/`, **dan** staan de secties Missie, Hoe het begon, Wie wij zijn en Gegevens in die volgorde, met de conceptteksten hierboven.
2. **Gegeven** `voorbeeld: true` in `stichting.yaml`, **dan** staat boven de gegevens de melding "Let op: voorbeeldgegevens…" en staat in de voettekst "(voorbeeld)" bij KvK en RSIN; **gegeven** `voorbeeld: false`, **dan** verdwijnen beide.
3. **Gegeven** `anbi: false`, **dan** staat er nergens iets over ANBI.
4. De kaarten bij "Wie wij zijn" komen uit `personen.yaml`; er staan geen telefoonnummers op de pagina.
5. Semantische HTML, voldoende contrast in alle vier de thema's, werkt op 375 px.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Missie en geschiedenis | Zie hierboven | Concept, ter review |
| KvK, RSIN, zetel | 12345678, 123456789, Epe | **Gegenereerd voorbeeld**, zo gemarkeerd op de site |
| Rollen | Oprichter en begeleider | Definitief (Daan, 3 nov 2026) |

## Technische aanpak (kort)
- `src/stichting.md`: teksten en secties
- `src/_data/stichting.yaml`: voorbeeldwaarden + `voorbeeld: true`, met uitleg-commentaar
- `src/_includes/partials/footer.njk`: "(voorbeeld)" bij KvK/RSIN als `stichting.voorbeeld` aan staat
- Hergebruik van `persoon-kaart.njk` uit story 005
- Controle zoals bij story 004

## Open vragen voor Daan
1. ~~Bestuursrollen?~~ Alleen "oprichter" (Daan, 3 nov 2026).
2. ~~Rohit noemen?~~ Nee (Daan, 3 nov 2026).
3. ~~Zetel?~~ Epe als voorbeeld (Daan, 3 nov 2026).

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
| 1 | ✅ Koppen in volgorde: Missie, Hoe het begon, Wie wij zijn, Gegevens; Rohit wordt niet genoemd |
| 2 | ✅ Met `voorbeeld: true`: melding "Let op: voorbeeldgegevens…" en "(voorbeeld)" bij KvK, RSIN en zetel in de voettekst. Getest met `voorbeeld: false`: beide weg |
| 3 | ✅ Met `anbi: false` staat er nergens ANBI; getest met `true`: verschijnt in de voettekst |
| 4 | ✅ Kaarten uit `personen.yaml` (oprichters); geen telefoonnummers |
| 5 | ✅ Semantische HTML, contrast ≥ 4,5:1 in alle vier de thema's, werkt op 375 px |
