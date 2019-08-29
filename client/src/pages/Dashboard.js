import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import TrackItem from '../components/TrackItem';
import Modal from '../components/Modal';
import { GET_TRACKS } from '../gql';
import {
	track_items_container,
	dashboard_menu,
	dashboard_container,
	track_container
} from '../styles';
import CreateTrack from '../components/CreateTrack';

const Dashboard = () => {
	const [showModal, setModal] = useState(false);
	const { loading, error, data } = useQuery(GET_TRACKS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<div css={dashboard_container}>
			<div css={dashboard_menu}>
				<h1>Mace Windu</h1>
				<div className="profile-pic"></div>
			</div>
			<div css={track_container}>
				<h1>Here is a list of all available Lambda Tracks</h1>
				<button onClick={() => setModal(!showModal)}>Create Track</button>
				{showModal ? (
					<Modal>
						<h1 style={{ fontSize: '1rem' }}>I am the Modal</h1>
						<div className="btn-container">
							<button>External Link</button>
							<button onClick={() => setModal(!showModal)}>Close Modal</button>
						</div>
						<CreateTrack setModal={setModal} />
					</Modal>
				) : null}
				<div css={track_items_container}>
					{data.tracks.map(track => (
						<TrackItem key={track.id} track={track} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
