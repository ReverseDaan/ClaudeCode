# 020 — Home afmaken: intro, drie stappen, eerstvolgende retraite en routes

**Status:** Gebouwd — ter review
**Bron:** `docs/pagina-opzet.md` (US-01, US-02, US-04); `docs/siteplan.md` sectie C (pagina 01, bezoekersroute); Drive: brochure 2025 (intro); Miro "Feedback": "leg uit wat creatiekracht betekent", "maak het toegankelijk voor wie zich niet kunstzinnig vindt"
**Afhankelijk van:** 004 (retraites), 010 (ervaringen)

## Story
Als **bezoeker die voor het eerst op de site komt**
wil ik **binnen een halve minuut snappen wat dit is, wanneer de volgende retraite is en waar ik verder lees**
zodat **ik niet hoef te zoeken en zin krijg om door te klikken**.

## Context
Home heeft nu alleen de hero, de ervaringen en (verborgen) de interesselijst. Dit is stap 8 uit het plan. In de feedback van 2025 kwam terug dat "creatiekracht" vaag bleef en dat mensen zich afvroegen of ze moeten kunnen tekenen; de intro beantwoordt dat meteen.

## Scope
**Wel:** volgorde van boven naar beneden:
1. Hero (bestaat)
2. **Intro**: twee à drie zinnen, met "Je hoeft niet te kunnen tekenen"
3. **Drie stappen**: Aankomen · Creëren · Reflecteren, elk met kop, één zin en een klein handgetekend SVG-icoon
4. **Eerstvolgende retraite**: automatisch de eerste komende retraite als kaart, met knop "Meer informatie" en "Vraag een plek aan"; als er niets gepland is: korte tekst + interesselijst (indien aan) of link naar contact
5. Ervaringen (bestaat)
6. **Drie routes**: Wat en waarom · Kalender · Over de stichting, als drie grote links
7. Interesselijst (bestaat)
- Penseelstreek-scheidingslijnen tussen de secties
- Alle teksten in `home.yaml`

**Niet:**
- Foto's (galerij is 011, in de wacht)
- Nieuwe teksten voor Wat en waarom

## Conceptteksten
**Intro**
> Een paar dagen weg uit de drukte, in de natuur. Je maakt iets met je handen, mediteert en wandelt, en gebruikt wat je maakt om rustig naar binnen te kijken. Je hoeft niet te kunnen tekenen: het gaat om wat het maken met je doet, niet om het resultaat.

**Drie stappen**
- **Aankomen.** Je telefoon gaat even weg, je komt tot stilstand in de natuur.
- **Creëren.** Begeleid door een kunstenaar en zonder oordeel; het materiaal staat voor je klaar.
- **Reflecteren.** In stilte, op papier of in de groep: wat zegt jouw werk over jou?

## Acceptatiecriteria
1. **Gegeven** Home, **dan** staan de secties in de volgorde uit de scope; elke sectie heeft een h2 en de koppen lopen logisch.
2. **Gegeven** de voorjaarsretraite in de toekomst, **dan** toont "Eerstvolgende retraite" die retraite met datum, plaats, status en twee knoppen.
3. **Gegeven** geen komende retraites (getest met een tijdelijke datum in het verleden), **dan** staat de "niets gepland"-tekst en geen lege kaart.
4. De drie routes linken naar `/wat-en-waarom/`, `/kalender/` en `/stichting/`.
5. Iconen zijn eigen SVG, `aria-hidden`, en gebruiken de themakleuren (zichtbaar in alle vier de thema's).
6. Alle teksten komen uit `home.yaml`; de naam uit `site.yaml`.
7. 375 px zonder horizontaal scrollen; de stappen staan op mobiel onder elkaar.
8. Contrast ≥ 4,5:1 in alle thema's; `prefers-reduced-motion` gerespecteerd (geen animaties nodig).

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Intro en stappen | Zie hierboven | Concept |
| "Telefoon gaat even weg" | Hangt aan 019, vraag 3 | Concept |

## Technische aanpak (kort)
- `src/index.njk`, `src/_data/home.yaml`
- Nieuwe partial `partials/stappen.njk` met drie inline SVG-iconen
- Hergebruik `partials/retraite-kaart.njk` en `partials/penseelstreek.njk`
- CSS-sectie "Home" in `style.css`

## Open vragen voor Daan
1. "Houtskool, verf en papier" klopt niet (Daan, 3 nov 2026). Nu algemeen: "je maakt iets met je handen". Besloten: algemeen houden (Daan, 3 nov 2026).
2. Is "Reflecteren" in de groep een vast onderdeel (delingscirkel)? *Af te stemmen met Vincent.*

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (3 nov 2026)
Echte Eleventy-build in GitHub Actions (tijdelijke testworkflow, daarna verwijderd), met varianten (niets gepland, met en zonder interesselijst), en de build in Chrome op 375 px en 1280 px in alle vier de thema's.

| # | Resultaat |
|---|---|
| 1 | ✅ Volgorde: hero (h1), Even uit de drukte, Aankomen/creëren/reflecteren, Eerstvolgende retraite, Wat deelnemers zeggen, Verder kijken, (interesselijst); elke sectie een h2 |
| 2 | ✅ Eerstvolgende retraite: de voorjaarsretraite met datum, plaats, status, "Meer informatie" en "Vraag een plek aan" |
| 3 | ✅ Met een datum in het verleden: geen kaart, wel "Er staat op dit moment geen nieuwe retraite gepland" met link naar contact; met ingevulde interesselijst staat die daar (en niet nog eens onderaan) |
| 4 | ✅ Routes naar `/wat-en-waarom/`, `/kalender/` en `/stichting/` |
| 5 | ✅ Drie eigen SVG-iconen (boom, penseel, spiraal), `aria-hidden`, in de linkkleur van het thema |
| 6 | ✅ Alle teksten in `home.yaml`; naam uit `site.yaml` |
| 7 | ✅ Op 375 px onder elkaar, geen horizontaal scrollen |
| 8 | ✅ Laagste contrast 4,77:1 (Zand); geen animaties; geen JavaScript-fouten |

Ook gemaakt: `partials/penseelstreek.njk` (stond al in CLAUDE.md maar bestond nog niet), twee keer gebruikt op Home. De kaarten op Retraites en Kalender houden de knoptekst "Aanmelden".
