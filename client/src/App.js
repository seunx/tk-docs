import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Module from './pages/Module';
import Lesson from './pages/Lesson';
import Create from './pages/Create';

const App = () => (
	<Router>
		<Home path="/" />
		<Module path="/:id" />
		<Lesson path="/:moduleId/:lessonId" />
		<Create path="/new" />
	</Router>
);

export default App;
