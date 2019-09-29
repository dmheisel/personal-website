import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import {
	Paper,
	CssBaseline
} from '@material-ui/core';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Parallax
					// blur={0}
					bgImage={require('../Views/background.jpg')}
					bgImageAlt='snowy background'
					strength={500}>
					<Paper>
						<Navbar />
						<AboutMe />
					</Paper>
					<Portfolio />
					<div style={{ height: '200px' }} />
				</Parallax>
				<div style={{ height: '200px' }} />
			</React.Fragment>
		);
	}
}

export default App;
