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
    types: [Type]
    stats: [PokemonStat]
    artworkUrl: String
  }

  type PokemonStat {
    key: String
    value: Int
  }

  enum Type {
    normal
    fighting
    flying
    poison
    ground
    rock
    bug
    ghost
    steel
    fire
    water
    grass
    electric
    psychic
    ice
    dragon
    fairy
    unkown
    shadow
  }
`;

module.exports = typeDefs;