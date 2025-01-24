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

// Affichage des photos

document.addEventListener("DOMContentLoaded", function() {
  const photos = [];

  for (let i = 1; i <= 38; i++) {
    photos.push({
      titre: `Photo ${i}`,
      image: `/src/assets/photos/${i}.webp`,
      alt: ""
    });
  }

  const photosContainer = document.getElementById("photosContainer");

  photos.forEach(photo => {
    const photoElement = document.createElement('article');
    photoElement.classList.add('photo');
    photoElement.innerHTML = `
      <a class="photo__titre" href="#">
        ${photo.titre}
      </a>
      <div class="photo__image">
        <a href="#">
          <img src="${photo.image}" alt="${photo.alt}">
        </a>
      </div>
    `;
    photosContainer.appendChild(photoElement);
  });
});