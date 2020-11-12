import React from 'react';
import styles from './ProjectCard.module.css';

export class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundImage: 'url(' + this.props.imageURL + ')'}} className={styles.card}>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
