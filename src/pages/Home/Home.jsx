import React from 'react'
import { FaInstagram,FaGithub, FaLinkedin  } from "react-icons/fa"
import HeroImage from "../../images/RikoAI.jpeg";

const Home = () => {


    const iconStyle = {
        color: "black",
        fontSize: "2em",
        margin: "0.5"
    }

    return (
        <div className='Home' id='/'>
            <div className="hero-img" data-aos="fade-left">
                <img src={HeroImage} alt="me" />
            </div>
            <div className="title" data-aos="fade-up">
                <h1 >Hi, I'm Ricky</h1>
                <h2 data-aos-duration="8000" data-aos="fade-left">Front End Developer</h2>
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
            <button className='hero-btn'><a href="https://drive.google.com/file/d/1sHxpZSMv9tOrx7qZ_1yfkeZIUNbIxqPe/view?usp=drive_link" target="_blank" rel='noreferrer'>Download CV</a></button>
            </div>
            
        </div>
    )
}

export default Home;


