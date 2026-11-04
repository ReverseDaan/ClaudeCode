# CLAUDE.md — Website retraite-organisatie

Dit bestand legt de uitgangspunten vast voor de website. Lees het aan het begin
van elke sessie en houd je eraan. Werk de sectie "Voortgang" bij als een stap af is.

## Over de organisatie

- Twee mensen organiseren samen retraites.
- Kern: kunst combineren met introspectie en vertragen. Deelnemers maken iets
  met hun handen (schilderen, tekenen) en gebruiken dat als ingang om naar
  binnen te kijken en tot rust te komen.
- Centraal thema: **"reis naar binnen"**.
- Naam: **Stillness and Strokes**. ("Nest" was een werknaam en wordt niet meer gebruikt.)
  Let op: dit is de oude naam; er wordt een nieuwe, Nederlandse naam gezocht.
  Tot die vastligt blijft "Stillness and Strokes" in `site.yaml` staan.
  De naam staat op precies één plek, `src/_data/site.yaml` (veld `naam`), en
  wordt in templates altijd gebruikt als `{{ site.naam }}`. Zet de naam nooit
  rechtstreeks in een template, tekstbestand of CSS, zodat hij later met één
  wijziging aan te passen is.

## Bronnen

1. **`docs/siteplan.md`**: momentopname van het Miro-frame "Maken van een
   website" (sitemap, de zeven pagina's, bezoekersroute, aanmeldformulier,
   juridische eisen, lanceercontrole).
2. **Miro-bord**: https://miro.com/app/board/uXjVIXPOJ5k=/ (frame "Maken van een
   website"). Als de Miro-koppeling beschikbaar is, controleer dan of het bord
   afwijkt van `docs/siteplan.md` en meld verschillen. Schrijf of wijzig
   **nooit** iets op het Miro-bord.

## Werkwijze: eerst user story, dan pas bouwen

**Je schrijft geen code en wijzigt geen bestanden buiten `stories/` voordat
Daan een user story expliciet heeft goedgekeurd.**

1. Kies één afgebakend stuk: in principe de volgende open stap uit
   "Plan en voortgang", of een kleiner deel daarvan.
2. Schrijf een user story volgens `docs/user-story-template.md` en sla die op
   als `stories/NNN-korte-naam.md` met status `Concept`.
3. Laat de story in de chat zien en **stop**. Wacht op een antwoord.
4. Alleen bij een expliciete goedkeuring ("akkoord", "goedgekeurd", "bouw maar")
   zet je de status op `Goedgekeurd` en begin je te bouwen. Vragen, opmerkingen
   of "ziet er goed uit, maar…" zijn géén goedkeuring: verwerk ze en leg de
   story opnieuw voor.
5. Bouw alleen wat in de goedgekeurde story staat. Kom je iets tegen dat buiten
   de scope valt, stop dan en stel een nieuwe of aangepaste story voor.
6. Na het bouwen: loop elk acceptatiecriterium na, meld per criterium of het
   gehaald is, zet de status op `Gebouwd — ter review` en werk "Plan en
   voortgang" bij. Daan zet de story op `Afgerond`.

Eén story tegelijk. Nooit meerdere stories in één keer bouwen.

## Besluiten (2 november 2026)

Daan heeft de pagina-opzet goedgekeurd (`docs/pagina-opzet.md`, story-overzicht
US-01 t/m US-19). Daarin zijn deze punten besloten:

- **Menu en pagina's: volg het siteplan**, plus "Veelgestelde vragen" (Daan,
  3 nov 2026, story 022). Home · Wat en waarom · Retraites en events · Kalender ·
  Aanmelden · Veelgestelde vragen · Over de stichting · Contact. "Over ons" en
  "Programma" vervallen: de begeleiders en "een sessie stap voor stap" komen op
  Wat en waarom.
- **Taal: eerst alles in het Nederlands**, maar zo opgezet dat Engels later onder
  `/en/` kan worden toegevoegd (aparte fase, US-19). Zet teksten daarom in data-
  of Markdown-bestanden en niet in templates.
- **Stichting, KvK, RSIN en ANBI:** nu bouwen met duidelijk gemarkeerde
  placeholders. Het ANBI-blok verschijnt alleen als een instelling in het
  databestand dat aangeeft.
- **Formulierdienst:** Google Forms (stories 014 en 018). Meldingen naar de
  gedeelde mailbox en een kopie aan de aanvrager regel je in Google Forms.
  Aanbetaling € 100; annuleringstermijnen als in editie 1 (Daan, 3 nov 2026).
- **Gedeeld account:** de repo staat nu onder ReverseDaan. Overzetten naar een
  gedeeld account of een organisatie-account gebeurt later.
- **Framework:** Eleventy blijft.

## Nog te beslissen: niet zelf invullen

