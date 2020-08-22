const getNotes = require('./notes.js');
const chalk = require('chalk');

const notes = getNotes();

console.log(chalk.red.bgWhite.bold('NodeJS stuff!!!'));