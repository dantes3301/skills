let HeartLineOne = `<svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5625 3.625C21.9802 3.625 24.75 6.64583 24.75 10.875C24.75 19.3333 16.3125 24.1667 13.5 25.9792C10.6875 24.1667 2.25 19.3333 2.25 10.875C2.25 6.64583 5.0625 3.625 8.4375 3.625C10.53 3.625 12.375 4.83333 13.5 6.04167C14.625 4.83333 16.47 3.625 18.5625 3.625ZM14.5507 22.4798C15.5419 21.808 16.4362 21.1398 17.2733 20.4245C20.6269 17.5607 22.5 14.4311 22.5 10.875C22.5 8.02333 20.7709 6.04167 18.5625 6.04167C17.352 6.04167 16.0425 6.73042 15.0907 7.75025L13.5 9.45883L11.9093 7.75025C10.9575 6.73042 9.648 6.04167 8.4375 6.04167C6.255 6.04167 4.5 8.04267 4.5 10.875C4.5 14.4323 6.37425 17.5607 9.72563 20.4245C10.5638 21.1398 11.4581 21.808 12.4493 22.4786C12.7856 22.707 13.1186 22.9257 13.5 23.1698C13.8814 22.9257 14.2144 22.707 14.5507 22.4798Z" fill="#FF0000"/>
</svg>`;
let HeartLineTwo = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.75 7.875C22.75 3.64583 19.9802 0.625 16.5625 0.625C14.47 0.625 12.625 1.83333 11.5 3.04167C10.375 1.83333 8.53 0.625 6.4375 0.625C3.0625 0.625 0.25 3.64583 0.25 7.875C0.25 15.8511 7.75281 20.6037 10.9667 22.6396C11.161 22.7627 11.3396 22.8758 11.5 22.9792C11.6604 22.8758 11.839 22.7627 12.0333 22.6396C15.2472 20.6037 22.75 15.8511 22.75 7.875Z" fill="#FF0000"/>
</svg>
`; 
let HeartLineContainer = document.querySelector('.heart__svg')
function t () {
    if (HeartLineContainer.classList.contains('active')){
        HeartLineContainer.innerHTML = HeartOne
        HeartLineContainer.classList.remove('active')
    }
    else{
        HeartLineContainer.innerHTML = HeartTwo
        HeartLineContainer.classList.add('active')
    }

}
// document.querySelectorAll('.heart__svg').onclick = t
document.querySelectorAll('.heart__svg_line').forEach((item) =>
item.addEventListener('click', () => { 
    const parent = item.parentNode
    if (item.classList.contains('active')){
        item.innerHTML = HeartOne
        item.classList.remove('active')
    }
    else{
        item.innerHTML = HeartTwo
        item.classList.add('active')
    }
})
)