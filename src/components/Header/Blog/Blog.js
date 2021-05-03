import React from 'react';
import BlogPost from './BlogPost';
import './Blog.css';

const blogData = [
    {
        title : 'React -a JavaScript Framework',
        description : 'Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.',           
        date : 'January 2021'
    },
    {
        title : 'How can you make a simple website with Bootstrap',
        description : 'Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon. ',           
        date : 'March 2021'
    },
    {
        title : 'Learn how to maintain a web site',
        description : 'Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon.Blog is comming soon. ',              
        date : 'April 2021'
    },
]

const Blog = () => {
    return (
        <section style={{ marginTop: '40px'}} className="blogs my-5">
        <div  className="container">
            <div className="section-header text-center">
                 <h5 className="text-primary text-uppercase">My blog</h5>
                 <h1>From My Blog News</h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Blog;