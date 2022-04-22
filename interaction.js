function interactionMap1() {
    if (Player_onMap == "Map001.png") {
      let chatGolri = new Image();
      chatGolri.src = "assets/cat_golri_pixel.png";
      function catGolri() {
        ctx.drawImage(chatGolri, 510, 270, 20, 27);
      }
      catGolri();
  
      if (player.x < 650 && player.x > 620 && player.y > 70 && player.y < 100) {
        player.speed = 10;
        ctx.font = "12px PF Tempesta Seven";
        ctx.fillText("[e] pour interagir", 350, 50);
        texte();
      } else if (
        player.x < 530 &&
        player.x > 485 &&
        player.y > 250 &&
        player.y < 280
      ) {
        ctx.font = "12px PF Tempesta Seven";
        ctx.fillText("[e] pour interagir avec le catinouninou", 350, 50);
        if (keys[69]) {
          texteCatGolri();
        }
      } else {
        text.innerHTML = "";
        text.style.backgroundColor = "";
      }
    }
  }

// ______________MAP02_______________________________

  function interactionMap2() {
    if (Player_onMap == "Map002.png") {
      let palmashow = new Image();
      palmashow.src = "assets/palmashow.png";
      function dede() {
        ctx.drawImage(palmashow, 510, 270, 20, 27);
      }
      dede();
  
      if (player.x < 530 && player.x > 485 && player.y > 250 && player.y < 280) {
        player.speed = 10;
        ctx.font = "12px PF Tempesta Seven";
        ctx.fillText("[e] pour interagir avec le beauf de ces dames", 350, 50);
        if (keys[69]) {
          textePalma();
        }
      } else {
        text.innerHTML = "";
        text.style.backgroundColor = "";
      }
    }
  }
  
// ______________MAP014_______________________________


function interactionMap14() {
if (Player_onMap == "Map014.png") {
    let gardien = new Image();
    gardien.src = "assets/gardien.png";
    function garde() {
    ctx.drawImage(gardien, 410, 55, 50, 50);
    }
    garde();

    if (player.x < 445 && player.x > 380 && player.y > 10 && player.y < 110) {
    ctx.font = "12px PF Tempesta Seven";
    ctx.fillText("[e] pour interagir avec le gardien du donjon", 350, 50);
    if (keys[69]) {
        texteGardien();
    }
    if (keys[69] && inventoryList.indexOf("key") != -1) {
        text.innerHTML =
        ' <img src="assets/sdf_reveille.png" id="sdf"><h3>bravo ducon </h3>';
        //Player_onMap == "Map004.png";
        background.src = "assets/Map004.png"
        Player_onMap = List_Map[1][4];
        index_Y = 1;
        index_X = 4;
        ligne--;
        localisation.style.gridRow = ligne;
    }
    } else {
    text.innerHTML = "";
    text.style.backgroundColor = "";
    }
}
}
