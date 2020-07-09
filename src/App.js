import React from 'react';
import placeholder from './assets/placeholder.png';
import { ProjectDisplay } from './features/project_display/ProjectDisplay.js';
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
      <section className="title">
        <div>
          <h1>Susan</h1>
          <h1>Theis</h1>
        </div>
        <ul>
          <li>Descriptor 1</li>
          <li>Descriptor 2</li>
          <li>Descriptor 3</li>
        </ul>
      </section>
      <section id="overview" className="overview">
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
        <img src={placeholder} className="portrait" alt="Me" />
      </section>
      <section id="projects" className="projects">
        <ProjectDisplay/>
      </section>
      <section id="interests" className="interests">
        <h2>My (other) Interests</h2>
      </section>
      <section id="contact" className="contact">
        <p> Want to get in touch?</p>
        <p>✉ sttheis97@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