Kies hier niet zelf een kant: benoem het in de user story onder "Open vragen"
en gebruik tot die tijd placeholders.

- **Naam en domein**: zie hierboven.
- **Rechtsvorm** (stichting ja/nee): bepaalt of er echte KvK-, RSIN- en
  ANBI-gegevens op de site komen.
  Tot die tijd staan er gegenereerde voorbeeldgegevens in `stichting.yaml`
  (`voorbeeld: true` zet de melding "voorbeeldgegevens" aan). Daan, 3 nov 2026.
- **Prijzen, data en locaties** van retraites: niet als bevestigd tonen tenzij
  Daan dat aangeeft. Ook de voorjaarsretraite van april 2027 is nog niet
  definitief.
- **Beheer zonder code**: Vincent moet een retraite kunnen toevoegen. Eén
  Markdown-bestand per retraite is het startpunt; of er later een eenvoudig CMS
  bij komt, is open.
- **Betalen**: geen checkout op de site. Na goedkeuring van een aanmelding volgt
  een betaallink (Mollie, Stripe of Hipsy). Aanmelden is **geen directe
  boeking**; dat moet op de site duidelijk zijn.
- Gebruik geen persoonsgegevens van echte deelnemers, ook niet als voorbeeld.
  Uitzondering: de feedback in het Miro-frame "Feedback" mag op de site. Daar
  is akkoord voor (Daan, 2 november 2026). Gebruik geen achternamen of andere
  gegevens die een deelnemer herkenbaar maken, tenzij Daan dat aangeeft.

## Doelgroep en toon

- Volwassenen die even uit de drukte willen stappen en nieuwsgierig zijn naar
  creatief werken, ook als ze zichzelf niet "kunstzinnig" vinden.
- Toon: uitnodigend, warm en laagdrempelig. **Niet zweverig.** Schrijf
  concreet (wat doe je, hoe ziet een dag eruit) in plaats van vaag of spiritueel.
- Gebruik "je/jij" en niet "u".
- De site is in het **Nederlands**; een Engelse versie volgt later (zie Besluiten).

## Look & feel

- Sfeer: rustig, natuurlijk en warm, met veel witruimte en het gevoel van vertragen.
- Hoofdbeeld: een bosrijke omgeving.
- Kleuren (als CSS-variabelen in `src/css/style.css`):
  - mosgroen (primair)
  - zand- en aardetinten (achtergronden en vlakken)
  - donkerbruin voor tekst (geen puur zwart)
  - zacht oker als accent voor knoppen
- Typografie: een elegant schreeflettertype voor koppen en een rustig, goed
  leesbaar sans-serif voor de lopende tekst.
- Kunstaccenten: subtiele penseelstreek-achtige scheidingslijnen en
  handgetekende accenten, zelf gemaakt in SVG/CSS (geen externe illustraties).
- Foto's: tijdelijk placeholders. De eigen foto's komen later in `src/images/`.
  Elke placeholder krijgt een duidelijke bestandsnaam (bijv. `hero-bos.jpg`)
  en een zinnige `alt`-tekst.
- **Mobile first.** Op mobiel moet de site er minstens zo goed uitzien als
  op desktop.
- Toegankelijk: voldoende contrast, zichtbare focus-stijlen, semantische
  HTML en respect voor `prefers-reduced-motion`.

## Techniek

- **Eleventy (11ty)**: een static site generator op Node.js met
  Nunjucks-templates. De output is gewone HTML/CSS die overal gehost kan worden.
- **Inhoud los van opmaak**:
  - `src/_data/site.yaml`: naam, slogan, contactgegevens, social media, menu
  - `src/_data/home.yaml`: teksten van de homepagina-secties
  - `src/_data/ervaringen.yaml`: quotes van deelnemers
  - `src/retraites/*.md`: één bestand per retraite, met de gegevens in
    front matter (titel, datum, locatie, prijs, plekken, aanmeldlink) en de
    beschrijving als Markdown
  - `src/_data/personen.yaml`: begeleiders en bestuursleden (foto, naam, rol, bio)
  - `src/_data/stichting.yaml`: KvK, RSIN, statutaire zetel, ANBI aan/uit
  - Lopende tekst van pagina's (Wat en waarom, Over de stichting, privacy,
    voorwaarden) als Markdown
- Gebruik YAML in plaats van JSON voor data, omdat YAML commentaar toestaat en
  makkelijker met de hand te bewerken is. Zet bij elk databestand
  uitleg-commentaar voor de eigenaar.
- **Gewone CSS** met custom properties (design tokens). Geen framework, geen
  Tailwind en geen preprocessor.
- **Zo min mogelijk JavaScript**: alleen waar het nodig is (bijv. het mobiele
  menu). Geen frontend-framework.
