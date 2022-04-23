//Fire ball
player_ball_x = player.x;
player_ball_y = player.y

const fireball = {
    x: player_ball_x,
    y: player_ball_y,
    width: 35,
    height: 20,
    degats: 5
  };

//Fire ball
const fireballspriteHaut = new Image();
fireballspriteHaut.src = "assets/fire_top.png";

const fireballspriteBas = new Image();
fireballspriteBas.src = "assets/fire_bot.png";

const fireballspriteGauche = new Image();
fireballspriteGauche.src = "assets/fire_left.png";

const fireballspriteDroite = new Image();
fireballspriteDroite.src = "assets/fire.png";

let fire_ball_direction = false;

let xball = 0;
let yball = 0;
let position_x_fireball = player_ball_x + xball;
let position_y_fireball = player_ball_y + yball;

function fireballsTOP() {
    ctx.beginPath();
    ctx.drawImage(fireballspriteHaut, player_ball_x + xball, player_ball_y + yball, 20, 35);
    yball = yball - 20;
    position_x_fireball = player_ball_x + xball;
    position_y_fireball = player_ball_y + yball; 
}
function fireballsBOT() {
    ctx.beginPath();
    ctx.drawImage(fireballspriteBas, player_ball_x + xball, player_ball_y + yball, 20, 35);
    yball = yball + 20;
    position_x_fireball = player_ball_x + xball;
    position_y_fireball = player_ball_y + yball;
}
function fireballsLEFT() {
    ctx.beginPath();
    ctx.drawImage(fireballspriteGauche, player_ball_x + xball, player_ball_y + yball, 35, 20);
    xball = xball - 20;
    position_x_fireball = player_ball_x + xball;
    position_y_fireball = player_ball_y + yball;
}
function fireballsRIGHT() {
    ctx.beginPath();
    ctx.drawImage(fireballspriteDroite, player_ball_x + xball, player_ball_y + yball, 35, 20);
    xball = xball + 20;
    position_x_fireball = player_ball_x + xball;
    position_y_fireball = player_ball_y + yball;  
}
function fireballsfalse() {
    setTimeout(function() {
        fire_ball_direction = false;
        console.log("il est possible de lancé une boule de feu")
    },1560)
}

function getDistanceMonster() {
    let xDistance = monster.x - player.x;
    let yDistance = monster.y - player.y;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
function getDistancefireball(X,Y) {
    let xDistancefire = position_x_fireball - X;
    let yDistancefire = position_y_fireball - Y;

    return Math.sqrt(Math.pow(xDistancefire, 2) + Math.pow(yDistancefire, 2));
}
