import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaSass } from "react-icons/fa"



const Card = (card) => {
    return (
        <div className='Card'>
            <img src={card.image} alt="" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="tech-stack">
               <i><FaHtml5></FaHtml5></i>
               <i><FaCss3></FaCss3></i>
               <i><FaJs></FaJs></i>
               <i><FaSass></FaSass></i>
            </div>
            <div className="btn-container">
                <button className='btn'>
                    <a href={card.code} target="_blank" rel='noreferrer'>CODE</a>
                </button>
                <button className='btn'>
                    <a href={card.live} target="_blank" rel='noreferrer'>LIVE</a>
                </button>
            </div>
        </div>
    )
}

export default Card;
