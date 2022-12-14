"use strict";
/*------------------------------------------------
             SWS game - Nuit de l'info
              ~ Written By @Yohann69 ~
-----------------------v1.0---------------------*/

console.log("test");



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
]

let gameStarted = false;
let i = 0;


function launchGame() {
    console.log("D??but du jeu")
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
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && gameStarted === true && i < imageArray.length + 1) {
        i++;
        document.querySelector('html').style.backgroundImage = `url(${imageArray[i]})`;
    }
    if (event.key === 'ArrowDown' && gameStarted === true && i > 0) {
        i--;
        document.querySelector('html').style.backgroundImage = `url(${imageArray[i]})`;
    }
})
