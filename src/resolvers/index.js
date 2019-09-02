const models = require('../models');
const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = 'graphql/error';
const { Kind } = require('graphql/language');
const {
  MIN_POKEMON_ID,
  MAX_POKEMON_ID,
} = require('../constants');

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


  PokemonId: new GraphQLScalarType({
    name: 'PokemonId',
    description: `Valid Pokemon IDs are integers in the range [${MIN_POKEMON_ID}, ${MAX_POKEMON_ID}]`,
    serialize(value) {
      return processPokemonIdValue(value);
    },
    parseValue(value) {
      return processPokemonIdValue(value);
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.INT) {
        throw new GraphQLError(
          `Van only validate integers as Pokemon IDs but got a(n) ${ast.kind}`
        )
      }
      return parseInt(ast.value, 10);
    },
  })
}

function processPokemonIdValue(value) {
  const parsedValue = parseInt(value, 10);

  if (value < MIN_POKEMON_ID || value > MAX_POKEMON_ID) {
    throw new TypeError(
      `${value} is not a valid Pokemon ID. A valid Pokemon ID is 
        an integer in the range [${MIN_POKEMON_ID}, ${MAX_POKEMON_ID}]`
    );
  }
  return parsedValue;
}

module.exports = resolvers;
