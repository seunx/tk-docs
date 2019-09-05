import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_SPRINT } from '../gql';

export const UpdateSprint = ({ setModal, track, sprint }) => {
	const [info, updateInfo] = useState({
		name: sprint,
		sprintTrack: track
	});
	const [updateSprint, { data }] = useMutation(UPDATE_SPRINT, {
		variables: { where: { name: sprint }, data: { name: info.name } }
		/*refetchQueries: { query: GET_TRACKS }*/
	});

	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _handleClick = async e => {
		await updateSprint();
		setModal(false);
	};
	return (
		<div>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Sprint Name"
				value={info.name}
			/>
			<input
				onChange={_handleChange}
				type="text"
				name="sprintTrack"
				disabled
				value={info.sprintTrack}
			/>
			<button onClick={_handleClick}>Update Sprint</button>
		</div>
	);
};

export default UpdateSprint;
