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
		marginTop: '25vh',
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
					<SectionHeader backgroundColor='rgba(33, 10, 58, 1)' text='Bio' />
					<Fade left cascade>
						<Grid
							container
							// spacing={0}
							direction='row'
							alignItems='space-evenly'
							justify='space-between'
							className={classes.gridRoot}>
							<Grid
								item
								container
								direction='column'
								// align='space-between'
								xs={12}
								md={5}>
								<Grid item xs={12}>
									<Typography variant='h3' align='center'>
										Who I Am
									</Typography>
									<Divider />
									<Typography paragraph align='center'>
										I'm a driven, energetic, and always-curious new software developer
										in the Twin Cities, with a passion for problem-solving and
										diving into new challenges head-on.
									</Typography>
									<Typography paragraph align='center'>
										As a kid, I'd pull apart my dad's watches to see how they
										worked. Now I get to play with technology and put that same
										curiosity to use every day, creating new and exciting
										software to drive the web forward.
									</Typography>
								</Grid>
							</Grid>
							<Grid
								item
								container
								direction='column'
								// align='space-between'
								xs={12}
								md={5}>
								<Grid item xs={12}>
									<Typography variant='h3' align='center'>
										What do I do?
									</Typography>
									<Divider />
									<Typography paragraph align='center'>
										I use tools such as JavaScript, Java, React, Redux,
										PostgresQL, and NodeJs as a full-stack software engineer.
										I'm a strong believer in the value of teamwork and
										collaboration and always aim for improvement.
									</Typography>
									<Typography paragraph align='center'>
										When I'm not at work or on my computer, I can often be found
										on my bike or in my den with a pair of knitting needles. I'm
										always learning something new and love exploring different
										hobbies.
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
