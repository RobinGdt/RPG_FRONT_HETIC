class Monsters {
  constructor(name, x, y, width, height, frameX, frameY, speed, BeginPathX, EndPathX, BeginPathY, EndPathY, hp, attack, moving, map, dead, pnj) {
      this.name = name
      this.x = x,
      this.y = y,
      this.width = width,
      this.height = height,
      this.frameX = frameX,
      this.frameY = frameY,
      this.speed = speed,
      this.BeginPathX = BeginPathX,
      this.EndPathX = EndPathX,
      this.BeginPathY = BeginPathY,
      this.EndPathY = EndPathY,
      this.hp = hp,
      this.attack = attack
      this.moving = moving
      this.map = map
      this.dead = dead
      this.pnj = pnj
      this.src = this.LoadImage()
  }

  LoadImage() {
      const MonsterSprite = new Image();
      MonsterSprite.src = "assets/" + this.name + ".png";
      return MonsterSprite;
  }
}

class Spells {
  constructor(name, x, y, width, height, frameX, frameY, speed, attack){
      this.name = name,
      this.x = x,
      this.y = y,
      this.width = width,
      this.height = height,
      this.frameX = frameX,
      this.frameY = frameY,
      this.speed = speed,
      this.attack = attack,
      this.src = this.LoadImage()
  }

  LoadImage() {
      const SpellSprite = new Image();
      SpellSprite.src = "assets/" + this.name + ".png";
      return SpellSprite;
  }
}

const Monster1 = new Monsters("Enemy_10-1", 460, 330, 32, 32, 1, 0, 4, 460, 560, null, null, 50, 10, false, "Map001.png", false, false);
const Monster2 = new Monsters("Enemy_11-1", 200, 200, 32, 32, 0, 0, 4, null, null, 100, 200, 50, 10, false, "Map001.png", false, false);

const Monster3 = new Monsters("Enemy_12-1", 350, 60, 32, 32, 0, 0, 2, 300, 400, null, null, 50, 10, false, "Map003.png", false, false);
const Monster4 = new Monsters("Enemy_09-1", 400, 300, 32, 32, 0, 0, 2, null, null, 100, 200, 50, 10, false, "Map003.png", false, false);

const Monster5 = new Monsters("Enemy_12-1", 408, 80, 32, 32, 0, 0, 2, 408, 500, null, null, 50, 10, false, "Map007.png", false, false);
const Monster6 = new Monsters("Enemy_11-1", 200, 200, 32, 32, 0, 0, 2, null, null, 100, 200, 50, 10, false, "Map007.png", false, false);

const Monster7 = new Monsters("Enemy_18", 400, 240, 32, 32, 0, 0, 2, null, null, 120, 200, 50, 10, false, "Map008.png", false, false);
const Monster8 = new Monsters("Enemy_19", 544, 240, 32, 32, 0, 0, 2, 540, 640, null, null, 50, 10, false, "Map008.png", false, false);

const Monster9 = new Monsters("Enemy_20", 544, 240, 32, 32, 0, 0, 2, 540, 640, null, null, 50, 10, false, "Map010.png", false, false);
const Monster10 = new Monsters("Enemy_21", 650, 56, 32, 32, 0, 0, 2, 600, 660, null, null, 50, 10, false, "Map010.png", false, false);

const Monster11 = new Monsters("Enemy_05-1", 96, 160, 32, 32, 0, 0, 2, 96, 126, null, null, 75, 10, false, "Map014.png", false, false);
const Monster12 = new Monsters("Enemy_05-1", 312, 224, 32, 32, 0, 0, 2, 312, 412, null, null, 75, 10, false, "Map014.png", false, false);
const Monster13 = new Monsters("Enemy_05-1", 344, 320, 32, 32, 0, 0, 2, 180, 600, null, null, 75, 10, false, "Map014.png", false, false);

const Pnj1 = new Monsters("Male_13-2", 144, 106, 32, 32, 1, 0, 2, null, null, null, null, 50, 10, false, "Map002.png", false, true);
const Pnj2 = new Monsters("Male_12-3", 544, 178, 32, 32, 1, 1, 2, null, null, null, null, 50, 10, false, "Map002.png", false, true);
const Pnj3 = new Monsters("Male_16-1", 40, 186, 32, 32, 0, 1, 4, 40, 520, null, null, 50, 10, false, "Map002.png", false, true);

const Animal1 = new Monsters("Dog_01-1", 538, 218, 32, 32, 1, 0, 2, null, null, null, null, 10, 10, false, "Map001.png", false, true);
const Animal2 = new Monsters("Dog-01-3r", 424, 346, 32, 32, 2, 0, 2, null, null, 240, 340, 10, 10, false, "Map002.png", false, true);

const Boss = new Monsters("Boss_01", 325, 88, 96, 96, 1, 3, 2, null, null, null, null, 100, 20, false, "Map004.png", false, false);

let List_Monst = [Monster1, Monster2, Monster3, Monster4, Monster5, Monster6, Monster7, Monster8, Monster9, Monster10, Monster11, Monster12, Monster13, Pnj1, Pnj2, Pnj3, Boss, Animal1, Animal2];


// Sorts du jeu
const Spell1 = new Spells("Explosion", null, null, 100, 100, 1, 0, 2, 0);


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
      if (Monst.pnj == false){
          ctx.lineWidth = 2;
          ctx.fillRect(Monst.x - 10, Monst.y - 10, Monst.hp, 5);
          ctx.fillStyle = "rgb(135,206,235)";
      }

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
        if (Monst.frameX < 2){
          Monst.frameY = 2;
          Monst.frameX++;
        }
        else{
            Monst.frameX = 0;
        }
      }
      if (
        Monst.EndPathX != null &&
        Monst.x > Monst.BeginPathX &&
        Monst.moving == false
      ) {
          Monst.x -= Monst.speed;
          if (Monst.frameX < 2){
              Monst.frameY = 1;
              Monst.frameX++;
          }
          else{
              Monst.frameX = 0
          }
      
      }
      // condition déplacement sur la map sur l'axe Y si != null
      if (
        Monst.BeginPathY != null &&
        Monst.y < Monst.EndPathY &&
        Monst.moving
      ) {
        Monst.y += Monst.speed;
        if (Monst.frameX < 2){
          Monst.frameY = 0;
          Monst.frameX++;
        }
        else{
            Monst.frameX = 0;
        }
        
      }
      if (
        Monst.EndPathY != null &&
        Monst.y > Monst.BeginPathY &&
        Monst.moving == false
      ) {
        Monst.y -= Monst.speed;
        if (Monst.frameX < 2){
          Monst.frameY = 3;
          Monst.frameX++;
        }
        else {
            Monst.frameX = 0
        }
        
      }
          if (getDistance(Monst.x, Monst.y) < Monst.width && Monst.pnj == false) {
              Spell1.frameX++;
              if (Spell1.frameX == 10){
                  Spell1.frameY++;
                  Spell1.frameX = 0;
              }
              if (Spell1.frameY == 7){
                  Spell1.frameY = 0;
              }
              drawSprite(
                  Spell1.src,
                  Spell1.width * Spell1.frameX,
                  Spell1.height * Spell1.frameY,
                  Spell1.width,
                  Spell1.height,
                  player.x - 30,
                  player.y - 30,
                  Spell1.width,
                  Spell1.height
                );
              if (player.vie > 0) {
                  player.vie -= Monst.attack;
              }
          if (Monst.hp <= 0) {
              Monst.dead = true;                       //  <--------- Mort du monstre !
              deathmonster(Monst);
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
