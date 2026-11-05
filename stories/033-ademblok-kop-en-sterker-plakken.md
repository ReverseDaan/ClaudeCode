# 033 — Ademblok: kop wisselt na de adempauze, en de pagina plakt steviger

**Status:** Goedgekeurd (Daan, 5 nov 2026)
**Bron:** Daan, 5 nov 2026, review van story 032
**Afhankelijk van:** 032 (ademblok en plakkend scrollen)

## Story
Als **bezoeker op Home**
wil ik **dat na de adempauze het gewone blok "Even uit de drukte" terugkomt, en dat de pagina op de laptop duidelijk van deel naar deel springt**
zodat **de adempauze voelt als een moment dat voorbijgaat, en elk deel echt een eigen scherm is**.

## Context
In story 032 blijft de kop "De kracht van een korte adempauze" staan nadat de cirkel weg is. Daan wil dat die kop dan verdwijnt en dat het oorspronkelijke blok terugkomt, met de kop "Even uit de drukte". Daarnaast voelt het plakken met `proximity` te veel als gewoon scrollen: de pagina plakt alleen als je toevallig vlak bij het begin van een deel stopt.

## Scope
**Wel:**

*A. Kop wisselt*
1. Tijdens het wachten en het ademen staat er "De kracht van een korte adempauze".
2. Na de derde ademhaling vervagen de kop en de cirkel samen. Daarna verschijnt het oorspronkelijke blok: de kop "Even uit de drukte", de twee alinea's en de knop "Adem nog een keer".
3. "Adem nog een keer": "De kracht van een korte adempauze" komt terug met de cirkel, en na de drie ademhalingen weer "Even uit de drukte".
4. Zonder JavaScript of met "minder beweging" staat er meteen "Even uit de drukte" met de tekst, net als vóór story 032. Zoekmachines en schermlezers krijgen ook die kop.
5. Beide koppen staan in `home.yaml`: `kop: "Even uit de drukte"` en een nieuw veld `ademkop: "De kracht van een korte adempauze"`.

*B. Steviger plakken (alleen Home, alleen vanaf 1024 px)*
6. `scroll-snap-type: y mandatory` in plaats van `proximity`. Waar je ook stopt met scrollen, de pagina glijdt altijd naar het begin van het dichtstbijzijnde deel. Je stopt nooit meer halverwege tussen twee delen.
7. Elk deel past op de laptop (1280 × 800 en 1440 × 900) binnen één scherm. Is een deel toch hoger (bijv. een klein laptopscherm), dan kun je er in de browser gewoon doorheen scrollen.
8. Telefoon, andere pagina's en "minder beweging": geen plakken, zoals nu.

**Niet:**
- Scrollen overnemen met JavaScript (één wieltik = één deel). Dat voelt nog strakker, maar kost veel code. Het werkt ook slecht met touchpads, toetsenbord en schermlezers (zie open vraag 1).

## Acceptatiecriteria
1. **Gegeven** het ademblok in beeld, **dan** staat er "De kracht van een korte adempauze" tijdens het ademen. Daarna zie je "Even uit de drukte" met de tekst en de knop, en is de eerste kop weg (opname ter review).
2. **Gegeven** "Adem nog een keer", **dan** komen de ademkop en de cirkel terug, en daarna weer "Even uit de drukte".
3. **Gegeven** "minder beweging" of geen JavaScript, **dan** zie je alleen "Even uit de drukte" met de tekst. Er is geen cirkel en geen knop, en de gebouwde HTML heeft "Even uit de drukte" als kop.
4. **Gegeven** 1280 en 1440 px, **wanneer** ik halverwege tussen twee delen stop met scrollen, **dan** glijdt de pagina altijd naar het begin van een deel. Geen enkel deel wordt onleesbaar of afgesneden.
5. **Gegeven** 375 px of een andere pagina, **dan** is er geen plakken.
6. Contrast ≥ 4,5:1 in alle stijlen; 0 CSP-meldingen; Controle groen.

## Technische aanpak (kort)
- `home.yaml`: veld `ademkop` erbij; `kop` wordt weer "Even uit de drukte"
- `ademblok.njk`: één `<h2>` met "Even uit de drukte". De ademkop is een aparte regel die alleen zichtbaar is tijdens het ademen (voor schermlezers verborgen, net als de cirkel)
- `style.css`: ademkop en cirkel samen weg en kop en tekst samen op; `proximity` wordt `mandatory`; hoogtes nalopen op 1280 × 800
- `landschap.js`: geen wijziging verwacht (de toestanden wacht, ademt en klaar blijven)

## Open vragen voor Daan
1. ~~Mandatory of één deel per scrollbeweging?~~ Eerst `mandatory` proberen (Daan, 5 nov 2026). Oorspronkelijke vraag: is `mandatory` (de browser glijdt altijd naar een deel) wat je bedoelt met "meer geforceerd"? Het alternatief is dat elke scrollbeweging precies één deel verder springt, zoals een presentatie. Dat vraagt JavaScript dat het scrollen overneemt. Mijn advies is `mandatory`; als dat na het testen nog te vrij voelt, kunnen we het alternatief in een aparte story proberen.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
