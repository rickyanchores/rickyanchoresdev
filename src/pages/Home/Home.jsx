import React from 'react'
import Button from '../../components/Button/Button';

import HeroImage from "../../images/Ricky.jpg";

const Home = () => {

    return (
        <div className='Home'>
            <div className="hero-img">
                <img src={HeroImage} alt="me" />
            </div>
            <div className="title">
            <h1>Hi, I'm Ricky</h1>
            <h2>Front End Developer</h2>
            <h4>HTML / CSS / Javascript / React</h4>
            <Button />
            </div>
        </div>
    )
}

export default Home;
