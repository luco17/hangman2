import React from 'react'

const Mask = ({ rapper }) => {
    const maskedRapper = rapper.replace(/[A-Za-z]/g, "_").split('');
    
    return (
        <div className="mask" id="mask">
            { maskedRapper.map((letter, i) => {
                return(
                    <span key={i}>{ letter }</span>
                )
            })}
        </div>
    )
}

export default Mask
