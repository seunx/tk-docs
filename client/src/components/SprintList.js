import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import SprintItem from './SprintItem';

const SprintList = () => {
	const [active, setActive] = useState(true);
	const { loading, error, data } = useQuery(gql`
		{
			sprints {
				id
				name
				modules {
					id
					name
					lessons {
						id
						name
					}
				}
			}
		}
	`);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	console.log(active);
	return (
		<div className="list">
			{data.sprints.map(sprint => (
				<SprintItem key={sprint.id} sprint={sprint} />
			))}
		</div>
	);
};

export default SprintList;
