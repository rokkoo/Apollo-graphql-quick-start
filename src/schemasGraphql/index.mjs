import apollo from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

const { ApolloServer } = apollo;

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

export default server;
