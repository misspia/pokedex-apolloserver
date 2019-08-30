const pokemonSpeciesData = require('../data/pokemon/species.json');
const evolutionData = require('../data/evolution.json');
const evolutionTriggersData = require('../data/evolutionTriggers.json');
const itemsData = require('../data/items.json');
const gendersData = require('../data/genders.json');
const locationsData = require('../data/locations.json');
const movesData = require('../data/moves.json');

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
      minimum_affection: minimumAffection,
      minimum_beauty: minimumBeauty,
      minimum_happiness: minimumHappiness,
      minimum_level: minimumLevel,
      relative_physical_stats: relativePhysicalStats,
    } = evolution;

    chainNodes.push({
      id: species.id,
      name: species.identifier,
      evolvesFromId: evolvesFromId === '' ? null : evolvesFromId,
      evolutionTrigger: getEvolutionTrigger(evolution.evolution_trigger_id),
      triggerItem: getItem(evolution.trigger_item_id),
      minimumLevel: minimumLevel === '' ? null : minimumLevel,
      gender: getGender(evolution.gender_id),
      location: getLocation(evolution.location_id),
      heldItem: getItem(evolution.held_item_id),
      timeOfDay: evolution.time_of_day,
      knownMove: getMove(evolution.known_move_id),
      minimumHappiness: minimumHappiness === '' ? null : minimumHappiness,
      minimumBeauty: minimumBeauty === '' ? null : minimumBeauty,
      minimumAffection: minimumAffection === '' ? null : minimumAffection,
      relativePhysicalStats: relativePhysicalStats === '' ? null : relativePhysicalStats,
      needsOverworldRain: evolution.needs_overworld_rain === 1,
      turnUpsideDown: evolution.turn_upside_down === 1,

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