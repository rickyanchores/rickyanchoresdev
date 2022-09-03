import React from 'react'

const Card = (card) => {
    return (
        <div className='Card'>
            <img src={card.image} alt="" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="btn-container">
                <button className='btn'>
                    <a href={card.code} target="_blank">VIEW</a>
                </button>
                <button className='btn'>
                    <a href={card.live} target="_blank">LIVE</a>
                </button>
            </div>
        </div>
    )
}

export default Card;
