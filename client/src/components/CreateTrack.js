import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_TRACK, GET_TRACKS } from '../gql';

export const CreateTrack = props => {
	const [info, updateInfo] = useState({
		name: '',
		description: '',
		details: ''
	});
	const [createTrack, { data }] = useMutation(CREATE_TRACK, {
		variables: { data: info },
		refetchQueries: { query: GET_TRACKS }
	});

	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _handleClick = async e => {
		await createTrack();
		props.setModal(false);
		// setTimeout(() => {
		// 	props.setModal(false);
		// }, 5000);
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
			<button onClick={_handleClick}>Create Track</button>
		</div>
	);
};

export default CreateTrack;
