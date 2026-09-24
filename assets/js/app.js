let btnOne = document.querySelector(".btn-one")
let btnTwo = document.querySelector(".btn-two")
let modileMenu = document.querySelector(".modile-menu")

btnOne.addEventListener("click",function () {
    btnTwo.classList.add("active")
    btnOne.classList.add("active")
    modileMenu.classList.add("active")
    
})
btnTwo.addEventListener("click",function () {
    btnTwo.classList.remove("active")
    btnOne.classList.remove("active")
    modileMenu.classList.remove("active")
    
})