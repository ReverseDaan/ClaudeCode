# 008 — Eigen pagina per retraite, met praktische informatie

**Status:** Goedgekeurd
**Bron:** `docs/pagina-opzet.md` (US-08); `docs/siteplan.md` sectie A (sjabloon retraite); Drive: deelnemersmails editie 1 (paklijst, voorbereiding)
**Afhankelijk van:** 003, 004

## Story
Als **geïnteresseerde**
wil ik **alles over één retraite op één pagina lezen, inclusief wat ik moet meenemen en hoe ik er kom**
zodat **ik weet waar ik aan begin voordat ik een plek aanvraag**.

## Scope
**Wel:**
- Elke retraite in `src/retraites/` krijgt een eigen pagina op `/retraites/<bestandsnaam>/` (bijv. `/retraites/2027-04-voorjaar/`). Een nieuwe retraite krijgt vanzelf een pagina
- Op de pagina: titel, labels (status, onder voorbehoud, voorbeeld), data, locatie, soort, prijs, wat er inbegrepen is, de beschrijving uit het bestand, de begeleiders (kaarten uit `personen.yaml`) en een knop Aanmelden / Op de wachtlijst
- **Praktische informatie**, in uitklapblokken:
  - *Wat neem je mee?*: de paklijst uit de deelnemersmail van 2025 (kleding, meditatie en yoga, verzorging, persoonlijke spullen), als gedeelde tekst in `src/_data/praktisch.yaml`
  - *Voorbereiding*: de tips uit dezelfde mail (minder suiker, koffie en alcohol; alvast wat stilte inbouwen)
  - *Bereikbaarheid*: een nieuw, optioneel veld `bereikbaarheid` per retraite; ontbreekt het, dan staat er "Na je aanmelding ontvang je informatie over bereikbaarheid en carpoolen"
- De kaarten op Retraites, Kalender en Aanmelden krijgen een link "Meer informatie" naar deze pagina (de titel wordt ook een link)
- Uitleg in de README: het nieuwe veld `bereikbaarheid`

**Niet:**
- Foto's per retraite (veld `fotos` blijft leeg)
- Agenda-bestand (story 009), Engels

## Acceptatiecriteria
1. **Gegeven** de voorjaarsretraite, **dan** bestaat `/retraites/2027-04-voorjaar/` met alle gegevens hierboven en een werkende knop Aanmelden.
2. **Gegeven** een kopie van het retraitebestand, **dan** krijgt die vanzelf een eigen pagina, en linken de kaarten erheen.
3. **Gegeven** een retraite zonder `bereikbaarheid`, **dan** staat de standaardtekst; met het veld staat de eigen tekst.
4. **Gegeven** een retraite in het verleden, **dan** bestaat de pagina nog wel (oude links blijven werken), met de melding "Deze retraite is voorbij" en zonder aanmeldknop.
5. Uitklapblokken werken zonder JavaScript en met het toetsenbord (`<details>`); werkt op 375 px, contrast in orde in alle vier de thema's.
6. De controle bij het bouwen (story 003) blijft werken.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Paklijst en voorbereiding | Uit de deelnemersmail van 19 juli 2025 (zonder namen of betaalgegevens) | Concept |
| Bereikbaarheid voorjaarsretraite | Standaardtekst | Placeholder tot jullie het invullen |
| Beschrijving voorjaarsretraite | "Tekst volgt." (staat al in het bestand) | Placeholder |

## Technische aanpak (kort)
- `src/retraites/retraites.json`: `permalink` naar `/retraites/{{ page.fileSlug }}/` en layout `layouts/retraite.njk` (nieuw)
- `src/_data/praktisch.yaml` (nieuw, met uitleg-commentaar)
- `retraite-kaart.njk`: link naar de eventpagina
- Controle zoals bij story 004

## Open vragen voor Daan
1. Mag de paklijst van 2025 zo overgenomen worden, of verandert er iets voor het voorjaar (bijv. eigen beddengoed bij zelfverzorging)?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
