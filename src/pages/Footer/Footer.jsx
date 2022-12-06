import React from 'react'
import { FaInstagram,FaGithub, FaLinkedinIn  } from "react-icons/fa"



const Footer = () => {

    const iconStyle = {
        color: "white",
        fontSize: "2em",
        margin: "0.5"
    }

    return (
        <div className='Footer'>
            <div className="container">
                <div className="left">
                    <h1 data-aos="fade-up">GET IN TOUCH:</h1>
                    <h4 data-aos="fade-left">Email: ricky23anchores@gmail.com</h4>
                    <h4 data-aos="fade-left">London, United Kingdom</h4>
                </div>
                <div className="right" id='contacts'>
                    <h3>Ricky A</h3>
                    <div className="socialLink">
                        <a href="https://www.linkedin.com/in/rickyanchores/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn style={iconStyle}/>
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
            </div>
            <h5>&copy;2023 Developed by Ricky A</h5>
        </div>
    )
}

export default Footer;

