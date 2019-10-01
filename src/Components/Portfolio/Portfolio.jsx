import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import BYKRinfoWindow from '../Views/BYKR-Info-Window.png';
import GalleryScreen from '../Views/Gallery.png';
import feedbackLoopsScreen from '../Views/Feedback-Loops.png';

import SectionHeader from '../SectionHeader/SectionHeader';
import PortfolioItem from './PortfolioItem';

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(58, 40, 10, 0.75)',
		minHeight: '100vh',
		height: 'fit-content',
		paddingBottom: '5%'
	},
	portfolioGrid: {
		padding: '20px 15%',
		minHeight: '90vh'
	}
});

class Portfolio extends Component {
	render() {
		const { classes } = this.props;
		const bykrText = `A mobile-first web app to provide cyclists with the tools for
							crowd-sourced tracking and rating of parking racks, fixing posts,
							and other cycling-related resources in their area.`;
		const galleryText = `A photo-gallery app designed for users to share their favorite photos!`;
		const feedbackLoopsText = `A feedback-tracking system for instructors to gather and monitor feedback 						from their students' daily lessons.`;

		return (
			<Element id='Portfolio' name='Portfolio'>
				<Paper className={classes.root}>
					<Fade right cascade>
						<SectionHeader
							backgroundColor='rgba(58, 40, 10, 1)'
							text='Portfolio'
						/>
						<Grid
							container
							spacing={10}
							direction='column'
							className={classes.portfolioGrid}>
							<PortfolioItem
								title='BYKR'
								text={bykrText}
								image={BYKRinfoWindow}
								direction='row'
								techList={[
									'JavaScript',
									'ReactJs',
									'Redux',
									'NodeJs',
									'PostgreSQL',
									'Git'
								]}
								url='https://github.com/dmheisel/BYKR'
							/>
							<Divider />
							<PortfolioItem
								title='Life-Gallery'
								text={galleryText}
								image={GalleryScreen}
								direction='row-reverse'
								techList={[
									'JavaScript',
									'ReactJs',
									'PostgreSQL',
									'NodeJs',
									'Git'
								]}
								url='https://github.com/dmheisel/LifeGallery'
							/>
							<PortfolioItem
								title='Feedback Loops'
								text={feedbackLoopsText}
								image={feedbackLoopsScreen}
								direction='row'
								techList={[
									'JavaScript',
									'ReactJs',
									'Redux',
									'NodeJs',
									'PostgreSQL',
									'Git'
								]}
								url='https://github.com/dmheisel/Feedback-Loops-'
							/>
						</Grid>
					</Fade>
				</Paper>
			</Element>
		);
	}
}

export default withStyles(styles)(Portfolio);
