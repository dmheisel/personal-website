import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import {
	Paper,
	CssBaseline
} from '@material-ui/core';
import AboutMe from '../AboutMe/AboutMe';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Background from '../Background/Background';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Parallax
					blur={0}
					bgImage={require('../Views/background.jpg')}
					bgImageAlt='snowy background'
					strength={2000}>
						<Navbar />
						<AboutMe />
					<Portfolio />
					<Background />
					<Contact />
				</Parallax>
				<div style={{ height: '200px' }} />
			</React.Fragment>
		);
	}
}

export default App;
