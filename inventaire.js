const inventory = document.querySelector(".inventory");
const p = document.querySelectorAll(".inventory p");
const body = document.querySelector("body");
let buttonPotion = document.getElementById("appendPotion");
let buttonPotionMana = document.getElementById("appendPotionMana");
let inventoryList = [];
let pot_p;
let pot_mana_p;
let in_Inv = false;
let cursor = 0;
let pArray = Array.from(p);
let potionCounter = -1;
let potionManaCounter = -1;
let key_p;
let keyList = ["2", "3", "5", "7", "9", "10", "11", "12", "13", "14"];

function appendPotion() {
    if (inventoryList.includes("potion")) {
      potionCounter++;
      pot_p.innerHTML = "<img src='assets/potionVie.png'>" + potionCounter;
    } else {
      inventoryList.push("potion");
      potionCounter = 1;
      pot_p = document.createElement("div");
      pot_p.classList.add("potion");
      pot_p.innerHTML = "<img src='assets/potionVie.png'>" + potionCounter;
      inventory.appendChild(pot_p);
      pArray.push(pot_p);
    }
  }

  function appendPotionMana() {
    if (inventoryList.includes("potionMana")) {
      potionManaCounter++;
      pot_mana_p.innerHTML = "<img src='assets/potionMana.png'>" + potionManaCounter;
    } else {
      inventoryList.push("potionMana");
      potionManaCounter = 1;
      pot_mana_p = document.createElement("div");
      pot_mana_p.classList.add("potionMana");
      pot_mana_p.innerHTML = "<img src='assets/potionMana.png'>" + potionManaCounter;
      inventory.appendChild(pot_mana_p);
      pArray.push(pot_mana_p);
    }
  }

function activateInventory(event) {
  const key = event.code;
  if (key === "KeyI") {
    inventory.style.border = "1px solid blue";
    in_Inv = true;
  }
  if (in_Inv === true) {
    pArray[cursor].style.border = "1px solid blue";
    console.log(cursor);
    if (key == "ArrowUp" && cursor >= 3) {
      pArray[cursor].style.border = "4px solid brown";
      cursor -= 3;
      pArray[cursor].style.border = "1px solid blue";
      //console.log(cursor)
    } else if (key == "ArrowDown" && cursor < pArray.length - 3) {
      pArray[cursor].style.border = "4px solid brown";
      cursor += 3;
      pArray[cursor].style.border = "1px solid blue";
      //console.log(cursor)
    } else if (key == "ArrowLeft" && cursor >= 1) {
      pArray[cursor].style.border = "4px solid brown";
      cursor -= 1;
      pArray[cursor].style.border = "1px solid blue";
      //console.log(cursor)
    } else if (key == "ArrowRight" && cursor < pArray.length - 1) {
      pArray[cursor].style.border = "4px solid brown";
      cursor += 1;
      pArray[cursor].style.border = "1px solid blue";
      //console.log(cursor)
    } else if (key == "Enter") {
      if (inventoryList[cursor] == "potion") {
        potionCounter -= 1;
        player.vie += 30;
        if(player.vie == 145) {
          ctx.fillRect(22.5, 12.5, 145, 10)
        }
        pot_p.innerText = "Potion \n" + potionCounter;
        if (potionCounter == 0) {
          inventory.removeChild(pot_p);
          pArray.splice(cursor, 1);
          inventoryList.splice(cursor, 1);
        } else {
          pArray[cursor].style.border = "4px solid brown";
        }
      } else if (inventoryList[cursor] == "potionMana") {
        potionManaCounter -= 1;
        player.mana += 20;
        pot_mana_p.innerText = "Potion Mana \n" + potionManaCounter;
        if (potionManaCounter == 0) {
          inventory.removeChild(pot_mana_p);
          pArray.splice(cursor, 1);
          inventoryList.splice(cursor, 1);
        } else {
          pArray[cursor].style.border = "4px solid white";
        }
      }

      in_Inv = false;
      cursor = 0;
      inventory.style.border = "4px solid brown";
    }
  }
}
function appendKey() {
  if (inventoryList.includes("key")) {
    keyCounter++;
    key_p.innerHTML = "<img src='assets/pixel-key.png'>" + keyCounter;
  } else {
    inventoryList.push("key");
    keyCounter = 1;
    key_p = document.createElement("div");
    key_p.classList.add("key");
    key_p.innerHTML = "<img src='assets/pixel-key.png'>" + keyCounter;
    inventory.appendChild(key_p);
    pArray.push(key_p);
  }
}

function interactCross(e) {
  if (e.code == "KeyF" /* && questCross == true */) {
    //map2
    if (
      player.x >= 580 &&
      player.x <= 610 &&
      player.y >= 55 &&
      player.y <= 85 &&
      Player_onMap == "Map002.png" &&
      keyList.includes("2")
    ) {
      appendKey();
      keyList.splice(0, 1);
    }
    //map3
    if (
      player.x >= 584 &&
      player.x <= 614 &&
      player.y >= 295 &&
      player.y <= 325 &&
      Player_onMap == "Map003.png" &&
      keyList.includes("3")
    ) {
      appendKey();
      keyList.splice(1, 1);
    }
    //map5
    if (
      player.x >= 610 &&
      player.x <= 640 &&
      player.y >= 130 &&
      player.y <= 160 &&
      Player_onMap == "Map005.png" &&
      keyList.includes("5")
    ) {
      appendKey();
      keyList.splice(2, 1);
    }
    //map7
    if (
      player.x >= 149 &&
      player.x <= 179 &&
      player.y >= 250 &&
      player.y <= 280 &&
      Player_onMap == "Map005.png" &&
      keyList.includes("7")
    ) {
      appendKey();
      keyList.splice(3, 1);
    }
    //map9
    if (
      player.x >= 704 &&
      player.x <= 734 &&
      player.y >= 82 &&
      player.y <= 112 &&
      Player_onMap == "Map009.png" &&
      keyList.includes("9")
    ) {
      appendKey();
      keyList.splice(4, 1);
    }
    //map10
    if (
      player.x >= 680 &&
      player.x <= 710 &&
      player.y >= 7 &&
      player.y <= 37 &&
      Player_onMap == "Map010.png" &&
      keyList.includes("10")
    ) {
      appendKey();
      keyList.splice(5, 1);
    }
    //map 11
    if (
      player.x >= 350 &&
      player.x <= 380 &&
      player.y >= 262 &&
      player.y <= 292 &&
      Player_onMap == "Map011.png" &&
      keyList.includes("11")
    ) {
      appendKey();
      keyList.splice(6, 1);
    }
    //map 12
    if (
      player.x >= 494 &&
      player.x <= 524 &&
      player.y >= 142 &&
      player.y <= 172 &&
      Player_onMap == "Map012.png" &&
      keyList.includes("12")
    ) {
      appendKey();
      keyList.splice(7, 1);
    }
    //map 13
    if (
      player.x >= 685 &&
      player.x <= 715 &&
      player.y >= 55 &&
      player.y <= 85 &&
      Player_onMap == "Map013.png" &&
      keyList.includes("13")
    ) {
      appendKey();
      keyList.splice(8, 1);
    }
    //map 14
    if (
      player.x >= 340 &&
      player.x <= 370 &&
      player.y >= 247 &&
      player.y <= 277 &&
      Player_onMap == "Map014.png" &&
      keyList.includes("14")
    ) {
      appendKey();
      keyList.splice(9, 1);
    }
  }
}
body.addEventListener("keydown", interactCross);

//potion armes

body.addEventListener("keydown", activateInventory);
