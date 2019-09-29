import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { Toolbar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ScrollLink = Scroll.Link;

const styles = theme => ({
	toolBar: {
		position: 'fixed',
		width: '100vw',
		display: 'flex',
		justifyContent: 'flex-end'
	},
	button: {
		padding: theme.spacing(1),
		margin: theme.spacing(1)
	}
});
class Navbar extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Toolbar className={classes.toolBar}>
				<ScrollLink to='About' spy={true} smooth={true} duration={500}>
					<Button color='primary' href='#Portfolio' size='large'>
						About Me
					</Button>
				</ScrollLink>
				<ScrollLink to='Portfolio' spy={true} smooth={true} duration={500}>
					<Button color='primary' href='#Portfolio' size='large'>
						Portfolio
					</Button>
				</ScrollLink>
				<ScrollLink to='Background' spy={true} smooth={true} duration={500}>
					<Button color='primary' href='#Background' size='large'>
						Background
					</Button>
				</ScrollLink>
				<ScrollLink to='Contact' spy={true} smooth={true} duration={500}>
					<Button color='primary' href='#Contact' size='large'>
						Contact
					</Button>
				</ScrollLink>
				<Button
					color='primary'
					size='large'
					href='https://docs.google.com/document/d/1cmX_RTbqVxVoztQxzf3Lb4jTTV4hmUIv9YPyYayBfRI/edit?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'>
					Resume
				</Button>
			</Toolbar>
		);
	}
}

export default withStyles(styles)(Navbar);
