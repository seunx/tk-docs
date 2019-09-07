import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import { GET_LESSON } from '../gql/index';
import { pageName } from '../utils';
import { page_header, pro_tip } from '../styles';
import MarkDown from '../components/MarkDown';

const LessonPreview = ({ track, sprint, module, lesson }) => {
	const { loading, error, data } = useQuery(GET_LESSON, {
		variables: { where: { name: pageName(lesson) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div className="content-body">
				<div css={page_header}>
					<div>
						<Link to="/dashboard">{track}</Link> >{' '}
						<Link to={`/dashboard/${track}`}>{sprint}</Link> >{' '}
						<Link to={`/dashboard/${track}/${sprint}`}>{module}</Link> >{' '}
						<Link to={`/dashboard/${track}/${sprint}/${module}`}>{lesson}</Link>
					</div>
					<h1>{data.lesson.name}</h1>
					<MarkDown content={data.lesson.description} />
					<br />
					<span className="tag">
						At the end of this module, you should be able to:
					</span>
					<div className="objectives">
						<MarkDown content={data.lesson.objective} />
					</div>
				</div>
				<div css={pro_tip}>
					<p>Pro Tip Goes Here</p>
				</div>
				<MarkDown content={data.lesson.details} />
			</div>
		</Layout>
	);
};

export default LessonPreview;
