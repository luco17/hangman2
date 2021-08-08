import React from 'react'

import Keys from './Keys';

import { gameReset } from '../helpers/helpers';

const StateBanner = ({winningWord, guesses, nWrong, rapper, handleGuess, winChecker}) => {
    const status = winChecker(winningWord, guesses, nWrong);

    switch(status) {
      case "lose": 
        return (
          <div>
            <h3>{`You lost! The rapper was ${rapper}`}</h3>
            <button className="game-reset" onClick={gameReset}>New Game</button>
          </div>
        );
      case "win":
        return (
          <div>
            <h3>{`Congratulations, you won!`}</h3>
            <button className="game-reset" onClick={gameReset}>New Game</button>
          </div>
        );
      default:
        return <Keys handleGuess={handleGuess} guesses={guesses}/>
    }
  }

export default StateBanner    