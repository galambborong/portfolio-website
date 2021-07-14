import React from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import MusicPage from './components/MusicPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <Router>
        <LandingPage path="/" />
        <AboutPage path="/about" />
        <ProjectsPage path="/projects" />
        <ContactPage path="/contact" />
        <MusicPage path="/music" />
      </Router>
    </div>
  );
}

export default App;
