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


console.log(data)
// console.log(mockData.current_observation.display_location.full)

class App extends Component {
  constructor() {
    super()
    this.state = {
      data,
      currentDisplay: ''
    }
  }

  // handleClick = (data) => {
  //   // const newClickProperty = !this.state.clicked
  //   this.setState ({
  //     currentDisplay: data
  //   })
  // }

  render() {
    return (
      <div className="App">
       {/*<button className="test-button" onClick={() => this.handleClick('currentWeather')}>current weather</button>*/}
        <Banner />
        <Search />
        <CurrentWeather data={this.state.data} />
        <div className='hour-holder'>
        <div className="button-container">
          <button>7 Hour</button>
          <button>10 Day</button>
          <button>F°</button>
          <button>C°</button>
        </div>
          <Hourly data={this.state.data} />
        </div>

        <div className='day-holder'>
        <div className="button-container">
          <button>7 Hour</button>
          <button>10 Day</button>
          <button>F°</button>
          <button>C°</button>
        </div>
          <Daily data={this.state.data} />
        </div>


      </div>
    );
  }
}

export default App;

 // {this.state.currentDisplay === 'currentWeather' && <CurrentWeather data={this.state.data} />}