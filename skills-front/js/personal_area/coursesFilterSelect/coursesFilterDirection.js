"use strict";var selectCourseDirection=document.getElementById("select-course-direction"),selectCourseDirectionBtn=document.getElementById("select-course-direction__btn"),selectCourseDirectionOptions=document.getElementById("select-course-direction__options"),hiddenCourseDirectionInput=document.getElementById("course-direction"),selectCourseDirection_tab_2=document.getElementById("select-course-direction_tab_2"),selectCourseDirectionBtn_tab_2=document.getElementById("select-course-direction__btn_tab_2"),selectCourseDirectionOptions_tab_2=document.getElementById("select-course-direction__options_tab_2"),hiddenCourseDirectionInput_tab_2=document.getElementById("course-direction_tab_2"),directions=["Математика","Программирование","Искусство"];function addDirection(t){selectCourseDirectionOptions.innerHTML="",directions.forEach(function(e){e='<li onclick="updateDirection(this)" class="'.concat(e==t?"selected":"",'">').concat(e,"</li>");selectCourseDirectionOptions.insertAdjacentHTML("beforeend",e)})}function addDirection_tab_2(t){selectCourseDirectionOptions_tab_2.innerHTML="",directions.forEach(function(e){e='<li onclick="updateDirection_tab_2(this)" class="'.concat(e==t?"selected":"",'">').concat(e,"</li>");selectCourseDirectionOptions_tab_2.insertAdjacentHTML("beforeend",e)})}function updateDirection(e){selectCourseDirection.classList.remove("custom-select_active"),addDirection(e.innerText),selectCourseDirectionBtn.firstElementChild.innerText=e.innerText,hiddenCourseDirectionInput.value=e.innerText}function updateDirection_tab_2(e){selectCourseDirection_tab_2.classList.remove("custom-select_active"),addDirection_tab_2(e.innerText),selectCourseDirectionBtn_tab_2.firstElementChild.innerText=e.innerText,hiddenCourseDirectionInput_tab_2.value=e.innerText}addDirection(),addDirection_tab_2(),selectCourseDirectionBtn.addEventListener("click",function(){selectCourseDirection.classList.toggle("custom-select_active")}),selectCourseDirectionBtn_tab_2.addEventListener("click",function(){selectCourseDirection_tab_2.classList.toggle("custom-select_active")});