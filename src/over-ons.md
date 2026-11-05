---
# Pagina "Over ons" (algemeen). Pas de tekst hieronder gewoon aan.
# {{ site.naam }} wordt automatisch de naam uit src/_data/site.yaml.
# De begeleiders komen uit src/_data/personen.yaml.
# De subpagina's staan in de map src/over-ons/ (filosofie en aanbod);
# "Over de stichting" staat in src/stichting.md.
layout: layouts/pagina.njk
title: "Over ons"
description: "Wie we zijn en wat we doen: retraites met stilte, meditatie, yoga en creatief werken in de natuur."
intro: "Wie we zijn, waar we voor staan en wat we aanbieden."

# De blokken onderaan de pagina ("Verder lezen")
routes:
  - kop: "Onze filosofie"
    tekst: "Waarom we dit doen en hoe we werken."
    url: "/over-ons/filosofie/"
  - kop: "Ons aanbod"
    tekst: "Onze retraites, en wat we ieder los aanbieden."
    url: "/over-ons/aanbod/"
  - kop: "Over de stichting"
    tekst: "Hoe het begon en de gegevens van de stichting."
    url: "/over-ons/stichting/"
---

## Wat we doen

Met {{ site.naam }} nodigen we je uit voor een intieme en bezielde reis waarin we samen ruimte maken voor stilte, creativiteit en natuurlijke verbinding. In een kleine groep trekken we de natuur in, waar rust, bos en heide ons omringen.

### Voor wie

{{ site.naam }} is er voor iedereen die verlangt naar verdieping in creativiteit, in stilte en in contact met de natuur. Ervaring is niet nodig. Alleen de wens om te vertragen, te ontdekken en op te laden.

<p><a class="knop" href="/kalender/">Bekijk de retraites</a></p>

## Wie wij zijn

{% include "partials/personen-lijst.njk" %}

## Verder lezen

{% include "partials/routes.njk" %}
