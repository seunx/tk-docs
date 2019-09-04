import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import { DELETE_LESSON } from '../gql';
import { track_item } from '../styles';
import { urlName } from '../utils/index';

const LessonItem = ({ track, sprint, module, lesson }) => {
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
			<button>Edit Item</button>
		</div>
	);
};

export default LessonItem;
