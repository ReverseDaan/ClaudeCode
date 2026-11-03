# Stillness and Strokes: website

De website is gebouwd met [Eleventy](https://www.11ty.dev/). Eleventy maakt van
templates en tekstbestanden een gewone website (HTML en CSS) die je overal
gratis kunt hosten.

## Eenmalig installeren

Je hebt [Node.js](https://nodejs.org/) nodig (versie 18 of hoger). Voer daarna
in deze map uit:

```bash
npm install
```

## Lokaal bekijken

```bash
npm start
```

Open daarna http://localhost:8080 in je browser. Als je een bestand opslaat,
ververst de pagina vanzelf.

## Waar staat wat?

| Wat wil je aanpassen?                  | Bestand                    |
| -------------------------------------- | -------------------------- |
| Naam, contactgegevens, social, menu    | `src/_data/site.yaml`      |
| KvK, RSIN, statutaire zetel, ANBI      | `src/_data/stichting.yaml` |
| Tekst van een gewone pagina            | `src/<pagina>.md` (bijv. `src/kalender.md`) |
| Teksten op de homepagina               | `src/_data/home.yaml`      |
| Kleuren, lettertypes, witruimte        | `src/css/style.css` (bovenaan, onder "Design tokens") |
| Foto's                                 | `src/images/`              |

De naam van de organisatie staat **alleen** in `src/_data/site.yaml`. Pas je
hem daar aan, dan verandert hij overal op de site.

## Een retraite toevoegen

Elke retraite is één bestand in `src/retraites/`. Bovenin staan de gegevens
(datum, locatie, prijs, status), daaronder de beschrijving. Zo voeg je er een
toe, ook zonder programmeerkennis, rechtstreeks op GitHub:

1. Open op GitHub de map `src/retraites/` en klik op het meest recente
   retraitebestand (bijv. `2027-04-voorjaar.md`).
2. Kopieer de hele inhoud (het potloodje → alles selecteren → kopiëren).
3. Ga terug naar de map, kies **Add file → Create new file** en geef het een
   naam als `2027-09-najaar.md` (jaar-maand-korte-naam). Plak de inhoud.
4. Pas de gegevens en de beschrijving aan. De regels met `#` leggen uit wat
   je per veld invult.
5. Klik op **Commit changes**. Na ongeveer een minuut is de site bijgewerkt.

Elke retraite krijgt vanzelf een eigen pagina, bijv.
`/retraites/2027-04-voorjaar/`. De paklijst en de voorbereidingstips op die
pagina staan in `src/_data/praktisch.yaml` en gelden voor alle retraites. Wil
je per retraite vertellen hoe je er komt, vul dan in het retraitebestand het
veld `bereikbaarheid` in.

Een retraite wijzigen (bijv. de status op `vol` zetten) gaat op dezelfde
manier: bestand openen, potloodje, aanpassen, **Commit changes**.

**Klopt er iets niet?** Dan stopt het bouwen en blijft de vorige versie van de
site online. In het tabblad **Actions** zie je een rood kruisje; klik erop en
je ziet in gewone taal welk bestand en welk veld je moet aanpassen.

Begeleiders staan in `src/_data/personen.yaml`. Een retraite verwijst ernaar
met hun code (bijv. `daan`).

## Stijlen vergelijken

Rechtsonder op elke pagina staat een knop **Stijl** waarmee je wisselt tussen
een paar huisstijlen (thema's). Je keuze blijft bewaard als je doorklikt.

| Wat wil je?                     | Waar                                         |
| ------------------------------- | -------------------------------------------- |
| Kleuren van een thema aanpassen | `src/css/style.css`, sectie "1b. Thema's"    |
| Thema toevoegen                 | Kopieer een blok in sectie 1b, geef het een nieuwe code en zet code + naam in `src/_data/site.yaml` onder `stijlwisselaar` |
| Knop uitzetten (vóór lancering) | `src/_data/site.yaml`: `stijlwisselaar: aan: false` |

Het eerste thema in de lijst (nu **Bos**) is de standaard: dat zien
bezoekers als de knop uit staat. Kies je later een ander thema als vaste
stijl, kopieer dan de waarden van dat thema naar het `:root`-blok bovenaan
`style.css`.

## Foto's toevoegen

Zet je foto's in `src/images/` met deze bestandsnamen:

| Bestand        | Waar                          | Tip                                  |
| -------------- | ----------------------------- | ------------------------------------ |
| `hero-bos.jpg` | Grote afbeelding bovenaan home | Liggend, minstens 2000 px breed, maximaal ~400 kB |

Zolang een foto ontbreekt, toont de site een rustige groene achtergrond.

## Site bouwen

```bash
npm run build
```

De complete website komt in de map `_site/`. Die map hoef je niet zelf te
uploaden.

## Online

De site staat op **https://reversedaan.github.io/ClaudeCode/**. Bij elke push
naar `main` bouwt GitHub de site opnieuw (zie het tabblad *Actions*). Na
ongeveer een minuut staat de nieuwe versie online.
