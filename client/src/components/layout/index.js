import React, { useContext } from 'react';

import MainMenu from './mainMenu';
import SideMenu from './sideMenu';
import { main } from '../../styles';
import { Store } from '../../context';

const index = ({ children }) => {
	const { state } = useContext(Store);
	return (
		<div css={main}>
			<MainMenu />
			<div className="content">
				<SideMenu track={state.track} />
				<div className="content-body">{children}</div>
			</div>
		</div>
	);
};

export default index;
