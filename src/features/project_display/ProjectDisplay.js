import React from 'react';
import styles from './ProjectDisplay.module.css';
import { ProjectCard } from '../project_card/ProjectCard.js';

const cards = [
  {title: "Card #1", desc: "This is a description of the project"},
  {title: "Card #2", desc: "This is a description of the project"},
  {title: "Card #3", desc: "This is a description of the project"},
  {title: "Card #4", desc: "This is a description of the project"},
  {title: "Card #5", desc: "This is a description of the project"},
  {title: "Card #6", desc: "This is a description of the project"},
  {title: "Card #7", desc: "This is a description of the project"}
]
const numCardsToShow = 3;

export function ProjectDisplay() {
  return (
    <div className={styles.display}>
      <h2>My Projects</h2>
      <div className={styles.container}>
        <button className={styles.arrow}>&lt;</button>
        {cards.map((card) => <ProjectCard title={card.title} desc={card.desc}/>)}
        <button className={styles.arrow}>&gt;</button>
      </div>
    </div>
  );
}