- De "eerstvolgende retraite" wordt bij het bouwen automatisch bepaald: de
  eerste retraite met een datum in de toekomst.
- Formulieren (interesselijst, aanmelden): via Google Forms (zie Besluiten).
  Er is geen eigen backend.
- **Geen externe bronnen**: lettertypes, scripts en stijlen komen van de site
  zelf (lettertypes via de npm-pakketten van Fontsource). De
  Content-Security-Policy in `base.njk` blokkeert al het andere; gebruik dus
  geen `style="…"`-attributen en geen inline `<script>`.
- Hosting: **GitHub Pages**, via de workflow `.github/workflows/pages.yml`.
  Bij elke push naar `main` wordt de site gebouwd en gepubliceerd op
  https://reversedaan.github.io/ClaudeCode/. Omdat de site in een submap staat,
  gebruikt Eleventy een pathPrefix (HtmlBasePlugin). Schrijf links gewoon als
  `/pagina/`, want de plugin zet het voorvoegsel ervoor. In CSS gebruik je
  relatieve paden (bijv. `url("../fonts/…")`).
  Let op: Netlify Forms werkt niet op GitHub Pages.
- De eigenaar heeft een achtergrond in Mendix en kent wat Java/JavaScript.
  Houd de code daarom leesbaar en eenvoudig, met korte Nederlandse comments
  waar dat helpt. Vermijd slimmigheden.
- Placeholder-teksten (zoals voorbeeldquotes) worden zichtbaar gemarkeerd als
  voorbeeldtekst, zodat ze niet per ongeluk live gaan.

## Mappenstructuur

```
claudecode/
├── CLAUDE.md
├── README.md               # uitleg voor de eigenaar: teksten aanpassen, retraite toevoegen
├── docs/
│   ├── siteplan.md         # momentopname van het siteplan op Miro
│   ├── pagina-opzet.md     # goedgekeurde pagina-opzet: overzicht user stories US-01 t/m US-19
│   └── user-story-template.md
├── stories/                # user stories, één bestand per story (NNN-korte-naam.md)
├── package.json
├── eleventy.config.js      # Eleventy-configuratie
├── lib/
│   ├── retraites.js        # controle en sortering van retraites (gebruikt in eleventy.config.js)
│   └── controle.js         # controle van de gebouwde site (workflow Controle)
├── .gitignore              # o.a. node_modules/ en _site/
└── src/
    ├── _data/
    │   ├── site.yaml       # naam, slogan, contact, social, menu
    │   ├── home.yaml       # teksten homepagina
    │   ├── ervaringen.yaml # deelnemersquotes
    │   ├── personen.yaml   # begeleiders en bestuursleden
    │   ├── stichting.yaml  # KvK, RSIN, zetel, ANBI aan/uit
    │   ├── praktisch.yaml  # paklijst, voorbereiding, standaardtekst bereikbaarheid
    │   ├── vragen.yaml     # veelgestelde vragen
    │   └── pastbijmij.yaml # "Is dit iets voor mij?"
    ├── _includes/
    │   ├── layouts/
    │   │   ├── base.njk    # HTML-skelet: head, header, footer
    │   │   ├── pagina.njk  # gewone pagina's
    │   │   └── retraite.njk # pagina van één retraite
    │   └── partials/
    │       ├── header.njk
    │       ├── footer.njk
    │       ├── retraite-kaart.njk
    │       ├── personen-lijst.njk  # kaarten van begeleiders/oprichters uit personen.yaml
    │       ├── ervaringen.njk      # quotes uit ervaringen.yaml
    │       ├── past-bij-mij.njk    # "Is dit iets voor mij?"
    │       ├── interesselijst.njk  # "Houd me op de hoogte"
    │       ├── aanmeldstappen.njk  # de drie stappen van het aanmelden
    │       ├── home-stappen.njk    # aankomen, creëren, reflecteren (Home)
    │       ├── penseelstreek.njk   # SVG-scheidingslijn
    │       └── stijlwisselaar.njk  # tijdelijke knop om thema's te vergelijken
    ├── retraites/
    │   ├── retraites.json  # standaardinstellingen voor alle retraites (tag, geen eigen pagina)
    │   └── 2027-04-voorjaar.md     # de voorjaarsretraite 2027
    ├── css/
    │   ├── fonts.css       # lettertypes (eigen site, geen Google)
    │   ├── fonts-themas.css # extra lettertypes voor de stijlwisselaar
    │   └── style.css
    ├── js/
    │   ├── vooraf.js       # draait in de <head>: js-class en onthouden thema
    │   ├── menu.js
    │   └── stijlwisselaar.js
    ├── images/             # eigen foto's; nu alleen deelkaart.jpg (+ bron .svg)
    ├── index.njk           # Home
    ├── wat-en-waarom.md
    ├── retraites.njk       # Retraites en events (op datum)
    ├── kalender.njk        # dezelfde retraites, per datum
    ├── aanmelden.njk
    ├── stichting.md        # Over de stichting
    ├── contact.md
    ├── vragen.njk          # Veelgestelde vragen
    ├── agenda.njk          # maakt per retraite een .ics-bestand
    ├── sitemap.njk         # /sitemap.xml
    ├── robots.njk          # /robots.txt
    ├── favicon.svg         # icoontje (ook favicon.png en apple-touch-icon.png)
    ├── privacy.md
    ├── 404.md              # pagina "niet gevonden"
    └── voorwaarden.md
```

