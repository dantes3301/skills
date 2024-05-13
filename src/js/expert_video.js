const expertCard = document.querySelectorAll('.expert_recovery_card')
const expertClose = document.querySelectorAll('.expert__close')

// document.querySelectorAll('.card__btn').forEach((item) =>
// item.addEventListener('click', () => { 
//     document.body.style.overflow = 'hidden';
//     if (item.value == 0){
//         document.querySelector('.expert__popup_container.one').classList.add('active')
//     }
//     else if(item.value == 1){
//         document.querySelector('.expert__popup_container.two').classList.add('active')
//     }
//     else if(item.value == 2){
//         document.querySelector('.expert__popup_container.three').classList.add('active')
//     }
//     else if(item.value == 3){
//         document.querySelector('.expert__popup_container.four').classList.add('active')
//     }
// })
// )

expertCard.forEach((item) => {
    item.addEventListener('click', ()=>{
        document.body.style.overflow = 'hidden';
        if (item.classList.contains('one')){
            document.querySelector('.expert__popup_container.one').classList.add('active')
        }
        else if (item.classList.contains('two')){
            document.querySelector('.expert__popup_container.two').classList.add('active')
        }
        else if (item.classList.contains("three")){
            document.querySelector('.expert__popup_container.three').classList.add('active')
        }
        else if (item.classList.contain( "four")){
            document.querySelector('.expert__popup_container.four').classList.add('active')
        }
    })
})

expertClose.forEach(item =>{
    item.addEventListener('click', () =>{
        document.body.style.overflow = 'visible';
        document.querySelector('.expert__popup_container.one').classList.remove('active')
        document.querySelector('.expert__popup_container.two').classList.remove('active')
        document.querySelector('.expert__popup_container.three').classList.remove('active')
        document.querySelector('.expert__popup_container.four').classList.remove('active')
    })
})

