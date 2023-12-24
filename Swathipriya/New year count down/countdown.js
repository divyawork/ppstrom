"use strict";

function updateTimer() {
    const targetDate = new Date("January 1, 2024 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("timer").innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateTimer, 1000);
updateTimer();