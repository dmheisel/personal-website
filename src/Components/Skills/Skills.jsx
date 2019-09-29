import React, { Component } from 'react';
import { Typography, Button, Divider, Paper, Avatar } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(58, 32, 10, 1)',
		padding: '50px 20%'
	},
	headerText: {
		padding: '25px'
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
