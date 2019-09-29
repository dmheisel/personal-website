import React, { Component } from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core'
import Headshot from './Headshot1.jpg';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	root: {
    width: '50%',
    paddingTop: '50px',
		margin: 'auto'
	},
	headShot: {
		height: '250px',
    width: '250px',
    margin: 'auto'
		// margin: theme.spacing(2)
	},
	titleText: {
		// fontWeight: 'bolder',
		textTransform: 'uppercase'
	}
});

class AboutMe extends Component {
  render() {
    const {classes} = this.props
    return (
      <Grid className={classes.root} container spacing={3} justify='center' alignItems='center'>
        <Grid item xs={12}>
					<Avatar src={Headshot} className={classes.headShot} />
				</Grid>
        <Grid item xs={12}>
					<Typography variant='h3' align='center' className={classes.titleText}>
						David Heisel
					</Typography>
				</Grid>
        <Grid item xs={12}>
					<Typography
						variant='h5'
						align='center'
						className={classes.titleText}>
						I'm a Full Stack Software Engineer focused on
					</Typography>
				</Grid>
			</Grid>
		);
  }
}

export default withStyles(styles)(AboutMe);
