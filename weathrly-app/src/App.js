import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js';
import Welcome from './Welcome.js';
import Search from './Search.js';
import CurrentWeather from './currentWeather.js'
import data from './mockData.js'
import Hourly from './Hourly.js';
// import Card from './Card.js';

const mockData = data


console.log(mockData)
// console.log(mockData.current_observation.display_location.full)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Banner />
        <CurrentWeather data={mockData} />
        <Hourly data={mockData} />
       {/* <Welcome /> */}
      </div>
    );
  }
}

export default App;
