import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaSass, FaReact, FaFigma, FaBootstrap  } from "react-icons/fa"

const Badges = () => {

    const iconStyle = {
        color: "white",
        fontSize: "2.5em",
        margin: "0.5"
    }

  return (
    <div className='Badges'>
        <h3>My Skills</h3>
        <div className="container" data-aos="fade-in">
            <i className="skill">
                <FaHtml5 style={iconStyle}/>
            </i>
            <i className="skill">
                <FaCss3 style={iconStyle}/>
            </i>
            <i className="skill">
                <FaJs style={iconStyle}/>
            </i>
            <i className="skill">
                <FaSass style={iconStyle}/>
            </i>
            <i className="skill">
                <FaBootstrap style={iconStyle}/>
            </i>
            <i className="skill">
                <FaReact style={iconStyle}/>
            </i>
            <i className="skill">
                <FaFigma style={iconStyle}/>
            </i>
        </div>
    </div>
  )
}

export default Badges;