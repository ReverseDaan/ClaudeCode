# Siteplan S&S

Momentopname van het Miro-frame "Maken van een website" (bord: https://miro.com/app/board/uXjVIXPOJ5k=/), overgenomen op 2 november 2026. Het oorspronkelijke siteplan dateert van augustus 2026.

> Dit is een momentopname. Wijkt het Miro-bord af, dan geldt het bord en moet dit bestand worden bijgewerkt. Waar dit plan botst met CLAUDE.md, zie CLAUDE.md, sectie "Nog te beslissen".

Uitgangspunten: Nederlands met een Engelse versie, handmatige beoordeling van aanmeldingen, zelf bouwen met Claude Code (voorstel Daan, november 2026, nog af te stemmen met Vincent). WordPress is uit het plan.

## Opzet (voorstel)
- Code: eigen GitHub-repo, gebouwd met Claude Code; elke stap eerst als user story, pas bouwen na akkoord
- Framework en hosting: in deze repo al gekozen: Eleventy + GitHub Pages (zie CLAUDE.md, sectie Techniek)
- Kalender en events: één databestand per retraite (`src/retraites/*.md`); Retraites en events en Kalender worden daaruit opgebouwd
- Tweetalig: taalroutes NL/EN, Nederlands als hoofdtaal
- Aanmeldformulier: formulierdienst of eigen functie, met twee mails
- Betalen: betaallink na goedkeuring (Mollie, Stripe of Hipsy); geen checkout op de site
- Analytics: Plausible of Fathom (zonder cookies), of geen
- Open: hoe voegt iemand zonder code een retraite toe?

## A. Sitemap

```
Home
├── Wat en waarom (incl. voor wie)
├── Retraites en events ──┐
├── Kalender ─────────────┤──> Retraite- of eventpagina (één per retraite) ──> Aanmelden
├── Aanmelden
├── Over de stichting
└── Contact
```

- *Retraites en events* en *Kalender* tonen dezelfde inhoud op twee manieren: per thema en per datum.
- Elke pagina heeft dezelfde voettekst: snelle links, NL/EN-schakelaar, KvK en RSIN, links naar privacybeleid en algemene voorwaarden.

### Sjabloon retraite of event
- Titel, samenvatting en volledige beschrijving
- Data, locatie, prijs, capaciteit en vrije plekken
- Wat is inbegrepen, begeleider en fotogalerij
- Aanmeldknop die dit event alvast selecteert op de aanmeldpagina

### Sjabloon persoon (begeleider of bestuurslid)
- Foto, naam en rol
- Bio van twee tot drie zinnen

## B. Route van een bezoeker
1. Bekijkt Kalender of Retraites en events
2. Opent de pagina van een retraite
3. Leest data, prijs en wat is inbegrepen
4. Vult het aanmeldformulier in
5. De organisatie beoordeelt binnen enkele dagen
6. Plek vrij? → **ja:** bevestigingsmail met praktische info / **nee:** wachtlijst of mail met andere datum

Een nieuwe retraite toevoegen moet altijd in dezelfde vijf stappen kunnen: kopieer het databestand van de meest recente retraite → pas data, prijs, capaciteit, beschrijving en foto's aan → publiceer (verschijnt vanzelf bij Retraites en events én Kalender) → vul de Engelse tekst in → deel de link.

## C. De zeven pagina's

| # | Pad | Pagina | Doel | Bevat |
|---|-----|--------|------|-------|
| 01 | `/` | Home | De eerste dertig seconden: wat is dit, past het bij mij, wat klik ik hierna | Missie in één zin, korte uitleg van stilte en penseelstreken, de eerstvolgende retraite uit de kalender, drie routes: kalender, waarom, stichting |
| 02 | `/wat-en-waarom` | Wat en waarom | De filosofie en wat er in een sessie gebeurt; "voor wie" als eigen sectie zodat het menu compact blijft | Wat het is, waarom stilte ruimte maakt en schilderen een weg geeft (geen kunstervaring nodig), een sessie stap voor stap, bio's van de begeleiders |
| 03 | `/retreats` | Retraites en events | De catalogus: elk aanbod per formaat, te bekijken vóór iemand een datum kiest | Aanbod per type (dag, weekend, meerdaags), korte tekst, prijsindicatie, volgende datum, link naar elke eventpagina |
| 04 | `/kalender` | Kalender | Voor wie al wil en alleen een datum zoekt | Maand- of lijstweergave van bevestigde data, status vol/wachtlijst, links naar dezelfde eventpagina's |
| 05 | `/aanmelden` | Aanmelden | De pagina waar de rest van de site naartoe leidt | Aanmeldformulier, wat er na verzenden gebeurt, melding dat aanmeldingen handmatig worden beoordeeld en geen directe boeking zijn, link naar annuleringsbeleid |
| 06 | `/stichting` | Over de stichting | Vertrouwen en transparantie: wie zit erachter, is het betrouwbaar | Missie en korte geschiedenis, bestuursleden, KvK, RSIN, statutaire zetel, ANBI-gegevens indien van toepassing, donatie-info als dat kan |
| 07 | `/contact` | Contact | Lage drempel om iets te vragen vóór aanmelden | Contactformulier, direct e-mailadres, telefoon of WhatsApp, social media, verwachte reactietijd |

## Aanmeldformulier
Velden: naam, e-mail, telefoon, welke retraite, dieet of toegankelijkheid (optioneel), korte motivatie, akkoord met annulerings- en privacybeleid.
Bij verzenden twee mails: één naar de organisatie, één bevestiging aan de aanvrager.

## Juridisch
**Altijd op de site**
- Privacybeleid: wat het formulier verzamelt, waarom en hoe lang (AVG)
- Algemene voorwaarden: annulering, restitutie, en wat er gebeurt als een retraite het minimum aantal deelnemers niet haalt
- KvK-nummer, RSIN en statutaire zetel op de pagina Over de stichting

**Bij ANBI-status ook:** naam en RSIN, contactgegevens, doelstelling en samenvatting beleidsplan, namen van bestuurders en beloningsbeleid, activiteitenverslag, financiële verantwoording.

> Hangt af van de keuze voor een eigen stichting: zonder stichting geen RSIN of ANBI-status. Nog niet besloten.

## Lanceercontrole
- [ ] Alle kernpagina's gepubliceerd in NL en EN
- [ ] Minstens één retraite of event live met juiste data en prijs
- [ ] Aanmeldformulier getest, beide mails komen aan
- [ ] Privacybeleid, voorwaarden en (indien van toepassing) ANBI-gegevens gepubliceerd
- [ ] Cookietoestemming, als er tracking cookies zijn
- [ ] KvK en RSIN zichtbaar in de voettekst
- [ ] Op een telefoon gecontroleerd
- [ ] Domein gekoppeld aan de hosting en site live
- [ ] Minstens één ander teamlid weet hoe de volgende retraite wordt toegevoegd
