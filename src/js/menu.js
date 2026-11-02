// Mobiel menu: de knop "Menu" klapt het hoofdmenu open en dicht.
// Op grote schermen is de knop verborgen en staat het menu altijd open.
document.addEventListener("DOMContentLoaded", () => {
  const knop = document.querySelector(".menu-knop");
  const menu = document.querySelector("#hoofdmenu");
  if (!knop || !menu) return;

  function zetOpen(open) {
    knop.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  }

  knop.addEventListener("click", () => {
    const isOpen = knop.getAttribute("aria-expanded") === "true";
    zetOpen(!isOpen);
  });

  // Escape sluit het menu en zet de focus terug op de knop.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      zetOpen(false);
      knop.focus();
    }
  });
});
