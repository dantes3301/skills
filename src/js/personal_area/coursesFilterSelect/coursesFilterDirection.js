const selectCourseDirection = document.getElementById('select-course-direction'),
  selectCourseDirectionBtn = document.getElementById('select-course-direction__btn'),
  selectCourseDirectionOptions = document.getElementById('select-course-direction__options'),
  hiddenCourseDirectionInput = document.getElementById('course-direction'),
  selectCourseDirection_tab_2 = document.getElementById('select-course-direction_tab_2'),
  selectCourseDirectionBtn_tab_2 = document.getElementById('select-course-direction__btn_tab_2'),
  selectCourseDirectionOptions_tab_2 = document.getElementById('select-course-direction__options_tab_2'),
  hiddenCourseDirectionInput_tab_2 = document.getElementById('course-direction_tab_2')

let directions = ["Математика", "Программирование", "Искусство"]

function addDirection(selectedDirection) {
  selectCourseDirectionOptions.innerHTML = ''
  directions.forEach(direction => {
    let isSelected = direction == selectedDirection ? 'selected' : ''
    let li = `<li onclick="updateDirection(this)" class="${isSelected}">${direction}</li>`
    selectCourseDirectionOptions.insertAdjacentHTML("beforeend", li)
  })
}
function addDirection_tab_2(selectedDirection) {
  selectCourseDirectionOptions_tab_2.innerHTML = ''
  directions.forEach(direction => {
    let isSelected = direction == selectedDirection ? 'selected' : ''
    let li = `<li onclick="updateDirection_tab_2(this)" class="${isSelected}">${direction}</li>`
    selectCourseDirectionOptions_tab_2.insertAdjacentHTML("beforeend", li)
  })
}
addDirection();
addDirection_tab_2();

function updateDirection(selectedLi) {
  selectCourseDirection.classList.remove('custom-select_active');
  addDirection(selectedLi.innerText)
  selectCourseDirectionBtn.firstElementChild.innerText = selectedLi.innerText
  hiddenCourseDirectionInput.value = selectedLi.innerText;
}
function updateDirection_tab_2(selectedLi) {
  selectCourseDirection_tab_2.classList.remove('custom-select_active');
  addDirection_tab_2(selectedLi.innerText)
  selectCourseDirectionBtn_tab_2.firstElementChild.innerText = selectedLi.innerText
  hiddenCourseDirectionInput_tab_2.value = selectedLi.innerText;
}

selectCourseDirectionBtn.addEventListener('click', () => {
  selectCourseDirection.classList.toggle('custom-select_active');
})
selectCourseDirectionBtn_tab_2.addEventListener('click', () => {
  selectCourseDirection_tab_2.classList.toggle('custom-select_active');
})