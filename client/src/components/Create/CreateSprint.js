import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_SPRINT } from '../../gql';
import { pageName } from '../../utils';

export const CreateSprint = ({ setModal, track }) => {
	const [info, updateInfo] = useState({
		name: '',
		description: ''
	});
	const [createSprint, { data }] = useMutation(CREATE_SPRINT, {
		variables: {
			data: { ...info, track: { connect: { name: pageName(track) } } }
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
		<>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Sprint Name"
				value={info.name}
			/>
			<input type="text" name="track" value={pageName(track)} disabled />
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

export default CreateSprint;
