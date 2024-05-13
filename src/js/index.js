const button = document.querySelectorAll('.btn__slides')
const slider = document.querySelector(".index__slides_container");
const slides = document.querySelectorAll(".slides__item");

let current = 0;
let prev = 3;
let next = 1;

// button.forEach(elem =>{
//     elem.addEventListener('click', () => {
//         for (let i = 0; i < slides.length; i++){
//             if (i == 0){
//                 slides[i].classList.remove('active')
//                 slides[i].classList.add('next')
//             }
//             else if (i == 1){
//                 slides[i].classList.remove('next')
//                 slides[i].classList.add('active')
//             }
//         }
//     })
// })

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 4) {
        next = 0;
    }

    if (prev == -1) {
        prev = 3;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
    setTimeout(function(){
        document.querySelector('.index__header').classList.toggle('active')
    }, 600);
    document.querySelector('.index__header_text').querySelector('p').textContent = document.querySelector('.index__header_text').querySelector('p').textContent === 'Первый маркетплейс онлайн и оффлайн образования' ? 'Удобно выбирать, выгодно покупать, классно учиться!' : 'Первый маркетплейс онлайн и оффлайн образования';
}




document.querySelector('.index__slides_container').addEventListener('touchstart', start, false);
document.querySelector('.index__slides_container').addEventListener('touchmove', move, false);



let x = null;
let y = null;
let num = 0

function start(event){
    const firstTouch = event.touches[0];
    x = firstTouch.clientX;
    y = firstTouch.clientY;
    console.log(x, y);
}

function move (event){
    if (!x || !y){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDif = x2 - x;
    let yDif = y2 - y;
    if (Math.abs(xDif) > Math.abs(yDif))    {
        if (xDif > 0){
           num++  
           if (num>3){
               num=0
           }
        }
        else {
            num--
            if(num<0){
                num=3
            }
        }
        current = num;
        prev = current - 1;
        next = current + 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.remove("prev");
            slides[i].classList.remove("next");
        }

        if (next == 4) {
            next = 0;
        }

        if (prev == -1) {
            prev = 3;
        }

        slides[current].classList.add("active");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
        setTimeout(function(){
            document.querySelector('.index__header').classList.toggle('active')
        }, 600);
        document.querySelector('.index__header_text').querySelector('p').textContent = document.querySelector('.index__header_text').querySelector('p').textContent === 'Первый маркетплейс онлайн и оффлайн образования' ? 'Удобно выбирать, выгодно покупать, классно учиться!' : 'Первый маркетплейс онлайн и оффлайн образования';
    }
    else{
        if (yDif > 0) gotoNext
        else console.log('top');
    }
    x = null
    y = null
}
document.querySelector('.index__video_prev_mobile').addEventListener('touchend', e => {
    document.querySelector('.index__video_popup').classList.add('active')
    document.body.style.overflow = 'hidden'
})
document.querySelector('.expert__close').addEventListener('touchend', e =>{
    document.querySelector('.index__video_popup').classList.remove('active')
    document.body.style.overflow = 'visible'
})

const reviewsBtn = document.querySelectorAll('.read-more-button');
reviewsBtn.forEach(elem => {
    elem.addEventListener('click', e =>{
        elem.closest('div').classList.toggle('active');
        // elem.querySelector('p').textContent = elem.querySelector('p').textContent === 'Развернуть отзыв' ? 'Свернуть отзыв' : 'Развернуть отзыв';
        elem.remove()
    })
})

const videoPlay = document.querySelector('.index__video_prev')
const video = document.querySelector('.video_play')

videoPlay.onclick = function Play () {
    videoPlay.classList.toggle('none')
    video.classList.toggle('active')
}
