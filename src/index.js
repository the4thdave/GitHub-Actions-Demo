const core = require('@actions/core');
const fs = require('fs');

const readFileAndGetUrl = (inputFilePath) => {
  const data = fs.readFileSync(inputFilePath, { encoding: 'utf-8', flag: 'r' });
  const lines = data.split('\n');

  for (let i = lines.length - 1; i >= 0; i--) {
    let line = lines[i].trim();
    if (line.startsWith('$text')) {
      const url = line.substring(6);
      return url.trim();
    }
  }
};

const convertUrlForReq = (url) => {
  let transformedUrl = url.replace('github.gapinc.com', 'github.gapin.com/raw');
  transformedUrl += '?token=';
  return transformedUrl;
};

const main = () => {
  try {
    const filesChanged = core.getInput('files-changed');
    const url = readFileAndGetUrl(filesChanged);
    const transformedUrl = convertUrlForReq(url);
    core.setOutput('raw-url', transformedUrl);
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
