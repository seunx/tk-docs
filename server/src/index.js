require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { prisma } from './generated/prisma-client';
import typeDefs from './schema.gql';

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: req => {
		return { ...req, prisma };
	},
	resolverValidationOptions: {
		requireResolversForResolveType: false
	}
});

const options = {
	port: 4000,
	endpoint: '/gql',
	playground: '/docs',
	tracing: true,
	debug: true
};

server.start(options, ({ port }) =>
	console.log(`Server up, on http://localhost:${port}/docs`)
);
