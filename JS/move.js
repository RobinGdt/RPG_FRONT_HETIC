const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 410,
    y: 250,
    width: 48,
    height: 64,
    frameX: 0,
    frameY: 1,
    speed: 6,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "dark_soldier-dragonrider.png";

const background = new Image();
background.src = "Map001.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

let position = 0;

setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, position, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width,
    player.height);
    movePlayer();
    handlePlayerFrame();
},80)

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    player.moving = true;

});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    player.moving = false;

});

function movePlayer(){
    if(keys[90] && player.y > 100){
        player.y -= player.speed;
        player.frameY =0;
    }
    if (keys[81] && player.x > 0){
        player.x -= player.speed ;
        player.frameY = 3; 
    }
    if (keys[83] && player.y < canvas.height - player.height){
        player.y += player.speed;
        player.frameY = 2; 
    }
    if (keys[68] && player.x < canvas.width - player.width){
        player.x += player.speed;
        player.frameY = 1; 
    }
}
function handlePlayerFrame(){
    if (player.frameX < 2 && player.moving) player.frameX++
    else player.frameX = 0;
}
/*function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, position, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width,
    player.height);
    movePlayer();
    handlePlayerFrame();
    requestAnimationFrame(animate);
}
animate();

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed < fpsInterval){
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, position, 0, canvas.width, canvas.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width,
        player.height);
        movePlayer();
        handlePlayerFrame();
    }
}
startAnimating(30)*/