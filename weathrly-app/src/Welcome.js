import React, { Component } from 'react';
import './Welcome.css';
import Search from './Search.js';

class Welcome extends Component {
	constructor() {
		super();
	}
	render() {
		return(
			<div className="welcome">
				<h1 className="welcome-title">Welcome to Weathrly</h1>
				<Search />
			</div>
			);
	}
}

export default Welcome;
