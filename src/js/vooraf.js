// Draait in de <head>, vóór de pagina getekend wordt.
// 1. Laat de CSS weten dat JavaScript werkt (nodig voor het mobiele menu).
// 2. Staat de stijlwisselaar aan (data-themas op <html>), zet dan het
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
