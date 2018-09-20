import React, { Component } from 'react';
import './CurrentWeather.css';
// import data from './mockData.js'
import Icons from './icons.js';




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
    };
  }
  

  render() {
    let currentTempUnit;
    let degreeHighUnit;
    let degreeLowUnit;
    let currentDescriptionUnit;

    if (this.props.degreeUnit && (this.props.weatherData || this.state.zipLocation)) {
      currentTempUnit = 
        (this.props.weatherData.current_observation.temp_f.toFixed(0) + "°F");
      degreeHighUnit = 
        (parseFloat(this.props.weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit) + "°F");
      degreeLowUnit = 
        (parseFloat(this.props.weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit) + "°F");
      currentDescriptionUnit = 
        this.props.weatherData.forecast.txt_forecast.forecastday[0].fcttext;
    } else if (this.props.weatherData || this.state.zipLocation) {
      currentTempUnit = 
        (this.props.weatherData.current_observation.temp_c.toFixed(0) + "°C");
      degreeHighUnit = 
        (parseFloat(this.props.weatherData.forecast.simpleforecast.forecastday[0].high.celsius) + "°C");
      degreeLowUnit = 
        (parseFloat(this.props.weatherData.forecast.simpleforecast.forecastday[0].low.celsius) + "°C");
      currentDescriptionUnit = 
        this.props.weatherData.forecast.txt_forecast.forecastday[0].fcttext_metric;
    }
    if (!this.props.weatherData) { 
      return (null);
    } else {
      return (
        <div className="currentWeatherComponent">
          <div className="grid-div currentCity">
            <h2>
              {this.props.weatherData.current_observation.display_location.full}
            </h2>
            <div className="currentDate"> 
              {this.props.weatherData.current_observation.local_time_rfc822.substr(0, 14)} 
            </div>
          </div>
          <div className="grid-div currentTemp">        
            <h1>
              {currentTempUnit}
            </h1>
            <div className="grid-div currentHighLow-div">
              <h2 className="currentHigh">
              H: 
                {console.log(degreeHighUnit)}
                {degreeHighUnit}
                
              </h2>
              <h2 className="currentLow">
              L: 
                {degreeLowUnit}
              </h2>
            </div>
          </div>
            {/*<section className="icon-conditions-div">*/}
              <img
                src={Icons[this.props.weatherData.current_observation.weather]} 
                alt="Icon representing current weather conditions"
                className="current-weather-icon"
              />
            {/*</section>*/}
          <div className="grid-div currentDescription">        
            <p>
              {currentDescriptionUnit}
            </p>
          </div>
        </div>
      );
    }
  }
}

export default CurrentWeather;
