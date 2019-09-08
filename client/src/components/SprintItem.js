import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateSprint from './Update/UpdateSprint';
import Modal from '../components/Modal';
import ModalContent from './ModalContent';
import { DELETE_SPRINT } from '../gql';
import { urlName, pageName, excerpt } from '../utils/index';
import { dash_item } from '../styles';

const SprintItem = ({ track, sprint, refetch }) => {
	const [showModal, setModal] = useState(false);
	const [deleteSprint, { loading, error, data }] = useMutation(DELETE_SPRINT, {
		variables: {
			where: { name: sprint.name }
		}
	});
	const _handleDelete = async () => {
		await deleteSprint();
		refetch();
	};
	return (
		<div css={dash_item}>
			<h4>
				<Link to={`/dashboard/${urlName(track)}/${urlName(sprint.name)}`}>
					{sprint.name}
				</Link>
			</h4>
			<p>{excerpt(sprint.description)}</p>
			{showModal ? (
				<Modal>
					<ModalContent
						header="Update Sprint"
						setModal={setModal}
						component={
							<UpdateSprint
								setModal={setModal}
								track={pageName(track)}
								sprint={sprint.name}
								description={sprint.description}
								refetch={refetch}
							/>
						}
					/>
				</Modal>
			) : null}
			<div>
				<button className="btn secondary" onClick={() => setModal(!showModal)}>
					Edit Item
				</button>
				<button className="btn light" onClick={_handleDelete}>
					Delete Item
				</button>
			</div>
		</div>
	);
};

export default SprintItem;
