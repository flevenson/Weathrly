import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js';
import Welcome from './Welcome.js';
import Search from './Search.js';
import CurrentWeather from './CurrentWeather.js';
import data from './mockData.js';
import Hourly from './Hourly.js';
import Daily from './Daily.js';
import apiKey from './apiKey.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      weatherData: null,
      zipLocation: null,
      data,
      currentDisplay: '',
      tenSevenToggle: true,
      fahrCelsToggle: true,
    };
    this.toggleForecastDisplay = this.toggleForecastDisplay.bind(this);
    this.toggleFahrCels = this.toggleFahrCels.bind(this);
    // this.getZipCode = this.getZipCode.bind(this);
    this.formatInput = this.formatInput.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this)
  }

  formatInput(location) {
    if (location.includes(",")) {
      let splitLocation = location.split(",");
      let searchState = splitLocation[1].trim();
      let searchCity = splitLocation[0].replace(/\s+/g, "_");

      return (searchState + '/' + searchCity);
    } else if (location.length === 5) {
      return location;
    } else {
      console.log("formatInput not working");
    }
  }

  getLocation(location) {
    let searchLocation = this.formatInput(location);
    const apiData = `http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${searchLocation}.json`;

    this.stringNSet(location);
    this.componentDidMount(apiData);
  }

  componentWillMount() {
    if (this.getNParse('weathrlyHometown')) {
      this.getLocation(this.getNParse('weathrlyHometown'));
    }
  }

  componentDidMount(apiData) {
    fetch(apiData)
      .then(data => data.json())
      .then(data => {
        this.setState(state => ({
          weatherData: data
        }));
      })
      .catch(err => console.log('ERROR'));
  }

  toggleForecastDisplay() {
    this.setState({
      tenSevenToggle: !this.state.tenSevenToggle
    }); 
  }

  toggleFahrCels() {
    this.setState({
      fahrCelsToggle: !this.state.fahrCelsToggle
    });
  }

  stringNSet(location) {
    localStorage.setItem(('weathrlyHometown'), JSON.stringify(location));
  }

  getNParse(storedLocation) {
    let hometown = JSON.parse(localStorage.getItem(storedLocation));

    return hometown;
  }

  render() {
    let display;

    if (this.state.tenSevenToggle && (this.state.weatherData || this.state.zipLocation)) {
      display = 
        <Hourly 
          data={this.state.data} 
          degreeUnit={this.state.fahrCelsToggle} 
          weatherData={this.state.weatherData} />;
    } else if (this.state.weatherData) {
      display = 
          <Daily 
            data={this.state.data} 
            degreeUnit={this.state.fahrCelsToggle} 
            weatherData={this.state.weatherData} />;
    }

    return (
      <div className="App">
        <div className='main-section'>
          <Banner />
          <Search sendLocation={(location) => this.getLocation(location)}/>
        </div>
        <CurrentWeather 
          data={this.state.data} 
          degreeUnit={this.state.fahrCelsToggle} 
          weatherData={this.state.weatherData} />
        <div className='forecast-holder'>
          <div className='display-info' >
            <h1> {this.state.tenSevenToggle ? 'Seven Hour Forecast' : 'Ten Day Forecast'} </h1>
            <button onClick={this.toggleFahrCels}>{this.state.fahrCelsToggle ? 'Change to °C' : 'Change to °F'} </button>
            <button onClick={this.toggleForecastDisplay}> {this.state.tenSevenToggle ? 'Show Ten Day Forecast' : 'Show Seven Hour Forecast'} </button>
          </div>
          <div className='card-holder'>
            {display} 
          </div>
        </div>

      </div>
    );
  }
}



export default App;

// {this.state.currentDisplay === 'currentWeather' && <CurrentWeather data={this.state.data} />}