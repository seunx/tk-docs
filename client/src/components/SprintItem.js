import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import { DELETE_SPRINT, GET_TRACKS } from '../gql';
import { track_item } from '../styles';
import { urlName } from '../utils/index';

const SprintItem = ({ sprint, track }) => {
	// const [deleteSprint, { loading, error, data }] = useMutation(DELETE_SPRINT, {
	// 	variables: {
	// 		where: { name: sprint.name },
	// 		refetchQueries: [{ query: GET_TRACKS }]
	// 	}
	// });
	return (
		<div css={track_item}>
			<Link to={`/dashboard/${urlName(track)}/${urlName(sprint.name)}`}>
				<h1>{sprint.name}</h1>
			</Link>
			<p>{sprint.description}</p>
			<div>
				<p>Modules: 24</p>
				<p>Lessons: 48</p>
			</div>
			<button>Delete Item</button>
			<button>Edit Item</button>
		</div>
	);
};

export default SprintItem;
