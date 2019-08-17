import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { StoreProvider } from '../context';

const client = new ApolloClient({
	uri: 'http://localhost:4000/gql'
});

export const Provider = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			<StoreProvider>{children}</StoreProvider>
		</ApolloProvider>
	);
};
