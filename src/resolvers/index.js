const models = require('../models');

/**
 * A map of functions which return data for the schema
 */
 const resolvers = {
  Query: {
    hello: (root, args, context) => 'hiiii',
    GetPokemonById: (root, args, context) => {
      return models.pokemon.getPokemonById(args.id);
    }
  }
}

module.exports = resolvers;