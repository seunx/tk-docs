import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_LESSON } from '../../gql';

export const UpdateLesson = ({ setModal, module, lesson }) => {
	const [info, updateInfo] = useState({
		name: lesson.name,
		description: lesson.description,
		objective: lesson.objective,
		details: lesson.details
	});
	const [updateLesson, { data }] = useMutation(UPDATE_LESSON, {
		variables: {
			where: { name: lesson.name },
			data: {
				...info
			}
		}
	});
	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _handleClick = async e => {
		await updateLesson();
		setModal(false);
	};

	return (
		<>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Lesson Name"
				value={info.name}
			/>
			<textarea
				onChange={_handleChange}
				type="text"
				name="description"
				placeholder="Description"
				value={info.description}
			/>
			<input type="text" name="lessonModule" value={module} disabled />

			<textarea
				onChange={_handleChange}
				type="text"
				name="objective"
				placeholder="Lesson Objectives"
				value={info.objective}
			/>
			<textarea
				onChange={_handleChange}
				name="details"
				placeholder="Lesson Details"
				value={info.details}
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

export default UpdateLesson;
