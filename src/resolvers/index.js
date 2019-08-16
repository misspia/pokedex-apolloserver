const model = require('../models');

/**
 * A map of functions which return data for the schema
 */
 const resolvers = {
  Query: {
    hello: (root, args, context) => 'hiiii',
    GetPokemonById: (root, args, context) => {
      return model.getPokemonById(args.id);
    }
  }
}

module.exports = resolvers;