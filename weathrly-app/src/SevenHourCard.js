import React, { Component } from 'react';
import './SevenHourCard.css';
import data from './mockData.js'

class SevenHourCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		let currentTempUnit

		if(this.props.degreeUnit) {
			currentTempUnit = this.props.hour.temp.english;
		} else {
			currentTempUnit = this.props.hour.temp.metric;
		}


		return (
			<div className="seven-hour">
				<p>{this.props.hour.FCTTIME.civil}</p>
				<img src={this.props.hour.icon_url}/>
				<p>{currentTempUnit}°</p>
			</div>
			);
	}


}



export default SevenHourCard;