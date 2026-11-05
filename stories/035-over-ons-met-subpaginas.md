# 035 — "Over ons" met twee subpagina's: onze filosofie en ons aanbod

**Status:** Concept
**Bron:** Daan, 5 nov 2026
**Afhankelijk van:** 005 (Wat en waarom), 012 ("Is dit iets voor mij?"), 031 (begeleiders); vervangt het deel "Is dit iets voor mij?" van story 034

## Story
Als **bezoeker die wil weten wie jullie zijn en wat jullie doen**
wil ik **onder "Over ons" de filosofie en het aanbod apart kunnen lezen**
zodat **ik eerst begrijp waar jullie voor staan, en daarna zie wat ik bij jullie kan doen: een retraite, of een losse sessie bij Daan of Vincent**.

## Context
"Wat en waarom" bevat nu alles in één lange pagina: wat het is, waarom, een dag, "Is dit iets voor mij?", ervaringen en de begeleiders. Daan wil het menu-item "Over ons" noemen, met twee subitems:
- **de filosofie**: wat we doen en waarom, zonder data of kalender;
- **het aanbod**: eerst de retraites, daarna wat Daan en Vincent ieder los aanbieden (zoals persoonlijk begeleide meditatiesessies bij Daan).
De algemene pagina "Over ons" mag naar de retraites linken.

Dit wijkt af van het besluit van 2 november ("Over ons" vervalt, alles op Wat en waarom); CLAUDE.md wordt daarop bijgewerkt.

## Scope
**Wel:**

*A. Menu*
1. "Wat en waarom" wordt **"Over ons"**, met twee subitems: **"Onze filosofie"** en **"Ons aanbod"** (zie open vraag 2). Het menu: Home · Over ons (Onze filosofie · Ons aanbod) · Kalender · Aanmelden · Veelgestelde vragen · Over de stichting · Contact.
2. Op de laptop: naast "Over ons" staat een pijltje. Klik of tik je erop, of gebruik je het toetsenbord, dan klapt een klein lijstje open met de twee subitems. "Over ons" zelf blijft een link naar de algemene pagina. Escape of ergens anders klikken sluit het lijstje.
3. Op de telefoon: in het uitgeklapte menu staan de twee subitems ingesprongen onder "Over ons" (altijd zichtbaar, geen extra tikken).
4. Op een subpagina is in het menu zowel "Over ons" als het subitem gemarkeerd als huidige pagina.
5. Zonder JavaScript zijn de subitems ook bereikbaar: via de links op de pagina "Over ons" (zie 6).

*B. Pagina's (zie open vraag 1)*
6. **`/over-ons/` (algemeen):** een korte introductie (nu "Wat het is" en "Voor wie"), wie we zijn (de kaarten van de begeleiders), twee blokken die doorverwijzen naar "Onze filosofie" en "Ons aanbod", en een link naar de retraites in de kalender.
7. **`/over-ons/filosofie/`:** "Waarom" met het citaat, en hoe we werken (creatieve sessies als rode draad, meditatie, yoga, stilte). Geen data, geen kalender en geen aanmeldknop.
8. **`/over-ons/aanbod/`:**
   - *Retraites*: wat een retraite is, "Zo kan een dag eruitzien", "Is dit iets voor mij?" en "Wat deelnemers zeggen", met een knop naar de kalender.
   - *Individueel*: per persoon een blok met wat hij los aanbiedt (titel, korte beschrijving, voor wie, hoe je contact opneemt). Daan: persoonlijk begeleide meditatiesessies. De teksten komen in een nieuw databestand `src/_data/aanbod.yaml`. Een blok zonder tekst wordt niet getoond, zodat Vincents blok pas verschijnt als hij zijn tekst heeft aangeleverd.
   - Tot Daan de echte tekst geeft, staat er een duidelijk gemarkeerde voorbeeldtekst (zoals bij de stichtingsgegevens).
9. `/wat-en-waarom/` verdwijnt. Alle links gaan naar de nieuwe pagina's (Home: het blok "verder kijken"; de Controle meldt het als er nog een link naar `/wat-en-waarom/` staat).
10. Alle teksten staan in Markdown- of databestanden, niet in templates.

*C. Uit story 034*
11. De ademkop op Home wordt "Adem kort met ons mee" (zie open vraag 6).

