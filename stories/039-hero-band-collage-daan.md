# 039 — Daan opzet 1 en 2: hero als gekleurde band met collage, in een frisse en een warme kleurencombinatie

**Status:** Concept
**Bron:** Daan, 16 nov 2026 (voorbeeld-screenshot van een andere website en een collage van vijf foto's uit editie 1, aangeleverd in de chat)
**Geldt voor:** alleen **Daan opzet 1** (`bos`) en **Daan opzet 2** (`zand`). Vincent opzet 1 en 2 blijven ongewijzigd.
**Afhankelijk van:** 036 (hero-foto), 037 (stijlen per persoon)

## Story
Als **bezoeker die op Home komt**
wil ik **meteen een helder, professioneel beeld krijgen met echte foto's van een retraite**
zodat **ik zie dat het om echte mensen, echt eten en echt schilderwerk gaat, en vertrouwen krijg**.

## Context
Daan zag een website met een opbouw die hij wil uitproberen: een witte bovenbalk, een brede gekleurde band als hero met een vervaagde foto erachter, grote schreefletters in wit met één accentwoord, en rechts een fotocollage in een wit kader die onder de band uitsteekt. Hij wil de opbouw overnemen, niet de kleuren of andere onderdelen van die site. In zijn twee opzetten probeert hij twee kleurencombinaties:
- **Daan opzet 1: fris**, ongeveer even fris als het voorbeeld, maar met eigen kleuren;
- **Daan opzet 2: warm en professioneel**.

De collage bestaat uit vijf foto's uit editie 1: een maaltijd aan een lange tafel in het bos, een ontbijt met een handgeschreven kaartje, geschilderde portretten op ezels, kaartjes met woorden van deelnemers, en twee mensen met een handpan.

## Scope
**Wel (alleen in Daan opzet 1 en 2):**

*A. Bovenbalk*
1. Witte bovenbalk, met een dunne verticale lijn tussen het penseeltekentje en de naam. Menu-items in een rustige, lichte kleur. "Contact" als omlijnde knop.

*B. Hero als band*
2. De hero wordt een brede band in de hoofdkleur van de opzet, met de hero-foto van story 036 erachter, sterk vervaagd en ingekleurd (de foto blijft herkenbaar als textuur, niet als beeld). Het getekende landschap en het fotobijschrift zijn in deze opzetten niet zichtbaar.
3. Links in de band: de naam in grote witte schreefletters, daaronder de slogan, met één woord schuin en in de accentkleur (zie open vraag 2), en de knop "Bekijk de retraites".
4. Rechts de collage in een wit kader (een rand van ca. 12 px) die zo'n 15–20% onder de band uitsteekt, zoals in het voorbeeld.
5. Op de telefoon: eerst de tekst in de band, daarna de collage over de volle breedte, die de onderrand van de band overlapt.

*C. Twee kleurencombinaties* (voorstel; zie open vraag 1)

| | Daan opzet 1: fris | Daan opzet 2: warm en professioneel |
|---|---|---|
| Band | diep zeegroen `#1F6B66` | diep roestbruin `#7A3B2A` |
| Accentwoord en -knop | zacht citroengeel `#F3D36B` | warm goud `#E8C07A` |
| Bovenbalk | wit, tekst leigrijs `#4A5A5A`, knop "Contact" zeegroen | warm gebroken wit `#FBF7F1`, tekst donkerbruin `#4A3A30`, knop "Contact" roestbruin |
| Pagina-achtergrond | wit met een vleugje groen `#F7FAF9` | warm zand `#F6EFE6` |
| Lettertypes | Fraunces (koppen) en Source Sans 3 | Cormorant Garamond (koppen) en Source Sans 3 |

   De kleuren gelden ook voor de rest van de site in die opzet (knoppen, links, koppen), zodat het één geheel is.

*D. Collage*
6. De collage als één afbeelding in `src/images/` (`collage-editie-1.jpg`), verkleind en gecomprimeerd, met een kleinere versie voor de telefoon en zonder camera- en bewerkingsgegevens (EXIF).
7. De alt-tekst en de bestandsnaam staan in `home.yaml` (blok `hero.collage`).

*E. Gedeelde structuur*
8. De collage en het accentwoord vragen een kleine aanvulling in de HTML van Home: een plek voor de collage en een markering voor het woord. In Vincent opzet 1 en 2 is de collage verborgen (en wordt hij niet geladen) en ziet het accentwoord eruit als de rest van de slogan. Die twee opzetten blijven pixel voor pixel gelijk.

**Niet:**
- De kleuren, het logo, de illustratie of de teksten van de voorbeeldsite overnemen
- Vincent opzet 1 en 2 aanpassen
- Andere pagina's dan Home, behalve de kleuren en de bovenbalk van de opzet (die gelden op elke pagina)
- Een galerij (story 011)

## Acceptatiecriteria
1. **Gegeven** Daan opzet 1 op Home, **dan** zie ik een witte bovenbalk, een zeegroene band met de vervaagde foto, witte schreefletters met een geel accentwoord, en rechts de collage in een wit kader die onder de band uitsteekt.
2. **Gegeven** Daan opzet 2, **dan** dezelfde opbouw in roestbruin met een gouden accent.
3. **Gegeven** 375 px, **dan** staat de collage onder de tekst over de volle breedte, zonder horizontaal scrollen.
4. **Gegeven** Vincent opzet 1 en 2, **dan** is alles pixel voor pixel gelijk aan nu, en wordt de collage niet geladen.
5. Contrast ≥ 4,5:1 voor gewone tekst en ≥ 3:1 voor grote tekst (naam, slogan) in beide opzetten; 0 CSP-meldingen; Controle groen.
6. De collage heeft een alt-tekst die beschrijft wat erop staat.

## Technische aanpak (kort)
- `src/images/collage-editie-1.jpg` (en `-klein`), verkleind zonder EXIF
- `home.yaml`: `hero.collage` (bestand, klein, alt) en `hero.accent` (het woord uit de slogan dat het accent krijgt)
- `src/index.njk`: de collage en de markering van het accentwoord (gedeeld, zie punt 8)
- `style.css`: alles onder `[data-thema="bos"]` en `[data-thema="zand"]`; geen wijziging aan de gedeelde basis of aan Vincents opzetten
- Testen: de build in de normale Controle-workflow bij de pull request. **Geen tijdelijke testworkflows meer**, zoals besproken na de blokkade. Daardoor maak ik zelf geen schermafbeeldingen. Daan bekijkt het resultaat na de merge, of lokaal met `npm start`.

## Open vragen voor Daan
1. **Kleuren:** zijn de voorstellen hierboven goed om mee te beginnen? Achteraf aanpassen is één regel per kleur.
2. **Accentwoord:** welk woord in de slogan ("Vertraag. Maak iets met je handen. Begin de reis naar binnen.")? Mijn voorstel is "handen". Ook één letter in de naam een accentkleur geven, zoals in het voorbeeld? Mijn voorstel: niet doen, omdat de naam nog verandert.
3. **Toestemming:** op de collage staan herkenbare mensen. Zitten er deelnemers bij, en hebben die toestemming gegeven voor een openbare website? De repo is ook openbaar. Zolang dat niet zeker is, zet ik de collage niet online.
4. **De twee mensen met de handpan:** zijn dat jij en/of Vincent? Dat bepaalt de alt-tekst ("Vincent en Daan…" of "Twee mensen…").
5. **Testen:** is het goed dat ik zonder eigen schermafbeeldingen werk (zie Technische aanpak)? Of zetten we eerst testlinks per pull request op (Netlify of Cloudflare)? Dan kan ik weer zelf meekijken zonder GitHub te belasten.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
