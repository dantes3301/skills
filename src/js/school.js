// let SelectBoby = document.querySelector('.school__select_body')

// function open () {
//     SelectBoby.classList.toggle('is-active')
// }
// document.querySelector('.school__select_head').onclick = open



let SelevtMobilBody = document.querySelector('.school__select_mobil_body')
function openMobil () {
    SelevtMobilBody.classList.add('is-active')
    document.body.style.overflow = 'hidden'
    
}
function CloseMobil () {
    SelevtMobilBody.classList.remove('is-active')
    document.body.style.overflow = 'visible'
}
function checked () {
    document.querySelectorAll('.checkbox__input').forEach(element => {
        if (element.checked == true){
            element.checked = false
        }
    });
}
function OpenSorting (){
    document.querySelector('.sorging__body').classList.toggle('is-active')
}
document.querySelectorAll('.school__select_item').forEach((item) =>
item.addEventListener('click', () => { 
    item.classList.toggle('is-active')
})
)
document.querySelectorAll('.directions__svg').forEach(elem =>{
    elem.addEventListener('click', () =>{
        elem.parentElement.remove()
    })
})

document.querySelector('.sorting__container').onclick = OpenSorting
document.querySelector('.resert__text').onclick = checked
document.querySelector('.reset_svg').onclick = CloseMobil
document.querySelector('.school__menu_mobile_svg').onclick = openMobil
document.querySelector('.btn.blue__background').onclick = CloseMobil
