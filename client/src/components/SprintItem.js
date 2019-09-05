import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateSprint from './Update/UpdateSprint';
import Modal from '../components/Modal';
import { DELETE_SPRINT } from '../gql';
import { urlName, pageName } from '../utils/index';

const SprintItem = ({ track, sprint }) => {
	const [showModal, setModal] = useState(false);
	const [deleteSprint, { loading, error, data }] = useMutation(DELETE_SPRINT, {
		variables: {
			where: { name: sprint.name }
			/*refetchQueries: [{ query: GET_TRACKS }]*/
		}
	});
	return (
		<div>
			<Link to={`/dashboard/${urlName(track)}/${urlName(sprint.name)}`}>
				<h1>{sprint.name}</h1>
			</Link>
			<p>{sprint.description}</p>
			<button onClick={deleteSprint}>Delete Item</button>
			{showModal ? (
				<Modal>
					<h1 style={{ fontSize: '1rem' }}>Update Sprint</h1>
					<div className="btn-container">
						<button onClick={() => setModal(!showModal)}>Close Modal</button>
					</div>
					<UpdateSprint
						setModal={setModal}
						track={pageName(track)}
						sprint={sprint.name}
					/>
				</Modal>
			) : null}
			<button onClick={() => setModal(!showModal)}>Edit Item</button>
		</div>
	);
};

export default SprintItem;
