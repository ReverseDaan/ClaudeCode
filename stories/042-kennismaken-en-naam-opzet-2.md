# 042 — "Even kennismaken" in het menu, en "de StilteSmederij" als naam in Daan opzet 2

**Status:** Goedgekeurd (Daan, 24 nov 2026)
**Bron:** Daan, 24 nov 2026
**Geldt voor:** A (menu en pagina's) in **alle vier de opzetten**, want het menu en de pagina's zijn gedeeld. B (de naam) alleen in **Daan opzet 2** (`zand`).
**Afhankelijk van:** 035 (Over ons met subpagina's), 039 (proefkop StilteSmederij)

## Story
Als **bezoeker die wil weten wie jullie zijn**
wil ik **in het menu één duidelijke plek vinden om kennis te maken**
zodat **ik niet hoef te zoeken tussen een korte pagina "Over ons" en een korte pagina "Onze filosofie"**.

## Context
"Over ons" en "Onze filosofie" zijn allebei kort. Bovendien gaat het menu-item "Over ons" zelf naar een pagina, terwijl het ook een uitklapmenu heeft: die pagina is daardoor slecht te vinden. Daan wil beide samenvoegen tot één pagina "Even kennismaken". "Over ons" in het menu wordt alleen een kop die het uitklapmenu opent. Daarnaast wil Daan in zijn tweede opzet zien hoe de naam "de StilteSmederij" voelt, overal op de site.

## Scope
**Wel:**

*A. Menu en pagina's (alle opzetten)*
1. De pagina's "Over ons" (`/over-ons/`) en "Onze filosofie" (`/over-ons/filosofie/`) worden één pagina **"Even kennismaken"** op `/over-ons/kennismaken/` (zie open vraag 3). De volgorde: Wat we doen · Voor wie (met de knop "Bekijk de retraites") · Waarom (met het citaat) · Hoe we werken · Wie wij zijn (de kaarten) · Verder lezen (Ons aanbod, Over de stichting). De teksten zelf blijven gelijk.
2. Het menu wordt: Home · **Over ons** (Even kennismaken · Ons aanbod · Over de stichting) · Kalender · Aanmelden · Veelgestelde vragen · Contact.
3. "Over ons" in het menu is geen link meer, maar een knop die het uitklapmenu opent, met het pijltje erachter. Op de telefoon staat "Over ons" als kopje boven de drie subitems.
4. Op een van de drie subpagina's is "Over ons" in het menu gemarkeerd, zoals nu.
5. Alle links naar `/over-ons/` en `/over-ons/filosofie/` gaan naar de nieuwe pagina, waaronder het blok "Over ons" onderaan Home. De voettekst toont de drie subitems. De Controle meldt het als er nog een link naar een oude pagina staat.

*B. De naam in Daan opzet 2*
6. In Daan opzet 2 staat overal waar nu "Stillness and Strokes" zichtbaar is **"de StilteSmederij"**: in de bovenbalk, de voettekst (ook bij ©) en de teksten op Even kennismaken, Over de stichting en Privacy. Aan het begin van een zin of als logo wordt dat **"De StilteSmederij"** (zie open vraag 1).
7. De naam in `site.yaml` blijft "Stillness and Strokes". De proefnaam komt erbij als nieuw veld (`proefnaam`), zodat hij later met één wijziging weg kan of de echte naam kan worden.
8. In de andere drie opzetten verandert er niets aan de naam.

**Niet:**
- De naam in de titel van het tabblad, in de deelkaart voor sociale media of voor zoekmachines. Dat kan niet per opzet verschillen: daar blijft "Stillness and Strokes" (zie open vraag 2).
- De teksten van de pagina's herschrijven

## Acceptatiecriteria
1. **Gegeven** het menu op de laptop, **wanneer** ik op "Over ons" klik, **dan** klapt het lijstje open (Even kennismaken · Ons aanbod · Over de stichting) en ga ik nergens naartoe. Dat werkt ook met het toetsenbord (Enter, Escape).
2. **Gegeven** het menu op 375 px, **dan** staat "Over ons" als kopje met de drie subitems eronder.
3. **Gegeven** `/over-ons/kennismaken/`, **dan** staan alle teksten van de oude Over ons en Onze filosofie op één pagina, in de volgorde van punt 1. `/over-ons/` en `/over-ons/filosofie/` bestaan niet meer; nergens op de site staat nog een link naar die oude pagina's.
4. **Gegeven** Daan opzet 2, **dan** zie ik nergens "Stillness and Strokes" op een pagina, maar "de StilteSmederij" (met een hoofdletter aan het begin van een zin). **Gegeven** een andere opzet, **dan** zie ik overal "Stillness and Strokes", zoals nu.
5. Schermlezers lezen in elke opzet maar één naam.
6. Contrast ≥ 4,5:1; 0 CSP-meldingen; Controle groen.

## Technische aanpak (kort)
- `src/over-ons/kennismaken.md` (nieuw), `src/over-ons.md` en `src/over-ons/filosofie.md` weg
- `site.yaml`: menu-item "Over ons" zonder `url`; `proefnaam: "de StilteSmederij"`
- `partials/header.njk`, `footer.njk`, `menu.js`, `style.css`: een menu-item zonder eigen pagina (knop met uitklapmenu)
- Een kleine shortcode `{% naam %}` (en `{% naam "begin" %}` aan het begin van een zin) die beide namen in een `<span>` zet. Per opzet is er één zichtbaar (`display: none` verbergt de andere, ook voor schermlezers). Overal waar nu `{{ site.naam }}` als zichtbare tekst staat, komt `{% naam %}`; in de `<title>` en metagegevens blijft `{{ site.naam }}`
- `lib/controle.js`: melding bij links naar `/over-ons/` en `/over-ons/filosofie/`
- `home.yaml`: het blok "Over ons" verwijst naar Even kennismaken
- README en CLAUDE.md bijwerken (menu, besluit)
- Testen: Controle; Daan test zelf (teststappen in de chat)

## Open vragen voor Daan
Beantwoord door Daan, 24 nov 2026: akkoord op de voorstellen (hoofdletter en lidwoord, tabblad en zoekmachines houden de echte naam) en adres `/over-ons/kennismaken/`.

1. **Hoofdletter en lidwoord.** Voorstel:
   - in lopende tekst "de StilteSmederij";
   - aan het begin van een zin en als logo in de bovenbalk "De StilteSmederij";
   - in de stichtingsgegevens "Stichting StilteSmederij", zonder "de", want "Stichting de StilteSmederij" leest vreemd.
   Goed zo?
2. **Tabblad en zoekmachines** blijven "Stillness and Strokes", omdat die niet per opzet kunnen verschillen. Akkoord?
3. **Adres:** `/over-ons/kennismaken/`, passend bij de andere subpagina's. Of liever `/kennismaken/`?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
