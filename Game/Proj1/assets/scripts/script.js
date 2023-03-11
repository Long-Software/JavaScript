let playerState = 'run';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', (e) => {
    playerState = e.target.value;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './assets/images/shadow_dog.png';
const spriteHeight = 5230 / 10;
const spriteWidth = 6876 / 12;
let gameFrame = 5;
const staggerFrames = 5;
const spriteAnimation = [];
const animationState = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },
    {
        name: 'run',
        frames:9
    },
    {
        name: 'dizzy',
        frames: 11
    },
    {
        name:'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name:'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 12
    },
    {
        name: 'getHit',
        frames: 4
    }
];

animationState.forEach((state, index) => {
    let frames = {
        loc: []
    }
    for (let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({
            x: positionX,
            y: positionY
        });
        spriteAnimation[state.name] = frames;
    }
});

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   // clear old animation
    // ctx.fillRect(50, 50, 100, 100);     // draw rectangle
    // ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimation[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    /**
     * 1 is the image location
     * 2 is the frame location on the x-axis
     * 3 is the frame location on the y-axis
     * 4 is the frame crop out of the width
     * 5 is the frame crop out of the height
     * 6 is the starting coordinate on the x-axis
     * 7 is the starting coordinate on the y-axis
     * 8 is the ending coordinate on the x-axis
     * 9 is the ending coordinate on hte y-axis
     */

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();