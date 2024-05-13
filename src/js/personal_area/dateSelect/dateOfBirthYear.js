const selectYearBirth = document.getElementById('select-year-birth'),
  selectYearBirthBtn = document.getElementById('select-year-birth__btn'),
  selectYearBirthOptions = document.getElementById('select-year-birth__options'),
  hiddenYearBirthInput = document.getElementById('profile-setting-year-birth')

let years = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013"]

function addYear(selectedYear) {
  selectYearBirthOptions.innerHTML = ''
  years.forEach(year => {
    let isSelected = year == selectedYear ? 'selected' : ''
    let li = `<li onclick="updateYear(this)" class="${isSelected}">${year}</li>`
    selectYearBirthOptions.insertAdjacentHTML("beforeend", li)
  })
}
addYear();

function updateYear(selectedLi) {
  selectYearBirth.classList.remove('custom-select_active');
  addYear(selectedLi.innerText)
  selectYearBirthBtn.firstElementChild.innerText = selectedLi.innerText
  hiddenYearBirthInput.value = selectedLi.innerText;
  selectYearBirthBtn.classList.add('validate-success')

}

selectYearBirthBtn.addEventListener('click', () => {
  selectYearBirth.classList.toggle('custom-select_active');
})