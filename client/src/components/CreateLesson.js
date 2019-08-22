import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_LESSON, GET_MODULES } from '../gql';

export const CreateLesson = () => {
	const [info, updateInfo] = useState({
		name: '',
		description: '',
		lessonModule: '',
		objectives: [],
		details: '',
		objective: ''
	});
	const [createLesson, { data }] = useMutation(CREATE_LESSON, {
		variables: {
			data: {
				name: info.name,
				description: info.description,
				objectives: { set: info.objectives },
				details: info.details,
				module: { connect: { id: info.lessonModule } }
			}
		}
	});
	const { loading, error, data: modules } = useQuery(GET_MODULES);
	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _addObjective = e => {
		e.preventDefault();
		info.objectives.push(info.objective);
		updateInfo({ ...info, objective: '' });
	};

	return (
		<div>
			<h1>I'm the Create Lesson</h1>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Lesson Name"
				value={info.name}
			/>
			<input
				onChange={_handleChange}
				type="text"
				name="description"
				placeholder="Description"
				value={info.description}
			/>
			<select onChange={_handleChange} name="lessonModule" disabled={loading}>
				<option>Select Module...</option>
				{loading
					? null
					: modules.modules.map(module => (
							<option key={module.id} value={module.id}>
								{module.name}
							</option>
					  ))}
			</select>
			<div>
				Enter Objectives
				<input
					onChange={_handleChange}
					type="text"
					name="objective"
					placeholder="Lesson Objectives"
					value={info.objective}
				/>
				<button onClick={_addObjective}>Add</button>
				{info.objectives.map(o => o)}
			</div>
			<textarea
				onChange={_handleChange}
				name="details"
				placeholder="Lesson Details"
				value={info.details}
			/>
			<button onClick={createLesson}>Create Lesson</button>
		</div>
	);
};

export default CreateLesson;
