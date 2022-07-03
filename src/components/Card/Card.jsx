import React from 'react'

const Card = (card) => {
    return (
        <div className='Card'>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </div>
    )
}

export default Card;
