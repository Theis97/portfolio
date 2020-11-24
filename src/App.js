import React from 'react';
import myFace from './assets/me.png';
import { ProjectDisplay } from './features/project_display/ProjectDisplay.js';
import './App.css';

function App() {
  const birthday = new Date(868021200000); // July 4th, 1997 8am CST in UTC
  const today = new Date();
  const age = Math.floor((today - birthday)/31556926000); // convert from milliseconds to years

  return (
    <div className="App">
      <nav className="nav">
        <h2><a href="#overview">Overview</a></h2>
        <h2><a href="#projects">Projects</a></h2>
        <h2><a href="#contact">Contact</a></h2>
      </nav>
      <section className="title">
        <div className="title-text">
          <h1>Susan Theis</h1>
          <small>Software Developer</small>
        </div>
      </section>
      <section id="overview" className="overview">
        <div className="portrait">
          <img src={myFace} alt="Me" />
        </div>
        <div className="about">
          <h2>About me</h2>
          <p>
            I'm a {age} year old Software Developer living in the Chicago suburbs.
            I got my Bachelor's degree in Computer Science from the University
            of Illinois at Urbana-Champaign, where I was also a member of the
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
        <h2>My Projects</h2>
        <ProjectDisplay/>
      </section>
      <section id="contact" className="contact">
        <h2>Want to get in touch?</h2>
        <ul>
          <li>✉: <a href="mailto:sttheis97@gmail.com">sttheis97@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/susan-theis-260465187/">Linkedin</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
