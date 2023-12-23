// Set the birthday countdown date
var countdownDate = new Date("December 6, 2024 15:23:10").getTime();


// Update the countdown every second
var countdown = setInterval(function() {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-container").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-container").innerHTML = "EXPIRED";
  }
}, 1000);

