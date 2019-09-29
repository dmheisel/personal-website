import React, { Component } from 'react';
import {
	Paper,
	Toolbar,
	Typography,
	Button,
	IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
	toolBar: {
		position: 'fixed',
		width: '100vw',
		display: 'flex',
		justifyContent: 'flex-end'
	}
});
class Navbar extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper>
				<Toolbar className={classes.toolBar}>
					<Button color='secondary' size='large'>
						Portfolio
					</Button>
					<Button color='primary' size='large'>
						Skills
					</Button>
					<Button color='primary' size='large'>
						Background
					</Button>
					<Button color='primary' size='large'>
						Contact
					</Button>
				</Toolbar>
			</Paper>
		);
	}
}

export default withStyles(styles)(Navbar);
