// function startPlay(){
//       const homeScreen = document.getElementById('start-game');
//       homeScreen.classList.add('hidden');
//       const playGround = document.getElementById('play-ground');
//       playGround.classList.remove('hidden');
// }
function continueGame(){
      const alphabet = getRandomAlphabet()
      const currentAlphabetElement = document.getElementById('currentAlphabet');
      currentAlphabetElement.innerText = alphabet;
      setBackgroundById(alphabet);
}

function startPlay(){
      hideElement('start-game');
      showElement('play-ground');
      hideElement('score');
      setElementValue('current-life', 5);
      removeBackgroundById('play-ground');
      setElementValue('current-score' , 0);
      continueGame()
}
function handleKeyBoardPress(event){
      const playerPressed = event.key;
      if(playerPressed === 'Escape'){
            gameOver();
      }
      // console.log('button press');
      const alphabetElement = document.getElementById('currentAlphabet')
      const matchingElement = alphabetElement.innerText;
      const expectedAlphabet = matchingElement.toLowerCase();
      // console.log(playerPressed, expectedAlphabet);

      if(playerPressed === expectedAlphabet){
            removeBackgroundById(expectedAlphabet);
            continueGame();

            // const currentScoreElement = document.getElementById('current-score')
            // const currentScoreText = currentScoreElement.innerText;
            // const currentScore = parseInt(currentScoreText);
            const currentScore = getTextElement('current-score');
            const finalScore = currentScore + 1;
            setElementValue('current-score' , finalScore);
      }else{
            // const currentLifeElements = document.getElementById('current-life');
            // const currentLifeText = currentLifeElements.innerText;
            const currentLifeText = getTextElement('current-life');
            const currentLife = parseInt(currentLifeText);
            const finalLife = currentLife - 1;
            setElementValue('current-life',finalLife);

            if(finalLife === 0){
                  gameOver();
            }
            
      }
}
function gameOver() {
      hideElement("play-ground");
      showElement("score");
      const lastScore = document.getElementById('current-score');
      const totalScore = lastScore.innerText;
      setElementValue( 'last-score',totalScore);
      const currentAlphabet = getAlphabetText('currentAlphabet');
      removeBackgroundById(currentAlphabet);
    }

document.addEventListener('keyup',handleKeyBoardPress);