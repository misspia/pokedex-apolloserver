const models = require('../models');

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
  }
}

module.exports = resolvers;
