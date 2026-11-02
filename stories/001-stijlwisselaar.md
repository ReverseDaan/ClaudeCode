# 001 — Stijlwisselaar om huisstijlen te vergelijken

**Status:** Concept
**Bron:** CLAUDE.md, sectie "Look & feel"; `src/css/style.css` (design tokens)
**Afhankelijk van:** geen

## Story
Als **Daan (en later Vincent)**
wil ik **op de website met een knop kunnen wisselen tussen een paar huisstijlen**
zodat **we op de echte site, ook op een telefoon, kunnen zien welke stijl het beste past voordat we een keuze vastleggen**.

## Context
De huisstijl staat al als variabelen (kleuren, lettertypes, hoeken) bovenaan `src/css/style.css`. Een thema is dus een andere set waarden voor die variabelen. De wisselaar is een hulpmiddel tijdens het ontwerpen; vóór de lancering gaat hij uit.

## Scope
**Wel:**
- Vier thema's, elk als één blok CSS-variabelen in `style.css`. Alle vier ogen zacht; geen felle of harde kleuren.
  1. **Bos** — de huidige stijl, blijft de standaard
  2. **Zand** — beige met bruin, warm en zacht: crème en zandtinten, warm (melk)chocoladebruin voor tekst en accenten
  3. **Groen & goud** — modern en zacht: rustig saliegroen of zacht eucalyptusgroen met een gedempt goud als accent, strakker koplettertype
  4. **Ochtend** — opwekkend en activerend, maar zacht: lichte, frisse achtergrond met een warm, levendig accent (bijv. zacht koraal of abrikoos) naast een frisse tweede kleur
- Thema's mogen alleen kleuren, hoekafronding en (optioneel) het koplettertype aanpassen. Layout en witruimte blijven gelijk, zodat je echt alleen de stijl vergelijkt.
- Een kleine, zwevende knop rechtsonder ("Stijl: Bos ▾") die een keuzelijstje met de vier thema's opent.
- De keuze wordt onthouden in de browser (localStorage), zodat je bij doorklikken naar een andere pagina in dezelfde stijl blijft.
- Aan/uit via één instelling in `src/_data/site.yaml` (`stijlwisselaar: true/false`), met uitleg-commentaar. Staat hij uit, dan wordt de knop niet gebouwd en geldt altijd het standaardthema.
- README: korte uitleg hoe je een thema aanpast of toevoegt en hoe je de wisselaar uitzet.

**Niet (expliciet buiten deze story):**
- Een definitieve keuze voor een stijl
- Andere layouts of andere afbeeldingen per thema
- Een donkere modus
- Thema's voor pagina's die nog niet bestaan

## Acceptatiecriteria
1. **Gegeven** `stijlwisselaar: true` in `site.yaml`, **wanneer** ik een pagina open, **dan** zie ik rechtsonder een knop met de naam van het actieve thema.
2. **Gegeven** de knop, **wanneer** ik een ander thema kies, **dan** veranderen kleuren (en eventueel koplettertype) direct, zonder dat de pagina herlaadt.
3. **Gegeven** een gekozen thema, **wanneer** ik naar een andere pagina ga of de pagina herlaad, **dan** blijft dat thema actief, zonder kort zichtbare flits van het standaardthema.
4. **Gegeven** `stijlwisselaar: false`, **wanneer** de site gebouwd wordt, **dan** staat er geen knop en geen wissel-JavaScript in de HTML en is "Bos" actief.
5. De knop en het lijstje zijn met het toetsenbord te bedienen (Tab, Enter, Escape sluit) en hebben een zichtbare focus-stijl.
6. In alle vier de thema's heeft lopende tekst voldoende contrast met de achtergrond (minimaal 4,5:1).
7. Werkt op een schermbreedte van 375 px zonder horizontaal scrollen; de knop bedekt geen menu of hoofdknop.
8. Zonder JavaScript werkt de site gewoon in het standaardthema.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Themanamen | Bos, Zand, Groen & goud, Ochtend | Placeholder, aan te passen |
| Kleurwaarden Zand, Groen & goud, Ochtend | Voorstel van Claude Code binnen de omschrijving hierboven | Placeholder, om te vergelijken |
| Knoptekst | "Stijl: [naam]" | Placeholder |

## Technische aanpak (kort)
- `src/css/style.css`: de huidige tokens blijven in `:root` (= Bos); daaronder per extra thema een blok, bijv. `[data-thema="zand"] { … }`, dat alleen de gewijzigde variabelen overschrijft.
- `src/_data/site.yaml`: instelling `stijlwisselaar` en de lijst met thema's (naam + code).
- Nieuw partial `src/_includes/partials/stijlwisselaar.njk` met de knop, alleen opgenomen als de instelling aan staat.
- Nieuw `src/js/stijlwisselaar.js` (klein, met Nederlandse comments) voor openen/sluiten, wisselen en onthouden.
- `src/_includes/layouts/base.njk`: een paar regels inline in de `<head>` die het onthouden thema al vóór het tekenen zetten (tegen de flits), plus het partial en script, beide alleen als de wisselaar aan staat.
- Als een thema een ander koplettertype krijgt: dat lettertype toevoegen aan de bestaande Google Fonts-link.
- README: sectie "Stijlen vergelijken".

## Open vragen voor Daan
- ~~Welke richtingen?~~ Beantwoord: vier thema's zoals hierboven. Vallen "Licht" en "Aarde" hiermee weg, of moet een van beide er nog bij?
- Mag een thema ook het koplettertype wisselen, of wil je eerst alleen kleuren vergelijken?
- De site staat publiek op GitHub Pages: is het oké dat bezoekers de knop ook zien zolang de wisselaar aan staat?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
