import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_LESSON } from '../../gql';

export const CreateLesson = ({ setModal, module }) => {
	const [info, updateInfo] = useState({
		name: '',
		description: '',
		details: '',
		objective: ''
	});
	const [createLesson, { data }] = useMutation(CREATE_LESSON, {
		variables: {
			data: { ...info, module: { connect: { name: module } } }
		}
	});
	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};
	const _handleClick = async e => {
		await createLesson();
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
					Create
				</button>
				<button className="btn light" onClick={() => setModal(false)}>
					Cancel
				</button>
			</div>
		</>
	);
};

export default CreateLesson;
