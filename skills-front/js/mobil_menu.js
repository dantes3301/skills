"use strict";var burger=document.querySelector(".manu__burger"),burgerTwo=document.querySelector(".manu__burger_two");burger.onclick=function(){document.querySelector(".header__mobil_menu").classList.add("active"),document.body.style.overflow="hidden",burger.classList.add("none"),burgerTwo.classList.add("active")},burgerTwo.onclick=function(){document.querySelector(".header__mobil_menu").classList.remove("active"),document.body.style.overflow="visible",burger.classList.remove("none"),burgerTwo.classList.remove("active")};