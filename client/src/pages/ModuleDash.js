import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import Modal from '../components/Modal';
import ModalContent from '../components/ModalContent';
import ModuleItem from '../components/ModuleItem';
import MarkDown from '../components/MarkDown';
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
				<div className="dash-header">
					<div>
						<Link to="/dashboard">{track}</Link> >{' '}
						<Link to={`/dashboard/${track}`}>{sprint}</Link>
					</div>
					<h2>{pageName(sprint)}</h2>

					<MarkDown content={data.sprint.description} />
					<button className="btn primary" onClick={() => setModal(!showModal)}>
						Create Module
					</button>
				</div>
				{showModal ? (
					<Modal>
						<ModalContent
							header="New Module"
							setModal={setModal}
							component={<CreateModule setModal={setModal} sprint={sprint} />}
						/>
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
