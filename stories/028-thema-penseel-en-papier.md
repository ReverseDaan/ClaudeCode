# 028 — Nieuw thema "Penseel & papier" (vervangt Groen & goud)

**Status:** Gebouwd — ter review
**Bron:** Daan, 4 nov 2026 (punten 3 en 4); story 002 (stijlwisselaar)
**Afhankelijk van:** 023 (CSP, lettertypes)

## Story
Als **bezoeker**
wil ik **een stijl die voelt als een schetsboek: papier, verf en echte penseelstreken, met durf in de kleuren**
zodat **de creatieve kant van de retraite meteen zichtbaar is**.

## Context
Groen & goud is nu een nette, maar veilige variant. Daan wil een stijl met penseelstreken en papiergevoel, met meer verzadiging en minder voorspelbare kleuren. De vier stijlen mogen sterk van elkaar verschillen; dit thema mag dus echt eigenwijs zijn.

## Scope
**Wel:**
1. **Naam en code**: "Penseel & papier", code `penseel`. Groen & goud verdwijnt uit de stijlwisselaar; wie dat thema had gekozen, krijgt vanzelf de standaard.
2. **Kleuren**: verzadigd en warm op gebroken wit papier. Voorstel:
   - papier `#f6f0e4`, met een iets donkerder vlak `#ebe0cc`;
   - inkt (tekst) `#1f2340`, diep indigo in plaats van zwart;
   - ultramarijn `#2d3fa8` voor links en koppen;
   - vermiljoen/terracotta `#d9482b` als accent;
   - saffraangeel `#f2b33d` voor knoppen;
   - een vleugje groen `#3e8a5c` voor details.
   Alle combinaties worden gecontroleerd op ≥ 4,5:1.
3. **Papiergevoel**: een subtiele papierstructuur over de achtergrond (een korrelfilter in SVG, als `data:`-afbeelding in de CSS, binnen de CSP) en iets onregelmatige randen aan vlakken en kaarten.
4. **Penseelstreken als vormgeving**:
   - knoppen blijven strak, met een geschilderde streek eronder bij hover en focus (Daan, 4 nov 2026);
   - onder elke `<h2>` een korte penseelstreek in het accent;
   - de scheidingslijnen worden bredere, zichtbare verfstreken;
   - de huidige pagina in het menu krijgt een penseelstreek eronder in plaats van een lijn.
5. **Lettertype voor koppen**: **Fraunces**, cursief op de grote koppen (Daan, 4 nov 2026). Via Fontsource, net als de andere lettertypes.
6. Alles alleen binnen `[data-thema="penseel"]`, zodat de andere drie thema's ongewijzigd blijven.

**Niet:**
- De andere drie thema's aanpassen (die krijgen hun eigen karakter vooral via het landschap in 026)
- Foto's

## Acceptatiecriteria
1. **Gegeven** de stijlwisselaar, **dan** staan er Bos, Zand, Penseel & papier en Ochtend; "Groen & goud" staat er niet meer.
2. **Gegeven** een bezoeker met het oude thema `groen-goud` in de browser, **dan** ziet hij het standaardthema zonder fout.
3. **Gegeven** Penseel & papier, **dan** zie je de papierstructuur, de knoppen met geschilderde streek, de streken onder de koppen en de menu-markering (schermafbeeldingen van Home, Wat en waarom, Retraites en een retraitepagina, op 375 en 1280 px).
4. Alle tekst haalt ≥ 4,5:1 contrast en knoppen en focusranden zijn goed zichtbaar.
5. De andere drie thema's zien er precies hetzelfde uit als voor deze story.
6. Geen externe bronnen, geen CSP-meldingen; het extra lettertype wordt alleen geladen zolang de stijlwisselaar aan staat.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Kleurenpalet | Zie hierboven | Akkoord (Daan, 4 nov 2026) |
| Koplettertype | Fraunces (cursief op grote koppen) | Akkoord (Daan, 4 nov 2026) |

## Technische aanpak (kort)
- `src/css/style.css`: blok `[data-thema="penseel"]` met de kleuren, de papierstructuur en de vormen (knoppen en streken als `mask-image` met een SVG-penseelstreek, als `data:`-URL)
- `src/_data/site.yaml`: thema in de lijst vervangen
- `src/css/fonts-themas.css` en `eleventy.config.js`: het gekozen koplettertype via Fontsource
- Controle: schermafbeeldingen per pagina, contrastcontrole, controle dat de andere thema's niet veranderd zijn

## Open vragen voor Daan
1. ~~Kleuren?~~ Voorstel akkoord (Daan, 4 nov 2026).
2. ~~Koplettertype?~~ Fraunces (Daan, 4 nov 2026).
3. ~~Knoppen?~~ Niet geschilderd (Daan, 4 nov 2026).

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (4 nov 2026)
Echte Eleventy-build in GitHub Actions (tijdelijke testworkflow, daarna verwijderd), de workflow Controle, en de build in Chrome op 375 en 1280 px.

| # | Resultaat |
|---|---|
| 1 | ✅ Stijlwisselaar: Bos, Zand, Penseel & papier, Ochtend; "groen-goud" komt nergens meer voor in de site |
| 2 | ✅ Een oud opgeslagen thema `groen-goud` geeft het standaardthema (vooraf.js accepteert alleen thema's uit de lijst) |
| 3 | ✅ Papierstructuur over de hele pagina, Fraunces cursief op de grote koppen, een vermiljoen streek onder de koppen, een streek onder de huidige pagina in het menu, bredere verfstreken als scheidingslijn, iets onregelmatige hoeken aan kaarten; knoppen strak met een streek eronder bij hover en focus. Gecontroleerd op Home, Wat en waarom, Retraites en de retraitepagina |
| 4 | ✅ Contrast in Penseel & papier minstens 6,1:1 op zeven pagina's; in de hero (per pixel gemeten) naam minstens 5,1:1, slogan 10,6:1, knop 8,2:1 |
| 5 | ✅ Bos, Zand en Ochtend pixel voor pixel gelijk aan vóór deze story (12 schermafbeeldingen vergeleken) |
| 6 | ✅ 0 externe aanvragen, 0 CSP-meldingen; Fraunces cursief (2 bestanden) wordt alleen geladen zolang de stijlwisselaar aan staat |

De penseelstreek en de papierstructuur zijn kleine SVG-tekeningen in de CSS zelf (sectie 13 van `style.css`), dus geen extra bestanden.
