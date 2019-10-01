import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import BYKRinfoWindow from '../Views/BYKR-Info-Window.png';
import GoogleMapsIcon from '../ExternalIcons/googlemapsapi.png';
import PostgresIcon from '../ExternalIcons/postgreSQL.png';
import ReactIcon from '../ExternalIcons/React.svg';
import ReduxIcon from '../ExternalIcons/redux.svg';
import NodeJsIcon from '../ExternalIcons/nodeJs.svg';
import JavaScriptIcon from '../ExternalIcons/Javascript.svg';
import SectionHeader from '../SectionHeader/SectionHeader';

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(58, 40, 10, 0.75)',
		// padding: '50px 0',
		minHeight: '100vh'
	},
	portfolioGrid: {
		padding: '20px 20%',
		minHeight: '90vh'
	},
	portfolioItem: {
		maxHeight: '50vh',
	},
	imageContainer: {
		height: '50vh',
		width: '30vw',
		backgroundImage: `url(${BYKRinfoWindow})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		borderRadius: '15px'
	},
	icon: {
		height: '50px',
		width: '50px'
	}
});

class Portfolio extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Element id='Portfolio' name='Portfolio'>
				<Paper className={classes.root}>
					<Fade right cascade>
						<SectionHeader backgroundColor="rgba(58, 40, 10, 1)" text="Portfolio" />
						<Grid container className={classes.portfolioGrid}>
							<Grid
								item
								container
								xs={12}
								justify='space-between'
								className={classes.portfolioItem}>
								<Grid item container xs={12} md={4} direction='row'>
									<Grid item xs={12}>
										<Typography variant='h2'>BYKR</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant='body1'>
											A mobile-first web app to provide cyclists with the tools
											for crowd-sourced tracking and rating of parking racks,
											fixing posts, and other cycling-related resources in their
											area.
										</Typography>
									</Grid>
									<Grid item xs={12} display='flex'>
										<Typography variant='body2'>
											Built using some of the following technologies:
										</Typography>
										<img
											className={classes.icon}
											src={JavaScriptIcon}
											alt='Javascript'
										/>
										<img className={classes.icon} src={ReactIcon} alt='React' />
										<img className={classes.icon} src={ReduxIcon} alt='Redux' />
										<img
											className={classes.icon}
											src={NodeJsIcon}
											alt='NodeJS'
										/>
										<img
											className={classes.icon}
											src={PostgresIcon}
											alt='PostgreSQL'
										/>
										<img
											className={classes.icon}
											src={GoogleMapsIcon}
											alt='Google Maps API'
										/>
									</Grid>
								</Grid>
								<Grid item xs={12} md={4}>
									<a
										href='https://github.com/dmheisel/BYKR'
										target='_blank'
										rel='noopener noreferrer'>
										<div className={classes.imageContainer} />
										{/* <img
											src={BYKRinfoWindow}
											className={classes.image}
											style={{ borderRadius: '10px' }}
											alt='BYKR view'
										/> */}
									</a>
								</Grid>
							</Grid>
						</Grid>
					</Fade>
				</Paper>
			</Element>
		);
	}
}

export default withStyles(styles)(Portfolio);
