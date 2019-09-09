import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_LESSON } from '../../gql';

export const CreateLesson = ({ setModal, module, refetch }) => {
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
				value={info.description}
			/>
			<label htmlFor="objectives">Objectives</label>
			<textarea
				className="area-lesson"
				onChange={_handleChange}
				type="text"
				name="objective"
				value={info.objective}
			/>
			<label htmlFor="details">Details</label>
			<textarea onChange={_handleChange} name="details" value={info.details} />
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
