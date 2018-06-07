import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
		width: '300px'
	},
	
});

class Pictures extends Component {

	componentWillMount() {
		const picsOnLocalStorage = localStorage.getItem(this.props.pics.username);
		if (!picsOnLocalStorage) {
			this.setState({local: false})
		} else {
			this.setState({local: true})
		}
	}

	propsFunctionHandleClick(pics) {
		this.props.click(pics);
		const picsOnLocalStorage = localStorage.getItem(pics.username);
		if (!picsOnLocalStorage) {
			this.setState({local: false})
		} else {
			this.setState({local: true})
		}
	}
	
	render() {
	const {classes} = this.props;
		return (
			<div onClick={() => this.propsFunctionHandleClick(this.props.pics)}>
				{
					(this.state.local)
						?
						<Button className={classes.button} variant="contained" color="primary" >
							<Grid container>
								<Grid item xs={6}>
									<img alt={this.props.pics.username} src={this.props.pics.picture}/>
								</Grid>
								<Grid item xs={6}>
									<p>
										{this.props.pics.username}
									<br/>
										Storage
									</p>
								</Grid>
							</Grid>
						</Button>
						:
						<Button className={classes.button} variant="contained">
							<Grid container>
								<Grid item xs={6}>
									<img alt={this.props.pics.username} src={this.props.pics.picture}/>
								</Grid>
								<Grid item xs={6}>
									<p>{this.props.pics.username}</p>
								</Grid>
							</Grid>
						</Button>
				}
			</div>
		)
	}
}

Pictures.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pictures);
