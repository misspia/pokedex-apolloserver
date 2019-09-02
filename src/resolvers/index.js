const models = require('../models');
const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = 'graphql/error';
const { Kind } = require('graphql/language');
const {
  MIN_POKEMON_ID,
  MAX_POKEMON_ID,
} = require('../constants');
const scalars = require('./scalarProcessors');

/**
 * A map of functions which return data for the schema
 */
const resolvers = {
  Query: {
    hello: (root, args, context) => 'hiiii',
    GetAllPokemon: (root, args, context) => (
      models.getAllPokemon()
    ),
    GetPokemonById: (root, args, context) => (
      models.getPokemonById(args.id)
    ),
    GetEvolutionByChainId: (root, args, context) => (
      models.getEvolutionByChainId(args.chainId)
    ),
  },


  /**
   * Custom Scalars
   */
  PokemonId: new GraphQLScalarType({
    name: 'PokemonId',
    description: `Valid Pokemon IDs are integers in the range [${MIN_POKEMON_ID}, ${MAX_POKEMON_ID}]`,
    serialize:(value) => (
      scalars.processPokemonIdValue(value)
    ),
    parseValue: (value) => (
      scalars.processPokemonIdValue(value)
    ),
    parseLiteral: (ast) => {
      if (ast.kind !== Kind.INT) {
        throw new GraphQLError(
          `Van only validate integers as Pokemon IDs but got a(n) ${ast.kind}`
        )
      }
      return parseInt(ast.value, 10);
    },
  })
}



module.exports = resolvers;
