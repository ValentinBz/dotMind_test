import React, {Component} from 'react';

class SearchBarBis extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText:"",
			intervalRequest:500,
			lockRequest: false
		};
	}
	
	render() {
		return (
			<div>
				<input className="" type="text" placeholder='some text' onChange={(event) => this.props.changeInput(event.target.value)} value={this.state.searchText} />
			</div>
		);
	}
}

SearchBarBis.propTypes = {};

export default SearchBarBis;
