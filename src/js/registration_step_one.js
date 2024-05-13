let link = `<a class="blue__link" href="#">Отправить письмо повторно</a>`
var secs = 30;
var timer = setInterval(tick, 1000)
function tick() {
    if (secs == 0) {
        document.querySelector('.timer__text').innerHTML = link
        return
    }
    else {
        document.querySelector('.timer').innerHTML =  --secs
    }
}