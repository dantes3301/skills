const checkboxInputs = document.querySelectorAll('.checkbox');
checkboxInputs.forEach(checkboxItem => {
    checkboxItem.addEventListener('click', e =>{  
        console.log(1);    
        checkboxItem.classList.toggle('active');
        // document.querySelector('.block__show_none').classList.add('is-active');
        console.log(checkboxItem.querySelector('input'));
        checkboxItem.querySelector('input').checked = !checkboxItem.querySelector('input').checked;
    })
    
})