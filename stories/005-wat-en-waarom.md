# 005 — Pagina "Wat en waarom" met dagritme en begeleiders

**Status:** Gebouwd — ter review
**Bron:** `docs/pagina-opzet.md` (US-05, US-06); `docs/siteplan.md` sectie C (pagina 02); Drive: brochure 2025 (dia 2 en 3), Draaiboek editie 1, Weekprogramma editie 1, blogpost Daan
**Afhankelijk van:** 003 (personendata)

## Story
Als **bezoeker die zichzelf misschien niet "kunstzinnig" vindt**
wil ik **lezen wat een retraite is, waarom stilte en creëren samengaan, hoe een dag eruitziet en wie mij begeleidt**
zodat **ik kan inschatten of dit bij mij past voordat ik een datum kies**.

## Context
De pagina staat nu op "in de maak". De teksten komen uit de brochure en het draaiboek van editie 1 (juli 2025). De taal blijft zoals in de brochure (Daan, 3 nov 2026); later volgt eventueel een ronde om de toon concreter te maken.

## Scope
**Wel:**
- Vier secties, in deze volgorde:
  1. **Wat het is**: de uitnodiging tot vertragen, wat je doet (stilte, meditatie, yoga, schilderen, natuur), "ervaring is niet nodig"
  2. **Waarom**: de "tegenbeweging" en wat creëren met je doet (brochure dia 2)
  3. **Zo kan een dag eruitzien**: het dagritme van editie 1 als tabel/lijst met tijden, met de vermelding dat het een voorbeeld is
  4. **Begeleiding**: kaarten met foto (placeholder), naam, rol en bio uit `personen.yaml`, plus een regel dat de kunstenaar voor de voorjaarsretraite nog bekend wordt gemaakt
- **Voor wie** als korte, eigen alinea onder "Wat het is" (siteplan: "voor wie" op deze pagina)
- `personen.yaml`: de placeholders worden Daan Smit en Vincent Nieuwenhuis, met concept-bio's (zie hieronder)
- Teksten in het Markdown-bestand en `personen.yaml`, niet in templates
- Een knop onderaan naar Retraites en events

**Niet (expliciet buiten deze story):**
- Echte foto's (placeholders met duidelijke bestandsnaam en alt-tekst)
- Een kunstenaar of programma per dag voor de voorjaarsretraite
- Ervaringen van deelnemers (US-03, Home)
- Toon aanpassen ("minder zweverig"): latere ronde

## Conceptteksten

### Intro (bovenaan)
> In een wereld waarin alles om jouw aandacht vraagt, groeit de noodzaak om te kunnen verbinden met jezelf en je omgeving.

### Wat het is
> Met {{ site.naam }} nodigen we je uit voor een intieme en bezielde reis waarin we samen ruimte maken voor stilte, creativiteit en natuurlijke verbinding. In een kleine groep trekken we de natuur in, waar rust, bos en heide ons omringen.
>
> De creatieve sessies vormen de rode draad. Daaromheen begeleiden we activiteiten die ze ondersteunen: dagelijkse meditaties, toegankelijke yoga en momenten van verbinding. Zo creëer je ruimte in je hoofd, kom je thuis in je lichaam, en ben je volledig aanwezig in het moment.

**Voor wie**
> {{ site.naam }} is er voor iedereen die verlangt naar verdieping in creativiteit, in stilte en in contact met de natuur. Ervaring is niet nodig. Alleen de wens om te vertragen, te ontdekken en op te laden.

### Waarom
> We organiseren deze retraites vanuit onze overtuiging dat er in deze snel veranderende wereld een tegenbeweging nodig is. Een beweging die ruimte biedt voor vertraging, verstilling en bewuste aandacht. Want juist in die ruimte kun je weer voelen wat er in je leeft.
>
> Creëren is niet alleen een speelse vorm van expressie. Het is ook een krachtig middel om zelfvertrouwen te versterken, los te laten wat je niet meer dient, en je over te geven aan het creatieve wezen dat in ieder mens leeft.
>
> *"Wie zijn creatieve kracht omarmt, staat gegrond en levendig in de wereld."*

### Zo kan een dag eruitzien
> Een voorbeeld uit onze eerste retraite. Het programma per retraite kan iets verschillen.

| Tijd | Wat |
|---|---|
| 06:30 – 07:30 | Meditatie |
| 07:30 – 09:00 | Ontbijt in stilte |
| 09:00 – 12:00 | Creatieve sessie |
| 12:00 – 12:30 | Stiltemeditatie (optioneel) |
| 12:30 – 13:30 | Lunch |
| 13:30 – 16:45 | Eigen tijd |
| 16:45 – 17:45 | Yoga (optioneel) |
| 18:00 – 19:00 | Diner |
| 19:30 – 21:00 | Avondactiviteit, zoals een stiltewandeling, loopmeditatie of kampvuur |

