const pokemonSpeciesData = require('../data/pokemon/species.json');
const evolutionData = require('../data/evolution.json');
const evolutionTriggersData = require('../data/evolutionTriggers.json');
const itemsData = require('../data/items.json');
const gendersData = require('../data/genders.json');
const locationsData = require('../data/locations.json');

const getEvolutionByChainId = (chainId) => ({
  chainId,
  chain: getEvolutionNodes(chainId),
});
  
function getEvolutionNodes(chainId) {
  return pokemonSpeciesData.reduce((chainNodes, species) => {
    if(species.evolution_chain_id !== chainId) {
      return chainNodes;
    }
    const evolution = evolutionData.find(evo => (
      evo.id === species.id
    ));
    const {
      evolves_from_species_id: evolvesFromId,
    } = species;

    chainNodes.push({
      id: species.id,
      name: species.identifier,
      evolvesFromId: evolvesFromId === '' ? null : evolvesFromId,
      evolutionTrigger: getEvolutionTrigger(evolution.evolution_trigger_id),
      triggerItem: getItem(evolution.trigger_item_id),
      minimumLevel: species.minimum_level,
      gender: getGender(evolution.gender_id),
      location: getLocation(evolution.location_id),
      heldItemId: getItem(evolution.held_item_id),
      timeOfDay: evolution.time_of_day,
      knownMoveId: species.known_move_id,
      knownMoveTypeId: species.known_move_type_id,
      minimumHappiness: species.minimum_happiness,
      minimumBeauty: species.minimum_beauty,
      minimumAffection: species.minimum_affection,
      relativePhysicalStats: species.relative_physical_stats,
      partySpeciesId: species.party_species_id,
      partyTypeId: species.party_type_id,
      tradeSpeciesId: species.trade_species_id,
      needsOverworldRain: species.needs_overworld_rain === 1,
      turnUpsideDown: species.turn_upside_down === 1,

    })
    return chainNodes;
  }, []);
}

function getEvolutionTrigger(triggerId) {
  if(triggerId === '') return null;

  return evolutionTriggersData.find(trigger => (
    trigger.id === triggerId
  )).identifier;
}

function getItem(itemId) {
  if(itemId === '') return null;

  return itemsData.find(item => (
    item.id === itemId
  )).identifier;
}

function getGender(genderId) {
  if(!genderId) return null;

  return gendersData.find(gender => (
    gender.id === genderId
  )).identifier;
}

function getLocation(locationId) {
  if(locationId === '') return null;

  return locationsData.find(location => (
    location.id === locationId
  )).identifier;
}

function getMove(moveId) {
  return 
}


module.exports = getEvolutionByChainId;