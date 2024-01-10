var targetDate = new Date ('Jan1, 2024 00:00:00').getTime();

function newYear() {
    var current = new Date().getTime();
    difference = targetDate - current;

    var second = 1000
    var minute = second * 60
    var hour = minute * 60
    var day = hour * 24

    var d = Math.floor(difference / (day))
    var h = Math.floor((difference % day) / (hour))
    var m = Math.floor((difference % hour) / (minute))
    var s = Math.floor((difference % minute) / (second))

    document.getElementById('day').innerText = d
    document.getElementById('hour').innerText = h
    document.getElementById('minute').innerText = m
    document.getElementById('second').innerText = s
}

setInterval(function() {
    newYear()
}, 1000);

// const fireWork = new firework(fireworkContainer, {
//     speed: 4,
//     acceleration: 1.05,
//     friction: 1,
//     gravity: 4,
//     particles: 400,
//     explosion:10
// })

// fireWork.start()