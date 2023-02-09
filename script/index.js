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
  "./resume/Dheeraj_pal_Resume.pdf", "_blank");
}