import React from 'react';
import ModuleItem from './ModuleItem';

const SprintItem = ({ sprint, track }) => {
	const _handleClick = e => {
		console.log(`from Sprint Item, ${sprint.name}`);
	};
	return (
		<React.Fragment>
			<h1 onClick={_handleClick}>{sprint.name}</h1>
			{sprint.modules.map(module => (
				<ModuleItem key={module.id} module={module} track={track} />
			))}
		</React.Fragment>
	);
};

export default SprintItem;
