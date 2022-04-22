function pressButton() {
    let bas = document.querySelector("#s");
    let haut = document.querySelector("#z");
    let gauche = document.querySelector("#q");
    let droite = document.querySelector("#d");
    let attaque = document.querySelector("#spacebar");
    let inventaire = document.querySelector("#i");
  
    window.addEventListener("keydown", pressButtonDown);
    window.addEventListener("keyup", pressButtonUp);
  
    function pressButtonDown() {
      if (keys[90]) {
        haut.style.width = 25 + "px";
        haut.style.height = 25 + "px";
      }
      if (keys[81]) {
        gauche.style.width = 25 + "px";
        gauche.style.height = 25 + "px";
      }
      if (keys[83]) {
        bas.style.width = 25 + "px";
        bas.style.height = 25 + "px";
      }
      if (keys[68]) {
        droite.style.width = 25 + "px";
        droite.style.height = 25 + "px";
      }
      if (keys[32]) {
        attaque.style.width = 75 + "px";
        attaque.style.height = 15 + "px";
      }
      if (keys[73]) {
        i.style.width = 25 + "px";
        i.style.height = 25 + "px";
      }
    }
  
    function pressButtonUp() {
      haut.style.width = 30 + "px";
      haut.style.height = 30 + "px";
      bas.style.width = 30 + "px";
      bas.style.height = 30 + "px";
      droite.style.width = 30 + "px";
      droite.style.height = 30 + "px";
      gauche.style.width = 30 + "px";
      gauche.style.height = 30 + "px";
      inventaire.style.width = 30 + "px";
      inventaire.style.height = 30 + "px";
      attaque.style.width = 85 + "px";
      attaque.style.height = 25 + "px";
    }
  }
