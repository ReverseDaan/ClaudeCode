# Pagina-opzet (goedgekeurd 2 november 2026)

Uitwerking van het Miro-frame "Maken van een website" in user stories, met de
homepagina-wensen uit de eerste opdracht. Visuele versie met wireframes:
https://claude.ai/artifact/XAcnoia2J5JoqFQHEBfvJw (privé).

Dit is de **backlog**. Elke story wordt vóór het bouwen uitgewerkt volgens
`docs/user-story-template.md` in `stories/NNN-korte-naam.md` en apart
goedgekeurd (zie CLAUDE.md, "Werkwijze").

## Sitemap en menu

Home · Wat en waarom · Retraites en events · Kalender · Aanmelden · Over de
stichting · Contact. Daarnaast komt er één eventpagina per retraite
(`/retraites/<naam>/`), en de pagina's `/privacy/` en `/voorwaarden/`.

## Stories

| ID | Pagina | Story (kort) | Fase |
|---|---|---|---|
| US-01 | Home | Als bezoeker wil ik binnen een halve minuut snappen wat dit is: hero, intro kunst + stilte, "geen ervaring nodig", drie blokken aankomen/creëren/reflecteren | 1 |
| US-02 | Home | Als geïnteresseerde wil ik de eerstvolgende retraite zien (automatisch gekozen, met een aanmeldknop die de retraite alvast kiest, en een tekst als er niets gepland is) | 1 |
| US-03 | Home | Als twijfelaar wil ik ervaringen van deelnemers lezen (2 à 3 quotes, gemarkeerd als voorbeeldtekst) | 1 |
| US-04 | Home | Als bezoeker wil ik in één klik naar Kalender, Wat en waarom of Over de stichting | 1 |
| US-05 | Wat en waarom | Als niet-kunstzinnige bezoeker wil ik concreet lezen wat er in een sessie gebeurt: waarom, sessie stap voor stap, voor wie | 1 |
| US-06 | Wat en waarom | Als geïnteresseerde wil ik de begeleiders zien: foto, naam, rol en bio (uit `personen.yaml`) | 1 |
| US-07 | Retraites en events | Als bezoeker wil ik het aanbod per formaat (dag, weekend, meerdaags) zien, met prijsindicatie en volgende datum, zonder voorbije retraites | 1 |
| US-08 | Eventpagina | Als geïnteresseerde wil ik alles over één retraite op één pagina, met een aanmeldknop (of "Op de wachtlijst" als hij vol is) | 1 |
| US-09 | Kalender | Als iemand die al wil, wil ik alle data in een lijst per maand zien, met de status vrij / bijna vol / vol | 1 |
| US-10 | Kalender | Maandraster | Later |
| US-11 | Aanmelden | Als deelnemer wil ik een plek aanvragen via een formulier. Duidelijk een aanvraag, geen boeking; akkoord met de voorwaarden is verplicht | 1 |
| US-12 | Aanmelden | Als aanvrager wil ik een bedankpagina en een bevestigingsmail | 1 |
| US-13 | Aanmelden | Als organisator wil ik elke aanmelding per mail ontvangen | 1 |
| US-14 | Over de stichting | Als bezoeker wil ik zien wie erachter zit: missie, geschiedenis, bestuur, KvK, RSIN, en ANBI alleen als die van toepassing is | 1 |
| US-15 | Contact | Als bezoeker met een vraag wil ik laagdrempelig contact: formulier, e-mail, telefoon/WhatsApp, social en reactietijd | 1 |
| US-16 | Overal | Als bezoeker wil ik overal hetzelfde menu en dezelfde voettekst, ook op mobiel | 1 |
| US-17 | Juridisch | Als aanvrager wil ik het privacybeleid en de voorwaarden kunnen lezen | 1 |
| US-18 | Beheer | Als organisator zonder programmeerkennis wil ik een retraite toevoegen door één bestand te kopiëren | 1 |
| US-19 | Overal | Als Engelstalige bezoeker wil ik de site in het Engels | Later |

## Route van een bezoeker

Kalender of Retraites en events → eventpagina → data, prijs en wat is
inbegrepen lezen → aanmeldformulier → beoordeling binnen enkele dagen → plek
vrij? Ja: bevestigingsmail en betaallink. Nee: wachtlijst of een andere datum.
