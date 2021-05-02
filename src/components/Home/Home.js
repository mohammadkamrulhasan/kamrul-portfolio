import React from 'react';
import Footer from '../Footer/Footer';
import About from '../Header/About/About';
import Blog from '../Header/Blog/Blog';
import Header from '../Header/Header/Header';
import Project from '../Header/Project/Project';
import Resume from '../Header/Resume/Resume';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Project></Project>
            <Blog></Blog>
            <Resume></Resume>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;