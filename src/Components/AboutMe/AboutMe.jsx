import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { Grid, Avatar, Typography } from '@material-ui/core';
import Headshot from '../Views/profile-photo.png';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		width: '100vw',
		height: '100vh',
		paddingTop: '50px',
		margin: 'auto'
	},
	backgroundColor: {
		backgroundColor: theme.palette.background.paper
	},
	headShot: {
		height: '250px',
		width: '250px',
		margin: theme.spacing(3),
	},
	titleText: {
		fontWeight: 'bolder',
		textTransform: 'uppercase'
	}
});

class AboutMe extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Element id='About' name='about' className={classes.backgroundColor}>
				<Grid
					className={classes.root}
					container
					spacing={4}
					justify='space-evenly'
					alignItems='center'
				direction="column">
					<Fade left cascade>
						<Grid item xs={12}>
							<Avatar src={Headshot} className={classes.headShot} />
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant='h3'
								align='center'
								className={classes.titleText}>
								David Heisel
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant='h5'
								align='center'
								className={classes.titleText}>
								Full Stack Software Engineer in the Twin Cities
							</Typography>
						</Grid>
					</Fade>
				</Grid>
			</Element>
		);
	}
}

export default withStyles(styles)(AboutMe);
