import React from 'react';
import Layout from '../components/layout';
import { forms } from '../api/data';

const Home = () => {
	return (
		<Layout>
			<h1>Welcome</h1>
			<p>
				The Lambda School Training Kit is the home for all learning resources at
				Lambda School. Our curriculum is constantly evolving to ensure you’re
				armed with the latest technologies. You will always have access to the
				materials in this training kit, even after you graduate. Pick your track
				to get started!
			</p>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
				{forms.map((form, i) => (
					<div key={i}>
						<h1>{form.name}</h1>
						{form.links.map((link, i) => (
							<p key={i}>{link}</p>
						))}
					</div>
				))}
			</div>
		</Layout>
	);
};
export default Home;
