# 023 — Lettertypes zelf hosten, beveiligingstags en placeholders opruimen

**Status:** Gebouwd — ter review
**Bron:** Code-analyse 4 nov 2026 (punten 1, 2, 3, 9, 10 en onderhoud); privacybeleid (story 016)
**Afhankelijk van:** geen

## Story
Als **bezoeker**
wil ik **dat de site geen gegevens over mij naar andere bedrijven stuurt en geen kapotte of nep-links bevat**
zodat **ik het privacybeleid kan geloven en de site betrouwbaar overkomt**.

## Context
De site laadt de lettertypes nu bij Google. Daardoor ziet Google bij elk paginabezoek het IP-adres van de bezoeker, terwijl het privacybeleid zegt dat de site niemand volgt. Daarnaast staan er nog placeholders live: social links naar de algemene Instagram- en Facebook-pagina, een hero-foto die niet bestaat (elke pagina krijgt een 404-fout) en een dubbele link in de voettekst.

## Scope
**Wel:**
1. **Lettertypes zelf hosten.** Cormorant Garamond en Source Sans 3 (en, zolang de stijlwisselaar aan staat, Fraunces en Nunito) komen van de eigen site in plaats van van Google. Alleen de gewichten die de site gebruikt.
2. **Beveiligingstags in de `<head>`**: een Content-Security-Policy (alleen bronnen van de eigen site; formulieren en links naar buiten blijven werken) en `referrer` op `strict-origin-when-cross-origin`.
3. **Links naar buiten**: de interesselijst en de social links krijgen `rel="noopener noreferrer"`.
4. **Social links**: alleen tonen als er een echte link is ingevuld; het kopje "Volg ons" verdwijnt als de lijst leeg is. In `site.yaml` worden de twee placeholders leeg gemaakt (zie open vraag 1).
5. **Hero zonder foto**: de site vraagt `hero-bos.jpg` alleen op als het bestand echt in `src/images/` staat; anders alleen het groene verloop. Geen 404-fout meer.
6. **Voettekst**: de dubbele "Veelgestelde vragen" weg (staat sinds story 022 al in het menu).
7. **Ongebruikte instellingen weg**: `contact.telefoon` en `contact.plaats` uit `site.yaml`.
8. **Privacybeleid, sectie Cookies**: zin toevoegen dat lettertypes van de eigen site komen en er geen gegevens naar andere partijen gaan bij een bezoek.
9. CLAUDE.md: de verouderde regel "Formulieren: via een externe formulierdienst, nog te kiezen" bijwerken naar Google Forms.

**Niet:**
- Een echte hero-foto toevoegen (komt later, zie galerij 011)
- Andere lettertypes kiezen

