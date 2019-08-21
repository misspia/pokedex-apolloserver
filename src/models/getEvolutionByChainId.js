const pokemonSpeciesData = require('../data/pokemon/species.json');
const evolutionData = require('../data/evolution.json');
const evolutionTriggersData = require('../data/evolutionTriggers.json');

const getEvolutionByChainId = (chainId) => {
  const chain = getEvolutionNodes(chainId);
  console.log(JSON.stringify(chain, null, 4));
  return {
    chainId,
    chain,
  }
}

function getEvolutionNodes(chainId) {
  return pokemonSpeciesData.reduce((chainNodes, pokemon) => {
    if(pokemon.evolution_chain_id !== chainId) {
      return chainNodes;
    }
    const {
      id,
      identifier: name,
      evolves_from_species_id: evolvesFromId,
    } = pokemon;
    console.log(evolvesFromId === '')
    chainNodes.push({
      id,
      name,
      evolvesFromId: evolvesFromId === '' ? null : evolvesFromId,
    })
    return chainNodes;
  }, []);
}

function getNextEvolutionNode(tree, predecessorId) {
  let nextNodeIds = getNextNodeIds(predecessorId);
  
  if (nextNodeIds.length === 0) {
    return nextNodeIds;
  }
  
  //map
  tree.push(nextNodeIds);
  console.log('[tree]', JSON.stringify(tree, null, 2));
  return getNextEvolutionNode(tree, nextNodeIds[0].id);
}

function getNextNodeIds(predecessorId) {
  let nextNodeIds = [];
  let evolvesFromId = 0;
  let i = 0;

  for (let i = 0; i < pokemonSpeciesData.length; i++) {
    const pokemon = pokemonSpeciesData[i];
    evolvesFromId = pokemon.evolves_from_species_id;

    if (evolvesFromId === predecessorId) {
      nextNodeIds.push({
        id: pokemon.id,
        name: pokemon.identifier,
        evolvesTo: [],
      });
    }
  }
  return nextNodeIds;
}


module.exports = getEvolutionByChainId;