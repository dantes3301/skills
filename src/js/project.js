let select = document.querySelector('.select')
function open () {
    select.classList.toggle('is-active')
    document.querySelector('.select__icon').classList.toggle('is-active')
};
document.querySelector('.select__header').onclick = open

// Доделать