// function playGroundStart(){
//    const homeScreen =document.getElementById('home-screen');
//    homeScreen.classList.add('hidden');


//    const playGround =document.getElementById('playing-score');
//    playGround.classList.remove('hidden');
// }

// function playGroundStart(){
//    // const homeScreen =document.getElementById('home-screen');
//    // homeScreen.classList.add('hidden');
//    hideElementById('home-screen')

//    // const playGround =document.getElementById('playing-score');
//    // playGround.classList.remove('hidden');
//    showElementById('playing-score')
//    // 
//    contnueusGame()
// }
function handleEventtoValueText(e){
  const pressKeyboard =e.key;
  const currentScreenChange =document.getElementById('screen-change').innerText.toLowerCase();
if(pressKeyboard === currentScreenChange){
  const currentscro = setTextElementValuById('score-current');
   const newScore = currentscro + 1;
   addTextElementByid('score-current', newScore);

   removeBackgroundColor(currentScreenChange)
   continuse()
}
else{
    const currentlife = setTextElementValuById('life-line');
   const newLife = currentlife - 1;
   addTextElementByid('life-line', newLife);
   if(newLife === 0){
      finalscore()
   }
}
   
}
document.addEventListener('keyup', handleEventtoValueText)
function continuse(){
   const alphabetInfo= getToAlphabetIndex();
   // console.log(alphabetInfo);
   const alphaProMax =document.getElementById('screen-change').innerText=alphabetInfo;
   // console.log(alphaProMax);
   setBackgroundColor(alphaProMax);
}

function enterPlay(){
   homeScreenElementFild('home-screen')
   homeScreenElementFild('game-over')
   showPlaygroundelementFild('playing-score');

   addTextElementByid('life-line', 5)
   addTextElementByid('score-current', 0)
   continuse();
}

function finalscore(){
   homeScreenElementFild('playing-score')
   showPlaygroundelementFild('game-over');

  const finalGameScroe= setTextElementValuById('score-current');
  addTextElementByid('grand-final', finalGameScroe);

  const getCirrentAlphaberid =getElementByTextId('screen-change');
  removeBackgroundColor(getCirrentAlphaberid)
 
}





