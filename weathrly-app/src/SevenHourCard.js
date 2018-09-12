import React, { Component } from 'react';
import './SevenHourCard.css';
// import data from './mockData.js';
import Icons from './icons.js';

class SevenHourCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let currentTempUnit;

    if (this.props.degreeUnit) {
      currentTempUnit = (this.props.hour.temp.english + "°F");
    } else {
      currentTempUnit = (this.props.hour.temp.metric + "°C");
    }


    return (
      <div className="seven-hour">
        <p>{this.props.hour.FCTTIME.civil}</p>
        <img src={Icons[this.props.hour.condition]} alt="Icon representing current weather conditions at each hour"/>
        <p>{currentTempUnit}</p>
      </div>
    );
  }


}



export default SevenHourCard;