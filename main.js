const canvas = document.querySelector('#canvas1');
let command = document.querySelector('.command');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

const keys = [];

const player = {
    x: 410,
    y: 250,
    width: 32,
    height: 32,
    frameX: 0,
    frameY: 1,
    speed: 15,
    moving: false,
    vie: 145,
    mana: 95
};

const monster = {
    x: 202,
    y: 106,
    width: 48,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 2,
    moving: false
};
const fireBawls = {
    x: player.x,
    y: player.y,
    width: 52,
    height: 100,
    frameX: 0,
    frameY: 0,
    speed: 2,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "assets/hero.png";

const background = new Image();
background.src = "assets/Map001.png";



// VIE ET MANA

function vie(){
        ctx.lineWidth = 2;
        ctx.strokeRect(20, 10, 150, 15);
        ctx.fillRect(22.5, 12.5, 145, 10);
        ctx.fillStyle = "rgb(238,10,10)";

    //coup = Math.floor(Math.random() * 100) + 1;

    if (player.vie > 0){
        ctx.strokeRect(20, 10, 150, 15);
        ctx.fillRect(22.5, 12.5, player.vie, 10);
        ctx.fillStyle = "rgb(238,10,10,0)";
    }
    if (player.vie <= 0){
        death();    
    }

}
function vieMonster(){
    ctx.lineWidth = 2;
    ctx.fillRect(monster.x - 10, monster.y - 10, monster.hp, 5);
    ctx.fillStyle = "rgb(135,206,235)";

    if (monster.hp <= 0) {                       //  <--------- Mort du monstre !
        deathmonster();
    }
}

function mana(){
        ctx.lineWidth = 2;
        ctx.strokeRect(20, 30, 100, 15);
        ctx.fillRect(22.5, 32.5, 95, 10);
        ctx.fillStyle = "rgb(135,206,235)";

    if (player.mana > 0){
        ctx.strokeRect(20, 30, 100, 15);
        ctx.fillRect(22.5, 32.5, player.mana, 10);
        ctx.fillStyle = "rgb(135,206,235,0)";
    }
}


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH) 

   vie();
   mana();
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

// FONCTION QUÊTES

let quetes = document.querySelector('.quetes');
let info = document.querySelector('.info');

quetes = [];

// FONCTION TEXTE INTERACTION

let text = document.querySelector('.text');

text.addEventListener('keypress',texte);



function texte(){

    if(keys[69]){
        text.style.backgroundColor = 'rgba(0, 0, 0, 0.616)';
        setTimeout(function(){ text.innerHTML ='<a> QUETE : Trouvez toutes les croix présentes sur les map pour accéder à un nouveau sort </br> Y / N</a>' }, 300);
    }if(keys[89]){
        setTimeout(function(){ text.innerHTML = ' <h2>Vous avez accepté la quête</h2>' }, 500);
        quetes.push('QUETE : Trouvez toutes les croix présentes sur les map pour accéder à un nouveau sort');
        info.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
        info.style.color = "white";
        info.innerHTML = '<a> QUETE : Trouvez toutes les croix présentes sur les map pour accéder à un nouveau sort.</a>';
        setTimeout(function(){ text.innerHTML = '<img src="assets/shibacoin.png" id="shibacoin"><h3>Bonne chance trou d\'bite</h3></br>' }, 2500);

 
    }if(keys[78]){
        text.innerHTML = '';  
        text.style.backgroundColor = '';
    }
        
}

function texteCatGolri(){
    
    text.style.backgroundColor = 'rgba(0, 0, 0, 0.616)';
    setTimeout(function(){ text.innerHTML = ' <img src="assets/cat_golri.png" id="shibacoin"><h1>WOUF</h1>' }, 500);
    setTimeout(function(){ text.innerHTML = ' <img src="assets/cat_golri.png" id="shibacoin"><h1>WAF WAF</h1>' }, 1500);
    setTimeout(function(){ text.innerHTML = ' <img src="assets/cat_golri.png" id="shibacoin"><h3>mdr enfait jo souis un chat</h3>' }, 2500);

    
    console.log(text)
}

function textePalma(){
    
    text.style.backgroundColor = 'rgba(0, 0, 0, 0.616)';
    setTimeout(function(){ text.innerHTML = ' <img src="assets/dede.png" id="dede"><h1>beh</h1>' }, 500);
    setTimeout(function(){ text.innerHTML = ' <img src="assets/dede.png" id="dede"><h1>...</h1>' }, 1500);
    setTimeout(function(){ text.innerHTML = ' <img src="assets/dede.png" id="dede"><h1>Jmen branle ?</h1>' }, 2500);


console.log(text)
}

// FONCTIONS D'INTERACTIONS

