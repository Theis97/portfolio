import React from 'react';
import styles from './ProjectDisplay.module.css';
import { ProjectCard } from '../project_card/ProjectCard.js';
import mfImg from '../../assets/mf-wallpaper.png'
import doodleImg from '../../assets/doodle3.png'
import cloudImg from '../../assets/clouds.png'
import starsImg from '../../assets/stars.png'

const cards = [
  {
    title: "Project Magic Forest",
    desc: <p>Project Magic Forest is a virtual reality experience currently being
          developed by a small self-led development team including myself. It
          is a multiplayer experience set primarily in a forest with a soothing,
          mystical atmosphere. Our goal is to create a virtual space that promotes
          the user's mental health and helps them make meaningful connections
          with other people. To accomplish this, we are we are working with the
          Unity game engine, Mirror Networking, and Oculus headsets with touch
          controls. Most of my work on the project consists of implementing
          interactions and multiplayer functionality. More information coming soon!</p>,
    imageURL: mfImg
  },
  {
    title: "WebDoodler",
    desc: <p>WebDoodler is a basic drawing app I built from scratch with pure
          JavaScript, HTML, and CSS. I originally created it for my programming
          studio final while in college. It was a solo project, and we had a
          total of 4 weeks to work on it. It features a basic brush, an eraser,
          a line tool, an eyedropper tool, a palette to save colors, variable
          brush sizes, a selection tool, a layer system, an undo button, a few
          basic filters, and a way to save images you made or upload your own
          image to work with. I’m currently tweaking it to make it a bit more
          presentable before sharing it with the world.</p>,
    imageURL: doodleImg
  },
  {
    title: "This Website",
    desc: <p>I built this website myself using React.</p>,
    imageURL: cloudImg
  },
  {
    title: "More to come, in the future...",
    desc: <p>In the meantime, you can check out my <a href="https://github.com/Theis97">Github</a></p>,
    imageURL: starsImg
  }
];

export class ProjectDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isCardActive: false, activeId: 0 };
  }

  cardClicked(id, e) {
    this.setState((state) => ({
      isCardActive: state.activeId !== id ? true : !state.isCardActive,
      activeId: id
    }));
  }

  render() {
    return (
      <div className={styles.display}>
        {cards.map((card, id) => (
          <ProjectCard
            key={id}
            content={card}
            cardClicked={this.cardClicked.bind(this, id)}
            isActive={this.state.isCardActive && (this.state.activeId === id)}
          />)
        )}
      </div>
    );
  }
}
