---
# Pagina "Even kennismaken" (onder Over ons, story 042). Pas de tekst
# hieronder gewoon aan. Wat vroeger op "Over ons" en "Onze filosofie" stond,
# staat nu samen hier.
# {{ site | naamHtml | safe }} wordt automatisch de naam uit
# src/_data/site.yaml (in Daan opzet 2 de proefnaam). Aan het begin van een
# zin: {{ site | naamHtml("begin") | safe }}.
# De begeleiders komen uit src/_data/personen.yaml.
layout: layouts/pagina.njk
title: "Even kennismaken"
description: "Wie we zijn, waarom we dit doen en hoe we werken: retraites met stilte, meditatie, yoga en creatief werken in de natuur."
intro: "In een wereld waarin alles om jouw aandacht vraagt, groeit de noodzaak om te kunnen verbinden met jezelf en je omgeving."

# De blokken onderaan de pagina ("Verder lezen")
routes:
  - kop: "Ons aanbod"
    tekst: "Onze retraites, en wat we ieder los aanbieden."
    url: "/over-ons/aanbod/"
  - kop: "Over de stichting"
    tekst: "Hoe het begon en de gegevens van de stichting."
    url: "/over-ons/stichting/"
---

## Wat we doen

Met {{ site | naamHtml | safe }} nodigen we je uit voor een intieme en bezielde reis waarin we samen ruimte maken voor stilte, creativiteit en natuurlijke verbinding. In een kleine groep trekken we de natuur in, waar rust, bos en heide ons omringen.

### Voor wie

{{ site | naamHtml("begin") | safe }} is er voor iedereen die verlangt naar verdieping in creativiteit, in stilte en in contact met de natuur. Ervaring is niet nodig. Alleen de wens om te vertragen, te ontdekken en op te laden.

<p><a class="knop" href="/kalender/">Bekijk de retraites</a></p>

## Waarom

We organiseren deze retraites vanuit onze overtuiging dat er in deze snel veranderende wereld een tegenbeweging nodig is. Een beweging die ruimte biedt voor vertraging, verstilling en bewuste aandacht. Want juist in die ruimte kun je weer voelen wat er in je leeft.

Creëren is niet alleen een speelse vorm van expressie. Het is ook een krachtig middel om zelfvertrouwen te versterken, los te laten wat je niet meer dient, en je over te geven aan het creatieve wezen dat in ieder mens leeft.

> "Wie zijn creatieve kracht omarmt, staat gegrond en levendig in de wereld."

## Hoe we werken

De creatieve sessies vormen de rode draad. Daaromheen begeleiden we activiteiten die ze ondersteunen: dagelijkse meditaties, toegankelijke yoga en momenten van verbinding. Zo creëer je ruimte in je hoofd, kom je thuis in je lichaam, en ben je volledig aanwezig in het moment.

## Wie wij zijn

{% include "partials/personen-lijst.njk" %}

## Verder lezen

{% include "partials/routes.njk" %}
