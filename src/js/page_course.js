let Options = document.querySelector('.page__course_menu_options')

document.querySelectorAll('.btn_page__school').forEach((item) =>
item.addEventListener('click', () => { 
    document.querySelectorAll('.btn_page__school')[0].classList.remove('active')
    document.querySelectorAll('.btn_page__school')[1].classList.remove('active')
    document.querySelectorAll('.btn_page__school')[2].classList.remove('active')
    document.querySelectorAll('.btn_page__school')[3].classList.remove('active')
    document.querySelectorAll('.btn_page__school')[4].classList.remove('active')
    document.querySelector('.tab.one').classList.remove('is-active')
    document.querySelector('.tab.two').classList.remove('is-active')
    document.querySelector('.tab.three').classList.remove('is-active')
    document.querySelector('.tab.four').classList.remove('is-active')
    document.querySelector('.tab.five').classList.remove('is-active')
    if (item.value == 0){
        document.querySelector('.tab.one').classList.add('is-active')
    }
    else if (item.value == 1){
        document.querySelector('.tab.two').classList.add('is-active')
    }
    else if(item.value == 2){
        document.querySelector('.tab.three').classList.add('is-active')
    }
    else if(item.value == 3){
        document.querySelector('.tab.four').classList.add('is-active')
    }
    else if(item.value == 4){
        document.querySelector('.tab.five').classList.add('is-active')
    }
    item.classList.add('active')
})
)

function OpenCertificate () {
    document.querySelector('.page__course_certificate_two').classList.add('is-active')
    document.querySelector('.page__course_menu_options').classList.add('is-active')
    document.body.style.overflow = "hidden"
    
    
}
function CloseCertificate (){
    document.querySelector('.page__course_certificate_two').classList.remove('is-active')
    document.querySelector('.page__course_menu_options').classList.remove('is-active')
    document.body.style.overflow = "auto"
}
document.querySelector('.popup__backgruond').onclick = CloseCertificate
document.querySelector('.close__popup').onclick = CloseCertificate
document.querySelector('.page__course_certificate_container').onclick = OpenCertificate

const reviewsBtn = document.querySelectorAll('.read-more-button');
reviewsBtn.forEach(elem => {
    elem.addEventListener('click', e =>{
        elem.closest('div').classList.toggle('active');
        // elem.querySelector('p').textContent = elem.querySelector('p').textContent === 'Развернуть отзыв' ? 'Свернуть отзыв' : 'Развернуть отзыв';
        elem.remove()
    })
})