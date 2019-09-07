import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateTrack from '../components/update/UpdateTrack';
import Modal from '../components/Modal';
import { DELETE_TRACK } from '../gql';
import { urlName, excerpt } from '../utils/index';
import { dash_item } from '../styles';

const TrackItem = ({ track }) => {
	const [showModal, setModal] = useState(false);
	const [deleteTrack, { loading, error, data }] = useMutation(DELETE_TRACK, {
		variables: {
			where: { name: track.name }
			/*refetchQueries: [{ query: GET_TRACKS }]*/
		}
	});
	return (
		<div css={dash_item}>
			<Link to={`/dashboard/${urlName(track.name)}`}>
				<h4>{track.name}</h4>
			</Link>
			<p>{excerpt(track.description)}</p>
			{showModal ? (
				<Modal>
					<h1 style={{ fontSize: '1rem' }}>Update Track</h1>
					<div className="btn-container">
						<button onClick={() => setModal(!showModal)}>Close Modal</button>
					</div>
					<UpdateTrack
						setModal={setModal}
						track={track.name}
						description={track.description}
						details={track.details}
					/>
				</Modal>
			) : null}
			<div>
				<button className="btn secondary" onClick={() => setModal(!showModal)}>
					Edit Item
				</button>
				<button className="btn light" onClick={deleteTrack}>
					Delete Item
				</button>
			</div>
		</div>
	);
};

export default TrackItem;
