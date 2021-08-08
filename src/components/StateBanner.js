import React from 'react'

import Keys from './Keys';

import { gameReset } from '../helpers/helpers';

const StateBanner = ({winningWord, guesses, nWrong, rapper, handleGuess, winChecker}) => {
    const status = winChecker(winningWord, guesses, nWrong);

    switch(status) {
      case "lose": 
        return (
          <div>
            <h2>{`You lost! The rapper was ${rapper}`}</h2>
            <button onClick={gameReset}>New Game</button>
          </div>
        );
      case "win":
        return (
          <div>
            <h2>{`Congratulations, you won!`}</h2>
            <button onClick={gameReset}>New Game</button>
          </div>
        );
      default:
        return <Keys handleGuess={handleGuess} guesses={guesses}/>
    }
  }

export default StateBanner    