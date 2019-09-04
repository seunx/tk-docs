import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import UpdateTrack from '../components/UpdateTrack';
import Modal from '../components/Modal';
import { DELETE_TRACK } from '../gql';
import { track_item } from '../styles';
import { urlName } from '../utils/index';

const TrackItem = ({ track }) => {
	const [showModal, setModal] = useState(false);
	const [deleteTrack, { loading, error, data }] = useMutation(DELETE_TRACK, {
		variables: {
			where: { name: track.name }
			/*refetchQueries: [{ query: GET_TRACKS }]*/
		}
	});
	return (
		<div css={track_item}>
			<Link to={`/dashboard/${urlName(track.name)}`}>
				<h1>{track.name}</h1>
			</Link>
			<p>{track.description}</p>
			<div>
				<p>Sprints: 12</p>
				<p>Modules: 24</p>
				<p>Lessons: 48</p>
			</div>
			<button onClick={deleteTrack}>Delete Item</button>
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
			<button onClick={() => setModal(!showModal)}>Edit Item</button>
		</div>
	);
};

export default TrackItem;
