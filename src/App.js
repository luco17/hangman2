import React, { useState } from 'react';

import Figure from './components/Figure';
import Mask from './components/Mask';
import Keys from './components/Keys';

import { getRapper } from './rappers';
import { winChecker } from './helpers/helpers';

import './App.css';
import './index.css';

const gameTitle = 'Code Dojo - Hangman';

const rapper = getRapper();

function App() {
  
  const [guesses, setGuesses] = useState(new Set());
  const [nWrong, setNWrong] = useState(0);
  
  const rapperLower = rapper.toLowerCase();
  const winningWord = rapperLower.match(/[A-Za-z]/g); 
  
  const handleGuess = (e) => {
    const guess = e.target.innerHTML;
    setGuesses((prev) => new Set([...prev, guess.toLowerCase()]));
    handleWrong(guess);
  }
  
  const handleWrong = (guess) => {
    const guessLCase = guess.toLowerCase();
    return rapperLower.includes(guessLCase) ? 0 : setNWrong(nWrong + 1)
  }

  function StateBanner({winningWord, guesses, nWrong, rapper}) {
    const status = winChecker(winningWord, guesses, nWrong);

    if (status !== "") {
      return (
        <div>
          <h2>{status}</h2>
          <h3>{`the rapper was ${rapper}`}</h3>
          <button onClick={gameReset}>New Game</button>
        </div>
      );
    } return <Keys handleGuess={handleGuess} guesses={guesses}/>
  }

  function gameReset() {
    window.location.reload();
  }

  return(
    <div id="game">
      
      <h1>{gameTitle}</h1>
      <Figure nWrong={nWrong} />
      <Mask rapper={rapper} guesses={guesses} />
      <StateBanner 
        winningWord={winningWord} 
        guesses={guesses} 
        nWrong={nWrong}
        rapper={rapper}
      />
    </div>
  )
}

export default App;
