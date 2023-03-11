/** @type {HTMLCanvasElement} */
// Tell the IDE to suggest canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
    constructor(src, spriteWidth, spriteHeight, frame) {
        this.x = Math.random() * CANVAS_WIDTH;
        this.y = Math.random() * CANVAS_HEIGHT;
        this.speed = Math.random() * 2;
        this.image = new Image();
        this.image.src = src;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.frame = 0;
        this.maxFrame = frame;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 2;
        this.curve = Math.random() * 200;
    }

    update() {
        /*this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;*/
        /*this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        if (this.x + this.width < 0) this.x = CANVAS_WIDTH;*/
        this.x = canvas.width/2 * Math.sin(this.angle * Math.PI / 90) + canvas.width / 2 - this.width/2;
        this.y = canvas.height/2* Math.cos(this.angle * Math.PI / 272) + canvas.height / 2 - this.height/2;
        this.angle += this.angleSpeed;
        if (gameFrame % this.flapSpeed === 0)
            this.frame === this.maxFrame - 1 ? this.frame = 0 : this.frame++;
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}


for (let i = 0; i < numberOfEnemies; i++) {
    /**
     * 1, 293, 155, 6
     * 2, 266, 188, 6
     * 3, 218, 177,
     */
    enemiesArray.push(new Enemy('./assets/images/enemy3.png', 218, 177, 6));
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(obj => {
        obj.update();
        obj.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();