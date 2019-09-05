import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateModule from '../components/UpdateModule';
import Modal from '../components/Modal';
import { DELETE_MODULE } from '../gql';
import { track_item } from '../styles';
import { urlName, pageName } from '../utils/index';

const ModuleItem = ({ track, sprint, module }) => {
	const [showModal, setModal] = useState(false);
	const [deleteModule, { loading, error, data }] = useMutation(DELETE_MODULE, {
		variables: {
			where: { name: module.name }
			/*refetchQueries: [{ query: GET_TRACKS }] */
		}
	});
	return (
		<div css={track_item}>
			<Link to={`/dashboard/${track}/${sprint}/${urlName(module.name)}`}>
				<h1>{module.name}</h1>
			</Link>
			<p>{module.description}</p>
			<div>
				<p>Lessons: 48</p>
			</div>
			<button onClick={deleteModule}>Delete Item</button>
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
			<button onClick={() => setModal(!showModal)}>Edit Item</button>
		</div>
	);
};

export default ModuleItem;
