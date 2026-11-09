# 037 — Stijlen per persoon: twee opzetten voor Daan, twee voor Vincent

**Status:** Concept
**Bron:** Daan, 9 nov 2026
**Afhankelijk van:** 002 (stijlwisselaar), 026, 028, 029 (stijlen per thema)

## Story
Als **Daan en Vincent, die ieder hun eigen richting voor de site willen uitproberen**
willen we **ieder twee eigen stijlen hebben, waar alleen wijzigingen van onszelf in terechtkomen**
zodat **we elkaars opzet niet per ongeluk veranderen en we de vier opzetten eerlijk naast elkaar kunnen leggen**.

## Context
De stijlwisselaar heeft nu vier stijlen: Bos, Zand, Penseel & papier en Ochtend. Daan wil ze naar de maker noemen en per maker afschermen.

Een technisch punt: de opmaak is nu niet per stijl gescheiden. Bos is de standaard. Alle gewone CSS-regels zijn de basis voor álle stijlen, en de andere drie stijlen passen daar alleen dingen in aan (`[data-thema="zand"] …`). Een wijziging aan "Bos" raakt dus vaak ook de andere drie. Om echt te scheiden moet elke stijl, ook de eerste, een eigen kenmerk krijgen, en komen wijzigingen voortaan alleen onder dat kenmerk.

Dat geldt alleen voor de **opmaak** (kleuren, lettertypes, landschap, overgangen, foto's per stijl). De **inhoud** (teksten, pagina's, menu, data) en de **structuur** (HTML, wat er op een pagina staat) zijn voor alle stijlen hetzelfde. Wijzigingen daarin gelden altijd voor alle vier.

## Scope
**Wel:**
1. De namen in de stijlwisselaar worden (zie open vraag 1):
   - Bos → **Daan opzet 1**
   - Zand → **Daan opzet 2**
   - Penseel & papier → **Vincent opzet 1**
   - Ochtend → **Vincent opzet 2**
2. Elke stijl krijgt een eigen kenmerk op de pagina, ook de eerste (`data-thema="bos"`, nu zonder kenmerk). Wat nu in de basis-CSS alleen voor Bos bedoeld is, blijft hetzelfde werken. De code (`bos`, `zand`, `penseel`, `ochtend`) blijft gelijk, zodat een gekozen stijl onthouden blijft (zie open vraag 2).
3. In `style.css` staat bovenaan elk stijlblok van wie het is ("Daan opzet 1", enz.).
4. Een nieuwe afspraak in CLAUDE.md, onder "Werkwijze":
   - Vraagt **Daan** om een wijziging aan de opmaak, dan komt die alleen in Daan opzet 1 en 2 (onder `[data-thema="bos"]` en `[data-thema="zand"]`). Vraagt **Vincent** erom, dan alleen in Vincent opzet 1 en 2 (`penseel` en `ochtend`).
   - Een wijziging aan de gedeelde basis (CSS zonder stijlkenmerk, HTML, inhoud) raakt alle vier. Die gebeurt alleen als het verzoek dat expliciet zegt ("voor alle stijlen", "voor de hele site"), of na een vraag van Claude.
   - Is niet duidelijk wie de vraag stelt, of kan een opmaakwijziging niet zonder de gedeelde basis, dan vraagt Claude dat eerst.
   - In elke user story staat bij "Bron" wie hem vraagt, en in de scope voor welke stijlen hij geldt.
5. De README krijgt een korte uitleg van deze afspraak, zodat Vincent hem ook kan lezen.

**Niet:**
- De stijlen zelf inhoudelijk veranderen
- De hero-foto uit story 036 per stijl maken (die staat nu in alle vier; zie open vraag 3)
- Technisch afdwingen wie wat mag wijzigen (GitHub kan dat niet per regel in een bestand; het is een afspraak die Claude volgt)

## Acceptatiecriteria
1. De stijlwisselaar toont "Daan opzet 1", "Daan opzet 2", "Vincent opzet 1" en "Vincent opzet 2"; de gekozen stijl wordt onthouden zoals nu.
2. In elke stijl heeft `<html>` een `data-thema`, ook in de eerste; zonder JavaScript en bij het eerste bezoek is dat `bos`.
3. Alle vier de stijlen zien er pixel voor pixel hetzelfde uit als vóór deze story (behalve de naam in de stijlwisselaar), op 375 en 1280 px, op Home en twee andere pagina's.
4. CLAUDE.md en README bevatten de afspraak uit punt 4.
5. 0 CSP-meldingen; Controle groen.

## Technische aanpak (kort)
- `src/_data/site.yaml`: namen bij `stijlwisselaar.themas`
- `base.njk`: `data-thema="bos"` standaard op `<html>`; `vooraf.js` en `stijlwisselaar.js`: de eerste stijl niet meer weghalen maar ook als kenmerk zetten
- `style.css`: alleen commentaar met de eigenaar per stijlblok (de regels zelf veranderen niet)
- `CLAUDE.md`, `README.md`: de afspraak

## Open vragen voor Daan
1. **Welke stijl is van wie?** Mijn voorstel volgt de huidige volgorde: Bos en Zand voor jou, Penseel & papier en Ochtend voor Vincent. Of wil je een andere indeling? Weet Vincent hiervan, en welke twee kiest hij zelf? Dat moet met hem afgestemd worden.
2. **Codes:** zal ik de interne codes laten zoals ze zijn (`bos`, `zand`, `penseel`, `ochtend`)? Dat is het minste werk en minder kans op fouten. Of moeten ze ook mee (`daan-1`, `daan-2`, `vincent-1`, `vincent-2`)? Dat is duidelijker in de code, maar raakt honderden regels CSS.
3. **De hero-foto (story 036)** staat nu in alle vier de stijlen. Laten zo, of alleen in jouw opzetten? Dan is dat een eigen story.
4. **De Home-tekst en volgorde** zijn gedeeld. Wil Vincent later een andere indeling van Home, dan moet dat een gezamenlijke keuze worden, of een aparte opzet per persoon. Dat laatste is een grotere verandering.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
