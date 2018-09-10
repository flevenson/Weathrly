import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: ""
		}
		this.registerLocation = this.registerLocation.bind(this);
		this.submitLocation = this.submitLocation.bind(this);
	}

	registerLocation(e) {
		console.log(this.state)
		this.setState({
			userInput: e.target.value
		})

	}

	submitLocation(e) {
		e.preventDefault();
		this.props.sendLocation(this.state.userInput)
	}


	render() {
		return (
			<form className="search">
				<input 
				  type="search" 
				  placeholder="Enter city or zip code" 
				  className="search-input" 
				  onChange={this.registerLocation}>
				</input>
			  <button 
			    className="submit-btn" 
			    onClick={this.submitLocation}>Search
			    </button>
			</form>
			);
	}
}

export default Search;