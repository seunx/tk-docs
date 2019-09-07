import React from 'react';
import { Link } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { GET_MODULE } from '../gql';
import { pageName, urlName } from '../utils';
import { page_header, home_sprint } from '../styles';
import MarkDown from '../components/MarkDown';

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
					<MarkDown content={data.module.description} />
				</div>
				{data.module.lessons.map(lesson => {
					return (
						<div key={lesson.id} css={home_sprint}>
							<Link to={`/course/${track}/${module}/${urlName(lesson.name)}`}>
								<h4>{lesson.name}</h4>
							</Link>
							<MarkDown content={lesson.description} />
							<br />
							<p>Objectives:</p>
							<MarkDown content={lesson.objective} />
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

export default Module;
