import React from 'react';
import placeholder from './assets/placeholder.png';
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
        <div className="about">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            condimentum vestibulum odio sed interdum. Pellentesque elementum
            ante at turpis luctus pharetra. Cras lacinia tempor erat, eget egestas
            sem interdum nec. Etiam efficitur in nisi sit amet mattis. Mauris
            pellentesque egestas odio, sed pharetra massa laoreet a. Morbi quis
            odio vel ipsum dapibus ultricies in sit amet dui. Nulla dui arcu,
            pretium facilisis dui vel, auctor finibus nisl. Integer molestie odio
            sit amet leo scelerisque, in fringilla augue tempus. Suspendisse auctor
            sem vitae est condimentum mattis. Vestibulum vehicula orci ligula, nec
            sagittis urna pellentesque in. Donec vel elit eu eros scelerisque sodales.
          </p>
        </div>
        <img src={placeholder} className="portrait" alt="A photo of me" />
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
