# 004 — Retraitegegevens tonen op Retraites, Kalender en Aanmelden

**Status:** Concept
**Bron:** `docs/pagina-opzet.md` (US-07, US-09; deel van US-11); `docs/siteplan.md` sectie C (pagina's 03, 04 en 05)
**Afhankelijk van:** 003 (retraite- en personendata)

## Story
Als **bezoeker die wil weten wanneer en waar de retraites zijn**
wil ik **op Retraites en events, Kalender en Aanmelden de echte retraites zien, met datum, locatie, prijs en status**
zodat **ik een retraite kan kiezen en weet waar ik me voor aanmeld**.

## Context
De retraitegegevens staan sinds story 003 klaar, maar worden nog nergens getoond. Deze story laat ze op drie pagina's zien, elk vanuit een eigen invalshoek: per formaat (Retraites en events), per datum (Kalender) en als keuze voor het aanmelden (Aanmelden). Alles komt uit hetzelfde bestand per retraite: een nieuwe retraite verschijnt dus vanzelf op alle drie.

## Scope
**Wel:**
- **Eén herbruikbare retraitekaart** (`partials/retraite-kaart.njk`) met: titel, formaat, data (bijv. "za 25 – wo 29 april 2027"), locatie, prijs, status-label, samenvatting, "Onder voorbehoud" als `bevestigd: false`, en een label "Voorbeeld" als `voorbeeld: true`
- **Retraites en events** (`/retraites/`): alle **komende** retraites, **op datum** (de eerstvolgende bovenaan). Het formaat staat op de kaart. Elke kaart heeft een knop **"Aanmelden"** naar de aanmeldpagina, met deze retraite gemarkeerd
- **Kalender** (`/kalender/`): alle komende retraites als **lijst per maand** (kop "April 2027", daaronder de retraites van die maand), met status
- **Aanmelden** (`/aanmelden/`):
  - een korte uitleg dat aanmelden **een aanvraag is en geen directe boeking**, en wat er daarna gebeurt (beoordeling binnen enkele dagen, daarna bevestiging en betaallink, of wachtlijst)
  - de komende retraites om uit te kiezen; de retraite waarvandaan je via "Aanmelden" kwam staat gemarkeerd bovenaan in beeld
  - een duidelijke melding **"Het aanmeldformulier volgt binnenkort"**, met een mailto-link naar het contactadres uit `site.yaml` en de naam van de retraite al in het onderwerp
- **Geen komende retraites?** Dan tonen alle drie de pagina's een korte tekst ("Er staan op dit moment geen retraites gepland…") met een link naar Contact
- Een retraite met status `vol` krijgt geen knop "Aanmelden" maar **"Op de wachtlijst"** (dezelfde bestemming)
- Teksten van de pagina's (intro, lege-lijsttekst, uitleg aanmelden) in de Markdown-bestanden of een databestand, niet in templates (voor de latere Engelse versie)
- Stijl in `style.css` met de bestaande variabelen, zodat alle vier de thema's van de stijlwisselaar werken

**Niet (expliciet buiten deze story):**
- Een eigen pagina per retraite (US-08): de kaart toont alles wat nu nodig is; die pagina komt in een volgende story
- Het echte aanmeldformulier met twee mails (US-11 t/m US-13): daarvoor moet eerst de formulierdienst gekozen worden
- Begeleiders tonen (US-06), foto's, maandraster (US-10), Engels (US-19)
- Het blok "eerstvolgende retraite" op Home (US-02)

## Acceptatiecriteria
1. **Gegeven** de voorjaarsretraite, **wanneer** ik `/retraites/` open, **dan** zie ik hem met titel, "Meerdaags", "25 – 29 april 2027", 't Zonnehuis in Loenen, € 495 en het label "Plekken vrij".
2. **Gegeven** `/kalender/`, **dan** staat de voorjaarsretraite onder de kop "April 2027".
3. **Gegeven** een kaart op `/retraites/`, **wanneer** ik op "Aanmelden" klik, **dan** kom ik op `/aanmelden/` met die retraite gemarkeerd en in beeld.
4. **Gegeven** `/aanmelden/`, **dan** staat er duidelijk dat aanmelden een aanvraag is en geen boeking, en dat het formulier nog volgt, met een werkende mailto-link waarin de naam van de retraite in het onderwerp staat.
5. **Gegeven** een retraite met status `vol`, **dan** staat op de kaart "Op de wachtlijst" in plaats van "Aanmelden"; **gegeven** `bevestigd: false`, **dan** staat er "Onder voorbehoud".
6. **Gegeven** alleen retraites in het verleden, **dan** tonen alle drie de pagina's de tekst dat er geen retraites gepland staan, met een link naar Contact.
7. **Gegeven** een kopie van het retraitebestand met andere data en een ander formaat, **dan** verschijnt die zonder verdere aanpassingen op alle drie de pagina's, op volgorde van datum.
8. Werkt op 375 px breed zonder horizontaal scrollen, met voldoende contrast in alle vier de thema's, semantische HTML (lijsten, koppen, `<time>`) en met het toetsenbord bedienbaar.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Intro's van de drie pagina's | Bestaande intro's, licht aangepast | Placeholder, aan te passen |
| Uitleg "aanvraag, geen boeking" | Korte tekst (2–3 zinnen) volgens de bezoekersroute uit het siteplan | Placeholder, ter review |
| Melding formulier | "Het aanmeldformulier volgt binnenkort. Mail ons in de tussentijd: …" | Tijdelijk, tot US-11 |
| Prijsweergave | "€ 495", zonder "werkprijs" | Bedrag is een werkprijs, maar dat staat niet op de site |
| Contactadres (`site.yaml`) | stillnessandstrokes@gmail.com | Definitief (gedeeld S&S-adres) |

## Technische aanpak (kort)
- `src/_includes/partials/retraite-kaart.njk` (nieuw)
- `src/retraites.md`, `src/kalender.md`, `src/aanmelden.md`: tonen de collectie `komendeRetraites`; de teksten blijven in deze bestanden
- `src/_data/site.yaml`: contactadres wordt het gedeelde S&S-adres (wijzigt ook de voettekst)
- `eleventy.config.js`: filters voor de datumweergave in het Nederlands ("25 – 29 april 2027", "April 2027"), een filter om per maand te groeperen, en een vaste "slug" per retraite (uit de bestandsnaam) voor de link naar Aanmelden
- `src/css/style.css`: nieuwe sectie voor kaarten en lijsten
- Markering op Aanmelden via een anker (`/aanmelden/#2027-04-voorjaar`) en CSS `:target`, zonder JavaScript
- Controle: echte Eleventy-build via een tijdelijke testworkflow (zoals bij story 003) en de live site in de browser op mobiel en desktop, in alle vier de thema's

## Open vragen voor Daan
1. ~~Prijs?~~ "€ 495", zonder "werkprijs" (Daan, 3 nov 2026).
2. ~~Volgorde?~~ Op datum (Daan, 3 nov 2026).
3. ~~Mailadres?~~ Het gedeelde S&S-adres, stillnessandstrokes@gmail.com (Daan, 3 nov 2026).

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
