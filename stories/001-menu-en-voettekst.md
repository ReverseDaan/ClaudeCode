# 001 — Menu en voettekst volgens de nieuwe sitemap

**Status:** Gebouwd — ter review
**Bron:** `docs/pagina-opzet.md` (US-16), `docs/siteplan.md` sectie A. Sitemap; Miro-frames "A. Sitemap" en "F. Juridisch"
**Afhankelijk van:** geen

## Story
Als **bezoeker**
wil ik **op elke pagina hetzelfde menu en dezelfde voettekst zien, ook op mijn telefoon**
zodat **ik altijd weet waar ik ben, elke pagina uit de sitemap kan bereiken en kan zien met wie ik te maken heb**.

## Context
De header en footer bestaan al, maar met het oude menu (Over ons, Programma). Deze
story zet de navigatie om naar de goedgekeurde sitemap. Daarnaast komen er
eenvoudige "binnenkort"-pagina's, zodat geen enkele menulink op een 404 uitkomt
terwijl de echte pagina's in latere stories worden gebouwd.

## Scope
**Wel:**
- Menu in `site.yaml`: Home · Wat en waarom · Retraites en events · Kalender · Aanmelden · Over de stichting · Contact
- Een lege pagina voor elk van de zes menu-items, plus `/privacy/` en `/voorwaarden/`. Elke pagina heeft een titel, één zin over wat er komt en een link naar Contact
- Een simpele, herbruikbare layout voor gewone pagina's (`pagina.njk`), zodat de volgende stories daarop verder kunnen
- Voettekst uitbreiden: snelle links (de menu-items), contactgegevens, social media, KvK, RSIN en statutaire zetel, en links naar het privacybeleid en de voorwaarden
- Nieuw bestand `src/_data/stichting.yaml` met KvK, RSIN en zetel als gemarkeerde placeholders, plus de instelling `anbi: false`
- Het mobiele menu blijft werken met zeven items

**Niet (expliciet buiten deze story):**
- De inhoud van de pagina's zelf (eigen stories)
- Een NL/EN-taalschakelaar: die komt met US-19. Er komt nu geen knop die nergens heen gaat
- Teksten voor het privacybeleid en de voorwaarden
- Wijzigingen aan de homepagina

## Acceptatiecriteria
1. **Gegeven** een willekeurige pagina **wanneer** ik naar de header kijk **dan** zie ik de zeven menu-items in de volgorde van de sitemap, en is de huidige pagina gemarkeerd (`aria-current="page"`).
2. **Gegeven** een schermbreedte van 375 px **wanneer** ik op "Menu" tik **dan** klapt het menu open met alle zeven items. Escape sluit het en zet de focus terug op de knop.
3. **Gegeven** een schermbreedte van 1366 px **dan** staan alle zeven items op één regel naast de naam, zonder dat ze over elkaar heen lopen.
4. **Gegeven** een menulink of voettekstlink **wanneer** ik erop klik **dan** kom ik op een bestaande pagina (geen 404), zowel lokaal als onder `/ClaudeCode/` op GitHub Pages.
5. **Gegeven** de voettekst **dan** staan daarin snelle links, het e-mailadres, social media, KvK, RSIN en zetel, en links naar het privacybeleid en de voorwaarden.
6. **Gegeven** dat KvK, RSIN en zetel placeholders zijn **dan** is dat in de voettekst zichtbaar gemarkeerd (bijv. "KvK: volgt").
7. **Gegeven** `anbi: false` in `stichting.yaml` **dan** staat er nergens iets over ANBI.
8. Werkt op een schermbreedte van 375 px zonder horizontaal scrollen.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Menulabels | Home, Wat en waarom, Retraites, Kalender, Aanmelden, Over de stichting, Contact | Definitief (siteplan) |
| URL's | `/`, `/wat-en-waarom/`, `/retraites/`, `/kalender/`, `/aanmelden/`, `/stichting/`, `/contact/`, `/privacy/`, `/voorwaarden/` | Voorstel |
| Tekst op lege pagina's | "Deze pagina is in de maak. Vragen? Neem contact op." | Placeholder |
| KvK / RSIN / zetel | "volgt" | Placeholder (rechtsvorm nog open) |
| E-mail, social | voorbeeldwaarden uit `site.yaml` | Placeholder |

## Technische aanpak (kort)
- `src/_data/site.yaml`: nieuw menu
- `src/_data/stichting.yaml`: nieuw bestand, met uitleg-commentaar
- `src/_includes/layouts/pagina.njk`: nieuwe layout voor gewone pagina's (bouwt voort op `base.njk`)
- `src/wat-en-waarom.md`, `retraites.md`, `kalender.md`, `aanmelden.md`, `stichting.md`, `contact.md`, `privacy.md`, `voorwaarden.md`: lege pagina's. Latere stories vervangen ze
- `src/_includes/partials/footer.njk` en `src/css/style.css`: voettekst uitbreiden, en de menu-afstand op desktop controleren bij zeven items
- `README.md`: `stichting.yaml` toevoegen aan de tabel "Waar staat wat?"

## Open vragen voor Daan
Beantwoord op 2 november 2026:
- URL's: akkoord met `/stichting/` en `/retraites/`.
- Voettekst: voorlopig alleen e-mail, geen telefoon of WhatsApp. Criterium 5 is daarop aangepast.
- In het menu heet het item "Retraites"; de paginatitel blijft "Retraites en events".

## Resultaat (2 november 2026)
Getest met een browser (Playwright) op de lokale build en op een build met pathPrefix `/ClaudeCode/`.

1. Gehaald: zeven items in de volgorde van de sitemap; op /kalender/ heeft "Kalender" `aria-current="page"`.
2. Gehaald op 375 px: "Menu" opent alle zeven items, Escape sluit het menu en zet de focus terug op de knop.
3. Gehaald op 1024 en 1366 px: alle items staan op één regel. Het menu klapt nu pas onder 1024 px in (eerst 860 px), omdat zeven items op smallere schermen niet passen.
4. Gehaald: alle menu- en voettekstlinks op alle 9 pagina's geven 200, zowel lokaal als onder `/ClaudeCode/`.
5. Gehaald: snelle links, e-mail, social, KvK, RSIN, zetel, privacybeleid en voorwaarden.
6. Gehaald: "KvK: volgt", "RSIN: volgt", "Statutaire zetel: volgt".
7. Gehaald: geen ANBI-tekst bij `anbi: false`.
8. Gehaald: geen horizontaal scrollen op 375, 1024 en 1366 px.

Extra: de knop "Bekijk de retraites" op de homepagina gaf eerst een 404, nu niet meer.

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`
