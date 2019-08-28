const fs = require('fs');


let rawDataFilepaths = getFilepaths('src/rawdata')
  .concat(getFilepaths('src/rawdata/pokemon'));

function getFilepaths(directory) {
  const isJsonFile = (filename => (/json/g).test(filename));
  return fs.readdirSync(directory).reduce((filepaths, filename) => {
    if(!isJsonFile(filename)) return filepaths
    
    const filepath = `${directory}/${filename}`;
    filepaths.push(filepath);
    return filepaths
  }, []);
}