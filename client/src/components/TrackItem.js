import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { DELETE_TRACK, GET_TRACKS } from '../gql';
import { track_item } from '../styles';

const TrackItem = ({ track }) => {
	const [deleteTrack, { loading, error, data }] = useMutation(DELETE_TRACK, {
		variables: {
			where: { name: track.name },
			refetchQueries: [{ query: GET_TRACKS }]
		}
	});
	return (
		<div css={track_item}>
			<h1>{track.name}</h1>
			<p>{track.description}</p>
			<div>
				<p>Sprints: 12</p>
				<p>Modules: 24</p>
				<p>Lessons: 48</p>
			</div>
			<button onClick={deleteTrack}>Delete Item</button>
		</div>
	);
};

export default TrackItem;
