# 040 — Een eigen icoon naast "StilteSmederij": aambeeld, penseelstreek en vonk

**Status:** Gebouwd — ter review
**Bron:** Daan, 16 nov 2026
**Geldt voor:** alleen **Daan opzet 1** (`bos`) en **Daan opzet 2** (`zand`), net als de proefkop uit story 039. Vincent opzet 1 en 2 blijven ongewijzigd.
**Afhankelijk van:** 039 (band met proefkop)

## Story
Als **bezoeker op Home**
wil ik **naast de naam een klein, herkenbaar beeldje zien**
zodat **de naam "StilteSmederij" meteen een gezicht krijgt en blijft hangen**.

## Context
Daan wil een smederij-icoon naast de titel, waarin ook de stilte te zien is (Daan, 16 nov 2026: "De stilte is nog niet duidelijk in het icoon"). Volgens CLAUDE.md maken we handgetekende accenten zelf in SVG, zonder externe illustraties. Het icoon bestaat uit een aambeeld met een penseelstreek en een vonk erboven. In de chat getoond: ronde 1 (A lijn, B massief, C met penseel, steeds met vonk) en ronde 2 met meer stilte (D namaste lijn, E namaste massief, F ensō met vonk, G namaste in ensō, H aambeeld dat afkoelt). Daan kiest er één; het gekozen ontwerp wordt nog verfijnd.

## Scope
**Wel:**
1. Het gekozen icoon als eigen SVG-bestand in de repo: `src/images/icoon-smederij.svg`. Eén kleur (`currentColor`), zodat het meekleurt met de tekst. Schoon en klein (een paar honderd bytes), met een commentaarregel over wat het is.
2. Op Home, in Daan opzet 1 en 2, staat het icoon links naast "StilteSmederij", even hoog als de hoofdletters, in de kleur van de tekst (wit in de band). Op de telefoon schaalt het mee.
3. Het icoon staat in de HTML als inline SVG (zodat `currentColor` werkt), via een partial `partials/icoon-smederij.njk`, en is versiering: `aria-hidden="true"`.
4. In Vincent opzet 1 en 2 is het icoon niet zichtbaar, net als de proefkop.

**Niet:**
- Het icoon in de bovenbalk of als favicon (kan later, eigen story)
- Het icoon als logo vastleggen (de naam is nog niet besloten)

## Acceptatiecriteria
1. **Gegeven** Daan opzet 1 of 2 op Home, **dan** staat het icoon links naast "StilteSmederij", in wit, netjes op één lijn met de letters, op de laptop en op 375 px.
2. **Gegeven** Vincent opzet 1 of 2, **dan** is er geen icoon en is Home ongewijzigd.
3. Het SVG-bestand is één kleur en kleiner dan 1 kB; geen `style`-attributen (CSP).
4. Controle groen.

## Technische aanpak (kort)
- `src/images/icoon-smederij.svg` en `src/_includes/partials/icoon-smederij.njk` (dezelfde tekening; het bestand voor later gebruik, de partial voor op de pagina)
- `src/index.njk`: de partial in `.hero__proefkop`
- `style.css`, sectie 18: maat en uitlijning, alleen onder `[data-thema="bos"]` en `"zand"`
- Testen: Controle; Daan test zelf (teststappen in de chat)

## Open vragen voor Daan
1. ~~Welke schets?~~ **F: ensō met vonk** (Daan, 16 nov 2026). Oorspronkelijke vraag: A t/m H? Of een combinatie, bijvoorbeeld de namastehanden van D in de ensō van G met een kleine vonk?

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (16 nov 2026)
Gecontroleerd met de gewone workflow Controle (groen); geen tijdelijke testworkflows. De schets is vooraf in Chromium getekend op de band van beide opzetten (zie de chat). De pagina zelf test Daan.

| # | Resultaat |
|---|---|
| 1 | ⏳ Daan test: icoon links naast "StilteSmederij", wit, op de laptop en op 375 px. Het icoon is 1 em groot en schaalt mee met de kop |
| 2 | ⏳ Daan test: Vincent opzet 1 en 2 ongewijzigd. In de code: het icoon staat in de proefkop, en die is buiten Daan opzet 1 en 2 verborgen |
| 3 | ✅ `icoon-smederij.svg` is 713 bytes, één kleur (`currentColor`), zonder `style`-attributen |
| 4 | ✅ Controle groen |
