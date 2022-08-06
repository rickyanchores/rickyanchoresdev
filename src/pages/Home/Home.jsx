import React from 'react'
import { FaFacebook, FaInstagram,FaGithub  } from "react-icons/fa"
import HeroImage from "../../images/Riko.jpeg";

const Home = () => {


    const iconStyle = {
        color: "black",
        fontSize: "2em",
        margin: "0.5"
    }

    return (
        <div className='Home' id='/'>
            <div className="hero-img">
                <img src={HeroImage} alt="me" />
            </div>
            <div className="title">
                <h1>Hi, I'm Ricky</h1>
                <h2>Front End Developer</h2>
                <h4>HTML / CSS / Javascript / React</h4>
                <div className="sc-container">
                <div className="socialLink">
                        <FaFacebook style={iconStyle}/>
                    </div>
                    <div className="socialLink">
                        <FaInstagram style={iconStyle}/>
                    </div>
                    <div className="socialLink">
                        <FaGithub style={iconStyle}/>
                    </div>
                </div>
            <button className='hero-btn'>Download CV</button>
            </div>
            
        </div>
    )
}

export default Home;
