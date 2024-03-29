import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { CssBaseline } from '@material-ui/core';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Background from '../Background/Background';
import Bio from '../Bio/Bio';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Parallax
					blur={0}
					bgImage={require('../Views/background.jpg')}
					bgImageAlt='stone stairs and tree'
					strength={500}>
					<Navbar />
					<Header />
					<Bio />
					<Portfolio />
				</Parallax>
				<Parallax
					blur={0}
					bgImage={require('../Views/Castelneau.jpg')}
					bgImageAlt='Castelneau vista'
					strength={-200}>
					<Background />
				</Parallax>
				<Parallax
					blur={0}
					bgImage={require('../Views/PontDuGard.jpg')}
					bgImageAlt='Pont Du Gard'
					strength={500}>
					<Contact />
				</Parallax>
			</React.Fragment>
		);
	}
}

export default App;
