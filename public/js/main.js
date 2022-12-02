"use strict";
/*------------------------------------------------
             SWS game - Nuit de l'info
              ~ Written By @Yohann69 ~
-----------------------v1.0---------------------*/

let imageArray = [
    "img/assets/IMG_7670-min.JPG",
    "img/assets/IMG_7672-min.JPG",
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
];

let questions = [];


let gameStarted = false;
let i = 0;
let nbVies = 3;
let nbPoints = 0;
let isHardMode = false;
let date = new Date();
let startDate = 0;
let answered = false;
let questionLeft;
let questionRight;

function launchGame() {
    console.log("Début du jeu")
    gameStarted = true;

    document.querySelector('.Welcomepage').innerHTML = `<section></section>`;

    document.querySelector('html').style.backgroundImage = `url(${imageArray[i]})`;

    document.querySelector('section').innerHTML += `
        <section class="question left">
            <h2>Voulez-vous jouer avec des questions difficiles ?</h2>
        </section>
        
        <section class="question right">
            <h2>Voulez-vous jouer avec des questions faciles ?</h2>
        </section>
    `;
    i++;
    questionLeft= document.querySelector('.left');
    questionRight = document.querySelector('.right');

    startDate = date.getTime();
}




async function loadQuestions(isHardMode){
    // Get all questions and add them to the questions array
    
    
    
    // Continue the game
    i ++;
    answered = true;
}


document.addEventListener('keydown', (event) => {
    console.log(i)

    if(event.key === "ArrowLeft" && gameStarted === true && i === 1) {
        isHardMode = true;
        console.log("Mode difficile");
        loadQuestions(isHardMode);
        
    }
    if(event.key === "ArrowRight" && gameStarted === true && i === 1) {
        isHardMode = false;
        console.log("Mode facile");
        loadQuestions(isHardMode);
        questionLeft.innerHTML = ``;
        questionRight.innerHTML = ``;
    }

    
    if (event.key === 'ArrowUp' && gameStarted === true && i < imageArray.length + 1 && answered === true) {
        i++;
        displayImage()
    }
    if (event.key === 'ArrowDown' && gameStarted === true && i > 1) {
        i--;
        displayImage()
    }
})



function displayImage(){
    
    document.querySelector('html').style.backgroundImage = `url(${imageArray[i]})`;
}



let timer=0;
setInterval(() => {timer+=1},1000);

