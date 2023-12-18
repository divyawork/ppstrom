const countdownDate = new Date('December 31, 2023 23:59:59').getTime();

    const timer = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('timer').innerHTML = `
        <div>${days}d</div>
        <div>${hours}h</div>
        <div>${minutes}m</div>
        <div>${seconds}s</div>
      `;

      if (distance < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = 'EXPIRED';
      }
    }, 1000);