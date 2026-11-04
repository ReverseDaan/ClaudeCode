# 029 — Een eigen overgang tussen pagina's per stijl

**Status:** Gebouwd — ter review
**Bron:** Daan, 4 nov 2026: de overgang uit story 027 voelt als vertraging, niet als animatie
**Afhankelijk van:** 027 (View Transitions)

## Story
Als **bezoeker die door de site klikt**
wil ik **een overgang die duidelijk beweegt en kort is, in plaats van een trage vervaging**
zodat **de site levendig en vloeiend voelt en niet traag**.

## Context
De vervaging van 0,6 seconde uit story 027 start pas als de nieuwe pagina geladen is, en omdat de pagina's op elkaar lijken, zie je vooral wachten. Daan wil vier verschillende animaties, één per stijl, zodat ze vergeleken kunnen worden en de beste later blijft.

## Scope
**Wel:**
1. **Bos: penseelstreek.** De nieuwe pagina wordt van links naar rechts "overgeschilderd": een rand met de vorm van een penseelstreek veegt over het scherm en laat de nieuwe pagina achter zich zien.
2. **Zand: bladzijde omslaan.** De oude inhoud schuift naar links weg, de nieuwe komt van rechts. Ga je terug (terugknop, of naar een pagina die eerder in het menu staat), dan gaat het andersom.
3. **Penseel & papier: ademhaling.** De oude pagina zoomt een fractie weg en vervaagt snel, de nieuwe komt van iets kleiner naar normaal.
4. **Ochtend: vel papier.** De nieuwe pagina schuift als een vel papier van onderen omhoog over de oude, met een zachte schaduw aan de bovenrand.
5. Alle overgangen duren ongeveer 0,45 seconde (de 0,6 seconde uit story 027 vervalt).
6. Bovenbalk, voettekst en stijlknop blijven bij alle vier stilstaan.
7. Met "minder beweging": in alle stijlen alleen een korte vervaging van 0,12 seconde.
8. Pagina's worden nog steeds alvast opgehaald (story 027), zodat de overgang meteen kan beginnen.

**Niet:**
- Andere animaties binnen een pagina

## Acceptatiecriteria
1. **Gegeven** elke stijl, **wanneer** ik van Home naar Wat en waarom klik, **dan** zie ik de animatie van die stijl (schermafbeeldingen halverwege de overgang, per stijl).
2. **Gegeven** Zand, **wanneer** ik van Wat en waarom terug naar Home ga (menu of terugknop), **dan** schuift de pagina de andere kant op.
3. De overgang duurt ongeveer 0,45 seconde.
4. Bovenbalk, voettekst en stijlknop bewegen niet.
5. **Gegeven** "minder beweging", **dan** alleen een korte vervaging.
6. Geen CSP-meldingen en geen JavaScript-fouten; browsers zonder View Transitions laden gewoon de pagina.

## Technische aanpak (kort)
- `src/css/style.css`, sectie 14: per thema de animaties van `::view-transition-old(root)` en `::view-transition-new(root)`; de penseelstreek is een SVG-masker (data-URL) dat over het scherm schuift
- Richting bij Zand: `src/js/vooraf.js` voegt bij het tonen van de nieuwe pagina (`pagereveal`) het type `terug` toe aan de overgang als je naar een pagina gaat die eerder in het menu staat of minder diep ligt; de CSS draait dan de richting om (`:active-view-transition-type(terug)`)
- Controle: build, Controle-workflow, schermafbeeldingen tijdens de overgang per stijl

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (4 nov 2026)
Echte Eleventy-build in GitHub Actions (tijdelijke testworkflow, daarna verwijderd), de workflow Controle, en de build in Chromium 153, ook op 8% snelheid opgenomen om de beweging te zien.

| # | Resultaat |
|---|---|
| 1 | ✅ Bos: de nieuwe pagina wordt met een golvende penseelrand van links naar rechts overgeschilderd. Zand: de oude pagina schuift naar links weg, de nieuwe komt van rechts. Penseel & papier: zoomt een fractie weg en de nieuwe ademt in. Ochtend: de nieuwe pagina schuift als een vel van onderen omhoog |
| 2 | ✅ Type "terug" bij: menu naar een eerdere pagina, en terugknop. Niet bij: vooruit in het menu, en van Retraites naar een retraite. In Zand draait de richting dan om |
| 3 | ✅ Gemeten van begin tot eind 0,43 tot 0,59 s (0,45 s animatie plus de tijd van de browser) |
| 4 | ✅ Bovenbalk, voettekst en stijlknop staan stil (te zien in de opname) |
| 5 | ✅ Met "minder beweging": korte vervaging, klaar na ca. 0,27 s |
| 6 | ✅ 0 CSP-meldingen, 0 JavaScript-fouten |

De vervaging van 0,6 s uit story 027 is vervangen door deze vier overgangen. Het alvast ophalen van pagina's uit 027 blijft.
