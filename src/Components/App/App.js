import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Paper, AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

import Home from '../Home/Home'

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw'
  },
  appbar: {
    // margin: theme.spacing(2),
    // padding: theme.spacing(2)
  }
})
class App extends Component {
  render() {
    const { classes } = this.props;
		return (
      <div>
        <CssBaseline />
				<Paper>
					<AppBar position='static'>
						<Toolbar>
							<Typography>Content</Typography>
						</Toolbar>
          </AppBar>
          <Router>
            <Route exact path="/" component={Home} />
            {/* <Route path="/resume" component={Resume} /> */}
          </Router>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(App);
