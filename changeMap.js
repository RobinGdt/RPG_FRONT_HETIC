const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

const keys = [];

const player = {
    x: 410,
    y: 250,
    width: 48,
    height: 64,
    frameX: 0,
    frameY: 2,
    speed: 15,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "assets/dark_soldier-warrior.png";

const background = new Image();
background.src = "assets/Map001.png";

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
    console.log("position X du joueur : " + player.x);
    console.log("position Y du joueur : " + player.y);
    console.log(background.src);

    if(keys[90] && player.y > 0){
        player.y -= player.speed;
        player.frameY = 0;
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

    if (player.x >= 749 || player.x <= -6 ||player.y <= -6 || player.y >= 337){
        ChangeMap(index_Y, index_X);
    }


}
function handlePlayerFrame(){
    if (player.frameX < 2 && player.moving) player.frameX++
    else player.frameX = 0;
}

let List_Map = [
    ["_","_","_","_"],
    ["_","Map009.png","Map010.png","_","_"],
    ["_","Map008.png","Map011.png","Map012.png","Map014.png","_"],
    ["_","Map003.png","Map001.png","Map002.png","Map013.png","_"],
    ["_","Map007.png","Map005.png","_","_"],
    ["_","_","_"]
];

let index_Y = 3;
let index_X = 2;
let Player_onMap = List_Map[index_Y][index_X];

function ChangeMap(Y, X) {

    console.log("fonction changement de map...");

    if (player.y >= 337 && List_Map[Y+1][X] != "_") {
        Y++
        index_Y = Y
        player.y = -6 // à changer avec la vraie position
        console.log("changement de map en bas...");
    }
    else if (player.y <= -6 && List_Map[Y-1][X] != "_") {
        Y--;
        index_Y = Y;
        player.y = 337;
        console.log("changement de map en haut...");
    }
    else if (player.x <= -6 && List_Map[Y][X-1] != "_") {
        X--;
        index_X = X;
        player.x = 749
        console.log("changement de map à gauche...");
    }
    else if (player.x >= 749 && List_Map[Y][X+1] != "_") {
        X++;
        index_X = X;
        player.x = -6;
        console.log("changement de map à droite...");
    }
    Map_directory = "assets/" + List_Map[Y][X];
    background.src = Map_directory;

    Player_onMap = List_Map[Y][X];

    return
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
