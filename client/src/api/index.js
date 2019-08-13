import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri: 'http://localhost:4000/gql'
});

export const Provider = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
