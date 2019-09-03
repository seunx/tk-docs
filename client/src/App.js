import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Track from './pages/Track';
import Module from './pages/Module';
import Lesson from './pages/Lesson';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';

const App = () => (
	<Router>
		<Home path="/" />
		<Dashboard path="/dashboard" />
		<Track path="/course/:track" />
		<Module path="/course/:track/:module" />
		<Lesson path="/course/:track/:module/:lesson" />
	</Router>
);

export default App;