## Acceptatiecriteria
1. **Gegeven** een willekeurige pagina, **dan** doet de browser geen enkele aanvraag naar `fonts.googleapis.com`, `fonts.gstatic.com` of een ander extern domein (gecontroleerd in Chrome via de netwerkaanvragen).
2. De koppen en lopende tekst zien er hetzelfde uit als nu (schermafbeelding voor en na, in alle vier de thema's).
3. **Gegeven** de CSP, **dan** staan er geen CSP-fouten in de console, en werken menu, stijlwisselaar, uitklapblokken, mailto-links, het agenda-bestand en (met een testlink) de knop naar Google Forms.
4. **Gegeven** lege social links, **dan** staat er geen "Volg ons" in de voettekst; **gegeven** een ingevulde link, **dan** verschijnt die met `rel="noopener noreferrer"`.
5. **Gegeven** geen `hero-bos.jpg`, **dan** is er geen 404-aanvraag en toont de hero het groene verloop; **gegeven** een testfoto, **dan** verschijnt de foto.
6. "Veelgestelde vragen" staat één keer in de voettekst.
7. `telefoon` en `plaats` staan niet meer in `site.yaml`; de build werkt nog.
8. Contrast, 375 px zonder horizontaal scrollen en toetsenbordbediening ongewijzigd in orde.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Social links | leeg (niet getoond) | Tot er echte accounts zijn |
| Zin privacybeleid | "De lettertypes komen van onze eigen site. Bij een bezoek gaan er geen gegevens naar andere partijen." | Concept |

## Technische aanpak (kort)
- Lettertypes via de npm-pakketten van Fontsource (`@fontsource/cormorant-garamond`, `@fontsource/source-sans-3`, en voor de stijlwisselaar `@fontsource/fraunces`, `@fontsource/nunito`). Eleventy kopieert alleen de benodigde `.woff2`-bestanden naar `/fonts/`. Zo staan er geen binaire bestanden in de repo en houdt Dependabot ze bij.
- Nieuw CSS-bestand `src/css/fonts.css` met de `@font-face`-regels (met `font-display: swap`), vóór `style.css` geladen; de twee belangrijkste lettertypes krijgen een `preload`.
- Hero: de foto wordt een gewoon `<img>` achter de tekst in plaats van een `style`-attribuut, zodat de CSP geen inline-stijlen hoeft toe te staan. Alt-tekst in `home.yaml`.
- `base.njk`: Google-links weg, CSP- en referrer-meta erbij. Het kleine inline-script voor de stijlwisselaar gaat naar een eigen bestand, zodat de CSP geen `unsafe-inline` nodig heeft.
- `footer.njk`, `interesselijst.njk`, `index.njk` (hero), `site.yaml`, `privacy.md`, `CLAUDE.md`
- Controle: echte build in GitHub Actions + Chrome met netwerk- en consolecontrole

## Open vragen voor Daan
1. ~~Social?~~ "Volg ons" mag weg (Daan, 4 nov 2026). Het mechanisme blijft: vul je later een link in, dan verschijnt het kopje weer.
2. ~~Lettertypes als npm-pakket?~~ Ja (Daan, 4 nov 2026).

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (4 nov 2026)
Echte Eleventy-build in GitHub Actions (tijdelijke testworkflow, daarna verwijderd), met varianten (met hero-foto, social link en interesselijst; stijlwisselaar uit), en de build in Chrome op 375 en 1280 px in alle vier de thema's, met controle van alle netwerkaanvragen en de console.

| # | Resultaat |
|---|---|
| 1 | ✅ 0 aanvragen naar een extern domein op zeven pagina's (Home, Wat en waarom, Retraites, eventpagina, Aanmelden, Vragen, Privacy); 10 `.woff2`-bestanden in `/fonts/` (samen ca. 190 kB, de browser laadt er per pagina 2 tot 5) |
| 2 | ✅ Chrome laadt Cormorant Garamond (500, 600, 500 cursief) en Source Sans 3 (400, 600); koppen en tekst zien er hetzelfde uit als op de live site |
| 3 | ✅ 0 CSP-meldingen in de console; menu, stijlwisselaar (thema wordt onthouden), uitklapblokken en de link naar Google Forms werken; geen inline `<script>` of `style="…"` meer |
| 4 | ✅ Zonder social links geen "Volg ons"; met een testlink verschijnt hij met `rel="noopener noreferrer"` |
| 5 | ✅ Zonder `hero-bos.jpg` geen `<img>` en 0 keer een 404-fout; met een testbestand verschijnt `<img class="hero__foto" … alt="Zonlicht valt …">` |
| 6 | ✅ "Veelgestelde vragen" staat één keer in de voettekst |
| 7 | ✅ `telefoon` en `plaats` zijn weg uit `site.yaml`; de build werkt |
| 8 | ✅ Laagste contrast 4,77:1 (Zand); geen horizontaal scrollen op 375 px |

Ook gedaan: met de stijlwisselaar uit laadt de site `fonts-themas.css` en `stijlwisselaar.js` niet. De interesselijst kreeg ook `noreferrer`. CLAUDE.md: regel over formulieren bijgewerkt en een nieuwe regel "Geen externe bronnen".
