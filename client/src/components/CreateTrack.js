import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_TRACK } from '../gql';

export const CreateTrack = () => {
	const [info, updateInfo] = useState({
		name: '',
		description: '',
		details: ''
	});
	const [createTrack, { data }] = useMutation(CREATE_TRACK, {
		variables: { data: info }
	});

	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	return (
		<div>
			<h1>I'm The Create Track</h1>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Track Name"
				value={info.name}
			/>
			<input
				onChange={_handleChange}
				type="text"
				name="description"
				placeholder="Description"
				value={info.description}
			/>
			<textarea
				onChange={_handleChange}
				name="details"
				placeholder="Track Details"
				value={info.details}
			/>
			<button onClick={createTrack}>Create Track</button>
		</div>
	);
};

export default CreateTrack;
