const fs = require('fs');
const path = require('path');
const Syzygys = require('syzygys').default;

const feedsPath = path.join(__dirname, 'feeds.json');
const config = {
  templateDir: path.join(__dirname, 'templates'),
  outputDir: path.join(__dirname, 'output'),
  feedItemCountLimit: 100,
};

fs.readFile(feedsPath, (err, data) => {
  const feeds = JSON.parse(data);

  Syzygys.withConfig({...config, feeds}).run();
});
