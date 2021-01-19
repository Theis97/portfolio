import React from 'react';
import { Spring, animated, config } from 'react-spring/renderprops';
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

    let header = <h3>{title}</h3>;
    let body = desc;
    if(window.innerWidth > 999) {
      header = <Spring
          native
          config={ config.slow }
          from={{ transform: this.props.isActive ? 'translateY(275px)' : 'translateY(0px)' }}
          to={{ transform: this.props.isActive ?  'translateY(0px)' : 'translateY(275px)' }}>
          {props => (<animated.h3 style={props}>{title}</animated.h3>)}
        </Spring>;

      body = <Spring
        native
        config={{ friction: 45, delay: 600 }}
        from={{ opacity: this.props.isActive ? 0 : 1 }}
        to={{ opacity: this.props.isActive ? 1 : 0 }}>
        {props => (<animated.div style={props}>{desc}</animated.div>)}
      </Spring>;

    } else {
      body = <Spring
        native
        from={{ height: this.props.isActive ? 0 : 'auto' }}
        to={{ height: this.props.isActive ? 'auto' : 0 }}>
        {props => (<animated.div style={props}>{desc}</animated.div>)}
      </Spring>;
    }

    return (
      <button
        onClick={this.props.cardClicked}
        style={{backgroundImage: 'url(' + imageURL + ')'}}
        className={currCardStyle}
      >
        {header}
        {body}
      </button>
    );
  }
}
