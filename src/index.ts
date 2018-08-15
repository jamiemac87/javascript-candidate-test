import { findNearest } from "./find-nearest";

const argv = require('minimist')(process.argv.slice(2));

// Retrieve command line args
const input = argv['i'] !== undefined ? argv['i'] : null;

if (input === null) {
  console.error('You need to supply an input argument e.g node dist/index.js -i=10');
  process.exit(1);
}

console.log(`Nearest number to ${input} is: ${findNearest(input)}`);