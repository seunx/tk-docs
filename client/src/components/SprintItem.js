import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateSprint from './Update/UpdateSprint';
import Modal from '../components/Modal';
import { DELETE_SPRINT } from '../gql';
import { urlName, pageName } from '../utils/index';
import { dash_item } from '../styles';

const SprintItem = ({ track, sprint }) => {
	const [showModal, setModal] = useState(false);
	const [deleteSprint, { loading, error, data }] = useMutation(DELETE_SPRINT, {
		variables: {
			where: { name: sprint.name }
			/*refetchQueries: [{ query: GET_TRACKS }]*/
		}
	});
	return (
		<div css={dash_item}>
			<Link to={`/dashboard/${urlName(track)}/${urlName(sprint.name)}`}>
				<h4>{sprint.name}</h4>
			</Link>
			<p>{sprint.description}</p>
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
			<div>
				<button className="btn secondary" onClick={() => setModal(!showModal)}>
					Edit Item
				</button>
				<button className="btn light" onClick={deleteSprint}>
					Delete Item
				</button>
			</div>
		</div>
	);
};

export default SprintItem;
