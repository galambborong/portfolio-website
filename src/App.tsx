import React from 'react';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AnotherPage';
import { Router } from '@reach/router';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">Work in progress</header>
      <Nav />
      <Router>
        <LandingPage path="/" />
        <AboutMe path="/hello" />
      </Router>
    </div>
  );
};

export default App;
