import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { main_menu } from '../../../styles';
import { GET_TRACKS } from '../../../gql';
import { Store } from '../../../context';

const index = () => {
	const { state, dispatch } = useContext(Store);
	const { loading, error, data } = useQuery(GET_TRACKS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<>
			<div className="main-menu" css={main_menu}>
				{data.tracks.map(track => (
					<h1
						onClick={() =>
							dispatch({ type: 'changeTrack', payload: track.name })
						}
						key={track.id}
					>
						{track.name}
					</h1>
				))}
			</div>
		</>
	);
};

export default index;
