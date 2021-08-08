import React from 'react'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Keys = ({ handleGuess, guesses }) => {
    return (
        <div className='hangman-btns'>
            { alphabet.map( (letter, key) => {
                return(
                    <button 
                        className="letter" 
                        key={key} 
                        onClick={handleGuess}
                        disabled={guesses.has(letter)}
                    >
                        { letter }
                    </button>
                )
            })}
        </div>
    )
}

export default Keys
