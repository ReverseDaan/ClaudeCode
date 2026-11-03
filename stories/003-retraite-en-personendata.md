# 003 — Retraite- en personendata met één voorbeeldretraite

**Status:** Concept
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
  - `prijs`: bedrag en een korte toelichting (bijv. "inclusief verblijf en maaltijden")
  - `plekken`: totaal aantal en aantal vrij; de status (vrij / bijna vol / vol) wordt hieruit berekend
  - `inbegrepen`: lijstje
  - `begeleiders`: verwijzingen naar personen in `personen.yaml`
  - `fotos`: bestandsnamen in `src/images/` (mag leeg)
  - `voorbeeld`: true/false. Bij true toont de site later een duidelijk label "Voorbeeld"
- De **voorjaarsretraite 2027** als eerste echte retraite (zie "Inhoud en placeholders"), met `bevestigd: false` zolang Zonnehuis de reservering niet schriftelijk heeft bevestigd
- Een standaardbestand voor de map, zodat losse retraites nog **geen eigen pagina** krijgen (dat is story US-08) en vanzelf in de lijst "retraites" komen
- `src/_data/personen.yaml`: begeleiders en bestuursleden met foto, naam, rol en bio (twee à drie zinnen), elk met een korte code waar een retraite naar verwijst
- In `eleventy.config.js`:
  - lijst **alle retraites**, gesorteerd op startdatum
  - lijst **komende retraites** (startdatum vandaag of later)
  - **eerstvolgende retraite**: de eerste uit de komende
  - de status per retraite (vrij / bijna vol / vol) op één plek berekend
- **Controle bij het bouwen:** ontbreekt een verplicht veld, of verwijst een retraite naar een onbekende begeleider, dan meldt de build in gewone taal welk bestand en welk veld. De build stopt bij een fout, zodat er geen kapotte gegevens live gaan
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
6. De status is "vol" bij 0 vrije plekken, "bijna vol" bij 3 of minder, anders "vrij" (grens instelbaar op één plek).
7. Er verschijnt geen nieuwe pagina en geen zichtbare wijziging op de live site; alle bestaande pagina's werken nog.
8. Elk nieuw databestand heeft Nederlandstalig uitleg-commentaar dat zonder programmeerkennis te volgen is.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Voorjaarsretraite: titel | "Voorjaarsretraite" | Placeholder, titel nog te kiezen |
| Formaat | meerdaags | Definitief (volgt uit de data) |
| Data | 25 t/m 29 april 2027 | Volgens Daan; `bevestigd: false` (zie open vraag 1) |
| Locatie | 't Zonnehuis, Loenen | Gereserveerd volgens de mail, nog niet bevestigd |
| Prijs voor deelnemers | "volgt" | Placeholder: nog niet vastgesteld |
| Plekken | 20 totaal, 20 vrij | Placeholder (groepsgrootte 15–20) |
| Inbegrepen | verblijf, workshops; maaltijden "volgt" | Placeholder: verzorgd of zelfverzorging is nog open |
| `voorbeeld` | false | Het is een echte, geplande retraite |
| Personen | Zie open vraag 2 | Placeholder-bio's en placeholder-foto's |
| Grens "bijna vol" | 3 vrije plekken | Placeholder, aan te passen |

**Niet in de repo** (die is openbaar): de kostprijs van de locatie en andere interne bedragen uit de offerte.

## Technische aanpak (kort)
- `src/retraites/*.md` + een directory-databestand voor standaardinstellingen (geen eigen pagina, tag "retraites")
- `src/_data/personen.yaml`
- `eleventy.config.js`: collecties `retraites`, `komendeRetraites` en een global/filter voor de eerstvolgende; filter voor de status; controle van verplichte velden en begeleider-codes tijdens het bouwen
- README: sectie "Een retraite toevoegen"
- CLAUDE.md: "Plan en voortgang" en mappenstructuur bijwerken
- Controle: de build lokaal of via GitHub Actions draaien, met tijdelijke testbestanden voor criterium 2 t/m 5 (die worden niet gecommit)

## Open vragen voor Daan
1. ~~Welke retraite?~~ De geplande voorjaarsretraite bij Zonnehuis, 25 t/m 29 april 2027 (Daan, 3 nov 2026). **Let op:** in de mail is gereserveerd voor 26 t/m 29 april (20 aug 2026) en Bas zou nog bevestigen; die bevestiging staat niet in de mailbox. Daarom blijft `bevestigd: false` tot de datum 25–29 april schriftelijk rond is.
2. **Personen:** jullie eigen namen (Daan en Vincent) met tijdelijke bio's, of nep-namen tot Vincent ermee akkoord is?
3. **Vrije plekken:** handmatig een getal bijhouden (zoals voorgesteld), of alleen een status kiezen (vrij / bijna vol / vol / wachtlijst)? Een getal is preciezer, een status is makkelijker bij te houden.
4. **Prijs:** één bedrag per retraite, of ook een vroegboekprijs of meerdere prijzen (bijv. kamer delen / eigen kamer)?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
