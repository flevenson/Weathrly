import React, { Component } from 'react';
import './TenDayCard.css';
import data from './mockData.js'

class TenDayCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		let degreeHighUnit
		let degreeLowUnit

		if (this.props.degreeUnit) {
			degreeHighUnit = this.props.day.high.fahrenheit;
			degreeLowUnit = this.props.day.low.fahrenheit
		} else {
			degreeHighUnit = this.props.day.high.celsius;
			degreeLowUnit = this.props.day.low.celsius;
		}

		return(
			<div className="ten-day">
				<p>{this.props.day.date.weekday_short}</p>
				<img src={this.props.day.icon_url}/>
				<p>{degreeHighUnit}°</p>
				<p>{degreeLowUnit}°</p>
			</div>
			);
	}

}



export default TenDayCard;
