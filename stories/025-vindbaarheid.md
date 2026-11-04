# 025 — Vindbaarheid en delen: deelkaart, evenementgegevens, sitemap en favicon

**Status:** Concept
**Bron:** Code-analyse 4 nov 2026 (vindbaarheid); `docs/siteplan.md` (lanceercontrole: SEO-basis); plan stap 15
**Afhankelijk van:** 023 (CSP en eigen bronnen)

## Story
Als **iemand die de site deelt of zoekt naar een creatieve retraite**
wil ik **een nette kaart zien als de link gedeeld wordt, en de retraite met datum vinden in Google**
zodat **mensen de retraite vinden en de link uitnodigt om erop te klikken**.

## Context
Wordt een link nu gedeeld via WhatsApp, Instagram of mail, dan verschijnt er alleen een kale URL of een willekeurige tekst. Zoekmachines krijgen geen sitemap en geen gestructureerde gegevens over de retraites. Dit is ook het SEO-deel van stap 15 in het plan.

## Scope
**Wel:**
1. **Deelkaart (Open Graph en Twitter-kaart)** op elke pagina: titel, beschrijving, URL, taal (`nl_NL`) en een afbeelding. Zolang er geen foto is: een eigen deelafbeelding (1200×630) in de huisstijl, met de naam uit `site.yaml` en een penseelstreek, gemaakt in SVG en bij het bouwen omgezet naar PNG.
2. **Evenementgegevens** (schema.org `Event`, als JSON-LD) op de pagina van elke komende retraite: naam, start- en einddatum, locatie (naam en plaats), prijs in euro met status (beschikbaar, uitverkocht), organisator (naam uit `site.yaml`) en de link naar aanmelden. Retraites met "onder voorbehoud" krijgen `EventScheduled` pas als ze bevestigd zijn.
3. **Organisatiegegevens** (schema.org `Organization`) op Home: naam, URL, e-mailadres.
4. **`sitemap.xml`** met alle pagina's (zonder 404 en agenda-bestanden) en een **`robots.txt`** die naar de sitemap wijst.
5. **Canonieke URL** op elke pagina, op basis van `site.adres`, zodat er bij een eigen domein maar één instelling verandert.
6. **Favicon**: een kleine penseelstreek in SVG, plus een PNG-versie voor oudere browsers en Apple-apparaten.
7. Elke pagina krijgt een eigen `description` (nu gebruiken veel pagina's de algemene omschrijving); teksten in de front matter.

**Niet:**
- Google Search Console of andere aanmeldingen (dat kan Daan zelf, staat in de README)
- Analytics of bezoekersstatistieken (botst met het privacybeleid)
- Engelse versies (US-19)

## Acceptatiecriteria
1. **Gegeven** een pagina, **dan** staan in de `<head>` `og:title`, `og:description`, `og:url`, `og:image`, `og:locale` en `twitter:card`, met absolute URL's die beginnen met `site.adres`.
2. De deelafbeelding is 1200×630 px, toont de naam uit `site.yaml` en is kleiner dan 300 kB.
3. **Gegeven** de voorjaarsretraite, **dan** is de JSON-LD geldig (gecontroleerd met de Schema.org-validator of een gelijkwaardige controle in de build) en bevat hij datum, locatie, prijs € 495, beschikbaarheid en de aanmeldlink.
4. **Gegeven** een voorbije retraite, **dan** staat er geen Event-JSON-LD op de pagina.
5. `sitemap.xml` bevat alle gewone pagina's en retraites met volledige URL's; `robots.txt` noemt de sitemap. Werkt ook met het voorvoegsel `/ClaudeCode/`.
6. Elke pagina heeft één `<link rel="canonical">` en een eigen `description`.
7. De favicon is zichtbaar in het browsertabblad (Chrome) en past bij alle vier de thema's.
8. Geen CSP-fouten (de JSON-LD past binnen de policy uit story 023).

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Deelafbeelding | Naam + penseelstreek op mosgroen | Tijdelijk, tot er een foto is |
| Beschrijvingen per pagina | Korte zin per pagina, van Claude | Concept, Daan leest mee |

## Technische aanpak (kort)
- `base.njk`: meta-tags, canonical, favicon
- `layouts/retraite.njk`: Event-JSON-LD via een nieuwe filter in `lib/retraites.js`
- `src/sitemap.njk`, `src/robots.njk` (nieuw)
- `src/images/deelkaart.svg` + omzetting naar PNG bij het bouwen; `src/favicon.svg`
- `description` in de front matter van elke pagina
- Controle: echte build, validatie van de JSON-LD in de controle-workflow uit story 024

## Open vragen voor Daan
1. Wil je dat retraites met status "onder voorbehoud" ook als evenement in Google kunnen verschijnen, of pas als ze bevestigd zijn? (Voorstel: pas na bevestiging.)
2. Mag ik de beschrijvingen per pagina zelf voorstellen? Je ziet ze bij de review.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
