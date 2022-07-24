import React from 'react'

import HeroImage from "../../images/Riko.jpeg";

const Home = () => {


    return (
        <div className='Home' id='/'>
            <div className="hero-img">
                <img src={HeroImage} alt="me" />
            </div>
            <div className="title">
                <h1>Hi, I'm Ricky</h1>
                <h2>Front End Developer</h2>
                <h4>HTML / CSS / Javascript / React</h4>
            <button className='hero-btn'>Download CV</button>
            </div>
            
        </div>
    )
}

export default Home;
