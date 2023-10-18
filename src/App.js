import React from "react";
import myFace from "./assets/me.png";
import { ProjectDisplay } from "./features/project_display/ProjectDisplay.js";
import "./App.css";
import nav from "./nav.module.css";
import title from "./title.module.css";
import overview from "./overview.module.css";
import projects from "./projects.module.css";
import contact from "./contact.module.css";

function App() {
  const birthday = new Date(868021200000); // July 4th, 1997 8am CST in UTC
  const today = new Date();
  const age = Math.floor((today - birthday) / 31556926000); // convert from milliseconds to years

  return (
    <div className="App">
      <nav className={nav.nav}>
        <h2>
          <a href="#overview">About Me</a>
        </h2>
        <h2>
          <a href="#projects">Projects</a>
        </h2>
        <h2>
          <a href="#contact">Contact</a>
        </h2>
      </nav>
      <section className={title.title}>
        <div className={title.title_text}>
          <h1>Susan Theis</h1>
          <small>Software Developer</small>
        </div>
      </section>
      <section id="overview" className={overview.overview}>
        <h2>About Me</h2>
        <div className={overview.portrait}>
          <img src={myFace} alt="Me" />
        </div>
        <div className={overview.about}>
          <p>
            I'm a {age} year old Software Developer living in Illinois. I got my
            Bachelor's degree in Computer Science from the University of
            Illinois at Urbana-Champaign, where I was also a member of the
            Marching Illini (Go Illini!). In addition to programming, I also
            enjoy drawing, writing, playing video games, and obsessing over my
            favorite shows with my friends.
          </p>
          <p>
            My mission is to create software that makes the world a better
            place, whether that's by providing solutions for tough problems or
            by simply bringing people joy. Recently I've been working on a
            project in NextJS, which you can read more about below.
          </p>
        </div>
      </section>
      <section id="projects" className={projects.projects}>
        <h2>My Projects</h2>
        <ProjectDisplay />
      </section>
      <section id="contact" className={contact.contact}>
        <h2>Want to get in touch?</h2>
        <ul>
          <li>
            ✉ <a href="mailto:sttheis97@gmail.com">sttheis97@gmail.com</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/susan-theis-260465187/">
              Linkedin
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
