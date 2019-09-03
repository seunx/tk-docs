import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { GET_LESSON } from '../gql';
import { pageName } from '../utils';

const Lesson = ({ track, lesson }) => {
	const { loading, data, error } = useQuery(GET_LESSON, {
		variables: { where: { name: pageName(lesson) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<Layout>
			<SideMenu track={pageName(track)} />
			<div className="content-body">
				<h1>{data.lesson.name}</h1>
				<p>{data.lesson.description}</p>
				<p>Objectives:</p>
				<ul>
					{data.lesson.objectives.map((obj, i) => (
						<li key={i}>{obj}</li>
					))}
				</ul>
				<div>{data.lesson.details}</div>
			</div>
		</Layout>
	);
};

export default Lesson;
