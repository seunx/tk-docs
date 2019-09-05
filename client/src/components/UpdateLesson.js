import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_LESSON } from '../gql';

export const UpdateLesson = ({ setModal, module, lesson }) => {
	const [info, updateInfo] = useState({
		name: lesson.name,
		description: lesson.description,
		objectives: lesson.objectives,
		details: lesson.details,
		objective: ''
	});
	const [updateLesson, { data }] = useMutation(UPDATE_LESSON, {
		variables: {
			where: { name: lesson.name },
			data: {
				name: info.name,
				description: info.description,
				objectives: { set: info.objectives },
				details: info.details
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
		await updateLesson();
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
			<button onClick={_handleClick}>Update Lesson</button>
		</div>
	);
};

export default UpdateLesson;
