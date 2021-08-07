import React from 'react'

    const Mask = ({ rapper, guesses }) => {
        
        function letterChecker (ltr) {
            if (!!ltr.match(/[A-Za-z]/)) {
            return (guesses.has(ltr.toLowerCase()) ? ltr : "_");
            } return " "
        } 
        
        const rapArray = rapper.split("");

        return (
            <div className="mask" id="mask">
                { rapArray.map((ltr, i) => {
                    return(
                        <span key={i}>{ letterChecker(ltr) }</span>
                    )
                })}
            </div>
        )
    }

    export default Mask
