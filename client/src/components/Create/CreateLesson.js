import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_LESSON } from '../../gql';

export const CreateLesson = ({ setModal, module }) => {
	const [info, updateInfo] = useState({
		name: '',
		description: '',
		lessonModule: module,
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
				module: { connect: { name: info.lessonModule } }
			}
		}
	});
	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _addObjective = e => {
		e.preventDefault();
		info.objectives.push(info.objective);
		updateInfo({ ...info, objective: '' });
	};
	const _handleClick = async e => {
		await createLesson();
		setModal(false);
	};

	return (
		<div>
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
			<input type="text" name="lessonModule" value={module} disabled />
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
			<button onClick={_handleClick}>Create Lesson</button>
		</div>
	);
};

export default CreateLesson;
