import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Topic from './pages/Topic';
import SubTopic from './pages/SubTopic';

const App = () => (
	<Router>
		<Home path="/"></Home>
		<Topic path="/:id" />
		<SubTopic path="/:moduleId/:lessonId" />
	</Router>
);

export default App;
