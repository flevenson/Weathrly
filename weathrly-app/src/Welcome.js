import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="welcome">
        <h1 className="welcome-title">Welcome to Weathrly</h1>
      </div>
    );
  }
}

export default Welcome;
