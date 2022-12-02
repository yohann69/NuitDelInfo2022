let currentWord = '';
    const passWords = ['sida','mst','ist','1994','jd','prep','rick','stop'];
    // const passWordLvl2
    document.addEventListener('keydown',(event)=>{
        let emptyWord = true;        
        currentWord+=event.key;
        for(let passWord of passWords){
            if(!passWord.match(new RegExp('^'+currentWord))){
               
            }else{
                emptyWord = false;
            }
            if(currentWord === passWord){
                if(currentWord === 'sida'){
                    alert('Sida ou syndrome immunodéficitaire acquis est est le stade ultime de l’infection par le virus de l’immunodéficience humaine(VIH)');
                    emptyWord = true;
                }
                if(currentWord === 'mst'){
                    alert('Les maladies sexuellement transmissibles (MST) sont dues à différents micro-organismes (bactéries, virus, champignons ou parasites) et se transmettent lors des rapports sexuels.');
                    emptyWord = true;
                }
                if(currentWord === 'ist'){
                    alert('Les Infections Sexuellement Transmissibles (anciennement appelées Maladies Sexuellement Transmissibles [MST] ou maladies vénériennes) sont des infections provoquées par des microbes (virus, bactéries, parasites) qui peuvent être transmis plus ou moins facilement au cours de relations sexuelles.');
                    emptyWord = true;
                }
                if(currentWord === '1994'){
                    alert('Sidaction désigne à la fois une association de lutte contre le VIH/sida, créée en 1994 et un évènement télévisuel annuel de collecte de dons pour cette association qui finance à parts égales des programmes de recherche et des associations d’aide aux malades et de prévention, en France et à l’étranger');
                    emptyWord = true;
                }
                if(currentWord === 'jd'){
                    alert('Jean Dormont est un médecin et chercheur, il est à l’origine de deux avancées majeures dans la lutte contre le sida en faisant de la qualité des essais thérapeutiques et leur construction commune avec les associations de patients une priorité. Il est décédé le 1er février, à l’âge de 91 ans.');
                    emptyWord = true;
                }
                if(currentWord === 'prep'){
                    alert('La prophylaxie pré-exposition, abrégé PrEP est un traitement médicamenteux qui empêche l’infection par le virus du sida chez des personnes séronégatives');
                    emptyWord = true;
                }
                if(currentWord === 'rick'){
                    document.location.href="https://www.youtube.com/watch?v=GBIIQ0kP15E"; 
                    // let popUp = document.querySelector('#test1');
                    // popUp.style.display = "block";
                    emptyWord = true;
                }
                
                
            }
        }
        if(emptyWord){
            currentWord = '';
        }
    })