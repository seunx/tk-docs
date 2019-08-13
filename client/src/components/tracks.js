import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const TrackList = () => {
	const { loading, error, data } = useQuery(gql`
		{
			tracks {
				id
				name
				details
			}
		}
	`);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	console.log(data.tracks);
	return (
		<div>
			<ul>
				{data.tracks.map(track => (
					<li key={track.id}>{track.name}</li>
				))}
			</ul>
		</div>
	);
};

export default TrackList;
