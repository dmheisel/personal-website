import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import 'typeface-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {deepOrange, teal} from '@material-ui/core/colors'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: teal,
		secondary: deepOrange,
		background: {
			paper: 'rgba(10, 45, 58, 0.75)',
			default: '#424242'
		}
	}
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
