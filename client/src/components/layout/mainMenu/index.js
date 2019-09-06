import React from 'react';
import { Link } from '@reach/router';

import { main_menu } from '../../../styles';

const index = () => {
	return (
		<>
			<div css={main_menu}>
				<h1>
					<Link to="/">
						<img
							src={require('../../../images/lambda_W.png')}
							alt="lambda logo"
							width="200px"
						/>
					</Link>
				</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/dashboard">Admin</Link>
				</nav>
			</div>
		</>
	);
};

export default index;
