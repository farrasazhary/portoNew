const menu = document.querySelector(".menu");
const navlist = document.querySelector(".navlist");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  this.classList.toggle("click");
  navbar.classList.toggle("h-nav");
  navlist.classList.toggle("v-nav");
});

function check(e) {
  navbar.classList.toggle("h-nav");
  navlist.classList.toggle("v-nav");
  menu.classList.toggle("click");
}
