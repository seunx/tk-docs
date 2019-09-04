import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import { GET_TRACK } from '../gql/index';
import { pageName } from '../utils';
import SprintItem from '../components/SprintItem';
import Layout from '../components/layout';
import { track_container, track_items_container } from '../styles/index';
import CreateSprint from '../components/CreateSprint';
import Modal from '../components/Modal';

const SprintDash = ({ track }) => {
	const [showModal, setModal] = useState(false);
	const { loading, error, data } = useQuery(GET_TRACK, {
		variables: { where: { name: pageName(track) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div css={track_container}>
				<div>
					<Link to="/dashboard">{track}</Link>
				</div>
				<h1>{pageName(track)}</h1>
				<div style={{ display: 'flex' }}>
					<p>{data.track.description}</p>
					<button onClick={() => setModal(!showModal)}>Create Sprint</button>
				</div>
				{showModal ? (
					<Modal>
						<div className="btn-container">
							<button onClick={() => setModal(!showModal)}>Close Modal</button>
						</div>
						<CreateSprint setModal={setModal} track={track} />
					</Modal>
				) : null}
				<div css={track_items_container}>
					{data.track.sprints.map(sprint => (
						<SprintItem key={sprint.id} sprint={sprint} track={track} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default SprintDash;
