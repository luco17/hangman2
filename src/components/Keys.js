import React from 'react'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Keys = ({ handleGuess, guesses }) => {
    return (
        <div>
            { alphabet.map( (letter, key) => {
                return(
                    <button 
                        className="letter" 
                        key={key} 
                        onClick={handleGuess}
                        disabled={guesses.has(letter)}
                    >
                        { letter.toUpperCase() }
                    </button>
                )
            })}
        </div>
    )
}

export default Keys