function interactionMap1() {

    if (Player_onMap == "Map001.png"){
        let chatGolri = new Image();
        chatGolri.src = "assets/cat_golri_pixel.png";
        function catGolri(){
            ctx.drawImage(chatGolri,510,270,20,27);
            
        }
        catGolri();

        if (player.x < 650 && player.x > 620 && player.y > 70 && player.y < 100 ){
            player.speed = 10;
            ctx.font = '12px PF Tempesta Seven';
            ctx.fillText('[e] pour interagir', 350, 50);
            texte()
        }else if (player.x < 530 && player.x > 485 && player.y > 250 && player.y < 280 ){
                ctx.font = '12px PF Tempesta Seven';
                ctx.fillText('[e] pour interagir avec le catinouninou', 350, 50);
                if (keys[69]){
                    texteCatGolri()
                }
        }
        else{
            player.speed = 15;
            text.innerHTML = '';
            text.style.backgroundColor = '';

        }
    }   
}
function monsterLich(){
    const monstersprite = new Image();
        monstersprite.src = "assets/dead_lich.png";
        setInterval(function(){
            drawSprite(monstersprite, monster.width * monster.frameX, monster.height * monster.frameY, monster.width, monster.height, monster.x, monster.y, monster.width,
                monster.height);
        
        },100)
}
function interactionMap2() {
    if (Player_onMap == "Map002.png"){
        let palmashow = new Image();
        palmashow.src = "assets/palmashow.png"
        function dede(){
            ctx.drawImage(palmashow,510,270,20,27);
        }
        dede();
        monsterLich();
        moveMonster();
        vieMonster();

        if (player.x < 530 && player.x > 485 && player.y > 250 && player.y < 280){
            player.speed = 10;
            ctx.font = '12px PF Tempesta Seven';
                ctx.fillText('[e] pour interagir avec le beauf de ces dames', 350, 50);
                if (keys[69]){
                    textePalma()
                }
        }else{
            player.speed = 15;
            text.innerHTML = '';
            text.style.backgroundColor = '';
        }        
                
    }
}

// FONCTION DE CHANGEMENT DE COULEUR DES BOUTONS
function pressButton(){

    let bas = document.querySelector('#s');
    let haut = document.querySelector('#z');
    let gauche = document.querySelector('#q');
    let droite = document.querySelector('#d');
    let attaque = document.querySelector('#spacebar');
    let inventaire = document.querySelector('#i');

    window.addEventListener('keydown',pressButtonDown);
    window.addEventListener('keyup',pressButtonUp);



    function pressButtonDown() {
        if (keys[90]){
            haut.style.width = 25 + 'px';
            haut.style.height = 25 + 'px';
        }
        if (keys[81]){
            gauche.style.width = 25 + 'px';
            gauche.style.height = 25 + 'px';
        }
        if (keys[83]){
            bas.style.width = 25 + 'px';
            bas.style.height = 25 + 'px';
        }
        if (keys[68]){
            droite.style.width = 25 + 'px';
            droite.style.height = 25 + 'px';
        }
        if (keys[32]){
            attaque.style.width = 75 + 'px';
            attaque.style.height = 15 + 'px';
        }
        if (keys[73]){
            i.style.width = 25 + 'px';
            i.style.height = 25 + 'px';
        }
    };
    
    function pressButtonUp() {
        haut.style.width = 30 + 'px';
        haut.style.height = 30 + 'px';
        bas.style.width = 30 + 'px';
        bas.style.height = 30 + 'px';
        droite.style.width = 30 + 'px';
        droite.style.height = 30 + 'px';
        gauche.style.width = 30 + 'px';
        gauche.style.height = 30 + 'px';
        inventaire.style.width = 30 + 'px';
        inventaire.style.height = 30 + 'px';
        attaque.style.width = 85 + 'px';
        attaque.style.height = 25 + 'px';
    };
    
    
};

// FONCTION CHECK COLLISIONS

function CheckCollisions() {
    for(key in Collisions) {
        if (Player_onMap == key) {
            map = Collisions[key];
        };
    };
    var i = 0
    while (i < map.length){
        // canvas qui change de position
        if (player.x >= map[i][0] && player.x <= map[i+1][0] && player.y == map[i][1] && player.y == map[i+1][1] || player.x >= map[i][0] && player.x <= map[i+1][0] && player.y == map[i][1] - 2 && player.y == map[i+1][1] - 2) {
            MoveTop = false;
        }
        else if (player.x == map[i][0] && player.x == map[i+3][0] && player.y <= map[i][1] && player.y >= map[i+3][1] || player.x == map[i][0] - 2 && player.x == map[i+3][0] - 2 && player.y <= map[i][1] && player.y >= map[i+3][1]) { // bug canvas qui bouge, j'ai rajouté une condition "ou"
            MoveRight = false;
        }
        else if (player.x == map[i+1][0] && player.x == map[i+2][0] && player.y <= map[i+1][1] && player.y >= map[i+2][1] || player.x == map[i+1][0] - 2 && player.x == map[i+2][0] - 2 && player.y <= map[i+1][1] && player.y >= map[i+2][1]) { // bug canvas qui bouge, j'ai rajouté une condition "ou"
            MoveLeft = false;
        }
        else if (player.x <= map[i+2][0] && player.x >= map[i+3][0] && player.y == map[i+2][1] && player.y == map[i+3][1] || player.x <= map[i+2][0] && player.x >= map[i+3][0] && player.y == map[i+2][1] - 2 && player.y == map[i+3][1] - 2) {
            MoveBottom = false;
        }
        i = i + 4; // incrémentation par 4 car un objet = 4 points
    }

    return;
}



