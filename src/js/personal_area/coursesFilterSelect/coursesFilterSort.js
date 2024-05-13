const selectCourseSort = document.getElementById('select-course-sort'),
  selectCourseSortBtn = document.getElementById('select-course-sort__btn'),
  selectCourseSortOptions = document.getElementById('select-course-sort__options'),
  hiddenCourseSortInput = document.getElementById('course-direction'),
  selectCourseSort_tab_2 = document.getElementById('select-course-sort_tab_2'),
  selectCourseSortBtn_tab_2 = document.getElementById('select-course-sort__btn_tab_2'),
  selectCourseSortOptions_tab_2 = document.getElementById('select-course-sort__options_tab_2'),
  hiddenCourseSortInput_tab_2 = document.getElementById('course-direction_tab_2')

let sorts = ["По популярности", "По стоимости"]

function addSort(selectedSort) {
  selectCourseSortOptions.innerHTML = ''
  sorts.forEach(sort => {
    let isSelected = sort == selectedSort ? 'selected' : ''
    let li = `<li onclick="updateSort(this)" class="${isSelected}">${sort}</li>`
    selectCourseSortOptions.insertAdjacentHTML("beforeend", li)
  })
}
function addSort_tab_2(selectedSort) {
  selectCourseSortOptions_tab_2.innerHTML = ''
  sorts.forEach(sort => {
    let isSelected = sort == selectedSort ? 'selected' : ''
    let li = `<li onclick="updateSort_tab_2(this)" class="${isSelected}">${sort}</li>`
    selectCourseSortOptions_tab_2.insertAdjacentHTML("beforeend", li)
  })
}
addSort();
addSort_tab_2();

function updateSort(selectedLi) {
  selectCourseSort.classList.remove('custom-select_active');
  addSort(selectedLi.innerText)
  selectCourseSortBtn.firstElementChild.innerText = selectedLi.innerText
  hiddenCourseSortInput.value = selectedLi.innerText;
}
function updateSort_tab_2(selectedLi) {
  selectCourseSort_tab_2.classList.remove('custom-select_active');
  addSort_tab_2(selectedLi.innerText)
  selectCourseSortBtn_tab_2.firstElementChild.innerText = selectedLi.innerText
  hiddenCourseSortInput_tab_2.value = selectedLi.innerText;
}

selectCourseSortBtn.addEventListener('click', () => {
  selectCourseSort.classList.toggle('custom-select_active');
})
selectCourseSortBtn_tab_2.addEventListener('click', () => {
  selectCourseSort_tab_2.classList.toggle('custom-select_active');
})