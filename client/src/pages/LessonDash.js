import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import Modal from '../components/Modal';
import LessonItem from '../components/LessonItem';
import CreateLesson from '../components/Create/CreateLesson';
import { pageName } from '../utils';
import { GET_MODULE } from '../gql/index';
import { dash_container, dash_items } from '../styles/index';

const LessonDash = ({ sprint, track, module }) => {
	const [showModal, setModal] = useState(false);
	const { loading, error, data } = useQuery(GET_MODULE, {
		variables: { where: { name: pageName(module) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div css={dash_container}>
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
						<h1>Create Lesson</h1>
						<div className="btn-container">
							<button onClick={() => setModal(!showModal)}>Close Modal</button>
						</div>
						<CreateLesson setModal={setModal} module={pageName(module)} />
					</Modal>
				) : null}
				<div css={dash_items}>
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
