let SelectBoby = document.querySelector('.school__select_body');
let Net = document.querySelector('.course__card_container');
let Line = document.querySelector('.card__line_container');


// function open () {
//     SelectBoby.classList.toggle('is-active')
//     document.querySelector('.school__select_head_svg').classList.toggle('is-active')
//     document.querySelector('.checkbox_all').classList.toggle('is-active')

// }
// document.querySelector('.school__select_head').onclick = open
// let SelevtMobilBody = document.querySelector('.school__select_mobil_body')
// function openMobil () {
//     SelevtMobilBody.classList.add('is-active')
//     document.body.style.overflow = 'hidden'
//     document.querySelector('.school__cards_body').classList.add('is-active')
// }
// function CloseMobil () {
//     SelevtMobilBody.classList.remove('is-active')
//     document.body.style.overflow = 'visible'
//     document.querySelector('.school__cards_body').classList.remove('is-active')
// }
function checked () {
    document.querySelectorAll('.checkbox__input').forEach(element => {
        if (element.checked == true){
            element.checked = false
        }
    });
}
// function OpenLine () {
//     console.log(1);
//     Net.classList.add('is-active')
//     Line.classList.add('is-active')
//     document.querySelector('.net__line_svg.one').classList.add('is-active')
//     document.querySelector('.net__line_svg.two').classList.add('is-active')
// }
// function OpenNet() {
//     console.log(1);
//     Net.classList.remove('is-active')
//     Line.classList.remove('is-active')
//     document.querySelector('.net__line_svg.one').classList.remove('is-active')
//     document.querySelector('.net__line_svg.two').classList.remove('is-active')
// }
document.querySelectorAll('.inp.price').forEach(elem => {
    elem.addEventListener('keydown', e => {
        console.log(e.keyCode)
        if((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 ) && (e.keyCode < 8 || e.keyCode> 8)){
            e.preventDefault();
        }
        
    })
})
function OpenSorting (){
    document.querySelector('.sorging__body').classList.toggle('is-active')
}



// document.querySelectorAll('.checkbox__input').forEach(elem => {
//     elem.addEventListener('click', e => {


//             document.querySelector('.block__show').remove()
//             elem.closest("div").innerHTML += AddShow
        
        
//     })
// })

document.querySelectorAll('.btn_page__school').forEach((item) =>
item.addEventListener('click', () => { 
    document.querySelectorAll('.btn_page__school')[0].classList.remove('active')
    document.querySelectorAll('.btn_page__school')[1].classList.remove('active')
   if (item.value == 0){
    document.querySelector('.menu__card_filter_header').classList.add('is-active')
    document.querySelector('.page__school_reviews').classList.remove('is-active')
   }
   else if ( item.value == 1){
        document.querySelector('.menu__card_filter_header').classList.remove('is-active')
        document.querySelector('.page__school_reviews').classList.add('is-active')
    }
    item.classList.add('active')
})
)
function OpenLine (){
    document.querySelector('.card__line_container').classList.add('is-active')
    document.querySelector('.course__card_three_row').classList.add('is-active')
    document.querySelector('.net__line_svg.one').classList.add('is-active')
    document.querySelector('.net__line_svg.two').classList.add('is-active')
}   
function OpenNet (){
    document.querySelector('.card__line_container').classList.remove('is-active')
    document.querySelector('.course__card_three_row').classList.remove('is-active')
    document.querySelector('.net__line_svg.one').classList.remove('is-active')
    document.querySelector('.net__line_svg.two').classList.remove('is-active')
}

function openMobil (){
    document.querySelector('.school__select_mobil_body').classList.add('is-active')
    document.body.style.overflow = 'hidden'
}

function openMobileTwo(){
    
    document.querySelector('.school__filter_mobile_checkbox').classList.add('is-active')
    document.querySelector('.school__filter_mobile').classList.add('is-active')
    document.querySelector('.back__form_learning_text').classList.add('active')
    document.querySelector('.back__form_learning_svg').classList.add('active')
    document.querySelector('.back__form_learning_text_two').classList.add('active')
}
function closeMobileTwo (){
    document.querySelector('.school__filter_mobile_checkbox').classList.remove('is-active')
    document.querySelector('.school__filter_mobile').classList.remove('is-active')
    document.querySelector('.back__form_learning_text').textContent = 'Фильтры'
    document.querySelector('.back__form_learning_text').classList.remove('active')
    document.querySelector('.back__form_learning_svg').classList.remove('active')
    document.querySelector('.back__form_learning_text_two').classList.remove('active')
}
function CloseSorting (){
    document.querySelector('.school__select_mobil_body').classList.remove('is-active')
    document.body.style.overflow = 'visible'
}

document.querySelector('.reset_svg').onclick = CloseSorting
document.querySelector('.back__form_learning').onclick = closeMobileTwo
document.querySelector('.school__filter_btn.top').onclick = openMobileTwo
document.querySelector('.sorting__container').onclick = OpenSorting
document.querySelector('.net__line_svg.one').onclick = OpenNet
document.querySelector('.net__line_svg.two').onclick = OpenLine
document.querySelector('.resert__text').onclick = checked
document.querySelector('.school__menu_mobile_svg').onclick = openMobil


const selectCity = document.getElementById('select-city'),
  selectCityBtn = document.getElementById('select-city__btn'),
  selectCityOptions = document.getElementById('select-city__options'),
  hiddenCityInput = document.getElementById('city')

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
  console.log(hiddenCityInput.value)
}

selectCityBtn.addEventListener('click', () => {
  selectCity.classList.toggle('custom-select_active');
})

const reviewsBtn = document.querySelectorAll('.read-more-button');
reviewsBtn.forEach(elem => {
    elem.addEventListener('click', e =>{
        elem.closest('div').classList.toggle('active');
        // elem.querySelector('p').textContent = elem.querySelector('p').textContent === 'Развернуть отзыв' ? 'Свернуть отзыв' : 'Развернуть отзыв';
        elem.remove()
    })
})


