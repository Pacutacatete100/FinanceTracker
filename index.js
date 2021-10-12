#!/usr/bin/env node
// index.js

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const yargs = require('yargs')
var babar = require('babar');



console.log(
    chalk.green(
      figlet.textSync('Financial Tracker', { horizontalLayout: 'full' })
    )
);

console.log(process.argv)
