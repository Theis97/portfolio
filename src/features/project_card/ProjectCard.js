import React from 'react';
import styles from './ProjectCard.module.css';

export class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageURL = this.props.content.imageURL;
    const title = this.props.content.title;
    const desc = this.props.content.desc;

    const currentStyle = this.props.isActive ? styles.card + " " + styles.active : styles.card;

    return (
      <div onClick={this.props.cardClicked} style={{backgroundImage: 'url(' + imageURL + ')'}} className={currentStyle}>
        <h3>{title}</h3>
        {this.props.isActive && <p>{desc}</p>}
      </div>
    );
  }
}
