import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateLesson from './Update/UpdateLesson';
import Modal from '../components/Modal';
import { DELETE_LESSON } from '../gql';
import { urlName, pageName } from '../utils/index';
import { dash_item } from '../styles';

const LessonItem = ({ track, sprint, module, lesson }) => {
	const [showModal, setModal] = useState(false);
	const [deleteLesson, { loading, error, data }] = useMutation(DELETE_LESSON, {
		variables: {
			where: { name: lesson.name }
			/*refetchQueries: [{ query: GET_TRACKS }] */
		}
	});
	return (
		<div css={dash_item}>
			<Link
				to={`/dashboard/${track}/${sprint}/${module}/${urlName(lesson.name)}`}
			>
				<h3>{lesson.name}</h3>
			</Link>
			<p>{lesson.description}</p>
			<p>Objectives:</p>
			<ul>
				{lesson.objectives.map((o, i) => (
					<li key={o[0] + i}>{o}</li>
				))}
			</ul>
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
			<div>
				<button className="btn secondary" onClick={() => setModal(!showModal)}>
					Edit Item
				</button>
				<button className="btn light" onClick={deleteLesson}>
					Delete Item
				</button>
			</div>
		</div>
	);
};

export default LessonItem;
