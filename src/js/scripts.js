// Affichage du menu mobile

const hamburger = document.querySelector(".menuBurger");
const menu = document.querySelector(".menu");
const page = document.body;
const site = document.querySelector("html");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.ariaExpanded === "true";
    const isClosed = !isOpen;
    
    hamburger.ariaExpanded = isClosed;
    hamburger.classList.toggle("menuBurger--open", isClosed);
    menu.ariaHidden = isOpen;
    menu.classList.toggle("menu--open", isClosed);
    menu.classList.toggle("noscroll", isClosed);
    site.classList.toggle("noscroll", isClosed);
  });
}



// Affichage du background sur la page d'accueil

const path = window.location.pathname;

if (path === "/" || path === "/index.html") {
    document.body.classList.add("homepage");
}

