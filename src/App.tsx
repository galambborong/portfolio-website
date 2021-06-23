import React from 'react';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import AnotherPage from './components/AnotherPage';
import { Router, RouteComponentProps, Link } from '@reach/router';

// let LandingPage = (props: RouteComponentProps) => LandingPage;

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">Work in progress</header>
      <Nav />
      <Router>
        <LandingPage path="/" />
        <AnotherPage path="/hello" />
      </Router>
    </div>
  );
}

export default App;
