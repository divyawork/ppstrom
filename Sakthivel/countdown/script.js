// Set the date we're counting down to (New Year's Day 2024)
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Calculate remaining days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = days + " days : " + formatTime(hours) + " Hours : " + formatTime(minutes) + " Minutes : " + formatTime(seconds) + " Seconds";

  // If the countdown is over, show a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Happy New Year 2024!";
  }
}, 1000);

// Helper function to add leading zeros to single-digit numbers
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}



