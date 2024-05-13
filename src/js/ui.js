const reviewsBtn = document.querySelectorAll('.read-more-button');
reviewsBtn.forEach(elem => {
    elem.addEventListener('click', e =>{
        elem.closest('div').classList.toggle('active');
        elem.querySelector('p').textContent = elem.querySelector('p').textContent === 'Развернуть отзыв' ? 'Свернуть отзыв' : 'Развернуть отзыв';
    })
})
