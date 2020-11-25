import React from 'react';
import styles from './ProjectCard.module.css';

export class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHeaderOnTop: false};
  }

  onTransitionEnd(e) {
    if(this.props.isActive) {
      this.setState({isHeaderOnTop: true});
    } else {
      this.setState({isHeaderOnTop: false});
    }
  }

  render() {

    const currCardStyle = this.props.isActive ? styles.card + " " + styles.active : styles.card;
    const textStyle = styles.cardText + " " + (this.state.isHeaderOnTop ? styles.opened : "");

    const imageURL = this.props.content.imageURL;
    const title = this.props.content.title;
    const desc = React.cloneElement(this.props.content.desc, {className: textStyle});

    return (
      <button onClick={this.props.cardClicked} style={{backgroundImage: 'url(' + imageURL + ')'}} className={currCardStyle}>
        <h3 onTransitionEnd={this.onTransitionEnd.bind(this)}>{title}</h3>
        {this.props.isActive && desc}
      </button>
    );
  }
}
