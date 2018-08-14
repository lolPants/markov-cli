#!/usr/bin/env node
const program = require('commander')
const analyze = require('./analyze.js')
const generate = require('./generate.js')

program
  .command('analyze <file>')
  .description('run setup commands for all envs')
  .action(analyze)

program
  .command('generate <file>')
  .action(generate)

program
  .version(require('../package.json').version)
  .parse(process.argv)

if (program.args.length === 0) program.help()
