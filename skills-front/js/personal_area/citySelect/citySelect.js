"use strict";var selectCity=document.getElementById("select-city"),selectCityBtn=document.getElementById("select-city__btn"),selectCityOptions=document.getElementById("select-city__options"),hiddenCityInput=document.getElementById("profile-settings-city"),cities=["Уфа","Москва","Санкт-Петербург","Владимир","Рязань","Пермь","Казань","Набережные челны","Волгоград","Калининград"];function addCountry(e){selectCityOptions.innerHTML="",cities.forEach(function(t){t='<li onclick="updateName(this)" class="'.concat(t==e?"selected":"",'">').concat(t,"</li>");selectCityOptions.insertAdjacentHTML("beforeend",t)})}function updateName(t){selectCity.classList.remove("custom-select_active"),addCountry(t.innerText),selectCityBtn.firstElementChild.innerText=t.innerText,hiddenCityInput.value=t.innerText}addCountry(),selectCityBtn.addEventListener("click",function(){selectCity.classList.toggle("custom-select_active")});