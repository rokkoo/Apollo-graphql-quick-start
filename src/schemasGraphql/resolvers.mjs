import { books } from '../testData';

// Resolvers define the technique for fetching the types in the
// schema. We'll retrieve books from the "books" array in testData
const resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    addBook: (root, query) => {
      books.push(query);
      return query;
    }
  }
};

export default resolvers;
