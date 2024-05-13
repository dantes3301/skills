const selectCity = document.getElementById('select-city'),
  selectCityBtn = document.getElementById('select-city__btn'),
  selectCityOptions = document.getElementById('select-city__options'),
  hiddenCityInput = document.getElementById('profile-settings-city')

let cities = ["Уфа", "Москва", "Санкт-Петербург", "Владимир", "Рязань", "Пермь", "Казань", "Набережные челны", "Волгоград", "Калининград"]

function addCountry(selectedCity) {
  selectCityOptions.innerHTML = ''
  cities.forEach(city => {
    let isSelected = city == selectedCity ? 'selected' : ''
    let li = `<li onclick="updateName(this)" class="${isSelected}">${city}</li>`
    selectCityOptions.insertAdjacentHTML("beforeend", li)
  })
}
addCountry();

function updateName(selectedLi) {
  selectCity.classList.remove('custom-select_active');
  addCountry(selectedLi.innerText)
  selectCityBtn.firstElementChild.innerText = selectedLi.innerText
  hiddenCityInput.value = selectedLi.innerText;
}

selectCityBtn.addEventListener('click', () => {
  selectCity.classList.toggle('custom-select_active');
})