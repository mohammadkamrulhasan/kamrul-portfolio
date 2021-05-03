import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-nav-scroll ">
  <div class="container-fluid ">
  <Link className="nav-link ms-5 active" to="/">Kamrul</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ">
          <Link className="nav-link ms-5 active" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link ms-5" to="/project">Project</Link>
        </li>
        <li class="nav-item">          
          <Link className="nav-link ms-5" to="/blog">Blog</Link>
        </li>
        <li class="nav-item">          
          <Link className="nav-link ms-5" to="/resume">Resume</Link>
        </li>
        <li class="nav-item">          
          <Link className="nav-link ms-5" to="/about">About</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;