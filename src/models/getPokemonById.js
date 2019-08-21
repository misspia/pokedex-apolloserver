const basicData = require('../data/pokemon/pokemon.json');
const pokemonSpeciesData = require('../data/pokemon/species.json');
const pokemonAbilitiesData = require('../data/pokemon/abilities.json');
const abilitiesData = require('../data/abilities.json');
const pokemonTypesData = require('../data/pokemon/types.json');
const typesData = require('../data/types.json');
const pokemonStatsData = require('../data/pokemon/stats.json');
const statsData = require('../data/stats.json');


const getPokemonById = (id) => {
  const basic = basicData.find(pokemon => pokemon.id === id);
  return {
    id: id,
    chainId: getEvolutionChainId(id), 
    name: basic.identifier,
    weight: basic.weight,
    height: basic.height,
    baseExperience: basic.base_experience,
    abilities: getAbiltyNamesById(id),
    types: getTypeNamesById(id),
    stats: getPokemonStatsById(id),
    image: '',
  }
}

function getEvolutionChainId(pkId) {
  const species = pokemonSpeciesData.find(pokemon => pokemon.id === pkId);
  return species.evolution_chain_id;
}


function getAbiltyNamesById(id) {
  const abilityIds = pokemonAbilitiesData.filter(ability => (
    ability.pokemon_id === id
  ))
    .map(pokemon => (
      pokemon.ability_id
    ));

  return abilityIds.map(id => (
    abilitiesData.find(ability => ability.id === id).identifier
  ));
}

function getTypeNamesById(id) {
  const typeIds = pokemonTypesData.filter(type => (
    type.pokemon_id === id
  ))
    .map(pokemon => (
      pokemon.type_id
    ));

  return typeIds.map(id => (
    typesData.find(type => type.id === id).identifier
  ));
}

function getPokemonStatsById(id) {
  const pokemonStats = pokemonStatsData.filter(stat => (
    stat.pokemon_id === id
  ))
    .map(pokemon => ({
      statId: pokemon.stat_id,
      value: pokemon.base_stat,
    }));

  return pokemonStats.map(({ statId, value }) => {
    const key = statsData.find(stat => stat.id === statId).identifier;
    return { key: key, value: value };
  })
}


module.exports = getPokemonById;