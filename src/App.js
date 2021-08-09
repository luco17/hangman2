import React, { useState } from 'react';

import Figure from './components/Figure';
import githubLogo from './githubLogo.png';
import Mask from './components/Mask';
import StateBanner from './components/StateBanner';

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
    setGuesses((prev) => new Set([...prev, guess]));
    handleWrong(guess);
  }
  
  const handleWrong = (guess) => {
    const guessLCase = guess.toLowerCase();
    return rapperLower.includes(guessLCase) ? 0 : setNWrong(nWrong + 1)
  }

  return(
    <div>
      <div id="game">
        
        <h1>{gameTitle}</h1>
        <h2>Guess the rapper</h2>
        <Figure nWrong={nWrong} />
        {/* <h2>{rapper}</h2> */}
        <h3>Number of guesses remaining: {6 - nWrong}</h3>
        <Mask rapper={rapper} guesses={guesses} />
        <StateBanner 
          winningWord={winningWord} 
          guesses={guesses} 
          nWrong={nWrong}
          rapper={rapper}
          winChecker={winChecker}
          handleGuess={handleGuess}
        />

      </div>

      <div id="game">
        <footer>
          <a href="https://github.com/luco17/hangman2" target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="sharing logo" />
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App;
