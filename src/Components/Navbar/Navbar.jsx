import React, { Component } from 'react';
import { Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
const styles = theme => ({
	toolBar: {
		position: 'fixed',
		width: '100vw'
	}
});
class Navbar extends Component {
  render() {
    const {classes} = this.props
    return (
			<Toolbar className={classes.toolBar}>
				<Typography>Test</Typography>
			</Toolbar>
		);
  }
}

export default withStyles(styles)(Navbar);
