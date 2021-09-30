const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function showTime(){
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();
    const h = date.getHours();

    const seconds = (6 * s) + 90;
    const minutes = (6 * m) + 90;
    const hours = (30 * h + (m/2)) + 90;

    secondHand.style.transform = `rotate(${seconds}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;
}

setInterval(showTime, 1000);

showTime();