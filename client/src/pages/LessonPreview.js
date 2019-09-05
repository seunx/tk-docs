import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import { GET_LESSON } from '../gql/index';
import { pageName } from '../utils';
let hljs = require('highlight.js');
let md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true,
	highlight: function(str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(lang, str).value;
			} catch (__) {}
		}

		return ''; // use external default escaping
	}
});

const LessonPreview = ({ track, sprint, module, lesson }) => {
	const { loading, error, data } = useQuery(GET_LESSON, {
		variables: { where: { name: pageName(lesson) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<Layout>
			<div className="content-body">
				<div>
					<Link to="/dashboard">{track}</Link> >{' '}
					<Link to={`/dashboard/${track}`}>{sprint}</Link> >{' '}
					<Link to={`/dashboard/${track}/${sprint}`}>{module}</Link> >{' '}
					<Link to={`/dashboard/${track}/${sprint}/${module}`}>{lesson}</Link>
				</div>
				<h1>{data.lesson.name}</h1>
				<p>{data.lesson.description}</p>
				<p>Objectives:</p>
				<ul>
					{data.lesson.objectives.map((o, i) => (
						<li key={o[0] + i}>{o}</li>
					))}
				</ul>
				<p>Pro Tip Goes Here</p>
				<div
					dangerouslySetInnerHTML={{ __html: md.render(data.lesson.details) }}
				/>
			</div>
		</Layout>
	);
};

export default LessonPreview;