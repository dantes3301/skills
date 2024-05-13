const selectCityTwo = document.getElementById('select-city-two'),
  selectCityBtnTwo = document.getElementById('select-city__btn-two'),
  selectCityOptionsTwo = document.getElementById('select-city__options-two'),
  hiddenCityInputTwo = document.getElementById('city-two')

let citiesTwo = ["Уфа", "Москва", "Санкт-Петербург", "Владимир", "Рязань", "Пермь", "Казань", "Набережные челны", "Волгоград", "Калининград"]

function addCountry(selectedCityTwo) {
  selectCityOptionsTwo.innerHTML = ''
  citiesTwo.forEach(cityTwo => {
    let isSelectedTwo = cityTwo == selectedCityTwo ? 'selected' : ''
    let liTwo = `<li onclick="updateNameTwo(this)" class="${isSelectedTwo}">${cityTwo}</li>`
    selectCityOptionsTwo.insertAdjacentHTML("beforeend", liTwo)
  })
}
addCountry();

function updateNameTwo(selectedLiTwo) {
  selectCityTwo.classList.remove('custom-select_active');
  addCountry(selectedLiTwo.innerText)
  selectCityBtnTwo.firstElementChild.innerText = selectedLiTwo.innerText
  hiddenCityInputTwo.value = selectedLiTwo.innerText;
  console.log(hiddenCityInputTwo.value)
}

selectCityBtnTwo.addEventListener('click', () => {
  selectCityTwo.classList.toggle('custom-select_active');
})