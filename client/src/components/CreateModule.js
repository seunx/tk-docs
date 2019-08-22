import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_MODULE, GET_SPRINTS } from '../gql';

export const CreateModule = () => {
	const [info, updateInfo] = useState({
		name: '',
		description: '',
		moduleSprint: ''
	});
	const [createModule, { data }] = useMutation(CREATE_MODULE, {
		variables: {
			data: {
				name: info.name,
				description: info.description,
				sprint: { connect: { id: info.moduleSprint } }
			}
		}
	});
	const { loading, error, data: sprints } = useQuery(GET_SPRINTS);
	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};

	return (
		<div>
			<h1>I'm the Create Module</h1>
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
			<select onChange={_handleChange} name="moduleSprint" disabled={loading}>
				<option>Select Sprint...</option>
				{loading
					? null
					: sprints.sprints.map(sprint => (
							<option key={sprint.id} value={sprint.id}>
								{sprint.name}
							</option>
					  ))}
			</select>
			<button onClick={createModule}>Create Module</button>
		</div>
	);
};

export default CreateModule;
