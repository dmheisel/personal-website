import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal';
import {
	Grid,
	Typography,
	Card,
	CardHeader,
	CardContent,
	CardMedia,
	Paper
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(33, 10, 58, 0.75)',
		minHeight: '100vh'
	},
	header: {
		width: '100vw',
		align: 'center',
		justify: 'center',
		backgroundColor: 'rgba(33, 10, 58, 1)',
		[theme.breakpoints.up('md')]: {
			height: '15vh'
		},
		[theme.breakpoints.down('sm')]: {
			height: '20vh',
			paddingTop: '25px'
		}
	},
	headerText: {
		padding: '5vh'
	}
});

class Bio extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Element id='Bio' name='Bio'>
				<Paper className={classes.root}>
					<div className={classes.header}>
						<Typography
							variant='h2'
							align='center'
							className={classes.headerText}>
							Bio
						</Typography>
					</div>
				</Paper>
			</Element>
		);
	}
}

export default withStyles(styles)(Bio);
