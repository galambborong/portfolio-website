import React from 'react';
import Nav from './components/Nav';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with TypeScript
        </a>
      </header>
      <Nav />
    </div>
  );
}

export default App;
