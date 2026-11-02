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
| Teksten op de homepagina               | `src/_data/home.yaml`      |
| Kleuren, lettertypes, witruimte        | `src/css/style.css` (bovenaan, onder "Design tokens") |
| Foto's                                 | `src/images/`              |

De naam van de organisatie staat **alleen** in `src/_data/site.yaml`. Pas je
hem daar aan, dan verandert hij overal op de site.

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
