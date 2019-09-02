const { gql } = require('apollo-server-micro');
const PokemonTypeDefs = require('./pokemon.schema');
const EvolutionTypeDefs = require('./evolution.schema');

const Query = gql`
  type Query {
    hello: String
    GetAllPokemon: [PokemonListNode]
    GetPokemonById(id: PokemonId): Pokemon
    GetEvolutionByChainId(chainId: Int): Evolution
  } 
`;

module.exports = [
  Query,
  PokemonTypeDefs,
  EvolutionTypeDefs,
];
