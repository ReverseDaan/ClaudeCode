# 019 — Verblijf, aankomst en vertrek op de eventpagina

**Status:** Goedgekeurd (Daan, 3 nov 2026)
**Bron:** Gmail: vragen van geïnteresseerden (juni 2025) over kamers ("eigen of gedeelde kamer?"), wie er meedoen en de sfeer; Miro "Feedback": eindtijd van de laatste dag was onduidelijk, "plan rust in het weekend erna"; Drive: brochure 2025, dia 6 (aankomst zondag vanaf 18:00, einde vrijdag 17:00; telefoon inleveren bij aankomst)
**Afhankelijk van:** 008 (eventpagina)

## Story
Als **iemand die overweegt mee te gaan**
wil ik **op de eventpagina lezen hoe ik slaap, hoe laat het begint en eindigt en hoe het zit met mijn telefoon**
zodat **ik mijn week kan plannen en niet hoef te mailen voor de basisvragen**.

## Context
De vragen die in 2025 het vaakst per mail binnenkwamen, gingen over de kamers. Deelnemers gaven daarnaast terug dat de eindtijd van de laatste dag onduidelijk was. Deze informatie hoort per retraite, want hij verschilt per locatie.

## Scope
**Wel:**
- Nieuwe optionele velden in de front matter van een retraite:
  - `aankomst` (bijv. "zondag 25 april vanaf 16:00") en `vertrek` (bijv. "donderdag 29 april rond 16:00")
  - `verblijf` (korte tekst: kamers, bedden, eigen kamer op aanvraag)
  - `digitale_rust` (aan/uit; standaardtekst uit `praktisch.yaml`)
- Op de eventpagina een blok "Aankomst en vertrek" bij de feiten, en uitklapblokken "Slapen" en "Digitale rust" naast paklijst en bereikbaarheid
- Ontbreekt een veld, dan staat er "volgt" (aankomst/vertrek) of verdwijnt het blok (verblijf)
- Standaardtekst digitale rust in `praktisch.yaml`; tip "plan wat rust na thuiskomst" bij voorbereiding
- `.ics` (story 009): blijft hele dagen; aankomst- en vertrektijd komen in de beschrijving
- README bijwerken

**Niet:**
- Kamerindeling of prijzen per kamertype
- Foto's van de locatie

## Conceptteksten
**Digitale rust (standaard)**
> Er is wifi, maar we nodigen je uit je telefoon bij aankomst in te leveren. Zo krijgt je hoofd echt de ruimte. Moet je bereikbaar zijn voor thuis? Dan spreken we samen iets af.

**Voorbereiding (toevoeging)**
> Plan als het kan wat rust in de dagen na de retraite. Veel deelnemers merkten dat het fijn is om niet meteen weer vol aan de slag te gaan.

## Acceptatiecriteria
1. **Gegeven** een retraite met `aankomst` en `vertrek`, **dan** staan die bij de feiten op de eventpagina; zonder die velden staat er "Aankomst en vertrek: volgt".
2. **Gegeven** `verblijf`, **dan** staat er een uitklapblok "Slapen" met die tekst; zonder veld geen blok.
3. **Gegeven** `digitale_rust: true`, **dan** staat het uitklapblok "Digitale rust" met de standaardtekst.
4. De tip over rust na thuiskomst staat in het blok "Voorbereiding".
5. Het `.ics`-bestand noemt aankomst en vertrek in de beschrijving als ze bekend zijn.
6. Een fout type (bijv. `digitale_rust: "ja"`) stopt de build met een Nederlandse melding.
7. Uitklapblokken werken zonder JavaScript; 375 px zonder horizontaal scrollen.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Aankomst/vertrek voorjaar 2027 | leeg → "volgt" | Placeholder tot afgestemd met Zonnehuis |
| Verblijf Zonnehuis | "Je slaapt meestal in een meerpersoonskamer. Er zijn ook een paar eenpersoonskamers; vraag ernaar bij je aanmelding." | Concept (Zonnehuis: 32 plekken, enkele eenpersoons-, vooral meerpersoonskamers; Daan, 3 nov 2026). Het aantal plekken van de locatie komt niet op de site |
| Digitale rust | aan | Definitief (Daan, 3 nov 2026) |

## Technische aanpak (kort)
- `src/retraites/2027-04-voorjaar.md`: velden als commentaar-voorbeeld + `digitale_rust: true`
- `lib/retraites.js`: controle op type van de nieuwe velden; `icsBestand` uitbreiden
- `layouts/retraite.njk`, `praktisch.yaml`, README

## Open vragen voor Daan
1. Hoe laat is aankomst en vertrek bij 't Zonnehuis? (In de Miro-tabel staat nog niets over slaapplekken voor Zonnehuis.)
2. ~~Kamers?~~ Enkele eenpersoons-, vooral meerpersoonskamers (Daan, 3 nov 2026).
3. ~~Telefoon inleveren?~~ Ja (Daan, 3 nov 2026).

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
