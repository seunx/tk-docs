import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Track from './pages/Track';
import Module from './pages/Module';
import Lesson from './pages/Lesson';
import Dashboard from './pages/Dashboard';
import SprintDash from './pages/SprintDash';
import ModuleDash from './pages/ModuleDash';
import LessonDash from './pages/LessonDash';
import LessonPreview from './pages/LessonPreview';

const App = () => (
	<Router>
		<Home path="/" />
		<Dashboard path="/dashboard" />
		<SprintDash path="/dashboard/:track" />
		<ModuleDash path="/dashboard/:track/:sprint" />
		<LessonDash path="/dashboard/:track/:sprint/:module" />
		<LessonPreview path="/dashboard/:track/:sprint/:module/:lesson" />
		<Track path="/course/:track" />
		<Module path="/course/:track/:module" />
		<Lesson path="/course/:track/:module/:lesson" />
	</Router>
);

export default App;