> We beginnen de dag in stilte. Tot het einde van het ontbijt moedigen we je aan om nog niet te spreken, zodat je zintuigen de kans krijgen om echt wakker te worden. Na de lunch is er weer ruimte om te spreken. De middag is vrij in te vullen: je kunt de stilte laten bezinken tijdens een wandeling, uitrusten, schrijven of contact maken met anderen, of juist met jezelf. Alles is welkom.

### Begeleiding
**Daan Smit**, organisator en begeleider *(concept)*
> Daan begeleidt de meditaties en is je aanspreekpunt tijdens de retraite. Hij ontdekte zelf hoe tekenen en stilte samenkomen tijdens een houtskoolcursus in India, waar hij merkte hoe snel de gedachte "ik kan helemaal niet tekenen" opkomt, en hoeveel er gebeurt als je die even laat voor wat hij is. Die ervaring was het begin van {{ site.naam }}.

**Vincent Nieuwenhuis**, organisator en begeleider *(concept, af te stemmen met Vincent)*
> Vincent begeleidt de yoga en de stiltewandelingen, en neemt je mee naar buiten om het landschap op je in te laten werken. Hij zorgt ervoor dat de groep zich welkom voelt en dat er een veilige bedding is om te openen voor de gezamenlijke reis.

> De kunstenaar die de creatieve sessies van de voorjaarsretraite begeleidt, maken we binnenkort bekend.

## Acceptatiecriteria
1. **Gegeven** `/wat-en-waarom/`, **dan** staan de secties "Wat het is" (met "Voor wie"), "Waarom", "Zo kan een dag eruitzien" en "Begeleiding" in die volgorde, met de conceptteksten hierboven.
2. **Gegeven** het dagritme, **dan** staat het als tabel met tijden, met erboven dat het een voorbeeld is, en is het op 375 px leesbaar zonder horizontaal scrollen.
3. **Gegeven** `personen.yaml`, **dan** verschijnen Daan Smit en Vincent Nieuwenhuis als kaart met foto (placeholder met alt-tekst), naam, rol en bio; een nieuwe persoon in het bestand verschijnt vanzelf.
4. Nergens op de pagina staan telefoonnummers, deelnemersnamen of andere persoonsgegevens uit het draaiboek.
5. De naam van de organisatie komt overal uit `site.yaml` (`{{ site.naam }}`).
6. Onderaan staat een knop naar Retraites en events.
7. Semantische HTML (koppen in volgorde, tabel met kopregel), voldoende contrast in alle vier de thema's, toetsenbord bedienbaar.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Teksten | Zie hierboven, uit de brochure | Concept, toon later eventueel aanpassen |
| Dagritme | Editie 1 | Voorbeeld, zo gemarkeerd op de site |
| Bio Daan | Concept op basis van blogpost en brochure | Concept, ter review door Daan |
| Bio Vincent | Concept op basis van draaiboek | Concept, af te stemmen met Vincent |
| Foto's | `persoon-daan.jpg`, `persoon-vincent.jpg` | Placeholder |
| Kunstenaar | "maken we binnenkort bekend" | Placeholder |

## Technische aanpak (kort)
- `src/wat-en-waarom.md`: teksten en dagritme (tabel in Markdown)
- `src/_data/personen.yaml`: codes `daan` en `vincent` (de voorjaarsretraite verwijst ernaar in plaats van `begeleider-1/2`)
- `src/_includes/partials/persoon-kaart.njk` (nieuw) en een kleine CSS-sectie
- Controle: echte build in GitHub Actions + browsercontrole, zoals bij story 004

## Open vragen voor Daan
1. ~~Bio's?~~ Akkoord op de concepten (Daan, 3 nov 2026); bio Vincent blijft "concept" tot hij hem heeft gezien.
2. ~~Plantaardig eten noemen?~~ Niet genoemd zolang verzorgd/zelfverzorging open is (akkoord op het concept, dat eten niet noemt).
3. Rol bij beide: "Oprichter en begeleider" (volgt uit story 006: alleen oprichters).

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
| 1 | ✅ Koppen in volgorde: Wat het is, Voor wie, Waarom, Zo kan een dag eruitzien, Begeleiding; teksten uit het concept |
| 2 | ✅ Dagritme als echte tabel (`<table>` met kopregel), met "Een voorbeeld uit onze eerste retraite"; geen horizontaal scrollen op 375 px |
| 3 | ✅ Kaarten voor Daan Smit en Vincent Nieuwenhuis met rol en bio; zonder foto een cirkel met de voorletter. Getest: een derde persoon en een echte foto verschijnen vanzelf |
| 4 | ✅ Geen telefoonnummers of deelnemersgegevens op de pagina |
| 5 | ✅ Naam komt uit `site.yaml`; geen losse `{{ }}` in de uitvoer |
| 6 | ✅ Knop "Bekijk de retraites" onderaan; met Tab bereikbaar met focusrand, Enter opent `/retraites/` |
| 7 | ✅ Eén h1, koppen in volgorde, alle tekst ≥ 4,5:1 contrast in alle vier de thema's, geen JavaScript-fouten |
