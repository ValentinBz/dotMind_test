import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		margin: 'auto'
	},
};

class LoadingPage extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container>
					<Grid item xs={12}>
						<h1>Loading...</h1>
						<i className="fas fa-spinner fa-pulse fa-3x" />
					</Grid>
				</Grid>
			</div>
		);
	}
}

LoadingPage.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPage);