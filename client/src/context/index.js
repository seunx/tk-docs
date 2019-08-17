import React, { createContext, useReducer } from 'react';

export const Store = createContext({ state: {}, dispatch: () => {} });

const INITIAL_STATE = {
	track: 'Full Stack Web Development'
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'changeTrack':
			return {
				...state,
				track: action.payload
			};
		default:
			throw new Error('not a valid action');
	}
};

export function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
