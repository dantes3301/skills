let AddShow = `<div class="block__show" onclick="event.stopPropagation()">
<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-3.0598e-07 7L11.25 13.0622L11.25 0.937823L-3.0598e-07 7Z" fill="#008CFF"/>
    </svg>                        
<p>Показать</p>
</div>`;

document.querySelectorAll('.school__select_item').forEach((item) =>
    item.addEventListener('click', () => { 
        item.classList.toggle('is-active');
    })
)

const checkboxInputs = document.querySelectorAll('.checkbox');
checkboxInputs.forEach(checkboxItem => {
    checkboxItem.addEventListener('click', e =>{  
        console.log(1);    
        checkboxItem.classList.toggle('active');
        // document.querySelector('.block__show_none').classList.add('is-active');
        document.querySelector('.block__show').remove();
        checkboxItem.querySelector('input').closest("div").innerHTML += AddShow;
        console.log(checkboxItem.querySelector('input'));
        checkboxItem.querySelector('input').checked = !checkboxItem.querySelector('input').checked;
    })
    
})


let text = document.querySelectorAll('.page__school_link_blue')
text.forEach(elem =>{
    elem.addEventListener('click', e => {
        elem.closest('.checkbox_all').classList.toggle('off');
        console.log(elem.closest('.checkbox_all'));
    console.log(text.textContent);
    if (elem.textContent === 'Показать все'){
        elem.textContent = 'Свернуть';
    }
    else if (elem.textContent === 'Свернуть'){
        elem.textContent = 'Показать все';
}
    })
})
