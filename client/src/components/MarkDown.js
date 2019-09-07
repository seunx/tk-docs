import React from 'react';
import { markdown } from '../styles';
let hljs = require('highlight.js');
// let md = require('markdown-it')({
// 	html: true,
// 	linkify: true,
// 	typographer: true,
// 	highlight: function(str, lang) {
// 		if (lang && hljs.getLanguage(lang)) {
// 			try {
// 				return hljs.highlight(lang, str).value;
// 			} catch (__) {}
// 		}

// 		return ''; // use external default escaping
// 	}
// });
let md = require('markdown-it')('commonmark');

const MarkDown = ({ content }) => {
	return (
		<div
			css={markdown}
			dangerouslySetInnerHTML={{ __html: md.render(content) }}
		/>
	);
};

export default MarkDown;
