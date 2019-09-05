import { css, Global } from '@emotion/core';

export const main_menu = css`
	display: flex;
	color: #fff;
	justify-content: space-between;
	align-items: center;
	background-color: #bb1333;
	a {
		padding: 0 1rem;
		text-decoration: none;
		font-size: 16px;
		color: #fff;
	}
`;
export const side_menu = css`
	position: relative;
	width: 30%;
	background-color: #14121f;
	color: #fff;
	height: 100vh;
`;

export const main = css`
	.content {
		display: flex;
	}
	.content-body {
		width: 100%;
	}
`;

export const dash_container = css`
	width: 100%;
	padding: 0 4rem;
`;
export const dash_items = css`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 1rem;
	p {
		text-align: justify;
	}
	width: 100%;
	margin: 0 1rem;
`;
