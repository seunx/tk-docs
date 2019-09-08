import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateModule from './Update/UpdateModule';
import Modal from '../components/Modal';
import ModalContent from './ModalContent';
import { DELETE_MODULE } from '../gql';
import { urlName, pageName, excerpt } from '../utils/index';
import { dash_item } from '../styles';

const ModuleItem = ({ track, sprint, module, refetch }) => {
	const [showModal, setModal] = useState(false);
	const [deleteModule, { loading, error, data }] = useMutation(DELETE_MODULE, {
		variables: {
			where: { name: module.name }
			/*refetchQueries: [{ query: GET_TRACKS }] */
		}
	});
	const _handleDelete = async () => {
		await deleteModule();
		refetch();
	};
	return (
		<div css={dash_item}>
			<h4>
				<Link to={`/dashboard/${track}/${sprint}/${urlName(module.name)}`}>
					{module.name}
				</Link>
			</h4>
			<p>{excerpt(module.description, 200)}</p>
			{showModal ? (
				<Modal>
					<ModalContent
						header="Update Module"
						setModal={setModal}
						component={
							<UpdateModule
								setModal={setModal}
								sprint={pageName(sprint)}
								module={module.name}
								description={module.description}
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

export default ModuleItem;
