const { gql } = require('apollo-server');

/**
 * The GraphQL schema 
 */

const typeDefs = gql`
  type pokemon {
    id
    name
    height
    weight
    baseExperience
  }
  type Query {
    
  }
`;

module.exports = typeDefs;