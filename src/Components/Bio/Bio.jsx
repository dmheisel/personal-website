import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SectionHeader from '../SectionHeader/SectionHeader';

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(33, 10, 58, 0.75)',
		minHeight: '100vh'
	},
	gridRoot: {
		padding: '20px 20%',
		minHeight: '90vh'
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
					<SectionHeader
						backgroundColor='rgba(33, 10, 58, 1)'
						text='About Me'
					/>
					<Fade left cascade>
						<Grid
							container
							// spacing={0}
							direction='row'
							alignItems='center'
							justify='space-between'
							className={classes.gridRoot}>
							<Grid item container direction='column' xs={5}>
								<Grid item xs={12}>
									<Typography variant='h3'>Lorem Ipsum</Typography>
									<Typography paragraph>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
								</Grid>
							</Grid>
							<Grid item container direction='column' xs={5}>
								<Grid item xs={12}>
									<Typography variant='h3'>Lorem Ipsum</Typography>
									<Typography paragraph>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Fade>
				</Paper>
			</Element>
		);
	}
}

export default withStyles(styles)(Bio);
