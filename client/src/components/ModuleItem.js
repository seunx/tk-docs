import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateModule from './Update/UpdateModule';
import Modal from '../components/Modal';
import { DELETE_MODULE } from '../gql';
import { urlName, pageName, excerpt } from '../utils/index';
import { dash_item } from '../styles';

const ModuleItem = ({ track, sprint, module }) => {
	const [showModal, setModal] = useState(false);
	const [deleteModule, { loading, error, data }] = useMutation(DELETE_MODULE, {
		variables: {
			where: { name: module.name }
			/*refetchQueries: [{ query: GET_TRACKS }] */
		}
	});
	return (
		<div css={dash_item}>
			<Link to={`/dashboard/${track}/${sprint}/${urlName(module.name)}`}>
				<h4>{module.name}</h4>
			</Link>
			<p>{excerpt(module.description, 200)}</p>
			{showModal ? (
				<Modal>
					<h1 style={{ fontSize: '1rem' }}>Update Module</h1>
					<div className="btn-container">
						<button onClick={() => setModal(!showModal)}>Close Modal</button>
					</div>
					<UpdateModule
						setModal={setModal}
						sprint={pageName(sprint)}
						module={module.name}
						description={module.description}
					/>
				</Modal>
			) : null}
			<div>
				<button className="btn secondary" onClick={() => setModal(!showModal)}>
					Edit Item
				</button>
				<button className="btn light" onClick={deleteModule}>
					Delete Item
				</button>
			</div>
		</div>
	);
};

export default ModuleItem;
