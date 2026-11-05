// Eleventy-configuratie.
// Eleventy leest alles uit de map src/ en bouwt de website in de map _site/.
import fs from "node:fs";
import yaml from "js-yaml";
import { HtmlBasePlugin } from "@11ty/eleventy";
import {
  controleerRetraite, sorteerOpStart, komende, STATUSSEN,
  datumBereik, isoDatum, perMaand, prijsTekst, isVoorbij, personenMetCodes, icsBestand, aanmeldUrl,
  jsonLd, eventGegevens, organisatieGegevens,
} from "./lib/retraites.js";

export default function (eleventyConfig) {
  // Databestanden in src/_data/ mogen YAML zijn (.yaml of .yml).
  eleventyConfig.addDataExtension("yaml,yml", (inhoud) => yaml.load(inhoud));

  // Deze mappen worden ongewijzigd naar de website gekopieerd.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  // Icoontjes voor het browsertabblad en het beginscherm van een telefoon
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");

  // Lettertypes: alleen de bestanden die de site gebruikt, uit de
  // npm-pakketten van Fontsource. Komen op de site in /fonts/.
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2": "fonts/cormorant-garamond-latin-500-normal.woff2",
    "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2": "fonts/cormorant-garamond-latin-600-normal.woff2",
    "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff2": "fonts/cormorant-garamond-latin-500-italic.woff2",
    "node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-400-normal.woff2": "fonts/source-sans-3-latin-400-normal.woff2",
    "node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-600-normal.woff2": "fonts/source-sans-3-latin-600-normal.woff2",
    "node_modules/@fontsource/fraunces/files/fraunces-latin-500-normal.woff2": "fonts/fraunces-latin-500-normal.woff2",
    "node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff2": "fonts/fraunces-latin-600-normal.woff2",
    "node_modules/@fontsource/fraunces/files/fraunces-latin-500-italic.woff2": "fonts/fraunces-latin-500-italic.woff2",
    "node_modules/@fontsource/fraunces/files/fraunces-latin-600-italic.woff2": "fonts/fraunces-latin-600-italic.woff2",
    "node_modules/@fontsource/nunito/files/nunito-latin-500-normal.woff2": "fonts/nunito-latin-500-normal.woff2",
    "node_modules/@fontsource/nunito/files/nunito-latin-600-normal.woff2": "fonts/nunito-latin-600-normal.woff2",
    "node_modules/@fontsource/nunito/files/nunito-latin-700-normal.woff2": "fonts/nunito-latin-700-normal.woff2",
  });

  // Zorgt dat links als "/css/style.css" ook werken als de site in een
  // submap staat (zoals bij GitHub Pages: /ClaudeCode/). Lokaal verandert er niets.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Het huidige jaartal, voor de copyright-regel in de footer.
  eleventyConfig.addGlobalData("jaar", new Date().getFullYear());

  // ----------------------------------------------------------------
  // Retraites: één bestand per retraite in src/retraites/.
  // ----------------------------------------------------------------

  // Alle retraites, gecontroleerd en gesorteerd op startdatum.
  // Klopt er iets niet in een bestand, dan stopt het bouwen met een
  // duidelijke melding, zodat er geen kapotte gegevens online komen.
  eleventyConfig.addCollection("retraites", (collectionApi) => {
    const retraites = collectionApi.getFilteredByTag("retraite");
    const fouten = [];

    for (const retraite of retraites) {
      const personen = retraite.data.personen || [];
      const codes = personen.map((persoon) => persoon.code);
      const bestand = retraite.inputPath.replace(/^\.\//, "");
      fouten.push(...controleerRetraite(retraite.data, bestand, codes));
    }

    if (fouten.length > 0) {
      throw new Error(
        "\n\nEr klopt iets niet in de retraites:\n- " + fouten.join("\n- ") +
        "\n\nPas het bestand aan en probeer het opnieuw.\n"
      );
    }

    return sorteerOpStart(retraites);
  });

  // Retraites die vandaag of later beginnen. De eerste hiervan is de
  // "eerstvolgende retraite": collections.komendeRetraites[0].
  eleventyConfig.addCollection("komendeRetraites", (collectionApi) =>
    komende(collectionApi.getFilteredByTag("retraite"))
  );

  // Zet een status om naar leesbare tekst: {{ retraite.data.status | statusTekst }}
  eleventyConfig.addFilter("statusTekst", (status) => STATUSSEN[status] || status);

  // Weergave van retraites (zie lib/retraites.js):
  // {{ retraite.data.start | datumBereik(retraite.data.eind) }} → "25 – 29 april 2027"
  eleventyConfig.addFilter("datumBereik", (start, eind) => datumBereik(start, eind));
  // {{ retraite.data.start | isoDatum }} → "2027-04-25" (voor <time datetime="…">)
  eleventyConfig.addFilter("isoDatum", isoDatum);
  // {% for maand in collections.komendeRetraites | perMaand %} → maand.kop, maand.retraites
  eleventyConfig.addFilter("perMaand", perMaand);
  // {{ retraite.data.prijs.bedrag | prijsTekst }} → "€ 495"
  eleventyConfig.addFilter("prijsTekst", prijsTekst);

  // Is een retraite voorbij? {% if retraite.data.eind | isVoorbij %}
  eleventyConfig.addFilter("isVoorbij", (eind) => isVoorbij(eind));
  // Alleen de personen met deze codes: {{ personen | personenMetCodes(begeleiders) }}
  eleventyConfig.addFilter("personenMetCodes", personenMetCodes);

  // Link naar het aanmeldformulier (of "" als er geen is):
  // {% set formulier = retraite.data | aanmeldUrl(site) %}
  eleventyConfig.addFilter("aanmeldUrl", (gegevens, site) => aanmeldUrl(gegevens, site.aanmeldformulier));

  // Gestructureerde gegevens voor zoekmachines (zie lib/retraites.js):
  // {{ gegevens | jsonLd | safe }} in een <script type="application/ld+json">
  eleventyConfig.addFilter("jsonLd", jsonLd);
  eleventyConfig.addFilter("eventGegevens", (d, site, paginaUrl, aanmelden) =>
    eventGegevens(d, site, paginaUrl, aanmelden));
  eleventyConfig.addFilter("organisatieGegevens", organisatieGegevens);

  // Agenda-bestand voor een retraite (zie src/agenda.njk)
  eleventyConfig.addFilter("icsBestand", (retraite, site) =>
    icsBestand(retraite, { naam: site.naam, email: site.contact.email, adres: site.adres })
  );

  // Menu: staat de huidige pagina in deze lijst met subitems? (story 035)
  // {% if item.sub | bevatUrl(page.url) %} ... {% endif %}
  eleventyConfig.addFilter("bevatUrl", (lijst, url) =>
    (lijst || []).some((item) => item.url === url)
  );

  // Aanbod: alleen de blokken waar tekst in staat (story 035)
  eleventyConfig.addFilter("metTekst", (lijst) =>
    (lijst || []).filter((blok) => Array.isArray(blok.tekst) && blok.tekst.length > 0)
  );

  // Bestaat er een afbeelding met deze naam in src/images/?
  // {% if persoon.foto | afbeeldingBestaat %} ... {% endif %}
  eleventyConfig.addFilter("afbeeldingBestaat", (naam) =>
    Boolean(naam) && fs.existsSync(`src/images/${naam}`)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    // Zodat je in Markdown-pagina's ook {{ site.naam }} kunt gebruiken.
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
