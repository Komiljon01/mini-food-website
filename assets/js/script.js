const openMenu = document.querySelector(".navbar__menu-open"),
  closeMenu = document.querySelector(".navbar__menu-close"),
  menu = document.querySelector(".navbar__lists-mobile");

openMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});

closeMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});
