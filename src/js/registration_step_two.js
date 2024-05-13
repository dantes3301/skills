
let PasswordBtn = document.querySelector('.password__btn.one')
let PasswordInp = document.querySelector('.inp.password')
PasswordBtn.onclick = function OpenPassword() {
    document.querySelector('.password__svg_one').classList.toggle("active")
    document.querySelector('.password__svg_two').classList.toggle("active")
    if(PasswordInp.getAttribute('type') === 'password'){
        PasswordInp.setAttribute('type', 'text')
    }
    else{
        PasswordInp.setAttribute('type', 'password')
    }
}
let PasswordBtnTwo = document.querySelector('.password__btn.two')
let PasswordInpTwo = document.querySelector('.inp.password.two')
PasswordBtnTwo.onclick = function OpenPasswordTwo() {
    document.querySelector('.password__svg_one.two').classList.toggle("active")
    document.querySelector('.password__svg_two.two').classList.toggle("active")
    if(PasswordInpTwo.getAttribute('type') === 'password'){
        PasswordInpTwo.setAttribute('type', 'text')
    }
    else{
        PasswordInpTwo.setAttribute('type', 'password')
    }
}