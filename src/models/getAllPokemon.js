const pokemonData = require('../data/pokemon/pokemon.json');
const getAssets = require('./getAssets');
const { MAX_POKEMON_ID, MIN_POKEMON_ID } = require('../constants');

const getAllPokemon = (start, end) => {
  const startId = getStartId(start);
  const endId = getEndId(end);
  return pokemonData.reduce((list, pokemon) => {
    if(pokemon.id < startId || pokemon.id > endId) {
      return list;
    }

    const node = {
      id: pokemon.id,
      name: pokemon.identifier,
      spriteUrl: getAssets.artwork(pokemon.id),
    }
    list.push(node);
    return list;
  }, []);
}

function getStartId(start) {
  if(!start) return MIN_POKEMON_ID;
  if(start < MIN_POKEMON_ID ) return MIN_POKEMON_ID;
  return start;
}

function getEndId(end) {
  if(!end) return MAX_POKEMON_ID;
  if(end > MAX_POKEMON_ID) return MAX_POKEMON_ID;
  return end;

}

module.exports = getAllPokemon;
