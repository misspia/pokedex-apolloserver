const fs = require('fs');

const INPUT_DIRECTORY = './src/rawdata';
const OUTPUT_DIRECTORY = './src/data';


const rawDataFilepaths = getFilepaths(INPUT_DIRECTORY)
  .concat(getFilepaths(`${INPUT_DIRECTORY}/pokemon`));

function getFilepaths(directory) {
  const isJsonFile = (filename => (/json/g).test(filename));
  return fs.readdirSync(directory).reduce((filepaths, filename) => {
    if(!isJsonFile(filename)) return filepaths
    
    const filepath = `${directory}/${filename}`;
    filepaths.push(filepath);
    return filepaths
  }, []);
}

rawDataFilepaths.forEach(filepath => {
  const data = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  const filename = filepath.replace(INPUT_DIRECTORY, '');

  const newPath = `${OUTPUT_DIRECTORY}${filename}`;
  fs.writeFile(newPath, JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) {
      return console.log('Unable to write to ', newPath);
    }
    console.log('Wrote file to ', newPath);

  });
});

function formatJSON(rawData) {
  let formattedData = {};
  rawData.forEach((node) => {
    
  })
}