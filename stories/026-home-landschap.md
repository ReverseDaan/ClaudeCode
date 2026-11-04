# 026 — Home: een getekend boslandschap met pad, en een penseelstreek die de naam schrijft

**Status:** Goedgekeurd (Daan, 4 nov 2026)
**Bron:** Daan, 4 nov 2026 (punten 1, 4 en 5); CLAUDE.md "Look & feel" (hoofdbeeld bosrijk, kunstaccenten zelf in SVG)
**Afhankelijk van:** 023 (CSP: geen inline stijlen of scripts)

## Story
Als **bezoeker die voor het eerst op de site komt**
wil ik **meteen in de natuur van de retraite stappen: bomen, een pad dat het bos in loopt en de naam die als met een penseel verschijnt**
zodat **ik de rust en de creatieve kant voel voordat ik iets heb gelezen**.

## Context
De hero op Home is nu een groen verloop met tekst, en dat oogt kaal. Daan wil een landschap: bomen aan de rechterkant, een pad in het midden en de tekst boven het pad. De vier stijlen mogen daarbij flink van elkaar verschillen, zodat de beste ideeën later kunnen worden samengevoegd. Foto's komen later; dit landschap is getekend (SVG) en kan straks met een foto worden gecombineerd of vervangen.

## Scope
**Wel:**
1. **Landschap in de hero**, opgebouwd uit lagen in SVG:
   - achter: lucht en verre heuvels;
   - rechts: een groep bomen (drie tot vijf, verschillend van hoogte), die ook een stukje in de hero doorlopen;
   - midden: een pad dat van onderen het landschap in slingert en in de verte smaller wordt;
   - de naam, de slogan en de knop staan boven het pad, in de lucht.
2. **Per stijl een eigen landschap** (dezelfde opbouw, eigen tekenstijl en kleuren):
   - **Bos**: diep bos met dennen, avondlicht, mosgroen en oker;
   - **Zand**: open heide en duinen met een paar losse bomen, warm zandlicht;
   - **Penseel & papier** (de vervanger van Groen & goud, zie story 028): bomen als losse, verzadigde penseeltoetsen op papier;
   - **Ochtend**: ochtendnevel tussen berken, licht en fris, met een opkomende zon.
3. **Penseelstreek die de naam schrijft**: bij het laden verschijnt de naam alsof hij met een penseel wordt geschreven (eerst de omtrek, dan vult de letter zich), daarna wordt er één penseelstreek onder de naam getrokken. Duur ongeveer 2 seconden. Alleen bij het eerste bezoek aan Home in een sessie en bij het verversen van de pagina; kom je via het menu terug op Home, dan staat de naam er meteen (Daan, 4 nov 2026).
4. **Zachte diepte**: alleen in de derde stijl (Penseel & papier) bewegen de lagen bij het scrollen een klein beetje ten opzichte van elkaar (parallax). De andere stijlen staan stil (Daan, 4 nov 2026).
5. **Mobiel**: op smalle schermen staan de bomen kleiner aan de rechterrand en blijft het pad in het midden; de tekst blijft goed leesbaar boven het pad.
6. **Wie minder beweging wil** (`prefers-reduced-motion`): geen animatie en geen parallax, de naam en de streek staan er meteen.
7. De naam komt uit `site.yaml` (`{{ site.naam }}`), ook in de animatie; er staat dus nergens een tekening van de naam.

**Niet:**
- Foto's (komen later)
- Andere pagina's dan Home (die volgen eventueel in een latere story, met dezelfde beeldtaal)
- De overgangen tussen pagina's (story 027) en het nieuwe thema zelf (story 028)

## Acceptatiecriteria
1. **Gegeven** Home in elk van de vier stijlen, **dan** zie je lucht, bomen aan de rechterkant, een pad in het midden en de tekst boven het pad, elk in de eigen stijl van dat thema (schermafbeelding per stijl, op 375 en 1280 px).
2. **Gegeven** de eerste keer laden of verversen, **dan** wordt de naam letter voor letter in ongeveer 2 seconden "geschreven" en verschijnt daarna de streek eronder; de knop is vanaf het begin klikbaar. **Gegeven** terugkomen op Home via het menu in dezelfde sessie, **dan** staat de naam er meteen.
3. **Gegeven** `prefers-reduced-motion: reduce`, **dan** is er geen animatie of parallax. Parallax is er alleen in de derde stijl.
4. **Gegeven** een andere naam in `site.yaml`, **dan** schrijft de animatie die nieuwe naam (getest met een testnaam).
5. De tekst in de hero heeft overal minstens 4,5:1 contrast met wat erachter ligt, in alle vier de stijlen.
6. Schermlezers lezen de naam één keer als kop (`<h1>`), het landschap is versiering (`aria-hidden`).
7. Geen horizontaal scrollen op 375 px; de hero laadt zonder externe bronnen en zonder CSP-meldingen.
8. De pagina blijft snel: het landschap is samen kleiner dan 30 kB en de animatie gebruikt alleen CSS (plus hooguit een paar regels JavaScript voor de parallax, in een eigen bestand).

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Landschap per stijl | Getekend in SVG | Tot er foto's zijn; daarna kiezen we samen of het blijft |

## Technische aanpak (kort)
- Nieuwe partial `partials/landschap.njk` met de SVG-lagen; per thema eigen vormen en kleuren via `[data-thema]` in CSS (vormen die per thema verschillen staan als aparte groepen, alleen de groep van het actieve thema is zichtbaar)
- Naam als SVG-tekst (`<text>`) met het koplettertype; "schrijven" met `stroke-dasharray`/`stroke-dashoffset` in CSS, daarna `fill` erin laten lopen; de echte `<h1>` blijft voor schermlezers en zoekmachines
- Parallax: klein script `src/js/landschap.js` (minder dan 30 regels), uit bij reduced motion
- `src/index.njk`, `src/css/style.css` (nieuwe sectie "Landschap")
- Controle: build, Controle-workflow, schermafbeeldingen per stijl, contrast- en CSP-controle

## Open vragen voor Daan
1. ~~Naam schrijven?~~ De letters worden echt geschreven (Daan, 4 nov 2026).
2. ~~Hoe vaak?~~ Bij het eerste bezoek aan Home en bij verversen (Daan, 4 nov 2026).
3. ~~Parallax?~~ Alleen in de derde stijl (Daan, 4 nov 2026).

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
