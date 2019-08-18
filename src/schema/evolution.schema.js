const { gql } = require('apollo-server');

const typeDefs = gql`
  type Evolution {
    id: Int
    name: String
  }


`;

module.exports = typeDefs;