const selectMonthBirth = document.getElementById('select-month-birth'),
  selectMonthBirthBtn = document.getElementById('select-month-birth__btn'),
  selectMonthBirthOptions = document.getElementById('select-month-birth__options'),
  hiddenMonthBirthInput = document.getElementById('profile-setting-month-birth')

let months = ["Январь", "Ферваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь"]

function addMonth(selectedMonth) {
  selectMonthBirthOptions.innerHTML = ''
  months.forEach(month => {
    let isSelected = month == selectedMonth ? 'selected' : ''
    let li = `<li onclick="updateMonth(this)" class="${isSelected}">${month}</li>`
    selectMonthBirthOptions.insertAdjacentHTML("beforeend", li)
  })
}
addMonth();

function updateMonth(selectedLi) {
  selectMonthBirth.classList.remove('custom-select_active');
  addMonth(selectedLi.innerText)
  selectMonthBirthBtn.firstElementChild.innerText = selectedLi.innerText
  hiddenMonthBirthInput.value = selectedLi.innerText;
  selectMonthBirthBtn.classList.add('validate-success')

}

selectMonthBirthBtn.addEventListener('click', () => {
  selectMonthBirth.classList.toggle('custom-select_active');
})