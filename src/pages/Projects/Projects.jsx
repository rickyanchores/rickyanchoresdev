import React from 'react'

import Card from '../../components/Card/Card'



// IMPORT IMAGES
import imageOne from "../../images/Citypx.jpg";
import imageTwo from "../../images/kahoii.jpg";
import imageThree from "../../images/zenkana.jpg";
import imageFour from "../../images/JSWeather.png";
import imageFive from "../../images/museum.png";
import imageSix from "../../images/Biotrkr.png";

const Projects = (props) => {

    const card = [
        {   
            title: "CiTYPiX",
            description: "Blog site with minimal design completely made from scratch HTML CSS and JS",
            code: "https://github.com/rickyanchores/CiTYPiX",
            live: "https://rickyanchores.github.io/CiTYPiX/"
        },
        {
            title: "Kahoii",
            description: "Blog website with minimal and cool motions",
            code: "https://github.com/rickyanchores/Kahoii",
            live: "https://rickyanchores.github.io/Kahoii/"
        },
        {
            title: "Zenkana",
            description: "custom website made with REACT",
            code: "https://github.com/rickyanchores/zenkana",
            live: "https://rickyanchores.github.io/zenkana/"
        },
        {
            title: "JS Weather",
            description: "Simple website with Openweathermap API",
            code: "https://github.com/rickyanchores/Jsweather",
            live: "https://jsweatherapi.netlify.app/"
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
        }

    ]

    return (
        <div className='Projects' id='projects'>
            <h3 className='title'>Projects</h3>
            <div className="proj-container" data-aos="fade-in">
                <Card image={imageOne} title={card[0].title} description={card[0].description} code={card[0].code} live={card[0].live}/>
                <Card image={imageTwo} title={card[1].title} description={card[1].description} code={card[1].code} live={card[1].live}/>
                <Card image={imageThree} title={card[2].title} description={card[2].description} code={card[2].code} live={card[2].live}/>
                <Card image={imageFour} title={card[3].title} description={card[3].description} code={card[3].code} live={card[3].live}/>
                <Card image={imageFive} title={card[4].title} description={card[4].description} code={card[4].code} live={card[4].live}/>
                <Card image={imageSix} title={card[5].title} description={card[5].description} code={card[5].code} live={card[5].live}/>
            </div>
        </div>
    )
}

export default Projects;
