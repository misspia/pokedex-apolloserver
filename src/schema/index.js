const { gql } = require('apollo-server-micro');

/**
 * The GraphQL schema 
 */

const typeDefs = gql`
  type Query {
    hello: String
    GetPokemonById(id: Int): Pokemon
  }
  
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