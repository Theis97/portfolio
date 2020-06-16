import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h2><a href="#overview">Overview</a></h2>
        <h2><a href="#projects">Projects</a></h2>
        <h2><a href="#interests">Interests</a></h2>
        <h2><a href="#contact">Contact</a></h2>
      </nav>
      <div className="title">
        <h1>Susan Theis</h1>
        <ul>
          <li>Descriptor 1</li>
          <li>Descriptor 2</li>
          <li>Descriptor 3</li>
        </ul>
      </div>
      <div id="overview" className="overview">
      </div>
      <div id="projects" className="projects">
      </div>
      <div id="interests" className="interests">
      </div>
      <div id="contact" className="contact">
        <p> Want to get in touch? Email me: sttheis97@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
