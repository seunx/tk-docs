import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import Modal from '../components/Modal';
import ModuleItem from '../components/ModuleItem';
import { CreateModule } from '../components/create/CreateModule';
import { dash_container, dash_items } from '../styles/index';
import { GET_SPRINT } from '../gql';
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
			<div css={dash_container}>
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
						<h1>Create Module</h1>
						<div className="btn-container">
							<button onClick={() => setModal(!showModal)}>Close Modal</button>
						</div>
						<CreateModule setModal={setModal} sprint={sprint} />
					</Modal>
				) : null}
				<div css={dash_items}>
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
