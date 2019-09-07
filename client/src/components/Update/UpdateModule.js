import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_MODULE } from '../../gql';

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
		<>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Module Name"
				value={info.name}
			/>
			<input type="text" name="moduleSprint" value={sprint} disabled />
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

export default UpdateModule;
