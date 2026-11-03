# 016 — Privacybeleid

**Status:** Concept
**Bron:** `docs/pagina-opzet.md` (US-17); `docs/siteplan.md` (juridische eisen: AVG); stories 014 (interesselijst) en 018 (aanmeldformulier)
**Afhankelijk van:** 015 (dezelfde conceptmelding)

## Story
Als **bezoeker die een formulier invult**
wil ik **lezen welke gegevens jullie bewaren, waarom en hoe lang**
zodat **ik met een gerust hart mijn gegevens achterlaat**.

## Context
`/privacy/` staat op "in de maak", terwijl de interesselijst (014) en het aanmeldformulier (018) straks gegevens vragen. Volgens de AVG moet je dan vertellen wat je ermee doet. Er is geen eigen backend: gegevens komen binnen via Google Forms en de gedeelde mailbox.

## Scope
**Wel:**
- Pagina `/privacy/` met korte secties: Wie wij zijn · Welke gegevens en waarom · Waar ze staan · Hoe lang · Delen met anderen · Je rechten · Cookies · Contact
- Per formulier (interesselijst, aanmelden, mail) een regel: welke gegevens, waarvoor, hoe lang
- Wie we zijn komt uit `site.yaml` en `stichting.yaml` (inclusief de melding "voorbeeldgegevens" zolang die aan staat)
- Conceptmelding en "Laatst bijgewerkt", zoals in 015
- Cookies: de site zet geen tracking-cookies; alleen de stijlkeuze in je eigen browser (localStorage)

**Niet:**
- Een cookiebanner (niet nodig zolang er geen tracking is)
- Juridische toetsing

## Conceptteksten (kern)
> We vragen alleen wat we nodig hebben om je aanvraag te behandelen en de retraite goed voor te bereiden. We verkopen je gegevens nooit en gebruiken ze niet voor reclame.

| Waarvoor | Welke gegevens | Hoe lang |
|---|---|---|
| Houd me op de hoogte | Naam, e-mailadres | Tot je je afmeldt |
| Aanmelden | Naam, e-mail, telefoon, en wat je zelf vertelt (bijv. dieetwensen) | Tot [termijn] na de retraite |
| Mail aan ons | Wat je ons stuurt | Zolang nodig om je vraag te beantwoorden |

> De formulieren draaien op Google Forms; de antwoorden staan in een Google-account dat alleen wij gebruiken. Betalen gaat via [betaaldienst]. Andere partijen krijgen je gegevens niet, behalve de locatie als dat nodig is (bijv. een dieetwens).

## Acceptatiecriteria
1. **Gegeven** `/privacy/`, **dan** staan de secties in de genoemde volgorde; "in de maak" is weg.
2. De tabel noemt de drie manieren waarop gegevens binnenkomen, met doel en bewaartermijn; onbekende termijnen staan als "volgt".
3. Naam en contactadres komen uit `site.yaml`; KvK-gegevens alleen uit `stichting.yaml`, met "(voorbeeld)" zolang `voorbeeld: true`.
4. Het formulier van de interesselijst en (straks) het aanmeldformulier linken naar `/privacy/`.
5. Conceptmelding zichtbaar zolang `concept: true`.
6. 375 px zonder horizontaal scrollen; contrast ≥ 4,5:1 in alle thema's.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Bewaartermijn aanmeldingen | "volgt" | Placeholder |
| Betaaldienst | "Mollie, Stripe of Hipsy" → "volgt" | Placeholder |
| Verwerkingsverantwoordelijke | Naam uit `site.yaml` | Tot rechtsvorm vastligt |

## Technische aanpak (kort)
- `src/privacy.md` met teksten en tabel
- Link naar `/privacy/` in `partials/interesselijst.njk` (als die er nog niet staat)
- Hergebruik van de conceptmelding uit 015

## Open vragen voor Daan
1. Hoe lang bewaren jullie aanmeldgegevens na een retraite? (Voorstel: 1 jaar, voor contact over een volgende editie alleen met toestemming.)
2. Vragen jullie in het aanmeldformulier naar gezondheid (blessures, dieet om medische reden)? Dan is dat een bijzonder persoonsgegeven en moet dat apart genoemd worden.
3. Toetsing door een jurist of een AVG-check voor de lancering?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
