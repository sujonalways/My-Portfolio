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
// skill_ul
let skill_ul = document.querySelectorAll(".skill_ul li");

skill_ul.forEach((el, index) => {
  let position = 0;

  setInterval(() => {
    position = position - 1;
    el.style.transform = `translateX(${position}px)`;
    console.log(position);
    if (position <= -1440) {
      position = 0;
    }
  }, 20);
});
// console.log(skill_ul.offsetWidth);

// learning_ul
let learning_ul = document.querySelectorAll(".learning_ul li");

learning_ul.forEach((el, index) => {
  let position = 0;

  setInterval(() => {
   position = position + 1
    el.style.transform = `translateX(${position}px)`;
    // console.log(position);
    if (100 <= position ) {
      position = 0;
    }
  }, 20);
});