const { gql } = require('apollo-server');

const typeDefs = gql`
  type Evolution {
    chainId: Int
    chain: [EvolutionNode]
  }

  type EvolutionNode {
    id: Int
    name: String
    types: [Type]
    artworkUrl: String
    evolvesFromId: Int
    evolutionTrigger: String
    triggerItem: String
    minimumLevel: Int
    gender: String
    location: String
    heldItem: String
    timeOfDay: String
    knownMove: String
    mimimumHappiness: Int
    minimumBeauty: Int
    minimumAffection: Int
    relativePhysicalStats: Int
    needsOverworldRain: Boolean
    turnUpsideDown: Boolean
  }
`;

module.exports = typeDefs;
