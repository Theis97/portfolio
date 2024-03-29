import React from "react";
import styles from "./ProjectDisplay.module.css";
import { ProjectCard } from "../project_card/ProjectCard.js";
import mfImg from "../../assets/mf-wallpaper.png";
import doodleImg from "../../assets/doodle3.png";
import cloudImg from "../../assets/clouds.png";
import starsImg from "../../assets/stars.png";

const cards = [
  {
    title: "Upcoming NextJS Project",
    desc: (
      <ul>
        <li>
          I'm currently working on a NextJS project! It's still in the early
          stages right now, but expect to hear more info soon!
        </li>
      </ul>
    ),
  },
  {
    title: "Project Magic Forest",
    desc: (
      <ul>
        <li>
          Magic Forest was a multiplayer virtual reality game with a soothing,
          mystical atmosphere where players could reflect and store their
          thoughts while connecting with their friends.
        </li>
        <li>
          The project was a collaboration between{" "}
          <a href="http://dangbrandon.com/">Brandon Dang</a>,{" "}
          <a href="http://dawnuxi.com/">Dawn Nguyen</a>, and myself.
        </li>
        <li>
          Our goal was to create a virtual space that promoted users' mental
          health and helped them make meaningful connections with other people.
        </li>
        <li>The project was developed with Unity and Mirror Networking.</li>
        <li>
          Most of my work on the project consisted of implementing game
          mechanics and multiplayer functionality.
        </li>
        <li>We are no longer actively working on this project.</li>
      </ul>
    ),
    imageURL: mfImg,
  },
  {
    title: "WebDoodler",
    desc: (
      <ul>
        <li>
          WebDoodler is a little drawing app I built from scratch with pure
          JavaScript, HTML, and CSS.
        </li>
        <li>
          I originally created it for my programming studio final while in
          college. It was a solo project, and we had a total of 4 weeks to work
          on it.
        </li>
        <li>
          It features a basic brush, an eraser, a line tool, an eyedropper tool,
          a palette to save colors, variable brush sizes, a selection tool, a
          layer system, an undo button, a few basic filters, and a way to save
          images you made or upload your own image to work with.
        </li>
        <li>
          You can find the source code for it{" "}
          <a href="https://github.com/Theis97/Webdoodler">here</a>.
        </li>
      </ul>
    ),
    imageURL: doodleImg,
  },
  {
    title: "This Website",
    desc: (
      <ul>
        <li>
          I built this site with React. Most of the animations for these panels
          use <a href="https://www.react-spring.io/">react-spring</a>.
        </li>
        <li>
          I still consider this site to be a work in progress, although I've had
          little time to work on it lately.
        </li>
        <li>
          You can check out the source code for it{" "}
          <a href="https://github.com/Theis97/portfolio">here</a> if you'd like.
        </li>
      </ul>
    ),
    imageURL: cloudImg,
  },
  {
    title: "More to come, in the future...",
    desc: (
      <ul>
        <li>
          Expect to see more projects listed here in the future! In the
          meantime, why not check out{" "}
          <a href="https://github.com/Theis97">my Github?</a> It has some of the
          code from the projects listed here, as well as smaller things that
          didn't make the cut for this showcase.
        </li>
      </ul>
    ),
    imageURL: starsImg,
  },
];

export class ProjectDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCardActive: false, activeId: 0 };
  }

  cardClicked(id, e) {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "DIV") {
      this.setState((state) => ({
        isCardActive: state.activeId !== id ? true : !state.isCardActive,
        activeId: id,
      }));
    }
  }

  render() {
    return (
      <div className={styles.display}>
        {cards.map((card, id) => (
          <ProjectCard
            key={id}
            content={card}
            cardClicked={this.cardClicked.bind(this, id)}
            isActive={this.state.isCardActive && this.state.activeId === id}
          />
        ))}
      </div>
    );
  }
}
