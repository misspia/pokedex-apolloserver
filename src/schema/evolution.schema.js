const { gql } = require('apollo-server');

const typeDefs = gql`
  type Evolution {
    chainId: Int
    id: Int
    name: String 
    evolvesTo: [Evolution]
    nextIds: [String]
  }
`;

module.exports = typeDefs;