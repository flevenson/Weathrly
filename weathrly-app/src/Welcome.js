import React, { Component } from 'react';
import './Welcome.css';
import Search from './Search.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  // getLocation(location) {
  //   let searchLocation = this.formatInput(location);
  //   const apiData = `http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${searchLocation}.json`;

  //   this.stringNSet(location);
  //   this.componentDidMount(apiData);
  // }



  render() {
    return (
      <div className="welcome">
        <h1 className="welcome-title">Welcome to Weathrly</h1>
      </div>
    );
  }
}

export default Welcome;
