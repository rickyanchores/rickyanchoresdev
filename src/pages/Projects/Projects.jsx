import React from 'react'
import Card from '../../components/Card/Card'

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
                <Card title={card[0].title} description={card[0].description}/>
                <Card title={card[1].title} description={card[1].description}/>
                <Card title={card[2].title} description={card[2].description}/>
            </div>
        </div>
    )
}

export default Projects
