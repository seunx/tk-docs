import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import SprintItem from './SprintItem';
import { GET_TRACK } from '../../../gql';
import { side_menu } from '../../../styles';

const index = props => {
	const { loading, error, data } = useQuery(GET_TRACK, {
		variables: {
			where: { name: props.track }
		}
	});

	if (loading) return <p>Loading...</p>;
	if (error)
		return (
			<div css={side_menu}>
				<h2>Lambda School Training Kit</h2>
			</div>
		);
	return (
		<div css={side_menu}>
			{data.track.sprints.map(sprint => (
				<SprintItem key={sprint.id} sprint={sprint} track={props.track} />
			))}
		</div>
	);
};

export default index;
