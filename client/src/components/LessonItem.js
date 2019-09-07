import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateLesson from './Update/UpdateLesson';
import Modal from '../components/Modal';
import { DELETE_LESSON } from '../gql';
import { urlName, pageName } from '../utils/index';
import { dash_item } from '../styles';
import ModalContent from './ModalContent';
import MarkDown from './MarkDown';

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
				<h4>{lesson.name}</h4>
			</Link>
			<p>{lesson.description}</p>
			<p>Objectives:</p>
			<div className="objectives">
				<MarkDown content={lesson.objective} />
			</div>
			{showModal ? (
				<Modal>
					<ModalContent
						header="Update Lesson"
						setModal={setModal}
						component={
							<UpdateLesson
								setModal={setModal}
								module={pageName(module)}
								lesson={lesson}
							/>
						}
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
