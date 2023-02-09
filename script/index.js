const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-ul");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function NewTab() {
  window.open(
  "https://drive.google.com/file/d/17kbXv9IRArX26dObGs4mIl_FxLO3XYXs/view?usp=sharingpushed", "_blank");
}