const { gql } = require('apollo-server-micro');
const PokemonTypeDefs = require('./pokemon.schema.js');
const EvolutionTypeDefs = require('./evolution.schema.js');

const Query = gql`
  type Query {
    hello: String
    GetPokemonById(id: Int): Pokemon
    GetEvolutionById(id: Int): Evolution
  } 
`;

module.exports = [
  Query,
  PokemonTypeDefs,
  EvolutionTypeDefs,
];