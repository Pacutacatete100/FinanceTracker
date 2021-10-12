#!/usr/bin/env node
// index.js

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
// const yargs = require('yargs')
var babar = require('babar');
var clui = require('clui');
const inquirer = require('inquirer');
const  argv  = require('yargs');


function month(){
  console.log('hello from month');
}

argv.command(
  "ft month",
  "getting month info",
  (yargs) => {},
  (argv) => {
    month();
  }

).argv;

console.log(
    chalk.green(
      figlet.textSync('Financial Tracker', { horizontalLayout: 'full' })
    )
);

// console.log(process.argv)
