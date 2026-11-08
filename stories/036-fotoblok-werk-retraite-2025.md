# 036 — Foto van werk uit de retraite van 2025 als hero op Home

**Status:** Gebouwd — ter review
**Bron:** Daan, 8 nov 2026 (foto `0N4A0270.jpg`, aangeleverd in de chat)
**Afhankelijk van:** 020 (Home afmaken), 026 (getekend landschap), 032/033 (ademblok en plakkend scrollen)

## Story
Als **bezoeker die twijfelt of dit iets voor mij is**
wil ik **bovenaan Home meteen een echte foto zien van werk dat tijdens een retraite is gemaakt**
zodat **ik zie wat deelnemers maken, en begrijp dat het gaat om het maken en niet om het resultaat**.

## Context
De foto toont een geschilderd portret op een ezel in een houten ruimte met daglicht; andere ezels staan onscherp op de achtergrond. Hij is gemaakt tijdens de retraite van 2025. Daan wil hem als achtergrond van de hero op Home (besluit 8 nov 2026, vervangt het eerste voorstel van een los fotoblok).
De hero ondersteunt al een foto: `home.yaml` verwijst naar `hero-bos.jpg`, maar dat bestand bestaat niet. Zodra er een foto is, verbergt de hero het getekende landschap, legt een donkere laag over de foto en toont lichte tekst.

## Scope
**Wel:**
1. De foto toevoegen in `src/images/` als `hero-retraite-2025.jpg`, verkleind en gecomprimeerd (origineel 8192 × 5464 px; circa 2000 px breed voor de laptop plus een kleinere versie voor mobiel), zonder camera- en bewerkingsgegevens (EXIF).
2. `home.yaml`: `hero.afbeelding` en `hero.alt` aanpassen naar deze foto.
3. Zo nodig kleine aanpassingen in `style.css` zodat de naam, slogan en knop goed leesbaar blijven en niet over het schilderij heen staan (zie open vraag 1), en dat de foto op mobiel en laptop goed is bijgesneden (`object-position`).
4. Een klein bijschrift "Werk uit de retraite van 2025" in de hero, uit `home.yaml` (zie open vraag 2).

**Niet (expliciet buiten deze story):**
- Het getekende landschap en de vier thema's weghalen uit de code: ze blijven bestaan voor als er geen foto is (en voor de stijlwisselaar op andere pagina's, voor zover van toepassing)
- Een galerij (story 011 blijft in de wacht)
- Andere pagina's dan Home
- Andere foto's

## Acceptatiecriteria
1. **Gegeven** het bestand staat in `src/images/` **wanneer** ik Home open **dan** is de foto de achtergrond van de hero en is het getekende landschap niet zichtbaar.
2. Naam, slogan en knop zijn goed leesbaar (contrast minimaal 4,5 : 1 voor de tekst over de foto) en staan niet over het gezicht op het schilderij.
3. Het schilderij op de voorgrond blijft zichtbaar bij 375 px, 768 px en 1440 px breed (geen afgesneden gezicht).
4. De foto heeft een `alt`-tekst die beschrijft wat er te zien is.
5. Het bijschrift is zichtbaar in de hero en komt uit `home.yaml`.
6. De foto in `_site/` is per versie kleiner dan 400 kB en niet breder dan 2000 px; de foto laadt met hoge prioriteit (de hero is het eerste beeld).
7. **Gegeven** het bestand ontbreekt **dan** bouwt de site zonder fout en toont de hero het getekende landschap.
8. De stijlwisselaar werkt nog; de foto blijft staan en de tekstkleur blijft leesbaar in elk thema.
9. Het plakkende scrollen, het ademblok en de "naam schrijven" op Home werken nog (open vraag 3).
10. Geen `style="…"`-attributen, geen externe bronnen (CSP blijft kloppen); werkt op 375 px zonder horizontaal scrollen.
11. `npm run build` en de controle (`lib/controle.js`) slagen.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Bestandsnaam | `hero-retraite-2025.jpg` | Definitief |
| Alt-tekst | "Een geschilderd portret op een houten ezel in een ruimte met daglicht; op de achtergrond staan meer ezels met schilderijen." | Voorstel, Daan past aan |
| Bijschrift | "Werk uit de retraite van 2025" | Voorstel, Daan past aan |

