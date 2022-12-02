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
        photoprofil.src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-mIwfulTIC1JZ3BmgtnNVhGg6/user-xyudsXOgh2REhPLgIl6uWAUU/img-LxjNLjCL0l2JLcdofxr1fpbT.png?st=2022-12-02T00%3A38%3A16Z&se=2022-12-02T02%3A38%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-01T18%3A29%3A11Z&ske=2022-12-02T18%3A29%3A11Z&sks=b&skv=2021-08-06&sig=GgetqHfoogbPTtMZUGZ6IEZCF4A7gA2lc/Yt34VjM60%3D"
        classement.textContent=compteurclassement+'-';
        nom.textContent=element['Pseudo'];
        Score.textContent=element['Score'];
        Temps.textContent=element['Temps'];
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



