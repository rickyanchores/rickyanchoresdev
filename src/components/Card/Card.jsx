import React from 'react'

const Card = (card) => {
    return (
        <div className='Card'>
            <img src={card.image} alt="" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="btn-container">
                <button className='btn'>VIEW</button>
                <button className='btn'>LIVE</button>
            </div>
        </div>
    )
}

export default Card;
