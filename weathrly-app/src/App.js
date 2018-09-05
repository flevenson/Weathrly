import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js';
import Welcome from './Welcome.js';
import Search from './Search.js';
import CurrentWeather from './currentWeather.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Banner />
        <CurrentWeather />
       {/* <Welcome /> */}
      </div>
    );
  }
}

export default App;
