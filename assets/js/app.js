let btnOne = document.querySelector(".btn-one");
let btnTwo = document.querySelector(".btn-two");
let modileMenu = document.querySelector(".modile-menu");

btnOne.addEventListener("click", function () {
  btnTwo.classList.add("active");
  btnOne.classList.add("active");
  modileMenu.classList.add("active");
});
btnTwo.addEventListener("click", function () {
  btnTwo.classList.remove("active");
  btnOne.classList.remove("active");
  modileMenu.classList.remove("active");
});
// laptoop ul
let nav_ul = document.querySelectorAll(".nav-ul li");
nav_ul.forEach((el, index) => {
  el.addEventListener("click", function () {
    el.classList.add("actives");
  });
});
// modile ul
let modile_menu_ul = document.querySelectorAll(".modile-menu-ul li");
modile_menu_ul.forEach((el, index) => {
  el.addEventListener("click", function () {
    el.classList.add("activess");
  });
});
