const { gql } = require('apollo-server');

const typeDefs = gql`
  type Evolution {
    chainId: Int
    chain: [EvolutionNode]
  }

  type EvolutionNode {
    id: Int
    name: String
    evolvesFromId: Int
  }
`;

module.exports = typeDefs;
