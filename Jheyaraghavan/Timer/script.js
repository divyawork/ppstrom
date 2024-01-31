document.addEventListener("DOMContentLoaded", function() {
  const countdownElement = document.getElementById('countdown');
  const nextYear = new Date().getFullYear() + 1;
  const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`).getTime();

  function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeDifference = newYearDate - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeDifference < 0) {
      countdownElement.innerHTML = "Happy New Year!";
      explodeFireworks();
    }
  }

  updateCountdown(); // Initial call to display countdown immediately

  // Update countdown every second
  setInterval(updateCountdown, 1000);
});

function explodeFireworks() {
  const fireworksContainer = document.querySelector('.fireworks');
  fireworksContainer.style.display = 'block';
}
