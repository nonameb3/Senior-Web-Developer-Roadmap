import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function App({ onRouteChange }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button className="btn btn-secondary" type="button" disabled>page1</button>
      <button className="btn btn-primary" onClick={()=>onRouteChange('page2')}>page2</button>
      <button className="btn btn-primary" onClick={()=>onRouteChange('page3')}>page3</button>
    </div>
  );
}

export default App;
