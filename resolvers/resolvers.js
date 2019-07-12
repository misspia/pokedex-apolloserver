/**
 * A map of functions which return data for the schema
 */

const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

module.exports = resolvers;