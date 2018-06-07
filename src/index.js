import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './Components/App';
import registerServiceWorker from './Start/registerServiceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
	, document.getElementById('root'));
registerServiceWorker();
