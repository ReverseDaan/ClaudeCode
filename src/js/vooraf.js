// Draait in de <head>, vóór de pagina getekend wordt.
// 1. Laat de CSS weten dat JavaScript werkt (nodig voor het mobiele menu).
// 2. Op Home: bepaal of de naam "geschreven" wordt (zie landschap.js).
// 3. Staat de stijlwisselaar aan (data-themas op <html>), zet dan het
//    onthouden thema, zodat je niet eerst even het standaardthema ziet.
document.documentElement.classList.add("js");

(function () {
  var lijst = document.documentElement.dataset.themas;
  if (!lijst) return;
  var themas = lijst.split(" ");
  try {
    var stijl = localStorage.getItem("stijl");
    if (stijl && stijl !== themas[0] && themas.indexOf(stijl) !== -1) {
      document.documentElement.dataset.thema = stijl;
    }
  } catch (fout) {
    // localStorage geblokkeerd (bijv. privévenster): dan het standaardthema.
  }
})();

// Naam schrijven op Home: bij het eerste bezoek in deze sessie en bij
// verversen, maar niet als je via het menu terugkomt en niet als de
// bezoeker minder beweging wil.
(function () {
  if (!document.documentElement.hasAttribute("data-home")) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  var ververst = nav && nav.type === "reload";
  var alGezien = false;
  try {
    alGezien = sessionStorage.getItem("naamGeschreven") === "ja";
    sessionStorage.setItem("naamGeschreven", "ja");
  } catch (fout) {}
  if (ververst || !alGezien) {
    document.documentElement.classList.add("schrijf-naam");
  }
})();
