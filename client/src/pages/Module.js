import React from 'react';
import { Link } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { GET_MODULE } from '../gql';
import { pageName, urlName } from '../utils';

const Module = ({ track, module }) => {
	const { loading, error, data } = useQuery(GET_MODULE, {
		variables: { where: { name: pageName(module) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<SideMenu track={pageName(track)} />
			<div className="content-body">
				<h1>{pageName(module)}</h1>
				<p>{data.module.description}</p>
				<div>
					{data.module.lessons.map(lesson => {
						return (
							<div key={lesson.id}>
								<Link to={`/course/${track}/${module}/${urlName(lesson.name)}`}>
									{lesson.name}
								</Link>
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
			</div>
		</Layout>
	);
};

export default Module;
