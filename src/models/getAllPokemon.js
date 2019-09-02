const pokemonData = require('../data/pokemon/pokemon.json');
const getAssets = require('./getAssets');
const { MAX_POKEMON_ID } = require('../constants');

const getAllPokemon = () => {
  return pokemonData.reduce((list, pokemon) => {
    if(pokemon.id > MAX_POKEMON_ID) return list;

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