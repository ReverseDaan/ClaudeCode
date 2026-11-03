# 003 — Retraite- en personendata met de voorjaarsretraite

**Status:** Goedgekeurd
**Bron:** `docs/pagina-opzet.md` (US-18); `docs/siteplan.md` sectie A (sjablonen retraite en persoon) en B (nieuwe retraite in vijf stappen)
**Afhankelijk van:** 001 (menu en voettekst)

## Story
Als **organisator zonder programmeerkennis (Vincent of Daan)**
wil ik **een nieuwe retraite toevoegen door één bestand te kopiëren en aan te passen**
zodat **de site later vanzelf de juiste retraites, data en status toont, zonder dat iemand code hoeft te schrijven**.

## Context
Home (eerstvolgende retraite), Retraites en events, Kalender en de eventpagina lezen straks allemaal uit dezelfde gegevens. Daarom leggen we eerst het datamodel vast. Deze story toont nog niets nieuws op de site: hij zorgt dat de gegevens er zijn, kloppen en makkelijk te beheren zijn. De pagina's die ze tonen volgen in story 004 en verder.

## Scope
**Wel:**
- Map `src/retraites/` met **één Markdown-bestand per retraite**. Bovenin (front matter) de gegevens, daaronder de beschrijving in gewone tekst. Velden, met uitleg-commentaar in het bestand:
  - `titel`, `samenvatting` (één à twee zinnen)
  - `formaat`: dag, weekend of meerdaags
  - `start` en `eind` (datum)
  - `bevestigd`: true/false. Bij false toont de site later "datum onder voorbehoud"
  - `locatie`: naam en plaats
  - `prijs`: één bedrag en een korte toelichting (bijv. "inclusief verblijf en maaltijden")
  - `status`: vrij, bijna-vol, vol of wachtlijst (handmatig gekozen)
  - `inbegrepen`: lijstje
  - `begeleiders`: verwijzingen naar personen in `personen.yaml`
  - `fotos`: bestandsnamen in `src/images/` (mag leeg)
  - `voorbeeld`: true/false. Bij true toont de site later een duidelijk label "Voorbeeld"
- De **voorjaarsretraite 2027** als eerste echte retraite (zie "Inhoud en placeholders"), met `bevestigd: true`
- Een standaardbestand voor de map, zodat losse retraites nog **geen eigen pagina** krijgen (dat is story US-08) en vanzelf in de lijst "retraites" komen
- `src/_data/personen.yaml`: begeleiders en bestuursleden met foto, naam, rol en bio (twee à drie zinnen), elk met een korte code waar een retraite naar verwijst
- In `eleventy.config.js`:
  - lijst **alle retraites**, gesorteerd op startdatum
  - lijst **komende retraites** (startdatum vandaag of later)
  - **eerstvolgende retraite**: de eerste uit de komende
  - de leesbare tekst bij elke status (bijv. `bijna-vol` → "Bijna vol") op één plek
- **Controle bij het bouwen:** ontbreekt een verplicht veld, heeft een veld een ongeldige waarde (formaat, status, datum), of verwijst een retraite naar een onbekende begeleider, dan meldt de build in gewone taal welk bestand en welk veld. De build stopt bij een fout, zodat er geen kapotte gegevens live gaan
- README: sectie "Een retraite toevoegen" in vijf stappen, zoals in het siteplan, voor iemand die in GitHub zelf een bestand bewerkt

**Niet (expliciet buiten deze story):**
- Retraites tonen op Home, Retraites en events, Kalender of een eventpagina (US-02, US-07, US-08, US-09)
- Engelse teksten per retraite (US-19)
- Een CMS of formulier om retraites in te voeren
- Echte foto's

## Acceptatiecriteria
1. **Gegeven** de voorjaarsretraite, **wanneer** de site gebouwd wordt, **dan** staat hij in de lijsten "alle retraites" en (als de datum in de toekomst ligt) "komende retraites" en "eerstvolgende".
2. **Gegeven** een retraite met een startdatum in het verleden, **wanneer** de site gebouwd wordt, **dan** staat hij wel in "alle retraites" maar niet in "komende" of "eerstvolgende".
3. **Gegeven** een kopie van het bestand van de voorjaarsretraite met alleen andere data, **wanneer** de site gebouwd wordt, **dan** verschijnt hij zonder verdere aanpassingen in de lijsten, in de juiste volgorde.
4. **Gegeven** een retraite zonder verplicht veld (bijv. `start`), **wanneer** de site gebouwd wordt, **dan** stopt de build met een Nederlandse melding die het bestand en het veld noemt.
5. **Gegeven** een retraite die verwijst naar een begeleider die niet in `personen.yaml` staat, **dan** stopt de build met een melding die de onbekende code noemt.
6. **Gegeven** een retraite met een status die niet vrij, bijna-vol, vol of wachtlijst is, **wanneer** de site gebouwd wordt, **dan** stopt de build met een melding die de toegestane waarden noemt.
7. Er verschijnt geen nieuwe pagina en geen zichtbare wijziging op de live site; alle bestaande pagina's werken nog.
8. Elk nieuw databestand heeft Nederlandstalig uitleg-commentaar dat zonder programmeerkennis te volgen is.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Voorjaarsretraite: titel | "Voorjaarsretraite" | Placeholder, titel nog te kiezen |
| Formaat | meerdaags | Definitief (volgt uit de data) |
| Data | 25 t/m 29 april 2027 | Definitief (bevestigd volgens Daan) |
| Locatie | 't Zonnehuis, Loenen | Definitief |
| Prijs voor deelnemers | € 495 | Werkprijs, nog niet definitief (site is nog niet gelanceerd) |
| Status | vrij | Placeholder |
| Inbegrepen | verblijf, workshops; maaltijden "volgt" | Placeholder: verzorgd of zelfverzorging is nog open |
| `voorbeeld` | false | Het is een echte, geplande retraite |
| Personen | Twee begeleiders met "Naam volgt", tijdelijke bio en placeholder-foto | Placeholder tot Daan en Vincent hun gegevens aanleveren |

**Niet in de repo** (die is openbaar): de kostprijs van de locatie en andere interne bedragen uit de offerte.

## Technische aanpak (kort)
- `src/retraites/*.md` + een directory-databestand voor standaardinstellingen (geen eigen pagina, tag "retraites")
- `src/_data/personen.yaml`
- `lib/retraites.js`: controle en hulpfuncties (los bestand, zodat het te testen is)
- `eleventy.config.js`: collecties `retraites` en `komendeRetraites` (de eerstvolgende is de eerste daarvan), filter `statusTekst`, controle tijdens het bouwen
- README: sectie "Een retraite toevoegen"
- CLAUDE.md: "Plan en voortgang" en mappenstructuur bijwerken
- Controle: de build via GitHub Actions draaien met een tijdelijke testworkflow en testbestanden voor criterium 1 t/m 7; die worden na de test weer verwijderd

## Open vragen voor Daan
1. ~~Welke retraite?~~ De voorjaarsretraite bij Zonnehuis, 25 t/m 29 april 2027, bevestigd (Daan, 3 nov 2026; bevestiging staat in een andere mailbox).
2. ~~Personen?~~ Placeholders ("Naam volgt") tot Daan en Vincent hun gegevens aanleveren.
3. ~~Vrije plekken?~~ Een status in plaats van een aantal (Daan, 3 nov 2026).
4. ~~Prijs?~~ Eén bedrag; werkprijs € 495 (Daan, 3 nov 2026).

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
