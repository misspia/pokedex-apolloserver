const pokemonData = require('../data/pokemon/pokemon.json');
const getAssets = require('./getAssets.js');

const getAllPokemon = () => {
  return pokemonData.reduce((list, pokemon) => {
    const maxPokemonId = 720;
    if(pokemon.id > maxPokemonId) return list;

    const node = {
      id: pokemon.id,
      name: pokemon.identifier,
      spriteUrl: getAssets.sprite(pokemon.id),
    }
    list.push(node);
    return list;
  }, []);
}

module.exports = getAllPokemon;