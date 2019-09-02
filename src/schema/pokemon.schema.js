const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar PokemonId

  type PokemonListNode {
    id: Int
    name: String
    spriteUrl: String
  }

  type Pokemon {
    id: PokemonId
    name: String
    chainId: Int
    height: Int
    weight: Int
    baseExperience: Int
    abilities: [String]
    types: [String]
    stats: [PokemonStat]
    artworkUrl: String
  }

  type PokemonStat {
    key: String
    value: Int
  }
`;

module.exports = typeDefs;