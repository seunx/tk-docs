import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { GET_TRACK } from '../gql';
import { pageName, urlName } from '../utils';
import { home_sprint, page_header } from '../styles';
import MarkDown from '../components/MarkDown';

const Track = ({ track }) => {
	const { loading, error, data } = useQuery(GET_TRACK, {
		variables: { where: { name: pageName(track) } }
	});
	console.log(data);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<SideMenu track={pageName(track)} />
			<div className="content-body">
				<div css={page_header}>
					<h2>{pageName(track)}</h2>
					<MarkDown content={data.track.description} />
				</div>
				{data.track.sprints.map(sprint => (
					<div css={home_sprint} key={sprint.id}>
						<h3>{sprint.name}</h3>

						{sprint.modules.map(module => (
							<div className="home-modules" key={module.id}>
								<Link to={`/course/${track}/${urlName(module.name)}`}>
									<h4>{module.name}</h4>
								</Link>
								<p>{module.description}</p>
							</div>
						))}
					</div>
				))}
				{}
			</div>
		</Layout>
	);
};

export default Track;
