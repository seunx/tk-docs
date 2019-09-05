import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_MODULE } from '../../gql';
import { pageName } from '../../utils';

export const CreateModule = ({ setModal, sprint }) => {
	const [info, updateInfo] = useState({
		name: '',
		description: '',
		moduleSprint: pageName(sprint)
	});
	const [createModule, { data }] = useMutation(CREATE_MODULE, {
		variables: {
			data: {
				name: info.name,
				description: info.description,
				sprint: { connect: { name: info.moduleSprint } }
			}
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
		<div>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Module Name"
				value={info.name}
			/>
			<input
				onChange={_handleChange}
				type="text"
				name="description"
				placeholder="Description"
				value={info.description}
			/>
			<input
				type="text"
				name="moduleSprint"
				value={pageName(sprint)}
				disabled
			/>
			<button onClick={_handleClick}>Create Module</button>
		</div>
	);
};

export default CreateModule;
