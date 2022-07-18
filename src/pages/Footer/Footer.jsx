import React from 'react'
import { FaFacebook  } from "react-icons/fa"



const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="left">
                    <h3>GET IN TOUCH:</h3>
                    <h5>Email: ricky23anchores@gmail.com</h5>
                    <h5>London, United Kingdom</h5>
                    <h5>&copy;2023 Developed by Ricky A</h5>
                </div>
                <div className="right" id='contacts'>
                    <h3>Ricky A</h3>
                    <div className="socialLink">{ FaFacebook }</div>
                    <div className="socialLink">IG</div>
                    <div className="socialLink">TW</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
