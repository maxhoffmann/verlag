var program = require('commander');

program
  .version(require('./package.json').version)
  .parse(process.argv);

function command() {
  console.log('Welcome to verlag!');
}

module.exports = command;
