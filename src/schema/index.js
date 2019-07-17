const { gql } = require('apollo-server-micro');

/**
 * The GraphQL schema 
 */

const typeDefs = gql`
  type Query {
    hello: String
    bye: String
  }
`;


module.exports = typeDefs;