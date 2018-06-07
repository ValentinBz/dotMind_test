import React, { Component } from 'react';
import '../Css/App.css';
import Pictures from './Pictures';
import Grid from '@material-ui/core/Grid';
import Data from '../Datas/Data';
import LoadingPage from './LoadingPage';
import SearchBar from './SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	wait:false,
        	listTotalInStorage : [],
            startList : Data,
	        alreadyOnLocalStorage : [],
	        search : "",
	        screen : []
        };
	    this.cleanArray = this.cleanArray.bind(this)
    }
    
    componentWillMount() {
	    let array = this.storageContent();
	    if (localStorage.length !== 0) {
		    setTimeout(() => {
			    this.setState({alreadyOnLocalStorage: array});
			    const List = this.cleanArray(this.state.startList, this.state.alreadyOnLocalStorage);
			    const ListOnScreen = [...this.state.alreadyOnLocalStorage, ...List];
			    this.setState({screen: ListOnScreen})
		    }, 1000);
	    } else {
		    this.setState({screen: this.state.startList})
	    }
    }
    
	handleClick(pics) {
		const picsOnLocalStorage = localStorage.getItem(pics.username);
		let arrayStorage = this.state.listTotalInStorage;
		if (!picsOnLocalStorage) {
			localStorage.setItem(`${pics.username}`, pics.picture);
			let newObject = {
				...pics,
				local:true
			};
			arrayStorage.push(newObject);
			this.setState({listTotalInStorage: arrayStorage})
		} else {
			localStorage.removeItem(`${pics.username}`);
				this.state.listTotalInStorage.map((x,i) => {
					if(x.username === pics.username) {
						arrayStorage.splice(i, 1);
						this.setState({listTotalInStorage: arrayStorage})
					}
				})
		}
	}
	
	storageContent() {
    	let tab = [];
    	for(let i = 0; i < localStorage.length; i++) {
			const username = localStorage.key(i);
			const picture = localStorage.getItem(username);
			tab.push({username, picture})
	    }
    	return tab
	}
	
	cleanArray(array1, array2) {
		return array1.filter(p => array2.find(p2 => p2.username === p.username) === undefined);
	}
	
	search(e) {
		this.setState({search: e});
	}
	
	componentDidMount() {
		setTimeout(() => {
			this.setState({wait:true})
		},2000);
	}
	
	render() {
		return (
			<div className="App">
				{
					(this.state.wait === false)
						?
						<LoadingPage/>
						:
						<Grid container spacing={8}>
							<Grid item xs={12} style={{padding: '3em 0'}}>
								<SearchBar callback={this.search.bind(this)}/>
							</Grid>
							{
								this.state.screen.filter(p => p.username.toLowerCase().startsWith(this.state.search.toLowerCase())).map(pics => {
									return (
										<Grid item xs={3} key={pics.id} >
											<Pictures pics={pics} click={() => this.handleClick(pics)}/>
										</Grid>
									)
								})
							}
						</Grid>
				}
			
			</div>
		);
	}
}

export default (App);
