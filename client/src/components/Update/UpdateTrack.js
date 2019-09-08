import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_TRACK } from '../../gql';

export const UpdateTrack = ({ setModal, track, description, refetch }) => {
	const [info, updateInfo] = useState({
		name: track,
		description: description
	});
	const [updateTrack, { data }] = useMutation(UPDATE_TRACK, {
		variables: { where: { name: track }, data: { ...info } }
	});

	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _handleClick = async e => {
		await updateTrack();
		refetch();
		setModal(false);
	};
	return (
		<>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Track Name"
				value={info.name}
			/>
			<textarea
				onChange={_handleChange}
				type="text"
				name="description"
				placeholder="Description"
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

export default UpdateTrack;
