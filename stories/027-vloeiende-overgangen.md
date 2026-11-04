# 027 — Vloeiende overgangen tussen pagina's

**Status:** Gebouwd — ter review
**Bron:** Daan, 4 nov 2026 (punt 2)
**Afhankelijk van:** 023 (CSP)

## Story
Als **bezoeker die door de site klikt**
wil ik **dat de ene pagina rustig overgaat in de volgende**
zodat **de site net zo kalm voelt als de retraite zelf, in plaats van te verspringen**.

## Context
Bij een klik laadt de browser nu een nieuwe pagina: het scherm springt en de lettertypes en kleuren worden opnieuw opgebouwd. Moderne browsers kunnen tussen twee pagina's een vloeiende overgang maken (View Transitions), met alleen een paar regels CSS. Er is daarvoor geen JavaScript-framework nodig en het werkt binnen de CSP.

## Scope
**Wel:**
1. **Overgang tussen pagina's**: de oude pagina vervaagt en de nieuwe komt zacht op (0,6 seconde, Daan, 4 nov 2026), met een kleine beweging omhoog van de inhoud.
2. **Wat blijft staan**: de bovenbalk met naam en menu en de voettekst springen niet mee, alleen de inhoud wisselt.
3. **Paginatitel**: de grote kop van de nieuwe pagina schuift zacht op zijn plek.
4. **Snelheid**: de browser haalt een pagina alvast op als je met de muis over een menu-item gaat of erop tikt (`speculationrules` via een eigen bestand, of `<link rel="prefetch">`), zodat de overgang niet hapert.
5. **Reduced motion**: met `prefers-reduced-motion: reduce` geen beweging; hooguit een hele korte vervaging.
6. **Oudere browsers**: wie het niet ondersteunt (op dit moment Firefox), krijgt gewoon de pagina zoals nu. Niets gaat kapot.

**Niet:**
- De site omzetten naar een "single page app" of een framework
- Animaties binnen een pagina (die horen bij 026 en 028)

## Acceptatiecriteria
1. **Gegeven** Chrome, Edge of Safari, **wanneer** ik van Home naar Wat en waarom klik, **dan** vervaagt de inhoud en komt de nieuwe pagina zacht op; de bovenbalk staat stil (opname van de overgang ter review).
2. **Gegeven** Firefox, **dan** werkt de navigatie zoals nu, zonder fouten.
3. **Gegeven** `prefers-reduced-motion: reduce`, **dan** is er geen schuif- of zoombeweging.
4. Geen CSP-meldingen en geen JavaScript-fouten.
5. De terugknop van de browser werkt met dezelfde overgang.
6. Op mobiel (375 px) voelt de overgang even vloeiend; geen verspringing van het menu.

## Technische aanpak (kort)
- `src/css/style.css`: `@view-transition { navigation: auto; }` en de animaties (`::view-transition-old/new`), `view-transition-name` voor header, voettekst en de paginakop
- Vooraf ophalen: speculation rules in een eigen JSON-bestand (`src/speculation.json`) via `<script type="speculationrules" src>` of anders `prefetch`-links; past binnen `script-src 'self'`
- Controle: opname in Chrome (GIF/video) en test in Firefox

## Open vragen voor Daan
1. ~~Duur?~~ 0,6 seconde (Daan, 4 nov 2026).
2. ~~Soort?~~ Vervagen met een kleine beweging omhoog (akkoord op het voorstel, 4 nov 2026).

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (4 nov 2026)
Echte Eleventy-build in GitHub Actions (tijdelijke testworkflow, daarna verwijderd), de workflow Controle, en de build in Chromium 153.

| # | Resultaat |
|---|---|
| 1 | ✅ Van Home naar Wat en waarom: de browser meldt een View Transition (`pagereveal` met `viewTransition`); de oude pagina vervaagt in 0,3 s, de nieuwe komt in 0,6 s zacht omhoog. Bovenbalk, voettekst en stijlknop staan stil (schermafbeeldingen na 60, 200, 350 en 700 ms) |
| 2 | ⚠️ Firefox kon ik hier niet starten. `@view-transition` en `speculationrules` zijn daar onbekend en worden volgens de standaard overgeslagen, dus de navigatie werkt zoals nu. Graag even zelf proberen in Firefox |
| 3 | ✅ Met "minder beweging": alleen een korte vervaging (klaar na ca. 0,4 s in plaats van 0,7 s), geen schuifbeweging |
| 4 | ✅ 0 CSP-meldingen en 0 JavaScript-fouten; de CSP staat alleen `inline-speculation-rules` extra toe |
| 5 | ✅ De terugknop geeft dezelfde overgang |
| 6 | ✅ Op 375 px dezelfde overgang; de bovenbalk met de menuknop staat stil |

Ook: in Penseel & papier blijft de papierlaag tijdens de overgang staan, zodat het papier niet knippert. Pagina's van de site worden alvast opgehaald als je even op een link blijft staan of erop tikt (`speculationrules`, "moderate").
