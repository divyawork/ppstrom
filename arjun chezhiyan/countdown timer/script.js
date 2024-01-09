document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const fireworksElement = document.getElementById('fireworks');
    const wishElement = document.getElementById('wish');
  
    function updateCountdown() {
      const pongalDate = new Date('2024-01-15T00:00:00');
      const currentDate = new Date();
      const timeDifference = pongalDate - currentDate;
  
      if (timeDifference <= 0) {
        countdownElement.style.display = 'none';
        wishElement.classList.remove('hidden');
        createFireworks(50); // Increase the number of fireworks
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        document.getElementById('days').textContent = days + 'd';
        document.getElementById('hours').textContent = hours + 'h';
        document.getElementById('minutes').textContent = minutes + 'm';
        document.getElementById('seconds').textContent = seconds + 's';
      }
    }
  
    function createFireworks(count) {
      for (let i = 0; i < count; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.animationDuration = Math.random() * 1 + 0.5 + 's';
        fireworksElement.appendChild(firework);
      }
    }
  
    // Initial fireworks display when the page loads
    createFireworks(20); // Set the initial number of fireworks
  
    // Set interval to create fireworks every 5 seconds
    setInterval(function () {
      createFireworks(20); // Set the number of fireworks for each interval
    }, 5000);
  
    // Update countdown every second
    setInterval(updateCountdown, 1000);
  });
  