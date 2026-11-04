# 024 — Betrouwbaarheid: nachtelijke herbouw, 404-pagina en controle bij elke PR

**Status:** Concept
**Bron:** Code-analyse 4 nov 2026 (punten 4, 5, 8 en 12; punten 6, 7 en 11 als handmatige stappen)
**Afhankelijk van:** geen

## Story
Als **beheerder (Daan of Vincent)**
wil ik **dat de site vanzelf actueel blijft en dat ik vóór het mergen zie of een wijziging werkt**
zodat **er geen verouderde of kapotte pagina's online staan, ook als ik een tijd niets aanpas**.

## Context
De "eerstvolgende retraite" en de lijst met komende retraites worden bepaald op het moment dat de site gebouwd wordt. Wordt er na april niets gepusht, dan blijft de voorjaarsretraite als "eerstvolgende" staan. Daarnaast toont een verkeerde link nu de algemene GitHub-foutpagina, en worden wijzigingen pas gecontroleerd als ze al op `main` staan.

## Scope
**Wel:**
1. **Nachtelijke herbouw**: `pages.yml` bouwt en publiceert de site ook elke nacht (rond 04:00 Nederlandse tijd), zodat voorbije retraites vanzelf verdwijnen.
2. **Eigen 404-pagina** (`src/404.md`) in de stijl van de site: korte tekst, links naar Home, Retraites en Contact. Tekst in het Markdown-bestand.
3. **Controle bij elke PR** (`.github/workflows/controle.yml`): bouwt de site en controleert de basis, met een duidelijke Nederlandse melding als iets misgaat:
   - de build slaagt (dus ook de controle van retraitebestanden);
   - geen ruwe template-code (`{{`, `{%`) in de HTML;
   - alle interne links verwijzen naar een pagina die bestaat;
   - elke pagina heeft precies één `<h1>` en een `<title>`.
4. **Workflows bijwerken** naar de huidige versies van de GitHub-onderdelen (checkout, setup-node, Pages), zodat de waarschuwing over Node 20 verdwijnt.
5. **README**: korte sectie "Als de controle rood is" en de handmatige stappen hieronder.

**Handmatig in GitHub (geen code, staat als stappenlijst in de README):**
- `main` beschermen: geen force-push en niet verwijderen. Geen verplichte PR, zodat Vincent rechtstreeks een retraite kan toevoegen.
- Dependabot aanzetten voor npm en GitHub Actions (meldingen bij lekken en updates).
- "Automatically delete head branches" aanzetten en de oude branches opruimen.

**Niet:**
- Verplichte goedkeuring van PR's
- Automatische tests van de opmaak (contrast, schermafbeeldingen): die blijven per story

## Acceptatiecriteria
1. **Gegeven** `pages.yml`, **dan** start de workflow ook volgens een vast nachtelijk schema; handmatig starten blijft mogelijk.
2. **Gegeven** een niet-bestaande URL op de live site, **dan** verschijnt de eigen 404-pagina met menu, voettekst en drie links; de links werken ook met het voorvoegsel `/ClaudeCode/`.
3. **Gegeven** een PR met een fout retraitebestand, **dan** wordt de controle rood met de Nederlandse foutmelding uit de build; **gegeven** een PR zonder fouten, **dan** wordt hij groen.
4. **Gegeven** een kapotte interne link (getest met een tijdelijke foute link), **dan** noemt de controle de pagina en de link.
5. Geen waarschuwingen meer over verouderde Node-versies in de workflowlogs.
6. De README beschrijft de drie handmatige stappen in gewone taal.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| 404-tekst | "Deze pagina bestaat niet (meer). Misschien vind je wat je zoekt via een van deze links." | Concept |
| Tijdstip herbouw | 04:00 Nederlandse tijd | Voorstel |

## Technische aanpak (kort)
- `.github/workflows/pages.yml`: `schedule` erbij, versies bijwerken
- `.github/workflows/controle.yml` (nieuw) met een klein Node-script `lib/controle.js` voor de linkcontrole (geen extra pakketten)
- `src/404.md` met `permalink: /404.html`
- `README.md`

## Open vragen voor Daan
1. Is één keer per nacht genoeg? (Vaker kan, maar levert niets op: datums veranderen per dag.)
2. Wil je dat ik de handmatige GitHub-stappen in deze story uitvoer (via de GitHub-koppeling), of doe je ze liever zelf?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
