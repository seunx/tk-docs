import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { GET_LESSON } from '../gql';
import { pageName } from '../utils';
import { page_header, pro_tip } from '../styles';
import MarkDown from '../components/MarkDown';

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
				<div css={page_header}>
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
					<h4>Pro Tip Goes Here</h4>
				</div>
				<MarkDown content={data.lesson.details} />
			</div>
		</Layout>
	);
};

export default Lesson;
