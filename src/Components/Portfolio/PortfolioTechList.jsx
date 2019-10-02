import React, { Component } from 'react';
import { Grid, Typography, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GoogleMapsAPI from '../ExternalIcons/googlemapsapi.png';
import Postgress from '../ExternalIcons/postgreSQL.png';
import Git from '../ExternalIcons/GitMark.png'
import ReactJs from '../ExternalIcons/React.svg';
import Redux from '../ExternalIcons/redux.svg';
import NodeJs from '../ExternalIcons/nodeJs.svg';
import JavaScript from '../ExternalIcons/Javascript.svg';

const styles = theme => ({
	icon: {
		height: '50px',
		width: '50px'
	}
});
class PortfolioTechList extends Component {
	getImage = tech => {
		switch (tech) {
			case 'JavaScript':
				return JavaScript;
			case 'NodeJs':
				return NodeJs;
			case 'ReactJs':
				return ReactJs;
			case 'Redux':
				return Redux;
			case 'PostgreSQL':
				return Postgress;
			case 'GoogleMapsAPI':
				return GoogleMapsAPI;
			case 'Git':
				return Git;
			default:
				return;
		}
	};
	render() {
		const { classes } = this.props;
		const gridImages =
			this.props.techList &&
			this.props.techList.map(item => (
				<Grid item xs key={item}>
					<Tooltip title={item}>
						<img
							className={classes.icon}
							src={this.getImage(item)}
							alt='tech item'
						/>
					</Tooltip>
				</Grid>
			));
		return (
			<Grid container item xs={12} justify='center' align='center'>
				<Grid item xs={12}>
					<Typography variant='body2' align='center'>
						Built using some of the following technologies:
					</Typography>
				</Grid>
				{gridImages}

			</Grid>
		);
	}
}

export default withStyles(styles)(PortfolioTechList);
