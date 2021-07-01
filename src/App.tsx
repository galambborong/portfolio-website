import React from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Music from './components/Music';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <Router>
        <LandingPage path="/" />
        <About path="/about" />
        <Projects path="/projects" />
        <Contact path="/contact" />
        <Music path="/music" />
      </Router>
    </div>
  );
}

export default App;
