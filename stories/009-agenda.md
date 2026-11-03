# 009 — "Zet in je agenda" per retraite

**Status:** Gebouwd — ter review
**Bron:** idee Daan/Claude (3 nov 2026), onder "Praktisch voor wie zich aanmeldt"
**Afhankelijk van:** 008 (eventpagina)

## Story
Als **iemand die interesse heeft in een retraite**
wil ik **de data met één klik in mijn agenda zetten**
zodat **ik de datum vrijhoud terwijl ik erover nadenk**.

## Scope
**Wel:**
- Bij het bouwen maakt de site per komende retraite een agenda-bestand (`.ics`), bijv. `/retraites/2027-04-voorjaar.ics`, met titel, begin- en einddatum (hele dagen), locatie en een link naar de eventpagina
- Een knop **"Zet in je agenda"** op de eventpagina
- Werkt met Apple Agenda, Google Agenda en Outlook (standaard-ics, hele dagen, Nederlandse tijdzone niet nodig)
- Bij `bevestigd: false` staat "(onder voorbehoud)" in de titel van het agenda-item

**Niet:** een link "toevoegen aan Google Agenda" via de site van Google; herinneringen

## Acceptatiecriteria
1. **Gegeven** de voorjaarsretraite, **dan** bestaat `/retraites/2027-04-voorjaar.ics` en valideert die als geldig iCalendar-bestand (één `VEVENT`, `DTSTART;VALUE=DATE:20270425`, einddatum de dag ná 29 april zoals iCalendar voorschrijft).
2. **Gegeven** de knop op de eventpagina, **wanneer** ik erop klik, **dan** biedt mijn telefoon of computer aan het item aan de agenda toe te voegen.
3. Een nieuwe retraite krijgt vanzelf een eigen agenda-bestand.
4. Er staan geen persoonsgegevens in het bestand; wel het gedeelde mailadres als organisator.

## Technische aanpak (kort)
- Eén Nunjucks-sjabloon dat met Eleventy-paginering per retraite een `.ics` schrijft
- Controle: het bestand valideren met een iCalendar-parser in de testworkflow, en openen op een telefoon na de merge

## Open vragen voor Daan
- Geen.

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (3 nov 2026)
Echte Eleventy-build in GitHub Actions met tijdelijke testbestanden (testworkflow daarna verwijderd), en diezelfde build in Chrome op 375 px in alle vier de thema's.

| # | Resultaat |
|---|---|
| 1 | ✅ `/retraites/2027-04-voorjaar.ics` geldig volgens een iCalendar-parser: één VEVENT, start 2027-04-25, eind 2027-04-30 (dag na de laatste dag), locatie en link kloppen; CRLF-regeleinden |
| 2 | ✅ Knop "Zet in je agenda" op de eventpagina; bestand wordt geserveerd als `text/calendar` (op een telefoon openen na de merge) |
| 3 | ✅ Een nieuwe retraite krijgt vanzelf een bestand; voorbije retraites niet |
| 4 | ✅ Geen persoonsgegevens; alleen het gedeelde mailadres als organisator |
