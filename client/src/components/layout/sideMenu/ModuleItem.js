import React from 'react';
import { Link } from '@reach/router';

import LessonItem from './LessonItem';
import { urlName } from '../../../utils/index';

const ModuleItem = ({ track, module }) => {
	return (
		<div className="module-list">
			<Link to={`/course/${urlName(track)}/${urlName(module.name)}`}>
				{module.name}
			</Link>
			<div className={`lesson-list`}>
				{module.lessons.map(lesson => (
					<LessonItem
						key={lesson.id}
						lesson={lesson}
						track={urlName(track)}
						module={urlName(module.name)}
					/>
				))}
			</div>
		</div>
	);
};

export default ModuleItem;
