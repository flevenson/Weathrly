import React, { Component } from 'react';

import './Daily.css';
import TenDayCard from './TenDayCard';


class Daily extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: this.day,
      temperature: this.temperature
    };
  }

  render() {
    return (
      this.props.weatherData.forecast.simpleforecast.forecastday.map((day, i) => {
        return (
          <div key={i} className="daily-container">
            <TenDayCard day={day} degreeUnit={this.props.degreeUnit}/>
          </div>
        );
      })

    );
  }




}

export default Daily;