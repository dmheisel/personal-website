import React, { Component } from 'react';
import { Typography, Button, Divider, Paper, Avatar } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(58, 32, 10, .85)'
	},
	contentGrid: {
		padding: '20px 10%'
	},
	header: {
		width: '100vw',
		height: '20vh',
		align: 'center',
		justify: 'center',
		backgroundColor: 'rgba(58, 32, 10, 1)'
	},
	headerText: {
		padding: '5vh'
	}
});
class Skills extends Component {
  render() {
    const {classes} = this.props
    return (
			<Paper className={classes.root}>
				<Typography align='center' variant='h2' className={classes.headerText}>
					Skills
				</Typography>
				<Divider />
			</Paper>
		);
  }
}

export default withStyles(styles)(Skills)
