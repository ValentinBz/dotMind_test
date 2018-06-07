import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			intervalRequest:500,
			lockRequest: false
		};
	}
	
	render() {
		return (
			<div>
				<input type="text" placeholder='Enter an username' onChange={(event) => this.props.callback(event.target.value)} />
			</div>
		);
	}
}

SearchBar.propTypes = {};

export default SearchBar;
