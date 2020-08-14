import React from 'react';
import placeholder from './assets/placeholder.png';
import { ProjectDisplay } from './features/project_display/ProjectDisplay.js';
import './App.css';

function App() {
  const birthday = new Date(868021200000); // July 4th, 1997 8am CST in UTC
  console.log(birthday);
  const today = new Date();
  const age = Math.floor((today - birthday)/31556926000); // convert from milliseconds to years

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
        <img src={placeholder} className="portrait" alt="Me" />
        <div className="about">
          <h2>About me</h2>
          <p>
            I'm a {age} year old Software Developer living in the Chicago suburbs.
            I got my Bachelor's degree in Computer Science from the University
            of Illinois at Urbana-Champaign, where I was also a memeber of the
            Marching Illini (Go Illini!). In addition to programming, I also enjoy
            drawing, writing, playing video games, and obsessing over my favorite
            shows with my friends.
          </p>
          <p>
            My mission is to create software that makes the world a better place,
            whether that's by providing solutions for tough problems or by simply
            bringing people joy. Lately, I've been working with a small team to
            create a virtual reality experience that aims to promote the user's
            mental health and let them connect with other people. You can read
            more about it in the projects section.
          </p>
        </div>
      </section>
      <section id="projects" className="projects">
        <ProjectDisplay/>
      </section>
      <section id="interests" className="interests">
        <h2>My (other) Interests</h2>
      </section>
      <section id="contact" className="contact">
        <p>Want to get in touch?</p>
        <p>✉ sttheis97@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
