import React from 'react';
import styles from './ProjectCard.module.css';

export class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHeaderOnTop: false};
  }

  onTransitionEnd(e) {
    if(e.elapsedTime >= 0.6) {
      this.setState((state) => ({isHeaderOnTop: !state.isHeaderOnTop}));
    }
    // this bugs out if you keep clicking cards continously for longer than 0.6 seconds
    // might be truly fixed with an onClick function to keep track of opening/closing
    // (in projectDisplay because you can close a card by clicking on a different one)
    // but this is enough for today
  }

  render() {
    const imageURL = this.props.content.imageURL;
    const title = this.props.content.title;
    const desc = this.props.content.desc;

    const currCardStyle = this.props.isActive ? styles.card + " " + styles.active : styles.card;
    const textStyle = styles.cardText + " " + (this.state.isHeaderOnTop ? styles.opened : "");

    return (
      <div onClick={this.props.cardClicked} style={{backgroundImage: 'url(' + imageURL + ')'}} className={currCardStyle}>
        <h3 onTransitionEnd={this.onTransitionEnd.bind(this)}>{title}</h3>
        {this.props.isActive && <p className={textStyle}>{desc}</p>}
      </div>
    );
  }
}
