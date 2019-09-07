import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_SPRINT } from '../../gql';

export const UpdateSprint = ({ setModal, track, sprint, description }) => {
	const [info, updateInfo] = useState({
		name: sprint,
		description: description
	});
	const [updateSprint, { data }] = useMutation(UPDATE_SPRINT, {
		variables: { where: { name: sprint }, data: { ...info } }
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
		<>
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
				value={track}
			/>
			<textarea
				onChange={_handleChange}
				type="text"
				name="description"
				value={info.description}
			/>
			<div className="btn-container">
				<button className="btn primary" onClick={_handleClick}>
					Update
				</button>
				<button className="btn light" onClick={() => setModal(false)}>
					Cancel
				</button>
			</div>
		</>
	);
};

export default UpdateSprint;
