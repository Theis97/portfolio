import React from 'react';
import styles from './ProjectDisplay.module.css';
import { ProjectCard } from '../project_card/ProjectCard.js';
import mfpic from '../../assets/magic-forest.jpg'
import webpic from '../../assets/webdoodler.png'
import placeholder from '../../assets/placeholder.png'

const cards = [
  {
    title: "Project Magic Forest",
    desc: `Project Magic Forest is a virtual reality experience currently being
          developed by a small self-led development team including myself. It
          is a multiplayer experience set primarily in a forest with a soothing,
          mystical atmosphere. Our goal is to create a virtual space that promotes
          the user's mental health and helps them make meaningful connections
          with other people. To accomplish this, we are we are working with the
          Unity game engine, Mirror Networking, and Oculus headsets with touch
          controls. Most of my work on the project consists of implementing
          interactions and multiplayer functionality. More information coming soon!`,
    imageURL: mfpic
  },
  {
    title: "WebDoodler",
    desc: `WebDoodler is a basic drawing app I built from scratch with pure
          JavaScript, HTML, and CSS. I originally created it for my programming
          studio final while in college. It was a solo project, and we had a
          total of 4 weeks to work on it. It features a basic brush, an eraser,
          a line tool, an eyedropper tool, a palette to save colors, variable
          brush sizes, a selection tool, a layer system, an undo button, a few
          basic filters, and a way to save images you made or upload your own
          image to work with. I’m currently tweaking it to make it a bit more
          presentable before sharing it with the world.`,
    imageURL: webpic
  },
  {
    title: "This Website",
    desc: "I built this website myself using React.",
    imageURL: placeholder
  },
  {
    title: "More to come, in the future...",
    desc: `In the meantime, you can check out my github {TODO: PUT LINK HERE}`,
    imageURL: placeholder
  }
];

const largeScreen = { numCardsToShow: 4 };
const mediumScreen = { numCardsToShow: 4, maxSize: 1200 };
const smallScreen = { numCardsToShow: 4, maxSize: 700 };

export class ProjectDisplay extends React.Component {

  constructor(props) {
    super(props);

    let cardsToShow = largeScreen.numCardsToShow;
    if(window.innerWidth <= mediumScreen.maxSize) {
      cardsToShow = mediumScreen.numCardsToShow;
    }
    if(window.innerWidth <= smallScreen.maxSize) {
      cardsToShow = smallScreen.numCardsToShow;
    }

    this.state = {startIndex: 0, numCardsToShow: cardsToShow};
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.checkCardsToShow());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.checkCardsToShow());
  }

  checkCardsToShow() {
    let cardsToShow = largeScreen.numCardsToShow;
    if(window.innerWidth <= mediumScreen.maxSize) {
      cardsToShow = mediumScreen.numCardsToShow;
    }
    if(window.innerWidth <= smallScreen.maxSize) {
      cardsToShow = smallScreen.numCardsToShow;
    }

    this.setState({numCardsToShow: cardsToShow});
  }

  handleClick(direction) {
    const newIndex = this.state.startIndex + (direction * this.state.numCardsToShow);
    if(newIndex < 0) {
      this.setState({
        startIndex: 0
      });
    } else if(newIndex >= cards.length) {
      this.setState({
        startIndex: cards.length - 1
      });
    } else {
      this.setState({
        startIndex: newIndex
      });
    }

    this.wrapperRef.current.classList.add(styles.entering);
    setTimeout(() => this.clearAnimation(), 300);
  }

  clearAnimation() {
    this.wrapperRef.current.classList.remove(styles.entering);
  }

  render() {
    const cardsToShow = cards.slice(this.state.startIndex, this.state.startIndex + this.state.numCardsToShow);
    const leftButtonDisable = this.state.startIndex <= 0;
    const rightButtonDisable = this.state.startIndex + this.state.numCardsToShow >= cards.length;

    return (
      <div className={styles.display}>
        {cardsToShow.map((card, idx) => <ProjectCard key={idx} content={card} title={card.title} desc={card.desc} imageURL={card.imageURL}/>)}
      </div>
    );
  }
}
