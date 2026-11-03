# 022 — Veelgestelde vragen opschonen, maaltijden invullen, vragen in het menu

**Status:** Concept
**Bron:** Daan, 3 nov 2026 (chat); stories 005, 006, 012, 013
**Afhankelijk van:** 013 (veelgestelde vragen), 012 (Is dit iets voor mij?)

## Story
Als **bezoeker met een praktische vraag**
wil ik **de veelgestelde vragen vanuit het menu kunnen vinden, met alleen vragen die er echt toe doen**
zodat **ik snel een antwoord vind zonder door overbodige vragen te lezen**.

## Context
Daan wil een kortere vragenlijst, een eigen menu-item ervoor, en de maaltijden concreet maken: inbegrepen en plantaardig. Ook komt het woord "oprichter" van de persoonskaarten af.

## Scope
**Wel:**
1. **Maaltijden**: in `2027-04-voorjaar.md` wordt "Maaltijden: volgt" → "Alle maaltijden, plantaardig".
2. **Rol bij Daan en Vincent**: "Oprichter en begeleider" → "Begeleider" (zie open vraag 1).
3. **Is dit iets voor mij?** (`pastbijmij.yaml`): "Ik vind stilte spannend" weg.
4. **Veelgestelde vragen** (`vragen.yaml`): weg zijn "Kan ik ook alleen komen?", "Hoe stil is het?", "Moet ik overal aan meedoen?", "Wat eten we?" en "Moet ik rekening houden met teken?".
5. **Nieuwe indeling** van de negen vragen die overblijven, in drie groepen:
   - **Meedoen**: Heb ik ervaring nodig met schilderen of mediteren? · Is er een minimumleeftijd? · In welke taal wordt de retraite gegeven?
   - **Verblijf**: Wat neem ik mee? · Waar slaap ik? · Mag ik mijn telefoon gebruiken?
   - **Aanmelden en betalen**: Is aanmelden een boeking? · Wanneer betaal ik? · Kan ik annuleren?
6. **Antwoorden bijwerken** die nu achterlopen op stories 015–019:
   - *Mag ik mijn telefoon gebruiken?* → "Er is wifi, maar we vragen je je telefoon bij aankomst in te leveren. Moet je bereikbaar zijn voor thuis? Dan spreken we samen iets af."
   - *Waar slaap ik?* → "Meestal in een meerpersoonskamer. Er zijn ook een paar eenpersoonskamers; vraag ernaar bij je aanmelding."
   - *Wanneer betaal ik?* → "Na het kennismakingsgesprek krijg je een betaallink. Met de aanbetaling van € 100 reserveer je je plek."
   - *Kan ik annuleren?* → "Ja. Hoeveel je terugkrijgt, hangt af van hoe ver vooruit je annuleert." + link "Lees de voorwaarden" (`/voorwaarden/`)
7. **Menu-item** "Vragen" naar `/vragen/`, tussen Aanmelden en Over de stichting (zie open vraag 2). De link in de voettekst blijft.
8. In CLAUDE.md de menuregel en het besluit over het menu bijwerken.

**Niet:**
- "Is er een minimumleeftijd?" en "In welke taal?" invullen: die blijven "volgt" tot je ze weet (open vraag 3)
- Andere teksten herschrijven

## Acceptatiecriteria
1. Bij Inbegrepen staat "Alle maaltijden, plantaardig"; het woord "volgt" staat daar niet meer.
2. Op Wat en waarom en Over de stichting staat bij Daan en Vincent "Begeleider"; het woord "oprichter" staat nergens op de site.
3. "Ik vind stilte spannend" staat niet meer op Wat en waarom.
4. `/vragen/` heeft drie groepen (Meedoen, Verblijf, Aanmelden en betalen) met samen negen vragen, in de volgorde hierboven; de vijf geschrapte vragen staan er niet meer.
5. De vier bijgewerkte antwoorden staan erin; "Kan ik annuleren?" linkt naar `/voorwaarden/`.
6. Het menu heeft acht items, met "Vragen" tussen Aanmelden en Over de stichting. Op `/vragen/` is het menu-item gemarkeerd als huidige pagina.
7. Het menu past op desktop (1280 px) op één regel en werkt op mobiel (375 px) in het uitklapmenu, zonder horizontaal scrollen.
8. Uitklapblokken werken zonder JavaScript; contrast ≥ 4,5:1 in alle vier de thema's.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Maaltijden | "Alle maaltijden, plantaardig" | Definitief (Daan, 3 nov 2026) |
| Rol | "Begeleider" | Voorstel |
| Minimumleeftijd, taal | "Volgt." | Placeholder |

## Technische aanpak (kort)
- `src/retraites/2027-04-voorjaar.md`, `src/_data/personen.yaml`, `src/_data/pastbijmij.yaml`, `src/_data/vragen.yaml`, `src/_data/site.yaml` (menu)
- `src/stichting.md`: commentaarregel "De oprichters …" → "De personen …"
- Controleren of het menu op desktop met acht items nog op één regel past; zo niet, de afstand tussen de items iets kleiner maken in `style.css`
- Controle: echte build in GitHub Actions + browsercontrole

## Open vragen voor Daan
1. Wat komt er in plaats van "Oprichter en begeleider": alleen **"Begeleider"**, of iets anders (bijv. "Meditatie en yoga" voor Vincent)? Of helemaal geen rol?
2. Menu: de naam **"Vragen"** (kort, past beter in het menu) of "Veelgestelde vragen"? En is de plek tussen Aanmelden en Over de stichting goed? Let op: dit wijkt af van het siteplan (zeven menu-items).
3. Weet je al iets over de minimumleeftijd en de taal? Zo niet, dan blijven ze "volgt". Of zal ik die twee vragen ook weghalen tot het bekend is?
4. Mogen de vier bijgewerkte antwoorden (punt 6) zo?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
