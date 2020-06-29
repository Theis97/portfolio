import React from 'react';
import styles from './ProjectCard.module.css';

export function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
