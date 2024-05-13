document.querySelector('.btn.blue__background.popup').onclick = () => {
    console.log(1);
    document.querySelectorAll('input').forEach(elem => {
        if (elem.value == '' || elem.value.length + 1 <= 8){
            elem.classList.remove('active')
           elem.classList.add('is-active') 
        }
    })
}