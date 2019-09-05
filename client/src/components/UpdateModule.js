import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { pageName } from '../utils';
import { UPDATE_MODULE } from '../gql';

export const UpdateModule = ({ setModal, sprint, module, description }) => {
	const [info, updateInfo] = useState({
		name: module,
		description: description
	});
	const [updateModule, { data }] = useMutation(UPDATE_MODULE, {
		variables: { where: { name: module }, data: { ...info } }
		/*refetchQueries: { query: GET_TRACKS }*/
	});
	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};

	const _handleClick = async e => {
		await updateModule();
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
			<input type="text" name="moduleSprint" value={sprint} disabled />
			<button onClick={_handleClick}>Update Module</button>
		</div>
	);
};

export default UpdateModule;
