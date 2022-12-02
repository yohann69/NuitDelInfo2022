"use strict";
/*------------------------------------------------
             SWS game - Nuit de l'info
              ~ Written By @Yohann69 ~
-----------------------v1.0---------------------*/

console.log("test");

let imageObject = {
    "homeChoice": "img/assets/IMG_7670-min.JPG",
    "easyChoice": "img/assets/IMG_7672-min.JPG",
    "easyChoiceNext": "img/assets/IMG_7673-min.JPG",
    "hardChoice": "img/assets/IMG_7674-min.JPG",

    "secondFloorWalk10": "img/assets/IMG_7675-min.JPG",
    "secondFloorWalk11": "img/assets/IMG_7676-min.JPG",
    "secondFloorQuestion1": "img/assets/IMG_7677-min.JPG",
    "secondFloorWalk20": "img/assets/IMG_7678-min.JPG",
    "secondFloorWalk21": "img/assets/IMG_7679-min.JPG",
    "secondFloorQuestion2": "img/assets/IMG_7680-min.JPG",
    "secondFloorWalk30": "img/assets/IMG_7681-min.JPG",
    "secondFloorWalk31": "img/assets/IMG_7682-min.JPG",
    "secondFloorQuestion3": "img/assets/IMG_7683-min.JPG",
    "secondFloorWalk40": "img/assets/IMG_7684-min.JPG",
    "secondFloorWalk41": "img/assets/IMG_7685-min.JPG",
    "secondFloorWalk42": "img/assets/IMG_7686-min.JPG",
    "secondFloorQuestion4": "img/assets/IMG_7687-min.JPG",
    "secondFloorWalk50": "img/assets/IMG_7688-min.JPG",
    "secondFloorQuestion5": "img/assets/IMG_7689-min.JPG",

    "goindDown2to10": "img/assets/IMG_7691-min.JPG",
    "goindDown2to11": "img/assets/IMG_7692-min.JPG",
    "goindDown2to12": "img/assets/IMG_7693-min.JPG",
    "goindDown2to13": "img/assets/IMG_7694-min.JPG",

    "firstFloorWalk10": "img/assets/IMG_7695-min.JPG",
    "firstFloorWalk11": "img/assets/IMG_7696-min.JPG",
    "firstFloorWalk12": "img/assets/IMG_7697-min.JPG",
    "firstFloorQuestion1": "img/assets/IMG_7698-min.JPG",
    "firstFloorWalk20": "img/assets/IMG_7699-min.JPG",
    "firstFloorWalk21": "img/assets/IMG_7700-min.JPG",
    "firstFloorWalk22": "img/assets/IMG_7701-min.JPG",
    "firstFloorWalk23": "img/assets/IMG_7702-min.JPG",
    "firstFloorQuestion2": "img/assets/IMG_7703-min.JPG",
    "firstFloorWalk30": "img/assets/IMG_7704-min.JPG",
    "firstFloorWalk31": "img/assets/IMG_7705-min.JPG",
    "firstFloorQuestion3": "img/assets/IMG_7706-min.JPG",
    "firstFloorWalk40": "img/assets/IMG_7707-min.JPG",
    "firstFloorWalk41": "img/assets/IMG_7708-min.JPG",
    "firstFloorQuestion4": "img/assets/IMG_7709-min.JPG",
    "firstFloorWalk50": "img/assets/IMG_7710-min.JPG",
    "firstFloorWalk51": "img/assets/IMG_7711-min.JPG",
    "firstFloorWalk52": "img/assets/IMG_7712-min.JPG",
    "firstFloorQuestion5": "img/assets/IMG_7713-min.JPG",
    "firstFloorWalk60": "img/assets/IMG_7714-min.JPG",
    "firstFloorWalk61": "img/assets/IMG_7716-min.JPG",
    "firstFloorWalk62": "img/assets/IMG_7717-min.JPG",
    "firstFloorWalk63": "img/assets/IMG_7718-min.JPG",
    "firstFloorWalk64": "img/assets/IMG_7719-min.JPG",
    "firstFloorWalk65": "img/assets/IMG_7720-min.JPG",
    "firstFloorWalk66": "img/assets/IMG_7721-min.JPG",

    "goindDown1to01": "img/assets/IMG_7722-min.JPG",
    "goindDown1to02": "img/assets/IMG_7723-min.JPG",
    "goindDown1to03": "img/assets/IMG_7724-min.JPG",
    "goindDown1to04": "img/assets/IMG_7725-min.JPG",
    "goindDown1to05": "img/assets/IMG_7726-min.JPG",
    "goindDown1to06": "img/assets/IMG_7727-min.JPG",

    "groundFloorWalk10": "img/assets/IMG_7728-min.JPG",
    "groundFloorWalk11": "img/assets/IMG_7729-min.JPG",
    "groundFloorQuestion1": "img/assets/IMG_7730-min.JPG",
    "groundFloorWalk20": "img/assets/IMG_7731-min.JPG",
    "groundFloorWalk21": "img/assets/IMG_7732-min.JPG",
    "groundFloorQuestion2": "img/assets/IMG_7733-min.JPG",
    "groundFloorWalk30": "img/assets/IMG_7735-min.JPG",
    "groundFloorQuestion3": "img/assets/IMG_7736-min.JPG",
    "groundFloorWalk40": "img/assets/IMG_7737-min.JPG",
    "groundFloorWalk41": "img/assets/IMG_7738-min.JPG",
    "groundFloorQuestion4": "img/assets/IMG_7739-min.JPG",
    "groundFloorWalk50": "img/assets/IMG_7740-min.JPG",
    "groundFloorWalk51": "img/assets/IMG_7741-min.JPG",
    "groundFloorQuestion5": "img/assets/IMG_7742-min.JPG",
    "groundFloorWalk60": "img/assets/IMG_7743-min.JPG",
    "groundFloorWalk61": "img/assets/IMG_7744-min.JPG",
    "groundFloorWalk62": "img/assets/IMG_7745-min.JPG",
    "groundFloorQuestion6": "img/assets/IMG_7746-min.JPG",

    "endGame": "img/assets/IMG_7747-min.JPG",
    "endGameWalk10": "img/assets/IMG_7748-min.JPG",
    "endGameWalk11": "img/assets/IMG_7749-min.JPG",

}

