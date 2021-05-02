import React from 'react';
import './Project.css';
import home from '../../../images/project1.png';
import city from '../../../images/project2.png';
import world from '../../../images/project3.png';
import ProjectDetail from './ProjectDetail';



const projectData = [
    {
        name: 'Home Fix',
        img: home,
        duration: 'April 9, 2021 to April 20, 2021',
        Live:'https://home-fix-265fd.web.app/',
        Code:'https://github.com/mohammadkamrulhasan/assignment11client'
        
    },
    {
        name: 'City Transports Authority',
        img: city,
        duration: 'March 14,2021 to March 21,2021',
        Live:'https://city-transports-authority.web.app/',
        Code:'https://github.com/mohammadkamrulhasan/assignment9'
        
    },
    {
        name: 'World Football League (WFL)',
        img: world,
        duration: 'March 1,2021 to March 7,2021',
        Live:'https://friendly-sinoussi-d6734d.netlify.app/',
        Code:'https://github.com/mohammadkamrulhasan/assignment8'
                
    }
]
const Project = () => {
    return (
        <section className="features-container mt-5 contact">
        <div className="text-center">
            <h1 style={{color: '#1CC7C1'}}>My Project</h1>
            <h2>Work I have done</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
            {
                projectData.map(project => <ProjectDetail project={project} key={project.name}></ProjectDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Project;