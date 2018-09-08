import React, { Component } from 'react';

import './Hourly.css';
import SevenHourCard from './SevenHourCard';
import data from './mockData.js';

class Hourly extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hour: this.hour,
			temperature: this.temperature
		}
	}

	render() {
		return (this.props.data.hourly_forecast.map((hour) => {
			return (
				<div className="hourly-container">
					<SevenHourCard hour={hour}/>
				</div>
			)
	}).slice(0, 7))


}


}



export default Hourly;
