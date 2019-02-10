const { select } = require('weighted-map')
const { generateErrors: errors } = require('./helpers/errors.js')

/**
 * @typedef {Object} Token
 * @property {string} token
 * @property {number} count
 * @property {boolean} start
 * @property {Word[]} next
 */

/**
 * @typedef {Object} Word
 * @property {string} token
 * @property {number} weight
 */

/**
 * @param {Token[]} model Model Object
 * @returns {string}
 */
const generate = model => {
  // Input Validation
  if (!Array.isArray(model)) throw errors.invalidInput

  let string = ''
  let startTokens = model.filter(x => x.start)

  /**
   * @type {Map<Token, number>}
   */
  const map = new Map(startTokens.map(x => [x, x.count]))
  let current = select(map)

  string += current.token

  while (true) { // eslint-disable-line
    /**
     * @type {Map<string, number>}
     */
    const m = new Map(current.next.map(x => [x.token, x.weight]))
    let next = select(m)
    if (next === '\n') break

    current = model.find(x => x.token === next)
    string += ` ${current.token}`
  }

  return string
}

module.exports = { generate }
