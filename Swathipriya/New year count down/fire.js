"use strict";

let canvas, width, height, ctx;
let fireworks = [];
let particles = [];

function setup() {
    canvas = document.getElementById("canvas");
    setSize(canvas);
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    fireworks.push(new Firework(Math.random()*(width-200)+100));
    window.addEventListener("resize", windowResized);
    document.addEventListener("click", onClick);
}

setTimeout(setup, 1);

function loop() {
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    ctx.globalAlpha = 1;

    for(let i=0; i<fireworks.length; i++){
        let done = fireworks[i].update();
        fireworks[i].draw();
        if(done) fireworks.splice(i, 1);
    }

    for(let i=0; i<particles.length; i++){
        particles[i].update();
        particles[i].draw();
        if(particles[i].lifetime > 80) particles.splice(i, 1);
    }

    if(Math.random() < 1/60) fireworks.push(new Firework(Math.random()*(width-200)+100));
}
setInterval(loop, 1/60);

// Rest of the Firework and Particle classes, randomCol, randomVec, setSize, onClick, windowResized functions remain unchanged.