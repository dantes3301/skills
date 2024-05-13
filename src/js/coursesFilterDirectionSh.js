const selectDirection = document.getElementById('select-direction'),
  selectDirectionBtn = document.getElementById('select-direction__btn'),
  selectDirectionOptions = document.getElementById('select-direction__options'),
  hiddenDirectionInput = document.getElementById('direction-school')

let Dir = ["Дизайн", "Soft-Skills", "Аналитика"]

function addDirection(selectedCityDir) {
  selectDirectionOptions.innerHTML = ''
  Dir.forEach(DirSchool => {
    let isSelectedDir = DirSchool == selectedCityDir ? 'selected' : ''
    let liDir = `<li onclick="updateNameDir(this)" class="${isSelectedDir}">${DirSchool}</li>`
    selectDirectionOptions.insertAdjacentHTML("beforeend", liDir)
  })
}
addDirection();

function updateNameDir(selectedLiDir) {
  selectDirection.classList.remove('custom-select_active');
  addDirection(selectedLiDir.innerText)
  selectDirectionBtn.firstElementChild.innerText = selectedLiDir.innerText
  console.log(hiddenDirectionInput);
  hiddenDirectionInput.value = selectedLiDir.innerText;
  console.log(hiddenDirectionInput)
}

selectDirectionBtn.addEventListener('click', () => {
  selectDirection.classList.toggle('custom-select_active');
})