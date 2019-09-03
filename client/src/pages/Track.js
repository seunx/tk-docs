import React from 'react';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { pageName } from '../utils';

const Track = ({ track }) => {
	return (
		<Layout>
			<SideMenu track={pageName(track)} />
			<div className="content-body">
				<h1>{pageName(track)}</h1>
			</div>
		</Layout>
	);
};

export default Track;
