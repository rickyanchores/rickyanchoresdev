import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaSass, FaReact, FaFigma, FaBootstrap, FaGitAlt  } from "react-icons/fa"

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
                <p>html</p>
            </i>
            <i className="skill">
                <FaCss3 style={iconStyle}/>
                <p>css</p>
            </i>
            <i className="skill">
                <FaJs style={iconStyle}/>
                <p>javascript</p>
            </i>
            <i className="skill">
                <FaSass style={iconStyle}/>
                <p>sass</p>
            </i>
            <i className="skill">
                <FaBootstrap style={iconStyle}/>
                <p>bootstrap</p>
            </i>
            <i className="skill">
                <FaReact style={iconStyle}/>
                <p>react js</p>
            </i>
            <i className="skill">
                <FaFigma style={iconStyle}/>
                <p>figma</p>
            </i>
            <i className="skill">
                <FaGitAlt style={iconStyle}/>
                <p>Git</p>
            </i>
        </div>
    </div>
  )
}

export default Badges;