import { css } from '@emotion/core';

export const main_menu = css`
	display: flex;
	flex-direction: row;
	color: red;
	justify-content: center;
	h1 {
		padding: 0 1rem;
	}
`;
export const side_menu = css`
	position: relative;
	top: -50px;
	left: 0;
	width: 30%;
`;

export const main = css`
	.content {
		display: flex;
	}
	.content-body {
		width: 70%;
	}
`;
