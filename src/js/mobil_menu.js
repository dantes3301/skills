const burger = document.querySelector('.manu__burger')
const burgerTwo = document.querySelector('.manu__burger_two')
burger.onclick = function burgerOpen (){
    document.querySelector('.header__mobil_menu').classList.add('active')
    document.body.style.overflow = 'hidden'
    burger.classList.add('none')
    burgerTwo.classList.add('active')
}
burgerTwo.onclick = function burgerClose (){
    document.querySelector('.header__mobil_menu').classList.remove('active')
    document.body.style.overflow = 'visible'
    burger.classList.remove('none')
    burgerTwo.classList.remove('active')
}