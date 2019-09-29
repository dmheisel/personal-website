import React, { Component } from 'react';
import { Typography, Button, Divider, Paper, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubMark from '../ExternalIcons/GitHub-Mark-Light-64px.png';

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(48, 58, 10, 0.85)',
		padding: '50px 20%',
		minHeight: '100vh'
		// margin: 'auto'
	},
	headerText: {
		padding: '25px'
	},
	button: {
		display: 'block',
		margin: theme.spacing(1),
		padding: theme.spacing(1)
	}
});

class Contact extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<Typography align='center' variant='h2' className={classes.headerText}>
					Contact
				</Typography>
				<Divider />
				<Button className={classes.button}>
					<LinkedInIcon />
					www.linkedin.com/in/david-heisel
				</Button>
				<Button className={classes.button}>
					<AlternateEmailIcon />
					d.m.heisel@gmail.com
				</Button>
				<Button className={classes.button} style={{ display: 'flex', alignItems: 'baseline' }}>
					<Avatar src={GitHubMark} style={{ height: '24px', width: '24px' }} />
					<Typography variant='button'>https://github.com/dmheisel</Typography>
				</Button>
				<Divider />
			</Paper>
		);
	}
}

export default withStyles(styles)(Contact);
