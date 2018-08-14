const { readFile, writeFile } = require('fs')
const { promisify } = require('util')

const readAsync = promisify(readFile)
const writeAsync = promisify(writeFile)

module.exports = { readAsync, writeAsync }
