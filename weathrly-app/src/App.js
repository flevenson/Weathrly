import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js';
import Welcome from './Welcome.js';
import Search from './Search.js';
import CurrentWeather from './currentWeather.js'
import data from './mockData.js'

const mockData = data


console.log(mockData)
// console.log(mockData.current_observation.display_location.full)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Banner />
        <CurrentWeather place={mockData.current_observation.display_location.full}
                        temperature={mockData.current_observation.temp_f}
                        weatherDescription={mockData.current_observation.weather}
                        date={mockData.current_observation.local_time_rfc822}
                        high={mockData.forecast.simpleforecast.forecastday[0].high.fahrenheit}
                        low={mockData.forecast.simpleforecast.forecastday[0].low.fahrenheit}
                        detailDescription={mockData.forecast.txt_forecast.forecastday[0].fcttext}
          />
       {/* <Welcome /> */}
      </div>
    );
  }
}

export default App;
