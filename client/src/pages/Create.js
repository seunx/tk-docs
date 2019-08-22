import React from 'react';
import CreateTrack from '../components/CreateTrack';
import CreateSprint from '../components/CreateSprint';
import CreateModule from '../components/CreateModule';
import CreateLesson from '../components/CreateLesson';

const Create = () => {
	return (
		<div>
			<h1>I'm The create page</h1>
			<CreateTrack />
			<CreateSprint />
			<CreateModule />
			<CreateLesson />
		</div>
	);
};
export default Create;
