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
    evolutionTriggerId: Int
    triggerItemId: Int
    minimumLevel: Int
    genderId: Int
    locationId: Int
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
