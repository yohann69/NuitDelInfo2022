function CalculRatio(Score, Temps) {
    return (Score/16)/Temps
  }

fetch("/api.php?endpoint=getScore").then(
    function (e){
        return e.json();
    }
).then((donnee)=>{
    for (const element of donnee) {
        let compteurclassement = 1 ;
        let newSectionParticipant = document.createElement('section');
        newSectionParticipant.classList.add('participant')
        let sectionListeParticipantExistant = document.querySelector('#listeParticipant');
        let photoprofil = document.createElement('img');
        let classement = document.createElement('h2');
        let nom = document.createElement('h2');
        let Score = document.createElement('h2');
        let Temps = document.createElement('h2');
        let Ratio = document.createElement('h2');
        photoprofil.src=element['photoProfil'];
        photoprofil.classList.add("photoProfil");
        classement.textContent=compteurclassement+'-';
        nom.textContent=element['Pseudo'];
        Score.textContent=element['Score'];
        Score.classList.add("score");
        Temps.textContent=element['Temps'];
        Temps.classList.add('temps');
        Ratio.textContent = CalculRatio(element['Score'], element['Temps']);
        newSectionParticipant.appendChild(classement);
        newSectionParticipant.appendChild(nom);
        newSectionParticipant.appendChild(Score);
        newSectionParticipant.appendChild(Temps);
        newSectionParticipant.appendChild(Ratio);
        console.log(newSectionParticipant.textContent);
        sectionListeParticipantExistant.appendChild(newSectionParticipant);
        console.log(element['Pseudo']);
        compteurclassement+=1;
    }
});



