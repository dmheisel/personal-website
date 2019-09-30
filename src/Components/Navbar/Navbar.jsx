import React, { Component } from 'react';
import NavbarTab from './NavbarTab';
import Fade from 'react-reveal'
import { Tabs } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	toolBar: {
		position: 'fixed',
		display: 'flex',
		zIndex: 1,
		[theme.breakpoints.up('md')]: {
			left: '25px',
			top: '15vh'
		},
		[theme.breakpoints.down('sm')]: {
			backgroundColor: theme.palette.background.default,
			width: '100vw',
			justifyContent: 'center'
		}
	},
	button: {
		padding: theme.spacing(1),
		margin: theme.spacing(1)
	}
});
class Navbar extends Component {
	state = {
		value: 0
	};

	handleClick = newValue => {
		this.setState({ value: newValue });
	};

	render() {
		const { classes } = this.props;
		return (
			// <Toolbar className={classes.toolBar}>
			<div className={classes.toolBar}>
				<Fade top cascade>
				{isWidthUp('md', this.props.width) ? (
					<Tabs
						orientation='vertical'
						value={this.state.value}
						textColor='secondary'
						indicatorColor='primary'>
						<NavbarTab to='About' value={0} handleClick={this.handleClick} />
						<NavbarTab
							to='Portfolio'
							value={1}
							handleClick={this.handleClick}
						/>
						<NavbarTab
							to='Background'
							value={2}
							handleClick={this.handleClick}
						/>
						<NavbarTab to='Contact' value={3} handleClick={this.handleClick} />
					</Tabs>
				) : (
					<Tabs variant='fullWidth' value={this.state.value}>
						<NavbarTab to='About' value={0} handleClick={this.handleClick} />
						<NavbarTab
							to='Portfolio'
							value={1}
							handleClick={this.handleClick}
						/>
						<NavbarTab
							to='Background'
							value={2}
							handleClick={this.handleClick}
						/>
						<NavbarTab to='Contact' value={3} handleClick={this.handleClick} />
					</Tabs>
						)}
					</Fade>
			</div>
		);
	}
}

export default withWidth()(withStyles(styles)(Navbar));
