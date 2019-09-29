import React, { Component } from 'react';
import { Element } from 'react-scroll';

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
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubMark from '../ExternalIcons/GitHub-Mark-Light-64px.png';

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(48, 58, 10, 0.85)',
		minHeight: '100vh'
		// margin: 'auto'
	},
	header: {
		width: '100vw',
		height: '20vh',
		align: 'center',
		justify: 'center',
		backgroundColor: 'rgba(48, 58, 10, 1)'
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
		width: 'auto',
		// noWrap: true,
		margin: theme.spacing(1),
		padding: theme.spacing(0)
	}
});

class Contact extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Element id='Contact' name='Contact'>
				<Paper className={classes.root}>
					<div className={classes.header}>
						<Typography
							align='center'
							variant='h2'
							className={classes.headerText}>
							Contact
						</Typography>
					</div>
					<Divider />
					<Typography
						align='center'
						variant='h5'
						className={classes.subHeaderText}>
						Want to connect? Get in touch with me!
					</Typography>
					<Divider />
					<Grid
						container
						justify='center'
						align='center'
						direction='row'
						className={classes.contentGrid}>
						<Grid container item justify='center'>
							<List style={{ display: 'inline-flex' }}>
								<Grid item xs={12} md={3}>
									<ListItem>
										<Button className={classes.button}>
											<LinkedInIcon />
											linkedin.com/in/dheisel
										</Button>
									</ListItem>
								</Grid>
								<Grid item xs={12} md={3}>
									<ListItem>
										<Button className={classes.button}>
											<AlternateEmailIcon />
											d.m.heisel@gmail.com
										</Button>
									</ListItem>
								</Grid>
								<Grid item xs={12} md={3}>
									<ListItem>
										<Button className={classes.button}>
											<Avatar
												src={GitHubMark}
												style={{ height: '24px', width: '24px' }}
											/>
											<Typography variant='button'>
												github.com/dmheisel
											</Typography>
										</Button>
									</ListItem>
								</Grid>
								<Grid item xs={12} md={3}>
									<ListItem>
										<Button className={classes.button}>
											<InstagramIcon />
											instagram.com/dheis3l
										</Button>
									</ListItem>
								</Grid>
							</List>
						</Grid>
						{/* <Grid item container justify='center' xs={12} md={5}>
							<Grid item xs={12}>
								<List style={{ display: 'block', margin: 'auto' }}></List>
							</Grid>
						</Grid> */}
					</Grid>

					<Divider />
				</Paper>
			</Element>
		);
	}
}

export default withStyles(styles)(Contact);
