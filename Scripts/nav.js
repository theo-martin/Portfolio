const sidenav = document.querySelector(".nav__sidenav"); // Utiliser un seul underscore ici
const openNav = document.querySelector(".nav__burger");
const closeNav = document.querySelector(".nav__sidenav__close");

openNav.addEventListener("click", () => {
  sidenav.classList.add("nav__sidenav--active");
});

closeNav.addEventListener("click", () => {
  sidenav.classList.remove("nav__sidenav--active");
});
