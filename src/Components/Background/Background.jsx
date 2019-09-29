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
				</Grid>
			</Paper>
		);
	}
}

export default withStyles(styles)(Background);
