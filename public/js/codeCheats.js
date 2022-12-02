let currentWord = '';
const passWordsLvl1 = ['sida','opera','test','machin'];

document.addEventListener('keydown',(event)=>{
    let emptyWord = true;        
    currentWord+=event.key;
    for(let passWord of passWordsLvl1){
        if(!passWord.match(new RegExp('^'+currentWord))){
            console.log('does not match');
            console.log(`== > ${currentWord}`)
        }else{
            emptyWord = false;
        }
        if(currentWord === passWord){
            console.log('full match')
            alert('DONE')
            emptyWord = true;
        }
    }
    if(emptyWord){
        console.log('EMPTY')
        currentWord = '';
    }
    console.log(currentWord)
})
