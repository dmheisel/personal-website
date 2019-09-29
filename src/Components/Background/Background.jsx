import React, { Component } from 'react';
import {
	Paper,
	Typography,
	Grid,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	List,
	ListItem,
	ListItemText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(10, 58, 31, 0.85)',
		padding: '50px 10%'
	},
	headerText: {
		padding: '25px'
	}
});
class Background extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<Typography variant='h2' align='center' className={classes.headerText}>
					My Background
				</Typography>
				<Grid container spacing={8}>
					<Grid item xs={8}>
						<Card>
							<CardHeader
								title='Prime Digital Academy'
								subheader='June 2019 - October 2019'
							/>
							<CardContent>
								<List dense>
									<ListItem>
										<ListItemText>
											• Developed a Solo Project and a Team Project in two week sprints.  Responsible for scoping, designing, and developing the project to meet our client's business needs.
										</ListItemText>
									</ListItem>
									<Divider />
									<ListItem>
										<ListItemText>
											• Fast-paced, immersive, team-based learning environment
											to quickly develop a host of technical and interpersonal
											skills crucial for full stack software development.
										</ListItemText>
									</ListItem>
									<Divider />
									<ListItem>
										<ListItemText>
											• Prime fosters in its students the ability to quickly
											learn and develop new skills and easily integrate into new
											teams.
										</ListItemText>
									</ListItem>
									<Divider />
									<ListItem>
										<ListItemText>
											• Emphasis on modern tools and frameworks, building skills
											in Javascript, Node, React, Redux, SQL, Postgress, Agile
											Software Development, HTML, CSS, and more.
										</ListItemText>
									</ListItem>
								</List>
							</CardContent>
						</Card>
					</Grid>
					<Grid container xs={12} spacing={8} justify='flex-end'>
						<Grid item xs={8}>
							<Card>
								<CardHeader
									title='Financial Worker, St Louis County PHHS'
									subheader='August 2013 - June 2019'
									align="right"
								/>
								<CardContent>
									<List dense>
										<ListItem>
											<ListItemText>
												• Worked together with a team to brainstorm solutions to
												complicated policy issues and present possible solutions
												for policy oversights to MN DHS officials.
											</ListItemText>
										</ListItem>
										<Divider />
										<ListItem>
											<ListItemText>
												• Managed maintenance for a caseload of 250+ clients
												receiving various Medical Assistance and public
												assistance programs.
											</ListItemText>
										</ListItem>
										<Divider />
										<ListItem>
											<ListItemText>
												• Maintained familiarity with complex and ever-changing
												state policy for programs, understanding the complicated
												statutes and laws.
											</ListItemText>
										</ListItem>
										<Divider />
										<ListItem>
											<ListItemText>
												• Communicated program policies in easy-to-understand
												terms for an aging and disabled client base and their
												families.
											</ListItemText>
										</ListItem>
									</List>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

export default withStyles(styles)(Background);
