import React from 'react';

const LessonItem = ({ lesson }) => {
	const _handleClick = e => {
		console.log(`from Lesson Item, ${lesson.name}`);
	};
	return <h3 onClick={_handleClick}>{lesson.name}</h3>;
};

export default LessonItem;
