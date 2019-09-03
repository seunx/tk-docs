import React from 'react';
import { Link } from '@reach/router';

import { main_menu } from '../../../styles';

const index = () => {
	return (
		<>
			<div css={main_menu}>
				<h1>
					<Link to="/">Lambda School Logo</Link>
				</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/dashboard">User</Link>
				</nav>
			</div>
		</>
	);
};

export default index;
