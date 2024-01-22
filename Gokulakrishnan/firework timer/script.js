// Countdown Timer
const countdown = () => {
  const countdownDate = new Date("2024-01-01T00:00:00").getTime();
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");
  const optionalText = document.querySelector(".optional-text");
  const newYearText = document.querySelector(".new-year-text");
  const fireworksCanvas = document.getElementById("fireworks");

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysText.innerHTML = days;
    hoursText.innerHTML = hours;
    minutesText.innerHTML = minutes;
    secondsText.innerHTML = seconds;
    optionalText.innerHTML = "Goodbye 2023!";

    if (distance < 0) {
      clearInterval(interval);
      newYearText.style.opacity = "1"; // modified this line
      fireworksCanvas.style.display = "block";
      startFireworks();
    }
  }, 1000);
};

// Fireworks Animation
const startFireworks = () => {
  const PI2 = Math.PI * 2;
  const random = (min, max) => (Math.random() * (max - min + 1) + min) | 0;
  const timestamp = (_) => new Date().getTime();

  class Birthday {
    constructor() {
      this.resize();
      this.fireworks = [];
      this.counter = 0;
    }

    resize() {
      this.width = canvas.width = window.innerWidth;
      let center = (this.width / 2) | 0;
      this.spawnA = (center - center / 4) | 0;
      this.spawnB = (center + center / 4) | 0;

      this.height = canvas.height = window.innerHeight;
      this.spawnC = this.height * 0.1;
      this.spawnD = this.height * 0.5;
    }

    onClick(evt) {
      let x = evt.clientX || (evt.touches && evt.touches[0].pageX);
      let y = evt.clientY || (evt.touches && evt.touches[0].pageY);

      let count = random(3, 5);
      for (let i = 0; i < count; i++) {
        this.fireworks.push(
          new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            x,
            y,
            random(0, 260),
            random(30, 110)
          )
        );
      }
      this.counter = -1;
    }

    update(delta) {
      ctx.globalCompositeOperation = "hard-light";
      ctx.fillStyle = `rgba(20,20,20,${7 * delta})`;
      ctx.fillRect(0, 0, this.width, this.height);

      ctx.globalCompositeOperation = "lighter";
      for (let firework of this.fireworks) {
        firework.update(delta);
      }

      this.counter += delta * 3;
      if (this.counter >= 1) {
        this.fireworks.push(
          new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            random(0, this.width),
            random(this.spawnC, this.spawnD),
            random(0, 360),
            random(30, 110)
          )
        );
        this.counter = 0;
      }

      if (this.fireworks.length > 1000) {
        this.fireworks = this.fireworks.filter((firework) => !firework.dead);
      }
    }
  }

  class Firework {
    constructor(x, y, targetX, targetY, shade, offsprings) {
      this.dead = false;
      this.offsprings = offsprings;

      this.x = x;
      this.y = y;
      this.targetX = targetX;
      this.targetY = targetY;

      this.shade = shade;
      this.history = [];
    }

    update(delta) {
      if (this.dead) return;

      let xDiff = this.targetX - this.x;
      let yDiff = this.targetY - this.y;
      if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) {
        this.x += xDiff * 2 * delta;
        this.y += yDiff * 2 * delta;
        this.history.push({
          x: this.x,
          y: this.y,
        });

        if (this.history.length > 20) {
          this.history.shift();
        }
      } else {
        if (this.offsprings && !this.madeChilds) {
          let babies = this.offsprings / 2;
          for (let i = 0; i < babies; i++) {
            let targetX =
              (this.x + this.offsprings * Math.cos((PI2 * i) / babies)) | 0;
            let targetY =
              (this.y + this.offsprings * Math.sin((PI2 * i) / babies)) | 0;

            birthday.fireworks.push(
              new Firework(this.x, this.y, targetX, targetY, this.shade, 0)
            );
          }
        }
        this.madeChilds = true;
        this.history.shift();
      }

      if (this.history.length === 0) {
        this.dead = true;
      } else if (this.offsprings) {
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i];
          ctx.beginPath();
          ctx.fillStyle = `hsl(${this.shade},100%,${i}%)`;
          ctx.arc(point.x, point.y, 1, 0, PI2, false);
          ctx.fill();
        }
      } else {
        ctx.beginPath();
        ctx.fillStyle = `hsl(${this.shade},100%,50%)`;
        ctx.arc(this.x, this.y, 1, 0, PI2, false);
        ctx.fill();
      }
    }
  }

  let canvas = document.getElementById("fireworks");
  let ctx = canvas.getContext("2d");

  let then = timestamp();

  let birthday = new Birthday();
  window.onresize = () => birthday.resize();
  document.onclick = (evt) => birthday.onClick(evt);
  document.ontouchstart = (evt) => birthday.onClick(evt);

  (function loop() {
    requestAnimationFrame(loop);

    let now = timestamp();
    let delta = now - then;

    then = now;
    birthday.update(delta / 1000);
  })();
};

// Initialize countdown on page load
window.onload = function () {
  countdown();
};
const changeColor = () => {
  // Get a random color
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // Get a random number from 0 to 3
  let randomNumber = Math.floor(Math.random() * 4);
  // Get the root element
  let root = document.documentElement;
  // Set the variable value according to the random number
  switch (randomNumber) {
    case 0:
      root.style.setProperty("--num0-color", randomColor);
      break;
    case 1:
      root.style.setProperty("--num1-color", randomColor);
      break;
    case 2:
      root.style.setProperty("--num2-color", randomColor);
      break;
    case 3:
      root.style.setProperty("--num3-color", randomColor);
      break;
  }
};

const changeHue = () => {
  // Get the year-color element
  let yearColor = document.querySelector(".year-color");
  // Generate a random number from 0 to 1
  let random = Math.random();
  // Set the data-random attribute to the random number
  yearColor.setAttribute("data-random", random);
};

// Change the color every second
setInterval(changeColor, 200);
// Change the hue every second
setInterval(changeHue, 200);
