document.addEventListener('DOMContentLoaded', function () {
    // Set the countdown date to New Year
    const countdownDate = new Date('January 1, 2024 00:00:00').getTime();

    // Update the countdown every 1 second
    const countdownElement = document.getElementById('countdown');
    setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Check if it's New Year and start the fireworks
        if (distance <= 0) {
            startFireworks();
        }
    }, 1000);

    function startFireworks() {
        const fireworksCanvas = document.getElementById('fireworks');
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;

        const fireworks = new Fireworks(fireworksCanvas);
        fireworks.start();
    }

    class Fireworks {
        constructor(canvas) {
            this.ctx = canvas.getContext('2d');
            this.particles = [];
            this.animationFrameId = null;
        }

        createParticle(x, y) {
            return {
                x,
                y,
                size: Math.random() * 2 + 1,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                velocity: {
                    x: (Math.random() - 0.5) * 2,
                    y: Math.random() * -3,
                },
                life: Math.random() * 50 + 80,
                alive: true,
            };
        }

        updateParticle(particle) {
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;
            particle.life--;

            if (particle.life <= 0) {
                particle.alive = false;
            }
        }

        drawParticle(particle) {
            this.ctx.fillStyle = particle.color;
            this.ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        }

        start() {
            const createParticles = () => {
                const numberOfParticles = 5;
                const { innerWidth, innerHeight } = window;

                for (let i = 0; i < numberOfParticles; i++) {
                    const x = innerWidth / 2;
                    const y = innerHeight;
                    const particle = this.createParticle(x, y);
                    this.particles.push(particle);
                }
            };

            const updateParticles = () => {
                this.particles = this.particles.filter(p => p.alive);
                this.particles.forEach(p => this.updateParticle(p));
            };

            const drawParticles = () => {
                this.particles.forEach(p => this.drawParticle(p));
            };

            const animate = () => {
                this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

                createParticles();
                updateParticles();
                drawParticles();

                this.animationFrameId = requestAnimationFrame(animate);
            };

            animate();
        }
    }
});
