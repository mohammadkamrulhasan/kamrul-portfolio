import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Project from './components/Header/Project/Project';
import About from './components/Header/About/About';
import Home from './components/Home/Home';
import Blog from './components/Header/Blog/Blog';
import Resume from './components/Header/Resume/Resume';
import Navbar from './components/Header/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project/>
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
