#!/usr/bin/env node
const program = require('commander')
const analyze = require('./analyze.js')
const generate = require('./generate.js')

program
  .command('analyze <file>')
  .alias('a')
  .description('analyse file of strings and output a markov model')
  .option('-R, --readable', 'JSON output is formatted in a readble way')
  .action(analyze)

program
  .command('generate <model>')
  .alias('g')
  .description('read markov model and generate a string')
  .action(generate)

program
  .version(require('../package.json').version)
  .parse(process.argv)
