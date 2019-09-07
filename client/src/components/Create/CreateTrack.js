import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_TRACK } from '../../gql';

export const CreateTrack = ({ setModal }) => {
	const [info, updateInfo] = useState({
		name: '',
		description: ''
	});
	const [createTrack, { data }] = useMutation(CREATE_TRACK, {
		variables: { data: info }
		/* refetchQueries: { query: GET_TRACKS } */
	});

	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _handleClick = async e => {
		await createTrack();
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
					Create
				</button>
				<button className="btn light" onClick={() => setModal(false)}>
					Cancel
				</button>
			</div>
		</>
	);
};

export default CreateTrack;
