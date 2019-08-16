const data = require('../data/pokemon.json');

const model = {
  getPokemonById: (id) => {
    const selectedPokemon = data.find(pokemon => pokemon.id == id);

    return {
      id: id,
      name: selectedPokemon.identifier,
      weight: selectedPokemon.weight,
      height: selectedPokemon.height,
      baseExperience: selectedPokemon.base_experience,

    }
  }
};

module.exports = model;