let imageArray = [
    "img/assets/IMG_7670-min.JPG",
    "img/assets/IMG_7672-min.JPG",
    "img/assets/IMG_7673-min.JPG",
    "img/assets/IMG_7674-min.JPG",

    "img/assets/IMG_7675-min.JPG",
    "img/assets/IMG_7676-min.JPG",
    "img/assets/IMG_7677-min.JPG",
    "img/assets/IMG_7678-min.JPG",
    "img/assets/IMG_7679-min.JPG",
    "img/assets/IMG_7680-min.JPG",
    "img/assets/IMG_7681-min.JPG",
    "img/assets/IMG_7682-min.JPG",
    "img/assets/IMG_7683-min.JPG",
    "img/assets/IMG_7684-min.JPG",
    "img/assets/IMG_7685-min.JPG",
    "img/assets/IMG_7686-min.JPG",
    "img/assets/IMG_7687-min.JPG",
    "img/assets/IMG_7688-min.JPG",
    "img/assets/IMG_7689-min.JPG",

    "img/assets/IMG_7691-min.JPG",
    "img/assets/IMG_7692-min.JPG",
    "img/assets/IMG_7693-min.JPG",
    "img/assets/IMG_7694-min.JPG",

    "img/assets/IMG_7695-min.JPG",
    "img/assets/IMG_7696-min.JPG",
    "img/assets/IMG_7697-min.JPG",
    "img/assets/IMG_7698-min.JPG",
    "img/assets/IMG_7699-min.JPG",
    "img/assets/IMG_7700-min.JPG",
    "img/assets/IMG_7701-min.JPG",
    "img/assets/IMG_7702-min.JPG",
    "img/assets/IMG_7703-min.JPG",
    "img/assets/IMG_7704-min.JPG",
    "img/assets/IMG_7705-min.JPG",
    "img/assets/IMG_7706-min.JPG",
    "img/assets/IMG_7707-min.JPG",
    "img/assets/IMG_7708-min.JPG",
    "img/assets/IMG_7709-min.JPG",
    "img/assets/IMG_7710-min.JPG",
    "img/assets/IMG_7711-min.JPG",
    "img/assets/IMG_7712-min.JPG",
    "img/assets/IMG_7713-min.JPG",
    "img/assets/IMG_7714-min.JPG",
    "img/assets/IMG_7716-min.JPG",
    "img/assets/IMG_7717-min.JPG",
    "img/assets/IMG_7718-min.JPG",
    "img/assets/IMG_7719-min.JPG",
    "img/assets/IMG_7720-min.JPG",
    "img/assets/IMG_7721-min.JPG",

    "img/assets/IMG_7722-min.JPG",
    "img/assets/IMG_7723-min.JPG",
    "img/assets/IMG_7724-min.JPG",
    "img/assets/IMG_7725-min.JPG",
    "img/assets/IMG_7726-min.JPG",
    "img/assets/IMG_7727-min.JPG",

    "img/assets/IMG_7728-min.JPG",
    "img/assets/IMG_7729-min.JPG",
    "img/assets/IMG_7730-min.JPG",
    "img/assets/IMG_7731-min.JPG",
    "img/assets/IMG_7732-min.JPG",
    "img/assets/IMG_7733-min.JPG",
    "img/assets/IMG_7735-min.JPG",
    "img/assets/IMG_7736-min.JPG",
    "img/assets/IMG_7737-min.JPG",
    "img/assets/IMG_7738-min.JPG",
    "img/assets/IMG_7739-min.JPG",
    "img/assets/IMG_7740-min.JPG",
    "img/assets/IMG_7741-min.JPG",
    "img/assets/IMG_7742-min.JPG",
    "img/assets/IMG_7743-min.JPG",
    "img/assets/IMG_7744-min.JPG",
    "img/assets/IMG_7745-min.JPG",
    "img/assets/IMG_7746-min.JPG",

    "img/assets/IMG_7747-min.JPG",
    "img/assets/IMG_7748-min.JPG",
    "img/assets/IMG_7749-min.JPG",
]

function launchGame() {
    console.log("Début du jeu")
    /* document.querySelector(".Welcomepage").classlist.add("game")
    document.querySelector(".Welcomepage").classlist.remove("Welcomepage") */
    document.querySelector('.Welcomepage').innerHTML = `<section></section>`;

    let i = 0;

    while (i < games.length) {
        // if the upper arrow key is pressed
        
    }

}

document.addEventListener('keydown',(event)=>{
    console.log(event.key);
})
