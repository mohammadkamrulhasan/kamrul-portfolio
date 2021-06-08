import React from 'react';
import './Project.css';
import home from '../../../images/project1.png';
import hello from '../../../images/hello.png';
import zchat from '../../../images/zchat.png';
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
        name: 'Hello! (Messaging web application)',
        img: hello,
        duration: 'May 28, 2021 to May 30, 2021',
        Live:'https://hello-cc594.web.app/',
        Code:'https://github.com/mohammadkamrulhasan/Hello-'
        
    },
    {
        name: 'Z-Chat (A Chatting App)',
        img: zchat,
        duration: 'June 03, 2021 to June 04, 2021',
        Live:'https://z-chat-cfb4a.web.app/',
        Code:'https://github.com/mohammadkamrulhasan/Z-chat'
                
    }
]
const Project = () => {
    return (
    <section style={{paddingBottom:'30px'}} className="features-container mt-5 contact">
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