# 013 — Veelgestelde vragen

**Status:** Gebouwd — ter review
**Bron:** brochure 2025, deelnemersmails en feedback editie 1 (bijv. de tip over teken)
**Afhankelijk van:** geen

## Story
Als **bezoeker met een praktische vraag**
wil ik **de antwoorden op veelgestelde vragen op één plek vinden**
zodat **ik niet hoef te mailen voor iets wat al bekend is**.

## Scope
**Wel:**
- Een pagina `/vragen/` "Veelgestelde vragen", **niet in het hoofdmenu** (het menu ligt vast), maar gelinkt vanuit de voettekst (Snelle links), Aanmelden en Contact
- Vragen als uitklapblokken, in groepen:
  - *Meedoen*: ervaring nodig? alleen komen? leeftijd? taal (Nederlands)?
  - *Tijdens de retraite*: hoe stil is het? telefoon? wat eet je? wat als ik iets niet wil meedoen (veel is optioneel)?
  - *Praktisch*: wat neem ik mee (link naar de eventpagina, story 008)? slapen (gedeelde kamers)? teken in het bos (tip uit de feedback)?
  - *Aanmelden en betalen*: is aanmelden een boeking? (nee) wanneer betaal ik? annuleren? → verwijzing naar de voorwaarden ("volgt")
- Vragen en antwoorden in `src/_data/vragen.yaml`, zodat jullie ze makkelijk aanpassen

**Niet:** zoekfunctie; antwoorden over zaken die nog niet vastliggen (annuleringsregels, maaltijden in het voorjaar): daar staat "volgt"

## Acceptatiecriteria
1. `/vragen/` bestaat, met de groepen hierboven, uitklapbaar zonder JavaScript en met het toetsenbord.
2. Links in de voettekst, op Aanmelden en op Contact.
3. Een nieuwe vraag in `vragen.yaml` verschijnt vanzelf.
4. Geen antwoorden die iets beloven wat nog niet vastligt; die staan op "volgt".
5. Werkt op 375 px, contrast in orde.

## Open vragen voor Daan
1. Is de voertaal in het voorjaar Nederlands? (In 2025 waren de tekensessies in het Engels.)
2. Is er een minimum- of maximumleeftijd?
3. Kloppen "gedeelde kamers" en "telefoon in een doos tijdens de retraite" ook voor 't Zonnehuis?

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
| 1 | ✅ `/vragen/` met vier groepen en 14 vragen, uitklapbaar zonder JavaScript en met het toetsenbord |
| 2 | ✅ Links in de voettekst, op Aanmelden en op Contact; niet in het hoofdmenu |
| 3 | ✅ Een nieuwe vraag in `vragen.yaml` verschijnt vanzelf |
| 4 | ✅ Minimumleeftijd, taal, eten en annuleren staan op "volgt" |
| 5 | ✅ 375 px, contrast in orde |
