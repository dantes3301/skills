"use strict";var expertCard=document.querySelectorAll(".expert_recovery_card"),expertClose=document.querySelectorAll(".expert__close");expertCard.forEach(function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden",e.classList.contains("one")?document.querySelector(".expert__popup_container.one").classList.add("active"):e.classList.contains("two")?document.querySelector(".expert__popup_container.two").classList.add("active"):e.classList.contains("three")?document.querySelector(".expert__popup_container.three").classList.add("active"):e.classList.contain("four")&&document.querySelector(".expert__popup_container.four").classList.add("active")})}),expertClose.forEach(function(e){e.addEventListener("click",function(){document.body.style.overflow="visible",document.querySelector(".expert__popup_container.one").classList.remove("active"),document.querySelector(".expert__popup_container.two").classList.remove("active"),document.querySelector(".expert__popup_container.three").classList.remove("active"),document.querySelector(".expert__popup_container.four").classList.remove("active")})});