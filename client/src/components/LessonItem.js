import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import { DELETE_SPRINT, GET_TRACKS } from '../gql';
import { track_item } from '../styles';
import { urlName } from '../utils/index';

const LessonItem = ({ sprint, track, module, lesson }) => {
	// const [deleteSprint, { loading, error, data }] = useMutation(DELETE_SPRINT, {
	// 	variables: {
	// 		where: { name: sprint.name },
	// 		refetchQueries: [{ query: GET_TRACKS }]
	// 	}
	// });
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
			<button>Delete Item</button>
			<button>Edit Item</button>
		</div>
	);
};

export default LessonItem;
