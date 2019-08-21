const pokemonSpeciesData = require('../data/pokemon/species.json');
const evolutionData = require('../data/evolution.json');
const evolutionTriggersData = require('../data/evolutionTriggers.json');

const getEvolutionByChainId = (chainId) => ({
  chainId,
  chain: getEvolutionNodes(chainId),
})
  

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
    chainNodes.push({
      id,
      name,
      evolvesFromId: evolvesFromId === '' ? null : evolvesFromId,
    })
    return chainNodes;
  }, []);
}

module.exports = getEvolutionByChainId;