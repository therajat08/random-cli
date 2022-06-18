#! /usr/bin/env node

const { program } = require('commander')
const list = require('./commands/list.js')
const add = require('./commands/add.js')
const randomFind = require('./commands/randomFind.js')

program
      .command('list')
      .description('List all items')
      .action(list)

program
      .command('add <list>')
      .description('Add a item to list')
      .action(add)

program
      .command('random-find')
      .description('List a random item')
      .action(randomFind)

program.parse();
