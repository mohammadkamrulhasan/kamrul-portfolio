import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({project}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '300px',width:'350px'}} src={project.img} alt="" />
            <h5 className="mt-3 mb-3 ">{project.name}</h5>
            <p className="text-secondary">{project.duration}</p>
            <a class="link-button btn-primary" target="_blank" href={project.Live} rel="noreferrer">Live Link</a><a class="link-button btn-success" target="_blank" href={project.Code} rel="noreferrer">Code Link</a>
            
        </div>
    );
};

export default ProjectDetail;