---
# Pagina "Over de stichting". Pas de tekst hieronder gewoon aan.
# De personen komen uit src/_data/personen.yaml, de gegevens uit
# src/_data/stichting.yaml.
layout: layouts/pagina.njk
permalink: /over-ons/stichting/
title: "Over de stichting"
description: "Wie er achter de retraites zitten, waarom we dit doen en de gegevens van de stichting."
intro: "Wie er achter de retraites zit, en waarom we dit doen."
---

## Missie

We geloven dat er in deze snel veranderende wereld een tegenbeweging nodig is. Een beweging die ruimte biedt voor vertraging, verstilling en bewuste aandacht. Met {{ site.naam }} maken we die ruimte: retraites waarin stilte, creativiteit en natuurlijke verbinding samenkomen, toegankelijk voor iedereen, ook zonder ervaring.

## Hoe het begon

Het idee ontstond toen Daan tijdens een reis door India een houtskoolcursus volgde, en ervoer hoe tekenen en stilte elkaar versterken. Samen met Vincent groeide dat uit tot een eigen retraite.

In de zomer van 2025 vond de eerste editie plaats: vijf dagen op de Veluwe, met meditatie, yoga, schilderen en veel tijd in de natuur. Wat we daar leerden, nemen we mee in elke volgende retraite.

## Wie wij zijn

{% include "partials/personen-lijst.njk" %}

## Gegevens

{% if stichting.voorbeeld %}<p class="melding" role="note"><strong>Let op: voorbeeldgegevens.</strong> Er is nog geen stichting opgericht. De gegevens hieronder zijn gegenereerd om de opzet van de pagina te laten zien en zijn niet echt.</p>{% endif %}

| Gegeven | Waarde |
|---|---|
| Naam | Stichting {{ site.naam }} |
| KvK-nummer | {{ stichting.kvk }} |
| RSIN | {{ stichting.rsin }} |
| Statutaire zetel | {{ stichting.zetel }} |
| Contact | [{{ site.contact.email }}](mailto:{{ site.contact.email }}) |