## Technische aanpak (kort)
- `src/images/`: foto toevoegen (eenmalig verkleind met een lokaal hulpmiddel, bijvoorbeeld `sharp`; geen nieuwe runtime-afhankelijkheid in `package.json`).
- `src/_data/home.yaml`: `afbeelding`, `alt` en nieuw veld `bijschrift`, met uitleg-commentaar.
- `src/index.njk`: bijschrift in de hero tonen; zo nodig een kleinere versie via `srcset`.
- `src/css/style.css`: plaatsing van de tekst en `object-position` voor deze foto; de bestaande foto-variant van de hero (`.hero:has(.hero__foto)`) blijft de basis.
- `CLAUDE.md`: "Plan en voortgang" en het mappenoverzicht bijwerken na het bouwen.

## Besloten (Daan, 8 nov 2026)
- Plaatsing: hero-achtergrond.
- Toestemming: de deelnemer heeft akkoord gegeven voor publieke weergave.
- Verkleinen met een hulpmiddel en EXIF verwijderen: akkoord.

## Open vragen voor Daan
1. **Tekstplaats.** Het portret staat links in beeld, en op de laptop staat de hero-tekst nu iets links van het midden. Mijn voorstel: op de laptop de tekst rechts van het schilderij zetten (rechts is de lichte onscherpe achtergrond, waar de overlay zorgt voor contrast), en op mobiel de tekst onderaan laten staan. Akkoord, of liever een andere plek?
2. **Bijschrift.** Wil je het bijschrift in de hero, of liever zonder (dan staat de herkomst alleen in de alt-tekst)?
3. **Naam schrijven en landschapsdiepte.** Die animaties horen bij het getekende landschap. Met de foto vervalt het landschap; moet de naam nog "geschreven" worden over de foto, of mag de naam gewoon als gewone tekst staan? Mijn voorstel: de naam blijft geschreven worden, alleen de diepte-beweging vervalt.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`

## Besloten bij goedkeuring (Daan, 8 nov 2026)
Tekst rechts van het schilderij op de laptop en onderaan op de telefoon; bijschrift in de hero; de naam blijft "geschreven" worden, alleen de diepte-beweging vervalt.

## Resultaat (bouw)
1. Gehaald: foto is de hero-achtergrond, het landschap is verborgen.
2. Gehaald: contrast gemeten op de screenshot (lichtste 10% van de achtergrond): laptop slogan 5,2 : 1, titel 4,6 : 1; telefoon slogan 7,9 : 1, titel 6,8 : 1. Tekst staat niet over het gezicht.
3. Gehaald: gezicht compleet zichtbaar bij 375, 768 en 1440 px (op de telefoon is de foto groter en naar boven geschoven).
4. Gehaald: alt-tekst in `home.yaml`.
5. Gehaald: bijschrift uit `home.yaml`, op een donker pilletje voor leesbaarheid.
6. Gehaald: 239 kB (2000 px) en 71 kB (1000 px, via `srcset`), zonder EXIF; hoge laadprioriteit.
7. Gehaald: zonder bestand bouwt de site en komt het landschap terug.
8. Gehaald: in Zand, Penseel & papier en Ochtend blijft de tekst licht en het landschap verborgen.
9. Gehaald: ademblok, plakkend scrollen en het schrijven van de naam zijn niet aangeraakt; de diepte-beweging doet niets meer omdat het landschap verborgen is.
10. Gehaald: geen `style="…"` en geen externe bronnen; scrollbreedte gelijk aan schermbreedte bij 375, 768 en 1440 px.
11. Gehaald: `npm run build` en `lib/controle.js` ("13 pagina's gecontroleerd").

Let op: op de telefoon overlapt de tijdelijke stijlwisselaar ("Stijl: Bos") een stukje van het bijschrift. Die gaat uit vóór de lancering.
