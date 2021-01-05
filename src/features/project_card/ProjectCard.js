import React from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import styles from './ProjectCard.module.css';

export class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHeaderOnTop: false};
  }

  render() {
    const currCardStyle = this.props.isActive ? styles.card + " " + styles.active : styles.card;
    const textStyle = styles.cardText + " " + (this.state.isHeaderOnTop ? styles.opened : "");

    const imageURL = this.props.content.imageURL;
    const title = this.props.content.title;
    const desc = React.cloneElement(this.props.content.desc, {className: textStyle});

    return (
      <button onClick={this.props.cardClicked} style={{backgroundImage: 'url(' + imageURL + ')'}} className={currCardStyle}>
        <h3>{title}</h3>
        <Spring native
          from={{ height: this.props.isActive ? 0 : 'auto' }}
          to={{ height: this.props.isActive ? 'auto' : 0 }}>
          {props => (
            <animated.div style={props}>
              {desc}
            </animated.div>
          )}
        </Spring>
      </button>
    );
  }
}
