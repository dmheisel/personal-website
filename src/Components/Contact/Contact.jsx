import React, { Component } from 'react';
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
		padding: theme.spacing(0)
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
				<Typography align="center" variant="h5" className={classes.headerText}>Want to connect?  Feel free to get in touch with me!</Typography>
				<Divider />
				<Grid container justify='space-between' align='center'>
					<Grid item xs={5}>
						<List style={{ display: 'inline-block' }}>
							<ListItem>
								<Button className={classes.button}>
									<LinkedInIcon />
									www.linkedin.com/in/david-heisel
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
					<Grid item xs={5}>
						<List style={{ display: 'inline-block' }}>
							<ListItem>
								<Button
									className={classes.button}
									style={{ display: 'flex', alignItems: 'baseline' }}>
									<Avatar
										src={GitHubMark}
										style={{ height: '24px', width: '24px' }}
									/>
									<Typography variant='button'>github.com/dmheisel</Typography>
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

				<Divider />
			</Paper>
		);
	}
}

export default withStyles(styles)(Contact);
