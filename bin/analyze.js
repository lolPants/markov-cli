const { parse } = require('path')
const chalk = require('chalk')
const { readAsync, writeAsync } = require('./fs.js')
const { analyze } = require('../src/index.js')

const analyzeCLI = async (file, options) => {
  try {
    let data = await readAsync(file, 'utf8')
    let readable = options.readable || false

    let lines = data.split('\n')
    let model = analyze(lines)

    let { name } = parse(file)
    let output = readable ? JSON.stringify(model, null, 2) : JSON.stringify(model)
    await writeAsync(`${name}.json`, output)
  } catch (err) {
    if (err.errno === -4058) return console.log(`${chalk.red('ERROR:')} File not found.`)
    console.log(`${chalk.red('ERROR:')} ${err}`)
  }
}

module.exports = analyzeCLI
