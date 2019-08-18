const pokemonData = require('../data/pokemon/pokemon.json');
const evolutionData = require('../data/evolution.json');
const evolutionTriggersData = require('../data/evolutionTriggers.json');

const getEvolutionById = (id) => {
  const basic = pokemonData.find(pokemon => pokemon.id === id);
  const evolution = evolutionData.find(pokemon => pokemon.id === id);

  return {
    id,
    name: basic.identifier,
  }
}


module.exports = getEvolutionById;