**Niet:**
- Prijzen of een boekingsmogelijkheid voor de losse sessies (contact gaat via e-mail; zie open vraag 4)
- "Over de stichting" verplaatsen (zie open vraag 3)
- Teksten herschrijven; de bestaande tekst van Wat en waarom wordt over de pagina's verdeeld

## Acceptatiecriteria
1. **Gegeven** het menu op de laptop, **wanneer** ik op het pijltje naast "Over ons" klik of met Tab en Enter erheen ga, **dan** zie ik "Onze filosofie" en "Ons aanbod"; Escape sluit het lijstje en de focus gaat terug naar het pijltje.
2. **Gegeven** het menu op 375 px, **dan** staan de twee subitems ingesprongen onder "Over ons".
3. **Gegeven** `/over-ons/`, **dan** zie ik de introductie, de begeleiders, verwijzingen naar beide subpagina's en een link naar de retraites.
4. **Gegeven** `/over-ons/filosofie/`, **dan** staat er geen datum, kalender of aanmeldknop.
5. **Gegeven** `/over-ons/aanbod/`, **dan** staan eerst de retraites (met een dag, "Is dit iets voor mij?", ervaringen en een link naar de kalender) en daarna het blok van Daan, gemarkeerd als voorbeeldtekst; zonder tekst voor Vincent is er geen leeg blok.
6. `/wat-en-waarom/` bestaat niet meer en geen enkele link verwijst ernaar; sitemap en Controle bijgewerkt.
7. Contrast ≥ 4,5:1 in alle stijlen; 0 CSP-meldingen; Controle groen; geen horizontaal scrollen; koppen slaan geen niveau over.

## Technische aanpak (kort)
- `src/_data/site.yaml`: menu-item met `sub:` (een lijst met tekst en url)
- `partials/header.njk`: subitems tonen; `src/js/menu.js`: het pijltje (een `<button>` met `aria-expanded`) opent en sluit het lijstje
- `src/over-ons.md`, `src/over-ons/filosofie.md`, `src/over-ons/aanbod.njk` (of `.md`), `src/_data/aanbod.yaml`; `src/wat-en-waarom.md` verdwijnt
- `style.css`: uitklaplijstje op de laptop, ingesprongen subitems op de telefoon, blokken voor het aanbod
- `lib/controle.js`: melding bij een link naar `/wat-en-waarom/`
- README en CLAUDE.md (menu, besluit, mappenstructuur) bijwerken

## Open vragen voor Daan
1. **Indeling:** klopt de verdeling hierboven? In het kort: de begeleiders staan op de algemene pagina, een dag en de ervaringen bij het aanbod (retraites), en "Is dit iets voor mij?" ook bij het aanbod, direct boven de ervaringen.
2. **Namen in het menu:** "Onze filosofie" en "Ons aanbod", of iets anders (bijv. "Waarom we dit doen" en "Wat we aanbieden")?
3. **Over de stichting:** blijft een eigen menu-item. Of wordt het een derde subitem onder "Over ons"? Dan wordt het menu korter (6 items).
4. **Jouw meditatiesessies:** wil je een korte tekst geven? Denk aan: wat gebeurt er in een sessie, hoe lang duurt die, waar (online of op locatie), voor wie, en hoe neem je contact op (het gedeelde e-mailadres of een eigen adres)? Een prijs tonen we niet, tenzij je dat wilt.
5. **Vincent:** wat hij los aanbiedt, moet met hem afgestemd worden. Tot hij een tekst aanlevert, verschijnt er voor hem niets.
6. **Story 034:** het verplaatsen van "Is dit iets voor mij?" zit in deze story. Zal ik 034 inperken tot alleen de nieuwe ademkop, zodat die snel online kan? Of neem ik die ook hierin mee (punt 11)?

## Signaal (buiten de site)
Persoonlijk betaald aanbod van Daan en Vincent op de site van een (toekomstige) stichting: houd dat zakelijk gescheiden van de stichting. Dat geldt zeker als jullie ANBI-status willen, want dan mag de stichting geen winstoogmerk hebben en geen privébelang dienen. Op de site helpt een zin als "Daan biedt deze sessies zelfstandig aan, los van de stichting". Laat een fiscalist of notaris dit toetsen zodra de rechtsvorm vastligt.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
