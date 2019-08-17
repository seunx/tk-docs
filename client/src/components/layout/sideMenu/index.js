import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import SprintItem from './SprintItem';
import { GET_TRACK } from '../../../gql';
import { side_menu } from '../../../styles';

const index = props => {
	const [search, setSearch] = useState('');
	const { loading, error, data } = useQuery(GET_TRACK, {
		variables: {
			where: { name: props.track }
		}
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<div css={side_menu}>
			<input
				onChange={({ target }) => setSearch(target.value)}
				type="text"
				placeholder="Search..."
				value={search}
			/>
			{data.track.sprints.map(sprint => (
				<SprintItem key={sprint.id} sprint={sprint} />
			))}
		</div>
	);
};

export default index;
