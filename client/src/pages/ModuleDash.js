import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import ModuleItem from '../components/ModuleItem';
import { track_container, track_items_container } from '../styles/index';
import Modal from '../components/Modal';
import { GET_SPRINT } from '../gql';
import { CreateModule } from '../components/CreateModule';
import { pageName } from '../utils';

const ModuleDash = ({ track, sprint }) => {
	const [showModal, setModal] = useState(false);
	const { loading, error, data } = useQuery(GET_SPRINT, {
		variables: { where: { name: pageName(sprint) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div css={track_container}>
				<div>
					<Link to="/dashboard">{track}</Link> >{' '}
					<Link to={`/dashboard/${track}`}>{sprint}</Link>
				</div>
				<h1>{pageName(sprint)}</h1>
				<div style={{ display: 'flex' }}>
					<p>{data.sprint.description}</p>
					<button onClick={() => setModal(!showModal)}>Create Module</button>
				</div>
				{showModal ? (
					<Modal>
						<div className="btn-container">
							<button onClick={() => setModal(!showModal)}>Close Modal</button>
						</div>
						<CreateModule setModal={setModal} sprint={sprint} />
					</Modal>
				) : null}
				<div css={track_items_container}>
					{data.sprint.modules.map(module => (
						<ModuleItem
							key={module.id}
							sprint={sprint}
							track={track}
							module={module}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default ModuleDash;
