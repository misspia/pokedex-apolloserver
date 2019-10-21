const { gql } = require('apollo-server-micro');
const ScalarTypeDefs = require('./scalars.schema');
const EnumTypeDefs = require('./enums.schema');
const PokemonTypeDefs = require('./pokemon.schema');
const EvolutionTypeDefs = require('./evolution.schema');

const Query = gql`
  type Query {
    hello: String
    GetAllPokemon(start: PokemonId, end: PokemonId): [PokemonListNode]
    GetPokemonById(id: PokemonId): Pokemon
    GetEvolutionByChainId(chainId: PositiveInt): Evolution
  } 
`;

module.exports = [
  Query,
  ScalarTypeDefs,
  EnumTypeDefs,
  PokemonTypeDefs,
  EvolutionTypeDefs,
];
