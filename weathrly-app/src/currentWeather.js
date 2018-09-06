import React, { Component } from 'react';
import './currentWeather.css';
import data from './mockData.js'



class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: this.place
    }
  }
  render() {
    return(
      <div className="currentWeatherComponent">
        <h2 className="currentCity">{this.props.place}</h2>
        <h1 className="currentTemp">98°</h1>
        <section>
          <i className="fas fa-umbrella currentIcon"></i>
          <h6 className="currentConditions">Rainy AF!!!</h6>
        </section>
        <h3 className="currentDate">June 06 2006</h3>
        <h2 className="currentHigh">High: 120°</h2>
        <h2 className="currentLow">Low: -69°</h2>
        <p className="currentDescription">Cloudy with a chance of Meatballs, don't forget your umbrella and a plate!</p>
      </div>
      );
  }
}

export default CurrentWeather;
