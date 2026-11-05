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
| Over ons, Onze filosofie, Ons aanbod   | `src/over-ons.md`, `src/over-ons/filosofie.md`, `src/over-ons/aanbod.md` |
| Los aanbod van Daan en Vincent         | `src/_data/aanbod.yaml`    |
| "Is dit iets voor mij?"                | `src/_data/pastbijmij.yaml` |
| Veelgestelde vragen                    | `src/_data/vragen.yaml`    |
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
`/kalender/2027-04-voorjaar/`. De paklijst en de voorbereidingstips op die
pagina staan in `src/_data/praktisch.yaml` en gelden voor alle retraites. Wil
je per retraite vertellen hoe je er komt, vul dan in het retraitebestand het
veld `bereikbaarheid` in. Op dezelfde manier vul je per retraite
`aankomst` en `vertrek` in (anders staat er "volgt"), `verblijf` (hoe je
slaapt; zonder dit veld staat het blok "Slapen" er niet) en
`digitale_rust: true` (dan staat het blok "Digitale rust" erbij).

Een retraite wijzigen (bijv. de status op `vol` zetten) gaat op dezelfde
manier: bestand openen, potloodje, aanpassen, **Commit changes**.

**Klopt er iets niet?** Dan stopt het bouwen en blijft de vorige versie van de
site online. In het tabblad **Actions** zie je een rood kruisje; klik erop en
je ziet in gewone taal welk bestand en welk veld je moet aanpassen.

Begeleiders staan in `src/_data/personen.yaml`. Een retraite verwijst ernaar
met hun code (bijv. `daan`).

## Aanmeldformulier koppelen

Aanmelden gaat via een Google Form in het gedeelde account. Zolang er geen
formulier gekoppeld is, opent de knop "Vraag een plek aan" een mail.

1. Maak het formulier in Google Forms. Zet de vraag **Retraite** als eerste
   vraag (kort antwoord). Zet onder **Instellingen → Antwoorden** aan:
   *E-mailadressen verzamelen* en *Kopie van antwoorden naar respondent*
   (dan krijgt de aanvrager een bevestiging). Zet bij **Antwoorden** de
   melding per mail aan (dan krijgen jullie elke aanmelding in de mailbox).
2. Kopieer de link van het formulier (knop **Verzenden** → linkje) en zet die
   in `src/_data/site.yaml` bij `aanmeldformulier` → `url`.
3. De code van de vraag "Retraite" vind je zo: kies in het formulier het
   menu met de drie puntjes → **Vooraf ingevulde link ophalen**. Vul bij
   Retraite iets in, klik **Link ophalen** en kopieer de link. Daarin staat
   iets als `entry.123456789=...`. Zet `entry.123456789` bij `retraiteVeld`.
4. **Commit changes.** De knoppen op de aanmeldpagina en op de pagina van elke
   retraite openen nu het formulier, met de retraite al ingevuld.

Heeft één retraite een eigen formulier, zet dan in dat retraitebestand een
`aanmeldlink`. Die gaat voor het algemene formulier.

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

De site staat op **https://reversedaan.github.io/ClaudeCode/**. GitHub bouwt
de site opnieuw (zie het tabblad *Actions*, workflow "Publiceren op GitHub
Pages"):

- bij elke push of merge naar `main`; na ongeveer een minuut staat de nieuwe
  versie online;
- elke nacht rond 04:00, zodat een retraite die voorbij is vanzelf van Home,
  en de Kalender verdwijnt, ook als er niets is aangepast.

Een adres dat niet bestaat, toont de eigen pagina "Pagina niet gevonden"
(`src/404.md`).

## Als de controle rood is

Bij elke pull request en bij elke push naar een andere branch dan `main`
draait de workflow **Controle**. Die bouwt de site en kijkt of:

- alle retraitebestanden kloppen;
- er geen losse template-code (`{{` of `{%`) op een pagina staat;
- elke pagina één hoofdkop en een titel heeft;
- alle links naar andere pagina's van de site werken.

Zie je een rood kruisje bij je pull request? Klik op **Details** en open de
stap die rood is. Daar staat in gewone taal welk bestand of welke link niet
klopt. Pas het aan en push opnieuw; de controle draait vanzelf weer. Merge
pas als hij groen is.

## Instellingen in GitHub (eenmalig)

Deze drie instellingen zet je zelf aan in GitHub. Ze kosten samen een paar
minuten.

1. **`main` beschermen** tegen per ongeluk overschrijven of verwijderen.
   *Settings → Branches → Add branch ruleset* (of *Add rule*). Naam: `main`,
   target: de branch `main`. Vink aan: **Restrict deletions** en **Block force
   pushes**. Zet *Require a pull request* **niet** aan, anders kan niemand meer
   rechtstreeks in GitHub een retraite toevoegen. Opslaan.
2. **Dependabot** laat weten als er een beveiligingslek of update is voor de
   gebruikte pakketten (Eleventy, de lettertypes, de GitHub-onderdelen).
   *Settings → Code security* (of *Security*): zet **Dependabot alerts** en
   **Dependabot security updates** aan. Dependabot opent dan zelf een pull
   request met de oplossing; de Controle laat zien of alles nog werkt.
3. **Oude branches opruimen.** *Settings → General*, onder *Pull Requests*:
   vink **Automatically delete head branches** aan. Ga daarna naar
   *Code → Branches* en verwijder de branches die al gemerged zijn
   (alles behalve `main` en de branch waar je nu aan werkt).
