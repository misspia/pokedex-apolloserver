const { gql } = require('apollo-server-micro');
const PokemonTypeDefs = require('./pokemon.schema.js');

const Query = gql`
  type Query {
    hello: String
    GetPokemonById(id: Int): Pokemon
  } 
`;

module.exports = [
  Query,
  PokemonTypeDefs
];