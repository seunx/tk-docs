import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_LESSON } from '../../gql';

export const UpdateLesson = ({ setModal, module, lesson, refetch }) => {
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
		refetch();
		setModal(false);
	};

	return (
		<>
			<label htmlFor="name">Name</label>
			<input
				onChange={_handleChange}
				type="text"
				name="name"
				placeholder="Lesson Name"
				value={info.name}
			/>
			<label htmlFor="module">Module</label>
			<input type="text" name="lessonModule" value={module} disabled />
			<label htmlFor="description">Description</label>
			<textarea
				className="area-lesson"
				onChange={_handleChange}
				type="text"
				name="description"
				placeholder="Description"
				value={info.description}
			/>

			<label htmlFor="objective">Objectives</label>
			<textarea
				className="area-lesson"
				onChange={_handleChange}
				type="text"
				name="objective"
				placeholder="Lesson Objectives"
				value={info.objective}
			/>
			<label htmlFor="details">Details</label>
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
