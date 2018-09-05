import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<form className="search">
			<input type="search" placeholder="Enter city or zip code">
			</input>
			</form>
			);
	}
}

export default Search;