De build-output komt in `_site/`. Die wordt niet gecommit.

## Commando's

- `npm install`: dependencies installeren (eenmalig)
- `npm start`: lokale ontwikkelserver op http://localhost:8080
- `npm run build`: site bouwen naar `_site/`

## Plan en voortgang

Werk in kleine stappen, elk via een goedgekeurde user story (zie "Werkwijze").
Laat na elke stap zien wat er is veranderd.

- [x] 1. Projectopzet: Eleventy, package.json, .gitignore, lege basislayout, README
- [x] 2. Basisstijl: kleuren, lettertypes, typografie en spacing als CSS-variabelen
- [x] 3. Header met menu (inclusief mobiel menu) en footer, gevuld vanuit site.yaml
- [x] 4. Home: hero met bosbeeld, naam, slogan en de knop "Bekijk de retraites"
- [~] 5. Online via GitHub Pages (workflow staat; Pages-bron moet op "GitHub Actions")

Vervolg in de goedgekeurde volgorde uit `docs/pagina-opzet.md`. Elke stap
wordt eerst een story in `stories/`.

- [x] 6. Menu en voettekst volgens de nieuwe sitemap, plus lege pagina's (US-16), story 001: ter review
- [x] 7. Retraite- en personendata met de voorjaarsretraite (US-18), story 003: ter review
- [x] 8. Home afmaken: intro, drie blokken, eerstvolgende retraite, ervaringen, drie routes (US-01 t/m US-04), story 020: ter review
- [x] 9. Retraites en events (US-07, story 004) en de eventpagina met praktische informatie (US-08, story 008): ter review
- [x] 10. Kalender, als lijst per maand (US-09), story 004: ter review
- [x] 11. Wat en waarom (US-05, US-06), story 005: ter review
- [x] 12. Aanmelden (US-11 t/m US-13): drie stappen (story 017) en Google Forms met vooraf ingevulde retraite (story 018): ter review. Daan maakt het formulier en zet de link in `site.yaml`
- [x] 13. Contact, alleen het e-mailadres (US-15 ingeperkt, story 007): ter review
- [x] 14. Over de stichting (US-14, story 006, met voorbeeldgegevens), voorwaarden (US-17, story 015) en privacybeleid (story 016): ter review
- [~] 15. Controle: SEO-basis en beveiliging (stories 023–025): ter review. Nog te doen: beeldoptimalisatie (als er foto's zijn) en een laatste controle vóór de lancering
- [ ] 16. Later: Engels (US-19), maandweergave (US-10), eigen domein

Extra stories (buiten het stappenplan):

- [x] Story 002: stijlwisselaar met vier thema's (Bos, Zand, Groen & goud, Ochtend): ter review. Zet hem uit vóór de lancering (`site.yaml`).
- [x] Story 009: "Zet in je agenda" (.ics per retraite): ter review
- [x] Story 010: ervaringen van deelnemers op Home en Wat en waarom (US-03): ter review
- [ ] Story 011: galerij: in de wacht tot er foto's zijn
- [x] Story 012: "Is dit iets voor mij?" op Wat en waarom: ter review
- [x] Story 013: veelgestelde vragen op /vragen/: ter review
- [x] Story 022: vragen opgeschoond, maaltijden plantaardig, rol Begeleider, menu-item Veelgestelde vragen: ter review
- [x] Story 023: lettertypes zelf hosten, CSP, placeholders opgeruimd: ter review
- [x] Story 024: nachtelijke herbouw, 404-pagina, controle bij elke PR: ter review
- [x] Story 025: deelkaart, evenementgegevens, sitemap, favicon: ter review
- [x] Story 014: interesselijst "Houd me op de hoogte" (verborgen tot de formulierlink in site.yaml staat): ter review
- [x] Story 019: aankomst/vertrek, slapen en digitale rust op de eventpagina: ter review
- [ ] Story 021: retraites "in voorbereiding": in de wacht (nog niet tonen; Daan, 3 nov 2026)

## Menu

Home · Wat en waarom · Retraites en events · Kalender · Aanmelden · Veelgestelde vragen · Over de stichting · Contact
