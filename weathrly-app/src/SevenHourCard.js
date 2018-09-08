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
		return (
			<div className="seven-hour">
				<p>{this.props.hour.FCTTIME.civil}</p>
				<img src={this.props.hour.icon_url}/>
				<p>{this.props.hour.temp.english}°</p>
			</div>
			);
	}


}



export default SevenHourCard;