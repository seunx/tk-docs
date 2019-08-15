import React from 'react';
import SprintList from './components/SprintList';
import { Router } from '@reach/router';

const App = () => (
	<Router>
		{/* <h1>Hello World!</h1> */}
		<SprintList path="/" />
	</Router>
);

export default App;
