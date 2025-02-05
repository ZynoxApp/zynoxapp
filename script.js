const openMenu = document.querySelector(".menu-img");
const closeMenu = document.querySelector(".close-menu-img");

openMenu.addEventListener("click", function () {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", function () {
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});
