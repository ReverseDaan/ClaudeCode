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

- **Menu en pagina's: volg het siteplan.** Home · Wat en waarom · Retraites en
  events · Kalender · Aanmelden · Over de stichting · Contact. "Over ons" en
  "Programma" vervallen: de begeleiders en "een sessie stap voor stap" komen op
  Wat en waarom.
- **Taal: eerst alles in het Nederlands**, maar zo opgezet dat Engels later onder
  `/en/` kan worden toegevoegd (aparte fase, US-19). Zet teksten daarom in data-
  of Markdown-bestanden en niet in templates.
- **Stichting, KvK, RSIN en ANBI:** nu bouwen met duidelijk gemarkeerde
  placeholders. Het ANBI-blok verschijnt alleen als een instelling in het
  databestand dat aangeeft.
- **Formulierdienst:** nog niet gekozen. Er moeten twee mails komen (naar de
  organisatie én een bevestiging aan de aanvrager). Vergelijk de gratis opties
  (Formspree, Web3Forms, Basin) in de story voor Aanmelden en laat Daan kiezen.
- **Gedeeld account:** de repo staat nu onder ReverseDaan. Overzetten naar een
  gedeeld account of een organisatie-account gebeurt later.
- **Framework:** Eleventy blijft.

## Nog te beslissen: niet zelf invullen

Kies hier niet zelf een kant: benoem het in de user story onder "Open vragen"
en gebruik tot die tijd placeholders.

- **Naam en domein**: zie hierboven.
- **Rechtsvorm** (stichting ja/nee): bepaalt of er echte KvK-, RSIN- en
  ANBI-gegevens op de site komen.
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
- Formulieren (aanmelden, contact): via een externe formulierdienst, nog te
  kiezen (zie Besluiten). Er is geen eigen backend.
- Hosting: **GitHub Pages**, via de workflow `.github/workflows/pages.yml`.
  Bij elke push naar `main` wordt de site gebouwd en gepubliceerd op
  https://reversedaan.github.io/ClaudeCode/. Omdat de site in een submap staat,
  gebruikt Eleventy een pathPrefix (HtmlBasePlugin). Schrijf links gewoon als
  `/pagina/`, want de plugin zet het voorvoegsel ervoor. Alleen URL's in
  `style`-attributen of CSS moeten door het filter `| url`.
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
├── .gitignore              # o.a. node_modules/ en _site/
└── src/
    ├── _data/
    │   ├── site.yaml       # naam, slogan, contact, social, menu
    │   ├── home.yaml       # teksten homepagina
    │   ├── ervaringen.yaml # deelnemersquotes
    │   ├── personen.yaml   # begeleiders en bestuursleden
    │   └── stichting.yaml  # KvK, RSIN, zetel, ANBI aan/uit
    ├── _includes/
    │   ├── layouts/
    │   │   └── base.njk    # HTML-skelet: head, header, footer
    │   └── partials/
    │       ├── header.njk
    │       ├── footer.njk
    │       ├── retraite-kaart.njk
    │       └── penseelstreek.njk   # SVG-scheidingslijn
    ├── retraites/
    │   ├── retraites.json  # standaardinstellingen voor alle retraites
    │   └── 2027-04-voorjaar.md     # voorbeeld
    ├── css/
    │   └── style.css
    ├── js/
    │   └── menu.js
    ├── images/             # eigen foto's (nu placeholders)
    ├── index.njk           # Home
    ├── wat-en-waarom.md
    ├── retraites.njk       # Retraites en events (per formaat)
    ├── kalender.njk        # dezelfde retraites, per datum
    ├── aanmelden.njk
    ├── stichting.md        # Over de stichting
    ├── contact.njk
    ├── privacy.md
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
- [ ] 7. Retraite- en personendata met één voorbeeldretraite (US-18)
- [ ] 8. Home afmaken: intro, drie blokken, eerstvolgende retraite, ervaringen, drie routes (US-01 t/m US-04)
- [ ] 9. Retraites en events, plus de eventpagina (US-07, US-08)
- [ ] 10. Kalender, als lijst per maand (US-09)
- [ ] 11. Wat en waarom (US-05, US-06)
- [ ] 12. Aanmelden, na de keuze voor een formulierdienst (US-11 t/m US-13)
- [ ] 13. Contact (US-15)
- [ ] 14. Over de stichting, privacybeleid en voorwaarden (US-14, US-17)
- [ ] 15. Controle: mobiel, toegankelijkheid, beeldoptimalisatie, SEO-basis
- [ ] 16. Later: Engels (US-19), maandweergave (US-10), eigen domein

## Menu

Home · Wat en waarom · Retraites en events · Kalender · Aanmelden · Over de stichting · Contact
