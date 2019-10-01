import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
	header: {
		width: '100vw',
		align: 'center',
		justify: 'center',
		[theme.breakpoints.up('md')]: {
			height: '15vh'
		},
		[theme.breakpoints.down('sm')]: {
			height: '20vh',
			paddingTop: '25px',
		}
	},
	headerText: {
		padding: '5vh'
	}
});

class SectionHeader extends Component {
	//reusable component for the header in each section
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.header} style={{backgroundColor: this.props.backgroundColor}}>
				<Typography align='center' variant='h2' className={classes.headerText}>
					{this.props.text}
				</Typography>
			</div>
		);
	}
}

export default withStyles(styles)(SectionHeader);
