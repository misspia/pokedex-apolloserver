const { gql } = require('apollo-server');

/**
 * The GraphQL schema 
 */

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

module.exports = typeDefs;