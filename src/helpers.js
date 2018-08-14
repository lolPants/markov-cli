const fs = require('fs')
const util = require('util')

const readAsync = util.promisify(fs.readFile)
const writeAsync = util.promisify(fs.writeFile)

const mapModel = model => {
  let output = Object.entries(model)
    .map(x => {
      let [key, value] = x
      value.token = key

      let next = Object.entries(value.next)
        .map(y => {
          let [token, weight] = y
          return { token, weight }
        })
      value.next = next

      return value
    })
  return output
}

module.exports = { readAsync, writeAsync, mapModel }
