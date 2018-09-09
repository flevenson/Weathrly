import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchLocation: null
		}

		this.submitLocation = this.submitLocation.bind(this);
	}
	

	submitLocation(e) {
		e.preventDefault();
		this.setState({
			searchLocation: document.querySelector(".search-input").value
		}) 
	}

	render() {
		return (
			<form className="search">
				<input type="search" placeholder="Enter city or zip code" className="search-input">
				
				</input>
			  <button className="submit-btn" onClick={this.submitLocation}>Search</button>
			</form>
			);
	}
}

export default Search;