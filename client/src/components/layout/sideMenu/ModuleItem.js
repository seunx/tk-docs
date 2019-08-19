import React from 'react';
import { Link } from '@reach/router';
import LessonItem from './LessonItem';

const ModuleItem = ({ module }) => {
	const urlName = module.name.split(' ').join('-');
	return (
		<div className="module-list">
			<Link to={`/${urlName}`}>{module.name}</Link>
			<div className={`lesson-list`}>
				{module.lessons.map(lesson => (
					<LessonItem key={lesson.id} lesson={lesson} url={urlName} />
				))}
			</div>
		</div>
	);
};

export default ModuleItem;
