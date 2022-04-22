let text = document.querySelector(".text");

text.addEventListener("keypress", texte);

function texte() {
    if (keys[69]) {
      text.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
      setTimeout(function () {
        text.innerHTML =
          "<a> QUETE : Trouvez toutes les croix présentes sur les map pour accéder à un nouveau sort </br> Y / N</a>";
      }, 300);
    }
    if (keys[89]) {
      text.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
      Player_onMap == "Map004.png";
      setTimeout(function () {
        text.innerHTML = " <h2>Vous avez accepté la quête</h2>";
      }, 500);
      quetes.push(
        "QUETE : Trouvez toutes les croix présentes sur les map pour accéder à un nouveau sort"
      );
      info.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
      info.style.color = "white";
      info.innerHTML =
        "<a> QUETE : Trouvez toutes les croix présentes sur les map pour accéder à un nouveau sort.</a>";
      setTimeout(function () {
        text.innerHTML =
          '<img src="assets/shibacoin.png" id="shibacoin"><h3>Bonne chance </h3></br>';
      }, 2500);
    }
    if (keys[78]) {
      text.innerHTML = "";
      text.style.backgroundColor = "";
    }
  }
  
  function texteCatGolri() {
    text.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
    setTimeout(function () {
      text.innerHTML =
        ' <img src="assets/cat_golri.png" id="shibacoin"><h1>WOUF</h1>';
    }, 500);
    setTimeout(function () {
      text.innerHTML =
        ' <img src="assets/cat_golri.png" id="shibacoin"><h1>WAF WAF</h1>';
    }, 1500);
    setTimeout(function () {
      text.innerHTML =
        ' <img src="assets/cat_golri.png" id="shibacoin"><h3>jo souis un chat</h3>';
    }, 2500);
  
    console.log(text);
  }
  
  function textePalma() {
    text.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
    setTimeout(function () {
      text.innerHTML = ' <img src="assets/dede.png" id="dede"><h1>beh</h1>';
    }, 500);
    setTimeout(function () {
      text.innerHTML = ' <img src="assets/dede.png" id="dede"><h1>...</h1>';
    }, 1500);
    setTimeout(function () {
      text.innerHTML =
        ' <img src="assets/dede.png" id="dede"><h1>je m\'en fou ?</h1>';
    }, 2500);
  
    console.log(text);
  }
  
  function texteGardien() {
    text.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
    setTimeout(function () {
      text.innerHTML = ' <img src="assets/sdf_dort.png" id="dede"><h1>...</h1>';
    }, 500);
    text.innerHTML =
      ' <img src="assets/sdf_dort.png" id="dede"><h1>...pas de clé</h1>';
  }
