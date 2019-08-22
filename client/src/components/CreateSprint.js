import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_SPRINT, GET_TRACKS } from '../gql';

export const CreateSprint = () => {
	const [info, updateInfo] = useState({
		name: '',
		sprintTrack: ''
	});
	const [createSprint, { data }] = useMutation(CREATE_SPRINT, {
		variables: {
			data: { name: info.name, track: { connect: { id: info.sprintTrack } } }
		}
	});
	const { loading, error, data: tracks } = useQuery(GET_TRACKS);

	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	return (
		<div>
			<h1>I'm the Create Sprint</h1>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Sprint Name"
				value={info.name}
			/>
			<select onChange={_handleChange} name="sprintTrack" disabled={loading}>
				<option>Select Track...</option>
				{loading
					? null
					: tracks.tracks.map(track => (
							<option key={track.id} value={track.id}>
								{track.name}
							</option>
					  ))}
			</select>
			<button onClick={createSprint}>Create Sprint</button>
		</div>
	);
};

export default CreateSprint;
