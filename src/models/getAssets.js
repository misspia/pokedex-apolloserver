const BASE_ASSET_URL = 'https://raw.githubusercontent.com/misspia/assets/master/pokemon/';


const getAssets = {
  artwork: (id) => (
    `${BASE_ASSET_URL}artwork/${id}.png`    
  ),
  sprite = (id) => (
    `${BASE_ASSET_URL}sprite/${id}.png`
  ),
}

module.exports = getAssets;