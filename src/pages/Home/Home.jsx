import React from 'react'
import { FaFacebook, FaInstagram,FaGithub, FaLinkedin  } from "react-icons/fa"
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
                        <a href="https://www.linkedin.com/in/rickyanchores/" target="_blank" rel="noreferrer">
                            <FaLinkedin style={iconStyle}/>
                        </a>
                    </div>
                    <div className="socialLink">
                        <a href="https://www.instagram.com/rikid_ev/" target="_blank" rel="noreferrer">
                            <FaInstagram style={iconStyle}/>
                        </a>
                    </div>
                    <div className="socialLink">
                        <a href="https://github.com/rickyanchores" target="_blank" rel="noreferrer">
                            <FaGithub style={iconStyle}/>
                        </a>
                    </div>
                </div>
            <button className='hero-btn'>Download CV</button>
            </div>
            
        </div>
    )
}

export default Home;
