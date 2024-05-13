const selectDayBirth = document.getElementById('select-day-birth'),
  selectDayBirthBtn = document.getElementById('select-day-birth__btn'),
  selectDayBirthOptions = document.getElementById('select-day-birth__options'),
  hiddenDayBirthInput = document.getElementById('profile-setting-day-birth')

let days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
function addDay(selectedDay) {
  selectDayBirthOptions.innerHTML = ''
  days.forEach(day => {
    let isSelected = day == selectedDay ? 'selected' : ''
    let li = `<li onclick="updateDay(this)" class="${isSelected}">${day}</li>`
    selectDayBirthOptions.insertAdjacentHTML("beforeend", li)
  })
}
addDay();

function updateDay(selectedLi) {
  selectDayBirth.classList.remove('custom-select_active');
  addDay(selectedLi.innerText)
  selectDayBirthBtn.firstElementChild.innerText = selectedLi.innerText
  hiddenDayBirthInput.value = selectedLi.innerText;
  selectDayBirthBtn.classList.add('validate-success')
}

selectDayBirthBtn.addEventListener('click', () => {
  selectDayBirth.classList.toggle('custom-select_active');
})