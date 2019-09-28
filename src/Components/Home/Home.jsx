import React, { Component } from 'react';
import { Avatar, Grid, IconButton, Button } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import Headshot from './Headshot1.jpg'

const styles = theme => ({
  headshot: {
    height: '150px',
    width: '150px',
    margin: theme.spacing(3),
  }
})

class Home extends Component {
  render() {
    const {classes} = this.props
    return (
      <React.Fragment>
        <Grid container spacing={8} direction="row" justify="center" alignItems="center">
          <Grid item>
            <Avatar src={Headshot} className={classes.headshot} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
