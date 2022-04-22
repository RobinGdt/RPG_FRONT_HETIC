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


// function CheckCollisions() {
//     for(key in Collisions) {
//         if (Player_onMap == key) {
//             map = Collisions[key];
//         };
//     };
//     var i = 0
//     while (i < map.length){
//         // canvas qui change de position
//         if (player.x >= map[i][0] && player.x <= map[i+1][0] && player.y == map[i][1] && player.y == map[i+1][1] || player.x >= map[i][0] && player.x <= map[i+1][0] && player.y == map[i][1] - 2 && player.y == map[i+1][1] - 2) {
//             MoveTop = false;
//         }
//         else if (player.x == map[i][0] && player.x == map[i+3][0] && player.y <= map[i][1] && player.y >= map[i+3][1] || player.x == map[i][0] - 2 && player.x == map[i+3][0] - 2 && player.y <= map[i][1] && player.y >= map[i+3][1]) { // bug canvas qui bouge, j'ai rajouté une condition "ou"
//             MoveRight = false;
//         }
//         else if (player.x == map[i+1][0] && player.x == map[i+2][0] && player.y <= map[i+1][1] && player.y >= map[i+2][1] || player.x == map[i+1][0] - 2 && player.x == map[i+2][0] - 2 && player.y <= map[i+1][1] && player.y >= map[i+2][1]) { // bug canvas qui bouge, j'ai rajouté une condition "ou"
//             MoveLeft = false;
//         }
//         else if (player.x <= map[i+2][0] && player.x >= map[i+3][0] && player.y == map[i+2][1] && player.y == map[i+3][1] || player.x <= map[i+2][0] && player.x >= map[i+3][0] && player.y == map[i+2][1] - 2 && player.y == map[i+3][1] - 2) {
//             MoveBottom = false;
//         }
//         i = i + 4; // incrémentation par 4 car un objet = 4 points
//     }

//     return;
// }



// function vie(){
//     ctx.lineWidth = 2;
//     ctx.strokeRect(20, 10, 150, 15);
//     ctx.fillRect(22.5, 12.5, player.hp, 10);
//     ctx.fillStyle = "rgb(135,206,235)";

//     if (player.hp <= 0) {                       //  <--------- Mort du personnage !
//         death();
//     }
// }


// function vieMonster(){
//     ctx.lineWidth = 2;
//     ctx.fillRect(monster.x - 10, monster.y - 10, monster.hp, 5);
//     ctx.fillStyle = "rgb(135,206,235)";

//     if (monster.hp <= 0) {  
//         player.xp = player.xp + 20;                     //  <--------- Mort du monstre !
//         deathmonster();
//     }
// }


// function mana(){
//     ctx.lineWidth = 2;
//     ctx.strokeRect(20, 30, 105, 15);
//     ctx.fillRect(22.5, 32.5, player.mana, 10);
//     ctx.fillStyle = "rgb(255,215,0)";
// }

//  //audio pour la mort du perso
//  var audio = new Audio('Assets/Sounds/death_sound.wav');
