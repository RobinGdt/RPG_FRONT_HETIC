const inventory = document.querySelector(".inventory")
const p = document.querySelectorAll(".inventory p" )
const body = document.querySelector("body")
let buttonPotion = document.getElementById("appendPotion")
let buttonPotionMana = document.getElementById("appendPotionMana")
let inventoryList = []
let pot_p
let pot_mana_p
let in_Inv =false
let cursor = 0
let pArray = Array.from(p)
let potionCounter = -1
let potionManaCounter = -1

buttonPotion.onclick =function(){
    if (inventoryList.includes("potion")){
        potionCounter ++
        pot_p.innerText = "Potion \n" + potionCounter;
        //console.log(potionCounter)
    }
    else{
        inventoryList.push("potion")
        potionCounter = 1
        pot_p = document.createElement("p");
        pot_p.classList.add("potion")
        pot_p.innerText = "Potion \n" + potionCounter;
        inventory.appendChild(pot_p);
        pArray.push(pot_p);
        //console.log(pArray.length)
    }
}

buttonPotionMana.onclick =function(){
    if (inventoryList.includes("potionMana")){
        potionManaCounter ++
        pot_mana_p.innerText = "Potion Mana \n" + potionManaCounter;
        //console.log(potionCounter)
    }
    else{
        inventoryList.push("potionMana")
        potionManaCounter = 1
        pot_mana_p = document.createElement("p");
        pot_mana_p.classList.add("potionMana")
        pot_mana_p.innerText = "Potion Mana \n" + potionCounter;
        inventory.appendChild(pot_mana_p);
        pArray.push(pot_mana_p);
        //console.log(pArray.length)
    }
}

function activateInventory(event){
    
    const key = event.code
    if(key === "KeyI"){
        inventory.style.border = "1px solid blue"
        in_Inv = true
    }
    if (in_Inv === true){
        pArray[cursor].style.border = "1px solid blue"
        console.log(cursor)
        if (key == "ArrowUp" && cursor >= 3){
            pArray[cursor].style.border ="4px solid brown"
            cursor -= 3
            pArray[cursor].style.border = "1px solid blue"
            //console.log(cursor)
        }
        else if (key == "ArrowDown" && cursor < (pArray.length-3)){
            pArray[cursor].style.border ="4px solid brown"
            cursor += 3
            pArray[cursor].style.border = "1px solid blue"
            //console.log(cursor)
        }
        else if (key == "ArrowLeft" && cursor >= 1){
            pArray[cursor].style.border ="4px solid brown"
            cursor -= 1
            pArray[cursor].style.border = "1px solid blue"
            //console.log(cursor)
        }
        else if (key =="ArrowRight" && cursor < (pArray.length-1)){
            pArray[cursor].style.border ="4px solid brown"
            cursor += 1
            pArray[cursor].style.border = "1px solid blue"
            //console.log(cursor)
        }
        else if (key == "Enter"){
            if (inventoryList[cursor]== "potion"){
                potionCounter -=1
                pot_p.innerText = "Potion \n" + potionCounter;
                if (potionCounter == 0){
                    inventory.removeChild(pot_p)
                    pArray.splice(cursor, 1); 
                    inventoryList.splice(cursor, 1)
                }else{
                    pArray[cursor].style.border ="4px solid brown"
                }
            }
            else if (inventoryList[cursor] == "potionMana"){
                potionManaCounter -= 1
                pot_mana_p.innerText = "Potion Mana \n" + potionManaCounter;
                if (potionManaCounter == 0){
                    inventory.removeChild(pot_mana_p)
                    pArray.splice(cursor, 1); 
                    inventoryList.splice(cursor, 1)
                }else{
                    pArray[cursor].style.border ="4px solid brown"
                }
            }
        
            in_Inv = false
            cursor = 0
            inventory.style.border = "4px solid brown"
        }
    }
}



//potion armes 

body.addEventListener("keydown", activateInventory)
