import React from 'react';
import Home from './pages/Home';
import { Router } from '@reach/router';

const App = () => (
	<Router>
		<Home path="/"></Home>
	</Router>
);

export default App;
