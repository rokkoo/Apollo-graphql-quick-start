import apollo from 'apollo-server';

const { gql } = apollo;

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
  }

  # The "Mutation" tupe is like a REST POST, DELETE, UPDATE but in one point.
  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

export default typeDefs;
