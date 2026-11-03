---
# ==================================================================
# Eén retraite = één bestand in deze map (src/retraites/).
#
# Nieuwe retraite toevoegen?
#  1. Kopieer dit bestand en geef de kopie een nieuwe naam,
#     bijv. 2027-09-najaar.md (jaar-maand-korte-naam).
#  2. Pas hieronder de gegevens aan en schrijf onder de streepjes (---)
#     de beschrijving.
#  3. Sla op (in GitHub: "Commit changes"). De site wordt vanzelf
#     opnieuw gebouwd.
#
# Regels die met # beginnen zijn uitleg en komen niet op de site.
# Klopt er iets niet, dan stopt het bouwen en zie je in het tabblad
# "Actions" op GitHub precies welk veld je moet aanpassen.
# ==================================================================

# Naam van de retraite, zoals bezoekers hem zien.
titel: "Voorjaarsretraite"

# Eén à twee zinnen: waar gaat deze retraite over?
samenvatting: "Vier dagen vertragen in het voorjaar: schilderen, stilte en natuur rond 't Zonnehuis in Loenen."

# Kies één van: dag, weekend, meerdaags
formaat: meerdaags

# Begin- en einddatum, altijd als jaar-maand-dag (bijv. 2027-04-25).
start: 2027-04-25
eind: 2027-04-29

# Staat de datum vast? true = ja, false = nog onder voorbehoud.
bevestigd: true

# Waar is het?
locatie:
  naam: "'t Zonnehuis"
  plaats: "Loenen"

# Prijs per deelnemer, als getal zonder € (bijv. 495).
# De toelichting staat bij de prijs, bijv. wat erbij inbegrepen is.
prijs:
  bedrag: 495   # werkprijs, nog niet definitief
  toelichting: "werkprijs, nog niet definitief"

# Kies één van: vrij, bijna-vol, vol, wachtlijst
status: vrij

# Wat is er inbegrepen? Elke regel begint met een streepje.
inbegrepen:
  - "Vier overnachtingen"
  - "Alle sessies: schilderen, meditatie en yoga"
  - "Schildermaterialen"
  - "Maaltijden: volgt"

# Wie begeleiden deze retraite? Gebruik de codes uit src/_data/personen.yaml.
begeleiders:
  - daan
  - vincent

# Foto's: bestandsnamen in src/images/. Mag leeg blijven: []
fotos: []

# Hoe kom je er? Optioneel. Laat je dit weg, dan staat er een
# standaardtekst (zie src/_data/praktisch.yaml).
# bereikbaarheid: "Met de trein naar station Apeldoorn, daarna ..."

# Is dit een voorbeeld dat niet echt doorgaat? true = ja (de site toont
# dan een label "Voorbeeld"), false = nee, dit is een echte retraite.
voorbeeld: false
---

Hier komt de beschrijving van de retraite, in gewone tekst. Wat doe je, hoe ziet een dag eruit, voor wie is het? Een lege regel begint een nieuwe alinea.

*Tekst volgt.*
