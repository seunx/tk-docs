import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Module from './pages/Module';
import Lesson from './pages/Lesson';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';

const App = () => (
	<Router>
		<Home path="/" />
		<Module path="/:id" />
		<Lesson path="/:moduleId/:lessonId" />
		<Create path="/create" />
		<Dashboard path="/dashboard" />
	</Router>
);

export default App;
