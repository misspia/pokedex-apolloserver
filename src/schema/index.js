const { gql } = require('apollo-server-micro');
const PokemonTypeDefs = require('./pokemon.schema.js');
const EvolutionTypeDefs = require('./evolution.schema.js');

const Query = gql`
  type Query {
    hello: String
    GetAllPokemon(): [PokemonListNode]
    GetPokemonById(id: Int): Pokemon
    GetEvolutionByChainId(chainId: Int): Evolution
  } 
`;

module.exports = [
  Query,
  PokemonTypeDefs,
  EvolutionTypeDefs,
];
