const pokemonSpeciesData = require('../data/pokemon/species.json');
const evolutionData = require('../data/evolution.json');
const evolutionTriggersData = require('../data/evolutionTriggers.json');

/**
 * sample struct
 * https://pokeapi.co/api/v2/evolution-chain/18
 *  
 */
const getEvolutionByChainId = (chainId) => {
  const firstPokemonInChain = pokemonSpeciesData.find(pokemon => (
    pokemon.evolution_chain_id === chainId
  ));
  return {
    chainId,
    id: firstPokemonInChain.id,
    name: firstPokemonInChain.identifier,
    nextIds: getNextNodeIds(firstPokemonInChain.id),
  }
}

function getEvolutionTree(chainId) {
  return getEvolutionNode({}, chainId);
}

function getEvolutionNode(tree, chainId) {
  const nextIds = getNextNodeIds(1);
  

}

function getNextNodeIds(predecessorId) {
  let nextNodeIds = [];
  let evolvesFromId = 0;
  let i = 0;

  for(let i = 0; i < pokemonSpeciesData.length; i ++) {
    const pokemon = pokemonSpeciesData[i];
    evolvesFromId = pokemon.evolves_from_species_id;
    
    if(evolvesFromId === predecessorId) {
      nextNodeIds.push(pokemon.identifier);
    }
  }

  return nextNodeIds;
}

module.exports = getEvolutionByChainId;