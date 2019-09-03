import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import { DELETE_SPRINT, GET_TRACKS } from '../gql';
import { track_item } from '../styles';
import { urlName } from '../utils/index';

const ModuleItem = ({ sprint, track, module }) => {
	// const [deleteSprint, { loading, error, data }] = useMutation(DELETE_SPRINT, {
	// 	variables: {
	// 		where: { name: sprint.name },
	// 		refetchQueries: [{ query: GET_TRACKS }]
	// 	}
	// });
	return (
		<div css={track_item}>
			<Link to={`/dashboard/${track}/${sprint}/${urlName(module.name)}`}>
				<h1>{module.name}</h1>
			</Link>
			<p>{module.description}</p>
			<div>
				<p>Lessons: 48</p>
			</div>
			<button>Delete Item</button>
			<button>Edit Item</button>
		</div>
	);
};

export default ModuleItem;
