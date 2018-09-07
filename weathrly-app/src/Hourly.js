import React, { Component } from 'react';
import './Hourly.css';
import Card from './Card';

class Hourly extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hour: this.hour,
			temperature: this.temperature
		}

	}


	render() {

		return (
			<div className="hourly-container">
				this.data.hourly_forecast.map((hour) => {
					for (let i = 0; i <= 6; i++) {
						return(
							<div>
								<Card />
							</div>
						);
					}
				})
			</div>
		)

	}




}





export default Hourly;