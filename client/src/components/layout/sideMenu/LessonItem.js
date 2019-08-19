import React from 'react';
import { Link } from '@reach/router';

const LessonItem = ({ lesson, url }) => {
	const urlName = lesson.name.split(' ').join('-');
	return (
		<p>
			<Link to={`/${url}/${urlName}`}>{lesson.name}</Link>
		</p>
	);
};

export default LessonItem;
