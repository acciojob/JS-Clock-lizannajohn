//your code here
const secondsHand = document.querySelector(".second-hand")
const minsHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate()
{
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees + 90}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90
    minsHand.style.transform = `rotate(${minsDegrees + 90}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees + 90}deg)`;
}

setInterval(setDate, 1000)

setDate();