import React from 'react';
import { render } from 'react-dom';

import App from './App.js';
import { Provider } from './api';
import './index.css';

const WrappedApp = () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};

render(<WrappedApp />, document.getElementById('root'));
