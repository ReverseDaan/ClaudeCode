# 032 — Ademblok op Home en rustig "plakkend" scrollen op de laptop

**Status:** Goedgekeurd (Daan, 5 nov 2026)
**Bron:** Daan, 5 nov 2026 (voorstel 2 uit de Home-voorstellen, en snap-scrollen)
**Afhankelijk van:** 020 (Home), 026 (landschap)

## Story
Als **bezoeker die net op de site komt**
wil ik **even met een rustige cirkel meeademen voordat ik iets lees, en per deel van de pagina rustig verder glijden**
zodat **ik meteen voel waar het bij jullie om gaat: vertragen**.

## Context
Daan wil op Home minder nadruk op het aanbod en meer op op je gemak voelen. Het blok "Even uit de drukte" wordt een ademblok: een cirkel die drie keer in- en uitademt, waarna de introductietekst verschijnt. Daarnaast voelt elk deel van Home op de laptop als een eigen scherm, waar de pagina zacht naartoe "plakt".

## Scope
**Wel:**

*A. Ademblok (op de plek van "Even uit de drukte")*
1. Kop vanaf het begin zichtbaar: **"De kracht van een korte adempauze"**.
2. Daaronder een cirkel die 3 seconden groter wordt (inademen) en 3 seconden kleiner (uitademen), drie keer achter elkaar (18 seconden). In de cirkel staat tijdens het inademen "in…" en tijdens het uitademen "uit…".
3. De animatie start pas als het blok voor het grootste deel in beeld is, en maar één keer per bezoek aan Home.
4. Na de drie ademhalingen verdwijnt de cirkel en verschijnt rustig de tekst die nu onder "Even uit de drukte" staat ("Een paar dagen weg uit de drukte …" en "Je hoeft niet te kunnen tekenen …").
5. De tekst staat vanaf het begin in de HTML, zodat schermlezers en zoekmachines hem altijd hebben; alleen het zichtbaar worden wacht op de ademhaling.
6. Zonder JavaScript of met "minder beweging": geen animatie en geen cirkel; de tekst is meteen zichtbaar (zelfde eindtoestand als na de ademhaling).
6b. Onder de tekst een knop "Adem nog een keer": de tekst maakt plaats voor de cirkel, die opnieuw drie keer ademt (Daan, 5 nov 2026). De knop is er alleen als de animatie kan draaien.
7. Kleuren van cirkel en tekst volgen de stijl (alle vier).
8. Teksten ("De kracht van een korte adempauze", "in…", "uit…") in `home.yaml`.

*B. Plakkend scrollen (alleen Home, alleen laptop)*
9. Vanaf 1024 px breed is elk deel van Home (landschap, ademblok, stappen, eerstvolgende retraite, ervaringen, verder kijken) ten minste één scherm hoog, met de inhoud verticaal in het midden.
10. Scrollen gaat vloeiend; de pagina "plakt" aan het begin van een deel als je daar in de buurt stopt (`scroll-snap-type: y proximity`). Scrol je verder, dan glijd je naar het volgende of vorige deel. Je kunt altijd vrij scrollen en lezen, ook als een deel hoger is dan het scherm.
11. Op telefoon en tablet (onder 1024 px) en op andere pagina's dan Home: gewoon scrollen zoals nu.
12. Met "minder beweging": geen vloeiend scrollen en geen plakken.
13. De vaste bovenbalk valt niet over het begin van een deel heen (`scroll-padding-top`).

**Niet:**
- De andere Home-voorstellen (geruststelling, aanbod lager, wie je ontmoet, vorige editie): later, eigen story
- Andere pagina's

## Acceptatiecriteria
1. **Gegeven** Home, **dan** staat op de plek van "Even uit de drukte" de kop "De kracht van een korte adempauze" met de cirkel eronder; "Even uit de drukte" staat er niet meer.
2. **Gegeven** het ademblok in beeld, **dan** ademt de cirkel 3 × (3 s in, 3 s uit) met "in…" en "uit…", en verschijnt daarna de introductietekst (opname ter review). Zolang het blok niet in beeld is geweest, start de animatie niet.
3. **Gegeven** "minder beweging" of geen JavaScript, **dan** is de tekst meteen zichtbaar, is er geen cirkel en geen knop.
3b. **Gegeven** de knop "Adem nog een keer", **dan** ademt de cirkel opnieuw drie keer en verschijnt daarna de tekst weer.
4. De introductietekst staat altijd in de HTML (ook vóór de animatie klaar is).
5. **Gegeven** een laptop (1280 en 1440 px), **dan** is elk deel van Home minstens één scherm hoog en plakt de pagina aan het begin van een deel als je in de buurt stopt; een deel dat hoger is dan het scherm is helemaal te lezen.
6. **Gegeven** 375 px of een andere pagina dan Home, **dan** geen plakken en geen schermhoge delen (Home op 375 px ziet er boven het ademblok hetzelfde uit als nu).
7. Contrast ≥ 4,5:1 in alle stijlen; 0 CSP-meldingen; Controle groen; geen horizontaal scrollen.

## Technische aanpak (kort)
- `src/_data/home.yaml`: blok `adem` met kop, "in…", "uit…"; de bestaande introductietekst blijft
- `src/index.njk`: het blok "Even uit de drukte" vervangen door het ademblok (partial `partials/ademblok.njk`)
- `style.css`: de cirkel (CSS-animatie, 6 s per ademhaling, 3 keer), het verschijnen van de tekst, en de snap-regels alleen voor Home vanaf 1024 px
- `src/js/landschap.js` (draait al alleen op Home): start de ademhaling als het blok in beeld komt (IntersectionObserver) en laat daarna de tekst verschijnen
- `base.njk`/`vooraf.js`: een klasse op `<html>` voor Home zodat het plakken alleen daar geldt (bestaat al: `data-home`)
- Controle: build, Controle-workflow, vertraagde opname, schermafbeeldingen op 375/1280/1440 px in alle stijlen

## Open vragen voor Daan
1. ~~Na de ademhalingen?~~ De cirkel verdwijnt (Daan, 5 nov 2026).
2. ~~Knop?~~ Ja, "Adem nog een keer" (Daan, 5 nov 2026).

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
