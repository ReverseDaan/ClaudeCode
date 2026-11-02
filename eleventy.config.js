// Eleventy-configuratie.
// Eleventy leest alles uit de map src/ en bouwt de website in de map _site/.
import yaml from "js-yaml";

export default function (eleventyConfig) {
  // Databestanden in src/_data/ mogen YAML zijn (.yaml of .yml).
  eleventyConfig.addDataExtension("yaml,yml", (inhoud) => yaml.load(inhoud));

  // Deze mappen worden ongewijzigd naar de website gekopieerd.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Het huidige jaartal, voor de copyright-regel in de footer.
  eleventyConfig.addGlobalData("jaar", new Date().getFullYear());

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
