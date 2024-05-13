// let answer = document.querySelector('.question__boby')
// let on = document.querySelector('.question__icon_on')
// let off = document.querySelector('.question__icon_off')
// function open () {
//     answer.classList.toggle('is-active')
//     on.classList.toggle('off')
//     off.classList.toggle('is-active')
// }
// document.querySelector('.question__header').onclick = open

document.querySelectorAll('.question__header').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode
        parent.classList.toggle('is-active')
    })
)

