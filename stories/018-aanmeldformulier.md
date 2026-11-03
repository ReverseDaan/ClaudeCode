# 018 — Aanmeldformulier via Google Forms

**Status:** Concept
**Bron:** `docs/pagina-opzet.md` (US-11 t/m US-13); Drive: Google Form "Aanmelding Retraite – Stilness & Strokes" (2025); eerder advies: Google Forms (gratis, mail naar jullie via meldingen, bevestigingsmail aan de aanvrager mogelijk)
**Afhankelijk van:** 015 (voorwaarden), 016 (privacy), 017 (stappen)

## Story
Als **deelnemer**
wil ik **een plek aanvragen via een formulier waarin mijn retraite al is ingevuld**
zodat **aanmelden snel gaat en jullie meteen weten om welke retraite het gaat**.

## Context
Nu opent de knop een mail. Daan maakt zelf een Google Form (net als voor de interesselijst). De site linkt ernaar en vult de gekozen retraite vooraf in via een "vooraf ingevulde link". Zo is er geen eigen backend nodig en werkt het op GitHub Pages.

## Scope
**Wel:**
- Nieuw veld in `site.yaml`: `aanmeldformulier.url` en `aanmeldformulier.retraiteVeld` (de `entry.…`-code uit Google Forms)
- Staat de url erin, dan wordt de knop bij elke retraite "Vraag een plek aan" en opent het formulier met die retraite (titel + datum) ingevuld; anders blijft de huidige maillink
- Per retraite kan in de front matter een eigen formulierlink staan (`aanmeldlink`) die voorgaat
- De melding "Het aanmeldformulier volgt binnenkort" verdwijnt als de url gevuld is
- Uitleg in de README: hoe je de vooraf ingevulde link en de `entry`-code vindt
- Voorstel voor de formuliervelden (zie hieronder), als checklist voor Daan

**Niet:**
- Het Google Form zelf maken (doet Daan)
- Een bedankpagina op de eigen site (Google Forms toont zelf een bevestiging; die tekst levert deze story wel aan)
- Het formulier insluiten in een iframe (traag op mobiel, slechter toegankelijk)

## Voorstel formuliervelden (voor Daan, op basis van 2025)
- Retraite (vooraf ingevuld) · Naam · E-mail · Telefoonnummer (voor het kennismakingsgesprek)
- Wat trekt je aan in deze retraite? (open)
- Dieetwensen of allergieën
- Kamervoorkeur: geen voorkeur / samen met iemand die ik ken / eigen kamer op aanvraag
- Is er iets waar we rekening mee kunnen houden? (open, vrijwillig)
- Vinkje: "Ik heb de voorwaarden en het privacybeleid gelezen" (verplicht, met links)
- Instellingen: "E-mailadressen verzamelen" + "Kopie van antwoorden naar respondent" aan → bevestigingsmail (US-12); meldingen aan voor de gedeelde mailbox (US-13)

## Acceptatiecriteria
1. **Gegeven** een lege `aanmeldformulier.url`, **dan** werkt alles zoals nu (maillink, melding zichtbaar).
2. **Gegeven** een gevulde url en `retraiteVeld`, **wanneer** ik bij de voorjaarsretraite op "Vraag een plek aan" klik, **dan** opent het formulier met "Voorjaarsretraite, 25 – 29 april 2027" ingevuld.
3. **Gegeven** een retraite met eigen `aanmeldlink`, **dan** gebruikt die knop die link.
4. Bij retraites met status "vol" heet de knop "Zet me op de wachtlijst"; bij voorbije retraites is er geen knop.
5. Externe links openen in hetzelfde tabblad en de linktekst zegt dat je naar een formulier gaat (geen verrassing voor schermlezers).
6. De README legt in gewone taal uit hoe je de link en de `entry`-code opzoekt.
7. Werkt zonder JavaScript; 375 px zonder horizontaal scrollen.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Formulierlink | leeg | Daan vult in |
| Bevestigingstekst in Google Forms | "Dank je wel! Je aanvraag is binnen. Binnen een paar dagen nemen we contact met je op voor een kort kennismakingsgesprek. Warme groet, Vincent & Daan" | Concept |

## Technische aanpak (kort)
- `src/_data/site.yaml`: nieuw blok met uitleg-commentaar
- Nieuwe filter `aanmeldUrl(retraite, site)` in `eleventy.config.js` / `lib/retraites.js` die de link met de juiste parameter maakt (URL-gecodeerd)
- `partials/retraite-kaart.njk`, `layouts/retraite.njk`, `aanmelden.njk`: knop kiest formulier of mail
- README: sectie "Aanmeldformulier koppelen"

## Open vragen voor Daan
1. Welke velden wil je echt in het formulier? (Het voorstel hierboven is een start.)
2. Vragen naar gezondheid/blessures: ja of nee? Raakt aan het privacybeleid (016).
3. Gebruiken jullie Hipsy nog voor de betaling, of een betaallink (Mollie/Stripe)? Dat staat dan in de bevestiging.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
