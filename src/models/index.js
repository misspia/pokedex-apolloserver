const basicData = require('../data/pokemon/pokemon.json');
const pokemonAbilitiesData = require('../data/pokemon/abilities.json');
const abilitiesData = require('../data/abilities.json');

const model = {
  getPokemonById: (id) => {
    const basic = basicData.find(pokemon => pokemon.id === id);
    

    return {
      id: id,
      name: basic.identifier,
      weight: basic.weight,
      height: basic.height,
      baseExperience: basic.base_experience,
      abilities: getAbiltyNamesById(id),

    }
  }
};

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


module.exports = model;