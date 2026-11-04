# 030 — Eén overzicht van retraites, minder lege ruimte op de laptop, en een echt penseel

**Status:** Concept
**Bron:** Daan, 4 nov 2026: "Retraites" en "Kalender" zijn dubbel; op de laptop te veel witruimte; de overgang bij Penseel & papier met een echt penseel
**Afhankelijk van:** 004 (retraites en kalender), 029 (overgangen)

## Story
Als **bezoeker op een laptop**
wil ik **één duidelijke plek met alle retraites, een pagina die de breedte van mijn scherm benut, en bij Penseel & papier een penseel dat de pagina schildert**
zodat **het menu helder is, de site op een groot scherm net zo goed oogt als op mijn telefoon, en de overgang echt "geschilderd" voelt**.

## Context
"Retraites en events" en "Kalender" tonen precies dezelfde retraites; alleen de indeling per maand verschilt. Daarom vervalt "Retraites" en blijft "Kalender" het overzicht. Daarnaast is de tekstkolom op een laptop smal (38rem, ca. 600 px) en staat hij links, met een grote lege ruimte rechts. Op de telefoon is dat geen probleem.

## Scope
**Wel:**

*A. Menu-item "Retraites" en de pagina weg*
1. Het menu-item "Retraites" en de pagina `/retraites/` (`src/retraites.njk`) verdwijnen. Het menu wordt: Home · Wat en waarom · Kalender · Aanmelden · Veelgestelde vragen · Over de stichting · Contact.
2. Alle links naar `/retraites/` gaan naar `/kalender/`: de knop op Home ("Bekijk de retraites"), Wat en waarom, "Is dit iets voor mij?", de veelgestelde vragen, de 404-pagina en de link "← Alle retraites" op de pagina van een retraite (wordt "← Naar de kalender").
3. De kalender krijgt wat de retraitepagina nog extra had: de interesselijst onder de retraites (als die aan staat). De kop blijft "Kalender"; de intro wordt: "Alle komende retraites, per maand. Geen ervaring nodig: je hoeft niet te kunnen schilderen om mee te doen."
4. De pagina's van losse retraites verhuizen van `/retraites/<naam>/` naar `/kalender/<naam>/`, en de agenda-bestanden mee (`/kalender/<naam>.ics`), zodat de adressen kloppen met het menu (zie open vraag 1). De site is nog niet gelanceerd, dus er zijn geen oude links die breken.
5. Code die alleen voor de retraitepagina was, gaat weg; sitemap, README, CLAUDE.md en de Controle worden bijgewerkt.

*B. Minder witruimte op de laptop*
6. Maximale breedte van de inhoud van 72rem naar 80rem, en de zijmarge schaalt mee met het scherm (op de telefoon gelijk aan nu, op een laptop ruimer, maar niet meer dan 3rem).
7. De tekstkolom van 38rem naar 44rem (ca. 700 px; nog prettig leesbaar, rond 75 tekens per regel).
8. Op schermen vanaf 1024 px benutten pagina's de breedte beter (zie open vraag 2):
   - de kop van een pagina (titel en intro) en de tekst staan in dezelfde, gecentreerde kolom in plaats van links;
   - retraitekaarten op de kalender en de kaarten van begeleiders staan naast elkaar (twee kolommen) als er meer dan één is;
   - de feiten van een retraite (wanneer, waar, prijs, …) staan in een kolom naast de tekst in plaats van erboven.
9. Op de telefoon (375 px) verandert er niets.

*C. Penseel & papier: een echt penseel*
10. Bij een overgang tussen pagina's in Penseel & papier trekt een getekend penseel (steel, ferrule, haren, in SVG) van links naar rechts over het scherm. Achter het penseel verschijnt de nieuwe pagina, alsof hij wordt geschilderd: de rand van de nieuwe pagina is een natte verfstreek in vermiljoen die het penseel achterlaat. Duur ongeveer 0,6 seconde.
11. Dit vervangt de "ademhaling" van story 029 voor deze stijl; de andere drie stijlen houden hun overgang.
12. Met "minder beweging": geen penseel, alleen de korte vervaging.

**Niet:**
- De kalender een maandraster geven (US-10, later)
- Andere stijlen of het landschap op Home aanpassen

## Acceptatiecriteria
1. Het menu heeft zeven items, zonder "Retraites"; `/retraites/` bestaat niet meer en geeft de 404-pagina.
2. Geen enkele link op de site verwijst nog naar `/retraites/` (de Controle-workflow controleert dit); alle knoppen die naar de retraites wezen, openen de kalender.
3. De pagina van de voorjaarsretraite staat op `/kalender/2027-04-voorjaar/`, het agenda-bestand op `/kalender/2027-04-voorjaar.ics`, en beide staan correct in de sitemap en de evenementgegevens.
4. **Gegeven** een laptop van 1280 en 1440 px, **dan** staat de inhoud gecentreerd, is de tekstkolom ca. 700 px breed en staan kaarten in twee kolommen (schermafbeeldingen voor en na van Home, Wat en waarom, Kalender en een retraitepagina).
5. **Gegeven** 375 px, **dan** ziet elke pagina er hetzelfde uit als nu (pixelvergelijking) en is er geen horizontaal scrollen.
6. **Gegeven** Penseel & papier, **wanneer** ik naar een andere pagina klik, **dan** trekt er een penseel over het scherm met een vermiljoen verfstreek, en verschijnt de nieuwe pagina erachter (vertraagde opname ter review). Met "minder beweging": geen penseel.
7. Contrast ≥ 4,5:1 in alle stijlen; 0 CSP-meldingen; Controle groen.

## Technische aanpak (kort)
- `src/_data/site.yaml` (menu), `src/retraites.njk` weg, `src/kalender.njk`, links in `index.njk`, `wat-en-waarom.md`, `past-bij-mij.njk`, `vragen.yaml`, `404.md`, `layouts/retraite.njk`
- `src/retraites/retraites.json` en `src/agenda.njk`: nieuw adres onder `/kalender/`
- `lib/controle.js`: melding als er nog een link naar `/retraites/` staat
- `style.css`: breedtes, centreren, kaartgrid, feitenkolom
- Penseel: een vast SVG-element op elke pagina dat alleen tijdens een overgang zichtbaar is (`:active-view-transition`) en een eigen `view-transition-name` krijgt; de CSS laat het over het scherm bewegen, gelijk met een masker dat de nieuwe pagina laat verschijnen. Werkt dit in een browser niet, dan valt het terug op de gewone overgang
- Controle: build, Controle-workflow, schermafbeeldingen en een vertraagde opname

## Open vragen voor Daan
1. **Adressen**: de pagina's van losse retraites naar `/kalender/<naam>/` (voorstel, past bij het menu) of laten staan op `/retraites/<naam>/`?
2. **Breedte op de laptop**: de inhoud gecentreerd met een bredere kolom en kaarten naast elkaar (voorstel), of wil je de tekst links houden en alleen breder maken?
3. **Knop op Home**: de tekst "Bekijk de retraites" laten staan (hij opent dan de kalender), of "Bekijk de kalender"?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
