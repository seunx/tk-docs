import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import TrackItem from '../components/TrackItem';
import Modal from '../components/Modal';
import { GET_TRACKS } from '../gql';
import { dash_container, dash_items } from '../styles';
import CreateTrack from '../components/create/CreateTrack';

const Dashboard = () => {
	const [showModal, setModal] = useState(false);
	const { loading, error, data } = useQuery(GET_TRACKS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div css={dash_container}>
				<h1>Track Dashboard</h1>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
						commodi laboriosam rerum inventore eum veniam, ducimus excepturi
						quasi neque quam voluptate quia error eos sapiente totam blanditiis
						eveniet soluta quibusdam.
					</p>
					<button onClick={() => setModal(!showModal)}>Create Track</button>
				</div>
				{showModal ? (
					<Modal>
						<h1 style={{ fontSize: '1rem' }}>Create Track</h1>
						<div className="btn-container">
							<button onClick={() => setModal(!showModal)}>Close Modal</button>
						</div>
						<CreateTrack setModal={setModal} />
					</Modal>
				) : null}
				<div css={dash_items}>
					{data.tracks.map(track => (
						<TrackItem key={track.id} track={track} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
