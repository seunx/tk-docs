import React from 'react';
import LessonItem from './LessonItem';

const ModuleItem = ({ module }) => {
	const _handleClick = e => {
		console.log(`from Module Item, ${module.name}`);
	};
	return (
		<div className="module-list">
			<h2 onClick={_handleClick}>{module.name}</h2>
			<div className={`lesson-list`}>
				{module.lessons.map(lesson => (
					<LessonItem key={lesson.id} lesson={lesson} />
				))}
			</div>
		</div>
	);
};

export default ModuleItem;
