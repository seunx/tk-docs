import React from 'react';

const TrackItem = ({ track }) => {
	return (
		<div>
			<h1>{track.name}</h1>
			<p>{track.description}</p>
		</div>
	);
};

export default TrackItem;
