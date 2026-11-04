// Landschap op Home (zie partials/landschap.njk en style.css, sectie 6).
// 1. Maakt de naam (SVG-tekst) precies passend in zijn vak.
// 2. Laat de naam letter voor letter "schrijven" als vooraf.js dat heeft
//    aangezet (klasse "schrijf-naam" op <html>).
// 3. Diepte bij scrollen (parallax), alleen in het thema Penseel & papier.
document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector(".hero__naam");
  if (!svg) return;
  const tekst = svg.querySelector("text");
  const html = document.documentElement;

  // 1 en 2: wacht tot de lettertypes er zijn, anders klopt de maat niet.
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    tekst.setAttribute("x", svg.clientWidth / 2);
    const vak = tekst.getBBox();
    const marge = vak.height * 0.08;
    svg.setAttribute("viewBox", `${vak.x - marge} ${vak.y - marge} ${vak.width + 2 * marge} ${vak.height + 2 * marge}`);
    svg.classList.add("is-passend");

    if (!html.classList.contains("schrijf-naam")) return;
    // Elke letter in een eigen <tspan>, met een kleine vertraging per letter.
    const letters = Array.from(tekst.textContent);
    tekst.textContent = "";
    letters.forEach((teken, i) => {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.textContent = teken;
      tspan.setAttribute("class", "letter");
      tspan.style.animationDelay = `${i * 0.07}s`;
      tekst.appendChild(tspan);
    });
    const streek = document.querySelector(".hero__streek path");
    if (streek) streek.style.animationDelay = `${letters.length * 0.07 + 0.5}s`;
  });

  // 3: parallax, alleen in thema 3 en niet bij "minder beweging".
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const lagen = Array.from(document.querySelectorAll(".landschap__laag"));
  const metDiepte = () => ["penseel", "groen-goud"].includes(html.dataset.thema);
  let bezig = false;
  window.addEventListener("scroll", () => {
    if (bezig) return;
    bezig = true;
    requestAnimationFrame(() => {
      const aan = metDiepte();
      html.classList.toggle("met-diepte", aan);
      lagen.forEach((laag) => {
        const diepte = Number(laag.dataset.diepte || 0);
        laag.style.transform = aan ? `translateY(${window.scrollY * diepte}px)` : "";
      });
      bezig = false;
    });
  }, { passive: true });
});
