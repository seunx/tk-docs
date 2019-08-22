import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_LESSON } from '../gql';
import Layout from '../components/layout';

const Lesson = props => {
	const lessonName = props.lessonId.split('-').join(' ');
	const { loading, data, error } = useQuery(GET_LESSON, {
		variables: { where: { name: lessonName } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<h1>{data.lesson.name}</h1>
			<p>{data.lesson.description}</p>
			<p>Objectives:</p>
			<ul>
				{data.lesson.objectives.map((obj, i) => (
					<li key={i}>{obj}</li>
				))}
			</ul>
			<div>{data.lesson.details}</div>
		</Layout>
	);
};

export default Lesson;
