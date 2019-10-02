import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PortfolioTechList from './PortfolioTechList';

const styles = theme => ({
	portfolioItem: {
    // maxHeight: '70vh',
    // padding: '5% 0',
		margin: theme.spacing(1),
		padding: theme.spacing(1)
	},
	imageContainer: {
		height: '400px',
		width: '300px',
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		borderRadius: '15px',
		// padding: '20px'
	}
});

class PortfolioItem extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				item
				xs={12}
				justify='space-between'
        align='space-between'
        direction={this.props.direction}
				className={classes.portfolioItem}>
				<Grid item container spacing={2} xs={12} md={5}>
					<Grid item xs={12}>
						<Typography variant='h2' align='center'>
							{this.props.title}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='body1' align='center'>
							{this.props.text}
						</Typography>
					</Grid>
          <PortfolioTechList techList={this.props.techList}/>
				</Grid>
				<Grid item xs={12} md={5}>
					<a
						href={this.props.url}
						target='_blank'
						rel='noopener noreferrer'>
						<div
							style={{ backgroundImage: `url(${this.props.image})` }}
							className={classes.imageContainer}
						/>
					</a>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(PortfolioItem);
