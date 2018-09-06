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
        <h2 className="currentCity">Your Location: {this.props.data.current_observation.display_location.full}</h2>
        <h1 className="currentTemp">Current Temp: {this.props.data.current_observation.temp_f}°</h1>
        <section>
          <i className="fas fa-umbrella currentIcon"></i>
          <h6 className="currentConditions">Today's Conditions: {this.props.data.current_observation.weather}</h6>
        </section>
        <h3 className="currentDate">Today's Date: {this.props.data.current_observation.local_time_rfc822.substr(0, 14)}</h3>
        <h2 className="currentHigh">Daily High: {this.props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit}°</h2>
        <h2 className="currentLow">Daily Low: {this.props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit}°</h2>
        <p className="currentDescription">What to expect: {this.props.data.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </div>
      );
  }
}

export default CurrentWeather;
