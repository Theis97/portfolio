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
      </div>
      <div className="overview">
      </div>
      <div className="projects">
      </div>
      <div className="interests">
      </div>
      <div className="contact">
      </div>
    </div>
  );
}

export default App;
