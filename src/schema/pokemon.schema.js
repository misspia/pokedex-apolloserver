const { gql } = require('apollo-server');

const typeDefs = gql`
  type Pokemon {
    id: Int
    name: String
    height: Int
    weight: Int
    baseExperience: Int
    abilities: [String]
    types: [String]
    stats: [PokemonStat]
  }

  type PokemonStat {
    key: String
    value: Int
  }
`;

module.exports = typeDefs;