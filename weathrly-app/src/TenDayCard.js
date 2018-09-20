import React, { Component } from 'react';
import './TenDayCard.css';

import Icons from './icons.js';

class TenDayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let degreeHighUnit;
    let degreeLowUnit;

    if (this.props.degreeUnit) {
      degreeHighUnit = (parseFloat(this.props.day.high.fahrenheit) + "°F");
      degreeLowUnit = (parseFloat(this.props.day.low.fahrenheit) + "°F");
    } else {
      degreeHighUnit = (this.props.day.high.celsius + "°C");
      degreeLowUnit = (this.props.day.low.celsius + "°C");
    }

    return (
      <div className="ten-day">
        <p>{this.props.day.date.weekday_short}</p>
        <img 
          src={Icons[this.props.day.conditions]} 
          alt="Icon representing current weather conditions on each day"/>
        <p>{degreeHighUnit}</p>
        <p>{degreeLowUnit}</p>
      </div>
    );
  }

}



export default TenDayCard;
