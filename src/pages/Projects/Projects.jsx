import React from 'react'

import Card from '../../components/Card/Card'


// IMPORT IMAGES
import imageOne from "../../images/Citypx.jpg";
import imageTwo from "../../images/museum.png";
import imageThree from "../../images/Biotrkr.png";
import imageFour from "../../images/JSWeather.png";



const Projects = (props) => {

    const card = [
        {   
            title: "CiTYPiX",
            description: "Blog site with minimal design",
            code: "https://github.com/rickyanchores/CiTYPiX",
            live: "https://rickyanchores.github.io/CiTYPiX/"
        },
        {
            title: "Museum",
            description: "Moden Minimalism Design",
            code: "https://github.com/rickyanchores/museum",
            live: "https://mus-eum.netlify.app/"
        },
        {
            title: "Biotrkr",
            description: "BMR / BMI calculator",
            code: "https://github.com/rickyanchores/Biotrkr",
            live: "https://main.d1l6nwyn8to2ht.amplifyapp.com/"
        },
        {
            title: "JS Weather",
            description: "Weather website with Openweathermap API",
            code: "https://github.com/rickyanchores/Jsweather",
            live: "https://jsweatherapi.netlify.app/"
        }
    ]

    return (
        <div className='Projects' id='projects'>
            <h3 className='title' data-aos="fade-up">P R O J E C T S</h3>
            <div className="proj-container" data-aos="fade-left">
                <Card image={imageOne} title={card[0].title} description={card[0].description} code={card[0].code} live={card[0].live}/>
                <Card image={imageTwo} title={card[1].title} description={card[1].description} code={card[1].code} live={card[1].live}/>
                <Card image={imageThree} title={card[2].title} description={card[2].description} code={card[2].code} live={card[2].live}/>
                <Card image={imageFour} title={card[3].title} description={card[3].description} code={card[3].code} live={card[3].live}/>
            </div>
        </div>
    )
}

export default Projects;