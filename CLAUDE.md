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
  De naam staat op precies één plek, `src/_data/site.yaml` (veld `naam`), en
  wordt in templates altijd gebruikt als `{{ site.naam }}`. Zet de naam nooit
  rechtstreeks in een template, tekstbestand of CSS, zodat hij later met één
  wijziging aan te passen is.

## Doelgroep en toon

- Volwassenen die even uit de drukte willen stappen en nieuwsgierig zijn naar
  creatief werken, ook als ze zichzelf niet "kunstzinnig" vinden.
- Toon: uitnodigend, warm en laagdrempelig. **Niet zweverig.** Schrijf
  concreet (wat doe je, hoe ziet een dag eruit) in plaats van vaag of spiritueel.
- Gebruik "je/jij" en niet "u".
- De hele site is in het **Nederlands**.

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
  - Gewone pagina's (Over ons, Programma) als Markdown
- Gebruik YAML in plaats van JSON voor data, omdat YAML commentaar toestaat en
  makkelijker met de hand te bewerken is. Zet bij elk databestand
  uitleg-commentaar voor de eigenaar.
- **Gewone CSS** met custom properties (design tokens). Geen framework, geen
  Tailwind en geen preprocessor.
- **Zo min mogelijk JavaScript**: alleen waar het nodig is (bijv. het mobiele
  menu). Geen frontend-framework.
- De "eerstvolgende retraite" wordt bij het bouwen automatisch bepaald: de
  eerste retraite met een datum in de toekomst.
- Formulieren (aanmelden, contact): via de formulierdienst van de host
  (Netlify Forms) of Formspree. Er is geen eigen backend.
- Hosting: gratis via Netlify of Cloudflare Pages, gekoppeld aan deze
  GitHub-repo. Bij elke push bouwt de site automatisch opnieuw.
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
├── package.json
├── eleventy.config.js      # Eleventy-configuratie
├── .gitignore              # o.a. node_modules/ en _site/
└── src/
    ├── _data/
    │   ├── site.yaml       # naam, slogan, contact, social, menu
    │   ├── home.yaml       # teksten homepagina
    │   └── ervaringen.yaml # deelnemersquotes
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
    ├── over-ons.md
    ├── retraites.njk       # overzicht van alle retraites
    ├── programma.md
    ├── aanmelden.njk
    └── contact.njk
```

De build-output komt in `_site/`. Die wordt niet gecommit.

## Commando's

- `npm install`: dependencies installeren (eenmalig)
- `npm start`: lokale ontwikkelserver op http://localhost:8080
- `npm run build`: site bouwen naar `_site/`

## Plan en voortgang

Werk in kleine stappen. Laat na elke stap zien wat er is veranderd.

- [x] 1. Projectopzet: Eleventy, package.json, .gitignore, lege basislayout, README
- [x] 2. Basisstijl: kleuren, lettertypes, typografie en spacing als CSS-variabelen
- [x] 3. Header met menu (inclusief mobiel menu) en footer, gevuld vanuit site.yaml
- [x] 4. Home: hero met bosbeeld, naam, slogan en de knop "Bekijk de retraites"
- [ ] 5. Home: intro (kunst + introspectie) en de penseelstreek-scheidingslijn
- [ ] 6. Home: drie blokken (aankomen, creëren, reflecteren)
- [ ] 7. Retraite-datamodel en een voorbeeldretraite, plus het blok "eerstvolgende retraite" op home
- [ ] 8. Home: blok "Over ons" met fotoplaceholder
- [ ] 9. Home: ervaringen (gemarkeerd als voorbeeldtekst)
- [ ] 10. Pagina Retraites (overzicht en detailpagina per retraite)
- [ ] 11. Pagina's Over ons en Programma
- [ ] 12. Aanmelden- en Contactpagina met formulier
- [ ] 13. Controle: mobiel, toegankelijkheid, beeldoptimalisatie, SEO-basis (title/description/OG)
- [ ] 14. Online zetten via Netlify of Cloudflare Pages

## Menu

Home · Over ons · Retraites · Programma · Aanmelden · Contact
