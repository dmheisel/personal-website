import React, { Component } from 'react';
import NavbarTab from './NavbarTab';
import { Toolbar, Tabs } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	toolBar: {
		position: 'fixed',
		width: '100vw',
		display: 'flex',
		// justifyContent: 'flex-end',
		zIndex: 1,
		[theme.breakpoints.down('sm')] : {
			backgroundColor: theme.palette.background.default,
			justifyContent: 'center'
		},
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
				{isWidthUp('sm', this.props.width) ? (
					<Tabs
						orientation='vertical'
						// variant='standard'
						value={this.state.value}>
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
				</div>
			// </Toolbar>
		);
	}
}

export default withWidth()(withStyles(styles)(Navbar));
