const pokemonSpeciesData = require('../data/pokemon/species.json');
const evolutionData = require('../data/evolution.json');
const evolutionTriggersData = require('../data/evolutionTriggers.json');

const getEvolutionByChainId = (chainId) => ({
  chainId,
  chain: getEvolutionNodes(chainId),
})
  

function getEvolutionNodes(chainId) {
  return pokemonSpeciesData.reduce((chainNodes, pokemon) => {
    if(pokemon.evolution_chain_id !== chainId) {
      return chainNodes;
    }
    const {
      evolves_from_species_id: evolvesFromId,
    } = pokemon;
    chainNodes.push({
      id: pokemon.id,
      name: pokemon.identifier,
      evolvesFromId: evolvesFromId === '' ? null : evolvesFromId,
      evolutionTriggerId: pokemon.evolution_trigger_id,
      triggerItemId: pokemon.trigger_item_id,
      minimumLevel: pokemon.minimum_level,
      genderId: pokemon.gender_id,
      locationId: pokemon.location_id,
      heldItemId: pokemon.held_item_id,
      timeOfDay: pokemon.time_of_day,
      knownMoveId: pokemon.known_move_id,
      knownMoveTypeId: pokemon.known_move_type_id,
      minimumHappiness: pokemon.minimum_happiness,
      minimumBeauty: pokemon.minimum_beauty,
      minimumAffection: pokemon.minimum_affection,
      relativePhysicalStats: pokemon.relative_physical_stats,
      partySpeciesId: pokemon.party_species_id,
      partyTypeId: pokemon.party_type_id,
      tradeSpeciesId: pokemon.trade_species_id,
      needsOverworldRain: pokemon.needs_overworld_rain === 1,
      turnUpsideDown: pokemon.turn_upside_down === 1,

    })
    return chainNodes;
  }, []);
}

module.exports = getEvolutionByChainId;