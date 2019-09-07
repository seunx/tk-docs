import React from 'react';
import { modal_content } from '../styles';

const ModalContent = ({ header, setModal, component }) => {
	return (
		<div css={modal_content}>
			<button className="btn close" onClick={() => setModal(false)}>
				X
			</button>
			<h3>{header}</h3>
			{component}
		</div>
	);
};

export default ModalContent;
