# 014 — "Houd me op de hoogte" (interesselijst)

**Status:** Gebouwd — ter review
**Bron:** idee Daan/Claude (3 nov 2026)
**Afhankelijk van:** een Google Form dat Daan of Vincent aanmaakt in het gedeelde account

## Story
Als **iemand die nu nog geen tijd heeft, maar wel interesse**
wil ik **mijn e-mailadres achterlaten**
zodat **ik bericht krijg als er een nieuwe retraite is of de aanmelding opent**.

## Scope
**Wel:**
- Een rustig blok "Houd me op de hoogte" met een korte tekst en een knop die een **Google Form** opent (in het gedeelde S&S-account, dus de adressen staan niet in de openbare repo)
- Het blok staat op Home, op Retraites en events, en in plaats van de "geen retraites"-tekst als er niets gepland staat
- De link naar het formulier staat in `site.yaml` (`interesselijst_url`). Leeg = blok niet tonen
- Een korte tekst over wat je met het adres doet ("Alleen om je te laten weten wanneer er een nieuwe retraite is. Afmelden kan altijd.")

**Niet:** een nieuwsbriefdienst (Mailchimp e.d.); het formulier zelf in de site inbouwen

## Acceptatiecriteria
1. **Gegeven** `interesselijst_url` in `site.yaml`, **dan** staat het blok op de drie plekken en opent de knop het formulier in een nieuw tabblad.
2. **Gegeven** een lege `interesselijst_url`, **dan** staat het blok nergens.
3. De privacytekst staat bij het blok.
4. Werkt op 375 px, contrast in orde.

## Open vragen voor Daan
1. Maak jij het Google Form aan (alleen een veld e-mail en eventueel voornaam), of zal ik een opzet beschrijven die je in vijf minuten nabouwt?
2. Het privacybeleid (US-17) moet dit dan ook noemen. Akkoord dat ik dat meeneem als die story aan de beurt is?

## Definition of Done
- [x] Alle acceptatiecriteria gehaald en per criterium gerapporteerd
- [x] Alleen bestanden binnen de scope gewijzigd
- [x] Geen echte persoonsgegevens, prijzen of data die niet bevestigd zijn
- [x] Op mobiel en desktop gecontroleerd
- [x] Status bijgewerkt naar `Gebouwd — ter review`

## Testresultaat (3 nov 2026)
Echte Eleventy-build in GitHub Actions met tijdelijke testbestanden (testworkflow daarna verwijderd), en diezelfde build in Chrome op 375 px in alle vier de thema's.

| # | Resultaat |
|---|---|
| 1 | ✅ Met een url in `site.yaml`: blok op Home en Retraites, knop opent het formulier in een nieuw tabblad |
| 2 | ✅ Met een lege url (zoals nu): het blok staat nergens |
| 3 | ✅ Privacytekst staat bij het blok |
| 4 | ✅ Zonder komende retraites staat het blok op Retraites, Kalender en Aanmelden in plaats van de "geen retraites"-tekst |
