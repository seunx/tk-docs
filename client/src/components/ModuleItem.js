import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import { DELETE_MODULE } from '../gql';
import { track_item } from '../styles';
import { urlName } from '../utils/index';

const ModuleItem = ({ track, sprint, module }) => {
	const [deleteModule, { loading, error, data }] = useMutation(DELETE_MODULE, {
		variables: {
			where: { name: module.name }
			/*refetchQueries: [{ query: GET_TRACKS }] */
		}
	});
	return (
		<div css={track_item}>
			<Link to={`/dashboard/${track}/${sprint}/${urlName(module.name)}`}>
				<h1>{module.name}</h1>
			</Link>
			<p>{module.description}</p>
			<div>
				<p>Lessons: 48</p>
			</div>
			<button onClick={deleteModule}>Delete Item</button>
			<button>Edit Item</button>
		</div>
	);
};

export default ModuleItem;