// FONCTION DE DEPLACEMENT DU JOUEUR
function movePlayer(){

    MoveTop = true;
    MoveBottom = true;
    MoveLeft = true;
    MoveRight = true; 
    fire_position = false; 


    if (getDistance() < monster.width) {
        player.vie -= 10;
        console.log(player.vie)
    }

    CheckCollisions()

    let fire = new Image();
        fire.src = "assets/cercle_feu.png";
        function fireBawl(x, y){
            ctx.drawImage(fire,x,y,70,37);
            fire_position = true;
            fireBawls.y += fireBawls.speed;
            
        }

    if(keys[90] && player.y > 0){
        player.y -= player.speed;
        player.frameY = 0;
        player.moving = true;
        
    }
    if (keys[81] && player.x > 0){
        player.x -= player.speed ;
        player.frameY = 3; 
        player.moving = true;
        
    }
    if (keys[83] && player.y < canvas.height - player.height){
        player.y += player.speed;
        player.frameY = 1; 
        player.moving = true;
        
    }
    if (keys[68] && player.x < canvas.width - player.width){
        player.x += player.speed;
        player.frameY = 2; 
        player.moving = true;
        
    }
    if (key[32]){
        player.mana -=1;
    }
    if (keys[32] && player.frameY == 1){
        fireBawl(player.x + 17,player.y + 12);  
        player.mana -=1;                  
    }
    if (keys[32] && player.frameY == 2){
        fireBawl(player.x += 55,player.y + 12); 
        player.mana -=1;               
                                  
    }
    if (keys[32] && player.frameY == 3){
        fire.src = "assets/cercle_feu_rotate.png";
        fireBawl(player.x -= 55 ,player.y + 12);                    
        player.mana -=1;
            
    }

    if (player.x >= 749 || player.x <= -5 ||player.y <= -5 || player.y >= 337){
        ChangeMap(index_Y, index_X);
    }
    interactionMap1()
    interactionMap2()
    pressButton()    
    
}

// MONSTER

monster_position = true; 
function moveMonster(){

    if (monster_position == true) {
        monster.y += monster.speed;
        monster.frameY = 2;
    }
    if (monster.y == 198 && monster.x == 202) {
        monster_position = false;
    }
    if (monster.y == 106 && monster.x == 202) {
        monster_position = true;
    }
    if (monster_position == false) {
        monster.y -= monster.speed;
        monster.frameY = 0;
    }

}

function getDistance() {
    let xDistance = monster.x - player.x;
    let yDistance = monster.y - player.y;



    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// FONCTION ANIMATION FRAME

function handlePlayerFrame(){
    if (player.frameX < 3 && player.moving) player.frameX++
    else player.frameX = 0;
}


// ASSIGNATION DE LA MAP

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

let ligne = 3;
let colonne = 2;
let localisation = document.querySelector(".localisation");
localisation.style.gridColumn = colonne;
localisation.style.gridRow = ligne;

// FONCTION DE CHANGEMENT DE MAP


function ChangeMap(Y, X) {

    console.log("fonction changement de map...");

    if (player.y >= 352 && List_Map[Y+1][X] != "_") {
        Y++
        index_Y = Y
        player.y = -5 // à changer avec la vraie position
        localisation.style.gridRow = ligne;
        console.log("changement de map en bas...");

    }
    else if (player.y <= -1 && List_Map[Y-1][X] != "_") {
        Y--;
        index_Y = Y;
        player.y = 352;
        localisation.style.gridRow = ligne;
        console.log("changement de map en haut...");
    }
    else if (player.x <= -1 && List_Map[Y][X-1] != "_") {
        X--;
        index_X = X;
        player.x = 749
        localisation.style.gridColumn = colonne;
        console.log("changement de map à gauche...");
    }
    else if (player.x >= 749 && List_Map[Y][X+1] != "_") {
        X++;
        index_X = X;
        player.x = -5;
        console.log("changement de map à droite...");
        localisation.style.gridColumn = colonne;
    }
    Map_directory = "assets/" + List_Map[Y][X];
    background.src = Map_directory;
    Player_onMap = List_Map[Y][X];   

    return
}

var audio = new Audio('Assets/Sounds/death_sound.wav');
 
function death() {
    ctx.font = '90px serif';
    ctx.fillStyle = "red";
    ctx.fillText('VOUS ÊTES MORT', 20, 240);
    player.speed = 0;
    audio.play();
    background.src = "assets/cimetière.jpg";
}

console.log("position player X : ",player.x)
console.log("position player Y : ",player.y)
