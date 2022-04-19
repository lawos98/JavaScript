const Module = require('./module');

const myArgs = process.argv.slice(2);
const operation = new Module(parseInt(myArgs[0]), parseInt(myArgs[1]));
console.log(operation.sum());
