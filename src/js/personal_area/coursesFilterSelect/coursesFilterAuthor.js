const selectCourseAuthor = document.getElementById('select-course-author'),
  selectCourseAuthorBtn = document.getElementById('select-course-author__btn'),
  selectCourseAuthorOptions = document.getElementById('select-course-author__options'),
  hiddenCourseAuthorInput = document.getElementById('course-author'),
  selectCourseAuthor_tab_2 = document.getElementById('select-course-author_tab_2'),
  selectCourseAuthorBtn_tab_2 = document.getElementById('select-course-author__btn_tab_2'),
  selectCourseAuthorOptions_tab_2 = document.getElementById('select-course-author__options_tab_2'),
  hiddenCourseAuthorInput_tab_2 = document.getElementById('course-author_tab_2')
arr
let authors = ["MIT", "Microsoft"]

function addAuthor(selectedAuthor) {
  selectCourseAuthorOptions.innerHTML = ''
  authors.forEach(author => {
    let isSelected = author == selectedAuthor ? 'selected' : ''
    let li = `<li onclick="updateAuthor(this)" class="${isSelected}">${author}</li>`
    selectCourseAuthorOptions.insertAdjacentHTML("beforeend", li)
  })
}
function addAuthor_tab_2(selectedAuthor) {
  selectCourseAuthorOptions_tab_2.innerHTML = ''
  authors.forEach(author => {
    let isSelected = author == selectedAuthor ? 'selected' : ''
    let li = `<li onclick="updateAuthor_tab_2(this)" class="${isSelected}">${author}</li>`
    selectCourseAuthorOptions_tab_2.insertAdjacentHTML("beforeend", li)
  })
}
addAuthor();
addAuthor_tab_2();

function updateAuthor(selectedLi) {
  selectCourseAuthor.classList.remove('custom-select_active');
  addAuthor(selectedLi.innerText)
  selectCourseAuthorBtn.firstElementChild.innerText = selectedLi.innerText
  hiddenCourseAuthorInput.value = selectedLi.innerText;
}
function updateAuthor_tab_2(selectedLi) {
  selectCourseAuthor_tab_2.classList.remove('custom-select_active');
  addAuthor_tab_2(selectedLi.innerText)
  selectCourseAuthorBtn_tab_2.firstElementChild.innerText = selectedLi.innerText
  hiddenCourseAuthorInput_tab_2.value = selectedLi.innerText;
}

selectCourseAuthorBtn.addEventListener('click', () => {
  selectCourseAuthor.classList.toggle('custom-select_active');
})
selectCourseAuthorBtn_tab_2.addEventListener('click', () => {
  selectCourseAuthor_tab_2.classList.toggle('custom-select_active');
})