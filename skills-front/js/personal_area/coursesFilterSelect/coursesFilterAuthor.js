"use strict";var selectCourseAuthor=document.getElementById("select-course-author"),selectCourseAuthorBtn=document.getElementById("select-course-author__btn"),selectCourseAuthorOptions=document.getElementById("select-course-author__options"),hiddenCourseAuthorInput=document.getElementById("course-author"),selectCourseAuthor_tab_2=document.getElementById("select-course-author_tab_2"),selectCourseAuthorBtn_tab_2=document.getElementById("select-course-author__btn_tab_2"),selectCourseAuthorOptions_tab_2=document.getElementById("select-course-author__options_tab_2"),hiddenCourseAuthorInput_tab_2=document.getElementById("course-author_tab_2"),authors=(arr,["MIT","Microsoft"]);function addAuthor(e){selectCourseAuthorOptions.innerHTML="",authors.forEach(function(t){t='<li onclick="updateAuthor(this)" class="'.concat(t==e?"selected":"",'">').concat(t,"</li>");selectCourseAuthorOptions.insertAdjacentHTML("beforeend",t)})}function addAuthor_tab_2(e){selectCourseAuthorOptions_tab_2.innerHTML="",authors.forEach(function(t){t='<li onclick="updateAuthor_tab_2(this)" class="'.concat(t==e?"selected":"",'">').concat(t,"</li>");selectCourseAuthorOptions_tab_2.insertAdjacentHTML("beforeend",t)})}function updateAuthor(t){selectCourseAuthor.classList.remove("custom-select_active"),addAuthor(t.innerText),selectCourseAuthorBtn.firstElementChild.innerText=t.innerText,hiddenCourseAuthorInput.value=t.innerText}function updateAuthor_tab_2(t){selectCourseAuthor_tab_2.classList.remove("custom-select_active"),addAuthor_tab_2(t.innerText),selectCourseAuthorBtn_tab_2.firstElementChild.innerText=t.innerText,hiddenCourseAuthorInput_tab_2.value=t.innerText}addAuthor(),addAuthor_tab_2(),selectCourseAuthorBtn.addEventListener("click",function(){selectCourseAuthor.classList.toggle("custom-select_active")}),selectCourseAuthorBtn_tab_2.addEventListener("click",function(){selectCourseAuthor_tab_2.classList.toggle("custom-select_active")});