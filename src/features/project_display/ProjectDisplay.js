import React from 'react';
import styles from './ProjectDisplay.module.css';
import { ProjectCard } from '../project_card/ProjectCard.js';

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
          interactions and multiplayer functionality. More information coming soon!`
  },
  {title: "Card #2", desc: "This is a description of the project. I'm adding more text into this description for testing purposes. blah blah blah."},
  {title: "Card #3", desc: "This is a description of the project"},
  {title: "Card #4", desc: "This is a description of the project"},
  {title: "Card #5", desc: "This is a description of the project"},
  {title: "Card #6", desc: "This is a description of the project"},
  {title: "Card #7", desc: "This is a description of the project"}
]

export class ProjectDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startIndex: 0, numCardsToShow: 3};
    this.wrapperRef = React.createRef();
  }

  handleClick(direction) {
    const newIndex = this.state.startIndex + (direction * this.state.numCardsToShow);
    if(newIndex >= 0 && newIndex < cards.length) {
      this.setState({
        startIndex: newIndex
      });
    }

    this.wrapperRef.current.classList.add(styles.entering);
    setTimeout(() => this.clearAnimation(), 1000);
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
        <h2>My Projects</h2>
        <div className={styles.container}>
          <button
            className={styles.arrow + (leftButtonDisable ? "" : " " + styles.enabled)}
            disabled={leftButtonDisable}
            onClick={() => this.handleClick(-1)}
          >
            &lt;
          </button>
          <div ref={this.wrapperRef} className={styles.cardWrapper}>
            {cardsToShow.map((card, idx) => <ProjectCard key={idx} title={card.title} desc={card.desc}/>)}
          </div>
          <button
            className={styles.arrow + (rightButtonDisable ? "" : " " + styles.enabled)}
            disabled={rightButtonDisable}
            onClick={() => this.handleClick(1)}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
}
