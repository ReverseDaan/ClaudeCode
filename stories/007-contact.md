# 007 — Contactpagina met alleen het e-mailadres

**Status:** Concept
**Bron:** `docs/pagina-opzet.md` (US-15, ingeperkt); wens van Daan (3 nov 2026): "De pagina voor contact kan alleen ons e-mailadres bevatten"
**Afhankelijk van:** geen

## Story
Als **bezoeker met een vraag**
wil ik **op de contactpagina direct zien hoe ik jullie kan bereiken**
zodat **ik zonder drempel een vraag kan stellen voordat ik me aanmeld**.

## Context
De contactpagina staat nu op "in de maak". Het siteplan noemde ook een formulier, telefoon/WhatsApp, social media en een reactietijd, maar Daan wil voorlopig alleen het e-mailadres. Daarmee is de pagina meteen af en hoeft er geen formulierdienst gekozen te worden.

## Scope
**Wel:**
- Eén korte intro en het e-mailadres als klikbare mailto-link (uit `site.yaml`, dus nu `stillnessandstrokes@gmail.com`)
- De tekst "in de maak" verdwijnt
- Teksten in `src/contact.md`, niet in een template

**Niet (expliciet buiten deze story):**
- Contactformulier, telefoonnummers, WhatsApp, social media, reactietijd (US-15 in volle omvang)
- Wijzigingen aan de voettekst

## Conceptteksten
**Intro (bovenaan):**
> Heb je een vraag over een retraite, het programma of het aanmelden? We denken graag met je mee.

**Inhoud:**
> Mail ons op **[stillnessandstrokes@gmail.com](mailto:stillnessandstrokes@gmail.com)**.

## Acceptatiecriteria
1. **Gegeven** `/contact/`, **dan** staan er alleen de intro en het e-mailadres als werkende mailto-link; nergens "in de maak".
2. **Gegeven** een ander adres in `site.yaml`, **dan** verandert het adres op de contactpagina vanzelf mee.
3. Er staan geen telefoonnummers, social-medialinks of formulier op de pagina (de voettekst blijft zoals hij is).
4. Werkt op 375 px, voldoende contrast in alle vier de thema's, de link is met het toetsenbord bereikbaar.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Intro | Zie hierboven (uit de brochure, dia 9) | Concept |
| E-mailadres | Uit `site.yaml` | Definitief |

## Technische aanpak (kort)
- `src/contact.md`: intro in de front matter, de regel met het adres als tekst
- Controle: echte build in GitHub Actions (tijdelijke testworkflow) en een browsercontrole

## Open vragen voor Daan
- Geen.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
