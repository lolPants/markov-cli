const { select } = require('weighted-array')

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
  let string = ''
  let startTokens = model.filter(x => x.start)

  /**
   * @type {Token}
   */
  let current = select(startTokens.map(x => ({ weight: x.count, value: x }))).value

  string += current.token

  while (true) { // eslint-disable-line
    let next = select(current.next.map(x => ({ weight: x.weight, value: x.token }))).value
    if (next === '\n') break

    current = model.find(x => x.token === next)
    string += ` ${current.token}`
  }

  return string
}

module.exports = { generate }
