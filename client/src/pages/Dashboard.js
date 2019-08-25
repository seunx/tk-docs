import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import TrackItem from '../components/TrackItem';
import { GET_TRACKS } from '../gql';

const Dashboard = () => {
	const { loading, error, data } = useQuery(GET_TRACKS);
	console.log(data.tracks);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<div>
			<h1>Tracks</h1>
			{data.tracks.map(track => (
				<TrackItem key={track.id} track={track} />
			))}
		</div>
	);
};

export default Dashboard;
