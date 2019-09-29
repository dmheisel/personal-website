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
		padding: '20px 10%'
	},
	button: {
		display: 'block',
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
					<Grid container justify='center' align='center' className={classes.contentGrid}>
						<Grid container item justify='center' xs={12} md={6}>
							<Grid item xs={12}>
								<List style={{ display: 'block', margin: 'auto' }}>
									<ListItem>
										<Button className={classes.button}>
											<LinkedInIcon />
											linkedin.com/in/david-heisel
										</Button>
									</ListItem>
									<ListItem>
										<Button className={classes.button}>
											<AlternateEmailIcon />
											d.m.heisel@gmail.com
										</Button>
									</ListItem>
								</List>
							</Grid>
						</Grid>
						<Grid item container justify='center' xs={12} md={6}>
							<Grid>
								<List style={{ display: 'block', margin: 'auto' }}>
									<ListItem>
										<Button
											className={classes.button}
											style={{ display: 'flex', alignItems: 'baseline' }}>
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
										<Button className={classes.button}>
											<InstagramIcon />
											instagram.com/dheis3l
										</Button>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Grid>

					<Divider />
				</Paper>
			</Element>
		);
	}
}

export default withStyles(styles)(Contact);
