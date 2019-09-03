const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar PokemonId
  scalar PositiveInt
`;

module.exports = typeDefs;