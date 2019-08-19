const models = require('../models');

/**
 * A map of functions which return data for the schema
 */
 const resolvers = {
  Query: {
    hello: (root, args, context) => 'hiiii',
    GetPokemonById: (root, args, context) => {
      return models.getPokemonById(args.id);
    },
    GetEvolutionByChainId: (root, args, context) => {
      return models.getEvolutionByChainId(args.chainId);
    }
  }
}

module.exports = resolvers;