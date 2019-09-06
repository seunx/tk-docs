import React from 'react';
import { Link } from '@reach/router';

import LessonItem from './LessonItem';
import { urlName } from '../../../utils/index';

const ModuleItem = ({ track, module, active }) => {
	return (
		<div className={`module-list ${active ? 'active' : ''}`}>
			<Link to={`/course/${urlName(track)}/${urlName(module.name)}`}>
				<h4>{module.name}</h4>
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
