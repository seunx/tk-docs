import React from 'react';

import Layout from '../components/layout';
import CreateTrack from '../components/CreateTrack';
import CreateSprint from '../components/CreateSprint';
import CreateModule from '../components/CreateModule';
import CreateLesson from '../components/CreateLesson';

const Create = () => {
	return (
		<Layout>
			<CreateTrack />
			<CreateSprint />
			<CreateModule />
			<CreateLesson />
		</Layout>
	);
};
export default Create;
