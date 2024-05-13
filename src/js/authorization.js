let PasswordBtn = document.querySelector('.password__btn')
let PasswordInp = document.querySelector('.inp.password')
PasswordBtn.onclick = function OpenPassword() {
    document.querySelector('.password__svg_one').classList.toggle("active")
    document.querySelector('.password__svg_two').classList.toggle("active")
    if(PasswordInp.getAttribute('type') === 'password'){
        PasswordInp.setAttribute('type', 'text')
    }
    else {
        PasswordInp.setAttribute('type', 'password')
    }
}