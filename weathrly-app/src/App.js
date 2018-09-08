import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js';
import Welcome from './Welcome.js';
import Search from './Search.js';
import CurrentWeather from './currentWeather.js'
import data from './mockData.js'
import Hourly from './Hourly.js';
import Daily from './Daily.js';
// import Card from './Card.js';

// const mockData = data


// console.log(mockData.current_observation.display_location.full)

class App extends Component {
  constructor() {
    super()

    this.state = {
      data,
      currentDisplay: '',
      tenSevenToggle: true,
      fahrCelsToggle: true
    }
    this.toggleForecastDisplay = this.toggleForecastDisplay.bind(this);
    this.toggleFahrCels = this.toggleFahrCels.bind(this)
    }
  // handleClick = (data) => {
  //   // const newClickProperty = !this.state.clicked
  //   this.setState ({
  //     currentDisplay: data
  //   })
  // }


  toggleForecastDisplay() {
    this.setState(state => ({
      tenSevenToggle: !state.tenSevenToggle
    })); 
  }

  toggleFahrCels() {
    this.setState(state => ({
      fahrCelsToggle: !state.fahrCelsToggle
    }));
  }

  render() {
    let display

    if(this.state.tenSevenToggle){
      display = <Hourly data={this.state.data} degreeUnit={this.state.fahrCelsToggle} />
    } else {
      display = <Daily data={this.state.data} degreeUnit={this.state.fahrCelsToggle} />
    }

    return (
      <div className="App">
       {/*<button className="test-button" onClick={() => this.handleClick('currentWeather')}>current weather</button>*/}
        <div className='main-section'>
          <Banner />
          <button onClick={this.toggleFahrCels}>{this.state.fahrCelsToggle ? 'Change to °C' : 'Change to °F'} </button>
          <Search />
        </div>
        <CurrentWeather data={this.state.data} degreeUnit={this.state.fahrCelsToggle} />
        <div className='forecast-holder'>
          <div className='display-info' >
            <h1> {this.state.tenSevenToggle ? 'Seven Hour Forecast' : 'Ten Day Forecast'} </h1>
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