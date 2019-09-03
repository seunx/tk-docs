import React from 'react';

import MainMenu from './mainMenu';
import { main } from '../../styles';

const index = ({ children }) => {
	return (
		<div css={main}>
			<MainMenu />
			<div className="content">{children}</div>
		</div>
	);
};

export default index;
