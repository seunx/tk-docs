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
	/* top: -50px;
	left: 0; */
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

export const track_items_container = css`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	/* width: 80%; */
	/* margin: 0 1rem; */
`;

export const track_container = css`
	width: 80%;
	margin: 0 1rem;
`;

export const dashboard_menu = css`
	background: yellow;
	width: 20%;
	text-align: center;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	.profile-pic {
		align-self: center;
		border-radius: 50%;
		background: red;
		height: 150px;
		width: 150px;
	}
`;

export const dashboard_container = css`
	display: flex;
`;

export const track_item = css`
	p {
		text-align: justify;
	}
`;
