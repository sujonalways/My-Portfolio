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
    position--;
    el.style.transform = `translateX(${position}px)`;
    // console.log(position);
    if (position <= -1420) {
      position = 0;
    }
  }, 20);
});
// console.log(skill_ul.offsetWidth);

// learning_ul
let learning_ul = document.querySelectorAll(".learning_ul li");

learning_ul.forEach((el, index) => {
  let position = -610;

  setInterval(() => {
    position++;
    el.style.transform = `translateX(${position}px)`;
    // console.log(position);
    if (0 <= position) {
      position = -610;
    }
  }, 20);
});

// tap_top button

let tap_top_p = document.querySelector(".tap_top p ");
let tap_top = document.querySelector(".tap_top ");
let top_line = document.querySelector(".top_line")
window.addEventListener("scroll", function () {
  scrollHight = document.documentElement.scrollHeight - window.innerHeight;
  totalHight = Math.ceil((window.scrollY / scrollHight) * 100);
  console.log(totalHight);
  
// tap button
  if(totalHight >= 20){
    tap_top.classList.add("active")
  }else{
    tap_top.classList.remove("active")

  }

  tap_top_p.style.background =  `conic-gradient(#D3D3D3 0%, #D3D3D3 ${totalHight}%, #764f39 ${totalHight}%, #764f39 100%)`

  //  top line
  if(totalHight >= 6){
    top_line.classList.add("active")
  }else{
    top_line.classList.remove("active")

  }
  top_line.style.background = `linear-gradient(to right ,#1D1D1D 0%,#1D1D1D ${totalHight}%,#D6D6D6 ${totalHight}%, #D6D6D6 100%)`

});
