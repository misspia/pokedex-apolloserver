const {
  MIN_POKEMON_ID,
  MAX_POKEMON_ID,
} = require('../constants');

const scalars = {
  processPokemonIdValue: (value) => {
    const parsedValue = parseInt(value, 10);
  
    if (value < MIN_POKEMON_ID || value > MAX_POKEMON_ID) {
      throw new TypeError(
        `${value} is not a valid Pokemon ID. A valid Pokemon ID is 
          an integer in the range [${MIN_POKEMON_ID}, ${MAX_POKEMON_ID}]`
      );
    }
    return parsedValue;
  }
}

module.exports = scalars;