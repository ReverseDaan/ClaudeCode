// Hoofdmenu.
// 1. Mobiel: de knop "Menu" klapt het hoofdmenu open en dicht.
//    Op grote schermen is die knop verborgen en staat het menu altijd open.
// 2. Laptop: het pijltje naast een item met subitems (bijv. "Over ons")
//    klapt een klein lijstje open. Escape of ergens anders klikken sluit het.
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

  // Submenu's: open of dicht zetten
  const subKnoppen = menu.querySelectorAll(".submenu-knop");

  function zetSubOpen(subKnop, open) {
    subKnop.setAttribute("aria-expanded", String(open));
    subKnop.closest(".hoofdmenu__groep").classList.toggle("is-open", open);
  }

  subKnoppen.forEach((subKnop) => {
    subKnop.addEventListener("click", () => {
      const isOpen = subKnop.getAttribute("aria-expanded") === "true";
      zetSubOpen(subKnop, !isOpen);
    });
  });

  // Klik buiten een open submenu: dicht
  document.addEventListener("click", (event) => {
    subKnoppen.forEach((subKnop) => {
      const groep = subKnop.closest(".hoofdmenu__groep");
      if (groep.classList.contains("is-open") && !groep.contains(event.target)) {
        zetSubOpen(subKnop, false);
      }
    });
  });

  // Escape sluit eerst een open submenu (focus terug op het pijltje),
  // anders het mobiele menu (focus terug op de knop "Menu").
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openSub = menu.querySelector(".submenu-knop[aria-expanded='true']");
    if (openSub) {
      zetSubOpen(openSub, false);
      openSub.focus();
    } else if (menu.classList.contains("is-open")) {
      zetOpen(false);
      knop.focus();
    }
  });

  // Tab je uit een open submenu weg, dan gaat het dicht
  menu.addEventListener("focusout", (event) => {
    subKnoppen.forEach((subKnop) => {
      const groep = subKnop.closest(".hoofdmenu__groep");
      if (groep.classList.contains("is-open") && !groep.contains(event.relatedTarget)) {
        zetSubOpen(subKnop, false);
      }
    });
  });
});
