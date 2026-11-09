// Stijlwisselaar: wisselt tussen de thema's uit site.yaml.
// Het gekozen thema staat als data-thema op <html>, bijv. data-thema="zand".
// Ook het eerste thema (de standaard) staat als data-thema op <html>.
// De keuze wordt onthouden in de browser (localStorage), zodat je op
// andere pagina's in dezelfde stijl blijft.
document.addEventListener("DOMContentLoaded", () => {
  const wisselaar = document.querySelector(".stijlwisselaar");
  if (!wisselaar) return;

  const knop = wisselaar.querySelector(".stijlwisselaar__knop");
  const lijst = wisselaar.querySelector(".stijlwisselaar__lijst");
  const huidigLabel = wisselaar.querySelector(".stijlwisselaar__huidig");
  const opties = Array.from(wisselaar.querySelectorAll(".stijlwisselaar__optie"));
  const standaard = opties[0].dataset.themaCode;

  // Zet een thema actief: op de pagina, in de knop en in het geheugen.
  function kiesThema(code) {
    document.documentElement.dataset.thema = code;

    opties.forEach((optie) => {
      const actief = optie.dataset.themaCode === code;
      optie.setAttribute("aria-pressed", String(actief));
      if (actief) huidigLabel.textContent = optie.textContent;
    });

    // localStorage kan geblokkeerd zijn (bijv. privévenster); dan werkt
    // het wisselen nog steeds, alleen wordt de keuze niet onthouden.
    try {
      localStorage.setItem("stijl", code);
    } catch (fout) {}
  }

  function zetOpen(open) {
    knop.setAttribute("aria-expanded", String(open));
    lijst.hidden = !open;
  }

  // Toon de knop met het thema dat al actief is (gezet in de <head>).
  const actief = document.documentElement.dataset.thema || standaard;
  kiesThema(opties.some((o) => o.dataset.themaCode === actief) ? actief : standaard);
  wisselaar.hidden = false;

  knop.addEventListener("click", () => {
    const open = knop.getAttribute("aria-expanded") === "true";
    zetOpen(!open);
    if (!open) {
      // Focus op het actieve thema, zodat je met Tab verder kunt.
      const gekozen = opties.find((o) => o.getAttribute("aria-pressed") === "true");
      (gekozen || opties[0]).focus();
    }
  });

  opties.forEach((optie) => {
    optie.addEventListener("click", () => {
      kiesThema(optie.dataset.themaCode);
      zetOpen(false);
      knop.focus();
    });
  });

  // Escape sluit het lijstje en zet de focus terug op de knop.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lijst.hidden) {
      zetOpen(false);
      knop.focus();
    }
  });

  // Klikken buiten de wisselaar sluit het lijstje.
  document.addEventListener("click", (event) => {
    if (!lijst.hidden && !wisselaar.contains(event.target)) {
      zetOpen(false);
    }
  });
});
