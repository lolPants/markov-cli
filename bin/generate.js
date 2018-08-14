const { parse } = require('path')
const chalk = require('chalk')
const { readAsync } = require('./fs.js')
const { generate, mapModel } = require('../src/index.js')

const generateCLI = async file => {
  try {
    let { ext } = parse(file)
    if (ext !== '.json') return console.log(`${chalk.red('ERROR:')} Model file must be a .json`)

    let modelRaw = await readAsync(file, 'utf8')
    let modelRawJson = JSON.parse(modelRaw)

    let model = mapModel(modelRawJson)
    let string = generate(model)

    console.log(string)
  } catch (err) {
    if (err.errno === -4058) return console.log(`${chalk.red('ERROR:')} File not found.`)
    if (err.name === 'SyntaxError') return console.log(`${chalk.red('ERROR:')} File contains invalid JSON.`)
    console.log(`${chalk.red('ERROR:')} ${err}`)
  }
}

module.exports = generateCLI
