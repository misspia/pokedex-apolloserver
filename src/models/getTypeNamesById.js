const typesData = require('../data/types.json');
const pokemonTypesData = require('../data/pokemon/types.json');

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

module.exports = getTypeNamesById;
