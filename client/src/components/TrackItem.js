import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateTrack from '../components/update/UpdateTrack';
import ModalContent from './ModalContent';
import Modal from '../components/Modal';
import { DELETE_TRACK } from '../gql';
import { urlName, excerpt } from '../utils/index';
import { dash_item } from '../styles';

const TrackItem = ({ track, refetch }) => {
	const [showModal, setModal] = useState(false);
	const [deleteTrack, { loading, error, data }] = useMutation(DELETE_TRACK, {
		variables: {
			where: { name: track.name }
		}
	});
	const _handleDelete = async () => {
		await deleteTrack();
		refetch();
	};
	return (
		<div css={dash_item}>
			<h4>
				<Link to={`/dashboard/${urlName(track.name)}`}>{track.name}</Link>
			</h4>
			<p>{excerpt(track.description)}</p>
			{showModal ? (
				<Modal>
					<ModalContent
						header="Update Track"
						setModal={setModal}
						component={
							<UpdateTrack
								setModal={setModal}
								track={track.name}
								description={track.description}
								details={track.details}
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

export default TrackItem;
