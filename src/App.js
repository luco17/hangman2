import React, { useState } from 'react';

import Figure from './components/Figure';
import Mask from './components/Mask';
import Keys from './components/Keys';

import { getRapper } from './rappers';

import './App.css';
import './index.css';

const gameTitle = 'Code Dojo - Hangman';
const rapper = getRapper();

function App() {

  const [guesses, setGuesses] = useState(new Set());
  const [nWrong, setNWrong] = useState(0);

  const rapperLower = rapper.toLowerCase();

  const handleGuess = (e) => {
    const guess = e.target.innerHTML;
    setGuesses((prev) => new Set([...prev, guess.toLowerCase()]));
  }

  
  console.log(guesses);
  
  const trial = rapperLower.split("");
  const trial2 = rapper.split("");

  return(
    <div id="game">
      <h1>{gameTitle}</h1>
      <Figure />
      <h2>{rapper}</h2>
      <Mask rapper={rapper} guesses={guesses} />
      <Keys handleGuess={handleGuess} guesses={guesses}/>
    </div>
  )
}

export default App;
