import React from 'react';
import { Link } from '@reach/router';

import { urlName } from '../../../utils/index';

const LessonItem = ({ lesson, track, module }) => {
	return (
		<p>
			<Link to={`/course/${track}/${module}/${urlName(lesson.name)}`}>
				{lesson.name}
			</Link>
		</p>
	);
};

export default LessonItem;
