const { gql } = require('apollo-server');

/**
 * https://github.com/Urigo/graphql-scalars/blob/f73f98b7ccf0fb774b26824ab3807468f01946c0/src/resolvers/utilities.ts#L105-L110
 * https://github.com/Urigo/graphql-scalars/blob/master/src/resolvers/NegativeInt.ts
 * https://www.apollographql.com/docs/apollo-server/features/scalars-enums/
 */


/**
 * https://github.com/Urigo/graphql-scalars
 */

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