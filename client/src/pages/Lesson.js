import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import SideMenu from '../components/layout/sideMenu';
import { GET_LESSON } from '../gql';
import { pageName } from '../utils';
import { page_header, pro_tip } from '../styles';
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

const Lesson = ({ track, lesson }) => {
	const { loading, data, error } = useQuery(GET_LESSON, {
		variables: { where: { name: pageName(lesson) } }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<Layout>
			<SideMenu track={pageName(track)} />
			<div className="content-body">
				<div css={page_header}>
					<h1>{data.lesson.name}</h1>
					<p>{data.lesson.description}</p>
					<p>Objectives:</p>
					{data.lesson.objective}
				</div>
				<div css={pro_tip}>
					<h1>Pro Tip Goes Here</h1>
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: md.render(data.lesson.details) }}
				/>
			</div>
		</Layout>
	);
};

export default Lesson;
