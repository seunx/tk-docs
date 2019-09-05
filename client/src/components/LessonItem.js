import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateLesson from '../components/UpdateLesson';
import Modal from '../components/Modal';
import { DELETE_LESSON } from '../gql';
import { track_item } from '../styles';
import { urlName, pageName } from '../utils/index';

const LessonItem = ({ track, sprint, module, lesson }) => {
	const [showModal, setModal] = useState(false);
	const [deleteLesson, { loading, error, data }] = useMutation(DELETE_LESSON, {
		variables: {
			where: { name: lesson.name }
			/*refetchQueries: [{ query: GET_TRACKS }] */
		}
	});
	return (
		<div css={track_item}>
			<Link
				to={`/dashboard/${track}/${sprint}/${module}/${urlName(lesson.name)}`}
			>
				<h1>{lesson.name}</h1>
			</Link>
			<p>{lesson.description}</p>
			<p>Objectives:</p>
			<ul>
				{lesson.objectives.map((o, i) => (
					<li key={o[0] + i}>{o}</li>
				))}
			</ul>
			<button onClick={deleteLesson}>Delete Item</button>
			{showModal ? (
				<Modal>
					<h1 style={{ fontSize: '1rem' }}>Update Lesson</h1>
					<div className="btn-container">
						<button onClick={() => setModal(!showModal)}>Close Modal</button>
					</div>
					<UpdateLesson
						setModal={setModal}
						module={pageName(module)}
						lesson={lesson}
					/>
				</Modal>
			) : null}
			<button onClick={() => setModal(!showModal)}>Edit Item</button>
		</div>
	);
};

export default LessonItem;
