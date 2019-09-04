import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import LessonItem from '../components/LessonItem';
import { pageName } from '../utils';
import { GET_MODULE } from '../gql/index';
import { track_container, track_items_container } from '../styles/index';
import Modal from '../components/Modal';
import { CreateLesson } from '../components/CreateLesson';

const LessonDash = ({ sprint, track, module }) => {
	const [showModal, setModal] = useState(false);
	const { loading, error, data } = useQuery(GET_MODULE, {
		variables: { where: { name: pageName(module) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div css={track_container}>
				<div>
					<Link to="/dashboard">{track}</Link> >{' '}
					<Link to={`/dashboard/${track}`}>{sprint}</Link> >{' '}
					<Link to={`/dashboard/${track}/${sprint}`}>{module}</Link>
				</div>
				<h1>{pageName(module)}</h1>
				<div style={{ display: 'flex' }}>
					<p>{data.module.description}</p>
					<button onClick={() => setModal(!showModal)}>Create Lesson</button>
				</div>
				{showModal ? (
					<Modal>
						<div className="btn-container">
							<button onClick={() => setModal(!showModal)}>Close Modal</button>
						</div>
						<CreateLesson setModal={setModal} module={pageName(module)} />
					</Modal>
				) : null}
				<div css={track_items_container}>
					{data.module.lessons.map(lesson => (
						<LessonItem
							key={lesson.id}
							sprint={sprint}
							track={track}
							module={module}
							lesson={lesson}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default LessonDash;
