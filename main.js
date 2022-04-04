add = document.querySelector('.inventory');
el = 0;

add.addEventListener('click', function(){
    for (i = 0 ; i <= 20; i++){
        add.innerHTML +=`<div class="element"> ${i} <div>`;
    
        
    }
});



let ligne = 1;
let colonne = 1;

function deplacement(event) {
    let touche = event.key;

    if (touche == "ArrowUp") {
        if (ligne > 1) {
            ligne--; 
        }
        console.log("haut, ligne : " + ligne);
    }
    else if (touche == "ArrowDown") {
        if (ligne < 15) {
            ligne++;
        }
        console.log("bas, ligne : " + ligne);
    }
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {
            colonne--;
        }
        console.log("gauche, colonne : " + colonne);
    }
    else if (touche == "ArrowRight") {
        if (colonne < 30) {
            colonne++; 
        }
        console.log("droite, colonne : " + colonne);
    }

    let personnage = document.querySelector(".personnage");


    personnage.style.gridColumn = colonne;
    personnage.style.gridRow = ligne;
}

document.onkeyup = deplacement;
