import React from 'react';

const BlogPost = (props) => {
    const {title, description, date} = props.blog;
    return (
        <div className="card shadow-sm">
        <div className="card-header d-flex  align-items-center">
            
            <div>
                
                <p className="m-0">{date}</p>
            </div>
        </div>
        <div className="card-body">
            <h5>{title}</h5>
            <p className="card-text text-secondary mt-4">{description}</p>
        </div>
        
   </div>
    );
};

export default BlogPost;