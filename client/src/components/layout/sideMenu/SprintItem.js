import React, { useState } from 'react';
import ModuleItem from './ModuleItem';

const SprintItem = ({ sprint, track }) => {
	const [active, setActive] = useState(false);
	const _handleClick = e => {
		setActive(!active);
	};
	return (
		<>
			<h3 onClick={_handleClick} style={{ cursor: 'pointer' }}>
				{sprint.name}
			</h3>
			{sprint.modules.map(module => (
				<ModuleItem
					key={module.id}
					module={module}
					track={track}
					active={active}
				/>
			))}
		</>
	);
};

export default SprintItem;
