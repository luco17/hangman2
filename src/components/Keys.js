import React from 'react'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Keys = ({ handleGuess }) => {
    return (
        <div>
            { alphabet.map( (letter, key) => {
                return(
                    <button className="letter" key={key} 
                        onClick={handleGuess}>{ letter.toUpperCase() }</button>
                )
            })}
        </div>
    )
}

export default Keys
