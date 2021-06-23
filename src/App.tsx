import React from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">Work in progress</header>
      <Nav />
      <Router>
        <LandingPage path="/" />
        <About path="/about" />
        <Projects path="/projects" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
