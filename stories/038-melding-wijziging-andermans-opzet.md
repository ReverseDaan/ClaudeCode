# 038 — Melding als iemand de opzet van de ander wijzigt

**Status:** Concept
**Bron:** Daan, 9 nov 2026 ("Laat het me ook weten als Vincent veranderingen heeft aangebracht op mijn stylen en vice versa")
**Afhankelijk van:** 037 (stijlen per persoon), 024 (workflow Controle)

## Story
Als **Daan of Vincent**
wil ik **het merken als er iets verandert in mijn opzetten dat ik niet zelf heb gedaan**
zodat **ik het kan bekijken voordat het online staat, en we elkaars werk niet ongemerkt overschrijven**.

## Context
Sinds story 037 heeft elke opzet een eigen kenmerk in `style.css`, en is afgesproken dat ieder alleen zijn eigen opzetten wijzigt. Die afspraak is geen slot. Er kan dus toch iets misgaan: een vergissing, of een wijziging aan de gedeelde basis die alle vier raakt.

Een punt van aandacht: wie een wijziging deed, is aan GitHub niet altijd te zien. Commits van Claude staan op naam van "Claude", en de repo hangt nu aan Daans account. Daarom kijkt de controle naar **wat** er verandert (welke opzet), en staat **wie** het vroeg in de pull request (via de story, veld "Bron").

## Scope
**Wel:**
1. **Bij elke pull request:** een nieuwe stap in de workflow Controle bekijkt welke regels in de stijlbestanden zijn gewijzigd (`style.css`, `fonts-themas.css`, `landschap.njk` en `overgang-penseel.njk`) en bij welke opzet ze horen:
   - onder `[data-thema="bos"]` of `"zand"` → **Daan opzet 1/2**
   - onder `[data-thema="penseel"]` of `"ochtend"` → **Vincent opzet 1/2**
   - zonder kenmerk → **gedeelde basis (alle vier)**
2. De uitkomst komt als vaste reactie in de pull request, bijvoorbeeld: "Deze wijziging raakt: Vincent opzet 1 · gedeelde basis". Bij een volgende push wordt die reactie bijgewerkt, niet opnieuw geplaatst. GitHub stuurt jullie bij een reactie een melding (mail of app), afhankelijk van jullie meldingsinstellingen.
3. Raakt de pull request de opzet van iemand anders dan de vrager uit de story (veld "Bron"), dan staat er bovenaan een duidelijke waarschuwing: "Let op: dit wijzigt Daan opzet 1, maar de vraag kwam van Vincent". Is de vrager niet te vinden, dan staat er alleen welke opzetten geraakt worden.
4. **Bij Claude:** een afspraak in CLAUDE.md. Aan het begin van een sessie kijkt Claude op main welke stories en wijzigingen sinds de vorige keer binnen zijn gekomen. Raakt iets de opzetten van degene met wie Claude praat, terwijl de vraag van de ander kwam, dan meldt Claude dat meteen.
5. De controle is een melding, geen blokkade: de pull request kan gewoon gemerged worden.

**Niet:**
- Wijzigingen blokkeren (dat kan later via branchbeveiliging, zie open vraag 2)
- Wijzigingen in inhoud of pagina's melden (die zijn gedeeld)

## Acceptatiecriteria
1. **Gegeven** een pull request die alleen een regel onder `[data-thema="penseel"]` wijzigt, **dan** staat in de reactie "Vincent opzet 1".
2. **Gegeven** een pull request die een regel zonder kenmerk wijzigt, **dan** staat er "gedeelde basis (alle vier)".
3. **Gegeven** een story met "Bron: Vincent" en een wijziging onder `[data-thema="bos"]`, **dan** staat er de waarschuwing over Daan opzet 1.
4. **Gegeven** een tweede push in dezelfde pull request, **dan** is er nog steeds één reactie, bijgewerkt.
5. **Gegeven** een pull request zonder wijziging aan de stijlbestanden, **dan** komt er geen reactie.
6. De Controle-workflow blijft groen; het script is leesbaar, met Nederlandse uitleg.

## Technische aanpak (kort)
- `lib/opzetten.js`: leest de diff van de pull request, zoekt per gewijzigde regel het dichtstbijzijnde `[data-thema="…"]` erboven in dezelfde regel of hetzelfde blok, en zoekt in de gewijzigde of nieuwe story het veld "Bron"
- `.github/workflows/controle.yml`: extra stap bij pull requests; plaatst of werkt de reactie bij met de `GITHUB_TOKEN` (rechten `pull-requests: write`)
- `CLAUDE.md`: de afspraak uit punt 4
- Testen: een test-PR per criterium (daarna gesloten)

## Open vragen voor Daan
1. **Heeft Vincent een eigen GitHub-account** en staat hij als collaborator op de repo? Zonder account krijgt hij de meldingen niet; dan komen ze alleen bij jou.
2. **Alleen melden of ook blokkeren?** Ik stel voor: eerst alleen melden. Blokkeren kan later met branchbeveiliging ("goedkeuring nodig"), maar dat werkt per pull request, niet per opzet.
3. **Ook een mail naar de gedeelde mailbox?** Dat kan, maar dan moet er een mailwachtwoord als geheim in GitHub. Mijn advies: de gewone GitHub-meldingen gebruiken.

## Definition of Done
- [ ] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [ ] Alleen bestanden binnen de scope gewijzigd
- [ ] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [ ] Op mobiel en desktop gecontroleerd (n.v.t.: geen wijziging aan de site)
- [ ] Status bijgewerkt naar `Gebouwd — ter review`
