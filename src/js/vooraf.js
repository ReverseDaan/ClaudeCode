// Draait in de <head>, vóór de pagina getekend wordt.
// 1. Laat de CSS weten dat JavaScript werkt (nodig voor het mobiele menu).
// 2. Op Home: bepaal of de naam "geschreven" wordt (zie landschap.js).
// 3. Bij een overgang tussen pagina's: geef aan of je "terug" gaat (voor de
//    richting van de overgang in de stijl Zand, zie style.css sectie 14).
// 4. Staat de stijlwisselaar aan (data-themas op <html>), zet dan het
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

// Richting van de overgang tussen pagina's. Een pagina "ligt eerder" als hij
// eerder in het menu staat, of bij hetzelfde menu-item minder diep ligt
// (bijv. /retraites/ tegenover /retraites/voorjaar/). Ga je naar een pagina
// die eerder ligt, of gebruik je de terugknop naar zo'n pagina, dan krijgt
// de overgang het type "terug".
window.addEventListener("pagereveal", function (event) {
  if (!event.viewTransition || !window.navigation || !navigation.activation) return;
  var van = navigation.activation.from;
  if (!van || !van.url) return;

  function plek(adres) {
    var pad = new URL(adres, location.href).pathname;
    var links = Array.prototype.slice.call(document.querySelectorAll(".hoofdmenu a"));
    var beste = -1, lengte = -1;
    links.forEach(function (link, i) {
      var menuPad = new URL(link.href).pathname;
      var past = pad === menuPad || (pad.indexOf(menuPad) === 0 && menuPad.length > 1 && pad.charAt(menuPad.length - 1) === "/");
      if (past && menuPad.length > lengte) { beste = i; lengte = menuPad.length; }
    });
    if (beste === -1 && links.length) {
      // Home: het eerste menu-item
      if (pad === new URL(links[0].href).pathname) beste = 0;
    }
    return { index: beste, diepte: pad.split("/").filter(Boolean).length };
  }

  var a = plek(van.url), b = plek(location.href);
  if (b.index < a.index || (b.index === a.index && b.diepte < a.diepte)) {
    event.viewTransition.types.add("terug");
  }
});
