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
            description: "This is project one"
        },
        {
            title: "Project Two",
            description: "This is project two"
        },
        {
            title: "Project Three",
            description: "This is project three"
        }
    ]

    return (
        <div className='Projects'>
            <h3>Projects</h3>
            <div className="proj-container">
                <Card image={imageOne} title={card[0].title} description={card[0].description}/>
                <Card image={imageTwo} title={card[1].title} description={card[1].description}/>
                <Card image={imageThree} title={card[2].title} description={card[2].description}/>
            </div>
        </div>
    )
}

export default Projects;
