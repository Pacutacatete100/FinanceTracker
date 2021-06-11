#!/usr/bin/env node
// index.js

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


console.log(
    chalk.green(
      figlet.textSync('Financial Tracker', { horizontalLayout: 'full' })
    )
);