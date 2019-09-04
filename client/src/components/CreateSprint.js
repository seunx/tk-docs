import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_SPRINT } from '../gql';
import { pageName } from '../utils';

export const CreateSprint = ({ track, setModal }) => {
	const [info, updateInfo] = useState({
		name: '',
		sprintTrack: pageName(track)
	});
	const [createSprint, { data }] = useMutation(CREATE_SPRINT, {
		variables: {
			data: { name: info.name, track: { connect: { name: info.sprintTrack } } }
		}
	});

	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};

	const _handleClick = async e => {
		await createSprint();
		setModal(false);
	};
	return (
		<div>
			<h1>Create Sprint</h1>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Sprint Name"
				value={info.name}
			/>
			<input type="text" name="track" value={track} disabled />
			<button onClick={_handleClick}>Create Sprint</button>
		</div>
	);
};

export default CreateSprint;
