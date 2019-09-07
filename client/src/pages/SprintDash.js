import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import Modal from '../components/Modal';
import ModalContent from '../components/ModalContent';
import CreateSprint from '../components/create/CreateSprint';
import SprintItem from '../components/SprintItem';
import { GET_TRACK } from '../gql/index';
import { dash_container, dash_items } from '../styles/index';
import { pageName } from '../utils';
import MarkDown from '../components/MarkDown';

const SprintDash = ({ track }) => {
	const [showModal, setModal] = useState(false);
	const { loading, error, data } = useQuery(GET_TRACK, {
		variables: { where: { name: pageName(track) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div css={dash_container}>
				<div className="dash-header">
					<div className="crumbs">
						<Link to="/dashboard">{track}</Link>
					</div>
					<h2>{pageName(track)}</h2>

					<MarkDown content={data.track.description} />

					<button className="btn primary" onClick={() => setModal(!showModal)}>
						Create Sprint
					</button>
				</div>
				{showModal ? (
					<Modal>
						<ModalContent
							header="New Sprint"
							setModal={setModal}
							component={<CreateSprint track={track} setModal={setModal} />}
						/>
					</Modal>
				) : null}
				<div css={dash_items}>
					{data.track.sprints.map(sprint => (
						<SprintItem key={sprint.id} sprint={sprint} track={track} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default SprintDash;
