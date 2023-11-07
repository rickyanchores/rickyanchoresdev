import React from 'react'
//import { FaHtml5, FaCss3, FaJs, FaSass } from "react-icons/fa"



const Card = (card) => {
    return (
        <div className='Card' data-aos="zoom-in-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className="wrapper">
                <img src={card.image} alt="" />
                <h3 className='card-title'>{card.title}</h3>
            </div>
            <p>{card.description}</p>
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
