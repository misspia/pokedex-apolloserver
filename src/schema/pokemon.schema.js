const { gql } = require('apollo-server');

const typeDefs = gql`
  type PokemonListNode {
    id: Int
    name: String
    spriteUrl: String
  }

  type Pokemon {
    id: PokemonId
    name: String
    chainId: PositiveInt
    height: Int
    weight: Int
    baseExperience: Int
    abilities: [String]
    types: [Type]
    stats: [PokemonStat]
    artworkUrl: String
  }

  type PokemonStat {
    key: String
    value: Int
  }
`;

module.exports = typeDefs;