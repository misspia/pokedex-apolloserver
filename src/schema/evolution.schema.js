const { gql } = require('apollo-server');

const typeDefs = gql`
  type Evolution {
    chainId: Int
    chain: [EvolutionNode]
  }

  type EvolutionNode {
    id: Int
    name: String
    evolvesFromId: Int
    evolutionTrigger: String
    triggerItem: String
    minimumLevel: Int
    gender: String
    location: String
    heldItemId: Int
    timeOfDay: String
    knownMoveId: Int
    knowMoveTypeId: Int
    mimimumHappiness: Int
    minimumBeauty: Int
    minimumAffection: Int
    relativePhysicalStats: Int
    partySpeciesId: Int
    tradeSpeciesId: Int
    needsOverworldRain: Boolean
    turnUpsideDown: Boolean
  }
`;

module.exports = typeDefs;
