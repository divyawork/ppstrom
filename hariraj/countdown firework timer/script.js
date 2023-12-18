// set the birthday date
let birthdayDate = new Date(2023, 11, 27); // year, month (0-11), day

// get the timer elements
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// update the timer every second
let timer = setInterval(updateTimer, 1000);

// update the timer function
function updateTimer() {
  // get the current date and time
  let currentDate = new Date();

  // calculate the time difference in milliseconds
  let timeDiff = birthdayDate - currentDate;

  // check if the timer is over
  if (timeDiff <= 0) {
    // clear the timer
    clearInterval(timer);

    // hide the container div
    document.getElementById("container").style.display = "none";

    // show the animation div
    document.getElementById("animation").style.display = "block";

    // start the firework animation
    startFirework();

    // return from the function
    return;
  }

  // calculate the time units
  let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // update the timer elements
  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft;
  minutes.innerHTML = minutesLeft;
  seconds.innerHTML = secondsLeft;
}

// start the firework animation function
function startFirework() {
  // helper functions
  const PI2 = Math.PI * 2;
  const random = (min, max) => (Math.random() * (max - min + 1) + min) | 0;
  const timestamp = (_) => new Date().getTime();

  // container
  class Birthday {
    constructor() {
      this.resize();

      // create a lovely place to store the firework
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
      for (let i = 0; i < count; i++)
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

      this.counter = -1;
    }

    update(delta) {
      ctx.globalCompositeOperation = "hard-light";
      ctx.fillStyle = `rgba(20,20,20,${7 * delta})`;
      ctx.fillRect(0, 0, this.width, this.height);

      ctx.globalCompositeOperation = "lighter";
      for (let firework of this.fireworks) firework.update(delta);

      // if enough time passed... create new new firework
      this.counter += delta * 3; // each second
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

      // remove the dead fireworks
      if (this.fireworks.length > 1000)
        this.fireworks = this.fireworks.filter((firework) => !firework.dead);
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
        // is still moving
        this.x += xDiff * 2 * delta;
        this.y += yDiff * 2 * delta;

        this.history.push({
          x: this.x,
          y: this.y,
        });

        if (this.history.length > 20) this.history.shift();
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

      if (this.history.length === 0) this.dead = true;
      else if (this.offsprings) {
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i];
          ctx.beginPath();
          ctx.fillStyle = "hsl(" + this.shade + ",100%," + i + "%)";
          ctx.arc(point.x, point.y, 1, 0, PI2, false);
          ctx.fill();
        }
      } else {
        ctx.beginPath();
        ctx.fillStyle = "hsl(" + this.shade + ",100%,50%)";
        ctx.arc(this.x, this.y, 1, 0, PI2, false);
        ctx.fill();
      }
    }
  }

  // start
  let canvas = document.getElementById("birthday");
  let ctx = canvas.getContext("2d");

  let then = timestamp();

  let birthday = new Birthday();
  window.onresize = () => birthday.resize();
  document.onclick = (evt) => birthday.onClick(evt);
  document.ontouchstart = (evt) => birthday.onClick(evt);

  let loop = () => {
    requestAnimationFrame(loop);

    let now = timestamp();
    let delta = now - then;

    then = now;
    birthday.update(delta / 1000);
  };

  loop();
}
