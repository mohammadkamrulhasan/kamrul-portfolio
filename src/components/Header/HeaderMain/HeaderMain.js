import React from 'react';
import profile from '../../../images/profile.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height:'600px',marginTop:'60px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>I'm  <br/> Kamrul Hasan</h1>
                <p >from Bangladesh, Dhaka. I have rich experience in web site design and development.I love to talk with you about our unique.</p>
                <a class="link-button btn-primary" target="_blank" href="https://drive.google.com/file/d/10Y8b85ySY0UQTe3qpjvnrQaNQ-8flICh/view?usp=sharing" rel="noreferrer">Download Resume</a>
                    
            </div>
            <div className="col-md-6">
                <img style={{height:'600px'}} src={profile} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;