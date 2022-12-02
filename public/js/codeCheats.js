let currentWord = '';
    const passWords = ['sida','mst','ist','1994','jd','prep','LGBTQQI2SAA',''];
    // const passWordLvl2
    document.addEventListener('keydown',(event)=>{
        let emptyWord = true;        
        currentWord+=event.key;
        for(let passWord of passWords){
            if(!passWord.match(new RegExp('^'+currentWord))){
                console.log('does not match');
                console.log(`== > ${currentWord}`)
            }else{
                emptyWord = false;
            }
            if(currentWord === passWord){
                if(currentWord === 'sida'){
                    alert('sida');
                    console.log('full match');
                    emptyWord = true;
                }
                if(currentWord === 'mst'){
                    alert('mst');
                    console.log('full match');
                    emptyWord = true;
                }
                if(currentWord === 'ist'){
                    alert('ist');
                    console.log('full match');
                    emptyWord = true;
                }
                if(currentWord === '1994'){
                    alert('1994');
                    console.log('full match');
                    emptyWord = true;
                }
                if(currentWord === 'jd'){
                    alert('JD');
                    console.log('full match');
                    emptyWord = true;
                }
                if(currentWord === 'prep'){
                    alert('PrEP');
                    console.log('full match');
                    emptyWord = true;
                }
                if(currentWord === 'LGBTQQI2SAA'){
                    alert('LGBTQQI2SAA');
                    console.log('full match');
                    emptyWord = true;
                }                                
            }
        }
        if(emptyWord){
            console.log('EMPTY')
            currentWord = '';
        }
    })