import React from 'react'
import { FaFacebook, FaInstagram,FaGithub, FaLinkedinIn  } from "react-icons/fa"



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
                    <h3>GET IN TOUCH:</h3>
                    <h5>Email: ricky23anchores@gmail.com</h5>
                    <h5>London, United Kingdom</h5>
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
