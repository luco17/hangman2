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

  const [guesses, setGuesses] = useState([]);
  const [nWrong, setNWrong] = useState(0);

  const rapperLower = rapper.toLowerCase();

  const handleGuess = (e) => {
    const guess = e.target.innerHTML;
    setGuesses((prev) => [...prev, guess.toLowerCase()]);
    
  }

  console.log(guesses);
  console.log(rapperLower);

  return(
    <div id="game">
      <h1>{gameTitle}</h1>
      <Figure />
      <h2>{rapper}</h2>
      <Mask rapper={rapper} />
      <Keys handleGuess={handleGuess}/>
    </div>
  )
}

export default App;
