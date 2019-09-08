import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import CreateTrack from '../components/create/CreateTrack';
import ModalContent from '../components/ModalContent';
import TrackItem from '../components/TrackItem';
import Modal from '../components/Modal';
import { GET_TRACKS } from '../gql';
import { dash_container, dash_items, modal_content } from '../styles';

const Dashboard = () => {
	const [showModal, setModal] = useState(false);
	const { loading, error, data, refetch } = useQuery(GET_TRACKS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div css={dash_container}>
				<div className="dash-header">
					<h2>Track Dashboard</h2>
					<p>A list of all Lambda School Tracks.</p>
					<button className="btn primary" onClick={() => setModal(!showModal)}>
						Create Track
					</button>
				</div>
				{showModal ? (
					<Modal>
						<ModalContent
							header="New Track"
							setModal={setModal}
							component={<CreateTrack setModal={setModal} refetch={refetch} />}
						/>
					</Modal>
				) : null}
				<div css={dash_items}>
					{data.tracks.map(track => (
						<TrackItem key={track.id} track={track} refetch={refetch} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
