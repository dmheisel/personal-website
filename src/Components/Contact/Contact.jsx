import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal';
import {
	Typography,
	Button,
	Divider,
	Paper,
	Avatar,
	Grid,
	List,
	ListItem
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubMark from '../ExternalIcons/GitHub-Mark-Light-64px.png';
import SectionHeader from '../SectionHeader/SectionHeader';

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(68, 68, 13, 0.75)',
		minHeight: '100vh'
		// margin: 'auto'
	},
	header: {
		width: '100vw',
		align: 'center',
		justify: 'center',
		backgroundColor: 'rgba(68, 68, 13, 1)',
		[theme.breakpoints.up('md')]: {
			height: '15vh'
		},
		[theme.breakpoints.down('sm')]: {
			height: '20vh',
			paddingTop: '25px'
			// minHeight: '95vh'
		}
	},
	headerText: {
		padding: '5vh'
	},
	subHeaderText: {
		padding: '50px'
	},
	contentGrid: {
		padding: '20px 5%'
	},
	button: {
		display: 'contents',
		width: 'auto'
		// noWrap: true,
		// margin: theme.spacing(1),
		// padding: theme.spacing(0)
	}
});

class Contact extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Element id='Contact' name='Contact'>
				<Paper className={classes.root}>
					<Fade bottom cascade>
						<SectionHeader
							backgroundColor='rgba(68, 68, 13, 1)'
							text='Contact'
						/>
						<Typography
							align='center'
							variant='h4'
							className={classes.subHeaderText}>
							Want to get in touch? <br />
							<br /> Here's where you can find me!
						</Typography>
						<Divider variant='middle' />
						<Grid
							container
							justify='center'
							align='center'
							direction='row'
							className={classes.contentGrid}>
							<List>
								<ListItem>
									<Button
										className={classes.button}
										href='https://www.linkedin.com/in/dmheisel'
										target='_blank'
										ref='noopener noreferrer'>
										<LinkedInIcon />
										linkedin.com/in/dmheisel
									</Button>
								</ListItem>
								<ListItem>
									<Button
										className={classes.button}
										href='https://www.github.com/dmheisel'
										target='_blank'
										ref='noopener noreferrer'>
										<Avatar
											src={GitHubMark}
											style={{ height: '24px', width: '24px' }}
										/>
										<Typography variant='button'>
											github.com/dmheisel
										</Typography>
									</Button>
								</ListItem>
								<ListItem>
									<Button
										className={classes.button}
										aria-label='email'
										target='_blank'
										href="mailto:david@dmheisel.com?subject=Inquiry on David Heisel's Portfolio&body=Hey David!">
										<AlternateEmailIcon />
										d.m.heisel@gmail.com
									</Button>
								</ListItem>
							</List>
						</Grid>

						<Divider variant='middle' />
					</Fade>
				</Paper>
			</Element>
		);
	}
}

export default withStyles(styles)(Contact);
