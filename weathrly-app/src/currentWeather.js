import React, { Component } from 'react';
import './currentWeather.css';
import data from './mockData.js'



class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: this.place,
      temperature: this.temperature,
      weatherDescription: this.weatherDescription,
      date: this.date,
      high: this.high,
      low: this.low,
      detailDescription: this.detailDescription
    }
  }
  render() {
    return(
      <div className="currentWeatherComponent">
        <h2 className="currentCity">Your Location: {this.props.place}</h2>
        <h1 className="currentTemp">Current Temp: {this.props.temperature}°</h1>
        <section>
          <i className="fas fa-umbrella currentIcon"></i>
          <h6 className="currentConditions">Today's Conditions: {this.props.weatherDescription}</h6>
        </section>
        <h3 className="currentDate">Today's Date: {this.props.date.substr(0, 14)}</h3>
        <h2 className="currentHigh">Daily High: {this.props.high}°</h2>
        <h2 className="currentLow">Daily Low: {this.props.low}°</h2>
        <p className="currentDescription">What to expect: {this.props.detailDescription}</p>
      </div>
      );
  }
}

export default CurrentWeather;
