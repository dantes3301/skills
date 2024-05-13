let Password = document.querySelectorAll('.inp.password')
let Name = document.querySelectorAll('.inp.name')
let Email = document.querySelectorAll('.inp.email')
document.querySelector('button').onclick = () => {
    document.querySelectorAll('input').forEach(elem => {
        if (elem.value == '' || elem.value.length + 1 <= 8){
            elem.classList.remove('active')
           elem.classList.add('is-active') 
        }
    })
}

Password.forEach(elem => {
    elem.addEventListener('input', e =>{
        if (elem.value == '' || elem.value.length + 1 <= 8){
            elem.classList.remove('active')
           elem.classList.add('is-active') 
        }
        else if(elem.value != '' && elem.value.length + 1 >= 8){
            elem.classList.remove('is-active') 
            elem.classList.add('active')
        }
        console.log(elem.value.length);
    })
})

Name.forEach(elem => {
    elem.addEventListener('input', e =>{
        if (elem.value == '' || elem.value.length + 1 <= 2){
            elem.classList.remove('active')
           elem.classList.add('is-active') 
        }
        else if(elem.value != '' && elem.value.length + 1 >= 2){
            elem.classList.remove('is-active') 
            elem.classList.add('active')
        }
        console.log(elem.value.length);
    })
})
Email.forEach(elem => {
    elem.addEventListener('input', e =>{
        if (elem.value == '' || elem.value.length + 1 <= 5 || elem.value.indexOf("@") == -1 || elem.value.indexOf(".") == -1 ){
            elem.classList.remove('active')
           elem.classList.add('is-active') 
        }
        else if(elem.value != '' && elem.value.length + 1 >= 5){
            elem.classList.remove('is-active') 
            elem.classList.add('active')
        }
        console.log(elem.value.length);
    })
})

