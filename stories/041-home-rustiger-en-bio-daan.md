# 041 — Home rustiger en compacter, en een tweede versie van Daans bio

**Status:** Goedgekeurd (Daan, 24 nov 2026)
**Bron:** Daan, 24 nov 2026 (met een nieuwe portretfoto en een nieuwe bio-tekst in de chat)
**Geldt voor:** zie per onderdeel en open vraag 1
**Afhankelijk van:** 032/033 (ademblok en plakkend scrollen), 020 (Home), 010 (ervaringen), 031 (begeleiderskaart), 039 (Daan opzet 1 en 2)

## Story
Als **bezoeker van Home**
wil ik **meer inhoud tegelijk zien en minder afleiding**
zodat **ik snel begrijp wat jullie doen en wie jullie zijn**.

## Context
Daan vindt dat Home te veel lege ruimte en te veel losse elementen heeft. Het plakkend scrollen maakt elk deel een vol scherm hoog. Daarnaast wil hij zijn bio in twee versies uitproberen: de huidige, en een langere met een nieuwe foto.

## Scope
**Wel:**

*A. Home rustiger en compacter*
1. Het plakkend scrollen (story 032/033) gaat uit. De delen van Home zijn niet langer minstens een scherm hoog; de ruimte tussen de delen wordt kleiner, zodat je meer tegelijk ziet.
2. Het deel "Aankomen, creëren, reflecteren" verdwijnt van Home.
3. Het ademen verdwijnt: geen cirkel, geen ademkop en geen knop "Adem nog een keer". Het blok "Even uit de drukte" met de twee alinea's blijft als gewoon tekstblok staan (zie open vraag 2).

*B. Ervaringen*
4. Onder de citaten van deelnemers staat niet langer "Deelnemer, eerste retraite (2025)". Alleen het citaat blijft. Dit is inhoud en geldt dus in alle vier de opzetten, op Home en op Ons aanbod.

*C. Daans bio in twee versies*
5. **Daan opzet 1:** de huidige tekst en foto, ongewijzigd.
6. **Daan opzet 2:** de nieuwe foto (verkleind, zonder EXIF, als `persoon-daan-2.jpg`) en de nieuwe tekst in vier alinea's, precies zoals Daan hem gaf.
7. De tweede versie staat in `personen.yaml` als `bio2` en `foto2` bij Daan, met uitleg in het commentaar. Op de pagina staan beide versies; per opzet is er één zichtbaar.
8. Dit geldt overal waar de begeleiderskaart staat: Over ons, Over de stichting en de pagina van een retraite.

**Niet:**
- Vincents bio of foto
- Andere pagina's compacter maken

## Acceptatiecriteria
1. **Gegeven** Home op de laptop, **dan** plakt de pagina niet meer bij het scrollen en is er geen deel dat een vol scherm vult zonder inhoud.
2. **Gegeven** Home, **dan** zijn "Aankomen, creëren, reflecteren" en de ademcirkel weg en staat "Even uit de drukte" er als gewoon blok.
3. **Gegeven** de citaten van deelnemers, **dan** staat er geen "Deelnemer, eerste retraite (2025)" meer onder.
4. **Gegeven** Daan opzet 1, **dan** zie ik bij Daan de huidige tekst en foto; **gegeven** Daan opzet 2, de nieuwe foto en tekst. In elke opzet staat Daans kaart maar één keer, en schermlezers lezen alleen de zichtbare versie.
5. Contrast ≥ 4,5:1; 0 CSP-meldingen; Controle groen; geen horizontaal scrollen.

## Technische aanpak (kort)
- `style.css`: sectie 16 (plakkend scrollen) weg of beperkt; ruimte tussen de delen van Home kleiner; sectie 15 (ademblok) opruimen
- `src/index.njk`: `home-stappen.njk` en het ademblok eruit, "Even uit de drukte" als gewoon blok; `landschap.js`: de ademfunctie eruit; `home.yaml`: velden opruimen
- `src/_data/ervaringen.yaml` en `partials/ervaringen.njk`: geen bron meer tonen
- `src/_data/personen.yaml`: `bio2`, `foto2`; `partials/personen-lijst.njk`: beide versies, per opzet één zichtbaar (`display: none` verbergt ook voor schermlezers)
- `src/images/persoon-daan-2.jpg`
- Testen: Controle; Daan test zelf (teststappen in de chat)

## Open vragen voor Daan
Beantwoord door Daan, 24 nov 2026 ("Yes, akkoord" op de voorstellen): A geldt voor alle vier de opzetten; "Even uit de drukte" blijft als gewoon tekstblok; Vincents opzetten tonen versie 1 van Daans bio. Nog af te stemmen met Vincent dat de blokken ook uit zijn opzetten verdwijnen.

1. **Voor welke opzetten gelden A1 t/m A3?** Volgens onze afspraak raken jouw wijzigingen aan de opmaak alleen jouw twee opzetten. Het weghalen van blokken is echter de gedeelde indeling van Home.
   - **Voorstel:** alles van A geldt voor alle vier de opzetten. Dat is het eenvoudigst en geeft de minste code. Dan moet Vincent het er wel mee eens zijn.
   - **Alternatief:** alleen in Daan opzet 1 en 2. Dan blijven de blokken in Vincents opzetten staan, en verberg ik ze alleen in de jouwe.
2. **"Even uit de drukte"** blijft als gewoon tekstblok staan, zonder ademen. Klopt dat? Of mag het hele blok weg?
3. **Vincents opzetten:** welke versie van jouw bio tonen die? Voorstel: de huidige (versie 1).

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
