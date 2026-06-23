const btnMenu = document.querySelector(".btn-menu");
const navLinks = document.querySelector(".nav-links");

if (btnMenu && navLinks) {
  btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("abierto");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("abierto"));
  });
}
