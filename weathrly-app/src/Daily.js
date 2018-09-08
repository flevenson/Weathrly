import React, { Component } from 'react';

import './Daily.css';
import TenDayCard from './TenDayCard';
import data from './mockData.js';

class Daily extends Component {
	constructor(props) {
		super(props);

		this.state = {
			day: this.day,
			temperature: this.temperature
		}
	}

	render() {
		return (this.props.data.forecast.simpleforecast.forecastday.map((day) => {
			return (
				<div className="daily-container">
					<TenDayCard day={day} degreeUnit={this.props.degreeUnit}/>
				</div>
			)
		})

		)
	}




}

export default Daily;