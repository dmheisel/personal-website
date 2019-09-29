import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import {CssBaseline } from '@material-ui/core';
import AboutMe from '../AboutMe/AboutMe';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Background from '../Background/Background';
import Skills from '../Skills/Skills';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Parallax
					blur={0}
					bgImage={require('../Views/background.jpg')}
					bgImageAlt='snowy background'
					strength={-1000}>
					<Navbar />
					<AboutMe />
					{/* <Skills /> */}
					<Portfolio />
					<Background />
					<Contact />
				</Parallax>
			</React.Fragment>
		);
	}
}

export default App;
