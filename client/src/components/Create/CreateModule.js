import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_MODULE } from '../../gql';
import { pageName } from '../../utils';

export const CreateModule = ({ setModal, sprint }) => {
	const [info, updateInfo] = useState({
		name: '',
		description: ''
	});
	const [createModule, { data }] = useMutation(CREATE_MODULE, {
		variables: {
			data: { ...info, sprint: { connect: { name: pageName(sprint) } } }
		}
	});
	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};

	const _handleClick = async e => {
		await createModule();
		setModal(false);
	};
	return (
		<>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Module Name"
				value={info.name}
			/>
			<input
				type="text"
				name="moduleSprint"
				value={pageName(sprint)}
				disabled
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

export default CreateModule;
