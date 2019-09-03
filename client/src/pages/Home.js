import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { GET_TRACKS } from '../gql';
import { forms } from '../api/data';
import { urlName } from '../utils';

const Home = () => {
	const { loading, error, data } = useQuery(GET_TRACKS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<SideMenu />
			<div className="content-body">
				<h1>Welcome</h1>
				<p>
					The Lambda School Training Kit is the home for all learning resources
					at Lambda School. Our curriculum is constantly evolving to ensure
					you’re armed with the latest technologies. You will always have access
					to the materials in this training kit, even after you graduate. Pick
					your track to get started!
				</p>
				<div className="home-grid">
					{forms.map((form, i) => (
						<div key={i}>
							<h3>{form.name}</h3>
							{form.links.map((link, i) => (
								<p key={i}>{link}</p>
							))}
						</div>
					))}
				</div>
				<div className="home-grid">
					{data.tracks.map(track => (
						<Link key={track.id} to={`/course/${urlName(track.name)}`}>
							<div className="home-track">
								<h3>{track.name}</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
};
export default Home;
