class Monsters {
  constructor(
    name,
    x,
    y,
    width,
    height,
    frameX,
    frameY,
    speed,
    BeginPathX,
    EndPathX,
    BeginPathY,
    EndPathY,
    hp,
    attack,
    moving,
    map,
    dead
  ) {
    this.name = name;
    (this.x = x),
      (this.y = y),
      (this.width = width),
      (this.height = height),
      (this.frameX = frameX),
      (this.frameY = frameY),
      (this.speed = speed),
      (this.BeginPathX = BeginPathX),
      (this.EndPathX = EndPathX),
      (this.BeginPathY = BeginPathY),
      (this.EndPathY = EndPathY),
      (this.hp = hp),
      (this.attack = attack);
    this.moving = moving;
    this.map = map;
    this.dead = dead;
    this.src = this.LoadImage();
  }

  LoadImage() {
    const MonsterSprite = new Image();
    MonsterSprite.src = "assets/" + this.name + ".png";
    return MonsterSprite;
  }
}


const Monster1 = new Monsters(
    "Jester_Walk-Sheet",
    460,
    330,
    32,
    32,
    0,
    0,
    2,
    460,
    560,
    null,
    null,
    50,
    10,
    false,
    "Map001.png",
    false
  );
  const Monster2 = new Monsters(
    "Old_man_Walk-Sheet",
    200,
    200,
    32,
    32,
    0,
    0,
    2,
    null,
    null,
    100,
    200,
    50,
    10,
    false,
    "Map001.png",
    false
  );
  
  const Monster3 = new Monsters(
    "Jester_Walk-Sheet",
    350,
    60,
    32,
    32,
    0,
    0,
    2,
    300,
    400,
    null,
    null,
    50,
    10,
    false,
    "Map003.png",
    false
  );
  const Monster4 = new Monsters(
    "Old_man_Walk-Sheet",
    400,
    300,
    32,
    32,
    0,
    0,
    2,
    null,
    null,
    100,
    200,
    50,
    10,
    false,
    "Map003.png",
    false
  );
  
  const Monster5 = new Monsters(
    "Jester_Walk-Sheet",
    460,
    330,
    32,
    32,
    0,
    0,
    2,
    460,
    560,
    null,
    null,
    50,
    10,
    false,
    "Map007.png",
    false
  );
  const Monster6 = new Monsters(
    "Old_man_Walk-Sheet",
    200,
    200,
    32,
    32,
    0,
    0,
    2,
    null,
    null,
    100,
    200,
    50,
    10,
    false,
    "Map007.png",
    false
  );

let List_Monst = [Monster1, Monster2, Monster3, Monster4, Monster5, Monster6];

function SpawnMonsters() {
  for (let index = 0; index < List_Monst.length; index++) {
    const Monst = List_Monst[index];
    if (Player_onMap == Monst.map && Monst.dead == false) {
      drawSprite(
        Monst.src,
        Monst.width * Monst.frameX,
        Monst.height * Monst.frameY,
        Monst.width,
        Monst.height,
        Monst.x,
        Monst.y,
        Monst.width,
        Monst.height
      );
      ctx.lineWidth = 2;
      ctx.fillRect(Monst.x - 10, Monst.y - 10, Monst.hp, 5);
      ctx.fillStyle = "rgb(135,206,235)";
      // savoir quand le monstre est au début ou au retour de son path
      if (Monst.BeginPathX == Monst.x || Monst.BeginPathY == Monst.y) {
        Monst.moving = true;
      } else if (Monst.EndPathX == Monst.x || Monst.EndPathY == Monst.y) {
        Monst.moving = false;
      }
      // condition déplacement sur la map sur l'axe X si != null
      if (
        Monst.BeginPathX != null &&
        Monst.x < Monst.EndPathX &&
        Monst.moving
      ) {
        Monst.x += Monst.speed;
        Monst.frameY = 2;
        Monst.frameX = 1;
      }
      if (
        Monst.EndPathX != null &&
        Monst.x > Monst.BeginPathX &&
        Monst.moving == false
      ) {
        Monst.x -= Monst.speed;
        Monst.frameY = 3;
        Monst.frameX = 1;
      }
      // condition déplacement sur la map sur l'axe Y si != null
      if (
        Monst.BeginPathY != null &&
        Monst.y < Monst.EndPathY &&
        Monst.moving
      ) {
        Monst.y += Monst.speed;
        Monst.frameY = 0;
      }
      if (
        Monst.EndPathY != null &&
        Monst.y > Monst.BeginPathY &&
        Monst.moving == false
      ) {
        Monst.y -= Monst.speed;
        Monst.frameY = 1;
      }
      if (getDistance(Monst.x, Monst.y) < Monst.width) {
        if (player.vie > 0) {
          player.vie -= 5;
        }
      }
      if (getDistancefireball(Monst.x, Monst.y) < fireball.width) {
        //Dégats de la boule de feu sur le monstre
        console.log("boum !");
        if (Monst.hp > 0) {
          Monst.hp -= fireball.degats;
        }
      }
      if (Monst.hp <= 0) {
        Monst.dead = true; //  <--------- Mort du monstre !
        // deathmonster();
        appendPotion();
        appendPotionMana()
      };
    }
  }
}

function getDistance(Monster_X, Monster_Y) {
  let xDistance = Monster_X - player.x;
  let yDistance = Monster_Y - player.y;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// function deathmonster() {
//     monstersprite.src = "assets/Characters/Tombe.png";
//     monster.speed = 0;
//     monster.width = 0;
//     monster.height = 0;
//     monster.degats = 0;
//   }
