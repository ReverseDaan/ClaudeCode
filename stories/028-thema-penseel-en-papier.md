# 028 — Nieuw thema "Penseel & papier" (vervangt Groen & goud)

**Status:** Concept
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
   - knoppen als een geschilderde streek (onregelmatige rand) in plaats van een strakke pil;
   - onder elke `<h2>` een korte penseelstreek in het accent;
   - de scheidingslijnen worden bredere, zichtbare verfstreken;
   - de huidige pagina in het menu krijgt een penseelstreek eronder in plaats van een lijn.
5. **Lettertype voor koppen**: een expressievere letter met karakter (voorstel: **Fraunces** cursief op de grote koppen, of een kwast-achtige letter zoals **Caveat Brush** voor korte accenten). Via Fontsource, net als de andere lettertypes.
6. Alles alleen binnen `[data-thema="penseel"]`, zodat de andere drie thema's ongewijzigd blijven.

**Niet:**
- De andere drie thema's aanpassen (die krijgen hun eigen karakter vooral via het landschap in 026)
- Foto's

## Acceptatiecriteria
1. **Gegeven** de stijlwisselaar, **dan** staan er Bos, Zand, Penseel & papier en Ochtend; "Groen & goud" staat er niet meer.
2. **Gegeven** een bezoeker met het oude thema `groen-goud` in de browser, **dan** ziet hij het standaardthema zonder fout.
3. **Gegeven** Penseel & papier, **dan** zie je de papierstructuur, de geschilderde knoppen, de streken onder de koppen en de menu-markering (schermafbeeldingen van Home, Wat en waarom, Retraites en een retraitepagina, op 375 en 1280 px).
4. Alle tekst haalt ≥ 4,5:1 contrast en knoppen en focusranden zijn goed zichtbaar.
5. De andere drie thema's zien er precies hetzelfde uit als voor deze story.
6. Geen externe bronnen, geen CSP-meldingen; het extra lettertype wordt alleen geladen zolang de stijlwisselaar aan staat.

## Inhoud en placeholders
| Onderdeel | Tekst/waarde | Definitief of placeholder? |
|---|---|---|
| Kleurenpalet | Zie hierboven | Voorstel, Daan kiest |
| Koplettertype | Fraunces cursief of Caveat Brush | Voorstel, Daan kiest |

## Technische aanpak (kort)
- `src/css/style.css`: blok `[data-thema="penseel"]` met de kleuren, de papierstructuur en de vormen (knoppen en streken als `mask-image` met een SVG-penseelstreek, als `data:`-URL)
- `src/_data/site.yaml`: thema in de lijst vervangen
- `src/css/fonts-themas.css` en `eleventy.config.js`: het gekozen koplettertype via Fontsource
- Controle: schermafbeeldingen per pagina, contrastcontrole, controle dat de andere thema's niet veranderd zijn

## Open vragen voor Daan
1. **Kleuren**: spreekt het palet hierboven je aan (indigo, ultramarijn, vermiljoen, saffraan op papier)? Of wil je een andere kant op, bijvoorbeeld diep bosgroen met magenta en koper?
2. **Koplettertype**: Fraunces (elegant, met karakter) of een kwast-letter zoals Caveat Brush (speelser, meer "geschilderd", alleen voor korte koppen)?
3. Mogen de **knoppen** echt onregelmatig geschilderd zijn, of liever strak met alleen een geschilderde onderstreping?

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
