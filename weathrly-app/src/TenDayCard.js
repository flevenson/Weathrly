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
		return(
			<div className="ten-day">
				<p>{this.props.day.date.weekday_short}</p>
				<img src={this.props.day.icon_url}/>
				<p>{this.props.day.high.fahrenheit}</p>
				<p>{this.props.day.low.fahrenheit}</p>
			</div>
			);
	}

}



export default TenDayCard;
