import React from 'react';
import { Link } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { GET_MODULE } from '../gql';
import { pageName, urlName } from '../utils';
import { page_header, home_sprint } from '../styles';

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
				<div css={page_header}>
					<h2>{pageName(module)}</h2>
					<p>{data.module.description}</p>
				</div>
				{data.module.lessons.map(lesson => {
					return (
						<div key={lesson.id} css={home_sprint}>
							<Link to={`/course/${track}/${module}/${urlName(lesson.name)}`}>
								<h4>{lesson.name}</h4>
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
		</Layout>
	);
};

export default Module;
