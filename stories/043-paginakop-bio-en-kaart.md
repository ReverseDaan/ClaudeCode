# 043 — Paginakop in de bandkleur, bio met "Lees verder", kaart naast tekst, en de nieuwe prijs

**Status:** Concept
**Bron:** Daan, 24 nov 2026, naar aanleiding van de test van Daan opzet 1 en 2 (punt 4, 5, 8 en 9) en de schetsen in de chat
**Geldt voor:** zie per onderdeel. De opmaak (A, B en C) geldt alleen voor **Daan opzet 1** (`bos`) en **Daan opzet 2** (`zand`); de prijs (D) is inhoud en geldt overal.
**Afhankelijk van:** 039, 041, 042

## Story
Als **bezoeker van de site**
wil ik **dat elke pagina dezelfde herkenbare stijl heeft als Home, en dat lange teksten me niet overspoelen**
zodat **de site als één geheel voelt en ik makkelijk vind wat ik zoek**.

## Scope
**Wel:**

*A. Home (Daan opzet 1 en 2)*
1. "Even uit de drukte" staat links uitgelijnd, gelijk met de andere delen van Home (nu een smalle, gecentreerde kolom).
2. Eerstvolgende retraite volgens **voorstel A** uit de schets (zie open vraag 1): op de laptop staat de kaart links en rechts een kort blok "Nog even twijfelen?" met een zin, de knop "Bekijk de kalender" (omlijnd) en een link naar Veelgestelde vragen. Op de telefoon staat het blok onder de kaart. De tekst komt in `home.yaml`.

*B. Paginakop in de bandkleur (Daan opzet 1 en 2), punt 8 uit de test*
3. Op alle pagina's behalve Home staat de kop (titel en intro) in een gekleurd vlak in de bandkleur: zeegroen in opzet 1, roestbruin in opzet 2. De titel en intro zijn wit.
4. Op de subpagina's van Over ons staat erboven klein "OVER ONS".
5. Het vlak is lager dan de band op Home en heeft geen collage of foto.

*C. Bio met "Lees verder" (Daan opzet 2), punt 9 uit de test*
6. Bij de lange bio (versie 2) staat standaard alleen de eerste alinea, met daaronder "Lees verder". Klik je erop, dan zie je de hele tekst en "Minder tonen". Dat werkt zonder JavaScript (`<details>`).
7. Dit geldt overal waar de kaart staat (Even kennismaken, Over de stichting, de retraitepagina).

*D. Prijs voorjaarsretraite (alle opzetten)*
8. De prijs wordt **€ 650**. De toelichting "werkprijs, nog niet definitief" verdwijnt uit het bestand; er komt geen "onder voorbehoud" op de site (Daan, 24 nov 2026). De datum 25–29 april 2027 klopt al.

**Niet:**
- Vincent opzet 1 en 2 (behalve de prijs)
- De bio's of andere teksten herschrijven

## Acceptatiecriteria
1. **Gegeven** Home in Daan opzet 1 of 2, **dan** staat "Even uit de drukte" links, en op de laptop staan naast de kaart van de retraite de zin, de knop naar de kalender en de link naar Veelgestelde vragen; op 375 px staat dat blok eronder.
2. **Gegeven** een andere pagina dan Home in Daan opzet 1 of 2, **dan** staat de titel wit in een vlak in de bandkleur; op Even kennismaken, Ons aanbod en Over de stichting staat er "OVER ONS" boven.
3. **Gegeven** Daan opzet 2, **dan** toont Daans kaart de eerste alinea met "Lees verder"; na een klik de hele tekst. Met het toetsenbord werkt het ook.
4. **Gegeven** Vincent opzet 1 of 2, **dan** is alles ongewijzigd, behalve de prijs.
5. De prijs is overal € 650 (Home, Kalender, retraitepagina, gegevens voor zoekmachines).
6. Contrast ≥ 4,5:1 (wit op de bandkleur 6,3:1 en 8,5:1); 0 CSP-meldingen; Controle groen; geen horizontaal scrollen.

## Technische aanpak (kort)
- `style.css`: alles onder `[data-thema="bos"]` en `"zand"`; `.pagina__kop` in `--band`; `.home-intro` links; een raster voor de kaart en het blok ernaast
- `index.njk` en `home.yaml`: het blok "Nog even twijfelen?" (gedeelde structuur; in Vincents opzetten verborgen)
- `pagina.njk`: het kleine "OVER ONS" boven de titel van de subpagina's (via een veld `boven` in de front matter; in Vincents opzetten verborgen)
- `personen-lijst.njk`: versie 2 van de bio in `<details>`
- `src/retraites/2027-04-voorjaar.md`: prijs 650
- Testen: Controle; daarna de live site in de ingebouwde browser (Daan opzet 1 en 2, laptop en telefoon), zoals bij de vorige test

## Open vragen voor Daan
1. **Kaart: voorstel A (kaart links, tekst rechts) of B (kaart in het midden)?** Je hebt nog niet gekozen. A past het best bij de links uitgelijnde opmaak van de rest van Home, dus ik heb A ingevuld.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
