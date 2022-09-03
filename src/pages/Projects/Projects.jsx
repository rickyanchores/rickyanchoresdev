import React from 'react'

import Card from '../../components/Card/Card'

// IMPORT IMAGES
import imageOne from "../../images/Citypx.jpg";
import imageTwo from "../../images/kahoii.jpg";
import imageThree from "../../images/zenkana.jpg";


const Projects = (props) => {

    const card = [
        {   
            title: "Project One",
            description: "This is project one",
            code: "https://github.com/rickyanchores/CiTYPiX",
            live: "https://rickyanchores.github.io/CiTYPiX/"
        },
        {
            title: "Project Two",
            description: "This is project two",
            code: "https://github.com/rickyanchores/Kahoii",
            live: "https://rickyanchores.github.io/Kahoii/"
        },
        {
            title: "Project Three",
            description: "This is project three",
            code: "https://github.com/rickyanchores/zenkana",
            live: "https://rickyanchores.github.io/zenkana/"
        }
    ]

    return (
        <div className='Projects' id='projects'>
            <h3 className='title'>Projects</h3>
            <div className="proj-container">
                <Card image={imageOne} title={card[0].title} description={card[0].description} code={card[0].code} live={card[0].live}/>
                <Card image={imageTwo} title={card[1].title} description={card[1].description} code={card[1].code} live={card[1].live}/>
                <Card image={imageThree} title={card[2].title} description={card[2].description} code={card[2].code} live={card[2].live}/>
            </div>
        </div>
    )
}

export default Projects;
