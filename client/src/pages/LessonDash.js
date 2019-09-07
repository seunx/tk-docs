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
import ModalContent from '../components/ModalContent';

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
				<div className="dash-header">
					<div>
						<Link to="/dashboard">{track}</Link> >{' '}
						<Link to={`/dashboard/${track}`}>{sprint}</Link> >{' '}
						<Link to={`/dashboard/${track}/${sprint}`}>{module}</Link>
					</div>
					<h2>{pageName(module)}</h2>

					<p>{data.module.description}</p>
					<button className="btn primary" onClick={() => setModal(!showModal)}>
						Create Lesson
					</button>
				</div>
				{showModal ? (
					<Modal>
						<ModalContent
							header="New Lesson"
							setModal={setModal}
							component={
								<CreateLesson setModal={setModal} module={pageName(module)} />
							}
						/>
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
