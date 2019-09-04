import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_TRACK } from '../gql';

export const UpdateTrack = ({ setModal, track, description, details }) => {
	const [info, updateInfo] = useState({
		name: track,
		description: description,
		details: details
	});
	const [updateTrack, { data }] = useMutation(UPDATE_TRACK, {
		variables: { where: { name: track }, data: { ...info } }
		/*refetchQueries: { query: GET_TRACKS }*/
	});

	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _handleClick = async e => {
		await updateTrack();
		setModal(false);
	};
	return (
		<div>
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
			<button onClick={_handleClick}>Update Track</button>
		</div>
	);
};

export default UpdateTrack;
