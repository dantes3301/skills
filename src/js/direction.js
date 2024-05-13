document.querySelectorAll('.directions__svg').forEach(elem =>{
    elem.addEventListener('click', () =>{
        elem.parentElement.remove()
    })
})