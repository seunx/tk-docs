import React from 'react';
import { Link } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import { GET_MODULE } from '../gql';

const Topic = props => {
	const moduleName = props.id.split('-').join(' ');
	const { loading, error, data } = useQuery(GET_MODULE, {
		variables: { where: { name: moduleName } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<h1>{moduleName}</h1>
			<p>{data.module.description}</p>
			<div>
				{data.module.lessons.map(lesson => {
					const lessonUrl = lesson.name.split(' ').join('-');
					return (
						<div key={lesson.id}>
							<Link to={`/${props.id}/${lessonUrl}`}>{lesson.name}</Link>
							<p>{lesson.description}</p>
							<p>Objectives:</p>
							<ul>
								{lesson.objectives.map((obj, i) => (
									<li key={i}>{obj}</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

export default Topic;
